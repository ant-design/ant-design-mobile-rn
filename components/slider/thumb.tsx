import type { FC, ReactNode } from 'react'
import React, { memo, useMemo, useState } from 'react'
import {
  LayoutChangeEvent,
  LayoutRectangle,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated'
import { SliderStyle } from './style'
import { ThumbIcon } from './thumb-icon'
import { ThumbPopover } from './thumb-popover'

export type ThumbProps = {
  offset: SharedValue<number>
  getValueByPosition: (position: number) => number
  disabled: boolean
  isSliding: boolean
  onDrag: (value: number) => void
  onSlidingStart: () => void
  onSlidingComplete: () => void
  icon?: ReactNode
  popover: boolean | ((value: number) => ReactNode)
  residentPopover: boolean
  style?: StyleProp<ViewStyle>
  styles: Partial<SliderStyle>
}

const Thumb: FC<ThumbProps> = (props) => {
  const {
    offset,
    getValueByPosition,
    disabled,
    isSliding,
    icon,
    onDrag,
    onSlidingStart,
    onSlidingComplete,
    popover,
    residentPopover,
    style,
    styles,
  } = props

  const [thumbLayout, setThumbLayout] = useState<LayoutRectangle | undefined>()
  const handleLayout = (e: LayoutChangeEvent) => {
    setThumbLayout(e.nativeEvent.layout)
  }
  const translateX = useDerivedValue(() => {
    return offset.value - (thumbLayout?.width || 0) / 2
  }, [offset, thumbLayout])

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    }
  }, [translateX])

  const gesture = useMemo(
    () =>
      Gesture.Pan()
        .enabled(!disabled)
        .onStart(() => runOnJS(onSlidingStart)())
        .onChange((e) => {
          runOnJS(onDrag)(e.absoluteX - (thumbLayout?.width || 0))
        })
        .onEnd(() => runOnJS(onSlidingComplete)()),
    [disabled, onDrag, onSlidingComplete, onSlidingStart, thumbLayout?.width],
  )

  const thumbElement = icon ? icon : <ThumbIcon />

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        onStartShouldSetResponder={() => true}
        style={[styles.thumb, animatedStyles, style]}
        onLayout={handleLayout}>
        <ThumbPopover
          offset={offset}
          getValueByPosition={getValueByPosition}
          isSliding={isSliding}
          popover={popover}
          residentPopover={residentPopover}>
          {thumbElement}
        </ThumbPopover>
      </Animated.View>
    </GestureDetector>
  )
}

export default memo(Thumb)
