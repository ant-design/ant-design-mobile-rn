import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface SliderStyle {
  inputDisabled: TextStyle
  stepWrap: ViewStyle
  stepText: TextStyle
  stepDisabled: ViewStyle
  disabledStepTextColor: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<SliderStyle>({
    inputDisabled: {
      opacity: 0.4,
    },
    stepWrap: {
      width: 28,
      height: 28,
      borderRadius: theme.radius_xs,
      backgroundColor: theme.fill_body,
    },
    stepText: {
      textAlign: 'center',
      fontSize: 20,
      color: theme.color_primary,
      backgroundColor: 'transparent',
    },
    stepDisabled: {
      opacity: 0.4,
    },
    disabledStepTextColor: {
      color: '#999999',
    },
  })
