import type { ReactNode } from 'react'
import { StyleProp, TextStyle, ViewStyle } from 'react-native'

export type PickerValue = string | number

export type PickerValueExtend = {
  columns: PickerColumn[]
  items: (PickerColumnItem | undefined)[]
}

export type PickerColumnItem = {
  label: string | ReactNode
  value: string | number
  key?: string | number
  children?: PickerColumnItem[]
}

export type PickerColumn = PickerColumnItem[]

export interface PickerViewPropsType {
  value?: PickerValue[]
  defaultValue?: PickerValue[]
  data: PickerColumn | PickerColumn[]
  cols?: number
  cascade?: boolean
  loading?: boolean
  loadingContent?: ReactNode
  numberOfLines?: number
  style?: StyleProp<ViewStyle>
  itemStyle?: StyleProp<TextStyle>
  itemHeight?: number
  indicatorStyle?: StyleProp<ViewStyle>
  onChange?: (value: PickerValue[], extend: PickerValueExtend) => void
  renderLabel?: (item: PickerColumnItem, index: number) => ReactNode
  renderMaskTop?: () => ReactNode
  renderMaskBottom?: () => ReactNode
  _ScrollViewComponent?: any
}
