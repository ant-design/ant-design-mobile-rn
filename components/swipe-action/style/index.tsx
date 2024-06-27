import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface SwipeActionStyle {
  actionText: ViewStyle
  rightAction: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<SwipeActionStyle>({
    actionText: {
      color: 'white',
      fontSize: 16,
      backgroundColor: 'transparent',
      padding: 10,
    },
    rightAction: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
  })
