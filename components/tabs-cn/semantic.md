## Tabs

### Usage Example

```jsx
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Tabs from '..'

const renderContent = (tab: any, index: any) => {
  const style = {
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#ddd',
  } as any
  const content = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
    return (
      <View key={`${index}_${i}`} style={style}>
        <Text>
          {tab.title} - {i}
        </Text>
      </View>
    )
  })
  return (
    <ScrollView key={index} style={{ backgroundColor: '#fff' }}>
      {content}
    </ScrollView>
  )
}

export default class BasicTabsExample extends React.Component<any, any> {
  render() {
    const tabs = [
      { title: 'First Tab' },
      { title: 'Second Tab' },
      { title: 'Third Tab' },
    ]
    const tabs2 = [
      { title: '1st Tab' },
      { title: '2nd Tab' },
      { title: '3rd Tab' },
      { title: '4th Tab' },
      { title: '5th Tab' },
      { title: '6th Tab' },
      { title: '7th Tab' },
      { title: '8th Tab' },
      { title: '9th Tab' },
    ]
    const style = {
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      backgroundColor: '#fff',
    } as any
    return (
      <View style={{ flex: 1 }}>
        <Tabs tabs={tabs}>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
        <Text style={{ margin: 16 }}>Custom RenderTabBar</Text>
        <Tabs
          tabs={tabs}
          renderTabBar={(tabProps) => (
            <View
              style={{
                paddingHorizontal: 16,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              {tabProps.tabs.map((tab, i) => (
                // change the style to fit your needs
                <TouchableOpacity
                  activeOpacity={0.9}
                  key={tab.key || i}
                  style={{
                    // width: '30%',
                    padding: 6,
                  }}
                  onPress={() => {
                    const { goToTab, onTabClick } = tabProps
                    // tslint:disable-next-line:no-unused-expression
                    onTabClick && onTabClick(tabs[i], i)
                    // tslint:disable-next-line:no-unused-expression
                    goToTab && goToTab(i)
                  }}>
                  <Text
                    style={{
                      color: tabProps.activeTab === i ? 'green' : '#333333',
                    }}>
                    {tab.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
        <View style={{ flex: 2 }}>
          <Tabs tabs={tabs2} initialPage={1} tabBarPosition="top">
            {tabs2.map((tab, index) => renderContent(tab, index))}
          </Tabs>
        </View>
      </View>
    )
  }
}

export const title = 'Tabs'
export const description = 'Tabs example'
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'
export interface TabBarStyle {
  container: ViewStyle
  tabs: ViewStyle
  tab: ViewStyle
  underline: ViewStyle
  textStyle: TextStyle
}
export default (theme: Theme) =>
  StyleSheet.create<TabBarStyle>({
    container: {},
    tabs: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: theme.fill_base,
      justifyContent: 'space-around',
      shadowRadius: 0,
      shadowOpacity: 0,
      elevation: 0,
    },
    tab: {
      height: theme.tabs_height,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      flexDirection: 'row',
    },
    underline: {
      height: 2,
      backgroundColor: theme.brand_primary,
    },
    textStyle: {
      fontSize: theme.tabs_font_size_heading,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 整体容器视图，承载整个 Tabs 组件 -->
<View styles={{ container }}>
  <!-- 顶部或底部的分割线容器，会根据 tabBarPosition 渲染，支持 style 透传 -->
  <View styles={{ /* styles.topTabBarSplitLine 或 styles.bottomTabBarSplitLine */ }} style={...}>
    <!-- DefaultTabBar 组件，渲染标签栏 -->
    <View styles={{ container }} style={/* 支持通过 tabBarBackgroundColor 设置背景色 */}>
      <!-- 可横向滚动的标签 ScrollView 容器，scrollEnabled 动态根据 tabs.length 和 page 决定 -->
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        directionalLockEnabled
        bounces={false}
        scrollsToTop={false}
        keyboardShouldPersistTaps={/* 透传 */}
      >
        <!-- 标签集合容器，承载所有的标签项和下划线 -->
        <View styles={{ tabs }} style={/* 支持传入 tabsContainerStyle 和 tabBarBackgroundColor */}>
          <!-- 单个 Tab 标签，TouchableOpacity 用于点击，支持 onPress -->
          <!-- 对应 styles.tab：标签基础布局样式 -->
          <TouchableOpacity>
            <View styles={{ tab }} style={/* 支持传入 tabStyle，设置最小宽度 */}>
              <!-- 标签标题文本，文本颜色动态根据是否激活 -->
              <!-- 对应 styles.textStyle：文字基础样式 -->
              <Text styles={{ textStyle }} style={/* 支持传入 tabBarTextStyle，动态设置文字颜色 */} />
              <!-- 或者自定义 renderTab 渲染的节点 -->
            </View>
          </TouchableOpacity>
          <!-- 说明：上述 Tab 节点为列表项，多个 Tab 依次排列 -->
          <!-- 这里展示一个代表性的 Tab -->
          
          <!-- Tab 下方指示线 -->
          <!-- 对应 styles.underline：下划线基础样式 -->
          <Animated.View styles={{ underline }} style={/* 动态样式 left、width，支持 tabBarUnderlineStyle 覆盖 */} />
          <!-- 或自定义 renderUnderline 渲染 -->
        </View>
      </ScrollView>
    </View>
  </View>

  <!-- 内容区域，Carousel 容器包裹所有 Tab 子页面 -->
  <Carousel
    style={/* 动态宽高，依据容器尺寸变化 */}
    scrollEnabled={/* 动态，依据 swipeable 属性 */}
  >
    <!-- 每个 Tab 页面的容器 View -->
    <!-- 宽度固定为容器宽度，高度根据内容或容器高度 -->
    <View style={{ width: containerWidth, height: containerHeight || flex:1 }}>
      <!-- 对应的 Tab 内容节点，可能是缓存的，自定义内容 -->
    </View>
    <!-- 说明：上述内容项为列表，多个 Tab 页内容依次排列 -->
    <!-- 这里展示一个代表性的内容项 -->
  </Carousel>
</View>
```
