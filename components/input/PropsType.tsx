import React from 'react'
import { KeyboardTypeOptions, TextInputProps } from 'react-native'
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
export interface InputProps extends Omit<TextInputProps, 'onChange'> {
  allowClear?: boolean | ClearIconType
  disabled?: boolean
  maxLength?: number
  prefix?: React.ReactNode
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
  styles?: Partial<InputStyle>
  suffix?: React.ReactNode
  themeStyles?: (theme: Theme) => Partial<InputStyle>
  type?:
    | 'text'
    | 'bankCard'
    | 'phone'
    | 'password'
    | 'number'
    | 'digit' // TODO-luokun
    | KeyboardTypeOptions
  onChange?: (value: string) => void
}

export interface TextAreaProps
  extends Omit<InputProps, 'prefix' | 'status' | 'styles' | 'suffix' | 'type'> {
  autoSize?: boolean | AutoSizeType
  styles?: Partial<TextAreaStyle>
  rows?: number // TODO-luokun: 原生rows/cols
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
}
