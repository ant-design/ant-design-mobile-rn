import React from 'react'
import {
  StyleProp,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native'
import Icon from '../icon'
import { WithTheme, WithThemeStyles } from '../style'
import Marquee, { MarqueeProps } from './Marquee'
import { NoticeBarPropsType } from './PropsType'
import NoticeStyles, { NoticeBarStyle } from './style/index'

export interface NoticeNativeProps
  extends NoticeBarPropsType,
    WithThemeStyles<NoticeBarStyle> {
  marqueeProps?: MarqueeProps
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}

export default class NoticeBar extends React.Component<NoticeNativeProps, any> {
  static defaultProps = {
    mode: '',
    onPress() {},
  }

  constructor(props: NoticeNativeProps) {
    super(props)
    this.state = {
      show: true,
    }
  }

  onPress = () => {
    const { mode, onPress } = this.props
    if (onPress) {
      onPress()
    }
    if (mode === 'closable') {
      this.setState({
        show: false,
      })
    }
  }

  render() {
    let { children, mode, icon, style, action, marqueeProps } = this.props

    return (
      <WithTheme styles={this.props.styles} themeStyles={NoticeStyles}>
        {(styles, theme) => {
          let operationDom: any = null
          icon =
            typeof icon === 'undefined' ? (
              <Icon name="sound" color={theme.brand_warning} />
            ) : (
              icon
            )
          if (mode === 'closable') {
            operationDom = (
              <TouchableWithoutFeedback onPress={this.onPress}>
                <View style={styles.actionWrap}>
                  {action ? action : <Text style={[styles.close]}>×</Text>}
                </View>
              </TouchableWithoutFeedback>
            )
          } else if (mode === 'link') {
            operationDom = (
              <View style={styles.actionWrap}>
                {action ? action : <Text style={[styles.link]}>∟</Text>}
              </View>
            )
          }

          const main = (
            <View style={[styles.notice, style]}>
              {icon && <View style={styles.left15}>{icon}</View>}
              <View
                style={[styles.container, icon ? styles.left6 : styles.left15]}>
                <Marquee
                  style={styles.content}
                  text={children}
                  {...marqueeProps}
                />
              </View>
              {operationDom}
            </View>
          )
          return this.state.show ? (
            mode === 'closable' ? (
              main
            ) : (
              <TouchableWithoutFeedback onPress={this.onPress}>
                {main}
              </TouchableWithoutFeedback>
            )
          ) : null
        }}
      </WithTheme>
    )
  }
}
