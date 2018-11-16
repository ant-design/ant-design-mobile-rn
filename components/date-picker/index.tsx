/* tslint:disable:jsx-no-multiline-js */
import { StyleSheet } from 'react-native';
import RCDatePicker from 'rmc-date-picker/lib/DatePicker';
import PopupDatePicker from 'rmc-date-picker/lib/Popup';
import PickerStyle, { IPickerStyle } from '../picker/style/index';
import { DatePickerPropsType } from './PropsType';
import { formatProps } from './utils';
import { useLocale } from '../locale-provider';
import React from 'react';

export interface DatePickerNativeProps extends DatePickerPropsType {
  styles?: IPickerStyle;
  triggerTypes?: string;
}

const PickerStyles = StyleSheet.create<any>(PickerStyle);
DatePicker.defaultProps = {
  mode: 'datetime',
  triggerType: 'onClick',
  styles: PickerStyles,
  minuteStep: 1,
};
export default function DatePicker(props: DatePickerNativeProps) {
  const { children, value, styles } = props;
  // const locale = getComponentLocale(props, (this as any).context, 'DatePicker', () =>
  //   require('./locale/zh_CN'),
  // );

  const { DatePicker: locale } = useLocale();
  const { okText, dismissText, extra, DatePickerLocale } = locale;

  const dataPicker = (
    <RCDatePicker
      minuteStep={props.minuteStep}
      locale={DatePickerLocale}
      mode={props.mode}
      minDate={props.minDate}
      maxDate={props.maxDate}
      defaultDate={value}
      onValueChange={props.onValueChange}
    />
  );

  return (
    <PopupDatePicker
      datePicker={dataPicker}
      styles={styles}
      {...props as any}
      date={value}
      dismissText={props.dismissText || dismissText}
      okText={props.okText || okText}
    >
      {children &&
        React.isValidElement(children) &&
        // TODO: fix ts error
        React.cloneElement<object, any>(children as any, {
          extra: value ? formatProps(props, value) : props.extra || extra,
        })}
    </PopupDatePicker>
  );
}
