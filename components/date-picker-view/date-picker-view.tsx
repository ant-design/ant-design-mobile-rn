import React from 'react'
import RCDatePicker from '../date-picker/datepicker'
import { getComponentLocale } from '../_util/getLocale'
import { DatePickerProps } from './PropsType'
import { LocaleContext } from '../locale-provider'
export default class DatePickerView extends React.Component<
  DatePickerProps,
  any
> {
  static defaultProps = {
    mode: 'datetime',
    // extra: '请选择',
    minuteStep: 1,
    use12Hours: false,
  }

  static contextType = LocaleContext

  render() {
    // tslint:disable-next-line:no-this-assignment
    const { props, context } = this
    const locale = getComponentLocale(props, context, 'DatePickerView', () =>
      require('./locale/zh_CN'),
    )

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
    )
  }
}
