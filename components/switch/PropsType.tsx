export interface SwitchPropsType {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  color?: string;
  name?: string;
  onPress?: (checked?: boolean) => void;
}
