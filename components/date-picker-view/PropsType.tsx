import type { ReactNode } from 'react'
import { DatePickerFilter, Precision } from '../date-picker/date-picker-utils'
import { PickerDate } from '../date-picker/util'
import {
  PickerValueExtend,
  PickerViewPropsType,
} from '../picker-view/PropsType'

export type RenderLabel = (type: Precision | 'now', data: number) => ReactNode

export interface DatePickerViewPropsType
  extends Pick<
    PickerViewPropsType,
    | 'style'
    | 'itemStyle'
    | 'itemHeight'
    | 'numberOfLines'
    | 'renderMaskTop'
    | 'renderMaskBottom'
  > {
  value?: PickerDate
  defaultValue?: PickerDate
  mode?: Precision | 'date'
  minDate?: Date
  maxDate?: Date
  onChange?: (value: Date, extend?: PickerValueExtend) => void
  onValueChange?: (vals: any, index: number) => void
  precision?: Precision
  renderLabel?: RenderLabel
  locale?: {
    year?: string
    month?: string
    day?: string
    hour?: string
    minute?: string
    am?: string
    pm?: string
  }
  filter?: DatePickerFilter
}
