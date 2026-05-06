import React, { useEffect, useRef } from 'react'
import { Animated, StyleProp, View, ViewStyle } from 'react-native'
import { useTheme } from '../style'
import { SkeletonProps } from './PropsType'
import { SkeletonAnimationContext } from './SkeletonProvider'
import SkeletonStyles from './style'

// Animated skeleton component
const AnimatedSkeleton: React.FC<{
  style?: StyleProp<ViewStyle>
  animated?: boolean
  [key: string]: any
}> = ({ style, animated, ...restProps }) => {
  const sharedAnimation = React.useContext(SkeletonAnimationContext)
  const opacityValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (animated && !sharedAnimation) {
      const animation = Animated.loop(
        Animated.timing(opacityValue, {
          toValue: 1,
          duration: 1400,
          useNativeDriver: true,
        }),
      )
      animation.start()
      return () => {
        animation.stop()
        opacityValue.setValue(0)
      }
    }
  }, [animated, opacityValue, sharedAnimation])

  if (animated) {
    const opacity =
      sharedAnimation?.opacity ??
      opacityValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 0.25, 1],
      })
    return <Animated.View style={[style, { opacity }]} {...restProps} />
  }

  return <View style={style} {...restProps} />
}

const InternalSkeleton: React.FC<SkeletonProps> = (props) => {
  const { animated, style, styles: customStyles, ...restProps } = props
  const themeStyles = useTheme({
    styles: customStyles,
    themeStyles: SkeletonStyles,
  })

  return (
    <AnimatedSkeleton
      style={[themeStyles.skeleton, style]}
      animated={animated}
      {...restProps}
    />
  )
}

const Skeleton = React.memo(InternalSkeleton) as typeof InternalSkeleton

Skeleton.displayName = 'Skeleton'

export default Skeleton
