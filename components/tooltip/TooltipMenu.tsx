import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import List from '../list'
import { ThemeContext, useTheme } from '../style'
import { Action, TooltipMenuProps, TooltipRef } from './PropsType'
import Tooltip from './Tooltip'
import TooltipStyles from './style'

export const TooltipMenu = forwardRef<TooltipRef, TooltipMenuProps>(
  (props, ref) => {
    const { actions, maxCount, mode, onAction, style, styles, ...restProps } =
      props

    const theme = React.useContext(ThemeContext)
    const innerRef = useRef<TooltipRef>(null)

    useImperativeHandle(ref, () => innerRef.current!, [])

    const onPress = useCallback(
      (e: Action) => {
        if (onAction) {
          onAction(e)
        }
        innerRef.current?.hide()
      },
      [onAction],
    )

    const overlay = useMemo(() => {
      const whetherScroll = Boolean(maxCount && actions.length > maxCount)
      const innerHeight = maxCount && maxCount * theme.list_item_height

      return (
        <ScrollView
          scrollEnabled={whetherScroll}
          style={whetherScroll && { height: innerHeight }}>
          {actions.map((action, index) => (
            <TooltipMenuItem
              key={action.key ?? index}
              action={action}
              index={index}
              isLastChild={index + 1 === actions.length}
              mode={mode}
              onPress={onPress}
            />
          ))}
        </ScrollView>
      )
    }, [actions, maxCount, mode, onPress, theme.list_item_height])

    return (
      <Tooltip
        ref={innerRef}
        style={[{ paddingRight: 0 }, style]}
        styles={styles}
        mode={mode}
        {...restProps}
        content={overlay}
      />
    )
  },
)

const TooltipMenuItem = (
  props: {
    action: Action
    index: number
    isLastChild: boolean
    onPress: (e: Action) => void
  } & Pick<TooltipMenuProps, 'styles' | 'mode'>,
) => {
  const { action, isLastChild, mode, onPress, styles } = props
  const theme = React.useContext(ThemeContext)

  const TooltipStylesMemo = useCallback(() => {
    return TooltipStyles(theme, mode)
  }, [mode, theme])

  const ss = useTheme({
    styles,
    themeStyles: TooltipStylesMemo,
  })

  const getListItemStyle = useMemo(() => {
    return {
      ...ss,
      Line: StyleSheet.flatten([
        isLastChild ? { borderBottomWidth: 0 } : {},
        action.icon ? { marginLeft: 8 } : {},
        ss.Line,
      ]),
    }
  }, [action.icon, isLastChild, ss])
  return (
    <List.Item
      styles={getListItemStyle}
      thumb={action.icon}
      onPress={() => onPress(action)}>
      {action.text}
    </List.Item>
  )
}
