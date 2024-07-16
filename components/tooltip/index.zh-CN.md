---
category: Components
type: Navigation
title: Tooltip
subtitle: 气泡
version: 5.2.0-rc.2
---

在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。
如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。

## API

### Tooltip

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 触发 `Tooltip` 的元素 | `React.ReactElement` | - |
| content | 弹出内容 | `React.ReactNode` | - |
| defaultVisible | 默认是否显隐 | `boolean` | `false` |
| mode | 设置亮色模式或者黑色模式 | `'light' | 'dark'` | `'light'` |
| onVisibleChange | 显示隐藏的回调 | `(visible: boolean) => void` | - |
| placement | 气泡框位置 | `'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'` | `'top'` |
| trigger | 触发方式 | `'onPress'` | - |
| visible | 受控模式下，是否展示弹出内容 | `boolean` | - |

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
| onAction | 当使用菜单列表时，选中菜单的回调 | `(item: Action) => void` | - |

### Action

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用 | `boolean` | `false` |
| icon | 菜单项的图标 | `ReactNode` | `null` |
| key | 菜单的唯一标识, 缺省时即为 `index` | `string | number` | `actions` 数组的 `index` |
| onPress | 点击时触发 | `() => void` | - |
| text | 菜单列表，当弹出内容为标准菜单时使用 | `ReactNode` | - |

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