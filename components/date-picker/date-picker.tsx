import dayjs from 'dayjs'
import React, {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { getComponentLocale } from '../_util/getLocale'
import { mergeProps } from '../_util/with-default-props'
import useRenderLabel from '../date-picker-view/useRenderLabel'
import { LocaleContext } from '../locale-provider'
import RMCPicker, { PickerRef } from '../picker/picker'
import { DatePickerPropsType } from './PropsType'
import { getValueExtend, usePickerValue } from './columns-extend'
import {
  convertStringArrayToDate,
  generateDatePickerColumns,
} from './date-picker-utils'

export type DatePickerRef = any

export interface DatePickerProps extends DatePickerPropsType {}

const defaultProps = {
  defaultDate: new Date(),
  minDate: new Date('2000-1-1'),
  maxDate: new Date('2030-1-1'),
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

  const [innerValue, setInnerValue] = useState<Date | undefined>(
    value === undefined ? defaultValue || defaultDate : value,
  )

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

  const pickerRef = React.useRef<PickerRef>(null)
  useImperativeHandle(ref, () => pickerRef.current as PickerRef)

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
    (val: any, i: number) => {
      const pvalue = pickerValue.slice(0)
      pvalue[i] = val
      const { dateValue } = getValueExtend(columns, pvalue, _precision)
      setInnerValue(dateValue)
      p.onValueChange?.(dateValue, i)
    },
    [columns, _precision, p, pickerValue],
  )

  const handleOk = useCallback(
    (val, ext) => {
      p.onOk?.(convertStringArrayToDate(val, _precision), ext)
    },
    [_precision, p],
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

  // 记录value是否变化过
  const isValueChanged = useRef(false)

  const onVisibleChange = useCallback(
    (visible) => {
      p.onVisibleChange?.(visible)
      if (!visible && value !== innerValue && isValueChanged.current) {
        // 关闭时，如果选中值不同步，恢复为原选中值
        setInnerValue(value)
      }
    },
    [innerValue, p, value],
  )

  // for useEffect only on update
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      // extra update initial
      pickerRef.current?._updateExtra()
    } else {
      isValueChanged.current = true
      setInnerValue(value)
      // extra update after value update
      setTimeout(() => {
        pickerRef.current?._updateExtra()
      })
    }
  }, [value])

  return (
    <RMCPicker
      {...restProps}
      locale={_locale}
      value={pickerValue}
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
