import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  TextStyle,
} from 'react-native';

import { CheckboxPropsType } from './PropsType';
import CheckboxStyle, { ICheckboxStyle } from './style/index';
import Icon from '../icon';
import variables from '../style/themes/default';

export interface ICheckboxNativeProps extends CheckboxPropsType {
  styles?: ICheckboxStyle;
  style?: StyleProp<TextStyle>;
}

const CheckboxStyles = StyleSheet.create<any>(CheckboxStyle);

export default class Checkbox extends React.Component<
  ICheckboxNativeProps,
  any
> {
  static CheckboxItem: any;
  static AgreeItem: any;

  static defaultProps = {
    styles: CheckboxStyles,
  };

  constructor(props: CheckboxPropsType, context: any) {
    super(props, context);

    this.state = {
      checked: props.checked || props.defaultChecked || false,
    };
  }

  componentWillReceiveProps(nextProps: CheckboxPropsType): void {
    if (typeof nextProps.checked === 'boolean') {
      this.setState({
        checked: !!nextProps.checked,
      });
    }
  }

  handleClick = () => {
    if (this.props.disabled) {
      return;
    }
    const checked = !this.state.checked;
    if (!(typeof this.props.checked === 'boolean')) {
      this.setState({
        checked,
      });
    }
    if (this.props.onChange) {
      this.props.onChange({ target: { checked } });
    }
  };

  render(): JSX.Element {
    const { style, disabled, children, styles } = this.props;
    const checked = this.state.checked;
    let icon;
    if (checked) {
      icon = disabled ? (
        <Icon name="check-square" style={[styles!.icon, style]} />
      ) : (
        <Icon
          name="check-square"
          color={variables.brand_primary}
          style={[styles!.icon, style]}
        />
      );
    } else {
      icon = disabled ? (
        <Icon name="border" style={[styles!.icon, style]} />
      ) : (
        <Icon
          name="border"
          color={variables.brand_primary}
          style={[styles!.icon, style]}
        />
      );
    }

    return (
      <TouchableWithoutFeedback onPress={this.handleClick}>
        <View style={[styles!.wrapper]}>
          {icon}
          {typeof children === 'string' ? (
            // tslint:disable-next-line:jsx-no-multiline-js
            <Text style={styles!.iconRight}>{this.props.children}</Text>
          ) : (
            children
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
