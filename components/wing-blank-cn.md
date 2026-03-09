# WingBlank

布局控件

## 代码演示

```tsx
import { WhiteSpace, WingBlank } from '@ant-design/react-native'
import React from 'react'
import { Text, View } from 'react-native'

const PlaceHolder = (props: any) => (
  <View
    style={{
      backgroundColor: '#fff',
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
    }}
    {...props}>
    <Text style={{ color: '#bbb' }}>Block</Text>
  </View>
)

export default class WingBlankExample extends React.Component<any, any> {
  render() {
    return (
      <View>
        <WhiteSpace />
        <WingBlank>
          <PlaceHolder />
        </WingBlank>

        <WhiteSpace size="lg" />
        <WingBlank size="md">
          <PlaceHolder />
        </WingBlank>

        <WhiteSpace size="lg" />
        <WingBlank size="sm">
          <PlaceHolder />
        </WingBlank>
      </View>
    )
  }
}
```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| size    | 两翼留白的间距，可选`sm`,`md`,`lg`  | string |  `lg`  |
