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

  const clampSlideOffset = useCallback(
    (current: number, changeX: number) => {
      if (Math.abs(current) > MAX_VALUE) {
        return current
      }
      const next = current + changeX
      if (next <= 0) {
        return 0
      }
      if (next >= MAX_VALUE) {
        return MAX_VALUE
      }
      return next
    },
    [MAX_VALUE],
  )

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

  const [trackValue, setTrackValue] = useState<SliderValue>(() =>
    getSafeValue(
      (defaultValue ?? (range ? [min, min] : min)) as SliderValue,
    ),
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
  const panOffsetTemps = useRef<[number | undefined, number | undefined]>([
    undefined,
    undefined,
  ])
  const resetPanOffset = useCallback((thumbIndex: 0 | 1) => {
    panOffsetTemps.current[thumbIndex] = undefined
  }, [])

  const onSlidingStartI = useCallback(
    (index = 0) => {
      resetPanOffset(range ? (index as 0 | 1) : 1)
      if (onSlidingStart) {
        onSlidingStart(sliderValue.value, index)
      }
      setSliding(true)
    },
    [onSlidingStart, range, resetPanOffset, sliderValue],
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
      const next = getSafeValue(
        propsValue ??
          (firstMount.current ? undefined : defaultValue) ??
          sliderValue.value,
      )
      sliderValue.value = next
      if (ticks) {
        setTrackValue(next)
      }
      panOffsetTemps.current = [undefined, undefined]
    }

    if (firstMount.current === false) {
      firstMount.current = true
    }
  }, [defaultValue, getSafeValue, isSliding, propsValue, sliderValue, ticks])

  // ================= onChange ======================
  const offset1 = useSharedValue(0)
  const offset2 = useSharedValue(0)

  const handleChange = useCallback(
    (value: SliderValue) => {
      const safeValue = getSafeValue(value)
      if (ticks) {
        setTrackValue(safeValue)
      }
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

  // ================= Pan（轨道长按 / Thumb 拖动，共用 changeX） ======================
  const onPanChange = useCallback(
    (changeX: number, thumbIndex: 0 | 1 = 1) => {
      const offset = thumbIndex ? offset2 : offset1
      if (panOffsetTemps.current[thumbIndex] === undefined) {
        panOffsetTemps.current[thumbIndex] = offset.value
      }
      panOffsetTemps.current[thumbIndex] = clampSlideOffset(
        panOffsetTemps.current[thumbIndex]!,
        changeX,
      )
      const position = panOffsetTemps.current[thumbIndex]!
      offset.value = position

      const newValue = getValueByPosition(position)
      if (range) {
        if ((sliderValue.value as number[])[thumbIndex] === newValue) {
          return
        }
        sliderValue.modify((value: any) => {
          'worklet'
          value[thumbIndex] = newValue
          return value
        })
      } else {
        if (sliderValue.value === newValue) {
          return
        }
        sliderValue.value = newValue as SliderValue
      }
    },
    [
      clampSlideOffset,
      getValueByPosition,
      offset1,
      offset2,
      range,
      sliderValue,
    ],
  )

  const trackGesture = React.useMemo(() => {
    const longPan = Gesture.Pan()
      .enabled(!disabled && !range)
      .activateAfterLongPress(150)
      .runOnJS(true)
      .onStart(() => onSlidingStartI(1))
      .onChange((e) => onPanChange(e.changeX, 1))
      .onEnd(() => onSlidingCompleteI(1))

    const tap = Gesture.Tap()
      .enabled(!disabled && tapToSeek)
      .runOnJS(true)
      .onEnd((e) => onTrackClick(e.x))

    return Gesture.Race(longPan, tap)
  }, [
    disabled,
    onPanChange,
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
        disabled={disabled}
        isSliding={isSliding}
        icon={icon}
        popover={!!popover}
        residentPopover={!!residentPopover}
        onDrag={(changeX) => onPanChange(changeX, index as 0 | 1)}
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
      onPanChange,
    }),
    [onPanChange],
  )
  useImperativeHandle(ref, () => actions)

  return (
    <View style={[ss.slider, disabled && ss.disabled, style]}>
      <View style={ss.trackContianer} onLayout={onTrackLayout}>
        <GestureDetector gesture={trackGesture}>
          <View style={ss.trackGestureArea} collapsable={false}>
            <View style={ss.track} />
            <Animated.View style={[ss.fill, fillStyle]} />
            {ticks && (
              <Ticks
                points={pointList}
                min={min}
                max={max}
                value={trackValue}
                styles={ss}
              />
            )}
          </View>
        </GestureDetector>
        {renderThumb(1)}
        {range && renderThumb(0)}
      </View>
      {marks && <Marks marks={marks} min={min} max={max} styles={ss} />}
    </View>
  )
}

const Slider = React.forwardRef<SliderRef, SliderProps>(InternalSlider) as ((
  props: React.PropsWithChildren<SliderProps> & React.RefAttributes<SliderRef>,
) => React.ReactElement) &
  Pick<React.FC, 'displayName'>

Slider.displayName = 'Slider'

export default React.memo(Slider)
