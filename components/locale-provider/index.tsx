import en_US from './en_US';
import React, { useContext } from 'react';
import deepmerge from 'deepmerge';
export const LocaleContext = React.createContext(en_US);
// TODO: ts
export const LocaleProvider = (props: any) => (
  <LocaleContext.Provider {...props} />
);

export const useLocale = (locale: any = {}) => {
  const l = useContext(LocaleContext);
  return deepmerge(l, locale);
};
