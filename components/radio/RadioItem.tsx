import React from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'
import { RefCheckboxProps } from '../checkbox/Checkbox'
import { CheckboxStyle } from '../checkbox/style'
import List from '../list/index'
import { WithTheme, WithThemeStyles } from '../style'
import { RadioItemPropsType } from './PropsType'
import Radio from './Radio'
import RadioStyles from './style/index'

const ListItem = List.Item

export interface RadioItemProps
  extends RadioItemPropsType,
    WithThemeStyles<CheckboxStyle> {
  style?: StyleProp<ViewStyle>
}

export default class RadioItem extends React.Component<RadioItemProps> {
  radio: RefCheckboxProps

  handleClick = () => {
    if (this.radio) {
      this.radio.onPress()
    }
  }

  render() {
    const {
      style,
      disabled,
      children,
      left,
      right = !left,
      ...restProps
    } = this.props

    return (
      <WithTheme themeStyles={RadioStyles} styles={restProps.styles}>
        {(styles) => {
          let contentDom: React.ReactElement<any> | null = null
          if (children && React.isValidElement(children)) {
            contentDom = <View style={{ flex: 1 }}>{children}</View>
          } else {
            const contentStyle = [
              styles.radioItemContent,
              disabled ? styles.radioItemContentDisable : {},
            ]
            contentDom = (
              <Text style={contentStyle} numberOfLines={1}>
                {this.props.children}
              </Text>
            )
          }

          const radioEl = (
            <Radio
              ref={(ref: RefCheckboxProps) => (this.radio = ref)}
              disabled={disabled}
              {...restProps}
            />
          )

          const listProps = {
            thumb: left && !right ? radioEl : undefined,
            extra: right ? radioEl : undefined,
          }
          return (
            <ListItem
              style={style}
              onPress={disabled ? undefined : this.handleClick}
              {...listProps}>
              {contentDom}
            </ListItem>
          )
        }}
      </WithTheme>
    )
  }
}
