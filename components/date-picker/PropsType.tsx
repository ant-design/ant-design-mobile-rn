import type { ReactNode } from 'react'
import { PickerValueExtend } from '../picker-view/PropsType'
import { PickerPropsType } from '../picker/PropsType'
import { DatePickerFilter, Precision } from './date-picker-utils'
import { PickerDate } from './util'

export type RenderLabel = (type: Precision | 'now', data: number) => ReactNode

export interface DatePickerPropsType
  extends Pick<
    PickerPropsType,
    | 'onPickerChange'
    | 'onVisibleChange'
    | 'style'
    | 'styles'
    | 'itemStyle'
    | 'itemHeight'
    | 'numberOfLines'
    | 'title'
    | 'okText'
    | 'dismissText'
    | 'visible'
    | 'children'
    | 'renderMaskTop'
    | 'renderMaskBottom'
  > {
  value?: PickerDate
  defaultValue?: PickerDate
  /**
   * Please use `defaultValue`.
   * Although it is also compatible with history, it will be removed in the future.
   * @deprecated
   */
  defaultDate?: PickerDate
  precision?: Precision
  /**
   * Please use `precision`.
   * Although it is also compatible with history, it will be removed in the future.
   * @deprecated
   */
  mode?: Precision | 'date'
  minDate?: Date
  maxDate?: Date
  onChange?: (value: Date, extend: PickerValueExtend) => void
  onValueChange?: (value: PickerDate, index: number) => void
  onOk?: (value: Date, extend: PickerValueExtend) => void
  renderLabel?: RenderLabel
  locale?: {
    okText?: string
    dismissText?: string
    extra?: string
    DatePickerLocale?: {
      year: string
      month: string
      day: string
      hour: string
      minute: string
      am: string
      pm: string
    }
  }
  filter?: DatePickerFilter // @5.0.1
  format?: string | ((value: Date) => string)
}
