---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

[Demo Source Code](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/search-bar/demo/basic.tsx)

```jsx
import React from 'react';
import { Alert, View } from 'react-native';
import { SearchBar } from '@ant-design/react-native';
export default class SearchBarDemo extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: '美食',
    };
    this.onChange = value => {
      this.setState({ value });
    };
    this.clear = () => {
      this.setState({ value: '' });
    };
  }
  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <SearchBar defaultValue="初始值" placeholder="搜索" />
        <SearchBar
          value={this.state.value}
          placeholder="搜索"
          onSubmit={value => Alert.alert(value)}
          onCancel={this.clear}
          onChange={this.onChange}
          showCancelButton
        />
      </View>
    );
  }
}
```
