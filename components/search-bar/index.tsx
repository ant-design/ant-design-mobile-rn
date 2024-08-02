import React from 'react'
import {
  NativeSyntheticEvent,
  StyleProp,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native'
import { getComponentLocale } from '../_util/getLocale'
import Icon from '../icon'
import { LocaleContext } from '../locale-provider'
import { WithTheme, WithThemeStyles } from '../style'
import { SearchBarPropsType, SearchBarState, defaultProps } from './PropsType'
import SearchBarStyles, { SearchBarStyle } from './style/index'

export interface SearchBarProps
  extends SearchBarPropsType,
    WithThemeStyles<SearchBarStyle>,
    Omit<TextInputProps, 'onChange'> {
  onChangeText?: (text: string) => void
  onSubmitEditing?: (event: { nativeEvent: { text: string } }) => void
  style?: StyleProp<TextStyle>
}

export default class SearchBar extends React.Component<
  SearchBarProps,
  SearchBarState
> {
  static defaultProps = {
    ...defaultProps,
  }

  static contextType = LocaleContext

  inputRef: TextInput | null

  constructor(props: SearchBarProps) {
    super(props)
    let value
    if ('value' in props) {
      value = props.value
    } else if ('defaultValue' in props) {
      value = props.defaultValue
    } else {
      value = ''
    }
    this.state = {
      value,
      focus: false,
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps: SearchBarProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      })
    }
  }

  onSubmit = (_: { nativeEvent: { text: string } }) => {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.value || '')
    }
  }

  onChangeText = (value: string) => {
    if (!('value' in this.props)) {
      this.setState({ value })
    }
    if (this.props.onChange) {
      this.props.onChange(value)
    }
  }

  onCancel = () => {
    if (this.props.onCancel) {
      this.props.onCancel(this.state.value || '')
    }
  }

  onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    this.setState({
      focus: true,
    })
    if (this.props.onFocus) {
      this.props.onFocus(e)
    }
  }

  onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    this.setState({
      focus: false,
    })
    if (this.props.onBlur) {
      this.props.onBlur(e)
    }
  }
  render() {
    const {
      showCancelButton,
      styles,
      value: propsValue,
      cancelText,
      onChangeText,
      onChange,
      disabled,
      style,
      ...restProps
    } = this.props

    // tslint:disable-next-line:variable-name
    const _locale = getComponentLocale(
      this.props,
      (this as any).context,
      'SearchBar',
      () => require('./locale/zh_CN'),
    )

    const { value, focus } = this.state
    // tslint:disable-next-line:variable-name
    const _showCancelButton = showCancelButton || focus
    return (
      <WithTheme styles={styles} themeStyles={SearchBarStyles}>
        {(_styles, theme) => (
          <View style={_styles.wrapper}>
            <View style={_styles.inputWrapper}>
              <TextInput
                clearButtonMode="always"
                underlineColorAndroid="transparent"
                placeholderTextColor={theme.color_text_placeholder}
                editable={!disabled}
                {...restProps}
                style={[_styles.input, style]}
                ref={(el) => ((this.inputRef as any) = el)}
                value={value}
                onChangeText={this.onChangeText}
                onSubmitEditing={this.onSubmit}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
              />
            </View>
            <Icon name="search" style={_styles.search} />
            {_showCancelButton && (
              <View style={_styles.cancelTextContainer}>
                <Text style={_styles.cancelText} onPress={this.onCancel}>
                  {cancelText || _locale.cancelText}
                </Text>
              </View>
            )}
          </View>
        )}
      </WithTheme>
    )
  }
}
