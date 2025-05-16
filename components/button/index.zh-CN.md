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
| styles | 语义化结构 style | [ButtonStyles](#buttonStyles-语义化样式) | - |
| onPressIn   | 同 RN Pressable onPressIn | (e: Object): void |   无  |
| onPressOut    | 同 RN Pressable onPressOut | (e: Object): void |   无  |
| onShowUnderlay    | 同 RN Pressable onPressIn 但仅在 activeStyle 不为 false 时触发 | (e: Object): void |   无  |
| onHideUnderlay    | 同 RN Pressable onPressOut 但仅在 activeStyle 不为 false 时触发 | (e: Object): void |   无  |



### ButtonStyles 语义化样式

```typescript
interface ButtonStyles {
  container: ViewStyle
  defaultHighlight: ViewStyle
  primaryHighlight: ViewStyle
  ghostHighlight: ViewStyle
  warningHighlight: ViewStyle
  wrapperStyle: ViewStyle
  underlayStyle: ViewStyle
  largeRaw: ViewStyle
  largeUnderlayContainerRaw: ViewStyle
  smallRaw: ViewStyle
  smallUnderlayContainerRaw: ViewStyle
  defaultRaw: ViewStyle
  defaultUnderlayContainerRaw: ViewStyle
  primaryRaw: ViewStyle
  primaryUnderlayContainerRaw: ViewStyle
  ghostRaw: ViewStyle
  ghostUnderlayContainerRaw: ViewStyle
  warningRaw: ViewStyle
  warningUnderlayContainerRaw: ViewStyle
  defaultDisabledRaw: ViewStyle
  primaryDisabledRaw: ViewStyle
  ghostDisabledRaw: ViewStyle
  warningDisabledRaw: ViewStyle
  defaultHighlightText: TextStyle
  primaryHighlightText: TextStyle
  ghostHighlightText: TextStyle
  warningHighlightText: TextStyle
  rawText: TextStyle
  largeRawText: TextStyle
  smallRawText: TextStyle
  defaultRawText: TextStyle
  primaryRawText: TextStyle
  ghostRawText: TextStyle
  warningRawText: TextStyle
  defaultDisabledRawText: TextStyle
  primaryDisabledRawText: TextStyle
  ghostDisabledRawText: TextStyle
  warningDisabledRawText: TextStyle
  indicator: ViewStyle
}
```
