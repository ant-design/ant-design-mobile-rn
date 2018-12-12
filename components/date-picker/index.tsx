
import PropTypes from 'prop-types';
import React from 'react';
import PickerStyles, { PickerStyle } from '../picker/style/index';
import { WithTheme, WithThemeStyles } from '../style';
import { getComponentLocale } from '../_util/getLocale';
import RCDatePicker from './datepicker';
import PopupDatePicker from './datepicker/Popup';
import { DatePickerPropsType } from './PropsType';
import { formatProps } from './utils';

export interface DatePickerProps
  extends DatePickerPropsType,
    WithThemeStyles<PickerStyle> {
  triggerTypes?: string;
}

export default class DatePicker extends React.Component<DatePickerProps> {
  static defaultProps = {
    mode: 'datetime',
    triggerType: 'onClick',
    minuteStep: 1,
  };
  static contextTypes = {
    antLocale: PropTypes.object,
  };
  render() {
    const { children, value } = this.props;
    const locale = getComponentLocale(
      this.props,
      (this as any).context,
      'DatePicker',
      () => require('./locale/zh_CN'),
    );

    const { okText, dismissText, extra, DatePickerLocale } = locale;

    const dataPicker = (
      <RCDatePicker
        minuteStep={this.props.minuteStep}
        locale={DatePickerLocale}
        mode={this.props.mode}
        minDate={this.props.minDate}
        maxDate={this.props.maxDate}
        defaultDate={value}
        onValueChange={this.props.onValueChange}
      />
    );

    return (
      <WithTheme styles={this.props.styles} themeStyles={PickerStyles}>
        {styles => (
          <PopupDatePicker
            datePicker={dataPicker}
            styles={styles}
            {...this.props as any}
            date={value}
            dismissText={this.props.dismissText || dismissText}
            okText={this.props.okText || okText}
          >
            {children &&
              React.isValidElement(children) &&
              // TODO: fix ts error
              React.cloneElement<object, any>(children as any, {
                extra: value
                  ? formatProps(this.props, value)
                  : this.props.extra || extra,
              })}
          </PopupDatePicker>
        )}
      </WithTheme>
    );
  }
}
