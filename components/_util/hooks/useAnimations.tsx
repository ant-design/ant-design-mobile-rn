import * as React from 'react'
import { Animated, EasingFunction } from 'react-native'

type animateType = (_TimingAnimationConfig: {
  toValue?:
    | number
    | Animated.AnimatedValue
    | { x: number; y: number }
    | Animated.AnimatedValueXY
    | Animated.AnimatedInterpolation
  easing?: EasingFunction
  duration?: number
  delay?: number
  useNativeDriver?: boolean
  callback?: (arg: { finished: boolean }) => void
}) => void

interface ConfigureInterface {
  initialValue: number
}

interface AnimatedFuncParams extends Animated.TimingAnimationConfig {
  callback?: Animated.EndCallback
}

// Animated.Value hook
export function useAnimate(configure: ConfigureInterface) {
  const useAnimatedValue = (initialValue: number) => {
    const ref = React.useRef(new Animated.Value(initialValue))
    return ref.current
  }

  const animatedValue = useAnimatedValue(configure.initialValue)

  return [animatedValue]
}

// Animated.timing hook
export function useAnimatedTiming(): [Animated.Value, animateType] {
  const animatedRef = React.useRef<Animated.CompositeAnimation | void>()

  var [animatedValue] = useAnimate({
    initialValue: 0,
  })

  const animatedFunc = React.useCallback(
    ({
      toValue = 1,
      easing,
      duration = 200,
      delay,
      useNativeDriver = false,
      callback,
    }: AnimatedFuncParams) => {
      animatedRef.current?.stop()
      animatedRef.current = Animated.timing(animatedValue, {
        toValue,
        easing,
        duration,
        delay,
        useNativeDriver,
      }).start(callback)
    },
    [animatedValue],
  )

  return [animatedValue, animatedFunc]
}
