// tslint:disable:no-empty
import React, { useCallback, useState } from 'react'
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleProp,
  TextStyle,
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
    Omit<PressableProps, 'style'> {
  activeStyle?: StyleProp<ViewStyle> | false
  textStyle?: TextStyle
  children?: React.ReactNode
  /** 解决ts类型冲突 */
  disabled?: boolean
  onShowUnderlay?: () => void
  onHideUnderlay?: () => void
  underlayColor?: string
  style?: ViewStyle
}

type OnPressInType = PressableProps['onPressIn']
type OnPressOutType = PressableProps['onPressOut']

const Button: React.FC<ButtonProps> = (props) => {
  const [pressIn, setPressIn] = useState(false)
  const [touchIt, setTouchIt] = useState(false)

  const {
    size = 'large',
    type = 'default',
    disabled = false,
    loading = false,
    activeStyle,
    onPress = () => {},
    onPressIn = () => {},
    onPressOut = () => {},
    onShowUnderlay = () => {},
    onHideUnderlay = () => {},
    style,
    textStyle = {},
    styles,
    children,
    underlayColor,
    ...restProps
  } = props

  const isActiveStyleEnabled = activeStyle !== false

  const handlePressIn: OnPressInType = (event) => {
    setPressIn(true)
    onPressIn?.(event)
    if (isActiveStyleEnabled) {
      setTouchIt(true)
      onShowUnderlay()
    }
  }

  const handlePressOut: OnPressOutType = (event) => {
    setPressIn(false)
    onPressOut?.(event)
    if (isActiveStyleEnabled) {
      setTouchIt(false)
      onHideUnderlay()
    }
  }

  const getDynamicStyle = useCallback(
    (_styles: ButtonStyles) => {
      const wrapperStyle = [
        _styles.wrapperStyle,
        _styles[`${size}Raw`] || {},
        _styles[`${type}Raw`] || _styles.defaultRaw || {},
      ] as StyleProp<ViewStyle>[]

      if (disabled) {
        wrapperStyle.push(_styles[`${type}DisabledRaw`] || {})
      }

      if (style) {
        wrapperStyle.push(style)
      }

      return wrapperStyle.filter(Boolean)
    },
    [disabled, size, style, type],
  )

  const getDynamicTextStyle = useCallback(
    (pressed: boolean, _styles: ButtonStyles) => {
      const textStyles = [
        _styles[`${size}RawText`] || {},
        _styles[`${type}RawText`] || _styles.defaultRawText || {},
      ] as StyleProp<ViewStyle>[]

      if (disabled) {
        textStyles.push(_styles[`${type}DisabledRawText`] || {})
      }

      if (pressed && touchIt) {
        textStyles.push(activeStyle || _styles[`${type}HighlightText`] || {})
      }

      if (textStyle) {
        textStyles.push(textStyle)
      }

      return textStyles.filter(Boolean)
    },
    [activeStyle, disabled, size, textStyle, touchIt, type],
  )

  const getDynamicIndicatorStyle = useCallback(
    (pressed: boolean, _styles: ButtonStyles): string => {
      const styleKey = disabled
        ? `${type}DisabledRawText`
        : pressed && activeStyle !== false
        ? `${type}HighlightText`
        : `${type}RawText`

      const indicatorStyle = _styles[styleKey as keyof ButtonStyles]

      return indicatorStyle &&
        typeof indicatorStyle === 'object' &&
        'color' in indicatorStyle
        ? (indicatorStyle.color as string)
        : (_styles.defaultRawText.color as string)
    },
    [activeStyle, disabled, type],
  )

  const getDynamicUnderlayStyle = useCallback(
    (pressed: boolean, _styles: ButtonStyles) => {
      const containerStyle = [
        _styles.underlayStyle,
        _styles[`${size}UnderlayContainerRaw`] || {},
        _styles[`${type}UnderlayContainerRaw`] ||
          _styles.defaultUnderlayContainerRaw ||
          {},
      ] as StyleProp<ViewStyle>[]

      if (pressed) {
        containerStyle.push(activeStyle || _styles[`${type}Highlight`] || {})
      }

      if (pressed && underlayColor) {
        containerStyle.push({ backgroundColor: underlayColor })
      }

      return containerStyle.filter(Boolean)
    },
    [activeStyle, size, type, underlayColor],
  )

  return (
    <WithTheme themeStyles={buttonStyles} styles={styles}>
      {(_styles) => {
        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={{ disabled: !!disabled }}
            {...restProps}
            style={getDynamicStyle(_styles)}
            disabled={disabled}
            android_ripple={undefined}
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}>
            <View style={getDynamicUnderlayStyle(touchIt, _styles)}>
              <View style={_styles.container}>
                {loading ? (
                  <ActivityIndicator
                    style={_styles.indicator}
                    animating
                    color={getDynamicIndicatorStyle(pressIn, _styles)}
                    size="small"
                  />
                ) : null}
                <AntmView style={getDynamicTextStyle(pressIn, _styles)}>
                  {children}
                </AntmView>
              </View>
            </View>
          </Pressable>
        )
      }}
    </WithTheme>
  )
}

export default Button
