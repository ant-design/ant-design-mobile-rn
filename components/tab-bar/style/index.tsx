import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface TabBarStyle {
  tabbar: ViewStyle
  content: ViewStyle
  tabs: ViewStyle
  barItem: ViewStyle
  barIcon: ImageStyle
  barItemSelected: ViewStyle
  barItemTitle: TextStyle
  contentItem: ViewStyle
  contentItemSelected: ViewStyle
  badge: ViewStyle
  badgeText: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<TabBarStyle>({
    tabbar: {
      flex: 1,
    },
    content: {
      flex: 1,
    },
    tabs: {
      height: theme.tab_bar_height,
      borderTopWidth: theme.border_width_md,
      borderColor: theme.border_color_base,
      borderStyle: 'solid',
      flexDirection: 'row',
    },
    barItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    barIcon: {
      width: 28,
      height: 28,
      marginTop: 2,
    },
    barItemSelected: {},
    barItemTitle: {
      fontSize: theme.font_size_icontext,
      marginTop: 2,
    },
    contentItem: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'white',
      height: 0,
    },
    contentItemSelected: {
      height: undefined,
    },
    badge: {
      minWidth: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: theme.brand_important,
      position: 'absolute',
      top: 0,
      left: 20,
      paddingHorizontal: theme.h_spacing_sm,
    },
    badgeText: {
      textAlign: 'center',
      color: 'white',
    },
  })
