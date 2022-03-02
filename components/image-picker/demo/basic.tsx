import React from 'react'
import { PermissionsAndroid, Platform, Text, View } from 'react-native'
import { ImagePicker, WhiteSpace } from '../../'

export default class ImagePickerExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      files: [
        {
          url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
          id: '2121',
        },
        {
          url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
          id: '2122',
        },
        {
          url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
          id: '2123',
        },
        {
          url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
          id: '2124',
        },
        {
          url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
          id: '2125',
        },
        {
          url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
          id: '2126',
        },
      ],
      files2: [],
    }
  }

  handleFileChange = (files: any) => {
    this.setState({
      files,
    })
  }

  handleFile2Change = (files2: any) => {
    this.setState({
      files2,
    })
  }
  async requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: '需要访问相册',
          message: '需要访问相册',
        } as any,
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.setState({
          granted: true,
        })
      } else {
        this.setState({
          granted: false,
        })
      }
    } catch (err) {
      console.warn(err)
    }
  }
  async componentDidMount() {
    if (Platform.OS === 'android') {
      await this.requestCameraPermission()
    }
  }

  render() {
    if (Platform.OS === 'android' && !this.state.granted) {
      return <Text>需要访问相册的权限</Text>
    }
    return (
      <View style={{ marginTop: 20, marginLeft: 20 }}>
        <ImagePicker
          onChange={this.handleFileChange}
          files={this.state.files}
        />
        <WhiteSpace />
        <ImagePicker
          onChange={this.handleFile2Change}
          files={this.state.files2}
        />
      </View>
    )
  }
}
