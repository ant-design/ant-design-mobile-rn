import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';

export interface TagStyle {
  tag: ViewStyle;
  wrap: ViewStyle;
  wrapSmall: ViewStyle;
  text: TextStyle;
  textSmall: TextStyle;
  normalWrap: ViewStyle;
  normalText: TextStyle;
  activeWrap: ViewStyle;
  activeText: TextStyle;
  disabledWrap: ViewStyle;
  disabledText: TextStyle;
  close: ViewStyle;
  closeIOS: ViewStyle;
  closeAndroid: ViewStyle;
  closeText: TextStyle;
  closeTransform: ViewStyle;
}

export default (theme: Theme) =>
  StyleSheet.create<TagStyle>({
    tag: {
      borderRadius: theme.radius_sm,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      overflow: 'visible',
    },
    wrap: {
      overflow: 'hidden',
      borderRadius: theme.radius_sm,
      borderWidth: theme.border_width_sm,
      borderStyle: 'solid',
      paddingVertical: theme.v_spacing_sm,
      paddingHorizontal: theme.h_spacing_lg,
    },
    wrapSmall: {
      paddingVertical: 1.5,
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
      borderWidth: 0,
    },
    disabledText: {
      color: theme.color_text_disabled,
    },
    close: {
      position: 'absolute',
      backgroundColor: theme.color_text_placeholder,
    },
    closeIOS: {
      borderRadius: 8,
      width: 16,
      height: 16,
      left: -5,
      top: -4,
      overflow: 'hidden',
    },
    closeAndroid: {
      width: 16,
      height: 32,
      left: -2,
      top: -10,
      transform: [
        {
          rotate: '45deg',
        },
      ],
    },
    closeText: {
      color: theme.color_text_base_inverse,
      textAlign: 'center',
      fontSize: 20,
      lineHeight: 18,
    },
    closeTransform: {
      transform: [
        {
          rotate: '-45deg',
        },
      ],
    },
  });
