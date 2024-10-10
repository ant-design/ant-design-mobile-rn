import React, { isValidElement } from 'react'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'
import Icon, { IconProps } from '../icon'
import { TabBarItemProps } from './PropsType'

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
      style,
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
        <View style={[styles.barItem, itemSelectedStyle, style]}>
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
