import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'
export interface StepperStyle {
  container: ViewStyle
  input: TextStyle
  stepWrap: ViewStyle
  stepText: TextStyle
  stepDisabled: ViewStyle
  disabledStepTextColor: TextStyle
}
export default (theme: Theme) =>
  StyleSheet.create<StepperStyle>({
    container: {
      width: 44 + 8 * 2 + 28 * 2,
    },
    input: {
      paddingHorizontal: 8,
      fontSize: theme.font_size_base,
      color: theme.color_text_base,
      textAlign: 'center',
    },
    stepWrap: {
      width: 28,
      height: 28,
      borderWidth: theme.border_width_md,
      borderColor: theme.border_color_base,
      borderRadius: theme.radius_md,
      backgroundColor: theme.fill_base,
    },
    stepText: {
      textAlign: 'center',
      fontSize: 20,
      color: theme.color_text_placeholder,
      backgroundColor: 'transparent',
    },
    stepDisabled: {
      borderColor: theme.color_text_disabled,
      backgroundColor: theme.fill_disabled,
    },
    disabledStepTextColor: {},
  })
