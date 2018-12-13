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

Properties | Descrition | Type | Default
-----------|------------|------|--------
| renderHeader       | list heder  | (): void |    |
| renderFooter       | list footer  | (): void |    |

### List.Item

Properties | Descrition | Type | Default
-----------|------------|------|--------
| thumb       | thumbnail on the left side of `List`(string type will be used to set img src)  | String/React.Element |   |
| extra      | extra content on the right side of `List`        | String/React.Element |    |
| arrow      | arrow direction, options: `horizontal`,`up`,`down`, `empty`; `empty` option may hide the dom  | String |     |
| align    | vertical alignment of child elements，options: `top`,`middle`,`bottom`  | String   | `middle` |
| onPress    | callback is called when  list is clicked | (): void |    |
| multipleLine    | multiple line | Boolean  | `false`  |
| wrap    | Whether to wrap long texts, otherwise it will be hidden by default. | Boolean  | `false`  |

### List.Item.Brief

Brief infomation
