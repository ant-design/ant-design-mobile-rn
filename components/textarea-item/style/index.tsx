import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface TextareaItemStyle {
  container: ViewStyle
  input: TextStyle
  icon: ViewStyle
  errorIcon: ViewStyle
  count: ViewStyle
  countText: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<TextareaItemStyle>({
    container: {
      borderBottomWidth: theme.border_width_sm,
      borderBottomColor: theme.border_color_base,
    },
    input: {
      paddingHorizontal: theme.h_spacing_md,
      backgroundColor: theme.fill_base,
      fontSize: theme.font_size_heading,
      lineHeight: Math.round(1.3 * theme.font_size_heading),
      textAlignVertical: 'top',
    },
    icon: {
      position: 'absolute',
      top: 8,
      width: theme.icon_size_xs,
      height: theme.icon_size_xs,
    },
    errorIcon: {
      position: 'absolute',
      right: 18,
      top: 12,
    },
    count: {
      position: 'absolute',
      right: theme.h_spacing_md,
      bottom: theme.h_spacing_md,
    },
    countText: {},
  })
