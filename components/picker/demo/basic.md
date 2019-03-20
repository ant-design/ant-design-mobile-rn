---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

[Demo Source Code](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/picker/demo/basic.tsx)

```jsx
import { district } from 'antd-mobile-demo-data';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { List, Picker, Provider } from '@ant-design/react-native';
const data = require('@bang88/china-city-data');
const CustomChildren = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View
      style={{
        height: 36,
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Text style={{ flex: 1 }}>{props.children}</Text>
      <Text style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>
        {props.extra}
      </Text>
    </View>
  </TouchableOpacity>
);
export default class PopupExample extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = () => {
      setTimeout(() => {
        this.setState({
          data: district,
        });
      }, 500);
    };
    this.onChange = value => {
      this.setState({ value });
    };
    this.state = {
      data: [],
      value: [],
      pickerValue: [],
    };
  }
  render() {
    return (
      <Provider>
        <View style={{ marginTop: 30 }}>
          <List>
            <Picker
              data={data}
              cols={3}
              value={this.state.value}
              onChange={this.onChange}
            >
              <List.Item arrow="horizontal" onPress={this.onPress}>
                省市选择
              </List.Item>
            </Picker>
            <Picker
              data={this.state.data}
              cols={2}
              value={this.state.value}
              onChange={this.onChange}
            >
              <List.Item arrow="horizontal" onPress={this.onPress}>
                省市选择(异步加载)
              </List.Item>
            </Picker>
            <Picker
              title="选择地区"
              data={district}
              cols={2}
              value={this.state.pickerValue}
              onChange={v => this.setState({ pickerValue: v })}
              onOk={v => this.setState({ pickerValue: v })}
            >
              <CustomChildren>Customized children</CustomChildren>
            </Picker>
          </List>
        </View>
      </Provider>
    );
  }
}
```
