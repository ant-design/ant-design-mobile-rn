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
    onChange,
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
  const [styleHeight, setStyleHeight] = useState<number>(0)
  const [minHeight, setMinHeight] = useState<number>(0)
  const [maxHeight, setMaxHeight] = useState<number>(0)

  // ============================== rest TextAreaProps ==============================
  const restTextAreaProps: TextAreaProps = useMemo(() => {
    // `rows={{3}}`
    if (!autoSize) {
      return {
        numberOfLines: numberOfLines || rows || 2,
      }
    }
    // `autoSize={{maxRows:5}}` to get maxHeight
    if (maxRows > 0 && maxRows > minRows && maxHeight === 0) {
      return {
        numberOfLines: maxRows,
        onLayout: (e) => {
          onLayout?.(e)
          const h = e.nativeEvent.layout.height
          setMaxHeight(h)
        },
      }
    }

    return {
      numberOfLines: minRows || 1,
      onContentSizeChange: (e) => {
        onContentSizeChange?.(e)
        setStyleHeight(e.nativeEvent.contentSize.height)
      },
      onLayout: (e) => {
        onLayout?.(e)
        const h = e.nativeEvent.layout.height

        // `autoSize={{minRows:2}}`
        if (minHeight === 0 && minRows > 0) {
          setMinHeight(h)
        }
      },
      onChange: (e: any) => {
        onChange?.(e)
        e.target.style.height = 0
        const scrollHeight = e.target.scrollHeight
        e.target.style.height = `${scrollHeight}px`
        setStyleHeight(scrollHeight)
      },
      style: [
        {
          maxHeight: maxHeight || undefined,
          minHeight: minHeight || undefined,
          height:
            //for onLayout truth
            ((maxHeight > 0 ||
              // height by placeholder
              !(props.defaultValue && props.value)) &&
              // minHeight has been valued
              (minRows > 0 ? minHeight > 0 : true) &&
              styleHeight) ||
            undefined,
        },
        props.style,
      ],
    }
  }, [
    autoSize,
    maxHeight,
    maxRows,
    minHeight,
    minRows,
    numberOfLines,
    onChange,
    onContentSizeChange,
    onLayout,
    props.defaultValue,
    props.style,
    props.value,
    rows,
    styleHeight,
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
