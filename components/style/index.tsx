import React from 'react'
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

// useTheme hook
export function useTheme<T>(props: {
  themeStyles: (theme: Theme) => T
  styles?: Partial<T>
}): T {
  const theme = React.useContext(ThemeContext)
  const { themeStyles, styles } = props

  const stylesRef = React.useRef<Partial<T>>({})
  const cache = React.useRef<T | any>(themeStyles(theme))

  return React.useMemo(() => {
    if (styles && !shallowequal(stylesRef.current, styles)) {
      stylesRef.current = styles
      const themeStyle = themeStyles(theme)
      // merge styles from user defined
      for (let key in styles) {
        if (cache.current[key]) {
          cache.current[key] = [themeStyle[key], styles[key]]
        }
      }
    }

    return cache.current
  }, [styles, theme, themeStyles])
}

export interface WithThemeProps<T, S> {
  themeStyles?: (theme: Theme) => T
  styles?: S & { [key: string]: any }
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
      if (!cache.current) {
        cache.current = themeStyles?.(theme) as typeof styles
      }

      if (styles && !shallowequal(stylesRef.current, styles)) {
        stylesRef.current = styles
        const themeStyle = themeStyles?.(theme) as typeof styles
        // merge styles from user defined
        for (let key in styles) {
          if (cache.current[key]) {
            cache.current[key] = [themeStyle[key], styles[key]]
          }
        }
      }

      return cache.current
    },
    [themeStyles, styles],
  )

  return (
    <ThemeContext.Consumer>
      {(theme) => children(getStyles(theme), theme)}
    </ThemeContext.Consumer>
  )
}
