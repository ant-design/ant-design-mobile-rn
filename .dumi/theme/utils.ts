/**
 * Path/locale helpers for theme slots (dumi base mode: zh-CN base '/', en-US base '/en-US').
 */
export function isZhCN(pathname: string): boolean {
  return /-cn\/?$/.test(pathname)
}

export function getLocalizedPathname(path: string, zhCN: boolean): string {
  const pathname = path.startsWith('/') ? path : `/${path}`
  if (!zhCN) {
    // to enUS
    return /\/?index-cn/.test(pathname) ? '/' : pathname.replace('-cn', '')
  } else if (pathname === '/') {
    return '/index-cn'
  } else if (pathname.endsWith('/')) {
    return pathname.replace(/\/$/, '-cn/')
  }
  return `${pathname}-cn`
}

export function isLocalStorageNameSupported(): boolean {
  if (typeof window === 'undefined') return false
  const testKey = 'test'
  const storage = window.localStorage
  try {
    storage.setItem(testKey, '1')
    storage.removeItem(testKey)
    return true
  } catch (error) {
    return false
  }
}
