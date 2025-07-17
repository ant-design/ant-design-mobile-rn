import React from 'react'
import { ColorValue, ViewStyle } from 'react-native'

export type DimensionValue = number | string | undefined
type Orientation = 'horizontal' | 'vertical'
type Position = 'center' | 'left' | 'right'
type Variant = 'solid' | 'dashed'

export interface DividerPropsType {
  orientation?: Orientation
  position?: Position
  variant?: Variant
  content?: string | React.ReactNode
  thickness?: number
  pattern?: number[]
  color?: ColorValue
  orientationMargin?: DimensionValue
  innerPadding?: DimensionValue
  style?: ViewStyle
}

export interface LinePropsType {
  orientation?: Orientation
  variant?: Variant
  thickness?: number
  color?: ColorValue
  pattern?: number[]
  style?: ViewStyle
}
