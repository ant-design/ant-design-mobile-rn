import type { FC } from 'react'
import React, { memo, useMemo } from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
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
  const range = max - min
  const elements = useMemo(
    () =>
      points.map((point) => {
        const style = { left: `${(Math.abs(point - min) / range) * 100}%` }
        return (
          <Tick
            key={point}
            styles={styles}
            style={style}
            point={point}
            sliderValue={sliderValue}
          />
        )
      }),
    [points, min, range, styles, sliderValue],
  )

  return <View style={styles.ticks}>{elements}</View>
}

export default Ticks

const Tick: FC<
  Pick<TicksProps, 'sliderValue' | 'styles'> & {
    style: ViewStyle
    point: number
  }
> = memo(({ style, styles, sliderValue, point }) => {
  const tickActive = useMemo(
    () => StyleSheet.flatten(styles.tickActive),
    [styles.tickActive],
  )
  const active = useAnimatedStyle(() => {
    return (
      Array.isArray(sliderValue.value)
        ? point <= Math.max(sliderValue.value[0], sliderValue.value[1]) &&
          point >= Math.min(sliderValue.value[1], sliderValue.value[0])
        : point <= (sliderValue.value || 0)
    )
      ? tickActive
      : { backgroundColor: 'transparent' }
  }, [point, tickActive])

  return <Animated.View style={[styles.tick, active, style]} />
})
