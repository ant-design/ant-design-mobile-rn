import PropTypes from 'prop-types';
import React from 'react';
export interface Locale {
  /** zh_CN */
  locale: string;
  DatePicker: {
    /** 确定 */
    okText: string;
    /** 取消 */
    dismissText: string;
    /** 请选择 */
    extra: string;
    DatePickerLocale: {
      /** 年 */
      year: string;
      /** 月 */
      month: string;
      /** 日 */
      day: string;
      /** 时 */
      hour: string;
      /** 分 */
      minute: string;
      /** 上午 */
      am: string;
      /** 下午 */
      pm: string;
    };
  };
  DatePickerView: {
    /** 年 */
    year: string;
    /** 月 */
    month: string;
    /** 日 */
    day: string;
    /** 时 */
    hour: string;
    /** 分 */
    minute: string;
    /** 上午 */
    am: string;
    /** 下午 */
    pm: string;
  };
  InputItem: {
    /** 确定 */
    confirmLabel: string;
    /** 退格 */
    backspaceLabel: string;
    /** 收起键盘 */
    cancelKeyboardLabel: string;
  };
  Modal: {
    /** 确定 */
    okText: string;
    /** 取消 */
    cancelText: string;
    /** 按钮 */
    buttonText: string;
  };
  Pagination: {
    /** 上一页 */
    prevText: string;
    /** 下一页 */
    nextText: string;
  };
  Picker: {
    /** 确定 */
    okText: string;
    /** 取消 */
    dismissText: string;
    /** 请选择 */
    extra: string;
  };
  SearchBar: {
    /** 取消 */
    cancelText: string;
  };
  ListView: {
    /** 已加载完 */
    done: string;
    /** 加载中... */
    loading: string;
    /** 下拉刷新 */
    refreshableTitlePull: string;
    /** 释放加载 */
    refreshableTitleRelease: string;
    /** 加载中... */
    refreshableTitleRefreshing: string;
    /** 暂无数据 */
    noData: string;
  };
}
export interface LocaleProviderProps {
  locale?: Partial<Locale>;
  children?: React.ReactElement<any>;
}

export default class LocaleProvider extends React.Component<
  LocaleProviderProps,
  any
> {
  static propTypes = {
    locale: PropTypes.object,
  };

  static childContextTypes = {
    antLocale: PropTypes.object,
  };

  getChildContext() {
    return {
      antLocale: {
        ...this.props.locale,
        exist: true,
      },
    };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}
