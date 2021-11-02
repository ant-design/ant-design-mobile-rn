import React from 'react'
import deepmerge from 'deepmerge'
import shallowequal from 'shallowequal'
import defaultTheme from './themes/default'

export const ThemeContext = React.createContext(defaultTheme)
export type Theme = typeof defaultTheme & { [key: string]: any }
export type PartialTheme = Partial<Theme>
export interface ThemeProviderProps {
  value?: PartialTheme
  children?: React.ReactNode
}
export const ThemeProvider = (props: ThemeProviderProps) => {
  const { value, children } = props
  const theme = React.useMemo(() => ({ ...defaultTheme, ...value }), [value])
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
export interface UseThemeContextProps {
  theme?: PartialTheme
}
export const useTheme = (props: UseThemeContextProps = {}) => {
  const theme = React.useContext(ThemeContext)
  return { ...theme, ...props.theme }
}

export interface WithThemeProps<T, S> {
  themeStyles?: (theme: Theme) => T
  styles?: S
  children: (
    // fix: styles[`${size}RawText`]
    styles: T & { [key: string]: any },
    theme: Theme,
  ) => React.ReactNode
}

/**
 * Component can extends this props
 */
export type WithThemeStyles<T> = { styles?: Partial<T> }

export function WithTheme<T, S>(props: WithThemeProps<T, S>) {
  const { children, themeStyles, styles } = props

  const stylesRef = React.useRef<S | undefined>(undefined)
  const cache = React.useRef<T | any>(undefined)

  const getStyles = React.useCallback(
    (theme: Theme) => {
      if (themeStyles && cache.current === undefined) {
        cache.current = themeStyles(theme)
      }

      // TODO: check these styles has changed
      if (styles && !shallowequal(stylesRef.current, styles)) {
        stylesRef.current = styles
        // merge styles from user defined
        cache.current = deepmerge<T>(cache.current, styles)
      }

      return cache.current || {}
    },
    [themeStyles, styles],
  )

  return (
    <ThemeContext.Consumer>
      {(theme) => children(getStyles(theme), theme)}
    </ThemeContext.Consumer>
  )
}
