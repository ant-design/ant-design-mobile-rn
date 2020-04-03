
import React from 'react';
import { Platform, StyleProp, Text, TouchableWithoutFeedback, View, ViewStyle } from 'react-native';
import { WithTheme, WithThemeStyles } from '../style';
import { TagPropsType } from './PropsType';
import TagStyles, { TagStyle } from './style/index';

export interface TagNativeProps
  extends TagPropsType,
    WithThemeStyles<TagStyle> {
  style?: StyleProp<ViewStyle>;
}

export default class Tag extends React.Component<TagNativeProps, any> {
  static defaultProps = {
    disabled: false,
    small: false,
    selected: false,
    closable: false,
    onClose() {},
    afterClose() {},
    onChange() {},
    onLongPress() {},
  };

  closeDom: View | null;

  constructor(props: TagNativeProps) {
    super(props);

    this.state = {
      selected: props.selected,
      closed: false,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps: TagNativeProps) {
    if (this.props.selected !== nextProps.selected) {
      this.setState({
        selected: nextProps.selected,
      });
    }
  }

  onPress = () => {
    const { disabled, onChange } = this.props;
    if (disabled) {
      return;
    }
    const isSelect: boolean = this.state.selected;
    this.setState(
      {
        selected: !isSelect,
      },
      () => {
        if (onChange) {
          onChange(!isSelect);
        }
      },
    );
  };

  handleLongPress = () => {
    const { disabled, onLongPress } = this.props;
    if (disabled) {
      return;
    }
    if (onLongPress) {
      onLongPress();
    }
  };

  onTagClose = () => {
    if (this.props.onClose) {
      this.props.onClose();
    }
    this.setState(
      {
        closed: true,
      },
      this.props.afterClose,
    );
  };

  onPressIn = (styles: ReturnType<typeof TagStyles>) => () => {
    if (this.closeDom) {
      this.closeDom.setNativeProps({
        style: [
          styles.close,
          Platform.OS === 'ios' ? styles.closeIOS : styles.closeAndroid,
          {
            backgroundColor: '#888',
          },
        ],
      });
    }
  };

  onPressOut = (styles: ReturnType<typeof TagStyles>) => () => {
    if (this.closeDom) {
      this.closeDom.setNativeProps({
        style: [
          styles.close,
          Platform.OS === 'ios' ? styles.closeIOS : styles.closeAndroid,
        ],
      });
    }
  };

  render() {
    const { children, disabled, small, closable, style } = this.props;
    const selected = this.state.selected;

    return (
      <WithTheme styles={this.props.styles} themeStyles={TagStyles}>
        {styles => {
          let wrapStyle;
          let textStyle;
          if (!selected && !disabled) {
            wrapStyle = styles.normalWrap;
            textStyle = styles.normalText;
          }
          if (selected && !disabled) {
            wrapStyle = styles.activeWrap;
            textStyle = styles.activeText;
          }
          if (disabled) {
            wrapStyle = styles.disabledWrap;
            textStyle = styles.disabledText;
          }

          const sizeWrapStyle = small ? styles.wrapSmall : {};
          const sizeTextStyle = small ? styles.textSmall : {};

          const closableDom =
            closable && !small && !disabled ? (
              <TouchableWithoutFeedback
                onPressIn={this.onPressIn(styles)}
                onPressOut={this.onPressOut(styles)}
                onPress={this.onTagClose}
              >
                <View
                  ref={(component: any) => ((this.closeDom as any) = component)}
                  style={[
                    styles.close,
                    Platform.OS === 'ios'
                      ? styles.closeIOS
                      : styles.closeAndroid,
                  ]}
                >
                  <Text
                    style={[
                      styles.closeText,
                      Platform.OS === 'android' ? styles.closeTransform : {},
                    ]}
                  >
                    ×
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            ) : null;

          return !this.state.closed ? (
            <View style={[styles.tag, style]}>
              <TouchableWithoutFeedback
                onPress={this.onPress}
                onLongPress={this.handleLongPress}
              >
                <View style={[styles.wrap, sizeWrapStyle, wrapStyle]}>
                  <Text style={[styles.text, sizeTextStyle, textStyle]}>
                    {children}{' '}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              {closableDom}
            </View>
          ) : null;
        }}
      </WithTheme>
    );
  }
}
