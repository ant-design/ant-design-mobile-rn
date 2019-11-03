---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

[Demo Source Code](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/badge/demo/basic.tsx)

```jsx
/* tslint:disable:no-console */
import React from 'react';
import { ScrollView, View } from 'react-native';
import { Badge, WhiteSpace } from '@ant-design/react-native';
export default class BasicTagExample extends React.Component {
  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ padding: 20 }}>
          <Badge text={9}>
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>

          <WhiteSpace size="lg" />

          <Badge text={109} overflowCount={100}>
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>

          <WhiteSpace size="lg" />

          <Badge text={109}>
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>

          <WhiteSpace size="lg" />

          <Badge text="new">
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>

          <WhiteSpace size="lg" />

          <Badge text={109} dot>
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>

          <WhiteSpace size="lg" />

          <Badge text={33} corner>
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>
        </View>
      </ScrollView>
    );
  }
}
```
