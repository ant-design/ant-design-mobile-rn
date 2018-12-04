import React from 'react';
import { StyleProp, Text, TextStyle, View } from 'react-native';
import Swipeout, { SwipeoutButtonProperties, SwipeoutProperties } from 'react-native-swipeout';

export interface SwipeActionProps extends SwipeoutProperties {}
export interface SwipeoutButtonProps extends SwipeoutButtonProperties {
  style?: StyleProp<TextStyle> & { backgroundColor: string };
}
class SwipeAction extends React.Component<SwipeActionProps> {
  static defaultProps: SwipeActionProps = {
    autoClose: false,
    disabled: false,
    onOpen() {},
    onClose() {},
  };
  renderCustomButton(button: SwipeoutButtonProps) {
    const buttonStyle = button.style;
    const bgColor = buttonStyle ? buttonStyle.backgroundColor : 'transparent';
    const Component = (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: bgColor,
        }}
      >
        {React.isValidElement(button.text) ? (
          button.text
        ) : (
          <Text style={[buttonStyle, { textAlign: 'center' }]}>
            {button.text}
          </Text>
        )}
      </View>
    );
    return {
      text: button.text || 'Click',
      onPress: button.onPress,
      type: 'default',
      component: Component,
      backgroundColor: 'transparent',
      color: '#999',
      disabled: false,
    };
  }
  render() {
    const {
      disabled,
      autoClose,
      style,
      left,
      right,
      onOpen,
      onClose,
      children,
      ...restProps
    } = this.props;

    const customLeft =
      left &&
      left.map(btn => {
        return this.renderCustomButton(btn);
      });
    const customRight =
      right &&
      right.map(btn => {
        return this.renderCustomButton(btn);
      });

    return customLeft || customRight ? (
      <Swipeout
        autoClose={autoClose}
        left={customLeft as SwipeoutButtonProps[]}
        right={customRight as SwipeoutButtonProps[]}
        style={style}
        onOpen={onOpen}
        onClose={onClose}
        disabled={disabled}
      >
        {children}
      </Swipeout>
    ) : (
      <View style={style} {...restProps}>
        {children}
      </View>
    );
  }
}

export default SwipeAction;
