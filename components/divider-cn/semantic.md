## Divider

### Usage Example

```jsx
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

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface DividerStyles {
  container: ViewStyle
  horizontal: ViewStyle
  horizontal_auto: ViewStyle
  horizontal_short_line: ViewStyle
  vertical: ViewStyle
  vertical_auto: ViewStyle
  vertical_short_line: ViewStyle
  content: TextStyle
  line: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<DividerStyles>({
    container: {
      alignItems: 'center',
    },
    horizontal: {
      flexDirection: 'row',
      width: '100%',
    },
    horizontal_auto: {
      height: 'auto',
    },
    horizontal_short_line: {
      width: '5%',
    },
    vertical: {
      flexDirection: 'column',
      height: '100%',
    },
    vertical_auto: {
      width: 'auto',
    },
    vertical_short_line: {
      height: '5%',
    },
    content: {
      color: theme.color_text_base,
      fontSize: theme.font_size_base,
    },
    line: {
      backgroundColor: theme.fill_divider,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 分割线外层容器，对应 styles.container：居中布局；动态叠加 styles.horizontal（横向）/ styles.vertical（纵向） -->
<View style={[styles.container, orientationStyle, style]}>

  <!-- ══════ 纯分割线模式（无 content）：直接渲染 Line 组件 ══════ -->

  <!-- 实线模式（variant='solid'）：单色填充块，flex: 1 撑满容器 -->
  <View style={{ flex: 1, backgroundColor }} />

  <!-- 原生虚线模式（variant='dashed'，无 pattern）：使用 borderStyle='dashed' 实现，性能最优 -->
  <View style={{ flex: 1, overflow: 'hidden' }}>
    <View style={{ borderStyle: 'dashed', borderWidth }} />
  </View>

  <!-- 自定义虚线模式（variant='dashed'，有 pattern）：JS 循环渲染分段 View，通过 onLayout 测量线长动态计算分段数（上限 500） -->
  <View style={{ flex: 1, flexDirection: 'row' }}>
    <View /> <!-- 单个虚线分段，按 pattern=[len, gap] 控制宽度与间距，...总计 count 个 -->
  </View>

  <!-- ══════ 带内容模式（有 content）：首尾各一段分隔线 + 中间内容区 ══════ -->

  <!-- 首段 Line（position='right' 时可能为 null 由尾段替代） -->
  <View style={lineStyle}>
    <Line />  <!-- 实线/原生虚线/自定义虚线 -->
  </View>

  <!-- 内容区域，动态叠加 padding 和 margin（受 innerPadding、orientationMargin、position 控制） -->
  <View style={contentStyle}>
    <!-- 文字内容：string / number 包裹为 Text；ReactNode 直接渲染 -->
    <!-- 对应 styles.content：文字颜色与字号 -->
    <Text style={styles.content} />
  </View>

  <!-- 尾段 Line（position='left' 时可能为 null 由首段替代） -->
  <View style={lineStyle}>
    <Line />
  </View>
</View>
```
