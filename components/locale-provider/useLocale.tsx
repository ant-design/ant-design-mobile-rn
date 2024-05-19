import type { Locale } from '.'

import * as React from 'react'
import { LocaleContext } from './index'
import defaultLocaleData from './zh_CN'

export type LocaleComponentName = Exclude<keyof Locale, 'locale'>

const useLocale = <C extends LocaleComponentName = LocaleComponentName>(
  componentName: C,
  defaultLocale?: Locale[C] | (() => Locale[C]),
): readonly [NonNullable<Locale[C]>, string] => {
  const fullLocale = React.useContext(LocaleContext)
  // @ts-ignore
  const getLocale = React.useMemo<NonNullable<Locale[C]>>(() => {
    const locale = defaultLocale || defaultLocaleData[componentName]
    const localeFromContext = fullLocale?.antLocale?.[componentName] ?? {}
    return {
      ...(typeof locale === 'function' ? locale() : locale),
      ...(localeFromContext || {}),
    }
  }, [componentName, defaultLocale, fullLocale])

  const getLocaleCode = React.useMemo<string>(() => {
    const localeCode = fullLocale?.antLocale?.locale
    // Had use LocaleProvide but didn't set locale
    if (fullLocale?.antLocale.exist && !localeCode) {
      return defaultLocaleData.locale
    }
    return localeCode!
  }, [fullLocale])

  return [getLocale, getLocaleCode] as const
}

export default useLocale
