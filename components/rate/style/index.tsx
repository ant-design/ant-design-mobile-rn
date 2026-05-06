import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface RateStyle {
  rateContainer: ViewStyle
  icon: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create({
    rateContainer: {
      flexDirection: 'row',
      alignSelf: 'flex-start',
    },
    icon: {
      marginHorizontal: theme.h_spacing_md,
    },
  })
