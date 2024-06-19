import type { FC, ReactNode } from 'react'
import React, { useState } from 'react'
import { LayoutChangeEvent, LayoutRectangle } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { runOnJS, useAnimatedStyle } from 'react-native-reanimated'
import { SliderStyle } from './style'
import { ThumbIcon } from './thumb-icon'

type ThumbProps = {
  value: number
  min: number
  max: number
  disabled: boolean
  trackLayout?: LayoutRectangle
  onDrag: (value: number, last?: boolean) => void
  icon?: ReactNode
  popover: boolean | ((value: number) => ReactNode)
  residentPopover: boolean
  styles: Partial<SliderStyle>
}

const Thumb: FC<ThumbProps> = (props) => {
  const {
    value,
    min,
    max,
    trackLayout,
    disabled,
    icon,
    residentPopover,
    onDrag,
    styles,
  } = props

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: ((value - min) / (max - min)) * (trackLayout?.width || 0),
        },
      ],
    }
  }, [max, min, trackLayout?.width, value])

  const [thumbLayout, setThumbLayout] = useState<LayoutRectangle | undefined>()
  const handleLayout = (e: LayoutChangeEvent) => {
    setThumbLayout(e.nativeEvent.layout)
  }

  const [dragging, setDragging] = useState(false)

  const gesture = Gesture.Pan()
    .onBegin(() => {})
    .onUpdate((e) => {
      runOnJS(onDrag)(e.absoluteX - (thumbLayout?.width || 0))
    })
    .onEnd((e) => {
      runOnJS(onDrag)(e.absoluteX - (thumbLayout?.width || 0), true)
    })
    .onFinalize(() => {})

  const renderPopoverContent =
    typeof props.popover === 'function'
      ? props.popover
      : props.popover
      ? (value: number) => value.toString()
      : null

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[styles.thumb, animatedStyles]}
        onLayout={handleLayout}>
        {icon ? icon : <ThumbIcon />}
      </Animated.View>
    </GestureDetector>
  )
}

export default Thumb
