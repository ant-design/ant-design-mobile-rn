import React from 'react';
import RCDatePicker from 'rmc-date-picker/lib/DatePicker';
import { DatePickerProps } from './PropsType';
import { useLocale } from '../locale-provider';
DatePickerView.defaultProps = {
  mode: 'datetime',
  // extra: '请选择',
  prefixCls: 'am-picker',
  pickerPrefixCls: 'am-picker-col',
  minuteStep: 1,
  use12Hours: false,
};
export default function DatePickerView(props: DatePickerProps) {
  const { DatePickerView: locale } = useLocale();
  // DatePicker use `defaultDate`, maybe because there are PopupDatePicker inside? @yiminghe
  // Here Use `date` instead of `defaultDate`, make it controlled fully.
  return (
    <RCDatePicker
      {...props}
      locale={locale}
      date={props.value}
      onDateChange={props.onChange}
      onValueChange={props.onValueChange}
      onScrollChange={props.onScrollChange}
    />
  );
}
