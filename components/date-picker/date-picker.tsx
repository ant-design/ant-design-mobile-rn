import dayjs from 'dayjs'
import useMergedState from 'rc-util/lib/hooks/useMergedState'
import React, {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react'
import { getComponentLocale } from '../_util/getLocale'
import { mergeProps } from '../_util/with-default-props'
import useRenderLabel from '../date-picker-view/useRenderLabel'
import { LocaleContext } from '../locale-provider'
import RMCPicker, { PickerRef } from '../picker/Picker'
import { DatePickerPropsType } from './PropsType'
import { getValueExtend, usePickerValue } from './columns-extend'
import {
  convertStringArrayToDate,
  generateDatePickerColumns,
} from './date-picker-utils'

export type DatePickerRef = any

export interface DatePickerProps extends DatePickerPropsType {}

const defaultProps = {
  minDate: dayjs('2000-1-1').toDate(),
  maxDate: dayjs('2030-1-1').toDate(),
  precision: 'day',
}

const DatePicker = forwardRef<DatePickerRef, DatePickerProps>((props, ref) => {
  const p = mergeProps(defaultProps, props)
  const {
    value,
    defaultValue,
    defaultDate,
    minDate,
    maxDate,
    mode,
    precision,
    renderLabel,
    filter,
    ...restProps
  } = p

  const _precision = precision || (mode === 'date' ? 'day' : mode) || 'day'

  // ============ Effect ===========
  const [valueProp, setValueProp] = useMergedState<Date | undefined>(
    undefined,
    {
      value,
      defaultValue: defaultValue || defaultDate,
    },
  )
  const [innerValue, setInnerValue] = useState<Date | undefined>(valueProp)
  useEffect(() => {
    setInnerValue(valueProp)
  }, [valueProp])

  // innerValue => pickerInnerValue
  const pickerInnerValue = usePickerValue(
    innerValue,
    minDate,
    maxDate,
    _precision,
  )

  // ============ Locale ===========
  const _locale = getComponentLocale(
    p,
    useContext(LocaleContext),
    'DatePicker',
    () => require('./locale/zh_CN'),
  )

  const mergedRenderLabel = useRenderLabel(
    renderLabel,
    _locale.DatePickerLocale,
  )

  // ============ Ref ===========
  const pickerRef = React.useRef<PickerRef>(null)
  useImperativeHandle(ref, () => pickerRef.current as PickerRef)

  // ============ Columns ===========
  const columns = useMemo(() => {
    return generateDatePickerColumns(
      pickerInnerValue,
      minDate,
      maxDate,
      _precision,
      mergedRenderLabel,
      filter,
      false,
    )
  }, [
    maxDate,
    mergedRenderLabel,
    minDate,
    _precision,
    filter,
    pickerInnerValue,
  ])

  const handleSelect = useCallback(
    (val: any, i: number) => {
      const pvalue = pickerInnerValue.slice(0)
      pvalue[i] = val
      const { dateValue } = getValueExtend(columns, pvalue, _precision)
      setInnerValue(dateValue)
      p.onValueChange?.(dateValue, i)
    },
    [columns, _precision, p, pickerInnerValue],
  )

  const handleOk = useCallback(
    (val, ext) => {
      p.onOk?.(convertStringArrayToDate(val, _precision), ext)
      setValueProp(val)
    },
    [_precision, p, setValueProp],
  )

  const handleChange = useCallback(
    (val, ext) => {
      p.onChange?.(convertStringArrayToDate(val, _precision), ext)
    },
    [_precision, p],
  )

  // extra format
  const format = useCallback(
    (labels: string[]) => {
      const date = convertStringArrayToDate(labels, _precision)
      if (typeof p.format === 'function') {
        return p.format(date)
      }

      return dayjs(date).format(
        typeof p.format === 'string'
          ? p.format
          : _precision === 'day'
          ? 'YYYY-MM-DD'
          : 'YYYY-MM-DD HH:mm:ss',
      )
    },
    [_precision, p],
  )

  const onVisibleChange = useCallback(
    (visible) => {
      p.onVisibleChange?.(visible)
      if (visible && !valueProp) {
        setInnerValue(new Date())
      } else {
        setInnerValue(valueProp)
      }
    },
    [p, valueProp],
  )

  return (
    <RMCPicker
      {...restProps}
      locale={_locale}
      value={pickerInnerValue}
      columns={columns}
      handleSelect={handleSelect}
      onVisibleChange={onVisibleChange}
      onOk={handleOk}
      onChange={handleChange}
      format={format}
      ref={pickerRef}
    />
  )
})

DatePicker.displayName = 'Picker'

export default DatePicker
