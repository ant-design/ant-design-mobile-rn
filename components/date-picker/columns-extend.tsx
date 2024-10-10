import { useMemo } from 'react'
import { PickerColumn, PickerValue } from '../picker-view/PropsType'
import {
  Precision,
  convertDateToStringArray,
  convertStringArrayToDate,
} from './date-picker-utils'

export function getValueExtend(
  d: PickerColumn[],
  val: PickerValue[],
  mode: Precision,
) {
  const extend = d.map(
    (column: PickerColumn, index: number) =>
      column.find((item) => item?.value === val[index]) ??
      (val[index] === undefined ? column[0] : column.slice(-1)[0]),
  ) as PickerColumn
  return {
    dateValue: convertStringArrayToDate(
      extend.map((item) => item?.value),
      mode,
    ),
    extend,
  }
}

// date2array
export function usePickerValue(
  val: Date | undefined,
  minDate: Date,
  maxDate: Date,
  mode: Precision,
) {
  return useMemo(() => {
    if (!val) {
      return []
    }
    let value = new Date(val)
    if (isNaN(value.getTime()) || value.getTime() < minDate.getTime()) {
      value = minDate
    } else if (value.getTime() > maxDate.getTime()) {
      value = maxDate
    }
    return convertDateToStringArray(value, mode)
  }, [val, minDate, maxDate, mode])
}
