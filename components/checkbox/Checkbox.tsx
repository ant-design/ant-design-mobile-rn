import React from 'react';
import { StyleProp, Text, TextStyle, TouchableWithoutFeedback, View } from 'react-native';
import Icon from '../icon';
import { WithTheme, WithThemeStyles } from '../style';
import variables from '../style/themes/default';
import { CheckboxPropsType } from './PropsType';
import CheckboxStyles, { CheckboxStyle } from './style/index';

export interface CheckboxProps
  extends CheckboxPropsType,
    WithThemeStyles<CheckboxStyle> {
  style?: StyleProp<TextStyle>;
}

export default class Checkbox extends React.Component<CheckboxProps, any> {
  static CheckboxItem: any;
  static AgreeItem: any;

  constructor(props: CheckboxProps, context: any) {
    super(props, context);

    this.state = {
      checked: props.checked || props.defaultChecked || false,
    };
  }

  componentWillReceiveProps(nextProps: CheckboxProps): void {
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
    const { style, disabled, children } = this.props;
    const checked = this.state.checked;
    return (
      <WithTheme themeStyles={CheckboxStyles} styles={this.props.styles}>
        {styles => {
          let icon;
          if (checked) {
            icon = disabled ? (
              <Icon name="check-square" style={[styles.icon, style]} />
            ) : (
              <Icon
                name="check-square"
                color={variables.brand_primary}
                style={[styles.icon, style]}
              />
            );
          } else {
            icon = disabled ? (
              <Icon name="border" style={[styles.icon, style]} />
            ) : (
              <Icon
                name="border"
                color={variables.brand_primary}
                style={[styles.icon, style]}
              />
            );
          }

          return (
            <TouchableWithoutFeedback onPress={this.handleClick}>
              <View style={[styles.wrapper]}>
                {icon}
                {typeof children === 'string' ? (
                  // tslint:disable-next-line:jsx-no-multiline-js
                  <Text style={styles.iconRight}>{this.props.children}</Text>
                ) : (
                  children
                )}
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      </WithTheme>
    );
  }
}
