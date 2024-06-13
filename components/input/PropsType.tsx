import React from 'react'
import {
  KeyboardTypeOptions,
  StyleProp,
  TextInputProps,
  ViewStyle,
} from 'react-native'
import { Theme } from '../style'
import { InputStyle } from './style/index'
import { TextAreaStyle } from './style/textarea'

export interface ClearIconType {
  clearIcon: React.ReactNode
}
export interface AutoSizeType {
  minRows?: number
  maxRows?: number
}
export type InputStatus = 'error' | 'warning'
export interface InputProps extends Omit<TextInputProps, 'readOnly' | 'style'> {
  allowClear?: boolean | ClearIconType
  disabled?: boolean
  maxLength?: number
  prefix?: React.ReactNode
  readOnly?: boolean
  showCount?:
    | boolean
    | {
        formatter: (info: {
          value: string
          count: number
          status?: InputStatus
          maxLength?: number
        }) => React.ReactNode
      }
  status?: InputStatus
  inputStyle?: TextInputProps['style']
  style?: StyleProp<ViewStyle>
  styles?: Partial<InputStyle>
  suffix?: React.ReactNode
  themeStyles?: (theme: Theme) => Partial<InputStyle>
  type?: 'text' | 'password' | 'number' | KeyboardTypeOptions
}

export interface TextAreaProps
  extends Omit<InputProps, 'prefix' | 'status' | 'styles' | 'suffix' | 'type'> {
  autoSize?: boolean | AutoSizeType
  styles?: Partial<TextAreaStyle>
  rows?: number
}
