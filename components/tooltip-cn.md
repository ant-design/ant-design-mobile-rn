# Tooltip

在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。
如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。

## 代码演示

```tsx
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
  { key: 'scan', icon: <Icon name="scan" />, text: '扫一扫', disabled: true },
  {
    key: 'payment',
    icon: <Icon name="pay-circle" />,
    text: '付钱/收钱',
    onPress: () => Toast.success('触发了 onPress'),
  },
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
        <View style={{ height: 300 }} />
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

## API

### Tooltip

| 属性 | 说明               | 类型                                   | 默认值 |
| --- |------------------|--------------------------------------| --- |
| children | 触发 `Tooltip` 的元素 | `React.ReactElement`                 | - |
| content | 弹出内容             | `React.ReactNode`                    | - |
| defaultVisible | 默认是否显隐           | `boolean`                            | `false` |
| mode | 设置亮色模式或者黑色模式     | `'light'                             | 'dark'` | `'light'` |
| crossOffset | 额外偏移（在 Portal 坐标系换算之后叠加）。`top` / `left` 分别为纵、横向偏移。<br/>自 `@floating-ui/react-native@0.10.7` 起 Android 状态栏由库处理，默认 `{ top: 0, left: 0 }`，请勿再手动叠加 `StatusBar.currentHeight`。 | `{ top: number, left: number }` | `{ top: 0, left: 0 }` |
| onVisibleChange | 显示隐藏的回调          | `(visible: boolean) => void`         | - |
| placement | 气泡框位置            | `'top'                               | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'` | `'top'` |
| styles | 语义化结构 style      | [TooltipStyle](/#tooltipstyle-语义化样式) | - |
| trigger | 触发方式             | `'onPress'`                          | - |
| visible | 受控模式下，是否展示弹出内容   | `boolean`                            | - |

### Ref

| 属性    | 说明                       | 类型         |
| ------- | -------------------------- | ------------ |
| hide    | 隐藏气泡弹出框             | `() => void` |
| show    | 展示气泡弹出框             | `() => void` |
| visible | 气泡弹出框当前是否正在展示 | `boolean`    |

## Tooltip.scrollProps

当`Tooltip`元素位于`<ScrollView />`内部时，请赋值 `Tooltip.scrollProps` 属性，
<br/>
否则将不会跟随滚动

```jsx
import { ScrollView } from 'react-native'
import { Tooltip } from '@ant-design/react-native'

<ScrollView {...Tooltip.scrollProps}>
  <Tooltip>...</Tooltip>
<ScrollView>
```

## Tooltip.Menu

### 属性

除 `content` 外，其余全部属性继承自 `Tooltip`，特有属性如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| actions | 菜单列表，当弹出内容为标准菜单时使用 | `Action[]` | - |
| maxCount | 菜单列表最大个数，超出则隐藏进行滚动 | `number` | - |
| onAction | 点击未禁用的菜单项时触发，在单项 `onPress` 之后执行 | `(item: Action) => void` | - |

### Action

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用；为 `true` 时不可点击，不触发 `onPress`、`onAction`，且不关闭气泡 | `boolean` | `false` |
| icon | 菜单项的图标 | `ReactNode` | `null` |
| key | 菜单的唯一标识, 缺省时即为 `index` | `string \| number` | `actions` 数组的 `index` |
| onPress | 点击菜单项时触发，在 `onAction` 之前执行 | `() => void` | - |
| text | 菜单项文案 | `ReactNode` | - |

点击菜单项时，若未设置 `disabled` 或 `disabled` 为 `false`，将依次执行该项的 `onPress`（若配置）、`Tooltip.Menu` 的 `onAction`（若配置），然后关闭气泡。

### TooltipStyle 语义化样式

```typescript
interface TooltipStyle extends ListItemStyle {
  tooltip: ViewStyle
  tooltipText: TextStyle
  arrow: ViewStyle // `borderTopColor` 设置箭头颜色
}
```

### Ref

同 Tooltip

## FAQ

### 为什么有些被Tooltip包裹的组件无法点击打开？

首先，Tooltip的children必须是`React.ReactElement`，即JSX Element而非变量，

```jsx
const element = <Button>press</Button>

<Tooltip
  content="Hello World"
  defaultVisible>
  {element} // ❌ DO NOT USE
  <Button>press</Button> // ✅ YES
</Tooltip>
```
其次，Tooltip的定位是基于`View.onLayout`来计算的，所以children组件必须支持[onLayout](https://reactnative.dev/docs/view#onlayout)事件。

```jsx
const CustomButton = (props: {
    onLayout: (event: LayoutChangeEvent) => void
  }) => (
    <View onLayout={props.onLayout}>
      ...
    </View>
  )

<Tooltip
  content="Hello World"
  defaultVisible>
  <CustomButton>press<CustomButton>
</Tooltip>
```
