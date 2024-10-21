import type { FC } from 'react'
import React, { useContext, useEffect, useMemo } from 'react'
import { View, ViewStyle } from 'react-native'
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import HapticsContext from '../provider/HapticsContext'
import { SliderValueType } from './PropsType'
import { SliderStyle } from './style'

type TicksProps = {
  points: number[]
  max: number
  min: number
  sliderValue: SharedValue<SliderValueType>
  styles: Pick<SliderStyle, 'ticks' | 'tickActive' | 'tick'>
}

const Ticks: FC<TicksProps> = ({ points, max, min, sliderValue, styles }) => {
  const onHaptics = useContext(HapticsContext)
  useEffect(() => {
    const handleHaptics = () => {
      onHaptics('slider')
    }
    sliderValue.addListener(2, handleHaptics)
    return () => {
      sliderValue.removeListener(2)
    }
  }, [sliderValue, onHaptics])

  const range = max - min
  const elements = useMemo(
    () =>
      points.map((point) => {
        const style = { left: `${(Math.abs(point - min) / range) * 100}%` }
        return (
          <Tick
            styles={styles}
            style={style}
            point={point}
            sliderValue={sliderValue}
            key={point}
          />
        )
      }),
    [min, sliderValue, points, range, styles],
  )

  return <View style={styles.ticks}>{elements}</View>
}

export default Ticks

const Tick: FC<
  Pick<TicksProps, 'sliderValue' | 'styles'> & {
    style: ViewStyle
    point: number
  }
> = ({ style, styles, sliderValue, point }) => {
  const active = useAnimatedStyle(() => {
    return (
      Array.isArray(sliderValue.value)
        ? point <= sliderValue.value[0] && point >= sliderValue.value[1]
        : point <= (sliderValue.value || 0)
    )
      ? styles.tickActive
      : { backgroundColor: 'transparent' }
  }, [point])

  return <Animated.View style={[styles.tick, active, style]} />
}
