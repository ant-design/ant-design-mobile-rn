import { PressableProps, ViewStyle } from 'react-native'

export interface ButtonPropsType {
  type?: 'primary' | 'warning' | 'ghost'
  size?: 'large' | 'small'
  loading?: boolean
  style?: ViewStyle
  activeStyle?: ViewStyle | false
  underlayColor?: string
  onPress?: PressableProps['onPress']
  onPressIn?: PressableProps['onPressIn']
  onPressOut?: PressableProps['onPressOut']
  onShowUnderlay?: () => void
  onHideUnderlay?: () => void
}
