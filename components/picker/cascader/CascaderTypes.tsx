import * as React from 'react'
import { StyleProp, TextStyle, ViewStyle } from 'react-native'

export type CascaderOneValue = string | number
export type CascaderValue = CascaderOneValue[]

export interface CascaderDataItem {
  label: React.ReactNode
  value: CascaderOneValue
  children?: CascaderDataItem[]
}

export interface CascaderProps {
  defaultValue?: CascaderValue
  value?: CascaderValue
  onChange?: (value: CascaderValue) => void
  data: CascaderDataItem[]
  cols?: number
  disabled?: boolean
  rootNativeProps?: {}
  pickerItemStyle?: StyleProp<TextStyle>
  indicatorStyle?: StyleProp<ViewStyle>
  style?: StyleProp<ViewStyle>
  onScrollChange?: (value: CascaderValue) => void
  numberOfLines?: number
}
