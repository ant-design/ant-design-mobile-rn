# Divider

Divide sections of an article.
Divide inline text and links such as the operation column of table.

## Examples

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

| Properties        | Description                                                                                                         | Type                          | Default                    | Required |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------- | -------------------------- | -------- |
| content           | The wrapped title                                                                                                   | `React.ReactNode` \| `string` | `false`                    | false    |
| orientation       | The orientation type of divider                                                                                     | `horizontal` \| `vertical`    | `horizontal`               | false    |
| variant           | Whether line is dashed or solid                                                                                     | `solid` \| `dashed`           | `solid`                    | false    |
| position          | The position of title inside divider                                                                                | `left` \| `center` \|`right`  | `center`                   | false    |
| color             | The color of divider                                                                                                | `ColorValue`                  | `#c6c6c6`                  | false    |
| thickness         | The thickness of divider                                                                                            | `number`                      | `StyleSheet.hairlineWidth` | false    |
| pattern           | The length of line sections and the spacing between line sections. Only takes effect when `variant` equals `dashed` | `number[]`                    | `[4,2]`                    | false    |
| innerPadding      | The inner padding of wrapped title                                                                                  | `number` \| `string` \| `undefined`            | `10`                       | false    |
| orientationMargin | The margin-left/right between the title and its closest border, while the `position` must be `left` or `right`      | `number` \| `string` \| `undefined`              |                            | false    |
| style             | The style object of divider                                                                                         | `ViewStyle`                   |                            | false    |
