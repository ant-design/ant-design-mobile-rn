import React from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'
import { useTheme } from '../style'
import { ListPropsType } from './PropsType'
import listStyles, { ListStyle } from './style/index'

export interface ListProps extends ListPropsType {
  styles?: Partial<ListStyle>
  style?: StyleProp<ViewStyle>
}

const InternalList: React.ForwardRefRenderFunction<View, ListProps> = (
  props,
  ref,
) => {
  const { children, style, renderHeader, renderFooter, styles, ...restProps } =
    props

  const s = useTheme({
    styles,
    themeStyles: listStyles,
  })

  let headerDom: React.ReactElement<any> | null = null
  let footerDom: React.ReactElement<any> | null = null

  if (renderHeader) {
    let content =
      typeof renderHeader === 'function' ? renderHeader() : renderHeader
    if (typeof content === 'string') {
      content = <Text style={s.Header}>{content}</Text>
    }
    headerDom = <View>{content}</View>
  }
  if (renderFooter) {
    let content =
      typeof renderFooter === 'function' ? renderFooter() : renderFooter
    if (typeof content === 'string') {
      content = <Text style={s.Footer}>{content}</Text>
    }
    footerDom = <View>{content}</View>
  }

  return (
    <View {...restProps} style={style} ref={ref}>
      {headerDom}
      <View style={s.Body}>
        {children ? children : null}
        <View style={s.BodyBottomLine} />
      </View>
      {footerDom}
    </View>
  )
}

const List = React.forwardRef<View, ListProps>(InternalList) as ((
  props: React.PropsWithChildren<ListProps> & React.RefAttributes<View>,
) => React.ReactElement) &
  Pick<React.FC, 'displayName'>

List.displayName = 'List'

export default React.memo(List)
