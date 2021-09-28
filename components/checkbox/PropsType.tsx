import React from 'react'

export interface OnChangeParams {
  target: {
    checked: boolean
  }
}
export interface CheckboxPropsType {
  defaultChecked?: boolean
  checked?: boolean
  disabled?: boolean
  onChange?: (_e: OnChangeParams) => void
  children?: React.ReactNode
  indeterminate?: boolean
  prefixCls?: string
}

export interface CheckboxItemPropsType extends CheckboxPropsType {
  right?: boolean
  left?: boolean
  onPress?: () => void
}
