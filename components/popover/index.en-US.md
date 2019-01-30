---
category: Components
type: Navigation
title: Popover
---

After clicking on a control or an area, a Popover menu appears for doing more.
If set mask prop, it is recommended to exit by clicking on any of the mask layers.

## API

### Popover

Properties | Descrition | Type | Default
-----------|------------|------|--------
| overlay   | Popup layer content  | ReactNode |  -   |
| placement   |   How to position the popover  | 'top | right | bottom | left | auto' |  auto   |
| onSelect   | when an option is selected    | (value: any): void |  -   |
| triggerStyle  | trigger style  | ViewStyle |  -   |
| renderOverlayComponent  | A function that renders takes in the MenuOptions element and renders a container element that contains the options. Default function wraps options with a `ScrollView`. e.g. `(nodes) => <View>{nodes}</View>`  | (node: React.ReactNode) => React.ReactNode |  -   |


### Popover.Item

Properties | Descrition | Type | Default
-----------|------------|------|--------
| disabled   | set disabled    | Boolean |  false   |
| style  | item style   | ViewStyle |  -   |
| value | can be used as the selected option ID  | any |  -   |
