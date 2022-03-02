import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface CarouselStyle {
  pagination: ViewStyle
  paginationX: ViewStyle
  paginationY: ViewStyle
  pointStyle: ViewStyle
  pointActiveStyle: ViewStyle
  spaceStyle: ViewStyle
  wrapperStyle: ViewStyle
}
export default (theme: Theme) =>
  StyleSheet.create<CarouselStyle>({
    pagination: {
      position: 'absolute',
      alignItems: 'center',
    },
    paginationX: {
      bottom: 10,
      left: 0,
      right: 0,
    },
    paginationY: {
      right: 10,
      top: 0,
      bottom: 0,
    },
    pointStyle: {
      width: 8,
      height: 8,
      borderRadius: 8,
      backgroundColor: theme.color_icon_base,
    },
    pointActiveStyle: {
      backgroundColor: '#888',
    },
    spaceStyle: {
      marginHorizontal: theme.h_spacing_sm / 2,
      marginVertical: theme.v_spacing_sm / 2,
    },
    wrapperStyle: {
      overflow: 'hidden',
    },
  })
