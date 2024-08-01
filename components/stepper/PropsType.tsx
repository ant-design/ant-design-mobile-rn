import { TouchableHighlightProps } from 'react-native'
import { InputProps } from '../input/PropsType'
import { Theme } from '../style'
import { StepperStyle } from './style'

type ValueProps<ValueType> = {
  allowEmpty: true
  value?: ValueType | null
  defaultValue?: ValueType | null
  onChange?: (value: ValueType | null) => void
}

type ValuePropsWithNull<ValueType> = {
  allowEmpty?: false
  value?: ValueType
  defaultValue?: ValueType
  onChange?: (value: ValueType) => void
}

export type BaseStepperProps<ValueType> = Omit<
  InputProps,
  'value' | 'defaultValue' | 'onChange' | 'styles'
> &
  (ValuePropsWithNull<ValueType> | ValueProps<ValueType>) & {
    min?: ValueType
    max?: ValueType
    step?: ValueType
    digits?: number
    disabled?: boolean
    minusButtonProps?: TouchableHighlightProps
    plusButtonProps?: TouchableHighlightProps
    // Format & Parse
    parser?: (text: string) => ValueType
    formatter?: (value?: ValueType) => string
    styles?: Partial<StepperStyle>
    themeStyles?: (theme: Theme) => Partial<StepperStyle>
  }

type NumberStepperProps = BaseStepperProps<number> & {
  // stringMode
  stringMode?: false
}
type StringStepperProps = BaseStepperProps<string> & {
  // stringMode
  stringMode: true
}

export type StepperProps = NumberStepperProps | StringStepperProps
