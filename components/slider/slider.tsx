import getMiniDecimal from '@rc-component/mini-decimal'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { LayoutChangeEvent, LayoutRectangle, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import { useTheme } from '../style'
import { BaseSliderProps, SliderProps, SliderValueType } from './PropsType'
import SliderStyles from './style'
import Thumb from './thumb'
import Ticks from './ticks'

function nearest(arr: number[], target: number) {
  return arr.reduce((pre, cur) => {
    return Math.abs(pre - target) < Math.abs(cur - target) ? pre : cur
  })
}

function sortValue(val: [number, number]) {
  if (Array.isArray(val)) {
    return [...val].sort((a, b) => a - b)
  }
  return val
}

export function Slider<SliderValue extends SliderValueType>(
  props: SliderProps,
) {
  const {
    value: propsValue,
    defaultValue,
    disabled = false,
    disabledStep = false,
    icon,
    marks,
    max = 100,
    min = 0,
    onAfterChange,
    onChange,
    onSlidingStart,
    onSlidingComplete,
    popover,
    residentPopover,
    range,
    style,
    styles,
    ticks,
  } = props as BaseSliderProps<SliderValue> & { range: boolean }

  // step越小滑动刷新率fps越高
  const step = props.step || 1

  const ss = useTheme({
    styles,
    themeStyles: SliderStyles,
  })

  const [trackLayout, setTrackLayout] = useState<LayoutRectangle | undefined>()
  const onTrackLayout = (e: LayoutChangeEvent) => {
    setTrackLayout(e.nativeEvent.layout)
  }
  const MAX_VALUE = useMemo(() => trackLayout?.width || 0, [trackLayout?.width])

  // ================= step & ticks ===================
  // 计算要显示的点
  const pointList = useMemo(() => {
    if (marks) {
      return Object.keys(marks)
        .map(parseFloat)
        .sort((a, b) => a - b)
    } else if (ticks) {
      const points: number[] = []
      for (
        let i = getMiniDecimal(min);
        i.lessEquals(getMiniDecimal(max));
        i = i.add(step)
      ) {
        points.push(i.toNumber())
      }
      return points
    }

    return []
  }, [marks, ticks, step, min, max])

  // ================= 🌟 getValueByPosition 🌟 ===================
  const getValueByPosition = useCallback(
    (offsetPosition: number) => {
      const position =
        (offsetPosition / Math.ceil(MAX_VALUE)) * (max - min) + min
      const newPosition = position < min ? min : position > max ? max : position

      // 禁用步距
      if (disabledStep) {
        return newPosition
      }

      let value = min
      // 显示了刻度点，就只能移动到点上
      if (pointList.length) {
        value = nearest(pointList, newPosition)
      } else {
        // 使用 MiniDecimal 避免精度问题
        const cell = Math.round((newPosition - min) / step)
        const nextVal = getMiniDecimal(cell).multi(step)
        value = getMiniDecimal(min).add(nextVal.toString()).toNumber()
      }
      return value
    },
    [MAX_VALUE, disabledStep, max, min, pointList, step],
  )

  // ================= 🌟 getPositionByValue 🌟 ===================
  const getPositionByValue = useCallback(
    (value?: SliderValue, index = 0) => {
      let val = min
      if (Array.isArray(value)) {
        val = value[index]
      } else if (index === 0 && value && !isNaN(Number(value))) {
        val = value
      }
      val = Math.max(min, Math.min(val, max))

      return ((val - min) / (max - min)) * Math.ceil(MAX_VALUE)
    },
    [MAX_VALUE, max, min],
  )

  // ================= 🌟 sliderValue 🌟 ===================
  const sliderValue = useSharedValue<SliderValue>(
    (range ? [min, min] : min) as SliderValue,
  )
  const firstMount = useRef(false)
  useEffect(() => {
    sliderValue.value =
      propsValue ??
      (firstMount.current ? undefined : defaultValue) ??
      sliderValue.value

    if (firstMount.current === false) {
      firstMount.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propsValue, sliderValue])

  // ================= onChange ======================
  useEffect(() => {
    if (onChange) {
      sliderValue.addListener(1, onChange)
      return () => {
        sliderValue.removeListener(1)
      }
    }
  }, [onChange, sliderValue])

  // ================= onSlide ======================
  const offsetTemp = useRef<number | undefined>(undefined)
  const onSlide = useCallback(
    (changeX: number) => {
      if (offsetTemp.current === undefined) {
        offsetTemp.current = getPositionByValue(sliderValue.value)
      }
      offsetTemp.current =
        Math.abs(offsetTemp.current) <= MAX_VALUE
          ? offsetTemp.current + changeX <= 0
            ? 0
            : offsetTemp.current + changeX >= MAX_VALUE
            ? MAX_VALUE
            : offsetTemp.current + changeX
          : offsetTemp.current

      sliderValue.value = getValueByPosition(offsetTemp.current) as SliderValue
    },
    [MAX_VALUE, getPositionByValue, getValueByPosition, sliderValue],
  )

  // ================= onDrag ======================
  const valueBeforeDragRef = useRef<[number, number]>()
  const onDrag = useCallback(
    (index = 0, absoluteX: number) => {
      if (Array.isArray(sliderValue.value)) {
        if (!valueBeforeDragRef.current) {
          valueBeforeDragRef.current = sliderValue.value
        }
        const targetValue = getValueByPosition(absoluteX)
        valueBeforeDragRef.current[index] = targetValue
        sliderValue.value = sortValue(valueBeforeDragRef.current) as SliderValue
      }
    },
    [getValueByPosition, sliderValue],
  )

  // ================= onSlidingStart & onSlidingComplete ===================
  const [isSliding, setSliding] = useState(false)
  const onSlidingStartI = useCallback(
    (index = 0) => {
      if (onSlidingStart) {
        onSlidingStart(sliderValue.value, index)
      }
      setSliding(true)
    },
    [onSlidingStart, sliderValue],
  )
  const onSlidingCompleteI = useCallback(
    (index = 0) => {
      onAfterChange?.(sliderValue.value, index)
      onSlidingComplete?.(sliderValue.value, index)
      setSliding(false)
    },
    [onAfterChange, onSlidingComplete, sliderValue],
  )

  // ================= reset sliderValue ======================
  useEffect(() => {
    if (isSliding === false) {
      if (propsValue !== undefined) {
        sliderValue.value = propsValue
      }
      offsetTemp.current = undefined
      valueBeforeDragRef.current = undefined
    }
  }, [isSliding, propsValue, sliderValue])

  const renderThumb = (index: number) => {
    return (
      <Thumb
        key={index}
        sliderValue={sliderValue}
        index={index}
        getPositionByValue={getPositionByValue}
        disabled={disabled || !range}
        isSliding={isSliding}
        icon={icon}
        popover={!!popover}
        residentPopover={!!residentPopover}
        onDrag={onDrag.bind(this, index)}
        onSlidingStart={onSlidingStartI.bind(this, index)}
        onSlidingComplete={onSlidingCompleteI.bind(this, index)}
        style={index === 1 ? { position: 'absolute' } : {}}
        styles={ss}
      />
    )
  }

  /**
   * Performance issues moved to @link https://github.com/software-mansion/react-native-reanimated/issues/6247
   */
  const gesture = React.useMemo(() => {
    const horizontalPan = Gesture.Pan()
      .runOnJS(true)
      .enabled(!disabled && !range)
      .activeOffsetX([-10, 10])
      .failOffsetY([-1, 1]) // must horizontal
      .onStart(onSlidingStartI)
      .onChange((e) => {
        onSlide(e.changeX)
      })
      .onEnd(onSlidingCompleteI)

    // long press in 350ms
    const longPan = Gesture.Pan()
      .runOnJS(true)
      .enabled(!disabled && !range)
      .activateAfterLongPress(350)
      .onStart(onSlidingStartI)
      .onChange((e) => {
        onSlide(e.changeX)
      })
      .onEnd(onSlidingCompleteI)

    return Gesture.Race(horizontalPan, longPan)
  }, [disabled, onSlide, onSlidingCompleteI, onSlidingStartI, range])

  const fillStyle = useAnimatedStyle(() => {
    const fillStart = range
      ? getPositionByValue(sliderValue.value, 0)
      : getPositionByValue(min as SliderValue)
    const fillSize =
      (range
        ? getPositionByValue(sliderValue.value, 1)
        : getPositionByValue(sliderValue.value)) - fillStart

    return {
      left: fillStart,
      width: Math.abs(fillSize),
    }
  }, [getPositionByValue, range])

  return (
    <GestureDetector gesture={gesture}>
      <View style={[ss.slider, disabled && ss.disabled, style]}>
        <View style={ss.trackContianer} onLayout={onTrackLayout}>
          <View style={ss.track} />
          <Animated.View style={[ss.fill, fillStyle]} />
          {/* 刻度 */}
          {ticks && (
            <Ticks
              points={pointList}
              min={min}
              max={max}
              sliderValue={sliderValue}
              styles={ss}
            />
          )}
          {renderThumb(0)}
          {range && renderThumb(1)}
        </View>
      </View>
    </GestureDetector>
  )
}
