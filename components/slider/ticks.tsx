import type { FC } from 'react'
import React, { memo, useMemo } from 'react'
import { View, ViewStyle } from 'react-native'
import { SliderValueType } from './PropsType'
import { SliderStyle } from './style'

type TicksProps = {
  points: number[]
  max: number
  min: number
  value: SliderValueType
  styles: Pick<SliderStyle, 'ticks' | 'tickActive' | 'tick'>
}

function isTickActive(point: number, value: SliderValueType) {
  if (Array.isArray(value)) {
    return (
      point <= Math.max(value[0], value[1]) &&
      point >= Math.min(value[0], value[1])
    )
  }
  return point <= (value || 0)
}

const Ticks: FC<TicksProps> = ({ points, max, min, value, styles }) => {
  const range = max - min
  const elements = useMemo(
    () =>
      points.map((point) => {
        const style = {
          left: `${(Math.abs(point - min) / range) * 100}%`,
        } as const
        return (
          <Tick
            key={point}
            styles={styles}
            style={style}
            active={isTickActive(point, value)}
          />
        )
      }),
    [points, min, range, styles, value],
  )

  return <View style={styles.ticks}>{elements}</View>
}

export default Ticks

const Tick: FC<{
  styles: Pick<SliderStyle, 'tickActive' | 'tick'>
  style: ViewStyle
  active: boolean
}> = memo(({ style, styles, active }) => {
  return <View style={[styles.tick, active && styles.tickActive, style]} />
})
