import React, { useMemo } from 'react'
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
  ViewStyle,
} from 'react-native'
import DisabledContext from '../config-provider/DisabledContext'
import Icon from '../icon'
import { useTheme } from '../style'
import { ListItemPropsType } from './PropsType'
import ListStyles, { ListItemStyle } from './style/index'

export interface ListItemProps
  extends ListItemPropsType,
    TouchableHighlightProps {
  /**
   * No need anymore Use `onPress` instead
   * @deprecated
   */
  onClick?: (event: GestureResponderEvent) => void
  styles?: Partial<ListItemStyle>
}

const defaultProps = {
  multipleLine: false,
  wrap: false,
  delayLongPress: 500,
  onLongPress: () => {},
}

const InternalListItem: React.ForwardRefRenderFunction<
  TouchableHighlight,
  ListItemProps
> = (props, ref) => {
  const contextDisabled = React.useContext(DisabledContext)
  const {
    styles,
    children,
    multipleLine,
    thumb,
    extra,
    arrow,
    style,
    onPress = props.onClick,
    wrap,
    disabled = contextDisabled,
    align,
    ...restButtonProps
  } = props

  const itemStyles = useTheme({
    styles,
    themeStyles: ListStyles,
  })
  // ================  Text numberOfLines  ================
  const numberOfLines = useMemo(() => {
    if (wrap === false) {
      return {
        numberOfLines: 1,
      }
    }
    return {}
  }, [wrap])

  // ================  TouchableHighlight underlayColor  ================
  const underlayColor = useMemo(() => {
    if (!disabled && onPress) {
      return {
        underlayColor: StyleSheet.flatten(itemStyles.underlayColor)
          .backgroundColor,
        activeOpacity: 0.5,
      }
    }
    return {
      activeOpacity: 1,
    }
  }, [disabled, itemStyles.underlayColor, onPress])

  const alignStyle = useMemo(() => {
    if (align === 'top') {
      return {
        alignItems: 'flex-start',
      }
    }
    if (align === 'bottom') {
      return {
        alignItems: 'flex-end',
      }
    }
    return {}
  }, [align]) as ViewStyle

  // ================  children  ================
  const contentDom = useMemo(() => {
    if (Array.isArray(children)) {
      const tempContentDom: any[] = []
      children.forEach((el, index) => {
        if (React.isValidElement(el)) {
          tempContentDom.push(el)
        } else {
          tempContentDom.push(
            <Text
              style={[itemStyles.Content]}
              {...numberOfLines}
              key={`${index}-children`}>
              {el}
            </Text>,
          )
        }
      })
      return <View style={itemStyles.column}>{tempContentDom}</View>
    }
    if (React.isValidElement(children)) {
      return <View style={itemStyles.column}>{children}</View>
    }
    if (typeof children === 'string') {
      return (
        <View style={itemStyles.column}>
          <Text style={itemStyles.Content} {...numberOfLines}>
            {children}
          </Text>
        </View>
      )
    }
  }, [children, itemStyles.Content, itemStyles.column, numberOfLines])

  // ====================  extra  ========================
  const extraDom = useMemo(() => {
    if (React.isValidElement(extra)) {
      const extraChildren = extra.props.children
      if (Array.isArray(extraChildren)) {
        return React.cloneElement(extra, {
          // @ts-ignore
          children: extraChildren.map((el, index) => {
            if (typeof el === 'string') {
              return (
                <Text
                  {...numberOfLines}
                  style={[itemStyles.Extra]}
                  key={`${index}-children`}>
                  {el}
                </Text>
              )
            }
            return el
          }),
        })
      }
      return extra
    }
    if (typeof extra === 'string') {
      return (
        <View style={[itemStyles.column]}>
          <Text style={itemStyles.Extra} {...numberOfLines}>
            {extra}
          </Text>
        </View>
      )
    }
  }, [extra, itemStyles.Extra, itemStyles.column, numberOfLines])

  // ====================  arrow  ========================
  const arrowDom = useMemo(() => {
    const arrEnum = {
      horizontal: <Icon name="right" style={itemStyles.Arrow} />,
      down: <Icon name="down" style={itemStyles.ArrowV} />,
      up: <Icon name="up" style={itemStyles.ArrowV} />,
    } as Record<string, React.ReactElement>
    if (arrow) {
      return arrEnum[arrow] || <View style={itemStyles.Arrow} />
    }
  }, [arrow, itemStyles.Arrow, itemStyles.ArrowV])

  const itemView = (
    <View style={[itemStyles.Item, style]}>
      {typeof thumb === 'string' ? (
        <Image
          source={{ uri: thumb }}
          style={[itemStyles.Thumb, multipleLine && itemStyles.multipleThumb]}
        />
      ) : (
        thumb
      )}
      <View
        style={[
          itemStyles.Line,
          multipleLine && itemStyles.multipleLine,
          multipleLine && alignStyle,
        ]}>
        {contentDom}
        {extraDom}
        {arrowDom}
      </View>
    </View>
  )

  return (
    <TouchableHighlight
      accessible={Boolean(onPress)}
      {...underlayColor}
      {...restButtonProps}
      onPress={onPress}
      disabled={Boolean(disabled || !onPress)}
      ref={ref}>
      {itemView}
    </TouchableHighlight>
  )
}

const ListItem = React.forwardRef<TouchableHighlight, ListItemProps>(
  InternalListItem,
) as ((
  props: React.PropsWithChildren<ListItemProps> &
    React.RefAttributes<TouchableHighlight>,
) => React.ReactElement) &
  Pick<React.FC, 'displayName' | 'defaultProps'>

ListItem.defaultProps = defaultProps

ListItem.displayName = 'ListItem'

export default React.memo(ListItem)
