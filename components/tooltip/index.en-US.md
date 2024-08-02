---
category: Components
type: Navigation
title: Tooltip
version: 5.2.1
---

After clicking on a control or an area, a Tooltip menu appears for doing more.
If set mask prop, it is recommended to exit by clicking on any of the mask layers.

## API

### Tooltip

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| children | The element that triggered the Tooltip | `React.ReactElement` | - |
| content | The content of the Tooltip | `React.ReactNode` | - |
| defaultVisible | Whether to show or hide by default | `boolean` | `false` |
| mode | Set bright color mode or black mode | `'light' | 'dark'` | `'light'` |
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
  arrow: ViewStyle
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