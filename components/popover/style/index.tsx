import { StyleSheet, ViewStyle } from 'react-native';
import { Theme } from '../../style';

export interface PopoverStyle {
  content: ViewStyle;
  arrow: ViewStyle;
  background: ViewStyle;
}

export default (theme: Theme) =>
  StyleSheet.create<PopoverStyle>({
    content: {
      backgroundColor: theme.fill_base,
      borderRadius: theme.radius_sm,
      padding: 0,
    },
    arrow: {
      borderTopColor: theme.fill_base,
    },
    background: {
      backgroundColor: 'transparent',
    },
  });
