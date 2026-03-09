# Progress

表明某个任务的当前进度。

### 规则

- 需要准确告知当前进度，否则应该使用组件 ActivityIndicator。
- 和 NavBar 一起搭配使用时，可以隐藏 Progress 未填充部分的轨道，提升整体感。

## 代码演示

```tsx
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

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
percent | 进度百分比 | number | 0
position | 进度条的位置，fixed 将浮出固定在最顶层，可选: `fixed` `normal` | string | `fixed`
unfilled | 是否显示未填充的轨道 | boolean | true
style | 进度条样式 | object | {}
barStyle | 进度样式 | object | {}
