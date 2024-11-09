import type { ReactNode } from 'react'
import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { SliderStyle } from './style'

export type SliderMarks = {
  [key: number]: React.ReactNode
}
export type SliderValueType = number | [number, number]

export type BaseSliderProps<SliderValue> = {
  min?: number
  max?: number
  value?: SliderValue
  defaultValue?: SliderValue
  step?: number
  marks?: SliderMarks
  ticks?: boolean
  disabled?: boolean
  disabledStep?: boolean
  icon?: ReactNode
  popover?: boolean | ((value: number) => ReactNode)
  residentPopover?: boolean
  tapToSeek?: boolean
  onChange?: (value: SliderValue) => void
  onAfterChange?: (value: SliderValue, index: number) => void
  onSlidingStart?: (value: SliderValue, index: number) => void
  onSlidingComplete?: (value: SliderValue, index: number) => void
  tapToSeek?: boolean
  style?: StyleProp<ViewStyle>
  styles?: Partial<SliderStyle>
}

type NumberSliderProps = BaseSliderProps<number> & {
  range?: false
}

type RangeSliderProps = BaseSliderProps<[number, number]> & {
  range: true
}

export type SliderProps = NumberSliderProps | RangeSliderProps
