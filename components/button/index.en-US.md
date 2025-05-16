---
category: Components
type: Data Entry
title: Button
---

To trigger an operation.


## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| type     | can be set to `primary`/`ghost`/`warning` or omitted  |   string   |   -  |
| size     | can be set to `large`、`small` or omitted | string | `large`|
| activeStyle | the feedback's custom style (set to false to disable click feedback) | {}/false | {} |
| activeClassName  | the feedback's custom class name | string |  |
| disabled   | set disabled   | boolean |  false  |
| onPress    | set the handler to handle `click` event | (e: Object): void |  -  |
| style    | custom style |   Object  | - |
| styles | Semantic DOM style | [ButtonStyles](#buttonStyles-interface) | - |
| onPressIn  | same as RN Pressable onPressIn | (e: Object): void |   - |
| onPressOut | same as RN Pressable onPressOut | (e: Object): void |  - |
| onShowUnderlay | same as RN Pressable onPressIn but only triggered if `activeStyle` is not false | (e: Object): void | - |
| onHideUnderlay | same as RN Pressable onPressOut but only triggered if `activeStyle` is not false | (e: Object): void | - |


### ButtonStyles interface

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
