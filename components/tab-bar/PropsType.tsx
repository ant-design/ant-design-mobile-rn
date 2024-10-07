import React from 'react'
import {
  ImageRequireSource,
  ImageStyle,
  ImageURISource,
  StyleProp,
  ViewStyle,
} from 'react-native'
import TabBarItem from './TabBarItem'
import { TabBarStyle } from './style'

export interface TabBarProps {
  barTintColor?: string
  tintColor?: string
  unselectedTintColor?: string
  animated?: boolean
  swipeable?: boolean
  styles?: TabBarStyle
  children: React.ReactElement<TabBarItem>[] | React.ReactElement<TabBarItem>
}
export type TabBarIcon =
  | ImageURISource
  | ImageURISource[]
  | ImageRequireSource
  | React.ReactNode
export interface TabBarItemProps {
  badge?: string | number
  onPress?: () => void
  selected?: boolean
  icon?: TabBarIcon
  selectedIcon?: TabBarIcon
  title: string
  tintColor?: string
  unselectedTintColor?: string
  iconStyle?: StyleProp<ImageStyle>
  renderAsOriginal?: boolean
  style?: StyleProp<ViewStyle>
  styles?: TabBarStyle
  children?: React.ReactNode
}
