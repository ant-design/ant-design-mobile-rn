import React from 'react'
import { StyleProp, TextStyle, ViewStyle } from 'react-native'
import { NoticeBarStyle } from './style'

export interface NoticeBarProps {
  action?: React.ReactElement<any>
  children?: React.ReactNode
  icon?: React.ReactElement<any>
  marqueeProps?: Omit<MarqueeProps, 'children'>
  mode?: 'closable' | 'link'
  onClose?: () => void
  onPress?: () => void
  style?: StyleProp<ViewStyle>
  styles?: Partial<NoticeBarStyle>
}

export interface MarqueeProps {
  autoFill?: boolean
  children: React.ReactNode
  direction?: 'left' | 'right' | 'up' | 'down'
  fps?: number
  leading?: number
  loop?: boolean | number
  maxWidth?: number
  onFinish?: () => void
  onCycleComplete?: () => void
  play?: boolean
  spacing?: number
  style?: StyleProp<TextStyle>
  wrapStyle?: StyleProp<ViewStyle>
  trailing?: number
}

export interface MarqueeActions {
  play: () => void
  pause: () => void
  stop: () => void
}
