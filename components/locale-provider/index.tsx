import en_US from './en_US';
import React, { useContext } from 'react';
import deepmerge from 'deepmerge';
export const LocaleContext = React.createContext(en_US);
export interface Locale {
  DatePicker: any;
  DatePickerView: any;
  InputItem: any;
  Modal: any;
  Pagination: any;
  Picker: any;
  SearchBar: any;
}

export type LocaleValue = Locale & { locale: string };
export interface LocaleProviderProps {
  value: Locale & { locale: string };
  children?: React.ReactNode;
}

export const LocaleProvider = (props: LocaleProviderProps) => {
  return <LocaleContext.Provider {...props} />;
};

export const useLocale = (locale: Partial<Locale> = {}) => {
  const l = useContext(LocaleContext);
  return deepmerge(l, locale);
};

export default LocaleProvider;
