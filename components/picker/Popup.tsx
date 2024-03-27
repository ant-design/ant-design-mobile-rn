import React, { memo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Modal from '../modal/ModalView'
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

  return (
    <Modal
      animationType="slide-up"
      wrapStyle={styles.modal}
      style={styles.container}
      visible={visible}
      onClose={onClose}>
      <View style={[styles.header]}>
        <TouchableOpacity onPress={onDismiss} style={[styles.headerItem]}>
          {dismissEl}
        </TouchableOpacity>
        <View style={[styles.headerItem]}>{titleEl}</View>
        <TouchableOpacity onPress={onOk} style={[styles.headerItem]}>
          {okEl}
        </TouchableOpacity>
      </View>
      {children}
    </Modal>
  )
})
export default PopupPicker
