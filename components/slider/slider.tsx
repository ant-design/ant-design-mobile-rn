import useMergedState from 'rc-util/lib/hooks/useMergedState'

import getMiniDecimal, { toFixed } from '@rc-component/mini-decimal'
import type { FC, ReactNode } from 'react'
import React, { useMemo, useRef } from 'react'
import { View } from 'react-native'
import devWarning from '../_util/devWarning'
import { useTheme } from '../style'
import Marks, { SliderMarks } from './marks'
import SliderStyles, { SliderStyle } from './style'
import Thumb from './thumb'
import Ticks from './ticks'

export type SliderValue = number | [number, number]

export function nearest(arr: number[], target: number) {
  return arr.reduce((pre, cur) => {
    return Math.abs(pre - target) < Math.abs(cur - target) ? pre : cur
  })
}

export type SliderProps = {
  min?: number
  max?: number
  value?: SliderValue
  defaultValue?: SliderValue
  step?: number
  marks?: SliderMarks
  ticks?: boolean
  disabled?: boolean
  range?: boolean
  icon?: ReactNode
  popover?: boolean | ((value: number) => ReactNode)
  residentPopover?: boolean
  onChange?: (value: SliderValue) => void
  onAfterChange?: (value: SliderValue) => void
  styles?: Partial<SliderStyle>
}

export const Slider: FC<SliderProps> = (props) => {
  const {
    min = 0,
    max = 100,
    disabled = false,
    marks,
    ticks,
    step = 1,
    icon,
    styles,
  } = props

  const ss = useTheme({
    styles,
    themeStyles: SliderStyles,
  })

  function sortValue(val: [number, number]): [number, number] {
    return val.sort((a, b) => a - b)
  }
  function convertValue(value: SliderValue): [number, number] {
    return (props.range ? value : [min, value]) as any
  }
  function alignValue(value: number, decimalLen: number) {
    const decimal = getMiniDecimal(value)
    const fixedStr = toFixed(decimal.toString(), '.', decimalLen)

    return getMiniDecimal(fixedStr).toNumber()
  }

  function reverseValue(value: [number, number]): SliderValue {
    const mergedDecimalLen = Math.max(
      getDecimalLen(step),
      getDecimalLen(value[0]),
      getDecimalLen(value[1]),
    )
    return props.range
      ? (value.map((v) => alignValue(v, mergedDecimalLen)) as [number, number])
      : alignValue(value[1], mergedDecimalLen)
  }

  function getDecimalLen(n: number) {
    return (`${n}`.split('.')[1] || '').length
  }

  function onAfterChange(value: [number, number]) {
    props.onAfterChange?.(reverseValue(value))
  }

  let propsValue: SliderValue | undefined = props.value
  if (props.range && typeof props.value === 'number') {
    devWarning(
      false,
      'Slider',
      'When `range` prop is enabled, the `value` prop should be an array, like: [0, 0]',
    )
    propsValue = [0, props.value]
  }
  const [rawValue, setRawValue] = useMergedState<SliderValue>(
    props.defaultValue ?? (props.range ? [min, min] : min),
    { value: propsValue, onChange: props.onChange },
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

  const trackRef = useRef<any>(null)

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

  const dragLockRef = useRef(0)

  const onTrackClick = (event: React.MouseEvent) => {
    if (dragLockRef.current > 0) {
      return
    }
    event.stopPropagation()
    if (disabled) {
      return
    }
    const track = trackRef.current
    if (!track) {
      return
    }
    const sliderOffsetLeft = track.getBoundingClientRect().left
    const position =
      ((event.clientX - sliderOffsetLeft) / Math.ceil(track.offsetWidth)) *
        (max - min) +
      min

    const targetValue = getValueByPosition(position)
    let nextSliderValue: [number, number]
    if (props.range) {
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
    onAfterChange(nextSliderValue)
  }

  const valueBeforeDragRef = useRef<[number, number]>()

  const renderThumb = (index: number) => {
    return (
      <Thumb
        key={index}
        value={sliderValue[index]}
        min={min}
        max={max}
        disabled={disabled}
        trackRef={trackRef}
        icon={icon}
        popover={!!props.popover}
        residentPopover={!!props.residentPopover}
        onDrag={(position, first, last) => {
          if (first) {
            dragLockRef.current += 1
            valueBeforeDragRef.current = sliderValue
          }
          const val = getValueByPosition(position)
          const valueBeforeDrag = valueBeforeDragRef.current
          if (!valueBeforeDrag) {
            return
          }
          const next = [...valueBeforeDrag] as [number, number]
          next[index] = val
          setSliderValue(next)
          if (last) {
            onAfterChange(next)
            setTimeout(() => {
              dragLockRef.current -= 1
            }, 100)
          }
        }}
        styles={ss}
      />
    )
  }

  return (
    <View style={ss.slider}>
      <View style={ss.sliderContianer}>
        <View style={ss.trackStyle} ref={trackRef}>
          <View
            style={[
              ss.fill,
              {
                width: fillSize,
                left: fillStart,
              },
            ]}
          />
          {props.ticks && (
            <Ticks
              points={pointList}
              min={min}
              max={max}
              lowerBound={sliderValue[0]}
              upperBound={sliderValue[1]}
              styles={ss}
            />
          )}
          {props.range && renderThumb(0)}
          {renderThumb(1)}
        </View>
      </View>
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
