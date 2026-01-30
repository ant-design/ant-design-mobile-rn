import React, { useEffect, useRef } from 'react'
import { Animated, StyleProp, View, ViewStyle } from 'react-native'
import { useTheme } from '../style'
import { SkeletonProps } from './PropsType'
import SkeletonStyles from './style'

// Animated skeleton component
const AnimatedSkeleton: React.FC<{
  style?: StyleProp<ViewStyle>
  animated?: boolean
}> = ({ style, animated }) => {
  const opacityValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (animated) {
      const animation = Animated.loop(
        Animated.timing(opacityValue, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
      )
      animation.start()
      return () => {
        animation.stop()
        opacityValue.setValue(0)
      }
    }
  }, [animated, opacityValue])

  if (animated) {
    const opacity = opacityValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 0.25, 1],
    })
    return <Animated.View style={[style, { opacity }]} />
  }

  return <View style={style} />
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
