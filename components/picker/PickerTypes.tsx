import { StyleProp, TextStyle, ViewStyle } from 'react-native'

export type PickerProps = {
  disabled?: boolean
  selectedValue?: any
  onValueChange?: (value: any) => void
  itemStyle?: StyleProp<TextStyle>
  indicatorStyle?: StyleProp<ViewStyle>
  indicatorClassName?: string
  defaultSelectedValue?: any
  style?: StyleProp<ViewStyle>
  onScrollChange?: (value: any) => void
  noAnimate?: boolean
  numberOfLines?: number
}
