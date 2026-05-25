## Progress

### Usage Example

```jsx
import { Button, Progress, WhiteSpace } from '@ant-design/react-native'
import React from 'react'
import { Text, View, ViewStyle } from 'react-native'

export default class BasicProgressExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      percent: 40,
    }
  }

  onAdd = () => {
    let p = this.state.percent + 10
    if (this.state.percent >= 100) {
      p = 0
    }
    this.setState({ percent: p })
  }

  render() {
    const style = {
      marginTop: 80,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }
    return (
      <View>
        <Progress percent={90} position="fixed" />

        <View style={[style as ViewStyle]}>
          <View style={{ marginRight: 10, height: 4, flex: 1 }}>
            <Progress percent={this.state.percent} />
          </View>
          <Text>{this.state.percent}%</Text>
        </View>
        <Button
          style={{ width: 50, marginLeft: 10 }}
          type="ghost"
          size="small"
          onPress={this.onAdd}>
          (+-)10
        </Button>

        <WhiteSpace />
        <Progress percent={5} />
      </View>
    )
  }
}
```

### styles

```tsx
import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'
export interface ProgressStyle {
  progressOuter: ViewStyle
  progressBar: ViewStyle
}
export default (theme: Theme) =>
  StyleSheet.create<ProgressStyle>({
    progressOuter: {
      backgroundColor: theme.border_color_base,
      flex: 1,
    },
    progressBar: {
      borderBottomWidth: 4,
      borderStyle: 'solid',
      borderColor: theme.brand_primary,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 进度条外层容器，负责限制进度条整体宽度和定位 -->
<!-- 对应 styles.progressOuter：外层容器的基础样式，如背景色、尺寸等 -->
<!-- 对应 style 基础属性：支持自定义外层容器样式，如 margin、padding、背景色等 -->
<View style={...}>
  <!-- 进度条填充部分，宽度动态反映进度百分比 -->
  <!-- 对应 styles.progressBar：进度条填充颜色和高度等基础样式 -->
  <!-- 对应 style 基础属性：支持自定义进度条样式，如背景色 -->
  <View style={...} />
  <!-- 当 appearTransition 为 true 时，使用 Animated.View 代替普通 View，实现渐变动画 -->
  <!-- 条件渲染：appearTransition === true 则渲染 Animated.View -->
  <Animated.View style={...} />
</View>
```
