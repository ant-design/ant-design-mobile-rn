import React from 'react';
import { ImageStyle, StyleProp, Text, TouchableWithoutFeedback, View, ViewStyle } from 'react-native';
import { WithTheme, WithThemeStyles } from '../style';
import Checkbox from './Checkbox';
import { CheckboxPropsType } from './PropsType';
import AgreeItemstyles, { CheckboxStyle } from './style/index';

export interface AgreeItemProps
  extends CheckboxPropsType,
    WithThemeStyles<CheckboxStyle> {
  checkboxStyle?: StyleProp<ImageStyle>;
  style?: StyleProp<ViewStyle>;
}

export default class AgreeItem extends React.Component<AgreeItemProps, any> {
  checkbox: Checkbox | null;

  handleClick = () => {
    if (this.checkbox) {
      this.checkbox.handleClick();
    }
  };

  render() {
    const {
      style,
      checkboxStyle,
      children,
      disabled,
      checked,
      defaultChecked,
      onChange,
    } = this.props;

    return (
      <WithTheme styles={this.props.styles} themeStyles={AgreeItemstyles}>
        {styles => {
          const contentDom = !children ? null : React.isValidElement(
              children,
            ) ? (
            children
          ) : (
            <Text>{children}</Text>
          );

          return (
            <TouchableWithoutFeedback onPress={this.handleClick}>
              <View style={[styles.agreeItem, style]}>
                <Checkbox
                  ref={ref => (this.checkbox = ref)}
                  style={[styles.agreeItemCheckbox, checkboxStyle]}
                  disabled={disabled}
                  checked={checked}
                  defaultChecked={defaultChecked}
                  onChange={onChange}
                />
                <View style={{ flex: 1 }}>{contentDom}</View>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      </WithTheme>
    );
  }
}
