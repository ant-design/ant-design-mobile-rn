import { StyleSheet, ViewStyle } from 'react-native'

export interface PickerViewStyle {
  wrappper: ViewStyle
  wheelWrapper: ViewStyle
  mask: ViewStyle
  maskTop: ViewStyle
  maskMiddle: ViewStyle
  maskBottom: ViewStyle
}

export default () =>
  StyleSheet.create<PickerViewStyle>({
    wrappper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#fff',
    },
    wheelWrapper: {
      display: 'flex',
      flexDirection: 'row',
    },
    mask: {
      position: 'absolute',
      zIndex: 10000,
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },

    maskTop: {
      flex: 1,
      overflow: 'hidden',
    },

    maskMiddle: {
      borderColor: '#eee',
      borderTopWidth: 1,
      borderBottomWidth: 1,
    },

    maskBottom: {
      flex: 1,
      overflow: 'hidden',
    },
  })
