interface IDatePickerProps {
  date?: any;
  defaultDate?: any;
  minDate?: any;
  maxDate?: any;
  mode?: string;
  disabled?: boolean;
  locale?: any;
  minuteStep?: number;
  formatMonth?: (month: number, date?: any) => any;
  formatDay?: (day: number, date?: any) => any;
  onDateChange?: (date: any) => void;
  onValueChange?: (vals: any, index: number) => void;
  itemStyle?: any;
  style?: any;
  /** web only */
  prefixCls?: string;
  /** web only */
  onScrollChange?: (date: any, vals: any, index: number) => void;
  rootNativeProps?: {};
  pickerPrefixCls?: string;
  className?: string;
  use12Hours?: boolean;
}

export default IDatePickerProps;
