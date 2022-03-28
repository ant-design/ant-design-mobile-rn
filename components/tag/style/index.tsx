import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface TagStyle {
  tag: ViewStyle
  wrap: ViewStyle
  wrapSmall: ViewStyle
  text: TextStyle
  textSmall: TextStyle
  normalWrap: ViewStyle
  normalText: TextStyle
  activeWrap: ViewStyle
  activeText: TextStyle
  disabledWrap: ViewStyle
  disabledText: TextStyle
  close: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<TagStyle>({
    tag: {
      position: 'relative',
      flexDirection: 'row',
      overflow: 'visible',
    },
    wrap: {
      height: theme.tag_height,
      // lineHeight: theme.tag_height, // doest work in RN
      justifyContent: 'center',
      borderRadius: theme.radius_sm,
      borderWidth: theme.border_width_sm,
      borderStyle: 'solid',
      paddingVertical: 0,
      paddingHorizontal: theme.h_spacing_lg,
    },
    wrapSmall: {
      height: theme.tag_height_sm,
      paddingVertical: 0,
      paddingHorizontal: theme.h_spacing_sm,
    },
    text: {
      fontSize: theme.button_font_size_sm,
      textAlign: 'center',
    },
    textSmall: {
      fontSize: theme.font_size_icontext,
    },
    normalWrap: {
      backgroundColor: theme.fill_base,
      borderColor: theme.border_color_base,
    },
    normalText: {
      color: theme.color_text_caption,
    },
    activeWrap: {
      backgroundColor: theme.fill_base,
      borderColor: theme.brand_primary,
    },
    activeText: {
      color: theme.color_link,
    },
    disabledWrap: {
      backgroundColor: theme.fill_disabled,
      borderColor: theme.fill_disabled,
    },
    disabledText: {
      color: theme.color_text_disabled,
    },
    close: {
      position: 'absolute',
      top: -6,
      left: -6,
      color: theme.color_text_placeholder,
      backgroundColor: 'transparent',
      borderRadius: 999,
      fontSize: 16,
    },
  })
