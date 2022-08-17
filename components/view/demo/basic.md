---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

[Demo Source Code](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/view/demo/basic.tsx)

```jsx
import React from 'react';
import { View } from '@ant-design/react-native';

export default class SafeViewExample extends React.Component {
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
```
