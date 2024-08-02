---
category: Components
type: Data Display
title: List
subtitle: 列表
---

单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表。

当你需要一个 infinite scroll 列表时，请使用 [ListView](https://mobile.ant.design/components/list-view/)。

### 规则
- 一般由主要信息、主要操作、次要信息、次要操作组成。
- 主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。

## API

### List

属性 | 说明 | 类型 | 默认值 | 版本 |
----|-----|------|-------|------
| renderHeader       | list heder  | (): void |  无  | |
| renderFooter       | list footer  | (): void |  无  | |
| styles | 语义化结构 style | [ListStyle](#liststyle-语义化样式) | - | `5.2.1` |

### List.Item

属性 | 说明 | 类型 | 默认值 | 版本 |
----|-----|------|-------|------
| thumb       | 缩略图(当为 string 类型时作为 img src)  | String \| React.Element |  无  | |
| extra      | 右边内容        | String \| React.Element |  无  | |
| arrow      | 箭头方向(右,上,下), 可选`horizontal`,`up`,`down`,`empty`，如果是`empty`则存在对应的dom,但是不显示   | String |   无  | |
| align    |  子元素垂直对齐，可选`top`,`middle`,`bottom`  | String   | `middle` | |
| onPress    | 点击事件的回调函数 | 同[TouchableHighlightProps['onPress']](#touchablehighlightprops) |  无  | |
| multipleLine    | 多行 | Boolean  | `false`  | |
| wrap    | 是否换行，默认情况下，文字超长会被隐藏， | Boolean  | `false`  ||
| styles | 语义化结构 style | [ListItemStyle](#listitemstyle-语义化样式) | - | `5.2.1` |

### TouchableHighlightProps
`5.2.1`新增。此外还支持 [TouchableHighlightProps](https://reactnative.dev/docs/touchablehighlight) 的所有属性，当设置 `onPress` 事件时，会有默认点击样式:
<br/> `{ underlayColor:'#dddddd', activeOpacity: 0.5 }`

### List.Item.Brief
辅助说明

属性 | 说明 | 类型 | 默认值 | 版本 |
----|-----|------|-------|------
| wrap    | 是否换行，默认情况下，文字超长会被隐藏， | Boolean  | `false`  | |
| styles | 语义化结构 style | [BriefStyle](#briefstyle-语义化样式) | - | `5.2.1` |

### ListStyle 语义化样式

```typescript
interface ListStyle {
  List: ViewStyle
  Header: TextStyle
  Footer: TextStyle
  Body: ViewStyle
  BodyBottomLine: ViewStyle
}
```
### ListItemStyle 语义化样式

```typescript
interface ListItemStyle {
  underlayColor: ViewStyle // ListItem其实是一个TouchableHighlight

  Item: ViewStyle // ListItem wrap
  Line: ViewStyle // borderBottom

  Thumb: ImageStyle
  Content: TextStyle
  Extra: TextStyle
  
  Arrow: TextStyle  // horizontal arrow
  ArrowV: TextStyle // up/down arrow
  multipleLine: ViewStyle
  multipleThumb: ImageStyle
}
```
### BriefStyle 语义化样式

```typescript
interface BriefStyle {
  Brief: ViewStyle
  BriefText: TextStyle
}
```