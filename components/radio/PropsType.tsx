import React from 'react'
import {
  CheckboxForwardedRef,
  CheckboxItemPropsType,
  CheckboxPropsType,
} from '../checkbox/PropsType'

export type RadioValue = string | number | undefined

export interface OnGroupChangeParams {
  target: {
    value: RadioValue
  }
}

export interface RadioPropsType extends CheckboxPropsType {
  value?: RadioValue
}

export interface RadioItemPropsType
  extends CheckboxItemPropsType,
    RadioPropsType {}

export interface RadioOptionType {
  label: React.ReactNode
  value: RadioValue
  disabled?: boolean
}

export interface RadioGroupPropsType {
  children?: React.ReactNode
  defaultValue?: RadioValue
  value?: RadioValue
  onChange?: (_e: OnGroupChangeParams) => void
  options?: Array<RadioOptionType | RadioValue>
  disabled?: boolean
}
export interface RadioGroupContextProps {
  onChange: (_e: OnGroupChangeParams) => void
  value?: RadioValue
  disabled?: boolean
}

export interface RadioForwardedRef extends CheckboxForwardedRef {}
