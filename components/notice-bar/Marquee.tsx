import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { LayoutChangeEvent, ScrollView, Text, View } from 'react-native'
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useFrameCallback,
  useSharedValue,
} from 'react-native-reanimated'
import { MarqueeActions, MarqueeProps } from './PropsType'

export const Marquee = forwardRef<MarqueeActions, MarqueeProps>(
  (props, ref) => {
    const {
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
      wrapStyle,
    } = props

    const isVertical = useMemo(
      () => ['up', 'down'].includes(direction),
      [direction],
    )
    const autoFill = isVertical || props.autoFill

    // =========== parent & children onLayout ==============
    const [parentLayout, setParentLayout] = useState({ width: 0, height: 0 })
    const [childrenLayout, setChildrenLayout] = useState({
      width: 0,
      height: 0,
    })
    const onLayoutContainer = (e: LayoutChangeEvent) => {
      setParentLayout(e.nativeEvent.layout)
    }
    const onLayoutContent = useCallback((e: LayoutChangeEvent) => {
      setChildrenLayout(e.nativeEvent.layout)
    }, [])

    const parentWidth = useMemo(() => {
      if (isVertical) {
        return childrenLayout.height
      }
      return parentLayout.width
    }, [childrenLayout.height, isVertical, parentLayout.width])
    const childrenWidth = useMemo(() => {
      if (isVertical) {
        return childrenLayout.height
      }
      return childrenLayout.width
    }, [isVertical, childrenLayout.width, childrenLayout.height])

    // =========== fps & direction ==============
    const duration = useMemo(() => {
      return (1 / fps) * childrenWidth * 1000
    }, [fps, childrenWidth])

    const coeff = useMemo(() => {
      return ['left', 'up'].includes(direction) ? 1 : -1
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

    // =========== ref  ==============
    const initialPosition = useMemo(() => {
      return ['right', 'down'].includes(direction) && autoFill
        ? -childrenWidth
        : 0
    }, [autoFill, childrenWidth, direction])

    const actions: MarqueeActions = useMemo(
      () => ({
        play: () => ufc.setActive(true),
        pause: () => ufc.setActive(false),
        stop: () => {
          ufc.setActive(false)
          offset.value = initialPosition
        },
      }),
      [initialPosition, offset, ufc],
    )

    useImperativeHandle(ref, () => actions)

    // =========== useEffect ==============
    useEffect(() => {
      if (childrenWidth > 0 && parentWidth > 0) {
        if (childrenWidth > parentWidth || autoFill) {
          ufc.setActive(play)
        } else if (!play || !autoFill) {
          actions.stop()
        }
      } else {
        actions.pause()
      }
    }, [actions, autoFill, childrenWidth, parentWidth, play, ufc])

    const animatedStyle = useAnimatedStyle(() => {
      if (isVertical) {
        return {
          transform: [
            {
              translateY: -offset.value + initialPosition,
            },
          ],
        }
      }
      return {
        transform: [
          {
            translateX: -offset.value + initialPosition,
          },
        ],
      }
    }, [initialPosition, isVertical])

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
              style={[
                spacing
                  ? { [isVertical ? 'paddingBottom' : 'paddingRight']: spacing }
                  : {},
                style,
              ]}
              numberOfLines={isVertical ? undefined : 1}
              onLayout={index ? undefined : onLayoutContent}>
              {children}
            </Text>
          )
        } else {
          return (
            <View
              key={index}
              onLayout={index ? undefined : onLayoutContent}
              style={
                spacing
                  ? {
                      [isVertical ? 'paddingBottom' : 'paddingRight']: spacing,
                    }
                  : undefined
              }>
              {children}
            </View>
          )
        }
      })
    }, [
      autoFill,
      children,
      childrenWidth,
      isVertical,
      onLayoutContent,
      parentWidth,
      spacing,
      style,
    ])

    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={!isVertical}
        scrollEnabled={false}
        onLayout={onLayoutContainer}
        style={{
          maxHeight: childrenLayout.height || 'auto',
        }}>
        <Animated.View
          style={[
            wrapStyle,
            { flexDirection: isVertical ? 'column' : 'row' },
            animatedStyle,
          ]}>
          {renderChild}
        </Animated.View>
      </ScrollView>
    )
  },
)
