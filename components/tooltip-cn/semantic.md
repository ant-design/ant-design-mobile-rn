## Tooltip

### Usage Example

```jsx
import {
  Button,
  Icon,
  List,
  Provider,
  Toast,
  Tooltip,
} from '@ant-design/react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Action, TooltipProps } from '../PropsType'

const actions: Action[] = [
  { key: 'scan', icon: <Icon name="scan" />, text: '扫一扫' },
  { key: 'payment', icon: <Icon name="pay-circle" />, text: '付钱/收钱' },
  { key: 'bus', icon: <Icon name="qrcode" />, text: '乘车码' },
  { key: 'assistant', icon: <Icon name="ant-design" />, text: '智能助理' },
]

export default function TooltipExample() {
  const [placement, setPlacement] =
    useState<TooltipProps['placement']>('top-start')

  useEffect(() => {
    let current = 0

    const timer = setInterval(() => {
      if (current >= directionList.length - 1) {
        current = 0
      } else {
        current += 1
      }
      setPlacement(directionList[current])
    }, 2000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Provider>
      <ScrollView {...Tooltip.scrollProps}>
        <List renderHeader="基本用法">
          <Tooltip
            content="Hello World"
            trigger="onPress"
            placement="right"
            defaultVisible>
            <Button style={{ alignSelf: 'flex-start', margin: 10 }}>
              点我
            </Button>
          </Tooltip>
        </List>
        <List renderHeader="深色气泡">
          <Tooltip content="Hello World" placement="bottom" mode="dark" visible>
            <Button
              style={{ alignSelf: 'flex-start', margin: 10, marginBottom: 30 }}>
              点我
            </Button>
          </Tooltip>
        </List>
        <List renderHeader="气泡位置">
          <Tooltip
            visible
            content={
              <View>
                <Text>Popover</Text>
                <Text>Content</Text>
              </View>
            }
            styles={{ arrow: { borderTopColor: 'yellow' } }}
            placement={placement}>
            <Button style={{ alignSelf: 'center', margin: 10 }}>
              {placement}
            </Button>
          </Tooltip>
        </List>
        <List renderHeader="浅色气泡菜单">
          <Tooltip.Menu
            actions={actions}
            placement="bottom-start"
            onAction={(node) => Toast.show(`选择了 ${node.text}`)}
            trigger="onPress">
            <Button style={{ alignSelf: 'flex-start', margin: 10 }}>
              点我
            </Button>
          </Tooltip.Menu>
        </List>
        <List renderHeader="深色气泡菜单">
          <Tooltip.Menu
            mode="dark"
            actions={actions}
            placement="bottom-start"
            onAction={(node) => Toast.show(`选择了 ${node.text}`)}
            trigger="onPress">
            <Button style={{ alignSelf: 'flex-start', margin: 10 }}>
              点我
            </Button>
          </Tooltip.Menu>
        </List>
        <List renderHeader="超过最大数量，隐藏滚动">
          <Tooltip.Menu
            actions={actions}
            maxCount={2}
            onAction={(node) => Toast.show(`选择了 ${node.text}`)}
            placement="bottom-start"
            trigger="onPress">
            <Button style={{ alignSelf: 'flex-start', margin: 10 }}>
              点我
            </Button>
          </Tooltip.Menu>
        </List>
      </ScrollView>
    </Provider>
  )
}

const directionList = [
  'top-start',
  'top',
  'top-end',
  'right-start',
  'right',
  'right-end',
  'bottom-end',
  'bottom',
  'bottom-start',
  'left-end',
  'left',
  'left-start',
] as const
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { ListItemStyle } from '../../list/style'
import { Theme } from '../../style'

export interface TooltipStyle extends ListItemStyle {
  tooltip: ViewStyle
  tooltipText: TextStyle
  arrow: ViewStyle
}

export default (theme: Theme, mode?: 'dark' | 'light') =>
  StyleSheet.create<Partial<TooltipStyle & ListItemStyle>>({
    tooltip: {
      zIndex: theme.tooltip_zindex,
      backgroundColor: mode === 'dark' ? theme.tooltip_dark : theme.fill_base,
      borderRadius: theme.tooltip_border_radius,
      shadowColor: 'rgba(51, 51, 51, 1)',
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 12,
      elevation: 12,
      minWidth: 32,
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
    tooltipText: {
      color: mode === 'dark' ? '#ffffff' : theme.color_text_base,
    },
    arrow: {
      width: 0,
      height: 0,
      // borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',
      borderStyle: 'solid',
      borderWidth: theme.tooltip_arrow_size,
      position: 'absolute',
    },

    // ListItem
    underlayColor: {
      backgroundColor: 'transparent',
    },
    Line: {
      flex: undefined,
    },
    Content: {
      flex: undefined,
      color: mode === 'dark' ? '#ffffff' : theme.color_text_base,
    },
    Item: {
      backgroundColor: 'transparent',
      paddingLeft: 0,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 
  Wrapper 组件，包裹tooltip触发子元素
  视觉用途：触发区域容器，包含 children，响应触发事件（如点击）
  不直接对应样式，触发事件由 trigger 控制
-->
<Wrapper>
  <!-- children 触发元素，透传 -->
</Wrapper>

<!-- 
  条件渲染的 tooltip 容器，visible 为 true 时显示
  视觉用途：tooltip 弹出层 主容器
  对应 styles.tooltip：主容器样式，定义布局、背景等
  支持 style 基础属性透传，用于自定义外部 style
-->
<View style={style} styles={{ tooltip }}>

  <!-- 
    箭头容器，渲染 tooltip 指示箭头
    视觉用途：tooltip 箭头，显示方向指示
    对应 styles.arrow：箭头的样式，包含大小颜色和旋转（动态）
    动态样式 keys: arrow（箭头位置样式动态计算）、tooltip_arrow_size（大小相关）
  -->
  <View styles={{ arrow }} />

  <!-- 
    tooltip 内容区域，显示提示文字或自定义内容
    视觉用途：tooltip 主要文本或内容显示区域
    对应 styles.tooltipText：内容文本样式，控制字体颜色、大小等
  -->
  <AntmView styles={{ tooltipText }} />
</View>
```
