import React from 'react'
import { ColorValue, StyleProp, ViewStyle } from 'react-native'

export type SwitchChangeEventHandler = (checked: boolean) => void
export type SwitchClickEventHandler = SwitchChangeEventHandler

export interface SwitchPropsType {
  prefixCls?: string
  checked?: boolean
  defaultChecked?: boolean
  color?: string
  trackColor?: { false?: ColorValue; true?: ColorValue }
  thumbColor?: ColorValue
  thumbTintColor?: ColorValue
  disabled?: boolean
  loading?: boolean
  styles?: { [key: string]: StyleProp<ViewStyle> }
  title?: string
  checkedChildren?: React.ReactNode | React.ReactText
  unCheckedChildren?: React.ReactNode | React.ReactText
  onChange?: SwitchChangeEventHandler
  onPress?: SwitchClickEventHandler
}
