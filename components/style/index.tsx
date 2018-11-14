import React from 'react';
import defaultTheme from './themes/default';
export const ThemeContext = React.createContext(defaultTheme);

export type Theme = Partial<typeof defaultTheme>;
export interface ThemeProviderProps {
  value?: Theme;
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
