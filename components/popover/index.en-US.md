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
| onSelect   | when an option is selected    | (node: any, index?: number): void |  -   |
| style | set style  | Object |  -   |
| triggerStyle  | trigger style  | Object |  -   |
| overlayStyle  | overlay style  | Object |  -   |
| contextStyle  | context style  | Object |  -   |
| renderOverlayComponent  | A function that renders takes in the MenuOptions element and renders a container element that contains the options. Default function wraps options with a `ScrollView`. e.g. `(opts) => <Cus>{opts}</Cus>`  | (opts: any): ReactNode |  -   |
| name  | menu name, used for manual control   | String |  -   |
| openMenu / closeMenu / toggleMenu | Set the menu's open/close status, the parameter is menu name.  | Function(name) |  -   |

more available API can be found at [rmc-tooltip](https://github.com/react-component/m-tooltip#api) (`web only`)

### Popover.Item

Properties | Descrition | Type | Default
-----------|------------|------|--------
| disabled   | set disabled    | Boolean |  false   |
| style  | item style   | Object |  -   |
| value | can be used as the selected option ID  | string/number |  -   |
