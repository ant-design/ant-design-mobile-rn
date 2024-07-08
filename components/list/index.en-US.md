---
category: Components
type: Data Display
title: List
---

A single and continuous block content is vertically arranged to display current contents, status and available operations. eg：Contact List.

In case you need an infinite scroll list - consider using [ListView](https://mobile.ant.design/components/list-view/) component.

### Rule
- Generally `List` consists of main infomation, main operations, secondary infomation and secondary operations.
- The main infomation and main operations are placed on the left side of list, and secondary infomation and secondary operations are placed on the right side.

## API

### List

Properties | Descrition | Type | Default | Version |
-----------|------------|------|---------|---------|
| renderHeader       | list heder  | (): void |    | |
| renderFooter       | list footer  | (): void |    | |
| styles | Semantic DOM style | [ListStyle](#liststyle-interface) | - | `5.2.0` |

### List.Item

Properties | Descrition | Type | Default | Version |
-----------|------------|------|---------|---------|
| thumb    | thumbnail on the left side of `List`(string type will be used to set img src)  | String \| React.Element | | |
| extra    | extra content on the right side of `List` | String \| React.Element | | |
| arrow    | arrow direction, options: `horizontal`,`up`,`down`, `empty`; `empty` option may hide the dom  | String | | |
| align    | vertical alignment of child elements，options: `top`,`middle`,`bottom`  | String   | `middle` | | |
| onPress  | callback is called when  list is clicked | Same as [TouchableHighlightProps['onPress']](#touchablehighlightprops) | | |
| multipleLine | multiple line | Boolean  | `false`  | |
| wrap     | Whether to wrap long texts, otherwise it will be hidden by default. | Boolean  | `false` | |
| styles   | Semantic DOM style | [ListItemStyle](#listitemstyle-interface) | - | `5.2.0` |

### TouchableHighlightProps

New in `5.2.0`. In addition, all properties of [TouchableHighlightProps](https://reactnative.dev/docs/touchablehighlight) are supported; 
when setting `onPress` props, it has a default touch style:
<br/> `{ underlayColor:'#dddddd', activeOpacity: 0.5 }`

### List.Item.Brief

Brief infomation

Properties | Descrition | Type | Default | Version |
-----------|------------|------|---------|---------|
| wrap     | Whether to wrap long texts, otherwise it will be hidden by default. | Boolean  | `false` | |
| styles   | Semantic DOM style | [BriefStyle](#briefstyle-interface) | - | `5.2.0` |

### ListStyle interface

```typescript
interface ListStyle {
  Header: TextStyle
  Footer: TextStyle
  Body: ViewStyle
  BodyBottomLine: ViewStyle
}
```
### ListItemStyle interface

```typescript
interface ListItemStyle {
  underlayColor: ViewStyle
  Item: ViewStyle
  Line: ViewStyle
  Thumb: ImageStyle
  Content: TextStyle
  Extra: TextStyle
  Arrow: TextStyle
  ArrowV: TextStyle
  multipleLine: ViewStyle
  multipleThumb: ImageStyle
  column: ViewStyle
}
```
### BriefStyle interface

```typescript
interface BriefStyle {
  Brief: ViewStyle
  BriefText: TextStyle
}
```