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
      alignItems: 'stretch',
      width: 104,
    },
    input: {
      fontSize: theme.font_size_base,
      color: theme.color_text_base,
      textAlign: 'center',
      backgroundColor: theme.fill_grey,
    },
    prefix: {
      flexShrink: 0,
      marginRight: 2,
    },
    suffix: {
      flexShrink: 0,
      marginLeft: 2,
    },

    // Stepper style
    inputDisabled: {
      opacity: 0.4,
    },
    stepWrap: {
      width: 28,
      flex: 1,
      justifyContent: 'center',
      borderRadius: theme.radius_xs,
      backgroundColor: theme.fill_grey,
    },
    stepText: {
      textAlign: 'center',
      fontSize: 20,
      color: theme.brand_primary,
      backgroundColor: 'transparent',
    },
    stepDisabled: {
      opacity: 0.4,
    },
    disabledStepTextColor: {
      color: theme.color_text_disabled,
    },
  })
