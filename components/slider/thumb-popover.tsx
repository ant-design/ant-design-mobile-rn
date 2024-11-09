import React, { useCallback, useMemo, useState } from 'react'
import { View } from 'react-native'
import { runOnJS, useAnimatedReaction } from 'react-native-reanimated'
import Tooltip from '../tooltip'
import { ThumbProps } from './thumb'

export const ThumbPopover = (
  props: Pick<
    ThumbProps,
    | 'offset'
    | 'getValueByPosition'
    | 'popover'
    | 'residentPopover'
    | 'isSliding'
  > & { children: React.ReactNode },
) => {
  const {
    children,
    getValueByPosition,
    offset,
    isSliding,
    popover,
    residentPopover,
  } = props

  // ================= onChange ======================
  const [contentValue, setContentValue] = useState(0)

  const handleChange = useCallback(
    (position: number) => {
      setContentValue(getValueByPosition(position))
    },
    [getValueByPosition],
  )
  useAnimatedReaction(
    () => offset.value,
    (value) => runOnJS(handleChange)(value),
    [handleChange],
  )

  const content = useMemo(() => {
    const renderPopoverContent =
      typeof popover === 'function'
        ? popover
        : popover
        ? (val: number) => val.toString()
        : null

    if (renderPopoverContent) {
      return renderPopoverContent(contentValue)
    }
    return undefined
  }, [contentValue, popover])

  if (content) {
    return (
      <Tooltip
        content={content}
        placement="top"
        visible={residentPopover || isSliding}
        mode="dark">
        <View style={{ flex: 1 }}>{children}</View>
      </Tooltip>
    )
  }
  return <>{children}</>
}
