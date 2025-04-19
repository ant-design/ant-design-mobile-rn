// tslint:disable:no-empty
import React from 'react'
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
  ViewStyle,
} from 'react-native'
import { WithTheme, WithThemeStyles } from '../style'
import AntmView from '../view'
import { ButtonPropsType } from './PropsType'
import buttonStyles, { ButtonStyles } from './style/index'

export interface ButtonProps
  extends ButtonPropsType,
    WithThemeStyles<ButtonStyles>,
    TouchableHighlightProps {
  activeStyle?: StyleProp<ViewStyle>
  children?: React.ReactNode
  /** 解决ts类型冲突 */
  disabled?: boolean
}

export default class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    pressIn: false,
    disabled: false,
    loading: false,

    onPress: (_?: any) => {},
    onPressIn: (_?: any) => {},
    onPressOut: (_?: any) => {},
    onShowUnderlay: (_?: any) => {},
    onHideUnderlay: (_?: any) => {},
  }

  constructor(props: ButtonProps) {
    super(props)
    this.state = {
      pressIn: false,
      touchIt: false,
    }
  }

  onPressIn = (event: GestureResponderEvent) => {
    this.setState({ pressIn: true })
    if (this.props.onPressIn) {
      this.props.onPressIn(event)
    }
  }
  onPressOut = (event: GestureResponderEvent) => {
    this.setState({ pressIn: false })
    if (this.props.onPressOut) {
      this.props.onPressOut(event)
    }
  }
  onShowUnderlay = () => {
    this.setState({ touchIt: true })
    if (this.props.onShowUnderlay) {
      this.props.onShowUnderlay()
    }
  }
  onHideUnderlay = () => {
    this.setState({ touchIt: false })
    if (this.props.onHideUnderlay) {
      this.props.onHideUnderlay()
    }
  }

  render() {
    // for using setNativeProps to improve performance
    const {
      size = 'large',
      type = 'default',
      disabled,
      activeStyle,
      onPress,
      style,
      styles,
      loading,
      ...restProps
    } = this.props
    return (
      <WithTheme themeStyles={buttonStyles} styles={styles}>
        {(_styles) => {
          const textStyle = [
            _styles[`${size}RawText`],
            _styles[`${type}RawText`],
            disabled && _styles[`${type}DisabledRawText`],
            this.state.pressIn && _styles[`${type}HighlightText`],
          ]

          const wrapperStyle = [
            _styles.wrapperStyle,
            _styles[`${size}Raw`],
            _styles[`${type}Raw`],
            disabled && _styles[`${type}DisabledRaw`],
            this.state.pressIn && activeStyle && _styles[`${type}Highlight`],
            activeStyle && this.state.touchIt && activeStyle,
            style,
          ]

          const underlayColor = (
            StyleSheet.flatten(
              activeStyle ? activeStyle : _styles[`${type}Highlight`],
            ) as any
          ).backgroundColor

          const indicatorColor = (
            StyleSheet.flatten(
              this.state.pressIn
                ? _styles[`${type}HighlightText`]
                : _styles[`${type}RawText`],
            ) as any
          ).color

          return (
            <TouchableHighlight
              accessibilityRole="button"
              accessibilityState={{ disabled: !!disabled }}
              activeOpacity={0.4}
              {...restProps}
              style={wrapperStyle}
              disabled={disabled}
              underlayColor={underlayColor}
              onPress={(e) => onPress && onPress(e)}
              onPressIn={this.onPressIn}
              onPressOut={this.onPressOut}
              onShowUnderlay={this.onShowUnderlay}
              onHideUnderlay={this.onHideUnderlay}>
              <View style={_styles.container}>
                {loading ? (
                  // tslint:disable-next-line:jsx-no-multiline-js
                  <ActivityIndicator
                    style={_styles.indicator}
                    animating
                    color={indicatorColor}
                    size="small"
                  />
                ) : null}
                <AntmView style={textStyle}>{this.props.children}</AntmView>
              </View>
            </TouchableHighlight>
          )
        }}
      </WithTheme>
    )
  }
}
