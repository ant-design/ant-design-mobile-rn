import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface SwipeActionStyle {
  actionButton: ViewStyle
  actionText: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<SwipeActionStyle>({
    actionButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    actionText: {
      color: theme.color_text_base_inverse,
      fontSize: theme.font_size_base,
      backgroundColor: 'transparent',
      padding: 10,
    },
  })
