---
category: Components
type: Data Display
title: Collapse
subtitle: 折叠面板
version: 5.2.1
---

可以折叠/展开的内容区域。

### 规则
- 对复杂区域进行分组和隐藏，保持页面的整洁。
- 手风琴是一种特殊的折叠面板，只允许单个内容区域展开。


## API

### Collapse

属性 | 说明 | 类型 | 默认值 |
----|-----|------|-------|
| accordion | 是否开启手风琴模式 | `Boolean` | `false` |
| activeKey | 当前展开面板的 `key` | 手风琴模式：`string | null` <br/> 非手风琴模式：`string[]` | - |
| arrowIcon | 自定义箭头图标，<br/>如果是 ReactNode，会自动为你增加旋转动画效果 | `ReactNode | ((active: boolean) => React.ReactNode)` | - |
| defaultActiveKey | 默认展开面板的 `key` | 手风琴模式：`string | null` <br/> 非手风琴模式：`string[]` | - |
| onChange | 切换面板时触发	| 手风琴模式：`(activeKey: string | null) => void` <br/> 非手风琴模式：`(activeKey: string[]) => void` | - |
| styles | 语义化结构 style | 同 [ListStyle](/components/list-cn#liststyle-语义化样式) & [ListItemStyle](/components/list-cn#listitemstyle-语义化样式) | - |


### Collapse.Panel

属性 | 说明 | 类型 | 默认值 |
----|-----|------|-------|
| arrowIcon | 自定义箭头图标 | `ReactNode | ((active: boolean) => React.ReactNode)` | - |
| destroyOnClose | 不可见时是否销毁 `DOM` 结构 | `Boolean` | `false` |
| disabled | 是否为禁用状态 | `Boolean` | `false` |
| forceRender | 被隐藏时是否渲染 `DOM` 结构	 | `Boolean` | `false` |
| key | 唯一标识符 | `String` | - |
| onPress | 标题栏的点击事件 | `(event: GestureResponderEvent) => void` | - |
| styles | 语义化结构 style | 同 [ListItemStyle](/components/list-cn#listitemstyle-语义化样式) | - |
| title | 标题栏左侧内容 | `ReactNode` | - |
