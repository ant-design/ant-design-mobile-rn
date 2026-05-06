import React, { useEffect, useRef } from 'react'
import {
  Animated,
  StyleProp,
  View,
  ViewStyle
} from 'react-native'
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
  const progress = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (animated && !sharedAnimation) {
      progress.setValue(0)
      const animation = Animated.loop(
        Animated.sequence([
          Animated.timing(progress, {
            toValue: 1,
            duration: 1400,
            useNativeDriver: true,
          }),
          Animated.delay(200),
          Animated.timing(progress, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
        ]),
      )
      animation.start()
      return () => {
        animation.stop()
        progress.setValue(0)
      }
    }
  }, [animated, progress, sharedAnimation])

  if (animated) {
    const animationProgress = sharedAnimation?.progress ?? progress
    const scaleX = animationProgress.interpolate({
      inputRange: [0, 1],
      outputRange: [0.01, 1],
    })
    const opacity = animationProgress.interpolate({
      inputRange: [0, 1],
      outputRange: [0.08, 1],
    })

    return (
      <View
        style={[
          style,
          {
            overflow: 'hidden',
            backgroundColor: 'rgba(129, 129, 129, 0.24)',
          },
        ]}
        {...restProps}
      >
        <Animated.View
          pointerEvents="none"
          style={[
            {
              position: 'absolute',
              left: '-100%',
              width: '200%',
              height: '100%',
              backgroundColor: 'rgb(242 242 242)',
              opacity,
              transform: [{ scaleX }],
            },
          ]}
        />
      </View>
    )
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
