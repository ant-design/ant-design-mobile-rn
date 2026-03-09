# Tabs

A `Tabs` is used to allow users to switch between different views.

### Rule

- Generally a `Tabs` should have 2-4 tab pane, the title of each tab pane should be concise，normally has 2-4 words..
- In the secondary page of iOS, it is not recommended to use left and right swipe to switch tab, which conflicts with back swipe gestrue in iOS. eg:  tabs in details page.

## Examples

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

Properties | Descrition | Type | Default | Required
-----------|------------|------|--------|--------
tabs | tabs data | Models.TabData[] |  | true
tabBarPosition | TabBar's position | 'top' \| 'bottom' |  top | false
renderTabBar | replace the TabBar | ((props: TabBarPropsType) => React.ReactNode) \| false |  | false
initialPage | the tab when inital, index or key | number \| string |  | false
page | current tab, index or key | number \| string |  | false
swipeable | Whether to switch tabs with swipe gestrue in the content | boolean |  true | false
useOnPan | use hand scroll | boolean |  true | false
prerenderingSiblingsNumber  | pre-render nearby # sibling, Infinity: render all the siblings, 0: render current page. | number | 1 | false
animated | Whether to change tabs with animation | boolean |  true | false
onChange | Callback when tab is switched | (tab: Models.TabData, index: number) => void |  | false
onTabClick  | on tab click | (tab: Models.TabData, index: number) => void |  | false
destroyInactiveTab | destroy inactive tab | boolean |  false | false
distanceToChangeTab | distance to change tab, width ratio | number |  0.3 | false
usePaged | use paged | boolean |  true | false
tabBarUnderlineStyle | style of the default tab bar's underline | React.CSSProperties \| any |  | false
tabBarBackgroundColor | color of the default tab bar's background | string |  | false
tabBarActiveTextColor | color of the default tab bar's text when active | string |  | false
tabBarInactiveTextColor | color of the default tab bar's text when inactive | string |  | false
tabBarTextStyle | tional styles to the tab bar's text | React.CSSProperties \| any |  | false
renderTab | render for replace the tab of tabbar | (tab: Models.TabData) => React.ReactNode | | false
renderUnderline | renderUnderline | (style: any) => React.ReactNode | | false

### Tabs.DefaultTabBar

Properties | Descrition | Type | Default | Required
-----------|------------|------|--------|--------
goToTab | call this function to switch Tab | (index: number) => boolean | | true
tabs | tabs data | Models.TabData[] | | true
activeTab | current tab | number | | true
animated | Whether to change tabs with animation | boolean | | true
renderTab | render for replace the tab of tabbar | (tab: Models.TabData) => React.ReactNode | | false
page | the size for the tab of tabbar | number | 5 | false
onTabClick  | on tab click | (tab: Models.TabData, index: number) => void |  | false
