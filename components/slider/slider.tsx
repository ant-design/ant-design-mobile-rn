import getMiniDecimal from '@rc-component/mini-decimal'
import React, {
  ForwardedRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { LayoutChangeEvent, LayoutRectangle, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import HapticsContext from '../provider/HapticsContext'
import { useTheme } from '../style'
import Marks from './marks'
import {
  BaseSliderProps,
  SliderProps,
  SliderRef,
  SliderValueType,
} from './PropsType'
import SliderStyles from './style'
import Thumb from './thumb'
import Ticks from './ticks'

function sortValue(val: [number, number]) {
  return val.sort((a, b) => a - b)
}
function nearest(arr: number[], target: number) {
  return arr.reduce((pre, cur) => {
    // return target > cur ? cur : pre
    return Math.abs(pre - target) < Math.abs(cur - target) ? pre : cur
  })
}

function InternalSlider<SliderValue extends SliderValueType>(
  props: SliderProps,
  ref: ForwardedRef<SliderRef>,
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
    tapToSeek = true,
    ticks,
  } = props as BaseSliderProps<SliderValue> & { range: boolean }

  // step越小滑动刷新率fps越高
  const step = props.step || 1

  const ss = useTheme({
    styles,
    themeStyles: SliderStyles,
  })

  const onHaptics = useContext(HapticsContext)

  const [trackLayout, setTrackLayout] = useState<LayoutRectangle | undefined>()
  const onTrackLayout = (e: LayoutChangeEvent) => {
    setTrackLayout(e.nativeEvent.layout)
  }
  const MAX_VALUE = useMemo(() => trackLayout?.width || 0, [trackLayout?.width])

  const convertValue = useCallback(
    (value: SliderValue) => {
      if (Array.isArray(value)) {
        return sortValue([value[0], value[1]])
      }
      return [min, value] as [number, number]
    },
    [min],
  )

  const getSafeValue = useCallback(
    (value: SliderValue) => {
      if (range) {
        return convertValue(value ?? min) as SliderValue
      }
      return (isNaN(Number(value)) ? min : value) as SliderValue
    },
    [convertValue, min, range],
  )

  // ================= 🌟 sliderValue 🌟 ===================
  const sliderValue = useSharedValue<SliderValue>(
    (range ? [min, min] : min) as SliderValue,
  )

  // ================= step & ticks prop ===================
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

  const getPositionByValue = useCallback(
    (value: SliderValue, index: number) => {
      return (
        ((convertValue(value)[index] - min) / (max - min)) *
        Math.ceil(MAX_VALUE)
      )
    },
    [MAX_VALUE, convertValue, max, min],
  )

  // ================= onSlidingStart & onSlidingComplete prop ===================
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

  // ================= useEffect ======================
  const firstMount = useRef(false)
  useEffect(() => {
    if (isSliding === false) {
      sliderValue.value = getSafeValue(
        propsValue ??
          (firstMount.current ? undefined : defaultValue) ??
          sliderValue.value,
      )
      offsetTemp.current = undefined
    }

    if (firstMount.current === false) {
      firstMount.current = true
    }
  }, [defaultValue, getSafeValue, isSliding, propsValue, sliderValue])

  // ================= onChange ======================
  const offset1 = useSharedValue(0)
  const offset2 = useSharedValue(0)

  const handleChange = useCallback(
    (value: SliderValue) => {
      const safeValue = getSafeValue(value)
      if (isSliding) {
        onChange?.(safeValue)
        ticks && !disabledStep && onHaptics?.('slider')
      }
      if (!isSliding || range) {
        offset1.value = getPositionByValue(safeValue, 0)
        offset2.value = getPositionByValue(safeValue, 1)
      }
    },
    [
      disabledStep,
      getPositionByValue,
      getSafeValue,
      isSliding,
      offset1,
      offset2,
      onChange,
      onHaptics,
      range,
      ticks,
    ],
  )
  useAnimatedReaction(
    () => sliderValue.value,
    (value) => runOnJS(handleChange)(value),
    [handleChange],
  )

  // ================= onTrackClick gesture ======================
  const onTrackClick = useCallback(
    (x: number) => {
      const targetValue = getValueByPosition(x)
      if (range) {
        // 双滑块采用就近原则移动
        sliderValue.modify((value: any) => {
          'worklet'
          if (
            Math.abs(targetValue - value[0]) > Math.abs(targetValue - value[1])
          ) {
            value[1] = targetValue
          } else {
            value[0] = targetValue
          }
          return value
        })
      } else {
        sliderValue.value = targetValue as SliderValue
      }
      setTimeout(() => {
        onChange?.(sliderValue.value)
      })
      if (!ticks) {
        onHaptics?.('slider')
      }
    },
    [getValueByPosition, onChange, onHaptics, range, sliderValue, ticks],
  )

  // ================= onSlide gesture ======================
  const offsetTemp = useRef<number | undefined>(undefined)
  const onSlide = useCallback(
    (changeX: number) => {
      if (offsetTemp.current === undefined) {
        offsetTemp.current = offset2.value
      }
      offsetTemp.current =
        Math.abs(offsetTemp.current) <= MAX_VALUE
          ? offsetTemp.current + changeX <= 0
            ? 0
            : offsetTemp.current + changeX >= MAX_VALUE
            ? MAX_VALUE
            : offsetTemp.current + changeX
          : offsetTemp.current

      offset2.value = offsetTemp.current
      sliderValue.value = getValueByPosition(offsetTemp.current) as SliderValue
    },
    [MAX_VALUE, getValueByPosition, offset2, sliderValue],
  )

  // ================= onDrag gesture ======================
  const onDrag = useCallback(
    (index: number, absoluteX: number) => {
      const newValue = getValueByPosition(absoluteX)
      if ((sliderValue.value as number[])[index] === newValue) {
        return
      }
      sliderValue.modify((value: any) => {
        'worklet'
        value[index] = newValue
        return value
      })
    },
    [getValueByPosition, sliderValue],
  )

  const gesture = React.useMemo(() => {
    const horizontalPan = Gesture.Pan()
      .enabled(!disabled && !range)
      .activeOffsetX([-10, 10])
      .failOffsetY([-1, 1]) // must horizontal
      .onStart(() => runOnJS(onSlidingStartI)())
      .onChange((e) => {
        runOnJS(onSlide)(e.changeX)
      })
      .onEnd(() => runOnJS(onSlidingCompleteI)())

    // long press in 350ms
    const longPan = Gesture.Pan()
      .enabled(!disabled && !range)
      .activateAfterLongPress(350)
      .onStart(() => runOnJS(onSlidingStartI)())
      .onChange((e) => {
        runOnJS(onSlide)(e.changeX)
      })
      .onEnd(() => runOnJS(onSlidingCompleteI)())

    // 点击
    const tap = Gesture.Tap()
      .enabled(!disabled && tapToSeek)
      .onEnd((e) => runOnJS(onTrackClick)(e.x))

    return Gesture.Race(horizontalPan, longPan, tap)
  }, [
    disabled,
    onSlide,
    onSlidingCompleteI,
    onSlidingStartI,
    onTrackClick,
    range,
    tapToSeek,
  ])

  // ================= Animated fillStyle ======================
  const fillStyle = useAnimatedStyle(() => {
    return {
      left: offset1.value,
      width: Math.abs(offset2.value - offset1.value),
    }
  }, [offset1, offset2])

  const renderThumb = (index: number) => {
    return (
      <Thumb
        key={index}
        offset={index ? offset2 : offset1}
        getValueByPosition={getValueByPosition}
        disabled={disabled || !range}
        isSliding={isSliding}
        icon={icon}
        popover={!!popover}
        residentPopover={!!residentPopover}
        onDrag={onDrag.bind(this, index)}
        onSlidingStart={onSlidingStartI.bind(this, index)}
        onSlidingComplete={onSlidingCompleteI.bind(this, index)}
        style={index === 0 ? { position: 'absolute' } : {}}
        styles={ss}
      />
    )
  }

  // ================== Actions Ref ==================
  const actions = React.useMemo(
    () => ({
      onSlide,
    }),
    [onSlide],
  )
  useImperativeHandle(ref, () => actions)

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
          {renderThumb(1)}
          {range && renderThumb(0)}
        </View>
        {/* 刻度下的标记 */}
        {marks && <Marks marks={marks} min={min} max={max} styles={ss} />}
      </View>
    </GestureDetector>
  )
}

const Slider = React.forwardRef<SliderRef, SliderProps>(InternalSlider) as ((
  props: React.PropsWithChildren<SliderProps> & React.RefAttributes<SliderRef>,
) => React.ReactElement) &
  Pick<React.FC, 'displayName'>

Slider.displayName = 'Slider'

export default React.memo(Slider)
