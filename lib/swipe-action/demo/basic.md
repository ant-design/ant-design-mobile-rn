---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

[Demo Source Code](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/swipe-action/demo/basic.tsx)

```jsx
/* tslint:disable:no-console */
import React from 'react';
import { View } from 'react-native';
import { List, SwipeAction } from '@ant-design/react-native';
export default class BasicSwipeActionExample extends React.Component {
  render() {
    const right = [
      {
        text: 'More',
        onPress: () => console.log('more'),
        style: { backgroundColor: 'orange', color: 'white' },
      },
      {
        text: 'Delete',
        onPress: () => console.log('delete'),
        style: { backgroundColor: 'red', color: 'white' },
      },
    ];
    const left = [
      {
        text: 'Read',
        onPress: () => console.log('read'),
        style: { backgroundColor: 'blue', color: 'white' },
      },
      {
        text: 'Reply',
        onPress: () => console.log('reply'),
        style: { backgroundColor: 'green', color: 'white' },
      },
    ];
    return (
      <View style={{ paddingTop: 30 }}>
        <List>
          <SwipeAction
            autoClose
            style={{ backgroundColor: 'transparent' }}
            right={right}
            left={left}
            onOpen={() => console.log('open')}
            onClose={() => console.log('close')}
          >
            <List.Item extra="extra content">
              Simple example: left and right buttons
            </List.Item>
          </SwipeAction>
        </List>
      </View>
    );
  }
}
```
