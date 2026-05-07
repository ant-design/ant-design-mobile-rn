import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

export interface WatermarkStyle {
  container: ViewStyle
  wmContainer: ViewStyle
  wmItem: ViewStyle
  wmImage: ImageStyle
  wmText: TextStyle
}

export default () =>
  StyleSheet.create<WatermarkStyle>({
    container: {
      flex: 1,
      position: 'relative',
    },
    wmContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0)',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      flexWrap: 'wrap',
    },
    wmItem: {
      backgroundColor: 'rgba(0,0,0,0)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    wmImage: {
      height: 32,
      width: 60,
    },
    wmText: {
      color: 'rgba(0,0,0,0.15)',
      fontSize: 14,
    },
  })
