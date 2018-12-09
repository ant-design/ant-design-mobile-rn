import React from 'react';
import { StyleProp, Text, TextStyle, TouchableWithoutFeedback, View } from 'react-native';
import Icon from '../icon';
import { WithTheme, WithThemeStyles } from '../style';
import variables from '../style/themes/default';
import { RadioPropsType } from './PropsType';
import RadioStyles, { RadioStyle } from './style/index';

export interface RadioNativeProps
  extends RadioPropsType,
    WithThemeStyles<RadioStyle> {
  style?: StyleProp<TextStyle>;
}

export default class Radio extends React.Component<RadioNativeProps, any> {
  static RadioItem: any;

  constructor(props: RadioNativeProps, context: any) {
    super(props, context);

    this.state = {
      checked: props.checked || props.defaultChecked || false,
    };
  }

  componentWillReceiveProps(nextProps: RadioNativeProps): void {
    if ('checked' in nextProps) {
      this.setState({
        checked: !!nextProps.checked,
      });
    }
  }

  handleClick = () => {
    if (this.props.disabled) {
      return;
    }
    if (!('checked' in this.props)) {
      this.setState({
        checked: true,
      });
    }
    if (this.props.onChange) {
      this.props.onChange({ target: { checked: true } });
    }
  };

  render(): JSX.Element {
    const { style, disabled, children } = this.props;

    return (
      <WithTheme styles={this.props.styles} themeStyles={RadioStyles}>
        {styles => {
          const checked = this.state.checked;
          let icon = undefined;
          if (checked) {
            icon = disabled ? (
              <Icon name="check" style={[styles.icon, style]} />
            ) : (
              <Icon
                name="check"
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
                  <Text>{this.props.children}</Text>
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
