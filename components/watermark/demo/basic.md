---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

[Demo Source Code](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/watermark/demo/basic.tsx)

```jsx
import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { Button, Watermark, WhiteSpace } from '@ant-design/react-native'

const { height: windowHeight } = Dimensions.get('window')

export default class WatermarkExample extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {
      props: {},
      foreground: false,
    }
  }
  render() {
    const textProps = {
      content: ['AntD Mobile'],
      width: 100,
      height: 40,
    }

    const rowsTextProps = {
      content: ['AntD Mobile', 'AntD'],
      width: 100,
      height: 40,
      gapY: 10,
    }

    const imageProps = {
      image:
        'https://gw.alipayobjects.com/zos/rmsportal/BGcxWbIWmgBlIChNOpqp.png',
      gapX: 10,
      gapY: 10,
      imageStyle: {
        width: 132,
        height: 40,
      },
    }
    return (
      <Watermark
        foreground={this.state.foreground}
        {...this.state.props}>
        <View style={styles.root}>
          <WhiteSpace />
          <Button
            type="primary"
            onPress={() => {
              this.setState({ props: textProps })
            }}>
            单行
          </Button>
          <WhiteSpace />
          <WhiteSpace />
          <Button
            type="primary"
            onPress={() => {
              this.setState({ props: rowsTextProps })
            }}>
            多行
          </Button>
          <WhiteSpace />
          <WhiteSpace />
          <Button
            type="primary"
            onPress={() => {
              this.setState({ props: imageProps })
            }}>
            图片
          </Button>
          <WhiteSpace />
          <WhiteSpace />
          <Button
            type="primary"
            onPress={() => {
              this.setState({ foreground: !this.state.foreground })
            }}>
            {this.state.foreground ? '前景层' : '背景层'}
          </Button>
          <WhiteSpace />
        </View>
      </Watermark>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    width: 200,
    marginLeft: 60,
    height: windowHeight,
  },
})

```
