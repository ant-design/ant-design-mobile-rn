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
  value?: LocaleValue;
  children?: React.ReactNode;
}

export const LocaleProvider = (props: LocaleProviderProps = {}) => {
  const locale = deepmerge(en_US, props.value || {});
  return (
    <LocaleContext.Provider value={locale}>
      {props.children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (locale: Partial<Locale> = {}) => {
  const currentLocale = useContext(LocaleContext);
  return deepmerge(currentLocale, locale);
};

export default LocaleProvider;
