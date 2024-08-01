import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'
export interface InputItemStyle {
  container: ViewStyle
  text: TextStyle
  input: TextStyle
  inputDisabled: TextStyle
  inputErrorColor: TextStyle
  clear: ViewStyle
  extra: TextStyle
  errorIcon: ViewStyle
}
export default (theme: Theme) =>
  StyleSheet.create<InputItemStyle>({
    container: {
      height: theme.list_item_height + theme.border_width_sm,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: theme.border_color_base,
      marginLeft: theme.h_spacing_lg,
      paddingRight: theme.h_spacing_lg,
      marginTop: 0,
      marginBottom: 0,
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      marginRight: theme.h_spacing_sm,
      textAlignVertical: 'center',
      fontSize: theme.font_size_heading,
      color: theme.color_text_base,
    },
    input: {
      flex: 1,
      // height: theme.list_item_height,
      backgroundColor: 'transparent',
      fontSize: theme.font_size_heading,
      color: theme.color_text_base,
    },
    inputDisabled: {
      backgroundColor: theme.fill_disabled,
      color: theme.color_text_disabled,
    },
    inputErrorColor: {
      color: '#f50',
    },
    clear: {
      backgroundColor: theme.color_icon_base,
      borderRadius: 15,
      padding: 2,
    },
    extra: {
      marginLeft: theme.h_spacing_sm,
      fontSize: theme.font_size_subhead,
      color: theme.color_text_caption,
    },
    errorIcon: {
      marginLeft: theme.h_spacing_sm,
      width: theme.icon_size_sm,
      height: theme.icon_size_sm,
    },
  })
