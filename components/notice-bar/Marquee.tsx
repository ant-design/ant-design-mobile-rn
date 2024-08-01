import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { LayoutChangeEvent, ScrollView, Text, View } from 'react-native'
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useFrameCallback,
  useSharedValue,
} from 'react-native-reanimated'
import { MarqueeProps } from './PropsType'

export const Marquee: React.FC<MarqueeProps> = (props) => {
  const {
    autoFill,
    children,
    direction = 'left',
    fps = 40,
    leading = 500,
    loop = false,
    onCycleComplete,
    onFinish,
    play = true,
    spacing,
    style,
    trailing = 800,
  } = props

  const [parentWidth, setParentWidth] = useState(0)
  const [childrenWidth, setChildrenWidth] = useState(0)

  const onLayoutContainer = (e: LayoutChangeEvent) => {
    setParentWidth(e.nativeEvent.layout.width)
  }
  const onLayoutContent = useCallback((e: LayoutChangeEvent) => {
    setChildrenWidth(e.nativeEvent.layout.width)
  }, [])

  // =========== fps & direction ==============
  const duration = useMemo(() => {
    return (1 / fps) * childrenWidth * 1000
  }, [fps, childrenWidth])

  const coeff = useMemo(() => {
    return direction === 'left' ? 1 : -1
  }, [direction])

  // =========== loop & onCycleComplete & onFinish ==============
  const loopsRef = useRef(0)
  const convertLoop = useMemo(() => {
    if (loop === true || loop === 0) {
      return Infinity
    }
    if (loop === false) {
      return 1
    }
    return loop
  }, [loop])
  const handleLoopWorklet = useCallback(() => {
    'worklet'
    if (convertLoop < loopsRef.current) {
      onFinish && runOnJS(onFinish)()
    } else if (onCycleComplete) {
      runOnJS(onCycleComplete)()
    }
  }, [convertLoop, onCycleComplete, onFinish])

  // =========== useFrameCallback & timestamp ==============
  const offset = useSharedValue(0)
  const timestamp = useRef(0)
  const ufc = useFrameCallback((i) => {
    // The number of times the marquee should loop
    if (convertLoop < loopsRef.current) {
      return
    }

    if (
      i.timestamp - timestamp.current <
      (timestamp.current === 0
        ? // Duration to delay the animation after first render
          leading
        : // Duration to delay the animation after previous loop
          trailing)
    ) {
      return
    }

    offset.value +=
      ((i.timeSincePreviousFrame ?? 1) * coeff * childrenWidth) / duration
    if (Math.abs(offset.value) >= childrenWidth) {
      timestamp.current = i.timestamp
      loopsRef.current += 1
      handleLoopWorklet()
      offset.value = autoFill ? 0 : coeff * -parentWidth
    } else {
      offset.value = offset.value % childrenWidth
    }
  }, false)

  // =========== initialPosition & useEffect ==============
  const initialPosition = useMemo(() => {
    return direction === 'right' && autoFill ? -childrenWidth : 0
  }, [autoFill, childrenWidth, direction])

  useEffect(() => {
    if (childrenWidth > 0 && parentWidth > 0) {
      if (childrenWidth > parentWidth || autoFill) {
        ufc.setActive(play)
      } else if (!play || !autoFill) {
        offset.value = initialPosition
        ufc.setActive(false)
      }
    } else {
      ufc.setActive(false)
    }
  }, [autoFill, childrenWidth, initialPosition, offset, parentWidth, play, ufc])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: -offset.value + initialPosition,
        },
      ],
    }
  }, [initialPosition])

  const renderChild = useMemo(() => {
    // autoFill multiples
    const autoFillTimes =
      autoFill && childrenWidth > 0
        ? Math.ceil(parentWidth / childrenWidth) + 1
        : 1
    return new Array(autoFillTimes).fill('').map((_, index) => {
      if (typeof children === 'string') {
        return (
          <Text
            key={index}
            style={[spacing ? { paddingRight: spacing } : {}, style]}
            numberOfLines={1}
            ellipsizeMode="tail"
            onLayout={index ? undefined : onLayoutContent}>
            {children}
          </Text>
        )
      } else {
        return (
          <View
            key={index}
            onLayout={index ? undefined : onLayoutContent}
            style={spacing ? { paddingRight: spacing } : undefined}>
            {children}
          </View>
        )
      }
    })
  }, [
    autoFill,
    children,
    childrenWidth,
    onLayoutContent,
    parentWidth,
    spacing,
    style,
  ])

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      onLayout={onLayoutContainer}>
      <Animated.View
        style={[{ flexDirection: 'row', alignItems: 'center' }, animatedStyle]}>
        {renderChild}
      </Animated.View>
    </ScrollView>
  )
}
