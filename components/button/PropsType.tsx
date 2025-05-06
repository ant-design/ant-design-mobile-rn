import React from 'react'
import { PressableProps, TextStyle, ViewStyle } from 'react-native'

export interface ButtonPropsType {
  type?: 'primary' | 'warning' | 'ghost'
  size?: 'large' | 'small'
  loading?: boolean
  activeStyle?: ViewStyle | false
  textStyle?: TextStyle
  children?: React.ReactNode
  /** 解决ts类型冲突 */
  disabled?: boolean
  onShowUnderlay?: () => void
  onHideUnderlay?: () => void
  underlayColor?: string
  style?: ViewStyle
  onPress?: PressableProps['onPress']
  onPressIn?: PressableProps['onPressIn']
  onPressOut?: PressableProps['onPressOut']
}
