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
| onSelect   | 选中某选项时的回调函数    | (node: any, index?: number): void |  -   |
| style |  设置样式  | Object |  -   |
| triggerStyle  | 触发元素外围容器样式    | Object |  -   |
| overlayStyle  | 弹出层外围容器样式    | Object |  -   |
| contextStyle  | 最外围容器样式    | Object |  -   |
| renderOverlayComponent  | 自定义弹出层的外围组件，默认是`ScrollView`，示例`(opts) => <Cus>{opts}</Cus>`  | (opts: any): ReactNode |  -   |
| name  | menu 名字，用于手动触发开关 menu    | String |  -   |
| openMenu / closeMenu / toggleMenu | 用于手动开关 menu，参数为上边 menu 的 name. 使用示例见 demo  | Function(name) |  -   |

### Popover.Item

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| disabled   | 是否禁用    | Boolean |  false   |
| style  | item 样式    | Object |  -   |
| value | 可作为选中的条目ID   | string/number |  -   |
