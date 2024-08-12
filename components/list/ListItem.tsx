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
import Icon from '../icon'
import DisabledContext from '../provider/DisabledContext'
import { useTheme } from '../style'
import AntmView from '../view'
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
    if (typeof children === 'string') {
      return (
        <Text style={itemStyles.Content} {...numberOfLines}>
          {children}
        </Text>
      )
    }
    if (React.isValidElement(children)) {
      if (typeof children.props.children === 'function') {
        return <AntmView style={[itemStyles.Content]}>{children}</AntmView>
      }
      return (
        <AntmView
          children={children}
          {...children.props}
          style={[itemStyles.Content, children.props.style]}
        />
      )
    }
    if (Array.isArray(children)) {
      if (children.some(React.isValidElement)) {
        return (
          <View style={itemStyles.Content}>
            {React.Children.map(children, (child) =>
              typeof child === 'string' ? (
                <Text style={itemStyles.Content} {...numberOfLines}>
                  {child}
                </Text>
              ) : (
                child
              ),
            )}
          </View>
        )
      } else {
        return (
          <Text
            style={itemStyles.Content}
            {...numberOfLines}
            children={children.reduce((a, b) => (a || '') + '' + (b || ''))}
          />
        )
      }
    }

    return <View style={itemStyles.Content} />
  }, [children, itemStyles.Content, numberOfLines])

  // ====================  extra  ========================
  const extraDom = useMemo(() => {
    if (typeof extra === 'string') {
      return (
        <Text style={itemStyles.Extra} {...numberOfLines}>
          {extra}
        </Text>
      )
    }
    if (React.isValidElement(extra)) {
      if (typeof extra.props.children === 'function') {
        return <AntmView style={[itemStyles.Extra]}>{extra}</AntmView>
      }
      return (
        <AntmView
          children={extra}
          {...extra.props}
          style={[itemStyles.Extra, extra.props.style]}
        />
      )
    }
    if (Array.isArray(extra)) {
      return (
        <View style={itemStyles.Extra}>
          {React.Children.map(extra, (child) =>
            typeof child === 'string' ? (
              <Text style={itemStyles.Extra} {...numberOfLines}>
                {child}
              </Text>
            ) : (
              child
            ),
          )}
        </View>
      )
    }
  }, [extra, itemStyles.Extra, numberOfLines])

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
