import { StyleSheet, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface TabsStyle {
  container: ViewStyle;
  topTabBarSplitLine: ViewStyle;
  bottomTabBarSplitLine: ViewStyle;
}
export default (theme: Theme) =>
  StyleSheet.create<TabsStyle>({
    container: {
      flex: 1,
    },
    topTabBarSplitLine: {
      borderBottomColor: theme.border_color_base,
      borderBottomWidth: 1,
    },
    bottomTabBarSplitLine: {
      borderTopColor: theme.border_color_base,
      borderTopWidth: 1,
    },
  });
