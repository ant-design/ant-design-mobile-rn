import React from 'react'
import { StyleProp, TextStyle } from 'react-native'
import { SwipeableProps } from 'react-native-gesture-handler/lib/typescript/components/Swipeable'

export interface SwipeoutButtonProps {
  style?: StyleProp<TextStyle>
  backgroundColor?: string
  color?: string
  text?: React.ReactNode
  disabled?: boolean
  onPress?(): void
}

export interface SwipeActionProps extends SwipeableProps {
  left?: SwipeoutButtonProps[]
  right?: SwipeoutButtonProps[]
  buttonWidth?: number
  children?: React.ReactNode
  closeOnTouchOutside?: boolean
  closeOnAction?: boolean
}
