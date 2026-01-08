import {
  IconFill,
  IconFillProps,
  IconOutline,
  IconOutlineProps,
} from '@ant-design/icons-react-native'
import React from 'react'
import { I18nManager, StyleSheet, View, ViewStyle } from 'react-native'
import { RateIconProps } from './PropsType'

const Icon = ({
  size,
  name,
  color,
  isFill,
}: Omit<RateIconProps, 'type' | 'emptyColor'>) => {
  const IconComponent: React.ComponentType<IconFillProps | IconOutlineProps> =
    isFill ? IconFill : IconOutline
  return <IconComponent size={size} color={color} name={name} />
}

const EmptyIcon = ({
  size,
  name = 'star',
  emptyColor,
  isFill,
}: Omit<RateIconProps, 'type' | 'color'>) => (
  <Icon name={name} size={size} color={emptyColor} isFill={isFill} />
)

const FullIcon = ({
  size,
  color,
  name = 'star',
  isFill,
}: Omit<RateIconProps, 'type' | 'emptyColor'>) => (
  <Icon name={name} size={size} color={color} isFill={isFill} />
)

const RTL_TRANSFORM: ViewStyle = {
  transform: [{ rotateY: '180deg' }],
}

const HalfIcon = ({
  size,
  name = 'star',
  color,
  emptyColor,
  isFill,
}: Omit<RateIconProps, 'type'>) => (
  <View
    style={[
      styles.container,
      { width: size, height: size },
      I18nManager.isRTL ? RTL_TRANSFORM : undefined,
    ]}>
    <View
      style={[
        styles.half,
        {
          width: size / 2,
          height: size,
        },
      ]}>
      <Icon name={name} size={size} color={color} isFill={isFill} />
    </View>

    <View
      style={[
        styles.half,
        {
          width: size / 2,
          height: size,
        },
        RTL_TRANSFORM,
      ]}>
      <Icon name={name} size={size} color={emptyColor} isFill={isFill} />
    </View>
  </View>
)

const RateIcon = ({
  type,
  name = 'star',
  size,
  color,
  emptyColor,
  isFill,
}: RateIconProps) => {
  const Component =
    type === 'full' ? FullIcon : type === 'half' ? HalfIcon : EmptyIcon
  return (
    <Component
      name={name}
      size={size}
      color={color}
      emptyColor={emptyColor}
      isFill={isFill}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'relative',
  },
  half: {
    overflow: 'hidden',
    position: 'relative',
  },
})

export default RateIcon
