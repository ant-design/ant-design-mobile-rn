import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface TooltipStyle {
  tooltip: ViewStyle
  tooltipInner: ViewStyle
  content: ViewStyle | TextStyle
  arrow: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<TooltipStyle>({
    tooltip: {
      zIndex: theme.tooltip_zindex,
      backgroundColor: '#ffffff',
      borderRadius: 8,
      shadowColor: 'rgba(51, 51, 51, 1)',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 15,
      elevation: 15,
    },
    tooltipInner: {
      backgroundColor: '#ffffff',
      borderRadius: 8,
      minWidth: 32,
      // max-width: calc(100vw - 24px);
    },
    content: {
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
    arrow: {
      height: theme.arrow_size,
      width: theme.arrow_size,
      position: 'absolute',
      backgroundColor: '#ffffff',
      transform: [{ rotate: '45deg' }],
    },
  })
