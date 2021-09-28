import React from 'react'
import { CheckboxPropsType, OnChangeParams } from '../checkbox/PropsType'

export interface RadioPropsType extends CheckboxPropsType {
  name?: string
  value?: any
}

export interface RadioItemPropsType extends RadioPropsType {
  onPress?: () => any
}

export type RadioValueType = string | number | boolean
export interface RadioOptionType {
  label: React.ReactNode
  value: RadioValueType
  style?: React.CSSProperties
  disabled?: boolean
  onChange?: (_e: OnChangeParams) => void
}
export interface OnGroupChangeParams {
  target: {
    value: any
  }
}
export interface RadioGroupPropsType {
  children?: React.ReactNode
  defaultValue?: any
  value?: any
  onChange?: (_e: OnGroupChangeParams) => void
  options?: Array<RadioOptionType | string>
  disabled?: boolean
}
export interface RadioGroupContextProps {
  onChange: (_e: RadioChangeEvent) => void
  value: any
  disabled?: boolean
  name?: string
}
export interface RadioChangeEvent {
  target: { value: any }
}
