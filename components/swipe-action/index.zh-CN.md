---
category: Components
type: Gesture
title: SwipeAction
subtitle: 滑动操作
version: update
---

滑动操作组件。

### 定义
结合手势操作，从屏幕一侧唤出操作。

### 规则
1. 一次只可滑动一行列表
2. 点击任意按钮之外处或往回滑动该列表可隐藏操作。

## API

### SwipeAction

| 属性 | 说明 | 类型 | 默认值 | 版本 |
|-----|-----|------|-------|------|
| closeOnAction | 点击按钮后自动隐藏按钮   | `boolean` | `true` | `5.2.1` |
| closeOnTouchOutside | 是否在点击其他区域时自动归位 | `boolean` | `false` | `5.2.1` |
| left          | 左侧按钮组      | [SwipeoutButtonProps](/components/swipe-action-cn#swipeoutbuttonprops)[] | `[]` | |
| right         | 右侧按钮组      | [SwipeoutButtonProps](/components/swipe-action-cn#swipeoutbuttonprops)[] | `[]` | |
| styles        | 语义化结构 style | [SwipeActionStyle](/components/swipe-action-cn#swipeactionstyle-语义化样式) | - | `5.2.1` |

SwipeAction 剩余其他属性和 [react-native-gesture-handler/Swipeable](https://docs.swmansion.com/react-native-gesture-handler/docs/components/swipeable/) 一致，

**例如： `onSwipeableOpen` 、`onSwipeableClose`**，


**其中，设置 `renderLeftActions` 属性时会覆盖 `left` ，设置 `renderRightActions` 属性时会覆盖 `right`**。

### SwipeoutButtonProps

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|-----|------|------|------|------|
| backgroundColor | 背景色 | `string` | - | |
| color | 字体颜色 | `string` | - | |
| disabled | 是否禁用 | `boolean` | - | |
| onPress | 按钮点击事件 | `() => void | Promise<any>` | - | `5.2.1`支持异步 |
| style | 按钮样式，当`text`为`string`时生效 | `StyleProp<TextStyle>` | - | |
| text | 按钮文案 | `string | ReactNode` | - | |
| actionButtonProps | 其他额外props | [RectButtonProps](https://docs.swmansion.com/react-native-gesture-handler/docs/components/buttons/#rectbutton) | - | `5.2.1` |

### SwipeActionStyle 语义化样式

```typescript
export interface SwipeActionStyle {
  actionButton: ViewStyle
  actionText: TextStyle
}
```

### Ref

`5.2.1`新增。 指向 Swipeable[#Ref](https://docs.swmansion.com/react-native-gesture-handler/docs/components/swipeable/#methods)

| 参数 | 说明 | 类型 |
|-----|------|------|
| close | 让滑动条归位 | `() => void` |
| openLeft | 滑动出左侧操作按钮 | `() => void` |
| openRight | 滑动出右侧操作按钮 | `() => void` |
| reset | 重置此 Swipeable 组件的滑动状态的方法。<br/>与方法 `close` 不同，此方法不会触发任何动画。 | `() => void` |
