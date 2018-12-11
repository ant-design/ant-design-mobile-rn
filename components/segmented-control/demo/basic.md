---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

[Demo Source Code](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/segmented-control/demo/basic.tsx)

```jsx
import React from 'react';
import { Text, View } from 'react-native';
import { SegmentedControl, WhiteSpace } from '@ant-design/react-native';
export default class BasicTagExample extends React.Component {
  constructor() {
    super(...arguments);
    this.onChange = e => {
      console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
    };
    this.onValueChange = value => {
      console.log(value);
    };
  }
  render() {
    return (
      <View style={{ paddingTop: 60, paddingHorizontal: 20 }}>
        <Text>Disabled</Text>
        <SegmentedControl values={['Segment1', 'Segment2']} disabled />
        <WhiteSpace size="lg" />
        <Text>TintColor and Style</Text>
        <SegmentedControl
          values={['Segment1', 'Segment2', 'Segment3']}
          tintColor={'#ff0000'}
          style={{ height: 40, width: 280 }}
        />
        <WhiteSpace size="lg" />
        <Text>SelectedIndex</Text>
        <SegmentedControl
          selectedIndex={1}
          values={['Segment1', 'Segment2', 'Segment3']}
        />
        <WhiteSpace size="lg" />
        <Text>onChange/onValueChange</Text>
        <SegmentedControl
          values={['Segment1', 'Segment2', 'Segment3']}
          onChange={this.onChange}
          onValueChange={this.onValueChange}
        />
      </View>
    );
  }
}
```
