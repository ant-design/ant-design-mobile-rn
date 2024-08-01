import type { ReactElement, ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { TooltipStyle } from './style'

export type GetContainer = HTMLElement | (() => HTMLElement) | null

export type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'

export type DeprecatedPlacement =
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom'

export type TooltipProps = {
  defaultVisible?: boolean
  visible?: boolean
  onVisibleChange?: (visible: boolean) => void
  children: ReactElement
  mode?: 'light' | 'dark'
  trigger?: string
  placement?: Placement | DeprecatedPlacement
  content: ReactNode
  style?: StyleProp<ViewStyle>
  styles?: Partial<TooltipStyle>
}

export type TooltipRef = {
  show: () => void
  hide: () => void
  visible: boolean
}

export type Action = {
  text: ReactNode
  icon?: ReactNode
  disabled?: boolean
  key?: string | number
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

export type TooltipMenuProps = Omit<TooltipProps, 'content'> & {
  actions: Action[]
  maxCount?: number
  onAction?: (item: Action) => void
}
