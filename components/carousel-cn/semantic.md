## Carousel

### Usage Example

```jsx
import { Button, Carousel } from '@ant-design/react-native'
import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'

export default class BasicCarouselExample extends React.Component<any, any> {
  carousel: null | Carousel
  constructor(props: any) {
    super(props)
    this.state = {
      selectedIndex: 2,
      autoplay: true,
    }
  }
  onHorizontalSelectedIndexChange = (index: number) => {
    /* tslint:disable: no-console */
    console.log('horizontal change to', index)
    this.setState({ selectedIndex: index })
  }
  onVerticalSelectedIndexChange(index: number) {
    /* tslint:disable: no-console */
    console.log('vertical change to', index)
  }
  render() {
    return (
      <ScrollView style={{ paddingTop: 30 }}>
        <View style={{ paddingHorizontal: 15 }}>
          <Text>horizontal</Text>
          <Carousel
            style={styles.wrapper}
            selectedIndex={this.state.selectedIndex}
            autoplay
            infinite
            afterChange={this.onHorizontalSelectedIndexChange}
            ref={(ref) => (this.carousel = ref)}>
            <View
              style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
              <Text>Carousel 1</Text>
            </View>
            <View
              style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}>
              <Text>Carousel 2</Text>
            </View>
            <View
              style={[
                styles.containerHorizontal,
                { backgroundColor: 'yellow' },
              ]}>
              <Text>Carousel 3</Text>
            </View>
            <View
              style={[styles.containerHorizontal, { backgroundColor: 'aqua' }]}>
              <Text>Carousel 4</Text>
            </View>
            <View
              style={[
                styles.containerHorizontal,
                { backgroundColor: 'fuchsia' },
              ]}>
              <Text>Carousel 5</Text>
            </View>
          </Carousel>
          <Button onPress={() => this.carousel && this.carousel.goTo(0)}>
            Go to 0
          </Button>
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <Text>vertical</Text>
          <Carousel
            style={styles.wrapper}
            selectedIndex={1}
            autoplay={this.state.autoplay}
            infinite
            afterChange={this.onVerticalSelectedIndexChange}
            vertical>
            <View
              style={[styles.containerVertical, { backgroundColor: 'red' }]}>
              <Text>Carousel 1</Text>
            </View>
            <View
              style={[styles.containerVertical, { backgroundColor: 'blue' }]}>
              <Text>Carousel 2</Text>
            </View>
            <View
              style={[styles.containerVertical, { backgroundColor: 'yellow' }]}>
              <Text>Carousel 3</Text>
            </View>
            <View
              style={[styles.containerVertical, { backgroundColor: 'aqua' }]}>
              <Text>Carousel 4</Text>
            </View>
            <View
              style={[
                styles.containerVertical,
                { backgroundColor: 'fuchsia' },
              ]}>
              <Text>Carousel 5</Text>
            </View>
          </Carousel>
          <Button
            onPress={() => this.setState({ autoplay: !this.state.autoplay })}>
            {`Toggle autoplay ${this.state.autoplay ? 'true' : 'false'}`}
          </Button>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create<{
  wrapper: ViewStyle
  containerHorizontal: ViewStyle
  containerVertical: ViewStyle
  text: TextStyle
}>({
  wrapper: {
    backgroundColor: '#fff',
    width: '100%',
    height: 150,
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
})
```

### styles

```tsx
import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface CarouselStyle {
  pagination: ViewStyle
  paginationX: ViewStyle
  paginationY: ViewStyle
  pointStyle: ViewStyle
  pointActiveStyle: ViewStyle
  spaceStyle: ViewStyle
  wrapperStyle: ViewStyle
}
export default (theme: Theme) =>
  StyleSheet.create<CarouselStyle>({
    pagination: {
      position: 'absolute',
      alignItems: 'center',
    },
    paginationX: {
      bottom: 10,
      left: 0,
      right: 0,
    },
    paginationY: {
      right: 10,
      top: 0,
      bottom: 0,
    },
    pointStyle: {
      width: 8,
      height: 8,
      borderRadius: 8,
      backgroundColor: theme.color_icon_base,
    },
    pointActiveStyle: {
      backgroundColor: '#888',
    },
    spaceStyle: {
      marginHorizontal: theme.h_spacing_sm / 2,
      marginVertical: theme.v_spacing_sm / 2,
    },
    wrapperStyle: {
      overflow: 'hidden',
    },
  })
```

### Abstract DOM Structure

```html
<!-- 外层容器，整体包裹 Carousel 组件 -->
<View style={this.props.style}>
  <!-- 滚动容器，承载轮播页，支持横向或纵向滑动，分页滚动 -->
  <ScrollView
    styles={{ wrapperStyle }}
    style={...} <!-- 透传 style 基础属性，来自 this.props -->
  >
    <!-- 轮播页面，一个或多个，宽高与 Carousel 组件一致 -->
    <View 
      key="carousel_0" 
      styles={{ wrapperStyle }} <!-- pageStyle 实际应用外部 style，宽高由 state 控制 -->
      style={...} <!-- 透传 style 基础属性，pageStyle 可传递 -->
    >
      <!-- 轮播内容，可能支持懒加载 -->
      <!-- 内容为具体图片或视图 -->
    </View>
    <!-- 以下为重复页面，通常根据 count 个数渲染多个同级 View 页 -->
  </ScrollView>

  <!-- 分页指示器容器，显示轮播点 -->
  <View styles={[pagination, paginationX | paginationY]}>
    <!-- @dynamic vertical: paginationX (水平) / paginationY (垂直) -->
    <View style={{ flexDirection: 'row' | 'column' }}>
      <!-- 每个圆点，多个，展示一个代表 -->
      <View
        styles={[pointStyle, spaceStyle, dotStyle, /* 当前选中时动态添加 pointActiveStyle, dotActiveStyle */]}
      />
      <!-- 多个轮播点同层级 -->
    </View>
  </View>
</View>
```
