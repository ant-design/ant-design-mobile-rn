import React from 'react';
import PopupPicker from '../Popup';
import { IPopupPickerProps } from '../PopupPickerTypes';
import { CascaderValue, ICascaderProps } from './CascaderTypes';

export interface IPopupCascaderProps extends IPopupPickerProps {
  cascader: React.ReactElement<ICascaderProps>;
  onChange?: (date?: CascaderValue) => void;
}

class PopupCascader extends React.Component<IPopupCascaderProps, any> {
  static defaultProps = {
    pickerValueProp: 'value',
    pickerValueChangeProp: 'onChange',
  };

  onOk = (v: any) => {
    const { onChange, onOk } = this.props;
    if (onChange) {
      onChange(v);
    }
    if (onOk) {
      onOk(v);
    }
  };

  render() {
    return (
      <PopupPicker
        picker={this.props.cascader}
        {...this.props}
        onOk={this.onOk}
      />
    );
  }
}

export default PopupCascader;
