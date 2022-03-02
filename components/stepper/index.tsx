import React from 'react'
import { Platform, StyleProp, ViewStyle } from 'react-native'
import { WithTheme, WithThemeStyles } from '../style'
import InputNumber from './InputNumber'
import { StepPropsType } from './PropsType'
import StepperStyles, { StepperStyle } from './style'

export interface StepProps
  extends StepPropsType,
    WithThemeStyles<StepperStyle> {
  style?: StyleProp<ViewStyle>
}

export default class Stepper extends React.Component<StepProps, any> {
  static defaultProps: StepProps = {
    step: 1,
    readOnly: false,
    disabled: false,
    inputStyle: {},
  }

  render() {
    const { inputStyle, ...restProps } = this.props
    const keyboardType =
      Platform.OS === 'android' ? 'numeric' : 'numbers-and-punctuation'

    return (
      <WithTheme styles={this.props.styles} themeStyles={StepperStyles}>
        {(styles) => (
          <InputNumber
            {...restProps}
            styles={styles}
            keyboardType={keyboardType}
            inputStyle={inputStyle}
          />
        )}
      </WithTheme>
    )
  }
}
