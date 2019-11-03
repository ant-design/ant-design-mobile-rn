import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';

export interface CheckboxStyle {
  wrapper: ViewStyle;
  icon: TextStyle;
  iconRight: TextStyle;
  agreeItem: ViewStyle;
  agreeItemCheckbox: TextStyle;
  checkboxItemCheckbox: TextStyle;
}

export default (theme: Theme) =>
  StyleSheet.create<CheckboxStyle>({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      width: theme.icon_size_sm,
      height: theme.icon_size_sm,
    },
    iconRight: {
      marginLeft: theme.h_spacing_md,
    },
    agreeItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    agreeItemCheckbox: {
      marginLeft: theme.h_spacing_lg,
      marginRight: theme.h_spacing_md,
    },
    checkboxItemCheckbox: {
      marginRight: theme.h_spacing_md,
      alignSelf: 'center',
    },
  });
