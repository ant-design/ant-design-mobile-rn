import React from 'react'
import { StyleProp, TextStyle, ViewStyle } from 'react-native'
import { ModalStyle } from './style/index'

export interface ModalPropsType {
  animateAppear?: boolean
  animationDuration?: number
  animated?: boolean
  animationType?: 'none' | 'fade' | 'slide-up' | 'slide-down' | 'slide'
  bodyStyle?: StyleProp<ViewStyle>
  children?: React.ReactNode
  closable?: boolean
  footer?: Action<TextStyle>[]
  locale?: object
  maskClosable?: boolean
  modalType?: 'portal' | 'modal' | 'view'
  onAnimationEnd?: (visible: boolean) => void
  onClose?: () => void
  operation?: boolean
  onRequestClose?: CallbackOnBackHandler
  popup?: boolean
  style?: StyleProp<ViewStyle>
  styles?: Partial<ModalStyle>
  title?: React.ReactNode
  transparent?: boolean
  visible: boolean
}

export interface Action<T = TextStyle> {
  text: string
  onPress?: () => void | Promise<any>
  style?: T | string
}

export type Callback = (valueOrLogin: string, password?: string) => void
export type CallbackOrActions<T> = Callback | Action<T>[]

// 点击返回键的回调事件。参考RN中的BackHandler来返回值
export type CallbackOnBackHandler = () => boolean
