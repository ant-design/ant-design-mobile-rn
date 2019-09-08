---
category: Components
type: Navigation
title: Drawer
---

Drawer is a panel that displays the app's navigation options on the left edge of the screen.

### Rules

- Recommended way to show navigation options on Android, it is a common pattern found in Android APPs.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| sidebar | The sidebar content. | ReactNode | - |
| onOpenChange | Callback called when open state of `Drawer` changes. | (open: bool): void | - |
| open | If the sidebar should be open. | Boolean | false |
| position | Position of `Drawer`. | String | 'left', enum{'left', 'right'} |
| drawerWidth | Width of `Drawer` | Number | 300 |
| drawerBackgroundColor | Background color of `Drawer` | String | - |
| openDrawer | Opens the `Drawer`.  | (): void | - |
| closeDrawer | Closes the `Drawer`. | (): void | - |
