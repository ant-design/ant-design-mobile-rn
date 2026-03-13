import fs from 'node:fs'
import path from 'node:path'

function readFileSafe(filePath: string): string | null {
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf-8') : null
}

/**
 * 生成每个组件的 semantic.md 文件
 *
 * 数据来源：
 *   EN 模板：.dumi/_llms/{component}/semantic.md
 *   CN 模板：.dumi/_llms/{component}-cn/semantic.md（不存在时降级使用 EN 模板）
 *
 * 输出：
 *   _site/components/{comp}/semantic.md    （EN 路由目录）
 *   _site/components/{comp}-cn/semantic.md （CN 路由目录）
 *
 * 新格式模板已包含 Component Description、DOM Structure（JSON）和 Styles Schema（JSON），
 * 无需再向前拼接 Usage Example 或原始 styles TypeScript。
 */
export function generateSemanticMdFiles(api: any) {
  const cwd = api.cwd
  const outputPath = path.join(cwd, (api.config.outputPath as string) ?? '_site')
  const llmsDir = path.join(cwd, '.dumi', '_llms')

  if (!fs.existsSync(llmsDir)) {
    api.logger.warn('[semantic-md] .dumi/_llms 目录不存在，跳过')
    return
  }

  // Only process base component directories (skip -cn variants)
  const components = fs
    .readdirSync(llmsDir, { withFileTypes: true })
    .filter((e) => e.isDirectory() && !e.name.endsWith('-cn'))
    .map((e) => e.name)

  let count = 0
  for (const comp of components) {
    const enTemplateSrc = path.join(llmsDir, comp, 'semantic.md')
    if (!fs.existsSync(enTemplateSrc)) continue

    const enContent = fs.readFileSync(enTemplateSrc, 'utf-8')

    const cnTemplateSrc = path.join(llmsDir, `${comp}-cn`, 'semantic.md')
    const cnContent = readFileSafe(cnTemplateSrc) ?? enContent

    // Write EN version
    const enDest = path.join(outputPath, 'components', comp, 'semantic.md')
    fs.mkdirSync(path.dirname(enDest), { recursive: true })
    fs.writeFileSync(enDest, enContent, 'utf-8')

    // Write CN version
    const cnDest = path.join(outputPath, 'components', `${comp}-cn`, 'semantic.md')
    fs.mkdirSync(path.dirname(cnDest), { recursive: true })
    fs.writeFileSync(cnDest, cnContent, 'utf-8')

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
