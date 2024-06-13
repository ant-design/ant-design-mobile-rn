import {
  Slider as SliderNative,
  SliderProps as SliderNativeProps,
} from '@miblanchard/react-native-slider'
import React, { forwardRef, useContext, useMemo } from 'react'
import DisabledContext from '../config-provider/DisabledContext'
import { useTheme } from '../style'
import { SliderProps } from './PropsType'
import SliderStyles from './style'

export function InnerSlider(
  props: SliderProps,
  ref: React.ForwardedRef<SliderNative>,
) {
  const contextDisabled = useContext(DisabledContext)

  const {
    value: inputValue,
    defaultValue,
    marks,
    onChange,
    disabled = contextDisabled,
    step = 1,
    max,
    min,
    styles,
  } = props

  const restSliderProps = useMemo(() => {
    const res: SliderNativeProps = {
      animationType: 'spring',
      maximumValue: 100,
      minimumValue: 0,
    }
    if (marks) {
      res.trackMarks = Object.keys(marks)
        .filter((item: any) => !isNaN(item))
        .map(Number)
      res.renderTrackMarkComponent = (index: number) => {
        // return <Button title="asd" onPress={() => {}} />
        // @ts-ignore
        return marks[res.trackMarks[index]]
      }
    }
    return res
  }, [marks])

  const ss = useTheme({
    styles,
    themeStyles: SliderStyles,
  })

  // ============================== Render ==============================
  console.log(restSliderProps, 'restSliderProps')
  return <SliderNative {...restSliderProps} ref={ref} />
}

export const Slider = forwardRef(InnerSlider)
