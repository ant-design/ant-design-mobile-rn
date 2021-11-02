import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface PaginationStyle {
  container: ViewStyle
  numberStyle: ViewStyle
  totalStyle: TextStyle
  activeTextStyle: TextStyle
  indicatorStyle: ViewStyle
  pointStyle: ViewStyle
  pointActiveStyle: ViewStyle
  spaceStyle: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<PaginationStyle>({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    numberStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    totalStyle: {
      fontSize: 18,
      color: theme.color_text_base,
    },
    activeTextStyle: {
      fontSize: 18,
      color: theme.color_link,
    },
    indicatorStyle: {
      flexDirection: 'row',
    },
    pointStyle: {
      width: 8,
      height: 8,
      borderRadius: 8,
      backgroundColor: theme.input_color_icon,
    },
    pointActiveStyle: {
      backgroundColor: '#888',
    },
    spaceStyle: {
      marginHorizontal: theme.h_spacing_sm / 2,
      marginVertical: theme.v_spacing_sm / 2,
    },
  })
