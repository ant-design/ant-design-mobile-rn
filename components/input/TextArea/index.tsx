import React, { forwardRef, memo, useMemo, useState } from 'react'
import { TextInput } from 'react-native'
import Input from '../Input'
import { TextAreaProps } from '../PropsType'
import TextAreaStyle from '../style/textarea'

const TextArea = forwardRef<TextInput, TextAreaProps>((props, ref) => {
  const {
    autoSize,
    rows,
    numberOfLines,
    onLayout,
    onContentSizeChange,
    ...restProps
  } = props

  // ============================== AutoSize ==============================
  const [minRows, maxRows] = useMemo(() => {
    if (typeof autoSize === 'object') {
      return [Number(autoSize.minRows || 0), Number(autoSize.maxRows || 0)]
    }

    return [0, 0]
  }, [autoSize])

  // ============================== onLayout ==============================
  const [lineHeight, setLineHeight] = useState(0)
  const [firstLayoutHeight, setFirstLayoutHeight] = useState(0)

  // ============================== rest TextAreaProps ==============================
  const restTextAreaProps: TextAreaProps = useMemo(() => {
    if (lineHeight === 0 || firstLayoutHeight === 0) {
      return {
        placeholder: ' ', // fix: iOS not show when change placeholder bug
        onLayout: (e) => {
          onLayout?.(e)
          if (firstLayoutHeight === 0) {
            setFirstLayoutHeight(e.nativeEvent.layout.height)
          }
        },
        onContentSizeChange: (e) => {
          onContentSizeChange?.(e)
          if (lineHeight === 0) {
            setLineHeight(e.nativeEvent.contentSize.height)
          }
        },
      }
    }

    const padding = firstLayoutHeight - lineHeight

    // `rows={{3}}`
    if (!autoSize) {
      const defaultRows = numberOfLines || rows || 2
      return {
        maxHeight: lineHeight * defaultRows + padding,
        minHeight: lineHeight * defaultRows + padding,
      }
    }

    // `autoSize={{minRows:2,maxRows:5}}`
    return {
      // `autoSize={{maxRows:5}}`
      maxHeight: maxRows > 0 ? lineHeight * maxRows + padding : undefined,
      // `autoSize={{minRows:2}}`
      minHeight: minRows > 0 ? lineHeight * minRows + padding : undefined,
    }
  }, [
    autoSize,
    firstLayoutHeight,
    lineHeight,
    maxRows,
    minRows,
    numberOfLines,
    onContentSizeChange,
    onLayout,
    rows,
  ])

  return (
    <Input
      themeStyles={TextAreaStyle}
      {...restProps}
      {...restTextAreaProps}
      multiline={true}
      ref={ref}
    />
  )
})

TextArea.displayName = 'Input.TextArea'

export default memo(TextArea)
