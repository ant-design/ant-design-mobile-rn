# Divider

对不同章节的文本段落进行分割。
对行内文字/链接进行分割，例如表格的操作列。

## 代码演示

```tsx
import { Divider, Flex, List, Stepper, WhiteSpace, WingBlank } from '@ant-design/react-native'
import React from 'react'
import { ScrollView, Text } from 'react-native'

const Item = List.Item
export default class BasicDividerExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      thickness: 1,
      patternLen: 4,
      patternGap: 2,
      innerPadding: 0,
      orientationMargin: 0,
    }
  }

  setThickness = (value: number) => {
    this.setState({ thickness: value })
  }
  setPatternLen = (value: number) => {
    this.setState({ patternLen: value })
  }
  setPatternGap = (value: number) => {
    this.setState({ patternGap: value })
  }
  setInnerPadding = (value: number) => {
    this.setState({ innerPadding: value })
  }
  setOrientationMargin = (value: number) => {
    this.setState({ orientationMargin: value })
  }

  render() {
    const {
      thickness,
      patternLen,
      patternGap,
      innerPadding,
      orientationMargin,
    } = this.state
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#f5f5f9' }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <List renderHeader="基础分割线">
          <Item>
            <Divider />
          </Item>
        </List>
        <List renderHeader="带内容的分割线">
          <Item>
            <WhiteSpace />
            <Divider content="默认内容在中间" />
            <WhiteSpace />
            <Divider content="左侧内容" position="left" />
            <WhiteSpace />
            <Divider content="右侧内容" position="right" />
          </Item>
        </List>
        <List renderHeader="竖向分割线">
          <Item>
            <WingBlank style={{ flexDirection: 'row' }}>
              <Flex direction="row">
                <Text style={{ fontSize: 14 }}>Home</Text>
                <Divider
                  orientation="vertical"
                  style={{ marginHorizontal: 10 }}
                />
                <Text style={{ fontSize: 14 }}>Guide</Text>
                <Divider
                  orientation="vertical"
                  style={{ marginHorizontal: 10 }}
                />
                <Text style={{ fontSize: 14 }}>Contact</Text>
              </Flex>
            </WingBlank>
          </Item>
        </List>
        <List renderHeader="自定义颜色">
          <Item>
            <Divider color="#5383ec" />
            <WhiteSpace size="lg" />
            <Divider variant="dashed" color="#d85140" />
          </Item>
        </List>
        <List renderHeader="自定义厚度">
          <Item>
            <Flex>
              <Text>thickness: </Text>
              <Stepper
                min={1}
                max={10}
                step={1}
                value={thickness}
                onChange={this.setThickness}
              />
            </Flex>
            <WhiteSpace size="lg" />
            <Divider thickness={thickness} />
            <WhiteSpace size="lg" />
          </Item>
        </List>
        <List renderHeader="自定义节段">
          <Item>
            <Flex>
              <Text>pattern: </Text>
              <Stepper
                min={4}
                max={30}
                step={1}
                value={patternLen}
                onChange={this.setPatternLen}
                style={{ marginRight: 20 }}
              />
              <Stepper
                min={2}
                max={20}
                step={1}
                value={patternGap}
                onChange={this.setPatternGap}
              />
            </Flex>
            <WhiteSpace size="lg" />
            <Divider
              variant="dashed"
              color="#d85140"
              pattern={[patternLen, patternGap]}
              thickness={1}
            />
            <WhiteSpace size="lg" />
          </Item>
        </List>
        <List renderHeader="innerPadding">
          <Item>
            <WhiteSpace size="lg" />
            <Flex>
              <Text>innerPadding: </Text>
              <Stepper
                min={0}
                max={30}
                step={2}
                value={innerPadding}
                onChange={this.setInnerPadding}
              />
            </Flex>
            <WhiteSpace size="lg" />
            <Divider
              content="中间内容"
              innerPadding={innerPadding}
              thickness={1}
            />
            <WhiteSpace size="lg" />
          </Item>
        </List>
        <List renderHeader="orientationMargin">
          <Item>
            <WhiteSpace size="lg" />
            <Flex>
              <Text>orientationMargin: </Text>
              <Stepper
                min={0}
                max={30}
                step={2}
                value={orientationMargin}
                onChange={this.setOrientationMargin}
              />
            </Flex>
            <WhiteSpace size="lg" />
            <Divider
              content="左侧内容"
              position="left"
              orientationMargin={orientationMargin}
              thickness={1}
            />
            <WhiteSpace size="lg" />
            <Divider
              content="右侧内容"
              position="right"
              variant="dashed"
              orientationMargin={orientationMargin}
              thickness={1}
            />
            <WhiteSpace size="lg" />
          </Item>
        </List>
      </ScrollView>
    )
  }
}
```

### Divider

| 属性              | 说明                                                                                         | 类型                          | 默认值                     | 必选  |
| ----------------- | -------------------------------------------------------------------------------------------- | ----------------------------- | -------------------------- | ----- |
| content           | 嵌套的标题                                                                                   | `React.ReactNode` \| `string` | `false`                    | false |
| orientation       | 水平还是垂直类型                                                                             | `horizontal` \| `vertical`    | `horizontal`               | false |
| variant           | 分割线是实线、还是虚线                                                                       | `solid` \| `dashed`           | `solid`                    | false |
| position          | 标题的位置                                                                                   | `left` \| `center` \|`right`  | `center`                   | false |
| color             | 分割线颜色                                                                                   | `ColorValue`                  | `#c6c6c6`                  | false |
| thickness         | 分割线厚度                                                                                   | `number`                      | `StyleSheet.hairlineWidth` | false |
| pattern           | 虚线节段长度、间距。 仅`variant` 为 `dashed`时生效。                                         | `number[]`                    | `[4,2]`                    | false |
| innerPadding      | 标题的内边距                                                                                 | `number` \| `string` \| `undefined`              | `10`                       | false |
| orientationMargin | 标题和最近 left/right 边框之间的距离，去除了分割线，同时 `position` 必须为 `left` 或 `right` | `number` \| `string` \| `undefined`            |                            | false |
| style             | 分割线样式对象                                                                               | `ViewStyle`                   |                            | false |
