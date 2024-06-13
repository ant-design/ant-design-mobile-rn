import React from 'react'
import { SliderStyle } from './style'

export type SliderMarks = {
  [key: number]: React.ReactNode
}

export type SliderValue = number | [number, number]

export interface SliderProps {
  maximumTrackTintColor?: string
  minimumTrackTintColor?: string
  // onChange?: (value?: number) => void
  // onAfterChange?: (value?: number) => void
  defaultValue?: number
  tipFormatter?: (value?: string) => React.ReactNode
  value?: number
  min?: number
  max?: number
  step?: number
  styles?: Partial<SliderStyle>
  disabled?: boolean

  // @5.2.0
  onChange?: (value: SliderValue) => void
  onAfterChange?: (value: SliderValue) => void
  marks?: SliderMarks
  ticks?: boolean
}
