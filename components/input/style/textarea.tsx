import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'
export interface TextAreaStyle {
  container: ViewStyle
  input: ViewStyle
  clearIcon: ViewStyle
  showCount: TextStyle
  showCountError: TextStyle
}
export default (theme: Theme) =>
  StyleSheet.create<TextAreaStyle>({
    container: {
      position: 'relative',
      flexDirection: 'column',
    },
    input: {
      fontSize: theme.font_size_heading,
      paddingVertical: theme.prefix_padding,
      textAlignVertical: 'top',
      includeFontPadding: true,
    },
    clearIcon: {
      position: 'absolute',
      right: theme.prefix_padding,
      top: theme.prefix_padding,
      backgroundColor: 'rgba(0,0,0,0.2)',
      borderRadius: 15,
      padding: 2,
    },
    showCount: {
      fontSize: theme.font_size_heading,
      color: theme.color_text_placeholder,
      alignSelf: 'flex-end',
    },
    showCountError: {
      color: theme.color_error,
    },
  })
