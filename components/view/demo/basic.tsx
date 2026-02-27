import { View } from '@ant-design/react-native'
import React from 'react'

export default class SafeViewExample extends React.Component<any, any> {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,
        }}>
        <View style={{ backgroundColor: 'blue', flex: 0.3 }} />
        <View style={{ backgroundColor: 'red', flex: 0.5 }} />
        <View>Hello World!</View>
      </View>
    )
  }
}
