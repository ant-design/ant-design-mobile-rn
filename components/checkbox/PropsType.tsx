import React from 'react'
import { AccessibilityProps, StyleProp, ViewStyle } from 'react-native'
import { ListItemStyle } from '../list/style'
import { Theme } from '../style'
import { CheckboxStyle } from './style'

// 保留历史数据结构
export interface OnChangeParams {
  target: {
    checked: boolean
  }
}
export interface CheckboxProps extends AccessibilityProps {
  defaultChecked?: boolean
  checked?: boolean
  disabled?: boolean
  onChange?: (_e: OnChangeParams) => void
  children?: React.ReactNode
  indeterminate?: boolean
  prefixCls?: string
  style?: StyleProp<ViewStyle>
  styles?: Partial<CheckboxStyle>
  themeStyles?: (theme: Theme) => Partial<CheckboxStyle>
}

export interface CheckboxItemProps extends Omit<CheckboxProps, 'styles'> {
  right?: boolean
  left?: boolean
  onPress?: () => void
  styles?: Partial<CheckboxStyle & ListItemStyle>
}

export interface CheckboxForwardedRef {
  onPress: () => boolean
  checked: boolean
}
