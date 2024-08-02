---
category: Components
type: Navigation
title: Popover
subtitle: (archived)
---

> This package has been deprecated in `5.2.1`, recommend [components/Tooltip](/components/tooltip)

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
| duration | Animation duration | number | 300 |
| easing | Function that returns easing function for show or hide animation, depending on `show` argument | (show: boolean) => (value: number) => number | show => show ? Easing.out(Easing.back(1.70158)) : Easing.inOut(Easing.quad) |
| useNativeDriver | Defines if animations should use native driver | boolean | false |
| onDismiss | Callback to be fired after the popup closes | function | - |

### Popover.Item

Properties | Descrition | Type | Default
-----------|------------|------|--------
| disabled   | set disabled    | Boolean |  false   |
| style  | item style   | ViewStyle |  -   |
| value | can be used as the selected option ID  | any |  -   |
