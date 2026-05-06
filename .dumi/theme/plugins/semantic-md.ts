import fs from 'node:fs'
import path from 'node:path'

function toPascalCase(kebab: string): string {
  return kebab
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('')
}

function readFileSafe(filePath: string): string | null {
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf-8') : null
}

function buildSemanticMd(
  componentName: string,
  semanticTemplate: string,
  basicTsx: string | null,
  styleTsx: string | null,
): string {
  const displayName = toPascalCase(componentName)
  const parts: string[] = []

  parts.push(`## ${displayName}`)
  parts.push('')

  if (basicTsx) {
    parts.push('### Usage Example')
    parts.push('')
    parts.push('```jsx')
    parts.push(basicTsx.trim())
    parts.push('```')
    parts.push('')
  }

  if (styleTsx) {
    parts.push('### styles')
    parts.push('')
    parts.push('```tsx')
    parts.push(styleTsx.trim())
    parts.push('```')
    parts.push('')
  }

  parts.push(semanticTemplate.trim())
  parts.push('')

  return parts.join('\n')
}

/**
 * 生成每个组件的 semantic.md 文件
 *
 * 数据来源：.dumi/_llms/{component}/semantic.md（作为正文模板）
 * 向前拼接：Usage Example（components/{comp}/demo/basic.tsx）
 *           styles（components/{comp}/style/index.tsx）
 *
 * 输出：
 *   _site/components/{comp}/semantic.md   （EN 路由目录）
 *   _site/components/{comp}-cn/semantic.md（CN 路由目录，同内容）
 */
export function generateSemanticMdFiles(api: any) {
  const cwd = api.cwd
  const outputPath = path.join(cwd, (api.config.outputPath as string) ?? '_site')
  const llmsDir = path.join(cwd, '.dumi', '_llms')

  if (!fs.existsSync(llmsDir)) {
    api.logger.warn('[semantic-md] .dumi/_llms 目录不存在，跳过')
    return
  }

  const components = fs
    .readdirSync(llmsDir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)

  let count = 0
  for (const comp of components) {
    const semanticSrc = path.join(llmsDir, comp, 'semantic.md')
    if (!fs.existsSync(semanticSrc)) continue

    const semanticTemplate = fs.readFileSync(semanticSrc, 'utf-8')
    const basicTsx = readFileSafe(path.join(cwd, 'components', comp, 'demo', 'basic.tsx'))
    const styleTsx = readFileSafe(path.join(cwd, 'components', comp, 'style', 'index.tsx'))

    const content = buildSemanticMd(comp, semanticTemplate, basicTsx, styleTsx)

    for (const dirSuffix of ['', '-cn']) {
      const dest = path.join(outputPath, 'components', `${comp}${dirSuffix}`, 'semantic.md')
      fs.mkdirSync(path.dirname(dest), { recursive: true })
      fs.writeFileSync(dest, content, 'utf-8')
    }

    count++
  }

  api.logger.event(`[semantic-md] 生成了 ${count} 个组件的 semantic.md（EN + CN 各一份）`)
}

export default function semanticMdPlugin(api: any) {
  api.onBuildComplete(({ err }: { err: Error | null }) => {
    if (err) return
    generateSemanticMdFiles(api)
  })
}
