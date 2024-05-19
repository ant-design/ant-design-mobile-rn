import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import {
  CheckboxForwardedRef,
  CheckboxItemProps,
  CheckboxProps,
} from '../checkbox/PropsType'
import { CheckboxStyle } from '../checkbox/style'
import { ListItemStyle } from '../list/style'
import { RadioItemStyle } from './style'

export type RadioValue = string | number | undefined

export interface OnGroupChangeParams {
  target: {
    value: RadioValue
  }
}

export interface RadioProps extends CheckboxProps {
  value?: RadioValue // for radio group
}

export interface RadioItemProps
  extends CheckboxItemProps,
    Omit<RadioProps, 'styles'> {
  styles?: Partial<CheckboxStyle & RadioItemStyle & ListItemStyle>
}

export interface RadioOptionType {
  label: React.ReactNode
  value: RadioValue
  disabled?: boolean
}

export interface RadioGroupProps {
  children?: React.ReactNode
  defaultValue?: RadioValue
  value?: RadioValue
  onChange?: (_e: OnGroupChangeParams) => void
  options?: Array<RadioOptionType | RadioValue>
  disabled?: boolean
  style?: StyleProp<ViewStyle>
}
export interface RadioGroupContextProps {
  onChange: (_e: OnGroupChangeParams) => void
  value?: RadioValue
  disabled?: boolean
}

export interface RadioForwardedRef extends CheckboxForwardedRef {}
