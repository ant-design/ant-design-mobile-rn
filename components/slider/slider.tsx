import getMiniDecimal, { toFixed } from '@rc-component/mini-decimal'
import useMergedState from 'rc-util/lib/hooks/useMergedState'
import React, { useContext, useMemo, useRef, useState } from 'react'
import {
  GestureResponderEvent,
  LayoutChangeEvent,
  LayoutRectangle,
  View,
} from 'react-native'
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
    icon,
    marks,
    max = 100,
    min = 0,
    onAfterChange,
    onChange,
    popover,
    residentPopover,
    range,
    step = 1,
    style,
    styles,
    ticks,
  } = props as BaseSliderProps<SliderValue> & { range: boolean }

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

  function reverseValue(value: [number, number]) {
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
  }

  function getDecimalLen(n: number) {
    return (`${n}`.split('.')[1] || '').length
  }

  function onAfterChangeRange(value: [number, number]) {
    onAfterChange?.(reverseValue(value))
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
  function setSliderValue(value: [number, number]) {
    const next = sortValue(value)

    const current = sliderValue
    if (next[0] === current[0] && next[1] === current[1]) {
      return
    }
    setRawValue(reverseValue(next))
  }

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

  function getValueByPosition(position: number) {
    const newPosition = position < min ? min : position > max ? max : position

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
  }

  const [trackLayout, setTrackLayout] = useState<LayoutRectangle | undefined>()
  const onTrackLayout = (e: LayoutChangeEvent) => {
    setTrackLayout(e.nativeEvent.layout)
  }

  const onHaptics = useContext(HapticsContext)
  const onTrackClick = (event: GestureResponderEvent) => {
    event.stopPropagation()
    if (disabled) {
      return
    }
    if (!trackLayout) {
      return
    }
    const sliderOffsetLeft = trackLayout.x
    const position =
      ((event.nativeEvent.locationX - sliderOffsetLeft) /
        Math.ceil(trackLayout.width)) *
        (max - min) +
      min
    const targetValue = getValueByPosition(position)
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
    onAfterChangeRange(nextSliderValue)
    if (!ticks) {
      onHaptics('slider')
    }
  }

  const valueBeforeDragRef = useRef<[number, number]>()

  const renderThumb = (index: number) => {
    return (
      <Thumb
        key={index}
        value={sliderValue[index]}
        trackLayout={trackLayout}
        min={min}
        max={max}
        disabled={disabled}
        icon={icon}
        popover={!!popover}
        residentPopover={!!residentPopover}
        onDrag={(locationX, last) => {
          if (!trackLayout) {
            return
          }
          const sliderOffsetLeft = trackLayout.x
          const position =
            ((locationX - sliderOffsetLeft) / Math.ceil(trackLayout.width)) *
              (max - min) +
            min
          const val = getValueByPosition(position)
          if (!valueBeforeDragRef.current) {
            valueBeforeDragRef.current = [...sliderValue]
          }
          valueBeforeDragRef.current[index] = val
          const next = sortValue([...valueBeforeDragRef.current])
          setSliderValue(next)
          if (last) {
            valueBeforeDragRef.current = undefined
            onAfterChangeRange(next)
          }
        }}
        style={index === 0 ? { position: 'absolute' } : {}}
        styles={ss}
      />
    )
  }

  return (
    <View style={[ss.slider, disabled && ss.disabled, style]}>
      <View
        style={ss.trackContianer}
        onLayout={onTrackLayout}
        onResponderRelease={onTrackClick}
        onStartShouldSetResponder={() => true}>
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
  )
}
