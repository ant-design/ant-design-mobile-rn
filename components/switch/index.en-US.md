---
category: Components
type: Data Entry
title: Switch
---

Select between two status, e.g. Select On or Off.

### Rules
- This is a **controlled component** that requires an `onChange` callback that updates the `checked` prop in order for the component to reflect user actions. 

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| checked    | Whether is checked by default    | Boolean       |   false  |
| defaultChecked | Whether to open initially	 | Boolean   |   false     |
| disabled   | whether is disabled    | Boolean       |   false  |
| loading    | Loading status | Boolean | false |
| onChange   | The callback function when changing, when the Promise is returned, the loading status will be displayed automatically	 | `(val: boolean) => void \| Promise<void>` |  -  |
| color | Background color when the switch is turned on. | String | #4dd865 |
| checkedChildren | Selected content | ReactNode   |   -     |
| unCheckedChildren | Non-selected content | ReactNode   |   -     |
| styles     | Semantic DOM style | [SwitchStyle](#switchstyle-interface) | - |

### SwitchStyle interface

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