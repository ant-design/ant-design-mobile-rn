---
category: Components
type: Navigation
title: Popover
subtitle: 气泡
---

在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。
如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。

## API

### Popover

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| overlay   | 弹出层内容    | ReactNode |  -   |
| placement   |   弹出层位置  | 'top | right | bottom | left | auto' |  auto   |
| onSelect   | 选中某选项时的回调函数    | (value: any): void |  -   |
| triggerStyle  | 触发元素外围容器样式    | ViewStyle |  -   |
| renderOverlayComponent  | 自定义弹出层的外围组件，默认是`ScrollView`，示例`(nodes) => <View>{nodes}</View>`  | (node: React.ReactNode) => React.ReactNode |  -   |


### Popover.Item

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| disabled   | 是否禁用    | Boolean |  false   |
| style  | item 样式    | ViewStyle |  -   |
| value | 可作为选中的条目ID   | any |  -   |
