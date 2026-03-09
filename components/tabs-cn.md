# Tabs

用于让用户在不同的视图中进行切换。

### 规则
- 标签数量，一般 2-4 个；其中，标签中的文案需要精简，一般 2-4 个字。
- 在 iOS 端的次级页面中，不建议使用左右滑动来切换 Tab，这个和 iOS 的左滑返回存在冲突，eg：详情页中 Tabs。

## 代码演示

```tsx
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

## API

### Tabs

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
tabs | tab数据 | Models.TabData[] |  | true
tabBarPosition  | TabBar位置 | 'top' \| 'bottom' |  top | false
renderTabBar  | 替换TabBar | ((props: TabBarPropsType) => React.ReactNode) \| false |  | false
initialPage  | 初始化Tab, index or key | number \| string |  | false
page  | 当前Tab, index or key | number \| string |  | false
swipeable  | 是否可以滑动内容切换 | boolean |  true | false
useOnPan  | 使用跟手滚动 | boolean |  true | false
prerenderingSiblingsNumber  | 预加载两侧Tab数量 | number |  1 | false
animated  | 是否开启切换动画 | boolean |  true | false
onChange  | tab变化时触发 | (tab: Models.TabData, index: number) => void |  | false
onTabClick  | tab 被点击的回调 | (tab: Models.TabData, index: number) => void |  | false
destroyInactiveTab | 销毁超出范围Tab | boolean |  false | false
distanceToChangeTab | 滑动切换阈值(宽度比例) | number |  0.3 | false
usePaged | 是否启用分页模式 | boolean |  true | false
tabBarUnderlineStyle  | tabBar下划线样式 | React.CSSProperties \| any |  | false
tabBarBackgroundColor  | tabBar背景色 | string |  | false
tabBarActiveTextColor  | tabBar激活Tab文字颜色 | string |  | false
tabBarInactiveTextColor  | tabBar非激活Tab文字颜色 | string |  | false
tabBarTextStyle  | tabBar文字样式 | React.CSSProperties \| any |  | false
renderTab | 替换TabBar的Tab | (tab: Models.TabData) => React.ReactNode | | false
renderUnderline | renderUnderline | (style: any) => React.ReactNode | | false

### Tabs.DefaultTabBar

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
goToTab | 跳转Tab | (index: number) => boolean | | true
tabs|tab数据 | Models.TabData[] | | true
activeTab | 当前激活Tab索引 | number | | true
animated | 是否使用动画 | boolean | | true
renderTab | 替换TabBar的Tab | (tab: Models.TabData) => React.ReactNode | | false
page | Tab分页尺寸 | number | 5 | false
onTabClick  | tab 被点击的回调 | (tab: Models.TabData, index: number) => void |  | false
