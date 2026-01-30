import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface SkeletonStyle {
  skeleton: ViewStyle
  skeletonTitle: ViewStyle
  skeletonParagraph: ViewStyle
  skeletonParagraphLine: ViewStyle
  skeletonParagraphLastLine: ViewStyle
}

export default (_theme: Theme) =>
  StyleSheet.create<SkeletonStyle>({
    skeleton: {
      backgroundColor: _theme.skeleton_background_color,
    },
    skeletonTitle: {
      width: '45%',
      height: 32,
      borderRadius: _theme.radius_xs,
      marginVertical: _theme.v_spacing_sm,
    },
    skeletonParagraph: {},
    skeletonParagraphLine: {
      height: 18,
      borderRadius: _theme.radius_xs,
      marginVertical: _theme.v_spacing_sm,
    },
    skeletonParagraphLastLine: {
      width: '65%',
    },
  })
