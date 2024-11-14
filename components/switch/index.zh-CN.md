---
category: Components
type: Data Entry
title: Switch
subtitle: 滑动开关
---

在两个互斥对象进行选择，eg：选择开或关。

### 规则
- 这是一个“受控组件”。你必须使用`onChange`回调来更新`checked`属性以响应用户的操作。

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| checked    | 是否默认选中    | Boolean       |   false  |
| defaultChecked | 初始是否打开 | Boolean   |   false     |
| disabled   | 是否不可修改    | Boolean       |   false  |
| loading    | 加载中的开关 | Boolean | false |
| onChange   | 变化时的回调函数，当返回 Promise 时，会自动显示加载状态 | `(val: boolean) => void \| Promise<void>` |  无  |
| color | 开关打开后的颜色 | String | `#4dd865` |
| checkedChildren | 选中时的内容 | ReactNode   |   无     |
| unCheckedChildren | 非选中时的内容 | ReactNode   |   无     |
| styles     | 语义化结构 style | [SwitchStyle](#switchStyle-语义化样式) | - |

### SwitchStyle 语义化样式

```typescript
interface SwitchStyle {
  switch: ViewStyle
  switch_inner: ViewStyle
  switch_handle: ViewStyle
  switch_checked: ViewStyle
  switch_unchecked: ViewStyle
  switch_inner_checked: ViewStyle
  switch_inner_unchecked: ViewStyle
  switch_handle_checked: ViewStyle
  switch_handle_unchecked: ViewStyle
  switch_checked_disabled: ViewStyle
  switch_unchecked_disabled: ViewStyle
  switch_handle_disabled: ViewStyle
}
```