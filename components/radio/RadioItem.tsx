import React from 'react';
import { ImageStyle, StyleProp, Text, View, ViewStyle } from 'react-native';
import List from '../list/index';
import { WithTheme, WithThemeStyles } from '../style';
import { RadioItemPropsType } from './PropsType';
import Radio from './Radio';
import RadioItemStyles, { RadioStyle } from './style/index';

const ListItem = List.Item;

export interface RadioItemNativeProps
  extends RadioItemPropsType,
    WithThemeStyles<RadioStyle> {
  style?: StyleProp<ViewStyle>;
  radioStyle?: StyleProp<ImageStyle>;
}

export default class RadioItem extends React.Component<
  RadioItemNativeProps,
  any
> {
  radio: Radio | null;

  handleClick = () => {
    if (this.radio) {
      this.radio.handleClick();
    }
  };

  render() {
    const {
      style,
      radioStyle,
      defaultChecked,
      checked,
      disabled,
      children,
      onChange,
    } = this.props;

    return (
      <WithTheme styles={this.props.styles} themeStyles={RadioItemStyles}>
        {styles => {
          let contentDom: React.ReactElement<any> | null = null;
          if (children && React.isValidElement(children)) {
            contentDom = <View style={{ flex: 1 }}>{children}</View>;
          } else {
            const contentStyle = [
              styles.radioItemContent,
              disabled ? styles.radioItemContentDisable : {},
            ];
            contentDom = (
              <Text style={contentStyle} numberOfLines={1}>
                {this.props.children}
              </Text>
            );
          }

          const radioEl = (
            <Radio
              ref={ref => (this.radio = ref)}
              style={radioStyle}
              defaultChecked={defaultChecked}
              checked={checked}
              onChange={onChange}
              disabled={disabled}
            />
          );

          return (
            <ListItem
              style={style}
              onPress={disabled ? undefined : this.handleClick}
              extra={radioEl}
            >
              {contentDom}
            </ListItem>
          );
        }}
      </WithTheme>
    );
  }
}
