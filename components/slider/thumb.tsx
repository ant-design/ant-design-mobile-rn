import type { FC, ReactNode } from 'react'
import React, { useState } from 'react'
import { View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import { SliderStyle } from './style'
// import { ThumbIcon } from './thumb-icon'

type ThumbProps = {
  value: number
  min: number
  max: number
  disabled: boolean
  onDrag: (value: number, last?: boolean) => void
  icon?: ReactNode
  popover: boolean | ((value: number) => ReactNode)
  residentPopover: boolean
  styles: Partial<SliderStyle>
}

const Thumb: FC<ThumbProps> = (props) => {
  const { value, min, max, disabled, icon, residentPopover, onDrag, styles } =
    props

  const currentPosition = () => {
    return {
      // TODO-luokun: 还要减去thumb宽度的一半
      left: `${((value - min) / (max - min)) * 100}%`,
      right: 'auto',
    }
  }

  const [dragging, setDragging] = useState(false)

  const gesture = Gesture.Pan()
    .onBegin(() => {})
    .onUpdate((e) => {
      onDrag(e.absoluteX)
    })
    .onEnd((e) => {
      onDrag(e.absoluteX, true)
    })
    .onFinalize(() => {})

  const renderPopoverContent =
    typeof props.popover === 'function'
      ? props.popover
      : props.popover
      ? (value: number) => value.toString()
      : null

  const thumbElement = (
    <View style={styles.thumb}>
      {/* {icon ? icon : <ThumbIcon style={styles.thumbIcon} />} */}
      <View style={styles.thumbIcon} />
    </View>
  )
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.thumbContainer, currentPosition()]}>
        {thumbElement}
      </Animated.View>
    </GestureDetector>
  )
}

export default Thumb
