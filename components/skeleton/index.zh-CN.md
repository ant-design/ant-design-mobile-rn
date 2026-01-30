---
category: Components
type: 反馈
title: Skeleton
subtitle: 骨架屏
---

在需要等待加载内容的位置设置一个骨架屏，可以降低用户的认知负担，使加载过程更自然。

### 规则
- 骨架屏用于表示内容正在加载中。
- 使用骨架屏可以提升感知性能，减少用户在加载过程中的焦虑感。
- 骨架组件包含 Title 和 Paragraph，用于常见的内容结构。

## API

### Skeleton

属性 | 说明 | 类型 | 默认值 | 版本 |
----|-----|------|-------|------
| animated | 是否显示动画 | Boolean | `false` | |
| style | 自定义样式 | StyleProp&lt;ViewStyle&gt; | - | |
| styles | 语义化结构 style | [SkeletonStyle](#skeletonstyle-语义化样式) | - |  |

### Skeleton.Title

标题骨架屏组件。

属性 | 说明 | 类型 | 默认值 | 版本 |
----|-----|------|-------|------
| animated | 是否显示动画 | Boolean | `false` | |
| style | 自定义样式 | StyleProp&lt;ViewStyle&gt; | - | |
| styles | 语义化结构 style | [SkeletonStyle](#skeletonstyle-语义化样式) | - |  |

### Skeleton.Paragraph

段落骨架屏组件。

属性 | 说明 | 类型 | 默认值 | 版本 |
----|-----|------|-------|------
| lineCount | 行数 | Number | `4` | |
| animated | 是否显示动画 | Boolean | `false` | |
| style | 自定义样式 | StyleProp&lt;ViewStyle&gt; | - | |
| styles | 语义化结构 style | [SkeletonStyle](#skeletonstyle-语义化样式) | - |  |

### SkeletonStyle 语义化样式

```typescript
interface SkeletonStyle {
  skeleton: ViewStyle
  skeletonTitle: ViewStyle
  skeletonParagraph: ViewStyle
  skeletonParagraphLine: ViewStyle
  skeletonParagraphLastLine: ViewStyle
}
```
