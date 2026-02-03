---
category: Components
type: Navigation
title: IndexBar
---

Used for quick index positioning in long lists, commonly used in scenarios such as contact lists and city lists.

## Rule

- Display index indicator on the right side, click or slide to quickly locate the corresponding group
- Support custom group title and list item rendering
- Based on React Native's SectionList implementation

## API

### IndexBar

Properties | Description | Type | Default
-----------|------------|------|--------
| sections | Section data, required | `SectionListData<any, IndexBarSectionData>[]` | - |
| sortable | Whether to sort section data| `boolean` | `true` |
| onIndexChange | Callback function when index changes | `(key: string, index: number) => void` | - |
| animated | Whether to use animation when scrolling | `boolean` | `false` |
| showIndicator | Whether to show index indicator | `boolean` | `true` |
| style | Custom container style | `StyleProp<ViewStyle>` | - |
| styles | Semantic DOM style | [IndexBarStyle](#indexbarstyle-interface) | - |

### IndexBarSectionData

Section data structure

Properties | Description | Type | Default
-----------|------------|------|--------
| key | Index key value, used for index indicator display | `string` | - |
| title | Section title | `string` | - |
| data | Section data list | `any[]` | - |

> For more properties, please refer to all properties of React Native [SectionList](https://reactnative.dev/docs/sectionlist)

### IndexBarStyle interface

```typescript
interface IndexBarStyle {
  container: ViewStyle
  listContainer: ViewStyle
  item: ViewStyle
  itemLast: ViewStyle
  itemTitle: TextStyle
  sectionHeader: ViewStyle
  sectionHeaderTitle: TextStyle
  indicatorPosition: ViewStyle
  indicatorContainer: ViewStyle
  indicatorBox: ViewStyle
  indicatorTextContainer: ViewStyle
  activeIndicatorTextContainer: ViewStyle
  indicatorScaleTextContainer: ViewStyle
  indicatorText: TextStyle
  activeIndicatorText: TextStyle
  indicatorScaleText: TextStyle
}
```
