import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'
export interface GridStyle {
  grayBorderBox: ViewStyle
  icon: ImageStyle
  text: TextStyle
}
export default (theme: Theme) =>
  StyleSheet.create<GridStyle>({
    grayBorderBox: {
      borderColor: theme.border_color_base,
    },
    icon: {
      width: theme.icon_size_md,
      height: theme.icon_size_md,
    },
    text: {
      fontSize: theme.font_size_caption_sm,
      color: theme.color_text_base,
      marginTop: theme.v_spacing_md,
    },
  })
