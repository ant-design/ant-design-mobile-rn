import React, {
  forwardRef,
  memo,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { TextInput } from 'react-native'
import { ThemeContext } from '../style'
import Input from './Input'
import { TextAreaProps } from './PropsType'
import TextAreaStyle from './style/textarea'

const TextArea = forwardRef<TextInput, TextAreaProps>((props, ref) => {
  const { autoSize, rows, style, ...restProps } = props

  const theme = useContext(ThemeContext)
  const lineHeight = theme.font_size_heading

  // ============================== AutoSize ==============================
  const [minRows, maxRows] = useMemo(() => {
    if (autoSize) {
      return [
        // @ts-ignore
        +autoSize.minRows > 0 ? +autoSize.minRows : 1,
        // @ts-ignore
        autoSize.maxRows,
      ] as number[]
    }

    return [(rows && +rows) || 2]
  }, [autoSize, rows])

  const needAutoSize = !!autoSize

  const [height, setHeight] = useState<number>(0)
  const onContentSizeChange2 = useCallback(
    (e) => {
      const h = e.nativeEvent.contentSize.height
      if (maxRows > 0) {
        setHeight(Math.min(h, maxRows * lineHeight))
      } else {
        setHeight(h)
      }
      props.onContentSizeChange?.(e)
    },
    [lineHeight, maxRows, props],
  )

  // ============================== rest TextAreaProps ==============================
  const restTextAreaProps = useMemo(() => {
    const rest = {
      numberOfLines: minRows,
      style: [
        {
          height: Math.max(height, minRows * lineHeight),
          overflow: undefined,
        },
        style,
      ],
    } as TextAreaProps

    if (needAutoSize) {
      rest.onContentSizeChange = onContentSizeChange2
    }
    return rest
  }, [height, lineHeight, minRows, needAutoSize, onContentSizeChange2, style])

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
