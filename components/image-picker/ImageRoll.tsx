import React from 'react'
import {
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import varibles from '../style/themes/default'
import CameraRollPicker, { CameraRollPickerProps } from './CameraRollPicker'

export interface ImageRollProps extends ImageRollTexts {
  onCancel: () => void
  onSelected: (imgObj: {}) => void
  cameraPickerProps?: CameraRollPickerProps
}

export interface ImageRollTexts {
  title?: React.ReactNode
  cancelText?: React.ReactNode
}

const styles = StyleSheet.create({
  statusBarBg: {
    height: 5 * 4,
  },
  naviBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    height: 11 * 4,
  },
  barTitle: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '500',
    marginLeft: 7 * 4,
    fontSize: 16,
  },
  rightBtn: {
    width: 14 * 4,
    color: varibles.brand_primary,
    fontSize: 16,
  },
})

export default class ImageRoll extends React.Component<ImageRollProps, any> {
  static defaultProps = {
    title: '图片',
    cancelText: '取消',
    cameraPickerProps: {},
  }
  onSelected = (images: any[], _: any) => {
    this.props.onSelected(images[0])
    this.props.onCancel()
  }
  render() {
    const { title, cancelText, cameraPickerProps } = this.props

    return (
      <Modal
        animationType="slide"
        visible
        onRequestClose={() => {}}
        transparent={false}>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" />
          <View style={styles.statusBarBg} />
          <View style={[styles.naviBar]}>
            <Text style={[styles.barTitle]}>{title}</Text>
            <TouchableOpacity onPress={this.props.onCancel}>
              <Text style={styles.rightBtn}>{cancelText}</Text>
            </TouchableOpacity>
          </View>
          <CameraRollPicker
            selected={[]}
            callback={this.onSelected}
            maximum={1}
            {...cameraPickerProps}
          />
        </View>
      </Modal>
    )
  }
}
