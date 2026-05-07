import React from 'react'
import { Animated, Easing } from 'react-native'
import { SkeletonProviderProps } from './PropsType'

export interface SkeletonAnimationContextValue {
  progress: Animated.Value
}

export const SkeletonAnimationContext =
  React.createContext<SkeletonAnimationContextValue | null>(null)

export const startSkeletonAnimation = (progress: Animated.Value) => {
  progress.setValue(0)
  const animation = Animated.loop(
    Animated.sequence([
      Animated.timing(progress, {
        toValue: 1,
        duration: 1400,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        useNativeDriver: true,
      }),
      Animated.timing(progress, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]),
  )

  animation.start()

  return animation
}

const SkeletonProvider: React.FC<SkeletonProviderProps> = (props) => {
  const { children } = props
  const progress = React.useRef(new Animated.Value(0)).current

  React.useEffect(() => {
    const animation = startSkeletonAnimation(progress)

    return () => {
      animation.stop()
      progress.setValue(0)
    }
  }, [progress])

  const value = React.useMemo(() => ({ progress }), [progress])

  return (
    <SkeletonAnimationContext.Provider value={value}>
      {children}
    </SkeletonAnimationContext.Provider>
  )
}

SkeletonProvider.displayName = 'SkeletonProvider'

export default SkeletonProvider
