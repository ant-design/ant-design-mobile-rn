import useMergedState from 'rc-util/lib/hooks/useMergedState'
import React, {
  FunctionComponent,
  memo,
  useCallback,
  useContext,
  useMemo,
} from 'react'

import { getComponentLocale } from '../_util/getLocale'
import { mergeProps } from '../_util/with-default-props'
import { getValueExtend, usePickerValue } from '../date-picker/columns-extend'
import { generateDatePickerColumns } from '../date-picker/date-picker-utils'
import { LocaleContext } from '../locale-provider'
import RMCPickerView from '../picker-view/picker-view'
import { PickerViewStyle } from '../picker-view/style'
import { WithThemeStyles } from '../style'
import { DatePickerViewPropsType } from './PropsType'
import useRenderLabel from './useRenderLabel'

export interface DatePickerViewProps
  extends DatePickerViewPropsType,
    WithThemeStyles<PickerViewStyle> {}

const defaultProps = {
  minDate: new Date('2000-1-1'),
  maxDate: new Date('2030-1-1'),
  mode: 'date',
}

const DatePickerView: FunctionComponent<DatePickerViewProps> = memo((props) => {
  const p = mergeProps(defaultProps, props)
  const {
    value,
    defaultValue,
    minDate,
    maxDate,
    mode,
    precision,
    renderLabel,
    filter,
    ...restProps
  } = p

  const _precision = precision || (mode === 'date' ? 'day' : mode) || 'day'

  const [innerValue, setInnerValue] = useMergedState<Date>(new Date(), {
    value: value,
    defaultValue: defaultValue,
  })

  const _locale = getComponentLocale(
    p,
    useContext(LocaleContext),
    'DatePickerView',
    () => require('./locale/zh_CN'),
  )

  const mergedRenderLabel = useRenderLabel(renderLabel, _locale)

  const pickerValue = usePickerValue(innerValue, minDate, maxDate, _precision)

  const columns = useMemo(() => {
    return generateDatePickerColumns(
      pickerValue,
      minDate,
      maxDate,
      _precision,
      mergedRenderLabel,
      filter,
      false,
    )
  }, [maxDate, mergedRenderLabel, minDate, _precision, filter, pickerValue])

  const handleSelect = useCallback(
    (val: string, i: number) => {
      const pvalue = pickerValue.slice(0)
      pvalue[i] = val
      const { dateValue, extend } = getValueExtend(columns, pvalue, _precision)
      setInnerValue(dateValue)
      p.onChange?.(dateValue, {
        items: extend,
        columns,
      })
      p.onValueChange?.(dateValue, i)
    },
    [columns, _precision, p, pickerValue, setInnerValue],
  )

  return (
    <RMCPickerView
      {...restProps}
      value={pickerValue}
      columns={columns}
      handleSelect={handleSelect}
    />
  )
})

DatePickerView.displayName = 'Picker'

export default DatePickerView
