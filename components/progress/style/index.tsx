import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'
export interface ProgressStyle {
  progressOuter: ViewStyle
  progressBar: ViewStyle
}
export default (theme: Theme) =>
  StyleSheet.create<ProgressStyle>({
    progressOuter: {
      backgroundColor: theme.border_color_base,
      flex: 1,
    },
    progressBar: {
      borderBottomWidth: 4,
      borderStyle: 'solid',
      borderColor: theme.brand_primary,
    },
  })
