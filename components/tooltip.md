# Tooltip

After clicking on a control or an area, a Tooltip menu appears for doing more.
If set mask prop, it is recommended to exit by clicking on any of the mask layers.

## Examples

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

## API

### Tooltip

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| children | The element that triggered the Tooltip | `React.ReactElement` | - |
| content | The content of the Tooltip | `React.ReactNode` | - |
| defaultVisible | Whether to show or hide by default | `boolean` | `false` |
| mode | Set bright color mode or black mode | `'light' | 'dark'` | `'light'` |
| crossOffset | Set the offset of the pop-up window position; Top: Additional offset applied along the main axis between the element and its triggering element. Left: Additional offset applied along the horizontal axis between the element and its triggering element.     | `{ top: number, left: number }`      | `'{ top: StatusBar.currentHeight, left: 0 } '` |
| onVisibleChange | Callback when the visible prop is changed | `(visible: boolean) => void` | - |
| placement | The position of the Tooltip | `'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'` | `'top'` |
| styles | Semantic DOM style | [TooltipStyle](#tooltipstyle-interface) | - |
| trigger | Event to trigger | `'onPress'` | - |
| visible | Whether to display pop-up content in controlled mode | `boolean` | - |

### Ref

| Name    | Description                      | Type         |
| ------- | -------------------------------- | ------------ |
| hide    | Hide the Tooltip                 | `() => void` |
| show    | Show the Tooltip                 | `() => void` |
| visible | Whether the Tooltip is diplaying | `boolean`    |

## Tooltip.scrollProps

While `Tooltip` is inside a `<ScrollView />`, please pread `Tooltip.scrollProps` to the ScrollView,
<br/>
otherwise it will not follow the scroll

```jsx
import { ScrollView } from 'react-native'
import { Tooltip } from '@ant-design/react-native'

<ScrollView {...Tooltip.scrollProps}>
  <Tooltip>...</Tooltip>
<ScrollView>
```

## Tooltip.Menu

### Props

Except for `content`, all other attributes are inherited from `Tooltip`, the unique attributes are as follows:

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| actions | Menu list, used when the pop-up content is a standard menu | `Action[]` | - |
| maxCount | Maximum number of menu lists, if exceeded, hide for scrolling | `number` | - |
| onAction | Callback of the selected menum, when the menu list is used | `(item: Action) => void` | - |

### Action

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| disabled | Whether disabled | `boolean` | `false` |
| icon | The icon of the menu item | `ReactNode` | `null` |
| key | The unique identifier of the menu, the default is `index` | `string | number` | `actions` array's `index` |
| onPress | Triggered on click | `() => void` | - |
| text | Menu list, used when the pop-up content is a standard menu | `ReactNode` | - |

### TooltipStyle interface

```typescript
interface TooltipStyle extends ListItemStyle {
  tooltip: ViewStyle
  tooltipText: TextStyle
  arrow: ViewStyle // `borderTopColor` sets the arrow bg color
}
```

### Ref

Same as Tooltip.

## FAQ

### Why can't some children components wrapped by Tooltip be opened onPress?

First, Tooltip's children must be `React.ReactElement`, which is a JSX Element rather than a variable.

```jsx
const element = <Button>press</Button>

<Tooltip
  content="Hello World"
  defaultVisible>
  {element} // ❌ DO NOT USE
  <Button>press</Button> // ✅ YES
</Tooltip>
```
Secondly, the positioning of Tooltip is calculated based on `View.onLayout`, so the children component must support the [onLayout](https://reactnative.dev/docs/view#onlayout) event.

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
