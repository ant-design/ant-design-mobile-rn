import React from 'react';
import { View } from 'react-native';
import MultiPickerMixin from './MultiPickerMixin';
import MultiPickerProps from './MultiPickerProps';

export interface IMultiPickerProp {
  getValue: Function;
}

const MultiPicker = (props: IMultiPickerProp & MultiPickerProps) => {
  const { children, style } = props;
  const selectedValue = props.getValue();
  const colElements = React.Children.map(children, (col: any, i) => {
    return React.cloneElement(col, {
      selectedValue: selectedValue[i],
      onValueChange: (...args: any[]) => props.onValueChange!(i, ...args),
    });
  });
  return <View style={style}>{colElements}</View>;
};

export default MultiPickerMixin(MultiPicker);
