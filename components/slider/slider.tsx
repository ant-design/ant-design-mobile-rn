import { Slider } from '@miblanchard/react-native-slider'
import React, { forwardRef, useContext } from 'react'
import DisabledContext from '../config-provider/DisabledContext'
import { useTheme } from '../style'
import { SliderProps } from './PropsType'
import SliderStyles from './style'

export function InnerSlider(
  props: SliderProps,
  ref: React.ForwardedRef<Slider>,
) {
  const contextDisabled = useContext(DisabledContext)

  const {
    value: inputValue,
    defaultValue,
    onChange,
    disabled = contextDisabled,
    step = 1,
    max,
    min,
    styles,
    ...restSliderProps
  } = props

  const ss = useTheme({
    styles,
    themeStyles: SliderStyles,
  })

  // ============================== Render ==============================
  return <Slider {...restSliderProps} ref={ref} />
}

export const SliderAntm = forwardRef(InnerSlider)
