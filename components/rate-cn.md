# Rate

用图形表示评分等级程度。

### 规则

- 适用于展示事物评级以及快速打分。

## 代码演示

```tsx
import { Flex, List, Rate, Toast, WhiteSpace } from '@ant-design/react-native'
import React from 'react'
import { ScrollView, Text } from 'react-native'
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

## API

| 属性            | 说明                                                      | 类型                                                                                                  | 默认值           |
| --------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ---------------- |
| value           | 当前数，受控值                                            | `number`                                                                                              | -                |
| defaultValue    | 默认值                                                    | `number`                                                                                              | `0`              |
| count           | star 总数                                                 | `number`                                                                                              | `5`              |
| readOnly        | 只读，无法进行交互                                        | `boolean`                                                                                             | `false`          |
| allowClear      | 是否允许再次点击后清除，仅在`allowSwiping`为`false`时生效 | `boolean`                                                                                             | `false`          |
| allowHalf       | 是否允许半选                                              | `boolean`                                                                                             | `false`          |
| allowSwiping    | 是否允许滑动评分                                          | `boolean`                                                                                             | `false`          |
| style           | 样式                                                      | `ViewStyle`                                                                                           | -                |
| color           | 填充 star 的颜色                                          | `string`                                                                                              | `#ff9f18`        |
| emptyColor      | 空 star 的颜色                                            | `string`                                                                                              | `#eeeeee`        |
| iconName        | 图标名称                                                  | `string`                                                                                              | `star`, 默认星星 |
| iconType        | 图标类型                                                  | `fill ｜ outline`                                                                                     | `fill`, 实底风格 |
| iconSize        | 图标大小                                                  | `number`                                                                                              | `32`             |
| iconStyle       | 图标样式                                                  | `ViewStyle`                                                                                           | -                |
| animationConfig | 动画配置                                                  | `boolean ｜ {easing?: (value: number) => number; duration?: number; delay?: number; scale?: number;}` | -                |
| onChange        | 选择时的回调                                              | `(value: number) => void`                                                                             | -                |
| onRatingStart   | 在交互开始时的回调，在`onChange`之前                      | `(value: number) => void`                                                                             | -                |
| onRatingEnd     | 在交互结束时的回调，在`onChange`之后                      | `(value: number) => void`                                                                             | -                |
