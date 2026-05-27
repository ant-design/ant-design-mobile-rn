## Rate

### Usage Example

```jsx
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

### styles

```tsx
import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface RateStyle {
  rateContainer: ViewStyle
  icon: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create({
    rateContainer: {
      flexDirection: 'row',
      alignSelf: 'flex-start',
    },
    icon: {
      marginHorizontal: theme.h_spacing_md,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 评分组件外层容器，承载 style 透传属性 -->
<View style={style}>

  <!-- 评分图标交互区域，绑定 PanResponder 手势，响应触摸/滑动评分，对应 styles.rateContainer：横向排列布局 -->
  <View style={styles.rateContainer} onLayout={...}>

    <!-- 单个评分图标容器，支持动画缩放效果（active 时放大至 scale 倍），pointerEvents="none"，对应 styles.icon：图标间距 -->
    <Animated.View style={[styles.icon, iconStyle]} pointerEvents="none">

      <!-- 评分图标本体，根据 starType 渲染 full / half / empty 三种状态 -->
      <!-- full：实心图标，color 着色；half：左右各半，左侧实心右侧空心，支持 RTL 翻转；empty：空心图标，emptyColor 着色 -->
      <!-- 图标来源为 @ant-design/icons-react-native 的 IconFill / IconOutline -->
      <IconFill /> 或 <IconOutline />

    </Animated.View>
    <!-- ... 共 count 个图标 -->

  </View>
</View>
```
