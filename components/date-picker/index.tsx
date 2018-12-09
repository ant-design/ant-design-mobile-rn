/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import RCDatePicker from 'rmc-date-picker/lib/DatePicker';
import PopupDatePicker from 'rmc-date-picker/lib/Popup';
import PickerStyles, { PickerStyle } from '../picker/style/index';
import { WithTheme, WithThemeStyles } from '../style';
import { getComponentLocale } from '../_util/getLocale';
import { DatePickerPropsType } from './PropsType';
import { formatProps } from './utils';

export interface DatePickerProps
  extends DatePickerPropsType,
    WithThemeStyles<PickerStyle> {
  triggerTypes?: string;
}

DatePicker.defaultProps = {
  mode: 'datetime',
  triggerType: 'onClick',
  minuteStep: 1,
};
export default function DatePicker(props: DatePickerProps) {
  const { children, value } = props;
  const locale = getComponentLocale(
    props,
    (this as any).context,
    'DatePicker',
    () => require('./locale/zh_CN'),
  );

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
    <WithTheme styles={props.styles} themeStyles={PickerStyles}>
      {styles => (
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
      )}
    </WithTheme>
  );
}
