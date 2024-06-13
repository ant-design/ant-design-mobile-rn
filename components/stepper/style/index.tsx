import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { InputStyle } from '../../input/style'
import { Theme } from '../../style'
export interface StepperStyle extends Partial<InputStyle> {
  inputDisabled: TextStyle
  stepWrap: ViewStyle
  stepText: TextStyle
  stepDisabled: ViewStyle
  disabledStepTextColor: TextStyle
}
export default (theme: Theme) =>
  StyleSheet.create<StepperStyle>({
    // override Input style
    container: {
      width: 44 + 8 * 2 + 28 * 2,
    },
    input: {
      fontSize: theme.font_size_base,
      color: theme.color_text_base,
      textAlign: 'center',
      backgroundColor: theme.fill_body,
    },
    prefix: {
      paddingRight: 2,
    },
    suffix: {
      paddingLeft: 2,
    },

    // Stepper style
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
