# Drawer

Drawer is a panel that displays the app's navigation options on the left edge of the screen.

### Rules

- Recommended way to show navigation options on Android, it is a common pattern found in Android APPs.

## Examples

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

Properties | Descrition | Type | Default
-----------|------------|------|--------
| sidebar | The sidebar content. | ReactNode | - |
| onOpenChange | Callback called when open state of `Drawer` changes. | (open: bool): void | - |
| open | If the sidebar should be open. | Boolean | false |
| position | Position of `Drawer`. | String | 'left', enum{'left', 'right'} |
| drawerWidth | Width of `Drawer` | Number | 300 |
| drawerBackgroundColor | Background color of `Drawer` | String | - |
| openDrawer | Opens the `Drawer`.  | (): void | - |
| closeDrawer | Closes the `Drawer`. | (): void | - |
