import type { ValidateMessages } from 'rc-field-form/lib/interface'
import React from 'react'

export interface Locale {
  /** zh_CN */
  locale: string
  DatePicker: {
    /** 确定 */
    okText: string
    /** 取消 */
    dismissText: string
    /** 请选择 */
    extra: string
    DatePickerLocale: {
      /** 年 */
      year: string
      /** 月 */
      month: string
      /** 日 */
      day: string
      /** 时 */
      hour: string
      /** 分 */
      minute: string
      /** 上午 */
      am: string
      /** 下午 */
      pm: string
    }
  }
  DatePickerView: {
    /** 年 */
    year: string
    /** 月 */
    month: string
    /** 日 */
    day: string
    /** 时 */
    hour: string
    /** 分 */
    minute: string
    /** 上午 */
    am: string
    /** 下午 */
    pm: string
  }
  InputItem: {
    /** 确定 */
    confirmLabel: string
    /** 退格 */
    backspaceLabel: string
    /** 收起键盘 */
    cancelKeyboardLabel: string
  }
  Modal: {
    /** 确定 */
    okText: string
    /** 取消 */
    cancelText: string
    /** 按钮 */
    buttonText: string
  }
  Pagination: {
    /** 上一页 */
    prevText: string
    /** 下一页 */
    nextText: string
  }
  Picker: {
    /** 确定 */
    okText: string
    /** 取消 */
    dismissText: string
    /** 请选择 */
    extra: string
  }
  SearchBar: {
    /** 取消 */
    cancelText: string
  }
  ListView: {
    /** 已加载完 */
    done: string
    /** 加载中... */
    loading: string
    /** 下拉刷新 */
    refreshableTitlePull: string
    /** 释放加载 */
    refreshableTitleRelease: string
    /** 加载中... */
    refreshableTitleRefreshing: string
    /** 暂无数据 */
    noData: string
  }
  Form: {
    optional?: string
    defaultValidateMessages: ValidateMessages
  }
}
export interface LocaleProviderProps {
  locale?: Partial<Locale>
  children?: React.ReactNode
}

export type LocaleContextProps = {
  antLocale: Partial<Locale & { exist: boolean }>
}

export const LocaleContext = React.createContext<
  LocaleContextProps | undefined
>(undefined)

const LocaleProvider: React.FC<LocaleProviderProps> = (props) => {
  const locale = React.useMemo(() => {
    return { antLocale: { ...props.locale, exist: true } }
  }, [props.locale])
  return (
    <LocaleContext.Provider value={locale}>
      {props.children}
    </LocaleContext.Provider>
  )
}

LocaleProvider.displayName = 'LocaleProvider'

export default React.memo(LocaleProvider)
