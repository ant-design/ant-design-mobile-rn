---
category: Components
type: Gesture
title: SwipeAction
version: update
---

iOS-style swipeout buttons that appear from behind a component.

### Definition

Call out operations from one side of screen with gesture.

### Rules
1. Only one row can be swiped at a time.
2. Can hide operations by clicking outside of buttons or swiping the list backforwards.

## API

### SwipeAction

| Properties | Descrition | Type | Default | Version |
|-----|-----|------|-------|------|
| closeOnAction | Whether to return to the position automatically when the operation button is clicked | `boolean` | `true` | `5.2.1` |
| closeOnTouchOutside | Whether to return to the position automatically when other areas is clicked | `boolean` | `false` | `5.2.1` |
| left          | List of operation buttons on the left | [SwipeoutButtonProps](/components/swipe-action#swipeoutbuttonprops)[] | `[]` | |
| right         | List of operation buttons on the right | [SwipeoutButtonProps](/components/swipe-action#swipeoutbuttonprops)[] | `[]` | |
| styles        | Semantic DOM style | [SwipeActionStyle](/components/swipe-action#swipeactionstyle-interface) | - | `5.2.1` |

The rest of the props of `SwipeAction` are exactly the same as [react-native-gesture-handler/Swipeable](https://docs.swmansion.com/react-native-gesture-handler/docs/components/swipeable/),

**eg: `onSwipeableOpen` , `onSwipeableClose` , `renderLeftActions` , `renderRightActions`**


When you set `renderLeftActions` prop, it will override `left` prop; <br/>
when you set `renderRightActions` prop, it will override `right` prop.

### SwipeoutButtonProps

| Properties | Descrition | Type | Default | Version |
|-----|------|------|------|------|
| backgroundColor | background color | `string` | - | |
| color | font color | `string` | - | |
| disabled | Whether disabled | `boolean` | - | |
| onPress | Trigger when clicked | `() => void | Promise<any>` | - | `5.2.1` support async |
| style | Aaction button style, effective when `text` is `string` | `StyleProp<TextStyle>` | - | |
| text | Text | `string | ReactNode` | - | |
| actionButtonProps | Rest props | [RectButtonProps](https://docs.swmansion.com/react-native-gesture-handler/docs/components/buttons/#rectbutton) | - | `5.2.1` |

### SwipeActionStyle interface

```typescript
export interface SwipeActionStyle {
  actionButton: ViewStyle
  actionText: TextStyle
}
```

### Ref

New in `5.2.1`. Ref to Swipeable[#Ref](https://docs.swmansion.com/react-native-gesture-handler/docs/components/swipeable/#methods)

| Properties | Descrition | Type|
|-----|------|------|
| close | method that closes component | `() => void` |
| openLeft | method that opens component on left side. | `() => void` |
| openRight | method that opens component on right side. | `() => void` |
| reset | method that resets the swiping states of this `Swipeable` component.<br/>Unlike method `close`, this method does not trigger any animation. | `() => void` |