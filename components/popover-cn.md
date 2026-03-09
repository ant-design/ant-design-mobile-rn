# Popover

> `5.2.1`已停止更新，推荐使用 [components/Tooltip](/components/tooltip-cn)

在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。
如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。

## 代码演示

```tsx
import { List, Popover } from '@ant-design/react-native'
import React from 'react'
import { Easing, StyleSheet, Text, View } from 'react-native'

const Item = Popover.Item

export default class PopoverExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      selected: '',
    }
  }

  onSelect = (value: any) => {
    this.setState({
      // visible: false,
      selected: value,
    })
  }
  render() {
    let overlay = [1, 2, 3].map((i, index) => (
      <Item key={index} value={`option ${i}`}>
        <Text>option {i}</Text>
      </Item>
    ))
    overlay = overlay.concat([
      <Item key="4" value="disabled" disabled>
        <Text style={{ color: '#ddd' }}>disabled opt</Text>
      </Item>,
      <Item key="6" value="button ct" style={{ backgroundColor: '#efeff4' }}>
        <Text>关闭</Text>
      </Item>,
    ])
    return (
      <React.Fragment>
        <List>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) =>
            this.renderList(overlay, item),
          )}
        </List>
        <Popover
          overlay={
            <Popover.Item value={'test'}>
              <Text>自定义组件 x</Text>
            </Popover.Item>
          }
          renderOverlayComponent={(nodes) => (
            <View>
              <Text
                style={{
                  paddingHorizontal: 9,
                  paddingTop: 16,
                  color: '#2b2b2b',
                  fontWeight: 'bold',
                }}>
                我是自定义组件title
              </Text>
              {nodes}
            </View>
          )}>
          <Text
            style={{
              margin: 16,
            }}>
            自定义组件
          </Text>
        </Popover>
        <Popover
          overlay={overlay}
          useNativeDriver
          duration={200}
          easing={(show) => (show ? Easing.in(Easing.ease) : Easing.step0)}>
          <Text
            style={{
              margin: 16,
            }}>
            自定义动画
          </Text>
        </Popover>
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              margin: 16,
              color: 'red',
            }}>
            如果你设置了 placement 属性请确保你的内容够位置显示，默认是 auto
            自动计算位置
          </Text>
          {['left', 'right', 'top', 'bottom'].map((p) => (
            <Popover
              key={p}
              overlay={
                <Popover.Item value={p}>
                  <Text>自定义组件 {p}</Text>
                </Popover.Item>
              }
              placement={p as any}>
              <Text
                style={{
                  margin: 16,
                }}>
                {p}
              </Text>
            </Popover>
          ))}
        </View>
      </React.Fragment>
    )
  }

  private renderList(overlay: React.ReactNode[], key: number) {
    return (
      <List.Item
        key={key}
        extra={
          <Popover
            overlay={overlay}
            triggerStyle={styles.triggerStyle}
            onSelect={(v) =>
              this.setState({
                [`selected${key}`]: v,
              })
            }>
            <Text>菜单</Text>
          </Popover>
        }>
        <View>
          <Text>选择了：{this.state[`selected${key}`]}</Text>
        </View>
      </List.Item>
    )
  }
}

const styles = StyleSheet.create({
  triggerStyle: {
    paddingHorizontal: 6,
  },
})

export const title = 'Popover'
export const description = 'Popover example'
```

## API

### Popover

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| overlay   | 弹出层内容    | ReactNode |  -   |
| placement   |   弹出层位置  | 'top | right | bottom | left | auto' |  auto   |
| onSelect   | 选中某选项时的回调函数    | (value: any): void |  -   |
| triggerStyle  | 触发元素外围容器样式    | ViewStyle |  -   |
| renderOverlayComponent  | 自定义弹出层的外围组件，默认是`ScrollView`，示例`(nodes) => <View>{nodes}</View>`  | (node: React.ReactNode) => React.ReactNode |  -   |
| duration | 动画时长 | number | 300 |
| easing | 动画效果 | (show: boolean) => (value: number) => number | show => show ? Easing.out(Easing.back(1.70158)) : Easing.inOut(Easing.quad) |
| useNativeDriver | 动画是否使用 Native Driver | boolean | false |
| onDismiss | Popover 关闭后的回调函数 | function | - |


### Popover.Item

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| disabled   | 是否禁用    | Boolean |  false   |
| style  | item 样式    | ViewStyle |  -   |
| value | 可作为选中的条目ID   | any |  -   |
