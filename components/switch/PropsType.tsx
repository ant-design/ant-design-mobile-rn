import React from 'react'
import { ColorValue } from 'react-native'

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
  title?: string
  checkedChildren?: string | React.ReactNode
  unCheckedChildren?: string | React.ReactNode
  onChange?: (checked: boolean) => void | Promise<void>
  /**
   * @deprecated
   */
  onPress?: (checked: boolean) => void
}
