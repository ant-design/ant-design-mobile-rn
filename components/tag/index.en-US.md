---
nav:
  title: Components
group:
  title: Data Display
  order: 4
title: Tag
---

Tag for categorizing or markuping, can be used to make classification or mark the attributes and dimensions of objects.

### Rules

- The content should be displayed completely.

## Examples

<code src="./demo/basic.tsx"></code>

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| small   |  Whether to show a smaller size  |   Boolean    |  `false`  |
| disabled   | Whether is disabled      | Boolean |    `false`  |
| closable   | Whether can be closed(invalid in `small` or `disabled` mode) | Boolean | `false` |
| selected   | Whether is selected by default     | Boolean |   `false`  |
| onChange   | The callback function that is triggered when the selected state changes. | (selected: bool): void |   -  |
| onClose   | The callback function that is triggered when the tag is closed. | (): void |   -  |
| afterClose   | The callback function that is triggered after close. | (): void |   -  |
| onLongPress   | The callback function that is triggered when the tag is long pressed. | (): void |   -  |