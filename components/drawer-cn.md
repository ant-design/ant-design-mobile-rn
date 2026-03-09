# Drawer

用于在屏幕边缘显示应用导航等内容的面板。

### 规则

- 是 Android 推荐的导航方式，常见于该平台应用。

## 代码演示

```tsx
import { Button, Drawer, List, WhiteSpace } from '@ant-design/react-native'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default class DrawerExample extends React.Component<any, any> {
  drawer: any

  onOpenChange = (isOpen: any) => {
    /* tslint:disable: no-console */
    console.log('是否打开了 Drawer', isOpen.toString())
  }

  render() {
    const itemArr = Array.apply(null, Array(20))
      .map(function (_: any, i: any) {
        return i
      })
      .map((_i: any, index: any) => {
        if (index === 0) {
          return (
            <List.Item
              key={index}
              thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
              multipleLine>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text>Categories - {index}</Text>
                <Button
                  type="primary"
                  size="small"
                  onPress={() => this.drawer.closeDrawer()}>
                  close drawer
                </Button>
              </View>
            </List.Item>
          )
        }
        return (
          <List.Item
            key={index}
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png">
            <Text>Categories - {index}</Text>
          </List.Item>
        )
      })

    // Todo: https://github.com/DefinitelyTyped/DefinitelyTyped
    const sidebar = (
      <ScrollView style={[styles.container as any]}>
        <List>{itemArr}</List>
      </ScrollView>
    )

    return (
      <Drawer
        sidebar={sidebar}
        position="left"
        open={false}
        drawerRef={(el: any) => (this.drawer = el)}
        onOpenChange={this.onOpenChange}
        drawerBackgroundColor="#ccc">
        <View style={{ flex: 1, marginTop: 114, padding: 8 }}>
          <Button onPress={() => this.drawer && this.drawer.openDrawer()}>
            Open drawer
          </Button>
          <WhiteSpace />
        </View>
      </Drawer>
    )
  }
}
```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| sidebar | 抽屉里的内容 | ReactNode | - |
| onOpenChange | open 状态切换时调用 | (open: bool): void | - |
| open | 开关状态 | Boolean | false |
| position | 抽屉所在位置 | String | 'left', enum{'left', 'right'} |
| drawerWidth | 抽屉宽度 | Number | 300 |
| drawerBackgroundColor | 指定抽屉背景色 | String | - |
| openDrawer | 打开函数 | (): void | - |
| closeDrawer | 关闭函数 | (): void | - |
