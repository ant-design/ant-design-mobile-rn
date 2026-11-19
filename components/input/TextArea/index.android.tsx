import React, {
  forwardRef,
  memo,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputContentSizeChangeEventData,
} from 'react-native'
import Input from '../Input'
import { TextAreaProps } from '../PropsType'
import { ThemeContext } from '../../style'
import TextAreaStyle from '../style/textarea'

/**
 * Android / Fabric notes:
 * - Yoga measures TextInput from actual text/placeholder, NOT `numberOfLines`.
 *   So `rows={4}` must set an explicit height (see AndroidTextInputShadowNode).
 * - `numberOfLines` → EditText.setLines() locks min+max lines; never use it for autoSize.
 * - Height must go through `inputStyle` (TextInput). `style` on Input is the container.
 */
const TextArea = forwardRef<TextInput, TextAreaProps>((props, ref) => {
  const {
    autoSize,
    rows,
    numberOfLines,
    onLayout,
    onContentSizeChange,
    onChangeText: onChangeTextProp,
    inputStyle,
    ...restProps
  } = props

  const theme = useContext(ThemeContext)
  // paddingVertical on both sides (see style/textarea.tsx)
  const stylePadding = theme.prefix_padding * 2
  // Fallback before onContentSizeChange (includeFontPadding ≈ 1.3x fontSize)
  const fallbackOneLine = stylePadding + theme.font_size_heading * 1.3

  const [minRows, maxRows] = useMemo(() => {
    if (typeof autoSize === 'object') {
      return [Number(autoSize.minRows || 0), Number(autoSize.maxRows || 0)]
    }
    return [0, 0]
  }, [autoSize])

  const defaultRows = numberOfLines || rows || 2

  const isUncontrolled =
    restProps.value === undefined || restProps.value === null

  const [innerValue, setInnerValue] = useState(
    restProps.defaultValue?.toString?.() || '',
  )

  const handleChangeText = useCallback(
    (text: string) => {
      onChangeTextProp?.(text)
      if (autoSize && isUncontrolled) {
        setInnerValue(text)
      }
    },
    [autoSize, isUncontrolled, onChangeTextProp],
  )

  // Single-line content height (includes vertical padding / font padding)
  const [oneLineHeight, setOneLineHeight] = useState(0)
  // Live content height for autoSize
  const [contentHeight, setContentHeight] = useState(0)

  const rowsHeight = useCallback(
    (lineCount: number, measuredOneLine: number) => {
      // oneLine includes padding; extra rows only add the text-line stride.
      const lineStride = Math.max(measuredOneLine - stylePadding, 1)
      return Math.round(stylePadding + lineStride * lineCount)
    },
    [stylePadding],
  )

  const handleContentSizeChange = useCallback(
    (e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) => {
      onContentSizeChange?.(e)
      const next = Math.round(e.nativeEvent.contentSize.height)
      if (next <= 0) {
        return
      }
      // First positive content height ≈ one line when value is empty / short.
      // Ignore values that already look multi-line (e.g. long defaultValue).
      if (oneLineHeight === 0 && next < fallbackOneLine * 1.75) {
        setOneLineHeight(next)
      }
      if (autoSize) {
        setContentHeight((prev) => (prev === next ? prev : next))
      }
    },
    [autoSize, fallbackOneLine, oneLineHeight, onContentSizeChange],
  )

  const restTextAreaProps: Partial<TextAreaProps> = useMemo(() => {
    const lineMetric = oneLineHeight || fallbackOneLine

    // ---------- Fixed rows ----------
    // Fabric measures from text content only — numberOfLines does not size layout.
    // Always set an explicit height (theme fallback first, then refine).
    if (!autoSize) {
      const height = rowsHeight(defaultRows, lineMetric)
      return {
        onLayout,
        onContentSizeChange: handleContentSizeChange,
        inputStyle: [{ height }, inputStyle],
      }
    }

    // ---------- autoSize ----------
    const minHeight =
      minRows > 0 ? rowsHeight(minRows, lineMetric) : rowsHeight(1, lineMetric)
    const maxHeight =
      maxRows > 0 ? rowsHeight(maxRows, lineMetric) : undefined

    const measured = contentHeight > 0 ? contentHeight : minHeight
    let height = Math.max(measured, minHeight)
    if (maxHeight !== undefined) {
      height = Math.min(height, maxHeight)
    }

    const autoSizeProps: Partial<TextAreaProps> = isUncontrolled
      ? {
          value: innerValue,
          onChangeText: handleChangeText,
        }
      : {}

    return {
      onLayout,
      onContentSizeChange: handleContentSizeChange,
      inputStyle: [
        {
          height,
          minHeight,
          ...(maxHeight !== undefined ? { maxHeight } : null),
        },
        inputStyle,
      ],
      ...autoSizeProps,
    }
  }, [
    autoSize,
    contentHeight,
    defaultRows,
    fallbackOneLine,
    handleChangeText,
    handleContentSizeChange,
    innerValue,
    inputStyle,
    isUncontrolled,
    maxRows,
    minRows,
    onLayout,
    oneLineHeight,
    rowsHeight,
  ])

  return (
    <Input
      themeStyles={TextAreaStyle}
      {...restProps}
      {...restTextAreaProps}
      multiline
      onChangeText={handleChangeText}
      ref={ref}
    />
  )
})

TextArea.displayName = 'Input.TextArea'

export default memo(TextArea)
