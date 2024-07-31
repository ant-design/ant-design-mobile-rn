import type { FC } from 'react'
import React, { useContext, useEffect, useRef } from 'react'
import { View } from 'react-native'
import HapticsContext from '../provider/HapticsContext'
import { SliderStyle } from './style'

type TicksProps = {
  points: number[]
  max: number
  min: number
  upperBound: number
  lowerBound: number
  styles: Partial<SliderStyle>
}

const Ticks: FC<TicksProps> = ({
  points,
  max,
  min,
  upperBound,
  lowerBound,
  styles,
}) => {
  const onHaptics = useContext(HapticsContext)
  const didmountRef = useRef(false)
  useEffect(() => {
    if (didmountRef.current) {
      onHaptics('slider')
    } else {
      didmountRef.current = true
    }
  }, [upperBound, lowerBound, onHaptics])

  const range = max - min
  const elements = points.map((point) => {
    const offset = `${(Math.abs(point - min) / range) * 100}%`

    const isActived = point <= upperBound && point >= lowerBound
    const style = { left: offset }

    return (
      <View
        style={[styles.tick, isActived && styles.tickActive, style]}
        key={point}
      />
    )
  })

  return <View style={styles.ticks}>{elements}</View>
}

export default Ticks
