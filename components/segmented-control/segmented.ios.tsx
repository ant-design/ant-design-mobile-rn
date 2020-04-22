import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import SegmentedControlIOS from '@react-native-community/segmented-control';
import { SegmentedControlPropsType } from './PropsType';
import { WithTheme } from '../style';

export interface SegmentedControlProps extends SegmentedControlPropsType {
  style?: StyleProp<ViewStyle>;
}

export default class SegmentedControl extends React.Component<
  SegmentedControlProps,
  any
> {
  static defaultProps = {
    selectedIndex: 0,
  };

  render() {
    const { tintColor, disabled, selectedIndex, ...restProps } = this.props;
    return (
      <WithTheme>
        {(_, theme) => (
          <SegmentedControlIOS
            tintColor={tintColor||theme.segmented_control_color}
            selectedIndex={selectedIndex}
            {...restProps}
            enabled={!disabled}
          />
        )}
      </WithTheme>
    );
  }
}
