---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

[Demo Source Code](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/switch/demo/basic.tsx)

```jsx
import React from 'react';
import { List, Switch } from '@ant-design/react-native';
export default class SwitchExample extends React.Component {
  constructor(props) {
    super(props);
    this.onSwitchChange = value => {
      this.setState({
        checked: value,
      });
    };
    this.state = {
      checked: false,
    };
  }
  render() {
    return (
      <List style={{ marginTop: 20 }}>
        <List.Item extra={<Switch checked />}>On(controlled)</List.Item>
        <List.Item extra={<Switch />}>Off(controlled)</List.Item>
        <List.Item
          extra={
            <Switch
              checked={this.state.checked}
              onChange={this.onSwitchChange}
            />
          }
        >
          onChange event, switch status: {this.state.checked ? 'open' : 'close'}
        </List.Item>
        <List.Item extra={<Switch disabled />}>disabled</List.Item>
        <List.Item extra={<Switch color="red" checked />}>color</List.Item>
      </List>
    );
  }
}
```
