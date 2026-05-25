## Popover

### Usage Example

```jsx
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

### styles

```tsx
import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface PopoverStyle {
  content: ViewStyle
  arrow: ViewStyle
  background: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<PopoverStyle>({
    content: {
      backgroundColor: theme.fill_base,
      borderRadius: theme.radius_sm,
      padding: 0,
      elevation: 3,
    },
    arrow: {
      borderTopColor: 'transparent',
    },
    background: {
      backgroundColor: 'transparent',
    },
  })
```

### Abstract DOM Structure

```html
<!-- 触发弹出层的按钮区域，包含触发区域的自定义样式 -->
<TouchableOpacity style={...}>

  <!-- 触发区域内容，由调用者传入，可自定义 -->
  {children}

</TouchableOpacity>

<!-- 弹出层容器，样式可通过 styles.content 控制弹出层内容区域外观 -->
<View styles={{ content }}>

  <!-- 弹出层指示箭头，样式可通过 styles.arrow 控制箭头外观 -->
  <View styles={{ arrow }}/>

  <!-- 弹出层背景遮罩，样式可通过 styles.background 控制遮罩层视觉 -->
  <View styles={{ background }}/>

  <!-- 弹出层内容区域，包含滚动容器，承载所有弹出项 -->
  <ScrollView>

    <!-- 弹出项示例，多个弹出项为列表形式，这里展示一个代表 -->
    <!-- 
      弹出项可选状态 disabled，支持外部传入样式 style 叠加
      弹出项基础样式由主题 spacing 控制内边距
      点击时触发 onSelect 回调
    -->
    <TouchableOpacity styles={{ /* 基础内边距由 theme.v_spacing_md 控制 */ }} style={...}/>

  </ScrollView>
</View>
```
