import React from 'react'
import { SliderStyle } from './style'

export interface SliderProps {
  maximumTrackTintColor?: string
  minimumTrackTintColor?: string
  onChange?: (value?: number) => void
  onAfterChange?: (value?: number) => void
  defaultValue?: number
  tipFormatter?: (value?: string) => React.ReactNode
  value?: number
  min?: number
  max?: number
  step?: number
  styles?: Partial<SliderStyle>
  disabled?: boolean
}
