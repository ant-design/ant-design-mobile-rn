import React from 'react';

export interface TabBarProps {
  barTintColor?: string;
  tintColor?: string;
  unselectedTintColor?: string;

  /** default: false */
  animated?: boolean;
  /** default: false */
  swipeable?: boolean;
  /** rn android only**/
  styles?: any;
}
export type TabIcon = React.ReactElement<any> | { uri: string };
export interface TabBarItemProps {
  badge?: string | number;
  onPress?: () => void;
  selected?: boolean;
  icon?: TabIcon;
  selectedIcon?: TabIcon;
  title: string;
}
