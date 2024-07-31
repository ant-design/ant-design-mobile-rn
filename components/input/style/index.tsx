import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'
export interface InputStyle {
  container: ViewStyle
  input: ViewStyle
  clearIcon: ViewStyle
  prefix: ViewStyle | TextStyle
  showCount: TextStyle
  suffix: ViewStyle | TextStyle
  warning: TextStyle
  error: TextStyle
}
export default (theme: Theme) =>
  StyleSheet.create<InputStyle>({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
    },
    input: {
      flex: 1,
      overflow: 'hidden',
      fontSize: theme.font_size_heading,
      paddingVertical: theme.prefix_padding,
      textAlignVertical: 'center',
      includeFontPadding: true,
    },
    clearIcon: {
      backgroundColor: 'rgba(0,0,0,0.2)',
      borderRadius: 15,
      padding: 2,
      marginLeft: theme.prefix_padding,
    },
    prefix: {
      fontSize: theme.font_size_heading,
      marginRight: theme.prefix_padding,
    },
    showCount: {
      fontSize: theme.font_size_heading,
      color: theme.color_text_placeholder,
      paddingLeft: theme.prefix_padding,
    },
    suffix: {
      fontSize: theme.font_size_heading,
      marginLeft: theme.prefix_padding,
    },
    warning: {
      color: theme.brand_warning,
    },
    error: {
      color: theme.brand_error,
    },
  })
