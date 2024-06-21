import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface TooltipStyle {
  tooltip: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<TooltipStyle>({
    tooltip: {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: theme.tooltip_zindex,
      backgroundColor: 'rgba(0,0,0,0.75)',
    },
  })
