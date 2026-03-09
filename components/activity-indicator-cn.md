# ActivityIndicator

活动指示器。
表明某个任务正在进行中。

### 规则
- 不要让活动指示器静止，用户会以为该任务停滞了。
- 在某些特定场景下，提供有意义的文案，帮助用户明白哪个任务正在进行中，eg：正在上传照片。
- 如果能知道用户的等待时间，可以使用组件 Progress 来替代。

## 代码演示

```tsx
import { ActivityIndicator, Button, Flex, WhiteSpace, WingBlank } from '@ant-design/react-native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class ActivityIndicatorExample extends React.Component<
  any,
  any
> {
  closeTimer: any
  constructor(props: any) {
    super(props)
    this.state = {
      animating: false,
    }
    this.loadingToast = this.loadingToast.bind(this)
  }

  componentWillUnmount() {
    clearTimeout(this.closeTimer)
  }

  loadingToast() {
    this.setState({ animating: !this.state.animating })
    this.closeTimer = setTimeout(() => {
      this.setState({ animating: !this.state.animating })
    }, 2000)
  }

  render() {
    return (
      <View style={[styles.demo]}>
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>Icon without text</Text>
            </Flex.Item>
            <Flex.Item>
              <ActivityIndicator />
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>Icon with text</Text>
            </Flex.Item>
            <Flex.Item>
              <ActivityIndicator text="Loading..." />
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>Dark Background</Text>
            </Flex.Item>
            <Flex.Item>
              <View style={[styles.darkBg]}>
                <ActivityIndicator color="#fff" />
              </View>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>Large Size</Text>
            </Flex.Item>
            <Flex.Item>
              <ActivityIndicator size="large" />
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
        <WingBlank>
          <Button onPress={this.loadingToast}>Click to show Toast</Button>
        </WingBlank>
        <ActivityIndicator
          animating={this.state.animating}
          toast
          size="large"
          text="Loading..."
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  demo: {
    marginTop: 20,
  },
  darkBg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 89,
    height: 89,
    backgroundColor: '#2B2F42',
  },
  gray: {
    backgroundColor: '#CCC',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
})
```

## API

```jsx
<ActivityIndicator />
<ActivityIndicator color="white" />
<ActivityIndicator size="large" />
<ActivityIndicator text="正在加载" />
<ActivityIndicator toast />
<ActivityIndicator toast text="正在加载" />
```

### ActivityIndicator

属性 | 说明 | 类型 | 默认值
----|-----|------|------
|  animating  | 显隐状态 | boolean  | true  |
|  size  | spinner大小，可选`small`/`large` 或者数字（仅android） | string\|number  | small  |
|  toast  | loading样式类型 | boolean  | false  |
|  text  | loading文本 | string |  -   |
|  color | spinner颜色 | string  | gray  |
