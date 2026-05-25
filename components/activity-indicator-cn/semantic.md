## ActivityIndicator

### Usage Example

```jsx
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

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface ActivityIndicatorStyle {
  container: ViewStyle
  innerContainer: ViewStyle
  wrapper: ViewStyle
  tip: TextStyle
  toast: TextStyle
  spinner: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<ActivityIndicatorStyle>({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'transparent',
      zIndex: theme.toast_zindex,
    },
    innerContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    wrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 89,
      height: 89,
      borderRadius: theme.radius_md,
      backgroundColor: theme.toast_fill,
    },
    tip: {
      color: theme.color_text_base,
      fontSize: theme.font_size_base,
      marginLeft: theme.h_spacing_md,
    },
    toast: {
      color: theme.color_text_base_inverse,
      fontSize: theme.font_size_base,
      marginTop: theme.v_spacing_sm,
    },
    spinner: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
```

### Abstract DOM Structure

```html
<!-- 最外层容器：toast 模式的遮罩容器 -->
<!-- 对应 styles.container：容器布局样式 -->
<View styles={{ container }}>
  <!-- 内部容器，固定高度，居中内容 -->
  <!-- 对应 styles.innerContainer：内层容器样式 -->
  <View styles={{ innerContainer }}>
    <!-- 内容包装容器，水平排列加载指示器和文本 -->
    <!-- 对应 styles.wrapper：包裹加载器和文字区域 -->
    <View styles={{ wrapper }}>
      <!-- RN 内置的加载指示器 -->
      <ActivityIndicator />
      <!-- toast 模式的提示文字 -->
      <!-- 对应 styles.toast：toast 文字样式 -->
      <Text styles={{ toast }} />
    </View>
  </View>
</View>

<!-- 默认 spinner 模式结构，简化示例 -->
<!-- 最外层容器，水平排列加载指示器和文字 -->
<!-- 对应 styles.spinner：普通模式容器样式 -->
<View styles={{ spinner }}>
  <ActivityIndicator />
  <!-- spinner 模式的提示文字 -->
  <!-- 对应 styles.tip：spinner 文字样式 -->
  <Text styles={{ tip }} />
</View>
```
