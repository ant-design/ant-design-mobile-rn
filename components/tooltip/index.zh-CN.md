---
category: Components
type: Navigation
title: Tooltip
subtitle: 气泡
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
| destroyOnHide | 隐藏时，是否销毁 `tooltip` 内容 | `boolean` | `false` |
| getContainer | 浮层渲染父节点，默认渲染到 `body` 上 | `() => HTMLElement` | `() => document.body` |
| mode | 设置亮色模式或者黑色模式 | `'light' \| 'dark'` | `'light'` |
| onVisibleChange | 显示隐藏的回调 | `(visible: boolean) => void` | - |
| placement | 气泡框位置 | `'top' \| 'top-start' \| 'top-end' \| 'right' \| 'right-start' \| 'right-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end'` | `'top'` |
| stopPropagation | 阻止某些事件的冒泡 | `PropagationEvent[]` | `['click']` |
| trigger | 触发方式 | `'click'` | - |
| visible | 受控模式下，是否展示弹出内容 | `boolean` | - |

### Ref

| 属性    | 说明                       | 类型         |
| ------- | -------------------------- | ------------ |
| hide    | 隐藏气泡弹出框             | `() => void` |
| show    | 展示气泡弹出框             | `() => void` |
| visible | 气泡弹出框当前是否正在展示 | `boolean`    |

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
| key | 菜单的唯一标识, 缺省时即为 `index` | `string \| number` | `actions` 数组的 `index` |
| onClick | 点击时触发 | `() => void` | - |
| text | 菜单列表，当弹出内容为标准菜单时使用 | `ReactNode` | - |

### Ref

同 Tooltip


## FAQ

### 为什么有些情况下 Tooltip 显示不全容易被遮住？

tooltip层级（zIndex）是和其包裹的children同级的，只是定位使用了 `{position:'absolute'}`绝对定位。
当层级小于相邻View时会被高层级遮住，因此需要保证children层级要高于相邻View的层级（默认后面View层级高于前面View层级）。
只比较同层，跨多层级请确保有足够的边距来显示。

```jsx
<List renderHeader="深色气泡">
  <Tooltip
    content="Hello World"
    placement="bottom"
    mode="dark"
    defaultVisible>
    <Button style={{ alignSelf: 'flex-start', margin: 10 }}>点我</Button>
  </Tooltip>
</List>
<List renderHeader="气泡位置">
</List>
```

所以如果要显示在最上层，需要给tooltip所在的层级赋予一个更高的zindex值

```diff
+ <List renderHeader="深色气泡" style={{zIndex:999}}>
- <List renderHeader="深色气泡">
   <Tooltip
     content="Hello World"
     placement="bottom"
     mode="dark"
     defaultVisible>
     <Button style={{ alignSelf: 'flex-start', margin: 10 }}>点我</Button>
   </Tooltip>
 </List>
...
```