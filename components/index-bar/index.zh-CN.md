---
category: Components
type: Navigation
title: IndexBar
subtitle: 索引栏
---

用于长列表的快速索引定位，常用于通讯录、城市列表等场景。

## 规则

- 右侧显示索引指示器，点击或滑动可快速定位到对应分组
- 支持自定义分组标题和列表项渲染
- 基于 React Native 的 SectionList 实现

## API

### IndexBar

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| sections | 分组数据，必需 | `SectionListData<any, IndexBarSectionData>[]` | - |
| onIndexChange | 索引变化时的回调函数 | `(key: string, index: number) => void` | - |
| animated | 滚动时是否使用动画 | `boolean` | `false` |
| showIndicator | 是否显示索引指示器 | `boolean` | `true` |
| style | 自定义容器样式 | `StyleProp<ViewStyle>` | - |
| styles | 语义化结构 style | [IndexBarStyle](#indexbarstyle-语义化样式) | - |

### IndexBarSectionData

分组数据结构

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| key | 索引键值，用于索引指示器显示 | `string` | - |
| title | 分组标题 | `string` | - |
| data | 分组数据列表 | `any[]` | - |

> 更多属性请参考 React Native [SectionList](https://reactnative.dev/docs/sectionlist) 的所有属性

### IndexBarStyle 语义化样式

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
