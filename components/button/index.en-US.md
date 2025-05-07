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
| textStyle | set the text's custom style |   Object  | - |
| style    | custom style |   Object  | - |
| onPressIn  | same as RN Pressable onPressIn | (e: Object): void |   - |
| onPressOut | same as RN Pressable onPressOut | (e: Object): void |  - |
| onShowUnderlay | same as RN Pressable onPressIn but only triggered if `activeStyle` is not false | (e: Object): void | - |
| onHideUnderlay | same as RN Pressable onPressOut but only triggered if `activeStyle` is not false | (e: Object): void | - |
