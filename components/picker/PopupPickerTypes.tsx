import React from 'react';

export type IPopupPickerProps = {
  picker?: any;
  value?: any;
  triggerType?: string;
  WrapComponent?: any;
  dismissText?: string | React.ReactElement<any>; // React.ReactElement only for web
  okText?: string | React.ReactElement<any>; // React.ReactElement only for web
  title?: string | React.ReactElement<any>; // React.ReactElement only for web
  visible?: boolean;
  disabled?: boolean;
  onOk?: (value?: any) => void;
  style?: any;
  onVisibleChange?: (visible: boolean) => void;
  content?: React.ReactElement<any> | string;
  onDismiss?: () => void;
  /** react-native only */
  styles?: any;
  actionTextUnderlayColor?: string;
  actionTextActiveOpacity?: number;
  /** web only */
  wrapStyle?: React.CSSProperties;
  prefixCls?: string;
  className?: string;
  pickerValueProp?: string;
  pickerValueChangeProp?: string;
  transitionName?: string;
  popupTransitionName?: string;
  maskTransitionName?: string;
};
