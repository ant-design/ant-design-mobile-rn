import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface DividerStyles {
  container: ViewStyle
  horizontal: ViewStyle
  horizontal_auto: ViewStyle
  horizontal_short_line: ViewStyle
  vertical: ViewStyle
  vertical_auto: ViewStyle
  vertical_short_line: ViewStyle
  content: TextStyle
  line: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<DividerStyles>({
    container: {
      alignItems: 'center',
    },
    horizontal: {
      flexDirection: 'row',
      width: '100%',
    },
    horizontal_auto: {
      height: 'auto',
    },
    horizontal_short_line: {
      width: '5%',
    },
    vertical: {
      flexDirection: 'column',
      height: '100%',
    },
    vertical_auto: {
      width: 'auto',
    },
    vertical_short_line: {
      height: '5%',
    },
    content: {
      color: theme.color_text_base,
      fontSize: theme.font_size_base,
    },
    line: {
      backgroundColor: theme.fill_divider,
    },
  })
