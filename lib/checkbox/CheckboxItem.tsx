import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import List from '../list/index';
import { WithTheme, WithThemeStyles } from '../style';
import Checkbox from './Checkbox';
import { CheckboxItemPropsType } from './PropsType';
import CheckboxItemStyles, { CheckboxStyle } from './style/index';

const ListItem = List.Item;

export interface CheckboxItemProps
  extends CheckboxItemPropsType,
    WithThemeStyles<CheckboxStyle> {
  checkboxStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}

export default class CheckboxItem extends React.Component<
  CheckboxItemProps,
  any
> {
  checkbox: Checkbox | null;
  handleClick = () => {
    if (this.checkbox) {
      this.checkbox.handleClick();
    }
    if (this.props.onPress) {
      this.props.onPress();
    }
  };

  render() {
    const {
      style,
      checkboxStyle,
      defaultChecked,
      checked,
      disabled,
      children,
      extra,
      onChange,
    } = this.props;

    const thumbNode = (
      <WithTheme styles={this.props.styles} themeStyles={CheckboxItemStyles}>
        {styles => (
          <Checkbox
            ref={ref => (this.checkbox = ref)}
            style={[styles.checkboxItemCheckbox, checkboxStyle]}
            defaultChecked={defaultChecked}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
          />
        )}
      </WithTheme>
    );
    return (
      <ListItem
        style={style}
        onPress={disabled ? undefined : this.handleClick}
        extra={extra}
        thumb={thumbNode}
      >
        {children}
      </ListItem>
    );
  }
}
