import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface SkeletonStyle {
  skeleton: ViewStyle
  skeletonShimmer: ViewStyle
  skeletonTitle: ViewStyle
  skeletonParagraph: ViewStyle
  skeletonParagraphLine: ViewStyle
  skeletonParagraphLastLine: ViewStyle
}

export default (_theme: Theme) =>
  StyleSheet.create<SkeletonStyle>({
    skeleton: {
      backgroundColor: _theme.skeleton_background_color,
      width: '100%',
      height: 0,
      borderRadius: 0,
    },
    skeletonShimmer: {
      width: 160,
      backgroundColor: 'rgba(129, 129, 129, 0.14)',
    },
    skeletonTitle: {
      width: '45%',
      height: 32,
      borderRadius: _theme.radius_xs,
      marginTop: 16, // 不支持gap属性
      marginBottom: 8,
    },
    skeletonParagraph: {},
    skeletonParagraphLine: {
      height: 18,
      borderRadius: _theme.radius_xs,
      marginVertical: 6,
    },
    skeletonParagraphLastLine: {
      width: '65%',
      marginBottom: 12,
    },
  })
