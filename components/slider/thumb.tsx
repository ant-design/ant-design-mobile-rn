import type { FC, ReactNode } from 'react'
import React, { useMemo, useState } from 'react'
import {
  LayoutChangeEvent,
  LayoutRectangle,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { runOnJS, useAnimatedStyle } from 'react-native-reanimated'
import Tooltip from '../tooltip'
import { SliderStyle } from './style'
import { ThumbIcon } from './thumb-icon'

type ThumbProps = {
  value: number
  min: number
  max: number
  disabled: boolean
  isSliding: boolean
  trackLayout?: LayoutRectangle
  onDrag: (value: number, last?: boolean) => void
  onSlidingStart: () => void
  icon?: ReactNode
  popover: boolean | ((value: number) => ReactNode)
  residentPopover: boolean
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
    residentPopover,
    onDrag,
    onSlidingStart,
    style,
    styles,
    isSliding,
  } = props

  const [thumbLayout, setThumbLayout] = useState<LayoutRectangle | undefined>()
  const handleLayout = (e: LayoutChangeEvent) => {
    setThumbLayout(e.nativeEvent.layout)
  }

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX:
            ((value - min) / (max - min)) * (trackLayout?.width || 0) -
            (thumbLayout?.width || 0) / 2,
        },
      ],
    }
  }, [max, min, thumbLayout?.width, trackLayout?.width, value])

  const [dragging, setDragging] = useState(false)

  const gesture = useMemo(
    () =>
      Gesture.Pan()
        .enabled(!disabled)
        .onBegin(() => runOnJS(onSlidingStart)())
        .onUpdate((e) => {
          !dragging && runOnJS(setDragging)(true)
          runOnJS(onDrag)(e.absoluteX - (thumbLayout?.width || 0))
        })
        .onFinalize((e) => {
          runOnJS(setDragging)(false)
          runOnJS(onDrag)(e.absoluteX - (thumbLayout?.width || 0), true)
        }),
    [disabled, dragging, onDrag, onSlidingStart, thumbLayout?.width],
  )

  const renderPopoverContent =
    typeof props.popover === 'function'
      ? props.popover
      : props.popover
      ? (val: number) => val.toString()
      : null

  const thumbElement = icon ? icon : <ThumbIcon />

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        onStartShouldSetResponder={() => true}
        style={[styles.thumb, animatedStyles, style]}
        onLayout={handleLayout}>
        {renderPopoverContent ? (
          <Tooltip
            content={renderPopoverContent(value)}
            placement="top"
            visible={residentPopover || dragging || isSliding}
            mode="dark">
            <View style={{ flex: 1 }}>{thumbElement}</View>
          </Tooltip>
        ) : (
          thumbElement
        )}
      </Animated.View>
    </GestureDetector>
  )
}

export default Thumb
