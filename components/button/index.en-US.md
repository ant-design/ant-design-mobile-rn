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
| onPressIn  | same as RN TouchableHighlight onPressIn | (e: Object): void |   - |
| onPressOut | same as RN TouchableHighlight onPressOut | (e: Object): void |  - |
| onShowUnderlay | same as RN TouchableHighlight onShowUnderlay | (e: Object): void | - |
| onHideUnderlay | same as RN TouchableHighlight onHideUnderlay | (e: Object): void | - |
