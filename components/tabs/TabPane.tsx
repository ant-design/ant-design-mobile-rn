import React from 'react';
import {  View, ViewStyle } from 'react-native';

export interface PropsType {
  key?: string;
  style?: ViewStyle;
  active: boolean;
}
export class TabPane extends React.PureComponent<PropsType, {}> {

  render() {
    const { active, ...props } = this.props;
    return <View {...props}>
      {props.children}
    </View>;
  }
}
