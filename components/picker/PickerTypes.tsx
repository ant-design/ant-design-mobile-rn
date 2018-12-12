export type IPickerProps = {
  disabled?: boolean;
  selectedValue?: any;
  onValueChange?: (value: any) => void;
  itemStyle?: any;
  /** web only */
  prefixCls?: string;
  indicatorStyle?: any;
  indicatorClassName?: string;
  className?: string;
  defaultSelectedValue?: any;
  style?: any;
  onScrollChange?: (value: any) => void;
  noAnimate?: boolean;
};
