---
category: Components
type: Navigation
title: TabBar
---

Located at the bottom of the APP, to facilitate users to quickly switch between different functional modules。

### Rule
- Used as a class of APP classification, the number of tab between 3-5 is better。
- Even if a Tab is not available, do not disable or remove the Tab。
- Use Badge make a hint，stay can also know that there is content update。

## API

### TabBar

Properties | Descrition | Type | Default
-----------|------------|------|--------
| barTintColor  | tabbar's background color     | String   | `white`    |
| tintColor  | selected's font color   | String | `#108ee9`   |
| unselectedTintColor | unselected's font color  | String | '#888'    |
| hidden   | whether it is hidden  | Boolean | false   |

### TabBar.Item

Properties | Descrition | Type | Default
-----------|------------|------|--------
| badge  | badge number  | Number \ String           | 无     |
| onPress  | on press the bar, need change component by yourself. state & selecte={true} | Function | `(){}`     |
| selected  | whether it is selected | Boolean | false     |
| icon  | the default icon | `Image Source | React.ReactNode` |      |
| selectedIcon  |  the icon of selected | `Image Source | React.ReactNode` |      |
| title  |  title | String |      |
| key  |  unique identification | String |   无   |
| iconStyle  |  icon style | String | { width: 28, height: 28 }     |
