import SegmentedControlIOS from '@react-native-community/segmented-control'
import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { WithTheme } from '../style'
import { SegmentedControlPropsType } from './PropsType'

export interface SegmentedControlProps extends SegmentedControlPropsType {
  style?: StyleProp<ViewStyle>
}

export default class SegmentedControl extends React.Component<
  SegmentedControlProps,
  any
> {
  static defaultProps = {
    selectedIndex: 0,
  }

  render() {
    const {
      tintColor,
      disabled,
      selectedIndex,
      selectedTextColor,
      ...restProps
    } = this.props
    return (
      <WithTheme>
        {(_, theme) => (
          <SegmentedControlIOS
            tintColor={tintColor || theme.segmented_control_color}
            selectedIndex={selectedIndex}
            activeFontStyle={{ color: selectedTextColor }}
            {...restProps}
            enabled={!disabled}
          />
        )}
      </WithTheme>
    )
  }
}
