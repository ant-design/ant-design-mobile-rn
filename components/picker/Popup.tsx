import React, { memo, useContext } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import Modal from '../modal/ModalView'
import { ThemeContext } from '../style'
import { PopupPickerProps } from './PopupPickerTypes'

const PopupPicker = memo((props: PopupPickerProps) => {
  const {
    styles,
    title,
    okText = 'Ok',
    dismissText = 'Dismiss',
    visible,
    onDismiss,
    onOk,
    onClose,
    children,
    modalType,
  } = props

  const titleEl =
    typeof title === 'string' ? (
      <Text style={[styles.title]}>{title}</Text>
    ) : (
      title
    )
  const okEl =
    typeof okText === 'string' ? (
      <Text style={[styles.actionText, styles.okText]}>{okText}</Text>
    ) : (
      okText
    )
  const dismissEl =
    typeof dismissText === 'string' ? (
      <Text style={[styles.actionText, styles.dismissText]}>{dismissText}</Text>
    ) : (
      dismissText
    )

  const theme = useContext(ThemeContext)

  return (
    <Modal
      animationType="slide-up"
      modalType={modalType}
      wrapStyle={styles.modal}
      style={styles.container}
      visible={visible}
      onClose={onClose}>
      <View style={[styles.header]}>
        <TouchableHighlight
          onPress={onDismiss}
          style={[styles.headerItem]}
          activeOpacity={1}
          underlayColor={theme.fill_tap}
          {...props.dismissButtonProps}>
          {dismissEl}
        </TouchableHighlight>
        <View style={[styles.headerItem]}>{titleEl}</View>
        <TouchableHighlight
          onPress={onOk}
          style={[styles.headerItem]}
          activeOpacity={1}
          underlayColor={theme.fill_tap}
          {...props.okButtonProps}>
          {okEl}
        </TouchableHighlight>
      </View>
      {children}
    </Modal>
  )
})
export default PopupPicker
