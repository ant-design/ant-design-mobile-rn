import React from 'react'
import {
  ActionSheetIOSOptions,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import Modal from '../modal/ModalView'
import { WithTheme, WithThemeStyles } from '../style'
import AntmView from '../view'
import ActionSheetStyles, { ActionSheetStyle } from './style/index'

export interface ActionSheetNativeProps
  extends WithThemeStyles<ActionSheetStyle> {
  onAnimationEnd?: (visible: boolean) => void
  visible?: boolean
  config: ActionSheetIOSOptions
  callback?: (index: number) => void
}

class ActionSheetAndroid extends React.PureComponent<
  ActionSheetNativeProps,
  any
> {
  constructor(props: ActionSheetNativeProps) {
    super(props)
    this.state = {
      visible: this.props.visible || false,
    }
  }

  confirm(index: number) {
    const { callback } = this.props
    if (callback) {
      callback(index)
    }
    this.setState({
      visible: false,
    })
  }
  close = () => {
    this.setState({
      visible: false,
    })
  }
  render() {
    const { config, onAnimationEnd } = this.props
    const {
      title,
      message,
      options,
      destructiveButtonIndex,
      cancelButtonIndex,
    } = config

    return (
      <WithTheme themeStyles={ActionSheetStyles} styles={this.props.styles}>
        {(styles, theme) => {
          const titleMsg = !!title && (
            <View style={styles.title} key="0">
              <Text style={styles.titleText}>{title}</Text>
            </View>
          )
          const content = (options as string[]).map((item, index) => (
            <View
              key={index}
              style={[
                cancelButtonIndex === index ? styles.cancelBtn : undefined,
              ]}>
              <TouchableHighlight
                style={[styles.btn]}
                underlayColor={theme.fill_tap}
                onPress={() => this.confirm(index)}>
                <Text
                  style={[
                    styles.btnText,
                    destructiveButtonIndex === index
                      ? styles.destructiveBtn
                      : undefined,
                  ]}>
                  {item}
                </Text>
              </TouchableHighlight>
              {cancelButtonIndex === index ? (
                <View style={styles.cancelBtnMask} />
              ) : null}
            </View>
          ))
          return (
            <View style={styles.container}>
              <Modal
                animationDuration={200}
                animateAppear
                visible={this.state.visible}
                onAnimationEnd={onAnimationEnd}
                style={styles.content}
                animationType="slide-up"
                maskClosable
                onClose={() => this.confirm(cancelButtonIndex || -1)}>
                <View>
                  {titleMsg}
                  {!!message && (
                    <AntmView style={styles.message} key="1">
                      {message}
                    </AntmView>
                  )}
                  <View>{content}</View>
                </View>
              </Modal>
            </View>
          )
        }}
      </WithTheme>
    )
  }
}

export default ActionSheetAndroid
