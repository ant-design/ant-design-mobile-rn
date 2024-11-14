import React from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { getComponentLocale } from '../_util/getLocale'
import { LocaleContext } from '../locale-provider'
import { WithTheme } from '../style'
import RCModal from './ModalView'
import { ModalPropsType } from './PropsType'
import alert from './alert'
import zh_CN from './locale/zh_CN'
import operation from './operation'
import prompt from './prompt'
import modalStyles from './style/index'
import useModal from './useModal'

export interface ModalProps extends ModalPropsType {}

class AntmModal extends React.Component<ModalProps, any> {
  static defaultProps = {
    visible: false,
    closable: false,
    maskClosable: false,
    style: {},
    bodyStyle: {},
    animationType: 'fade',
    onClose() {},
    footer: [],
    transparent: false,
    popup: false,
    animateAppear: true,
    operation: false,
  }
  static alert: typeof alert
  static operation: typeof operation
  static prompt: typeof prompt
  static useModal: typeof useModal

  static contextType = LocaleContext

  render() {
    const {
      title,
      closable,
      footer,
      children,
      style,
      animateAppear,
      animationDuration,
      maskClosable,
      popup,
      transparent,
      visible,
      onClose,
      bodyStyle,
      onAnimationEnd,
      onRequestClose,
      modalType,
    } = this.props

    // tslint:disable-next-line:variable-name
    const _locale = getComponentLocale(
      this.props,
      (this as any).context,
      'Modal',
      () => zh_CN,
    )

    return (
      <WithTheme styles={this.props.styles} themeStyles={modalStyles}>
        {(styles, theme) => {
          let btnGroupStyle = styles.buttonGroupV
          let horizontalFlex = {}
          if (footer && footer.length === 2 && !this.props.operation) {
            btnGroupStyle = styles.buttonGroupH
            horizontalFlex = { flex: 1 }
          }
          const buttonWrapStyle =
            footer && footer.length === 2
              ? styles.buttonWrapH
              : styles.buttonWrapV
          let footerDom
          if (footer && footer.length) {
            const footerButtons = footer.map((button, i) => {
              let buttonStyle = {}
              if (this.props.operation) {
                buttonStyle = styles.buttonTextOperation
              }
              if (button.style) {
                buttonStyle = button.style
                if (typeof buttonStyle === 'string') {
                  const styleMap: {
                    [key: string]: object
                  } = {
                    cancel: { color: theme.color_text_base },
                    default: {},
                    destructive: { color: theme.brand_error },
                  }
                  buttonStyle = styleMap[buttonStyle] || {}
                }
              }
              const noneBorder =
                footer && footer.length === 2 && i === 1
                  ? { borderRightWidth: 0 }
                  : {}
              const onPressFn = () => {
                if (button.onPress) {
                  button.onPress()
                }
                if (onClose) {
                  onClose()
                }
              }
              return (
                <TouchableHighlight
                  key={i}
                  style={horizontalFlex}
                  underlayColor={theme.fill_tap}
                  onPress={onPressFn}>
                  <View style={[buttonWrapStyle, noneBorder]}>
                    <Text style={[styles.buttonText, buttonStyle]}>
                      {button.text || `${_locale.buttonText}${i}`}
                    </Text>
                  </View>
                </TouchableHighlight>
              )
            })
            footerDom = (
              <View style={[btnGroupStyle, styles.footer]}>
                {footerButtons}
              </View>
            )
          }

          let animType = this.props.animationType
          if (transparent) {
            if (animType === 'slide') {
              animType = 'slide-up'
            }
            const closableDom = closable ? (
              <View style={[styles.closeWrap]}>
                <TouchableWithoutFeedback onPress={onClose}>
                  <View>
                    <Text style={[styles.close]}>×</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            ) : null
            return (
              <RCModal
                modalType={modalType}
                onClose={onClose}
                animationType={animType}
                wrapStyle={transparent ? styles.wrap : undefined}
                style={styles.wrap}
                visible={visible}
                onAnimationEnd={onAnimationEnd}
                onRequestClose={onRequestClose}
                animateAppear={animateAppear}
                animationDuration={animationDuration}
                maskClosable={maskClosable}>
                <KeyboardAvoidingView
                  behavior="padding"
                  enabled={Platform.OS === 'ios'}>
                  <View style={[styles.innerContainer, style]}>
                    {title ? (
                      <Text style={[styles.header]}>{title}</Text>
                    ) : null}
                    <View style={[styles.body, bodyStyle]}>{children}</View>
                    {footerDom}
                    {closableDom}
                  </View>
                </KeyboardAvoidingView>
              </RCModal>
            )
          }
          if (popup) {
            let aType = 'SlideDown'
            if (animType === 'slide-up') {
              animType = 'slide-up'
              aType = 'SlideUp'
            } else {
              animType = 'slide-down'
            }
            return (
              <RCModal
                modalType={modalType}
                onClose={onClose}
                animationType={animType}
                // tslint:disable-next-line:jsx-no-multiline-js
                style={[
                  styles.popupContainer,
                  (styles as any)[`popup${aType}`],
                  style,
                ]}
                visible={visible}
                onAnimationEnd={onAnimationEnd}
                onRequestClose={onRequestClose}
                animateAppear={animateAppear}
                animationDuration={animationDuration}
                maskClosable={maskClosable}>
                <View style={bodyStyle}>{children}</View>
              </RCModal>
            )
          }
          if (animType === 'slide') {
            animType = undefined
          }
          return (
            <RCModal
              modalType={modalType}
              visible={visible}
              animationType={animType}
              animationDuration={animationDuration}
              onRequestClose={onRequestClose}
              onClose={onClose}>
              <View style={style}>{children}</View>
            </RCModal>
          )
        }}
      </WithTheme>
    )
  }
}

export default AntmModal
