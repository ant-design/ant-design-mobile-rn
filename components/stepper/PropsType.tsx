import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface StepPropsType {
  min?: number;
  max?: number;
  step?: number | string;
  readOnly?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  value?: number;
  defaultValue?: number;
  onChange?: (value: any) => void;
  upStyle?: StyleProp<ViewStyle>;
  downStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  name?: string;
}
