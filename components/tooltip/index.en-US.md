---
category: Components
type: Navigation
title: Tooltip
---

After clicking on a control or an area, a Tooltip menu appears for doing more.
If set mask prop, it is recommended to exit by clicking on any of the mask layers.

## API

### Tooltip

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| children | The element that triggered the Tooltip | `React.ReactElement` | - |
| content | The content of the Tooltip | `React.ReactNode` | - |
| defaultVisible | Whether to show or hide by default | `boolean` | `false` |
| destroyOnHide | When hiding, whether to destroy the content of `tooltip` | `boolean` | `false` |
| getContainer | The floating layer renders the parent node, which would be rendered on the `body` by default | `() => HTMLElement` | `() => document.body` |
| mode | Set bright color mode or black mode | `'light' \| 'dark'` | `'light'` |
| onVisibleChange | Callback when the visible prop is changed | `(visible: boolean) => void` | - |
| placement | The position of the Tooltip | `'top' \| 'top-start' \| 'top-end' \| 'right' \| 'right-start' \| 'right-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end'` | `'top'` |
| stopPropagation | Stop the propagation of some events. | `PropagationEvent[]` | `['click']` |
| trigger | Event to trigger | `'click'` | - |
| visible | Whether to display pop-up content in controlled mode | `boolean` | - |

### Ref

| Name    | Description                      | Type         |
| ------- | -------------------------------- | ------------ |
| hide    | Hide the Tooltip                 | `() => void` |
| show    | Show the Tooltip                 | `() => void` |
| visible | Whether the Tooltip is diplaying | `boolean`    |

## Tooltip.Menu

### Props

Except for `content`, all other attributes are inherited from `Tooltip`, the unique attributes are as follows:

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| actions | Menu list, used when the pop-up content is a standard menu | `Action[]` | - |
| maxCount | Maximum number of menu lists, if exceeded, hide for scrolling | `number` | - |
| onAction | Callback of the selected menum, when the menu list is used | `(item: Action) => void` | - |

### Action

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| disabled | Whether disabled | `boolean` | `false` |
| icon | The icon of the menu item | `ReactNode` | `null` |
| key | The unique identifier of the menu, the default is `index` | `string \| number` | `actions` array's `index` |
| onClick | Triggered on click | `() => void` | - |
| text | Menu list, used when the pop-up content is a standard menu | `ReactNode` | - |

### Ref

Same as Tooltip.