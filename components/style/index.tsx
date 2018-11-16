import React, { useContext } from 'react';
import defaultTheme from './themes/default';
export const ThemeContext = React.createContext(defaultTheme);

export type Theme = typeof defaultTheme
export type PartialTheme = Partial<Theme>;
export interface ThemeProviderProps {
  value?: PartialTheme;
  children?: React.ReactNode;
}
export const ThemeProvider = (props: ThemeProviderProps) => {
  const theme = { ...defaultTheme, ...props.value };
  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export interface UseThemeContextProps {
  theme?: PartialTheme;
}
export const useTheme = (props: UseThemeContextProps = {}) => {
  const theme = useContext(ThemeContext);
  return { ...theme, ...props.theme };
};
