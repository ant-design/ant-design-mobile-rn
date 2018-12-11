---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

[Demo Source Code](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/white-space/demo/basic.tsx)

```jsx
import React from 'react';
import { Text, View } from 'react-native';
import { WhiteSpace } from '@ant-design/react-native';
const PlaceHolder = props => (
  <View
    style={{
      backgroundColor: '#eee',
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
    }}
    {...props}
  >
    <Text style={{ color: '#bbb' }}>Block</Text>
  </View>
);
export default class WhiteSpaceExample extends React.Component {
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
    );
  }
}
```
