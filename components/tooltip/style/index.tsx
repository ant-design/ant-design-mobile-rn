import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { ListItemStyle } from '../../list/style'
import { Theme } from '../../style'

export interface TooltipStyle extends ListItemStyle {
  tooltip: ViewStyle
  tooltipText: TextStyle
  arrow: ViewStyle
}

export default (theme: Theme, mode?: 'dark' | 'light') =>
  StyleSheet.create<Partial<TooltipStyle & ListItemStyle>>({
    tooltip: {
      zIndex: theme.tooltip_zindex,
      backgroundColor: mode === 'dark' ? theme.tooltip_dark : theme.fill_base,
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
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
    tooltipText: {
      color: mode === 'dark' ? '#ffffff' : theme.color_text_base,
    },
    arrow: {
      width: 0,
      height: 0,
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',
      borderStyle: 'solid',
      borderWidth: theme.tooltip_arrow_size,
      position: 'absolute',
    },

    // ListItem
    underlayColor: {
      backgroundColor: 'transparent',
    },
    Line: {
      flex: undefined,
    },
    Content: {
      flex: undefined,
      color: mode === 'dark' ? '#ffffff' : theme.color_text_base,
    },
    Item: {
      backgroundColor: 'transparent',
      paddingLeft: 0,
    },
  })
