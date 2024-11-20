import { ReactNode } from 'react'
import { ScrollViewProps, StyleProp, ViewStyle } from 'react-native'
import { CarouselStyle } from './style/index'

export interface CarouselProps extends ScrollViewProps {
  accessibilityLabel?: string
  autoplay?: boolean
  autoplayInterval?: number
  afterChange?: (index: number) => void
  children?: ReactNode
  dots?: boolean
  dotActiveStyle?: StyleProp<ViewStyle>
  dotStyle?: StyleProp<ViewStyle>
  infinite?: boolean
  lazy?: boolean | ((index: number) => boolean)
  renderLazyPlaceholder?: (index: number) => ReactNode
  pageStyle?: StyleProp<ViewStyle>
  pagination?: (props: PaginationProps) => ReactNode
  selectedIndex?: number
  style?: StyleProp<ViewStyle>
  styles?: Partial<CarouselStyle>
  vertical?: boolean
}

export interface PaginationProps {
  current: number
  count: number
  dotStyle?: StyleProp<ViewStyle>
  dotActiveStyle?: StyleProp<ViewStyle>
  styles: Partial<CarouselStyle>
  vertical?: boolean
}

export interface CarouselForwardedRef {
  scrollToStart: () => void
  scrollToEnd: () => void
  scrollNextPage: () => void
  goTo: (index: number, animated?: boolean) => void
}
