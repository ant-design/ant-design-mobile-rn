import mergeWith from 'lodash.mergewith'
import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
} from 'react'
import defaultTheme from './themes/default'

export const ThemeContext = createContext(defaultTheme)
export type Theme = typeof defaultTheme & { [key: string]: any }
export type PartialTheme = Partial<Theme>
export interface ThemeProviderProps {
  value?: PartialTheme
  children?: ReactNode
}
export const ThemeProvider = (props: ThemeProviderProps) => {
  const { value, children } = props
  const theme = useMemo(() => ({ ...defaultTheme, ...value }), [value])
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
export interface UseThemeContextProps {
  theme?: PartialTheme
}

function customizer(objValue: any, srcValue: any) {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  } else {
    return [objValue, srcValue]
  }
}

// useTheme hook
export function useTheme<T>(props: {
  themeStyles: (theme: Theme) => T
  styles?: Partial<T>
}): T {
  const { themeStyles, styles } = props

  const theme = useContext(ThemeContext)

  const themeStylesMemo = useMemo(
    () => mergeWith(themeStyles(theme), styles, customizer),
    [styles, theme, themeStyles],
  )

  return themeStylesMemo
}

export interface WithThemeProps<T, S> {
  themeStyles?: (theme: Theme) => T
  styles?: S & { [key: string]: any }
  children: (
    // fix: styles[`${size}RawText`]
    styles: T & { [key: string]: any },
    theme: Theme,
  ) => ReactNode
}

/**
 * Component can extends this props
 */
export type WithThemeStyles<T> = { styles?: Partial<T> }

export function WithTheme<T, S>(props: WithThemeProps<T, S>) {
  const { children, themeStyles, styles } = props

  const cache = useRef<T | any>(undefined)

  const getStyles = useCallback(
    (theme: Theme) => {
      if (!cache.current && themeStyles) {
        cache.current = themeStyles(theme)
      }

      if (cache.current) {
        return mergeWith(cache.current, styles, customizer)
      }
      return styles
    },
    [themeStyles, styles],
  )

  return (
    <ThemeContext.Consumer>
      {(theme) => children(getStyles(theme), theme)}
    </ThemeContext.Consumer>
  )
}
