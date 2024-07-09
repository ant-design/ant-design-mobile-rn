import type { FC, ReactNode } from 'react'
import React, { useState } from 'react'
import {
  LayoutChangeEvent,
  LayoutRectangle,
  StyleProp,
  ViewStyle,
} from 'react-native'
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
  // popover: boolean | ((value: number) => ReactNode)
  // residentPopover: boolean
  style?: StyleProp<ViewStyle>
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
    onDrag,
    style,
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

  const gesture = Gesture.Pan()
    .enabled(!disabled)
    .onBegin(() => {})
    .onUpdate((e) => {
      runOnJS(onDrag)(e.absoluteX - (thumbLayout?.width || 0))
    })
    .onEnd((e) => {
      runOnJS(onDrag)(e.absoluteX - (thumbLayout?.width || 0), true)
    })
    .onFinalize(() => {})

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        onStartShouldSetResponder={() => true}
        style={[styles.thumb, animatedStyles, style]}
        onLayout={handleLayout}>
        {icon ? icon : <ThumbIcon />}
      </Animated.View>
    </GestureDetector>
  )
}

export default Thumb
