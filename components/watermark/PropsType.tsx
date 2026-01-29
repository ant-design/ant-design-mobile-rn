import React from 'react'
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native'
import { WatermarkStyle } from './style'

export interface WatermarkProps {
  content?: string | string[]
  contentStyle?: StyleProp<TextStyle>
  image?: string | React.ReactNode
  imageStyle?: StyleProp<ImageStyle>
  width?: number
  height?: number
  gapX?: number
  gapY?: number
  rotate?: number
  foreground?: boolean
  children?: React.ReactNode
  style?: ViewStyle
  styles?: Partial<WatermarkStyle>
}
