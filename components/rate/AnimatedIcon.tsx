import React from 'react'
import { Animated } from 'react-native'

import { AnimatedIconProps } from './PropsType'
import { defaultAnimationConfig } from './constants'

const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  active,
  config,
  children,
  style,
}) => {
  const {
    scale = defaultAnimationConfig.scale,
    easing = defaultAnimationConfig.easing,
    duration = defaultAnimationConfig.duration,
  } = config

  const animatedSize = React.useRef(new Animated.Value(active ? scale : 1))

  React.useEffect(() => {
    const animation = Animated.timing(animatedSize.current, {
      toValue: active ? scale : 1,
      useNativeDriver: true,
      easing,
      duration,
    })

    animation.start()
    return animation.stop
  }, [active, scale, easing, duration])

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        style,
        {
          transform: [
            {
              scale: animatedSize.current,
            },
          ],
        },
      ]}>
      {children}
    </Animated.View>
  )
}

export default AnimatedIcon
