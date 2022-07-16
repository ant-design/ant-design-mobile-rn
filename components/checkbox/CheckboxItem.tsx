import classNames from 'classnames'
import React from 'react'
import { Text, StyleProp, ViewStyle } from 'react-native'
import List from '../list/index'
import { ListItemPropsType } from '../list/PropsType'
import { WithTheme } from '../style'
import Checkbox, { RefCheckboxProps } from './Checkbox'
import { CheckboxItemPropsType } from './PropsType'
import CheckboxStyles from './style/index'

const ListItem = List.Item

interface CheckboxItemProps extends CheckboxItemPropsType, ListItemPropsType {
  style?: StyleProp<ViewStyle>
  styles?: { [key: string]: StyleProp<ViewStyle> }
}
export default class CheckboxItem extends React.PureComponent<CheckboxItemProps> {
  checkbox: RefCheckboxProps

  handleClick = () => {
    if (this.checkbox) {
      this.checkbox.onPress()
    }
    if (this.props.onPress) {
      this.props.onPress()
    }
  }

  render() {
    const {
      style,
      disabled,
      children,
      right,
      left = !right,
      ...restProps
    } = this.props

    return (
      <WithTheme themeStyles={CheckboxStyles} styles={restProps.styles}>
        {(styles) => {
          const thumbNode = (
            <Checkbox
              ref={(ref: RefCheckboxProps) => (this.checkbox = ref)}
              disabled={disabled}
              {...restProps}
            />
          )
          const listProps = {
            ...restProps,
            thumb: left && !right ? thumbNode : undefined,
            extra: right ? thumbNode : undefined,
          }
          const antd_checlbox_label = classNames(
            `${restProps.prefixCls || 'checkbox'}_label`,
            {
              [`${restProps.prefixCls || 'checkbox'}_label_disabled`]: disabled,
            },
          )
            .split(' ')
            .map((a) => styles[a])
          return (
            <ListItem
              style={style}
              onPress={disabled ? undefined : this.handleClick}
              {...listProps}>
              <Text style={antd_checlbox_label} numberOfLines={1}>
                {children}
              </Text>
            </ListItem>
          )
        }}
      </WithTheme>
    )
  }
}
