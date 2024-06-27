---
category: Components
type: Gesture
title: SwipeAction
subtitle: 滑动操作
---

滑动操作组件。

### 定义
结合手势操作，从屏幕一侧唤出操作。

### 规则
1. 一次只可滑动一行列表
2. 点击任意按钮之外处或往回滑动该列表可隐藏操作。

## API

### SwipeAction

| 属性 | 说明 | 类型 | 默认值
|-----|-----|------|------
| closeOnAction | 点击按钮后自动隐藏按钮   | `boolean` | `true` |
| closeOnTouchOutside | 是否在点击其他区域时自动归位 | `boolean` | `false` |
| disabled      | 禁用 `swipeout`    | `boolean` | `false` |
| left          | 左侧按钮组      | [SwipeoutButtonProps](/components/swipe-action-cn#swipeoutbuttonprops)[ ] | `[]` |
| right         | 右侧按钮组      | [SwipeoutButtonProps](/components/swipe-action-cn#swipeoutbuttonprops)[ ] | `[]` |
| onClose       | 关闭时回调函数   | `() => void` | - |
| onOpen        | 打开时回调函数   | `() => void` | - |
| styles        | 语义化结构 style | 同 [ListStyle](/components/list-cn#liststyle-语义化样式) | - |

SwipeAction 剩余其他属性和 [react-native-gesture-handler/Swipeable](https://docs.swmansion.com/react-native-gesture-handler/docs/components/swipeable/) 一致。

其中，设置`renderLeftActions`属性时会覆盖`left`，设置`renderRightActions`属性时会覆盖`right`。

### SwipeoutButtonProps

| 参数 | 说明 | 类型 | 默认值 |
|-----|------|------|------|
| backgroundColor | 按钮样式 | `string` | - |
| color | 按钮样式 | `string` | - |
| disabled | 按钮样式 | `boolean` | - |
| onPress | 按钮点击事件 | `() => void` | - |
| style | 按钮样式 | `StyleProp<TextStyle>` | - |
| text | 按钮文案 | `string` | - |

### Ref

| 参数 | 说明 | 类型 |
|-----|------|------|
| close | 让滑动条归位 | `() => void` |
| show | 滑动出操作按钮，`side` 参数默认为 `right` | `(side?: 'left' | 'right') => void` |