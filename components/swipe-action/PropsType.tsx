import React from 'react'
import { StyleProp, TextStyle } from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'
import { SwipeableProps } from 'react-native-gesture-handler/Swipeable'
import { SwipeActionStyle } from './style'

export interface SwipeoutButtonProps {
  actionButtonProps?: RectButtonProps
  backgroundColor?: string
  color?: string
  disabled?: boolean
  onPress?(): void | Promise<any>
  style?: StyleProp<TextStyle>
  text?: React.ReactNode
}

export interface SwipeActionProps extends SwipeableProps {
  closeOnAction?: boolean
  closeOnTouchOutside?: boolean
  left?: SwipeoutButtonProps[]
  right?: SwipeoutButtonProps[]
  /**
   * @deprecated No longer needed
   * @version `5.2.0`
   */
  buttonWidth?: number
  children?: React.ReactNode
  styles?: Partial<SwipeActionStyle>
}
