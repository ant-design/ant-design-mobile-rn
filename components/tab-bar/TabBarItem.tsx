import React, { isValidElement } from 'react'
import {
  Image,
  ImageStyle,
  StyleProp,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import Icon, { IconProps } from '../icon'
import { TabBarIcon } from './PropsType'
import TabBarItemStyles from './style'

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
  styles?: ReturnType<typeof TabBarItemStyles>
  children?: React.ReactNode
}
export default class TabBarItem extends React.Component<TabBarItemProps, any> {
  static defaultProps = {
    onPress() {},
  }
  render() {
    const {
      title,
      selected,
      tintColor,
      unselectedTintColor,
      icon,
      selectedIcon,
      onPress,
      badge,
      iconStyle,
    } = this.props
    const styles = this.props.styles!
    const itemSelectedStyle = selected ? styles.barItemSelected : null
    const badgeDom = badge ? (
      <View style={[styles.badge]}>
        <Text style={[styles.badgeText]}>{badge}</Text>
      </View>
    ) : null
    // icon
    const source =
      selected && selectedIcon !== undefined
        ? selectedIcon
        : icon !== undefined
        ? icon
        : null
    const color = selected ? tintColor : unselectedTintColor
    const isIcon =
      source &&
      (source as any).type &&
      (source as any).type.displayName === 'Icon'
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.barItem, itemSelectedStyle]}>
          <View>
            {source === null ? null : isValidElement(source) ? (
              isIcon ? (
                <Icon color={color} {...(source.props as IconProps)} />
              ) : (
                source
              )
            ) : (
              <Image source={source} style={[styles.barIcon, iconStyle]} />
            )}
            {badgeDom}
          </View>
          <Text style={[styles.barItemTitle, { color }]}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
