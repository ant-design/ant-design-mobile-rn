---
category: Components
type: Data Entry
title: Button
subtitle: 按钮
---

点击后会触发一个操作。


## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    | 按钮类型，可选值为`primary`/`ghost`/`warning`或者不设  |   string   |   -  |
| size    | 按钮大小，可选值为`large`、`small` | string | `large`|
| activeStyle  | 点击反馈的自定义样式 (设为 false 时表示禁止点击反馈) | {}/false | {} |
| activeClassName  | 点击反馈的自定义类名 | string |  |
| disabled   | 设置禁用  | boolean |    false  |
| onPress    | 点击按钮的点击回调函数 | (e: Object): void |   无  |
| style    | 自定义样式 |   Object  | 无 |
| onPressIn   | 同 RN TouchableHighlight onPressIn | (e: Object): void |   无  |
| onPressOut    | 同 RN TouchableHighlight onPressOut | (e: Object): void |   无  |
| onShowUnderlay    | 同 RN TouchableHighlight onShowUnderlay | (e: Object): void |   无  |
| onHideUnderlay    | 同 RN TouchableHighlight onHideUnderlay | (e: Object): void |   无  |
