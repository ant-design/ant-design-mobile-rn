import normalizeColor from 'normalize-css-color'
import React from 'react'
import {
  StyleProp,
  Text,
  TouchableHighlight,
  View,
  ViewStyle,
} from 'react-native'
import { WithTheme, WithThemeStyles } from '../style'
import { SegmentedControlPropsType } from './PropsType'
import AndroidStyles, { SegmentControlStyle } from './style/index'

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * number should be a color processed by `normalizeColor`
 * alpha should be number between 0 and 1
 */
function setNormalizedColorAlpha(input: number, alpha: number) {
  if (alpha < 0) {
    alpha = 0
  } else if (alpha > 1) {
    alpha = 1
  }

  alpha = Math.round(alpha * 255)
  // magic bitshift guarantees we return an unsigned int
  // tslint:disable-next-line:no-bitwise
  return ((input & 0xffffff00) | alpha) >>> 0
}

export interface SegmentControlProps
  extends SegmentedControlPropsType,
    WithThemeStyles<SegmentControlStyle> {
  style?: StyleProp<ViewStyle>
}

export default class SegmentedControl extends React.Component<
  SegmentControlProps,
  any
> {
  static defaultProps = {
    selectedIndex: 0,
    disabled: false,
    values: [],
    onChange() {},
    onValueChange() {},
    style: {},
    selectedTextColor: '#fff',
  }

  constructor(props: SegmentControlProps) {
    super(props)
    this.state = {
      selectedIndex: props.selectedIndex,
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps: SegmentControlProps) {
    if (nextProps.selectedIndex !== this.props.selectedIndex) {
      this.setState({
        selectedIndex: nextProps.selectedIndex,
      })
    }
  }

  onPress(e: any, index: number, value: string) {
    const { disabled, onChange, onValueChange } = this.props
    if (!disabled) {
      e.nativeEvent.selectedSegmentIndex = index
      e.nativeEvent.value = value
      if (onChange) {
        onChange(e)
      }
      if (onValueChange) {
        onValueChange(value)
      }
      this.setState({
        selectedIndex: index,
      })
    }
  }

  render() {
    const { style, disabled, values = [], selectedTextColor } = this.props
    let { tintColor } = this.props
    return (
      <WithTheme styles={this.props.styles} themeStyles={AndroidStyles}>
        {(styles, theme) => {
          const selectedIndex = this.state.selectedIndex
          tintColor = tintColor || theme.segmented_control_color
          const items = values.map((value, idx) => {
            let itemRadius: any = null
            if (idx === 0) {
              itemRadius = styles.itemLeftRadius
            } else if (idx === values.length - 1) {
              itemRadius = styles.itemRightRadius
            }

            const itemStyle = [
              styles.item,
              itemRadius,
              {
                backgroundColor:
                  idx === selectedIndex ? tintColor : 'transparent',
                borderColor: tintColor,
              },
            ]

            const underlayColor =
              idx === selectedIndex
                ? tintColor
                : '#' +
                  setNormalizedColorAlpha(
                    normalizeColor(tintColor),
                    0.3,
                  ).toString(16)

            return (
              <TouchableHighlight
                disabled={disabled}
                key={idx}
                onPress={(e?: any) => this.onPress(e, idx, value)}
                underlayColor={underlayColor}
                style={itemStyle}
                activeOpacity={1}>
                <Text
                  // tslint:disable-next-line:jsx-no-multiline-js
                  style={[
                    styles.itemText,
                    {
                      color:
                        idx === selectedIndex ? selectedTextColor : tintColor,
                    },
                  ]}>
                  {value}
                </Text>
              </TouchableHighlight>
            )
          })

          const enabledOpacity = !disabled ? 1 : 0.5
          const segmentedStyle = {
            opacity: enabledOpacity,
            borderColor: tintColor,
          }

          return (
            <View style={[styles.segment, segmentedStyle, style]}>{items}</View>
          )
        }}
      </WithTheme>
    )
  }
}
