import type { FC } from 'react'
import React, { memo, useCallback, useContext, useMemo } from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import Animated, {
  runOnJS,
  SharedValue,
  useAnimatedReaction,
  useAnimatedStyle,
} from 'react-native-reanimated'
import HapticsContext from '../provider/HapticsContext'
import { SliderValueType } from './PropsType'
import { SliderStyle } from './style'

type TicksProps = {
  isSliding: boolean
  points: number[]
  max: number
  min: number
  sliderValue: SharedValue<SliderValueType>
  styles: Pick<SliderStyle, 'ticks' | 'tickActive' | 'tick'>
}

const Ticks: FC<TicksProps> = ({
  isSliding,
  points,
  max,
  min,
  sliderValue,
  styles,
}) => {
  const range = max - min
  const elements = useMemo(
    () =>
      points.map((point) => {
        const style = { left: `${(Math.abs(point - min) / range) * 100}%` }
        return (
          <Tick
            key={point}
            isSliding={isSliding}
            styles={styles}
            style={style}
            point={point}
            sliderValue={sliderValue}
          />
        )
      }),
    [points, min, range, isSliding, styles, sliderValue],
  )

  return <View style={styles.ticks}>{elements}</View>
}

export default Ticks

const Tick: FC<
  Pick<TicksProps, 'isSliding' | 'sliderValue' | 'styles'> & {
    style: ViewStyle
    point: number
  }
> = memo(({ isSliding, style, styles, sliderValue, point }) => {
  const tickActive = useMemo(
    () => StyleSheet.flatten(styles.tickActive),
    [styles.tickActive],
  )
  const active = useAnimatedStyle(() => {
    return (
      Array.isArray(sliderValue.value)
        ? point <= sliderValue.value[0] && point >= sliderValue.value[1]
        : point <= (sliderValue.value || 0)
    )
      ? tickActive
      : { backgroundColor: 'transparent' }
  }, [point, tickActive])

  const onHaptics = useContext(HapticsContext)
  const handleHaptics = useCallback(() => {
    if (isSliding) {
      onHaptics('slider')
    }
  }, [onHaptics, isSliding])

  useAnimatedReaction(
    () => active,
    () => runOnJS(handleHaptics)(),
    [handleHaptics],
  )

  return <Animated.View style={[styles.tick, active, style]} />
})
