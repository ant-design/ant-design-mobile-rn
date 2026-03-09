# WhiteSpace

布局控件

## 代码演示

```tsx
import { WhiteSpace } from '@ant-design/react-native'
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

export default class WhiteSpaceExample extends React.Component<any, any> {
  render() {
    return (
      <View>
        <WhiteSpace size="xs" />
        <PlaceHolder />

        <WhiteSpace size="sm" />
        <PlaceHolder />

        <WhiteSpace />
        <PlaceHolder />

        <WhiteSpace size="lg" />
        <PlaceHolder />

        <WhiteSpace size="xl" />
        <PlaceHolder />
      </View>
    )
  }
}
```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| size       |  上下留白的间距，可选`xs`,`sm`,`md`,`lg`,`xl`  | string | `md`  |
