import type { ReactNode } from 'react'
import { StyleProp, ViewProps, ViewStyle } from 'react-native'
import { SkeletonStyle } from './style'

export interface SkeletonProps extends ViewProps {
  animated?: boolean
  style?: StyleProp<ViewStyle>
  styles?: Partial<SkeletonStyle>
}

export type SkeletonTitleProps = SkeletonProps

export interface SkeletonParagraphProps extends SkeletonProps {
  lineCount?: number
}

export interface SkeletonProviderProps {
  children?: ReactNode
}
