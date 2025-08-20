import React, { useMemo } from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import { useTheme, WithTheme, WithThemeStyles } from '../style'
import Line from './Line'
import { DimensionValue, DividerPropsType } from './PropsType'
import dividerStyles, { DividerStyles } from './style/index'

interface DividerProps
  extends DividerPropsType,
    WithThemeStyles<DividerStyles> {}

const Divider = (props: DividerProps) => {
  const {
    orientation = 'horizontal',
    position = 'center',
    variant = 'solid',
    content,
    thickness = StyleSheet.hairlineWidth,
    color,
    pattern = [4, 2],
    innerPadding = 10,
    orientationMargin,
    style,
  } = props

  const memoStyles = useTheme({
    themeStyles: dividerStyles,
  })
  const _thickness = thickness >= 0.1 ? thickness : StyleSheet.hairlineWidth
  const _innerPadding = typeof innerPadding === 'number' ? innerPadding : 10
  const isHorizontal = orientation === 'horizontal'
  const hasCustomMargin = orientationMargin != null

  // ================== orientationStyle ==================
  const orientationStyle = useMemo(() => {
    return isHorizontal ? memoStyles.horizontal : memoStyles.vertical
  }, [isHorizontal, memoStyles])

  // ================== contentStyle ==================
  const contentStyle = useMemo<ViewStyle>(() => {
    let paddingRecord: DimensionValue[] = [0, 0, 0, 0] // [left, top, right, bottom]
    let marginRecord: DimensionValue[] = [0, 0, 0, 0] // [left, top, right, bottom]

    if (hasCustomMargin) {
      if (position === 'left') {
        paddingRecord = isHorizontal
          ? [0, 0, _innerPadding, 0]
          : [0, 0, 0, _innerPadding]
        marginRecord = isHorizontal
          ? [orientationMargin, 0, 0, 0]
          : [0, orientationMargin, 0, 0]
      } else if (position === 'right') {
        paddingRecord = isHorizontal
          ? [_innerPadding, 0, 0, 0]
          : [0, _innerPadding, 0, 0]
        marginRecord = isHorizontal
          ? [0, 0, orientationMargin, 0]
          : [0, 0, 0, orientationMargin]
      } else {
        paddingRecord = isHorizontal
          ? [_innerPadding, 0, _innerPadding, 0]
          : [0, _innerPadding, 0, _innerPadding]
      }
    } else {
      paddingRecord = isHorizontal
        ? [_innerPadding, 0, _innerPadding, 0]
        : [0, _innerPadding, 0, _innerPadding]
    }
    const [paddingLeft, paddingTop, paddingRight, paddingBottom] = paddingRecord
    const [marginLeft, marginTop, marginRight, marginBottom] = marginRecord

    return {
      paddingLeft,
      paddingTop,
      paddingRight,
      paddingBottom,
      marginLeft,
      marginTop,
      marginRight,
      marginBottom,
    }
  }, [
    isHorizontal,
    hasCustomMargin,
    _innerPadding,
    position,
    orientationMargin,
  ])

  // ================== contentDom ==================
  const contentDom = useMemo(() => {
    if (typeof content === 'string') {
      return <Text style={memoStyles.content}>{content}</Text>
    }
    if (React.isValidElement(content)) {
      return content
    }
    return null
  }, [content, memoStyles])

  // ================== lineDom ==================
  const lineDom = useMemo(() => {
    return (
      <Line
        orientation={orientation}
        color={color}
        variant={variant}
        pattern={pattern}
        thickness={_thickness}
        style={memoStyles.line}
      />
    )
  }, [orientation, color, variant, pattern, _thickness, memoStyles])

  // ================== lineStyle ==================
  const lineStyle = useMemo(() => {
    const _orientationStyle = isHorizontal
      ? memoStyles.horizontal
      : memoStyles.vertical
    const shortLineStyle = isHorizontal
      ? memoStyles.horizontal_short_line
      : memoStyles.vertical_short_line
    const autoStyle = isHorizontal
      ? memoStyles.horizontal_auto
      : memoStyles.vertical_auto
    return {
      ..._orientationStyle,
      ...shortLineStyle,
      ...autoStyle,
    }
  }, [isHorizontal, memoStyles])

  // ================== firstLineDom, secondLineDom ==================
  const [firstLineDom, secondLineDom] = useMemo(() => {
    let _firstLineDom: React.ReactNode = null
    let _secondLineDom: React.ReactNode = null
    if (position === 'left') {
      _firstLineDom = hasCustomMargin ? null : (
        <View style={lineStyle}>{lineDom}</View>
      )
      _secondLineDom = lineDom
    } else if (position === 'right') {
      _firstLineDom = lineDom
      _secondLineDom = hasCustomMargin ? null : (
        <View style={lineStyle}>{lineDom}</View>
      )
    } else {
      _firstLineDom = lineDom
      _secondLineDom = lineDom
    }
    return [_firstLineDom, _secondLineDom]
  }, [position, hasCustomMargin, lineStyle, lineDom])

  // ================== dividerDom ==================
  const dividerDom = useMemo(() => {
    if (content == null) {
      return lineDom
    }
    return (
      <>
        {firstLineDom}
        <View style={contentStyle}>{contentDom}</View>
        {secondLineDom}
      </>
    )
  }, [lineDom, firstLineDom, secondLineDom, contentDom, contentStyle, content])

  return (
    <WithTheme themeStyles={dividerStyles}>
      {(_styles) => (
        <View style={[_styles.container, orientationStyle, style]}>
          {dividerDom}
        </View>
      )}
    </WithTheme>
  )
}

Divider.displayName = 'Divider'
export default React.memo(Divider)
