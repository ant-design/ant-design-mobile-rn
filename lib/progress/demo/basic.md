---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

[Demo Source Code](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/progress/demo/basic.tsx)

```jsx
import React from 'react';
import { Text, View } from 'react-native';
import { Button, Progress, WhiteSpace } from '@ant-design/react-native';
export default class BasicProgressExample extends React.Component {
  constructor(props) {
    super(props);
    this.onAdd = () => {
      let p = this.state.percent + 10;
      if (this.state.percent >= 100) {
        p = 0;
      }
      this.setState({ percent: p });
    };
    this.state = {
      percent: 40,
    };
  }
  render() {
    const style = {
      marginTop: 80,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    };
    return (
      <View>
        <Progress percent={90} position="fixed" />

        <View style={[style]}>
          <View style={{ marginRight: 10, height: 4, flex: 1 }}>
            <Progress percent={this.state.percent} />
          </View>
          <Text>{this.state.percent}%</Text>
        </View>
        <Button
          style={{ width: 50, marginLeft: 10 }}
          type="ghost"
          size="small"
          onPress={this.onAdd}
        >
          (+-)10
        </Button>

        <WhiteSpace />
        <Progress percent={5} />
      </View>
    );
  }
}
```
