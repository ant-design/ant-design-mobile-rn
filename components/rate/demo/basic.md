---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

[Demo Source Code](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/rate/demo/basic.tsx)

```jsx
import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Flex, List, Rate, Toast, WhiteSpace } from '@ant-design/react-native'
const Item = List.Item
export default class RateExample extends React.Component<any, any> {
  onChange = (value: number) => {
    Toast.show({ content: `当前评分为：${value}`, position: 'top' })
  }
  render() {
    return (
      <ScrollView>
        <List renderHeader="基础用法">
          <Item>
            <Rate onChange={this.onChange} count={5} />
          </Item>
        </List>
        <WhiteSpace />
        <List renderHeader="滑动">
          <Item>
            <Rate defaultValue={1} allowSwiping />
          </Item>
        </List>
        <List renderHeader="半星">
          <Item>
            <Rate allowHalf={true} defaultValue={2.5} />
          </Item>
        </List>
        <WhiteSpace />
        <List renderHeader="只读">
          <Item>
            <Rate readOnly={true} defaultValue={3} />
          </Item>
        </List>
        <WhiteSpace />
        <List renderHeader="动画">
          <Item>
            <Rate animationConfig={true} defaultValue={3} />
          </Item>
        </List>
        <WhiteSpace />
        <List renderHeader="清除">
          <Item>
            <WhiteSpace />
            <Flex>
              <Rate defaultValue={3} allowClear />
              <Text>可清除</Text>
            </Flex>
            <WhiteSpace />
            <Flex>
              <Rate defaultValue={3} />
              <Text>不可清除</Text>
            </Flex>
            <WhiteSpace />
          </Item>
        </List>
        <WhiteSpace />
        <List renderHeader="自定义">
          <Item>
            <WhiteSpace />
            <Rate
              iconName="home"
              iconType="outline"
              color="green"
              emptyColor="blue"
              allowHalf
              allowSwiping
            />
            <WhiteSpace />
            <Rate iconName="apple" color="red" />
            <WhiteSpace />
          </Item>
        </List>
        <WhiteSpace />
      </ScrollView>
    )
  }
}
```
