import React, { forwardRef, useMemo, useState } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import Icon from '../icon'
import { useTheme } from '../style'
import { Marquee } from './Marquee'
import { NoticeBarProps } from './PropsType'
import NoticeBarStyle from './style'

export function InnerNoticeBar(props: NoticeBarProps) {
  const ss = useTheme({
    styles: props.styles,
    themeStyles: NoticeBarStyle,
  })

  const {
    children,
    mode,
    onClose,
    onPress,
    icon = <Icon name="sound" style={ss.font} />,
    style,
    action,
    marqueeProps,
  } = props

  const [show, setShow] = useState(true)

  const operationDom = useMemo(() => {
    if (mode === 'closable') {
      return (
        <TouchableWithoutFeedback
          onPress={() => {
            setShow(false)
            onClose?.()
          }}>
          <View style={ss.actionWrap}>
            {action ? action : <Text style={[ss.font, ss.close]}>×</Text>}
          </View>
        </TouchableWithoutFeedback>
      )
    } else if (action || mode === 'link') {
      return (
        <View style={ss.actionWrap}>
          {action ? action : <Text style={[ss.font, ss.link]}>∟</Text>}
        </View>
      )
    }

    return null
  }, [action, mode, onClose, ss])

  if (!show) {
    return null
  }

  let childNode = (
    <View style={[ss.background, ss.container, style]}>
      {Boolean(icon) && <View style={ss.iconWrap}>{icon}</View>}
      <Marquee
        {...marqueeProps}
        style={[ss.font, ss.marquee, marqueeProps?.style]}>
        {children}
      </Marquee>
      {operationDom}
    </View>
  )

  if (mode === 'closable') {
    return childNode
  }
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      {childNode}
    </TouchableWithoutFeedback>
  )
}

export const NoticeBar = forwardRef(InnerNoticeBar)
