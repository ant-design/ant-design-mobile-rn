import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { ListItemStyle } from '../../list/style'
import { Theme } from '../../style'

export interface TooltipStyle extends ListItemStyle {
  tooltip: ViewStyle
  content: TextStyle
  arrow: ViewStyle
}

export default (theme: Theme, mode?: 'dark' | 'light') =>
  StyleSheet.create<Partial<TooltipStyle & ListItemStyle>>({
    tooltip: {
      zIndex: theme.tooltip_zindex,
      backgroundColor: mode === 'dark' ? theme.tooltip_dark : '#ffffff',
      borderRadius: theme.tooltip_border_radius,
      shadowColor: 'rgba(51, 51, 51, 1)',
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 12,
      elevation: 12,
      minWidth: 32,
    },
    content: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      color: mode === 'dark' ? '#ffffff' : undefined,
    },
    arrow: {
      width: 0,
      height: 0,
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',
      borderStyle: 'solid',
      borderWidth: theme.arrow_size,
      position: 'absolute',
    },
  })
