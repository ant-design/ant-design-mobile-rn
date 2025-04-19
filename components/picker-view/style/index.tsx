import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface PickerViewStyle {
  wrappper: ViewStyle
  wheelWrapper: ViewStyle
  itemWrap: ViewStyle
  itemStyle: TextStyle
  itemActiveStyle: TextStyle
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

    itemWrap: {
      overflow: 'hidden',
      justifyContent: 'center',
      height: theme.picker_item_height,
      paddingHorizontal: theme.h_spacing_sm,
    },
    itemStyle: {
      fontSize: theme.font_size_caption,
      color: theme.color_text_base,
      textAlign: 'center',
      includeFontPadding: false,
    },
    itemActiveStyle: {},

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
      borderTopWidth: StyleSheet.hairlineWidth,
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    maskBottom: {
      flex: 1,
      overflow: 'hidden',
    },
  })
