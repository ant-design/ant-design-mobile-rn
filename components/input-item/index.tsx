import React from 'react'
import {
  GestureResponderEvent,
  Platform,
  StyleSheet,
  Text,
  TextInputProperties,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { Omit } from 'utility-types'
import Icon from '../icon'
import { WithTheme, WithThemeStyles } from '../style'
import Input from './Input'
import { InputItemPropsType } from './PropsType'
import InputItemStyles, { InputItemStyle } from './style/index'
/**
 * React Native TextInput Props except these props
 */
export type TextInputProps = Omit<
  TextInputProperties,
  'onChange' | 'onFocus' | 'onBlur'
>

export interface InputItemProps
  extends InputItemPropsType,
    TextInputProps,
    WithThemeStyles<InputItemStyle> {
  last?: boolean
  onExtraClick?: (event: GestureResponderEvent) => void
  onErrorClick?: (event: GestureResponderEvent) => void
  disabled?: boolean
}

interface InputItemState {
  focus: boolean
}

const noop = () => {}

function normalizeValue(value?: string) {
  if (typeof value === 'undefined' || value === null) {
    return ''
  }
  return value
}

export default class InputItem extends React.Component<
  InputItemProps,
  InputItemState
> {
  static defaultProps = {
    type: 'text',
    editable: true,
    clear: false,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    extra: '',
    onExtraClick: noop,
    error: false,
    onErrorClick: noop,
    labelNumber: 4,
    labelPosition: 'left',
    textAlign: 'left',
    last: false,
  }

  state: InputItemState = {
    focus: false,
  }
  inputRef: Input | null

  onChange = (text: string) => {
    const { onChange, type } = this.props
    const maxLength = this.props.maxLength as number
    switch (type) {
      case 'bankCard':
        text = text.replace(/\D/g, '')
        if (maxLength > 0) {
          text = text.substring(0, maxLength)
        }
        text = text.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ')
        break
      case 'phone':
        text = text.replace(/\D/g, '').substring(0, 11)
        const valueLen = text.length
        if (valueLen > 3 && valueLen < 8) {
          text = `${text.substr(0, 3)} ${text.substr(3)}`
        } else if (valueLen >= 8) {
          text = `${text.substr(0, 3)} ${text.substr(3, 4)} ${text.substr(7)}`
        }
        break
      case 'password':
        break
      default:
        break
    }
    if (onChange) {
      onChange(text)
    }
  }

  onInputBlur = () => {
    this.setState({ focus: false }, () => {
      if (this.props.onBlur) {
        this.props.onBlur(this.props.value)
      }
    })
  }

  onInputFocus = () => {
    this.setState({ focus: true }, () => {
      if (this.props.onFocus) {
        this.props.onFocus(this.props.value)
      }
    })
  }

  onInputClear = () => {
    if (this.inputRef) {
      this.inputRef.clear()
    }
    this.onChange('')
  }

  // this is instance method for user to use
  focus = () => {
    if (this.inputRef) {
      this.inputRef.focus()
    }
  }

  render() {
    const android = Platform.OS === 'android'
    const {
      type,
      editable,
      clear,
      children,
      error,
      extra,
      labelNumber,
      last,
      onExtraClick,
      onErrorClick,
      styles,
      disabled,
      ...restProps
    } = this.props
    const { focus } = this.state
    const { value, defaultValue, style } = restProps
    let valueProps: any
    if ('value' in this.props) {
      valueProps = {
        value: normalizeValue(value),
      }
    } else {
      valueProps = {
        defaultValue,
      }
    }

    return (
      <WithTheme styles={styles} themeStyles={InputItemStyles}>
        {(s, theme) => {
          const containerStyle = {
            borderBottomWidth: last ? 0 : StyleSheet.hairlineWidth,
          }

          const textStyle = {
            width: theme.font_size_heading * (labelNumber as number) * 1.05,
          }

          const extraStyle = {
            width:
              typeof extra === 'string' && (extra as string).length > 0
                ? (extra as string).length * theme.font_size_heading
                : 0,
          }

          const keyboardTypeArray = [
            'default',
            'email-address',
            'numeric',
            'phone-pad',
            'ascii-capable',
            'numbers-and-punctuation',
            'url',
            'number-pad',
            'name-phone-pad',
            'decimal-pad',
            'twitter',
            'web-search',
          ]

          let keyboardType: any = 'default'

          if (type === 'number') {
            keyboardType = 'numeric'
          } else if (type === 'bankCard') {
            keyboardType = 'number-pad' // 不带小数点
          } else if (type === 'phone') {
            keyboardType = 'phone-pad'
          } else if (type && keyboardTypeArray.indexOf(type) > -1) {
            keyboardType = type
          }
          const disabledStyle = disabled ? s.inputDisabled : {}
          return (
            <View style={[s.container, containerStyle]}>
              {children ? (
                typeof children === 'string' ? (
                  <Text style={[s.text, textStyle]}>{children}</Text>
                ) : (
                  <View style={textStyle}>{children}</View>
                )
              ) : null}
              <Input
                editable={!disabled && editable}
                clearButtonMode={clear ? 'while-editing' : 'never'}
                underlineColorAndroid="transparent"
                ref={(el) => (this.inputRef = el)}
                {...restProps}
                {...valueProps}
                style={[
                  {
                    height: !android
                      ? theme.list_item_height_sm
                      : theme.list_item_height,
                  },
                  s.input,
                  error ? s.inputErrorColor : null,
                  disabledStyle,
                  // 支持自定义样式
                  style,
                ]}
                keyboardType={keyboardType}
                onChange={(event) => this.onChange(event.nativeEvent.text)}
                secureTextEntry={type === 'password'}
                onBlur={this.onInputBlur}
                onFocus={this.onInputFocus}
              />
              {/* 只在有 value 的受控模式下且在编辑状态时展示自定义的安卓 clear 按钮 */}
              {editable && clear && value && focus && android ? (
                <TouchableOpacity
                  style={[s.clear]}
                  onPress={this.onInputClear}
                  hitSlop={{ top: 5, left: 5, bottom: 5, right: 5 }}>
                  <Icon name="close" color={'white'} size={'xxs'} />
                </TouchableOpacity>
              ) : null}
              {extra ? (
                <TouchableWithoutFeedback onPress={onExtraClick}>
                  <View>
                    {typeof extra === 'string' ? (
                      <Text style={[s.extra, extraStyle]}>{extra}</Text>
                    ) : (
                      extra
                    )}
                  </View>
                </TouchableWithoutFeedback>
              ) : null}
              {error && (
                <TouchableWithoutFeedback onPress={onErrorClick}>
                  <View style={[s.errorIcon]}>
                    <Icon
                      name="info-circle"
                      style={{
                        color: theme.brand_error,
                      }}
                    />
                  </View>
                </TouchableWithoutFeedback>
              )}
            </View>
          )
        }}
      </WithTheme>
    )
  }
}
