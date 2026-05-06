import { Easing } from 'react-native'
import { AnimationConfig } from './PropsType'

export const defaultAnimationConfig: Required<AnimationConfig> = {
  easing: Easing.elastic(2),
  duration: 300,
  scale: 1.2,
  delay: 300,
}
