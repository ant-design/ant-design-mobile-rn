import {
  FillGlyphMapType,
  OutlineGlyphMapType,
} from '@ant-design/icons-react-native'
import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'

type IconName = FillGlyphMapType & OutlineGlyphMapType

export interface RateProps {
  value?: number
  defaultValue?: number
  count?: number
  readOnly?: boolean
  allowClear?: boolean
  allowHalf?: boolean
  allowSwiping?: boolean
  style?: ViewStyle
  color?: string
  emptyColor?: string
  iconName?: IconName
  iconFill?: boolean
  iconType?: 'fill' | 'outline'
  iconSize?: number
  iconStyle?: ViewStyle
  animationConfig?: boolean | AnimationConfig
  onChange?: (value: number) => void
  onRatingStart?: (value: number) => void
  onRatingEnd?: (value: number) => void
}

export type RateIconProps = {
  size: number
  name: IconName
  color?: string
  emptyColor?: string
  type: 'full' | 'half' | 'empty'
  isFill?: boolean
}

export type AnimationConfig = {
  easing?: (value: number) => number
  duration?: number
  delay?: number
  scale?: number
}

export type AnimationOptions = {
  need: boolean
  config: Required<AnimationConfig>
}

export type AnimatedIconProps = {
  active: boolean
  children: React.ReactElement
  config: AnimationConfig
  style?: StyleProp<ViewStyle>
}
