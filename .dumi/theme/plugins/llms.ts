import fs from 'node:fs'
import path from 'node:path'
import { generateSemanticMdFiles } from './semantic-md'

const BASE_URL = 'https://rn.mobile.ant.design'

// ─────────────────────────────────────────────────────────────────────────────
// 通用工具
// ─────────────────────────────────────────────────────────────────────────────

interface DocItem {
  title: string
  /** 完整的绝对 URL，指向 .md 文件（供 LLM 抓取原始内容） */
  url: string
  category: 'docs' | 'component' | 'semantic'
  content: string
}

interface CollectResult {
  docs: DocItem[]
  components: DocItem[]
  semantics: DocItem[]
}

/** 去除 YAML frontmatter，返回 frontmatter 字段和正文 */
function stripFrontmatter(raw: string): { title: string; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) return { title: '', body: raw }

  const fm = match[1]
  const body = match[2]

  // 只取顶层 title: 字段
  const titleMatch = fm.match(/^title:\s*(.+)$/m)
  const title = titleMatch ? titleMatch[1].trim() : ''

  return { title, body }
}

/**
 * 将 md 内容里的 <code src="./demo/X.tsx"></code> 替换为对应文件的代码块。
 * @param content   md 正文
 * @param compDir   组件目录（用于解析相对路径）
 */
function replaceCodeSrc(content: string, compDir: string): string {
  return content.replace(
    /<code\s+src=["']([^"']+)["'][^>]*(?:\/>|>(?:\s*<\/code>)?)/g,
    (_, srcPath: string) => {
      const fullPath = path.resolve(compDir, srcPath)
      if (!fs.existsSync(fullPath)) {
        return `\`\`\`tsx\n// File not found: ${srcPath}\n\`\`\``
      }
      const code = fs.readFileSync(fullPath, 'utf-8').trim()
      return `\`\`\`tsx\n${code}\n\`\`\``
    },
  )
}

/** 递归收集目录下所有 .md 文件的相对路径（相对 baseDir） */
function walkMdFiles(dir: string, baseDir: string, results: string[] = []): string[] {
  if (!fs.existsSync(dir)) return results
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkMdFiles(fullPath, baseDir, results)
    } else if (entry.name.endsWith('.md')) {
      results.push(path.relative(baseDir, fullPath))
    }
  }
  return results
}

function extractTitle(content: string, fallback: string): string {
  const match = content.match(/^#\s+(.+)$/m)
  return match ? match[1].trim() : fallback
}

function sortByTitle(items: DocItem[]) {
  items.sort((a, b) => a.title.localeCompare(b.title))
}

function joinSections(...blocks: string[][]): string {
  return blocks.flat().join('\n')
}

// ─────────────────────────────────────────────────────────────────────────────
// 第一步：生成 _site/components/{comp}[.md|-cn.md] 和 _site/changelog[.md|-cn.md]
// ─────────────────────────────────────────────────────────────────────────────

/**
 * 从 components/{comp}/index.en-US.md 和 index.zh-CN.md 生成
 * _site/components/{comp}.md 和 _site/components/{comp}-cn.md。
 *
 * 处理逻辑：
 *   1. 去除 YAML frontmatter，将 title 作为 H1 补在正文前
 *   2. 把 <code src="./demo/X.tsx"></code> 替换为对应文件的 tsx 代码块
 */
function generateComponentMdFiles(api: any) {
  const cwd: string = api.cwd
  const siteDir = path.join(cwd, (api.config.outputPath as string) ?? '_site')
  const componentsDir = path.join(cwd, 'components')

  if (!fs.existsSync(componentsDir)) return

  const locales: Array<{ suffix: string; mdFile: string }> = [
    { suffix: '', mdFile: 'index.en-US.md' },
    { suffix: '-cn', mdFile: 'index.zh-CN.md' },
  ]

  let count = 0
  for (const entry of fs.readdirSync(componentsDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    const comp = entry.name
    const compDir = path.join(componentsDir, comp)

    for (const { suffix, mdFile } of locales) {
      const srcPath = path.join(compDir, mdFile)
      if (!fs.existsSync(srcPath)) continue

      const raw = fs.readFileSync(srcPath, 'utf-8')
      const { title, body } = stripFrontmatter(raw)

      // 替换 <code src> 为实际代码块
      const processed = replaceCodeSrc(body.trim(), compDir)

      // 将 frontmatter 里的 title 作为 H1
      const finalContent = title ? `# ${title}\n\n${processed}\n` : `${processed}\n`

      const dest = path.join(siteDir, 'components', `${comp}${suffix}.md`)
      fs.mkdirSync(path.dirname(dest), { recursive: true })
      fs.writeFileSync(dest, finalContent, 'utf-8')
      count++
    }
  }

  api.logger.info(`[llms] 生成了 ${count} 个组件文档 md 文件`)
}

/**
 * 将 docs/**\/*.en-US.md / docs/**\/*.zh-CN.md 镜像到 _site/docs/ 下。
 *
 * 命名规则：
 *   docs/blog/headless.en-US.md  →  _site/docs/blog/headless.md
 *   docs/blog/headless.zh-CN.md  →  _site/docs/blog/headless-cn.md
 */
function generateDocsMdFiles(api: any) {
  const cwd: string = api.cwd
  const siteDir = path.join(cwd, (api.config.outputPath as string) ?? '_site')
  const docsDir = path.join(cwd, 'docs')

  if (!fs.existsSync(docsDir)) return

  let count = 0

  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        walk(fullPath)
        continue
      }
      if (!entry.name.endsWith('.md')) continue

      const rel = path.relative(docsDir, fullPath) // e.g. blog/headless.en-US.md

      let destName: string
      if (entry.name.endsWith('.en-US.md')) {
        destName = entry.name.replace(/\.en-US\.md$/, '.md')
      } else if (entry.name.endsWith('.zh-CN.md')) {
        destName = entry.name.replace(/\.zh-CN\.md$/, '-cn.md')
      } else {
        // 无 locale 后缀，直接保留文件名
        destName = entry.name
      }

      const destDir = path.join(siteDir, 'docs', path.dirname(rel))
      const dest = path.join(destDir, destName)

      const raw = fs.readFileSync(fullPath, 'utf-8')
      const { title, body } = stripFrontmatter(raw)
      const processed = replaceCodeSrc(body.trim(), dir)
      const finalContent = title ? `# ${title}\n\n${processed}\n` : `${processed}\n`

      fs.mkdirSync(destDir, { recursive: true })
      fs.writeFileSync(dest, finalContent, 'utf-8')
      count++
    }
  }

  walk(docsDir)
  api.logger.info(`[llms] 生成了 ${count} 个 docs md 文件`)
}

/**
 * 将 CHANGELOG.en-US.md / CHANGELOG.zh-CN.md 复制到 _site/changelog.md / changelog-cn.md
 */
function generateChangelogMd(api: any) {
  const cwd: string = api.cwd
  const siteDir = path.join(cwd, (api.config.outputPath as string) ?? '_site')

  const sources: Array<{ src: string; dest: string }> = [
    { src: 'CHANGELOG.en-US.md', dest: 'changelog.md' },
    { src: 'CHANGELOG.zh-CN.md', dest: 'changelog-cn.md' },
  ]

  for (const { src, dest } of sources) {
    const srcPath = path.join(cwd, src)
    if (!fs.existsSync(srcPath)) continue
    const raw = fs.readFileSync(srcPath, 'utf-8')
    const { body } = stripFrontmatter(raw)
    fs.writeFileSync(path.join(siteDir, dest), `${body.trim()}\n`, 'utf-8')
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// 第二步：扫描 _site/**/*.md，聚合生成 llms* 文件
// ─────────────────────────────────────────────────────────────────────────────

function collectFiles(mdFiles: string[], siteDir: string): CollectResult {
  const result: CollectResult = { docs: [], components: [], semantics: [] }

  for (const rel of mdFiles) {
    const fullPath = path.join(siteDir, rel)
    const content = fs.readFileSync(fullPath, 'utf-8').trim()
    if (!content) continue

    const urlPath = rel.replace(/\\/g, '/')
    const url = `${BASE_URL}/${urlPath}`
    const title = extractTitle(content, path.basename(rel, '.md'))

    if (/\/semantic[\w-]*\.md$/.test(rel)) {
      // components/{comp}/semantic.md 或 components/{comp}-cn/semantic.md
      const compDir = path.basename(path.dirname(rel))
      const compBase = compDir.replace(/-cn$/, '')
      result.semantics.push({ title: `${compBase} Semantic`, url, category: 'semantic', content })
    } else if (/^components\/[^/]+\.md$/.test(rel)) {
      // components/{comp}.md 或 components/{comp}-cn.md
      result.components.push({ title, url, category: 'component', content })
    } else if (/^changelog/.test(rel) || /^docs\//.test(rel)) {
      result.docs.push({ title, url, category: 'docs', content })
    }
  }

  return result
}

async function generateLlmsFiles(api: any) {
  const siteDir = path.join(api.cwd, (api.config.outputPath as string) ?? '_site')

  if (!fs.existsSync(siteDir)) {
    api.logger.error('[llms] 输出目录不存在，请先执行 build')
    return
  }

  // 收集所有 .md 文件，排除已生成的 llms* 文件
  const allMd = walkMdFiles(siteDir, siteDir).filter(
    (f) => !path.basename(f).startsWith('llms'),
  )

  const enMd = allMd.filter((f) => !f.includes('-cn/') && !f.endsWith('-cn.md'))
  const cnMd = allMd.filter((f) => f.includes('-cn/') || f.endsWith('-cn.md'))

  const en = collectFiles(enMd, siteDir)
  const cn = collectFiles(cnMd, siteDir)

  sortByTitle(en.docs)
  sortByTitle(en.components)
  sortByTitle(en.semantics)
  sortByTitle(cn.docs)
  sortByTitle(cn.components)
  sortByTitle(cn.semantics)

  // ─── 1. llms-semantic.md（EN 聚合所有 semantic 内容） ────────────────────
  const semanticMd = joinSections(
    [
      '# Ant Design Mobile RN Semantic Documentation',
      '',
      'Aggregated semantic descriptions for all components.',
      '',
      `> ${en.semantics.length} components with semantic descriptions`,
      '',
    ],
    en.semantics.flatMap((s) => [
      `# ${s.title}`,
      '',
      `Source: ${s.url}`,
      '',
      s.content,
      '',
      '---',
      '',
    ]),
  )

  // ─── 2. llms-semantic-cn.md（CN 聚合） ───────────────────────────────────
  const semanticMdCn = joinSections(
    [
      '# Ant Design Mobile RN 组件语义化描述',
      '',
      '所有组件语义化描述的聚合文档。',
      '',
      `> 共 ${cn.semantics.length} 个组件包含语义化描述`,
      '',
    ],
    cn.semantics.flatMap((s) => [
      `# ${s.title}`,
      '',
      `Source: ${s.url}`,
      '',
      s.content,
      '',
      '---',
      '',
    ]),
  )

  // ─── 3. llms-full.txt（EN 全量组件文档） ─────────────────────────────────
  const fullTxt = joinSections(
    [
      '# Ant Design Mobile RN Component Documentation',
      '',
      'Aggregated content from all component docs.',
      '',
      `> ${en.components.length} components`,
      '',
    ],
    en.components.flatMap((c) => [
      `## ${c.title}`,
      '',
      `Source: ${c.url}`,
      '',
      c.content,
      '',
      '---',
      '',
    ]),
  )

  // ─── 4. llms-full-cn.txt（CN 全量组件文档） ──────────────────────────────
  const fullTxtCn = joinSections(
    [
      '# Ant Design Mobile RN 组件文档',
      '',
      '所有组件文档的聚合内容。',
      '',
      `> 共 ${cn.components.length} 个组件`,
      '',
    ],
    cn.components.flatMap((c) => [
      `## ${c.title}`,
      '',
      `Source: ${c.url}`,
      '',
      c.content,
      '',
      '---',
      '',
    ]),
  )

  // ─── 5. llms.txt（导航索引） ──────────────────────────────────────────────
  const llmsTxt = joinSections(
    [
      '# Ant Design Mobile RN',
      '',
      '- Ant Design Mobile RN is a React Native UI library that provides high-quality components for mobile application development.',
      '',
      '## Navigation',
      '',
      `- [Full Documentation (EN)](${BASE_URL}/llms-full.txt)`,
      `- [Full Documentation (CN)](${BASE_URL}/llms-full-cn.txt)`,
      `- [Semantic Documentation (EN)](${BASE_URL}/llms-semantic.md)`,
      `- [Semantic Documentation (CN)](${BASE_URL}/llms-semantic-cn.md)`,
      '',
      '## Docs (EN)',
      '',
    ],
    en.docs.map(({ title, url }) => `- [${title}](${url})`),
    [
      '',
      '## Docs (CN)',
      '',
    ],
    cn.docs.map(({ title, url }) => `- [${title}](${url})`),
    [
      '',
      '## Components (EN)',
      '',
    ],
    en.components.map(({ title, url }) => `- [${title}](${url})`),
    [
      '',
      '## Components (CN)',
      '',
    ],
    cn.components.map(({ title, url }) => `- [${title}](${url})`),
    [
      '',
      '## Semantic (EN)',
      '',
    ],
    en.semantics.map(({ title, url }) => `- [${title}](${url})`),
    [
      '',
      '## Semantic (CN)',
      '',
    ],
    cn.semantics.map(({ title, url }) => `- [${title}](${url})`),
    [''],
  )

  // ─── 写入文件 ─────────────────────────────────────────────────────────────
  const write = (name: string, content: string) => {
    fs.writeFileSync(path.join(siteDir, name), content, 'utf-8')
    api.logger.info(`[llms] wrote ${name}`)
  }

  write('llms.txt', llmsTxt)
  write('llms-full.txt', fullTxt)
  write('llms-full-cn.txt', fullTxtCn)
  write('llms-semantic.md', semanticMd)
  write('llms-semantic-cn.md', semanticMdCn)

  api.logger.event(
    `[llms] 生成完毕 — llms.txt | llms-full.txt (${en.components.length} comps) | llms-full-cn.txt (${cn.components.length} comps) | llms-semantic.md (${en.semantics.length}) | llms-semantic-cn.md (${cn.semantics.length})`,
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 插件入口
// ─────────────────────────────────────────────────────────────────────────────

export default function llmsPlugin(api: any) {
  api.onBuildComplete(async ({ err }: { err: Error | null }) => {
    if (err) return

    // 1. 生成各组件 semantic.md
    generateSemanticMdFiles(api)

    // 2. 生成 _site/components/{comp}.md（含 <code src> 替换）
    generateComponentMdFiles(api)

    // 3. 生成 _site/docs/**/*.md（blog / react 等文档）
    generateDocsMdFiles(api)

    // 4. 生成 _site/changelog.md
    generateChangelogMd(api)

    // 5. 聚合生成 llms* 文件
    await generateLlmsFiles(api)
  })
}
