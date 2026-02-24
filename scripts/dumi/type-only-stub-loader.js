/**
 * Webpack loader: 为仅含 type/interface 导出的 .tsx 模块注入运行时 stub 导出，
 * 解决 "module has no exports"（re-export 时报错）。不修改业务源码，仅构建兼容。
 */
function extractExportNames(source) {
  const names = []
  const typeExportRe = /export\s+(?:type|interface)\s+(\w+)/g
  let m
  while ((m = typeExportRe.exec(source)) !== null) {
    if (!names.includes(m[1])) {
      names.push(m[1])
    }
  }
  return names
}

module.exports = function (source) {
  const names = extractExportNames(source)
  if (names.length === 0) {
    return source
  }
  const stubs = names
    .map((n) => `export const ${n} = undefined as any`)
    .join('\n')
  return `${source}\n\n// stub exports for type-only re-export compatibility\n${stubs}\n`
}
