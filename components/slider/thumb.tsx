import type { FC, ReactNode } from 'react'
import React, { useContext, useState } from 'react'
import {
  LayoutChangeEvent,
  LayoutRectangle,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { runOnJS, useAnimatedStyle } from 'react-native-reanimated'
import HapticsContext from '../provider/HapticsContext'
import Tooltip from '../tooltip'
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

  const [dragging, setDragging] = useState(false)
  const onHaptics = useContext(HapticsContext)

  const gesture = Gesture.Pan()
    .enabled(!disabled)
    .onBegin(() => runOnJS(onHaptics)('slider'))
    .onUpdate((e) => {
      !dragging && runOnJS(setDragging)(true)
      runOnJS(onDrag)(e.absoluteX - (thumbLayout?.width || 0))
    })
    .onEnd((e) => {
      runOnJS(onDrag)(e.absoluteX - (thumbLayout?.width || 0), true)
    })
    .onFinalize(() => {
      runOnJS(setDragging)(false)
    })

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
            visible={residentPopover || dragging}
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
