import React, { useCallback, useMemo, useState } from 'react'
import { LayoutChangeEvent, StyleSheet, View, ViewStyle } from 'react-native'
import { LinePropsType } from './PropsType'

const Line: React.FC<LinePropsType> = ({
  orientation = 'horizontal',
  variant = 'dashed',
  thickness = StyleSheet.hairlineWidth,
  pattern,
  color,
  style,
}) => {
  const [lineLength, setLineLength] = useState(1)
  const backgroundColor = color || style?.backgroundColor
  const _thickness = thickness >= 0.1 ? thickness : StyleSheet.hairlineWidth
  const isHorizontal = orientation === 'horizontal'

  // ================== orientationStyle ==================
  const orientationStyle = useMemo<ViewStyle>(() => {
    const flexDirection = isHorizontal ? 'row' : 'column'
    return {
      flex: 1,
      flexDirection,
      alignItems: 'center',
      overflow: 'hidden',
    }
  }, [isHorizontal])

  // ================== solidLineStyle ==================
  const solidLineStyle = useMemo(() => {
    const thicknessStyle = isHorizontal
      ? { height: _thickness }
      : { width: _thickness }
    return { flex: 1, backgroundColor, ...thicknessStyle }
  }, [isHorizontal, _thickness, backgroundColor])

  // ================== solidLineDom ==================
  const solidLineDom = useMemo(() => {
    return <View style={solidLineStyle} />
  }, [solidLineStyle])

  // ================== dashedCssDom ==================
  const dashedCssDom = useMemo(() => {
    const wrapperStyle: ViewStyle = {
      flex: 1,
      overflow: 'hidden',
      ...(isHorizontal ? { height: _thickness } : { width: _thickness }),
    }
    const lineStyle: ViewStyle = {
      ...(isHorizontal ? { height: 0 } : { width: 0 }),
      borderColor: backgroundColor,
      borderWidth: _thickness,
      borderStyle: 'dashed',
    }
    return (
      <View style={wrapperStyle}>
        <View style={lineStyle} />
      </View>
    )
  }, [isHorizontal, _thickness, backgroundColor])

  // ================== dashedPattern ==================
  const dashedPattern = useMemo(() => {
    const [len, gap] =
      Array.isArray(pattern) && pattern.length >= 2
        ? pattern.slice(0, 2)
        : [4, 2]
    const l = len >= 1 ? len : 1
    const g = gap >= 1 ? gap : 1
    return { l, g: g / 2 }
  }, [pattern])

  // ================== getDashedLineStyle ==================
  const getDashedLineStyle = useCallback(
    (index: number) => {
      const { l, g } = dashedPattern
      const dashStyle = isHorizontal
        ? {
            height: _thickness,
            width: l,
            marginLeft: index === 0 ? 0 : g,
            marginRight: g,
          }
        : {
            width: _thickness,
            height: l,
            marginTop: index === 0 ? 0 : g,
            marginBottom: g,
          }
      return { ...dashStyle, backgroundColor }
    },
    [isHorizontal, _thickness, backgroundColor, dashedPattern],
  )

  // ================== dashedJointDom ==================
  const dashedJointDom = useMemo(() => {
    const { l, g } = dashedPattern
    const count = Math.ceil((lineLength + g) / (g * 2 + l))
    return (
      <View
        style={orientationStyle}
        onLayout={(e: LayoutChangeEvent) => {
          const { height, width } = e.nativeEvent.layout
          const curLength = isHorizontal ? width : height
          setLineLength(curLength)
        }}>
        {[...Array(count)].map((_, index) => {
          return <View key={index} style={getDashedLineStyle(index)} />
        })}
      </View>
    )
  }, [
    dashedPattern,
    lineLength,
    isHorizontal,
    orientationStyle,
    getDashedLineStyle,
  ])

  // ================== dashedLineDom ==================
  const dashedLineDom = useMemo(() => {
    if (Array.isArray(pattern)) {
      return dashedJointDom
    } else {
      return dashedCssDom
    }
  }, [pattern, dashedCssDom, dashedJointDom])

  // ================== lineDom ==================
  const lineDom = useMemo(() => {
    if (variant === 'dashed') {
      return dashedLineDom
    } else {
      return solidLineDom
    }
  }, [variant, dashedLineDom, solidLineDom])

  return lineDom
}

Line.displayName = 'Line'
export default Line
