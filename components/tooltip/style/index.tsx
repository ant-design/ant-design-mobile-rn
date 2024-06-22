import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface TooltipStyle {
  tooltip: ViewStyle
  tooltipContent: ViewStyle | TextStyle
  tooltipArrow: ViewStyle
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
      // TODO-luokun: shadow border line
      shadowRadius: 3,
      elevation: 3,
      minWidth: 32,
      // max-width: calc(100vw - 24px);
    },
    tooltipContent: {
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
    tooltipArrow: {
      height: 8,
      width: 8,
      position: 'absolute',
      backgroundColor: '#ffffff',
      transform: [{ rotate: '45deg' }],
      shadowColor: 'rgba(51, 51, 51, 1)',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 3,
    },
  })
