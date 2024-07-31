import React from 'react'
import { StyleProp, TextStyle, ViewStyle } from 'react-native'
import { NoticeBarStyle } from './style'

export interface NoticeBarProps {
  action?: React.ReactElement<any>
  children?: React.ReactNode
  icon?: React.ReactElement<any>
  marqueeProps?: MarqueeProps
  mode?: 'closable' | 'link'
  onClose?: () => void
  onPress?: () => void
  style?: StyleProp<ViewStyle>
  styles?: Partial<NoticeBarStyle>
}

export interface MarqueeProps {
  autoFill?: boolean // 实现方式：first动画结束后跟上second 参考： announcement/index
  direction?: 'left' | 'right'
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
