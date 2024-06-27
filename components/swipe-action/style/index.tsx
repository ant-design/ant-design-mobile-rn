import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface SwipeActionStyle {
  actionButton: ViewStyle
  actionText: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<SwipeActionStyle>({
    actionButton: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
    actionText: {
      color: 'white',
      fontSize: 16,
      backgroundColor: 'transparent',
      padding: 10,
    },
  })
