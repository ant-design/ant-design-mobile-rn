// tslint:disable:no-empty
import React, { useState } from 'react'
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

const Button: React.FC<ButtonProps> = (props) => {
  const [pressIn, setPressIn] = useState(false)
  const [touchIt, setTouchIt] = useState(false)

  const {
    size = 'large',
    type = 'default',
    disabled = false,
    loading = false,
    activeStyle,
    onPress = (_?: any) => {},
    onPressIn = (_?: any) => {},
    onPressOut = (_?: any) => {},
    onShowUnderlay = (_?: any) => {},
    onHideUnderlay = (_?: any) => {},
    style,
    styles,
    children,
    ...restProps
  } = props

  const handlePressIn = (event: GestureResponderEvent) => {
    setPressIn(true)
    onPressIn(event)
  }

  const handlePressOut = (event: GestureResponderEvent) => {
    setPressIn(false)
    onPressOut(event)
  }

  const handleShowUnderlay = () => {
    setTouchIt(true)
    onShowUnderlay()
  }

  const handleHideUnderlay = () => {
    setTouchIt(false)
    onHideUnderlay()
  }

  return (
    <WithTheme themeStyles={buttonStyles} styles={styles}>
      {(_styles) => {
        const textStyle = [
          _styles[`${size}RawText`],
          _styles[`${type}RawText`],
          disabled && _styles[`${type}DisabledRawText`],
          pressIn && _styles[`${type}HighlightText`],
        ]

        const wrapperStyle = [
          _styles.wrapperStyle,
          _styles[`${size}Raw`],
          _styles[`${type}Raw`],
          disabled && _styles[`${type}DisabledRaw`],
          pressIn && activeStyle && _styles[`${type}Highlight`],
          activeStyle && touchIt && activeStyle,
          style,
        ]

        const underlayColor = (
          StyleSheet.flatten(
            activeStyle ? activeStyle : _styles[`${type}Highlight`],
          ) as any
        ).backgroundColor

        const indicatorColor = (
          StyleSheet.flatten(
            pressIn
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
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onShowUnderlay={handleShowUnderlay}
            onHideUnderlay={handleHideUnderlay}>
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
              <AntmView style={textStyle}>{children}</AntmView>
            </View>
          </TouchableHighlight>
        )
      }}
    </WithTheme>
  )
}

Button.defaultProps = {
  disabled: false,
  loading: false,
  onPress: (_?: any) => {},
  onPressIn: (_?: any) => {},
  onPressOut: (_?: any) => {},
  onShowUnderlay: (_?: any) => {},
  onHideUnderlay: (_?: any) => {},
}

export default Button
