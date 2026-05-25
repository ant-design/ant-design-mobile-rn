# Rate

Graphical representation of the degree of rating scale.

### Rule

- Useful for showing things ratings and quick scoring.

## Examples

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

| Name            | Description                                                                             | Type                                                                                                  | Default   |
| --------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | --------- |
| value           | The value of rate.                                                                      | `number`                                                                                              | -         |
| defaultValue    | The default value of rate.                                                              | `number`                                                                                              | `0`       |
| count           | Total number of stars.                                                                  | `number`                                                                                              | `5`       |
| readOnly        | The component is unable to interact when `true`.                                        | `boolean`                                                                                             | `false`   |
| allowClear      | Whether to allow clearing after another click. Only works when `allowSwiping` is `false` | `boolean`                                                                                             | `false`   |
| allowHalf       | Whether to allow the selection of half.                                                 | `boolean`                                                                                             | `false`   |
| allowSwiping    | Whether to allow swiping to rate.                                                       | `boolean`                                                                                             | `false`   |
| style           | style                                                                                   | `ViewStyle`                                                                                           | -         |
| color           | The color for filled star                                                               | `string`                                                                                              | `#ff9f18` |
| emptyColor      | The color for empty star                                                                | `string`                                                                                              | `#eeeeee` |
| iconName        | The name of icon                                                                        | `string`                                                                                              | `star`    |
| iconType        | The type of icon                                                                        | `fill ｜ outline`                                                                                     | `fill`    |
| iconSize        | The size of icon                                                                        | `number`                                                                                              | `32`      |
| iconStyle       | The style of icon                                                                       | `ViewStyle`                                                                                           | -         |
| animationConfig | The config of animation                                                                 | `boolean ｜ {easing?: (value: number) => number; duration?: number; delay?: number; scale?: number;}` | -         |
| onChange        | Callback when select.                                                                   | `(value: number) => void`                                                                             | -         |
| onRatingStart   | The callback at the beginning of the interaction, before `onChange`                     | `(value: number) => void`                                                                             | -         |
| onRatingEnd     | The callback at the ending of the interaction, after `onChange`                         | `(value: number) => void`                                                                             | -         |
