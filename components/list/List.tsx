import React, { useMemo } from 'react'
import { StyleProp, Text, View, ViewProps, ViewStyle } from 'react-native'
import { useTheme } from '../style'
import { ListPropsType } from './PropsType'
import listStyles, { ListStyle } from './style/index'

export interface ListProps extends ListPropsType {
  styles?: Partial<ListStyle>
  style?: StyleProp<ViewStyle>
}

const InternalList: React.ForwardRefRenderFunction<
  View,
  ListProps & ViewProps
> = (props, ref) => {
  const { children, style, renderHeader, renderFooter, styles, ...restProps } =
    props

  const s = useTheme({
    styles,
    themeStyles: listStyles,
  })

  const headerDom = useMemo(() => {
    if (renderHeader) {
      let content =
        typeof renderHeader === 'function' ? renderHeader() : renderHeader
      if (typeof content === 'string') {
        content = <Text style={s.Header}>{content}</Text>
      }
      return content
    }
  }, [renderHeader, s.Header])

  const footerDom = useMemo(() => {
    if (renderFooter) {
      let content =
        typeof renderFooter === 'function' ? renderFooter() : renderFooter
      if (typeof content === 'string') {
        content = <Text style={s.Footer}>{content}</Text>
      }
      return content
    }
  }, [renderFooter, s.Footer])

  return (
    <View {...restProps} style={[s.List, style]} ref={ref}>
      {headerDom}
      <View style={s.Body}>
        {children}
        <View style={s.BodyBottomLine} />
      </View>
      {footerDom}
    </View>
  )
}

const List = React.forwardRef<View, ListProps & ViewProps>(InternalList) as ((
  props: React.PropsWithChildren<ListProps & ViewProps> &
    React.RefAttributes<View>,
) => React.ReactElement) &
  Pick<React.FC, 'displayName'>

List.displayName = 'List'

export default React.memo(List)
