import { StyleProp, TextStyle, ViewStyle } from 'react-native'

interface DatePickerProps {
  date?: any
  defaultDate?: any
  minDate?: any
  maxDate?: any
  mode?: string
  disabled?: boolean
  locale?: any
  minuteStep?: number
  formatMonth?: (month: number, date?: any) => any
  formatDay?: (day: number, date?: any) => any
  onDateChange?: (date: any) => void
  onValueChange?: (vals: any, index: number) => void
  itemStyle?: StyleProp<TextStyle>
  style?: StyleProp<ViewStyle>
  onScrollChange?: (date: any, vals: any, index: number) => void
  rootNativeProps?: {}
  use12Hours?: boolean
}

export default DatePickerProps
