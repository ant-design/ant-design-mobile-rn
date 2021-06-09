import React from 'react'
import PickerStyles, { PickerStyle } from '../picker/style/index'
import { WithTheme, WithThemeStyles } from '../style'
import { getComponentLocale } from '../_util/getLocale'
import AntDatePicker from './datepicker'
import PopupDatePicker from './datepicker/Popup'
import { DatePickerPropsType } from './PropsType'
import { formatProps } from './utils'
import { LocaleContext } from '../locale-provider'

export interface DatePickerProps
  extends DatePickerPropsType,
    WithThemeStyles<PickerStyle> {
  triggerTypes?: string
}

export default class DatePicker extends React.Component<DatePickerProps> {
  static defaultProps = {
    mode: 'datetime',
    triggerType: 'onPress',
    minuteStep: 1,
  }
  static contextType = LocaleContext
  render() {
    const { children, value, defaultDate, itemStyle, ...restProps } = this.props
    const locale = getComponentLocale(
      this.props,
      (this as any).context,
      'DatePicker',
      () => require('./locale/zh_CN'),
    )

    const { okText, dismissText, extra, DatePickerLocale } = locale

    const dataPicker = (
      <AntDatePicker
        minuteStep={this.props.minuteStep}
        locale={DatePickerLocale}
        mode={this.props.mode}
        minDate={this.props.minDate}
        maxDate={this.props.maxDate}
        defaultDate={defaultDate}
        date={value}
        onValueChange={this.props.onValueChange}
        itemStyle={itemStyle}
      />
    )

    return (
      <WithTheme styles={restProps.styles} themeStyles={PickerStyles}>
        {(styles) => (
          <PopupDatePicker
            datePicker={dataPicker}
            {...(restProps as any)}
            styles={styles}
            date={value}
            dismissText={this.props.dismissText || dismissText}
            okText={this.props.okText || okText}>
            {children &&
              React.isValidElement(children) &&
              React.cloneElement<object, any>(children as any, {
                extra: value
                  ? formatProps(this.props, value)
                  : this.props.extra || extra,
              })}
          </PopupDatePicker>
        )}
      </WithTheme>
    )
  }
}
