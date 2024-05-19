import React, { forwardRef, memo, useMemo, useState } from 'react'
import { TextInput } from 'react-native'
import Input from '../Input'
import { TextAreaProps } from '../PropsType'
import TextAreaStyle from '../style/textarea'

const TextArea = forwardRef<TextInput, TextAreaProps>((props, ref) => {
  const { autoSize, rows, numberOfLines, onLayout, ...restProps } = props

  // ============================== AutoSize ==============================
  const [minRows, maxRows] = useMemo(() => {
    if (typeof autoSize === 'object') {
      return [Number(autoSize.minRows || 0), Number(autoSize.maxRows || 0)]
    }

    return [0, 0]
  }, [autoSize])

  // ============================== onLayout ==============================
  const [firstLayoutHeight, setFirstLayoutHeight] = useState(0)
  const [showPlaceholder, setShowPlaceholder] = useState(true)

  // ============================== rest TextAreaProps ==============================
  const restTextAreaProps: TextAreaProps = useMemo(() => {
    // `maxRows` here for get maxHeight
    const defaultRows = maxRows || numberOfLines || rows || 2

    if (firstLayoutHeight === 0) {
      return {
        numberOfLines: defaultRows, // only android
        multiline: false,
        placeholder: ' ',
        onLayout: (e) => {
          onLayout?.(e)
          if (firstLayoutHeight === 0) {
            setFirstLayoutHeight(e.nativeEvent.layout.height)
          }
        },
      }
    }

    // `rows={{3}}`
    if (!autoSize) {
      return {
        numberOfLines: defaultRows,
        style: [
          {
            height: firstLayoutHeight,
          },
          props.style,
        ],
      }
    }

    // `autoSize={{ minRows: 2, maxRows: 5 }}`
    return {
      numberOfLines: minRows || 1,
      placeholder: showPlaceholder ? props.placeholder : undefined,
      onChangeText: (text) => {
        props.onChangeText?.(text)
        // for resize textarea
        setShowPlaceholder(!text)
      },
      style: [
        {
          // `autoSize={{  maxRows: 5 }}`
          maxHeight:
            maxRows > 0 && maxRows > minRows ? firstLayoutHeight : undefined,
        },
        props.style,
      ],
    }
  }, [
    autoSize,
    firstLayoutHeight,
    maxRows,
    minRows,
    numberOfLines,
    onLayout,
    props,
    rows,
    showPlaceholder,
  ])

  return (
    <Input
      themeStyles={TextAreaStyle}
      {...restProps}
      multiline={true}
      {...restTextAreaProps}
      ref={ref}
    />
  )
})

TextArea.displayName = 'Input.TextArea'

export default memo(TextArea)
