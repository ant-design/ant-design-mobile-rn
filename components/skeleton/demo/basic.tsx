import { List, Skeleton } from '@ant-design/react-native'
import React from 'react'

class SkeletonExample extends React.Component {
  render() {
    return (
      <Skeleton.Provider>
        <List renderHeader="基础用法" />
        <Skeleton.Title />
        <Skeleton.Paragraph />
        <List renderHeader="有动画的骨架屏" />
        <Skeleton.Title animated />
        <Skeleton.Paragraph lineCount={5} animated />
        <List renderHeader="自定义" />
        <Skeleton
          animated
          style={{
            width: '70%',
            height: 100,
            borderRadius: 8,
            marginTop: 16,
            marginBottom: 8
          }}
        />
      </Skeleton.Provider>
    )
  }
}

export default SkeletonExample
