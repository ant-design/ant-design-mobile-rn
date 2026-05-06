import React from 'react'
import { Animated } from 'react-native'
import { SkeletonProviderProps } from './PropsType'

export interface SkeletonAnimationContextValue {
  opacity: Animated.AnimatedInterpolation
}

export const SkeletonAnimationContext =
  React.createContext<SkeletonAnimationContextValue | null>(null)

const getOpacity = (opacityValue: Animated.Value) =>
  opacityValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.25, 1],
  })

const SkeletonProvider: React.FC<SkeletonProviderProps> = (props) => {
  const { children } = props
  const opacityValue = React.useRef(new Animated.Value(0)).current

  const opacity = React.useMemo(() => getOpacity(opacityValue), [opacityValue])

  React.useEffect(() => {
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
  }, [opacityValue])

  const value = React.useMemo(() => ({ opacity }), [opacity])

  return (
    <SkeletonAnimationContext.Provider value={value}>
      {children}
    </SkeletonAnimationContext.Provider>
  )
}

SkeletonProvider.displayName = 'SkeletonProvider'

export default SkeletonProvider
