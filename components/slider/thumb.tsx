import type { FC, ReactNode, RefObject } from 'react'
import React, { useRef, useState } from 'react'
import { View } from 'react-native'
import { SliderStyle } from './style'
// import { ThumbIcon } from './thumb-icon'

type ThumbProps = {
  value: number
  min: number
  max: number
  disabled: boolean
  onDrag: (value: number, first: boolean, last: boolean) => void
  trackRef: RefObject<HTMLDivElement>
  icon?: ReactNode
  popover: boolean | ((value: number) => ReactNode)
  residentPopover: boolean
  styles: Partial<SliderStyle>
}

const Thumb: FC<ThumbProps> = (props) => {
  const { value, min, max, disabled, icon, residentPopover, onDrag, styles } =
    props
  const prevValue = useRef(value)
  // const { locale } = useConfig()

  const currentPosition = () => {
    return {
      left: `${((value - min) / (max - min)) * 100}%`,
      right: 'auto',
    }
  }

  const [dragging, setDragging] = useState(false)

  // const bind = useDrag(
  //   (state) => {
  //     if (disabled) {
  //       return
  //     }
  //     if (state.first) {
  //       prevValue.current = value
  //     }
  //     const x = state.xy[0] - state.initial[0]
  //     const sliderOffsetWith = props.trackRef.current?.offsetWidth
  //     if (!sliderOffsetWith) {
  //       return
  //     }
  //     const diff = (x / Math.ceil(sliderOffsetWith)) * (max - min)
  //     onDrag(prevValue.current + diff, state.first, state.last)
  //     setDragging(!state.last)
  //   },
  //   {
  //     axis: 'x',
  //     pointer: { touch: true },
  //   },
  // )

  const renderPopoverContent =
    typeof props.popover === 'function'
      ? props.popover
      : props.popover
      ? (value: number) => value.toString()
      : null

  const thumbElement = (
    <View style={styles.thumb}>
      {/* {icon ? icon : <ThumbIcon style={styles.thumbIcon} />} */}
      <View style={styles.thumbIcon} />
    </View>
  )

  return (
    <View
      style={[styles.thumbContainer, currentPosition()]}
      // {...bind()}
    >
      {thumbElement}
    </View>
  )
}

export default Thumb
