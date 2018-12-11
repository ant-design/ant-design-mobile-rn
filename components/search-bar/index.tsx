
import PropTypes from 'prop-types';
import React from 'react';
import { StyleProp, Text, TextInput, TextStyle, View } from 'react-native';
import Icon from '../icon';
import { WithTheme, WithThemeStyles } from '../style';
import { getComponentLocale } from '../_util/getLocale';
import { defaultProps, SearchBarPropsType, SearchBarState } from './PropsType';
import SearchBarStyles, { SearchBarStyle } from './style/index';

export interface SearchBarProps
  extends SearchBarPropsType,
    WithThemeStyles<SearchBarStyle> {
  onChangeText?: (text: string) => void;
  onSubmitEditing?: (event: { nativeEvent: { text: string } }) => void;
  style?: StyleProp<TextStyle>;
}

export default class SearchBar extends React.Component<
  SearchBarProps,
  SearchBarState
> {
  static defaultProps = {
    ...defaultProps,
  };

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  inputRef: TextInput | null;

  constructor(props: SearchBarProps) {
    super(props);
    let value;
    if ('value' in props) {
      value = props.value;
    } else if ('defaultValue' in props) {
      value = props.defaultValue;
    } else {
      value = '';
    }
    this.state = {
      value,
      focus: false,
    };
  }

  componentWillReceiveProps(nextProps: SearchBarProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  onSubmit = (_: { nativeEvent: { text: string } }) => {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.value || '');
    }
  };

  onChangeText = (value: string) => {
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  onCancel = () => {
    if (this.props.onCancel) {
      this.props.onCancel(this.state.value || '');
    }
  };

  onFocus = () => {
    this.setState({
      focus: true,
    });
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  };

  onBlur = () => {
    this.setState({
      focus: false,
    });
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  };
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
    } = this.props;

    // tslint:disable-next-line:variable-name
    const _locale = getComponentLocale(
      this.props,
      (this as any).context,
      'SearchBar',
      () => require('./locale/zh_CN'),
    );

    const { value, focus } = this.state;
    // tslint:disable-next-line:variable-name
    const _showCancelButton = showCancelButton || focus;
    return (
      <WithTheme styles={styles} themeStyles={SearchBarStyles}>
        {_styles => (
          <View style={_styles.wrapper}>
            <View style={_styles.inputWrapper}>
              <TextInput
                clearButtonMode="always"
                underlineColorAndroid="transparent"
                editable={!disabled}
                {...restProps}
                style={[_styles.input, style]}
                ref={el => ((this.inputRef as any) = el)}
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
    );
  }
}
