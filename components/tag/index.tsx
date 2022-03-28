import classnames from 'classnames'
import React from 'react'
import {
  StyleProp,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native'
import Icon from '../icon'
import { WithTheme, WithThemeStyles } from '../style'
import { TagPropsType } from './PropsType'
import TagStyles, { TagStyle } from './style/index'

export interface TagNativeProps
  extends TagPropsType,
    WithThemeStyles<TagStyle> {
  style?: StyleProp<ViewStyle>
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
  }

  constructor(props: TagNativeProps) {
    super(props)

    this.state = {
      selected: props.selected,
      closed: false,
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps: TagNativeProps) {
    if (this.props.selected !== nextProps.selected) {
      this.setState({
        selected: nextProps.selected,
      })
    }
  }

  onPress = () => {
    const { disabled, onChange } = this.props
    if (disabled) {
      return
    }
    const isSelect: boolean = this.state.selected
    this.setState(
      {
        selected: !isSelect,
      },
      () => {
        if (onChange) {
          onChange(!isSelect)
        }
      },
    )
  }

  handleLongPress = () => {
    const { disabled, onLongPress } = this.props
    if (disabled) {
      return
    }
    if (onLongPress) {
      onLongPress()
    }
  }

  onTagClose = () => {
    if (this.props.onClose) {
      this.props.onClose()
    }
    this.setState(
      {
        closed: true,
      },
      this.props.afterClose,
    )
  }

  render() {
    const { children, disabled, small, closable, style } = this.props

    return (
      <WithTheme styles={this.props.styles} themeStyles={TagStyles}>
        {(styles) => {
          const wrapCls = classnames({
            normalWrap:
              !disabled && (!this.state.selected || small || closable),
            wrapSmall: small,
            activeWrap: this.state.selected && !disabled && !small && !closable,
            disabledWrap: disabled,
          })
            .split(' ')
            .map((a) => styles[a])

          const textCls = classnames({
            normalText:
              !disabled && (!this.state.selected || small || closable),
            smallText: small,
            activeText: this.state.selected && !disabled && !small && !closable,
            disabledText: disabled,
          })
            .split(' ')
            .map((a) => styles[a])

          const closableDom =
            closable && !disabled && !small ? (
              <Icon
                onPress={this.onTagClose}
                name="close"
                style={styles.close}
              />
            ) : null
          return !this.state.closed ? (
            <View style={[styles.tag, style]}>
              <TouchableWithoutFeedback
                onPress={this.onPress}
                onLongPress={this.handleLongPress}>
                <View style={[styles.wrap, wrapCls]}>
                  {React.isValidElement(children) ? (
                    children
                  ) : (
                    <Text style={[styles.text, textCls]}>{children}</Text>
                  )}
                </View>
              </TouchableWithoutFeedback>
              {closableDom}
            </View>
          ) : null
        }}
      </WithTheme>
    )
  }
}
