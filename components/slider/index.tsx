import React from 'react'
import { View } from 'react-native'
import Slider from '@react-native-community/slider'
import { WithTheme } from '../style'

export interface SliderProps {
  maximumTrackTintColor?: string
  minimumTrackTintColor?: string
  onChange?: (value?: number) => void
  onAfterChange?: (value?: number) => void
  defaultValue?: number
  tipFormatter?: (value?: string) => React.ReactNode
  value?: number
  min?: number
  max?: number
  step?: number
  disabled?: boolean
}

export default class SliderAntm extends React.Component<SliderProps, any> {
  static defaultProps = {
    onChange() {},
    onAfterChange() {},
    defaultValue: 0,
    disabled: false,
  }

  render() {
    const {
      defaultValue,
      value,
      min,
      max,
      step,
      disabled,
      onChange,
      onAfterChange,
      maximumTrackTintColor,
      minimumTrackTintColor,
    } = this.props
    return (
      <WithTheme>
        {(_, theme) => (
          <View>
            <Slider
              value={defaultValue || value}
              minimumValue={min}
              maximumValue={max}
              step={step}
              minimumTrackTintColor={
                minimumTrackTintColor || theme.brand_primary
              }
              maximumTrackTintColor={
                maximumTrackTintColor || theme.border_color_base
              }
              disabled={disabled}
              onValueChange={onChange}
              onSlidingComplete={onAfterChange}
            />
          </View>
        )}
      </WithTheme>
    )
  }
}
