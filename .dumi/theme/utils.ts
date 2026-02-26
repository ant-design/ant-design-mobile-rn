/**
 * Path/locale helpers for theme slots (dumi base mode: zh-CN base '/', en-US base '/en-US').
 */
export function isZhCN(pathname: string): boolean {
  return !pathname.startsWith('/en-US')
}

export function getLocalizedPathname(path: string, zhCN: boolean): string {
  const pathname = path.startsWith('/') ? path : `/${path}`
  if (zhCN) {
    return pathname.replace(/^\/en-US(\/|$)/, (_, s) => (s === '/' ? '/' : '')) || '/'
  }
  if (pathname.startsWith('/en-US')) return pathname
  return pathname === '/' ? '/en-US' : `/en-US${pathname}`
}

export function isLocalStorageNameSupported(): boolean {
  if (typeof window === 'undefined') return false
  const testKey = 'test'
  const storage = window.localStorage
  try {
    storage.setItem(testKey, '1')
    storage.removeItem(testKey)
    return true
  } catch {
    return false
  }
}
