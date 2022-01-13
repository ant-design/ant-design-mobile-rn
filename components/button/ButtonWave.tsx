import React from 'react'
import {
  ColorValue,
  Platform,
  Pressable,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
} from 'react-native'

const IS_ANDROID = Platform.OS === 'android'

interface ButtonWaveProps extends TouchableNativeFeedbackProps {
  Color?: ColorValue
  children: React.ReactNode
}

export default (props: ButtonWaveProps) => {
  const { Color, ...restProps } = props
  return IS_ANDROID ? (
    <TouchableNativeFeedback
      background={
        Platform.Version >= 21
          ? TouchableNativeFeedback.Ripple(Color || '', true, 13)
          : TouchableNativeFeedback.SelectableBackground()
      }
      useForeground={true}
      {...restProps}>
      {props.children}
    </TouchableNativeFeedback>
  ) : (
    <Pressable {...restProps}>{props.children}</Pressable>
  )
}
