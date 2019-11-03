import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';

export interface RadioStyle {
  wrapper: ViewStyle;
  icon: ImageStyle;
  radioItem: ViewStyle;
  radioItemRadio: ViewStyle;
  radioItemContent: TextStyle;
  radioItemContentDisable: TextStyle;
}

export default (theme: Theme) =>
  StyleSheet.create<RadioStyle>({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      // width: variables.icon_size_xxs,
      // height: variables.icon_size_xxs * 0.8,
    },
    radioItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    radioItemRadio: {
      marginLeft: theme.h_spacing_lg,
      marginRight: theme.h_spacing_md,
    },
    radioItemContent: {
      color: theme.color_text_base,
      fontSize: theme.font_size_heading,
    },
    radioItemContentDisable: {
      color: theme.color_text_disabled,
    },
  });
