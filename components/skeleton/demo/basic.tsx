import React from 'react'
import { Text, View } from 'react-native'
import { Skeleton, WhiteSpace } from '../..'

class SkeletonExample extends React.Component {
  render() {
    return (
      <View style={{ padding: 16, backgroundColor: '#fff' }}>
        <WhiteSpace />
        <Text>基础用法</Text>
        <WhiteSpace />
        <Skeleton.Title />
        <Skeleton.Paragraph />
        <WhiteSpace />
        <Text>有动画的骨架屏</Text>
        <WhiteSpace />
        <Skeleton.Title animated />
        <Skeleton.Paragraph lineCount={5} animated />
        <WhiteSpace />
        <Text>自定义</Text>
        <WhiteSpace />
        <Skeleton
          animated
          style={{
            width: 200,
            height: 100,
            backgroundColor: '#108ee9',
            borderRadius: 10,
          }}
        />
        <WhiteSpace />
      </View>
    )
  }
}

export default SkeletonExample
