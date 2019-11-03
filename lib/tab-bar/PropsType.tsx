import React from 'react';
import { ImageRequireSource, ImageURISource } from 'react-native';

export interface TabBarProps {
  barTintColor?: string;
  tintColor?: string;
  unselectedTintColor?: string;
  animated?: boolean;
  swipeable?: boolean;
}
export type TabBarIcon =
  | ImageURISource
  | ImageURISource[]
  | ImageRequireSource
  | React.ReactNode;
  export interface TabBarItemProps {
  badge?: string | number;
  onPress?: () => void;
  selected?: boolean;
  icon?: TabBarIcon;
  selectedIcon?: TabBarIcon;
  title: string;
}
