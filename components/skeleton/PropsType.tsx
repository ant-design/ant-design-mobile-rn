import { StyleProp, ViewStyle } from 'react-native'
import { SkeletonStyle } from './style'

export interface SkeletonProps {
  animated?: boolean
  style?: StyleProp<ViewStyle>
  styles?: Partial<SkeletonStyle>
}

export type SkeletonTitleProps = SkeletonProps

export interface SkeletonParagraphProps extends SkeletonProps {
  lineCount?: number
}
