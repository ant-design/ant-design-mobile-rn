---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

[Demo Source Code](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/date-picker-view/demo/basic.tsx)

```jsx
import React from 'react';
import { Text, View } from 'react-native';
import { DatePickerView, Provider } from '@ant-design/react-native';
export default class DatePickerViewExample extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: undefined,
    };
    this.onChange = value => {
      console.log(value);
      this.setState({ value });
    };
    this.onValueChange = (...args) => {
      console.log(args);
    };
  }
  render() {
    return (
      <Provider>
        <View>
          <Text style={{ margin: 16 }}>Start DateTime</Text>
          <DatePickerView
            value={this.state.value}
            onChange={this.onChange}
            onValueChange={this.onValueChange}
          />
          <Text style={{ margin: 16 }}>End DateTime</Text>
          <DatePickerView
            value={this.state.value}
            onChange={this.onChange}
            onValueChange={this.onValueChange}
          />
        </View>
      </Provider>
    );
  }
}
```
