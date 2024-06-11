import { StyleProp, ViewStyle } from 'react-native'
import { InputProps } from '../input/PropsType'
import { Theme } from '../style'
import { StepperStyle } from './style'

export interface StepperProps<ValueType>
  extends Omit<InputProps, 'value' | 'defaultValue' | 'onChange'> {
  allowEmpty?: false
  value?: ValueType
  defaultValue?: ValueType
  onChange?: (value: ValueType) => void
  min?: ValueType
  max?: ValueType
  step?: ValueType
  digits?: number
  disabled?: boolean
  // Format & Parse
  parser?: (text: string) => ValueType
  formatter?: (value?: ValueType) => string
  // String Mode
  stringMode?: boolean
  style?: StyleProp<ViewStyle>
  styles?: Partial<StepperStyle>
  themeStyles?: (theme: Theme) => Partial<StepperStyle>
}
