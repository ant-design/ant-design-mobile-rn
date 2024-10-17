import getMiniDecimal, { toFixed } from '@rc-component/mini-decimal'
import useMergedState from 'rc-util/lib/hooks/useMergedState'
import React, {
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react'
import { LayoutChangeEvent, LayoutRectangle, View } from 'react-native'
import {
  Gesture,
  GestureDetector,
  GestureStateChangeEvent,
  TapGestureHandlerEventPayload,
} from 'react-native-gesture-handler'
import { runOnJS } from 'react-native-reanimated'
import devWarning from '../_util/devWarning'
import HapticsContext from '../provider/HapticsContext'
import { useTheme } from '../style'
import { BaseSliderProps, SliderProps } from './PropsType'
import Marks from './marks'
import SliderStyles from './style'
import Thumb from './thumb'
import Ticks from './ticks'

function nearest(arr: number[], target: number) {
  return arr.reduce((pre, cur) => {
    return Math.abs(pre - target) < Math.abs(cur - target) ? pre : cur
  })
}

export function Slider<SliderValue extends number | [number, number]>(
  props: SliderProps,
) {
  const {
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

  function sortValue(val: [number, number]) {
    return val.sort((a, b) => a - b)
  }
  function convertValue(value: SliderValue) {
    return (range ? value : [min, value]) as [number, number]
  }
  function alignValue(value: number, decimalLen: number) {
    const decimal = getMiniDecimal(value)
    const fixedStr = toFixed(decimal.toString(), '.', decimalLen)

    return getMiniDecimal(fixedStr).toNumber()
  }

  const reverseValue = useCallback(
    (value: [number, number]) => {
      const mergedDecimalLen = Math.max(
        getDecimalLen(step),
        getDecimalLen(value[0]),
        getDecimalLen(value[1]),
      )
      return (
        range
          ? value.map((v) => alignValue(v, mergedDecimalLen))
          : alignValue(value[1], mergedDecimalLen)
      ) as SliderValue
    },
    [range, step],
  )

  function getDecimalLen(n: number) {
    return (`${n}`.split('.')[1] || '').length
  }

  let propsValue = props.value as SliderValue
  if (range && typeof props.value === 'number') {
    devWarning(
      false,
      'Slider',
      'When `range` prop is enabled, the `value` prop should be an array, like: [0, 0]',
    )
    propsValue = [0, props.value] as SliderValue
  }
  const [rawValue, setRawValue] = useMergedState<SliderValue>(
    (defaultValue ?? (range ? [min, min] : min)) as SliderValue,
    { value: propsValue, onChange },
  )

  const sliderValue = sortValue(convertValue(rawValue))
  const setSliderValue = useCallback(
    (value: [number, number]) => {
      const next = sortValue(value)

      const current = sliderValue
      if (next[0] === current[0] && next[1] === current[1]) {
        return
      }
      setRawValue(reverseValue(next))
    },
    [reverseValue, setRawValue, sliderValue],
  )

  const fillSize = `${(100 * (sliderValue[1] - sliderValue[0])) / (max - min)}%`
  const fillStart = `${(100 * (sliderValue[0] - min)) / (max - min)}%`

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

  const [trackLayout, setTrackLayout] = useState<LayoutRectangle | undefined>()
  const onTrackLayout = (e: LayoutChangeEvent) => {
    setTrackLayout(e.nativeEvent.layout)
  }

  const getValueByPosition = useCallback(
    (position: number, last: boolean) => {
      const newPosition = position < min ? min : position > max ? max : position

      // 禁用步距
      if (!last && !range && disabledStep) {
        return newPosition
      }

      let value = min
      // 显示了刻度点，就只能移动到点上
      if (pointList.length && !disabledStep) {
        value = nearest(pointList, newPosition)
      } else {
        // 使用 MiniDecimal 避免精度问题
        const cell = Math.round((newPosition - min) / step)
        const nextVal = getMiniDecimal(cell).multi(step)
        value = getMiniDecimal(min).add(nextVal.toString()).toNumber()
      }
      return value
    },
    [disabledStep, max, min, pointList, range, step],
  )

  const [isSliding, setSliding] = useState(false)
  const onSlidingStartI = useCallback(
    (index = 0) => {
      onSlidingStart?.(rawValue, index)
      setSliding(true)
    },
    [onSlidingStart, rawValue],
  )
  const onSlidingCompleteI = useCallback(
    (val, index) => {
      onSlidingComplete?.(val, index)
      setSliding(false)
    },
    [onSlidingComplete],
  )

  const onAfterChangeRange = useCallback(
    (value: [number, number], index?: number) => {
      const val = reverseValue(value)
      const i = (range && index) || 0
      onAfterChange?.(val, i)
      onSlidingCompleteI(val, i)
    },
    [onAfterChange, onSlidingCompleteI, range, reverseValue],
  )

  const onHaptics = useContext(HapticsContext)

  // on trackContainer tap
  const onTrackClick = useCallback(
    (event: GestureStateChangeEvent<TapGestureHandlerEventPayload>) => {
      if (!trackLayout) {
        return
      }

      const position =
        (event.x / Math.ceil(trackLayout.width)) * (max - min) + min
      const targetValue = getValueByPosition(position, true)
      let nextSliderValue: [number, number]
      if (range) {
        // 移动的滑块采用就近原则
        if (
          Math.abs(targetValue - sliderValue[0]) >
          Math.abs(targetValue - sliderValue[1])
        ) {
          nextSliderValue = [sliderValue[0], targetValue]
        } else {
          nextSliderValue = [targetValue, sliderValue[1]]
        }
      } else {
        nextSliderValue = [min, targetValue]
      }
      setSliderValue(nextSliderValue)
      if (!ticks) {
        onHaptics('slider')
      }
    },
    [
      getValueByPosition,
      max,
      min,
      onHaptics,
      range,
      setSliderValue,
      sliderValue,
      ticks,
      trackLayout,
    ],
  )

  // on thumb pan gesture
  const valueBeforeDragRef = useRef<[number, number]>()
  const onDrag = useCallback(
    (index: number, locationX: number, last: boolean) => {
      if (!trackLayout) {
        return
      }
      // 是百分比位置，而非x坐标
      const position =
        (locationX / Math.ceil(trackLayout.width)) * (max - min) + min

      const val = getValueByPosition(position, last)
      if (!valueBeforeDragRef.current) {
        valueBeforeDragRef.current = [...sliderValue]
      }
      valueBeforeDragRef.current[index] = val
      const next = sortValue([...valueBeforeDragRef.current])
      setSliderValue(next)
      if (last) {
        valueBeforeDragRef.current = undefined
        onAfterChangeRange(next, index)
      }
    },
    [
      getValueByPosition,
      max,
      min,
      onAfterChangeRange,
      setSliderValue,
      sliderValue,
      trackLayout,
    ],
  )

  // on trackContainer pan gesture
  const valueBeforeSlideRef = useRef<number>()
  const onSlide = useCallback(
    (translationX: number, last: boolean) => {
      if (!trackLayout) {
        return
      }

      if (typeof valueBeforeSlideRef.current === 'undefined') {
        valueBeforeSlideRef.current =
          ((rawValue as number) / max) * trackLayout.width
      }

      // 复用
      onDrag(1, translationX + valueBeforeSlideRef.current, last)

      if (last) {
        valueBeforeSlideRef.current = undefined
      }
    },
    [max, onDrag, rawValue, trackLayout],
  )

  const renderThumb = (index: number) => {
    return (
      <Thumb
        key={index}
        value={sliderValue[index]}
        trackLayout={trackLayout}
        min={min}
        max={max}
        disabled={disabled || !range}
        isSliding={isSliding}
        icon={icon}
        popover={!!popover}
        residentPopover={!!residentPopover}
        onDrag={onDrag.bind(this, index)}
        onSlidingStart={onSlidingStartI.bind(this, index)}
        style={index === 0 ? { position: 'absolute' } : {}}
        styles={ss}
      />
    )
  }

  /**
   * Performance issues moved to @link https://github.com/software-mansion/react-native-reanimated/issues/6247
   */
  const gesture = React.useMemo(() => {
    const horizontalPan = Gesture.Pan()
      .enabled(!disabled && !range)
      .failOffsetY([-1, 1]) // must horizontal
      .onStart(() => runOnJS(onSlidingStartI)())
      .onUpdate((e) => {
        runOnJS(onSlide)(e.translationX, false)
      })
      .onEnd((e) => {
        runOnJS(onSlide)(e.translationX, true)
      })

    // long press in 350ms
    const longPan = Gesture.Pan()
      .enabled(!disabled && !range)
      .activateAfterLongPress(300)
      .onStart(() => runOnJS(onSlidingStartI)())
      .onUpdate((e) => {
        runOnJS(onSlide)(e.translationX, false)
      })
      .onEnd((e) => {
        runOnJS(onSlide)(e.translationX, true)
      })

    const tap = Gesture.Tap()
      .enabled(!disabled && tapToSeek)
      .maxDistance(0)
      .onFinalize((e, success) => {
        success && runOnJS(onTrackClick)(e)
      })

    return Gesture.Simultaneous(horizontalPan, longPan, tap)
  }, [disabled, onSlide, onSlidingStartI, onTrackClick, range, tapToSeek])

  return (
    <GestureDetector gesture={gesture}>
      <View style={[ss.slider, disabled && ss.disabled, style]}>
        <View style={ss.trackContianer} onLayout={onTrackLayout}>
          <View style={ss.track} />
          <View
            style={[
              ss.fill,
              {
                width: fillSize,
                left: fillStart,
              },
            ]}
          />
          {/* 刻度 */}
          {ticks && (
            <Ticks
              points={pointList}
              min={min}
              max={max}
              lowerBound={sliderValue[0]}
              upperBound={sliderValue[1]}
              styles={ss}
            />
          )}
          {range && renderThumb(0)}
          {renderThumb(1)}
        </View>

        {/* 刻度下的标记 */}
        {marks && (
          <Marks
            min={min}
            max={max}
            marks={marks}
            lowerBound={sliderValue[0]}
            upperBound={sliderValue[1]}
            styles={ss}
          />
        )}
      </View>
    </GestureDetector>
  )
}
