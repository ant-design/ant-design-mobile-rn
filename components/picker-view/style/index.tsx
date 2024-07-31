import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface PickerViewStyle {
  wrappper: ViewStyle
  wheelWrapper: ViewStyle
  mask: ViewStyle
  maskTop: ViewStyle
  maskMiddle: ViewStyle
  maskBottom: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<PickerViewStyle>({
    wrappper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: theme.fill_base,
    },
    wheelWrapper: {
      zIndex: 1,
      display: 'flex',
      flexDirection: 'row',
    },
    mask: {
      position: 'absolute',
      zIndex: 2,
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
      borderColor: theme.border_color_thin,
      borderTopWidth: 1,
      borderBottomWidth: 1,
    },

    maskBottom: {
      flex: 1,
      overflow: 'hidden',
    },
  })
