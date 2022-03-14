---
category: Components
type: Data Entry
title: Radio
---

Radio.

## API

### Type
```ts
type RadioValue = string | number
```

### Radio

Properties | Descrition | Type | Default
-----------|------------|------|--------
| defaultChecked |   the initial checked state   | Boolean  | -  |
| checked    |   to set the current checked state  | Boolean  | -  |
| disabled      |  whether disabled  | Boolean |  false  |
| onChange    | a callback function, can be executed when the checked state changes | (e: { target: { checked: boolean } }) => void |  -  |
| value | Value is carrying identification, used in `Group` mode | `RadioValue` | - |

### Radio.RadioItem

The encapsulation about `Radio` based on `List.Item`, the property `extra` of `List.Item` will be passed to `Radio`, while other properties remain the same.

Other APIs are identical with `Radio`.

### Radio.Group `v5.0.0`

Radio group can wrap a group of `Radio`。

```ts
type Event = { target: { value: RadioValue } }
```

Properties | Descrition | Type | Default
----|-----|------|------
| defaultValue |   	Default selected value   | `RadioValue`  | -  |
| disabled |  Disable all radio buttons  | Boolean |  false  |
| options  | Set children optional | `string[]` \| `number[]` \| `Array<{ label: string value: string disabled?: boolean }>` | - ｜
| value    |   Used for setting the currently selected value  | `RadioValue`  | -  |
| onChange | The callback function that is triggered when the state changes | (e: `Event`) => void |   -  |