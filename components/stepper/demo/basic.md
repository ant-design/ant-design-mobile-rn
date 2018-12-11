---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

[Demo Source Code](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/stepper/demo/basic.tsx)

```jsx
/* tslint:disable:no-console */
import React from 'react';
import { View } from 'react-native';
import { List, Stepper } from '@ant-design/react-native';
function onChange(value) {
  console.log('changed', value);
}
export default class StepperExample extends React.Component {
  render() {
    const readOnly = (
      <Stepper
        key="1"
        max={10}
        min={1}
        readOnly={false}
        defaultValue={1}
        onChange={onChange}
      />
    );
    return (
      <View style={{ marginTop: 20 }}>
        <List>
          <List.Item
            extra={
              <Stepper
                key="0"
                max={10}
                min={1}
                defaultValue={3}
                onChange={onChange}
              />
            }
          >
            readOnly: true
          </List.Item>
          <List.Item extra={readOnly}>readOnly: false</List.Item>
          <List.Item
            extra={
              <Stepper
                key="2"
                disabled
                max={10}
                min={1}
                defaultValue={3}
                onChange={onChange}
              />
            }
          >
            Disabled
          </List.Item>
        </List>
      </View>
    );
  }
}
```
