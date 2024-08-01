import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { ScrollView } from 'react-native'
import List from '../list'
import { ListItemStyle } from '../list/style'
import { ThemeContext } from '../style'
import { Action, TooltipMenuProps, TooltipRef } from './PropsType'
import Tooltip from './Tooltip'

export const TooltipMenu = forwardRef<TooltipRef, TooltipMenuProps>(
  (props, ref) => {
    const { actions, maxCount, mode, onAction, styles, ...restProps } = props

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

      const getListItemStyle = (isLastChild: boolean, hasIcon: boolean) => {
        const res: Partial<ListItemStyle> = {
          Line: {
            flex: undefined, // to auto width
            ...(isLastChild ? { borderBottomWidth: 0 } : {}),
            ...(hasIcon ? { marginLeft: 8 } : {}),
          },
          column: {
            flex: undefined, // to auto width
          },
          Item: {
            backgroundColor: 'transparent',
          },
        }
        if (mode === 'dark') {
          res.Content = {
            color: '#ffffff',
          }
          res.underlayColor = {
            backgroundColor: 'transparent',
          }
        }
        return res
      }

      return (
        <ScrollView
          scrollEnabled={whetherScroll}
          style={whetherScroll && { height: innerHeight }}>
          {actions.map((action, index) => (
            <List.Item
              key={action.key ?? index}
              thumb={action.icon}
              disabled={action.disabled}
              onPress={() => {
                if (action.disabled) {
                  return
                }
                onPress(action)
                action.onPress?.()
              }}
              styles={{
                ...getListItemStyle(
                  index + 1 === actions.length,
                  !!action.icon,
                ),
                ...styles,
              }}
              style={action.style}>
              {action.text}
            </List.Item>
          ))}
        </ScrollView>
      )
    }, [actions, maxCount, mode, onPress, styles, theme.list_item_height])

    return (
      <Tooltip
        ref={innerRef}
        styles={{
          content: { padding: 0 },
          ...styles,
        }}
        mode={mode}
        {...restProps}
        content={overlay}
      />
    )
  },
)
