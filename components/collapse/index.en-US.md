---
category: Components
type: Data Display
title: Collapse
version: 5.2.0
---

A content area that can be collapsed/expanded.

### Rules
- Group and hide complex areas to keep pages tidy.
- An accordion is a special type of accordion panel that only allows a single content area to expand.


## API

### Collapse

Properties | Descrition | Type | Default |
-----------|------------|------|---------|
| accordion | Whether to enable accordion mode | `Boolean` | `false` |
| activeKey | The `key` of the currently expanded panel | accordion mode: `string | null` <br/> non-accordion mode: `string[]` | - |
| arrowIcon | Custom arrow icon. <br/>if you pass a ReactNode, will add a rotate animation for you. | `ReactNode | ((active: boolean) => React.ReactNode)` | - |
| defaultActiveKey | The `key` of the expanded panel by default | accordion mode: `string | null` <br/> non-accordion mode: `string[]` | - |
| onChange | Triggered when the panel is switched | accordion mode: `(activeKey: string | null) => void` <br/> non-accordion mode: `(activeKey: string[]) => void` | - |
| styles | Semantic DOM style | Same as [ListStyle](/components/list#liststyle-interface) & [ListItemStyle](/components/list#listitemstyle-interface) | - |

### Collapse.Panel

Properties | Descrition | Type | Default |
-----------|------------|------|---------|
| arrowIcon | Custom arrow icon | `ReactNode | ((active: boolean) => React.ReactNode)` | - |
| destroyOnClose | Destroy `dom` when not visible | `Boolean` | `false` |
| disabled | Whether disabled or not | `Boolean` | `false` |
| forceRender | Whether to render the `DOM` structure when hidden	| `Boolean` | `false` |
| key | The unique identifier | `String` | - |
| onPress | The click event of title bar | `(event: GestureResponderEvent) => void` | - |
| styles | Semantic DOM style | Same as [ListStyle](/components/list#liststyle-interface) | - |
| title | The content on the left side of the title bar | `ReactNode` | - |
