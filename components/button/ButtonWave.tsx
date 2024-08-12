import React from 'react'
import {
  ColorValue,
  Platform,
  Pressable,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  View,
} from 'react-native'

const IS_ANDROID = Platform.OS === 'android'

interface ButtonWaveProps extends TouchableNativeFeedbackProps {
  Color?: ColorValue
  children: React.ReactNode
}

export default (props: ButtonWaveProps) => {
  const { Color, style, ...restProps } = props
  const accessibilityState = {
    disabled: !!props.disabled,
  }
  return IS_ANDROID ? (
    <TouchableNativeFeedback
      accessibilityRole="button"
      accessibilityState={accessibilityState}
      background={
        +Platform.Version >= 21
          ? TouchableNativeFeedback.Ripple(Color || '', true, 13)
          : TouchableNativeFeedback.SelectableBackground()
      }
      useForeground={true}
      {...restProps}>
      <View style={style}>{props.children}</View>
    </TouchableNativeFeedback>
  ) : (
    <Pressable
      accessibilityRole="button"
      accessibilityState={accessibilityState}
      {...props}
    />
  )
}
