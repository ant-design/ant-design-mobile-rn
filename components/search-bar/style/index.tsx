import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface SearchBarStyle {
  input: TextStyle
  inputWrapper: ViewStyle
  wrapper: ViewStyle
  cancelTextContainer: ViewStyle
  cancelText: TextStyle
  search: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<SearchBarStyle>({
    inputWrapper: {
      flex: 1,
      flexDirection: 'row',
    },
    input: {
      borderRadius: theme.radius_md,
      backgroundColor: '#fff',
      borderColor: theme.border_color_base,
      borderWidth: theme.border_width_sm,
      height: theme.search_bar_input_height,
      color: theme.color_text_base,
      fontSize: theme.font_size_base,
      paddingLeft:
        theme.h_spacing_lg + theme.icon_size_xxs + theme.h_spacing_sm,
      paddingRight:
        theme.h_spacing_lg + theme.icon_size_xxs + theme.h_spacing_sm,
      flex: 1,
      paddingTop: 0,
      paddingBottom: 0,
    },
    wrapper: {
      backgroundColor: theme.search_bar_fill,
      height: theme.search_bar_height,
      paddingLeft: theme.h_spacing_md,
      paddingRight: theme.h_spacing_md,
      flexDirection: 'row',
      alignItems: 'center',
    },
    cancelTextContainer: {
      height: theme.search_bar_input_height,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cancelText: {
      fontSize: theme.link_button_font_size,
      color: theme.color_link,
      paddingLeft: theme.h_spacing_lg,
    },
    search: {
      color: theme.color_icon_base,
      position: 'absolute',
      left: theme.h_spacing_md + 8,
      top: (theme.search_bar_height - theme.icon_size_xxs) / 2,
      fontSize: theme.icon_size_xxs,
    },
  })
