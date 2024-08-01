import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'
export interface TabBarStyle {
  container: ViewStyle
  tabs: ViewStyle
  tab: ViewStyle
  underline: ViewStyle
  textStyle: TextStyle
}
export default (theme: Theme) =>
  StyleSheet.create<TabBarStyle>({
    container: {},
    tabs: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: theme.fill_base,
      justifyContent: 'space-around',
      shadowRadius: 0,
      shadowOpacity: 0,
      elevation: 0,
    },
    tab: {
      height: theme.tabs_height,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      flexDirection: 'row',
    },
    underline: {
      height: 2,
      backgroundColor: theme.brand_primary,
    },
    textStyle: {
      fontSize: theme.tabs_font_size_heading,
    },
  })
