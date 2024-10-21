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
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import Tooltip from '../tooltip'
import { SliderValueType } from './PropsType'
import { SliderStyle } from './style'
import { ThumbIcon } from './thumb-icon'

type ThumbProps = {
  sliderValue: SharedValue<SliderValueType>
  disabled: boolean
  getPositionByValue: (value?: SliderValueType, index?: number) => number
  index: number
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
    sliderValue,
    disabled,
    getPositionByValue,
    index,
    isSliding,
    icon,
    residentPopover,
    onDrag,
    onSlidingStart,
    onSlidingComplete,
    style,
    styles,
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
            getPositionByValue(sliderValue.value, index) -
            (thumbLayout?.width || 0) / 2,
        },
      ],
    }
  }, [thumbLayout])

  const gesture = useMemo(
    () =>
      Gesture.Pan()
        .runOnJS(true)
        .enabled(!disabled)
        .onStart(onSlidingStart)
        .onChange((e) => {
          onDrag(e.absoluteX - (thumbLayout?.width || 0))
        })
        .onEnd(onSlidingComplete),
    [disabled, onDrag, onSlidingComplete, onSlidingStart, thumbLayout?.width],
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
            content={renderPopoverContent(10)} // TODO-luokun
            placement="top"
            visible={residentPopover || isSliding}
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
