---
category: Components
type: Feedback
title: Skeleton
---

A placeholder for loading state, which can reduce users' cognitive load and make the loading process more natural.

### Rule
- Skeleton screens are used to indicate that content is loading.
- Use skeleton screens to improve perceived performance and reduce user anxiety during loading.
- Skeleton components include Title and Paragraph for common content structures.

## API

### Skeleton

Properties | Description | Type | Default | Version |
-----------|------------|------|---------|---------|
| animated | Whether to show animation | Boolean | `false` | |
| style | Custom style | StyleProp&lt;ViewStyle&gt; | - | |
| styles | Semantic DOM style | [SkeletonStyle](#skeletonstyle-interface) | - |  |

### Skeleton.Title

Title skeleton component.

Properties | Description | Type | Default | Version |
-----------|------------|------|---------|---------|
| animated | Whether to show animation | Boolean | `false` | |
| style | Custom style | StyleProp&lt;ViewStyle&gt; | - | |
| styles | Semantic DOM style | [SkeletonStyle](#skeletonstyle-interface) | - |  |

### Skeleton.Paragraph

Paragraph skeleton component.

Properties | Description | Type | Default | Version |
-----------|------------|------|---------|---------|
| lineCount | Number of lines | Number | `4` | |
| animated | Whether to show animation | Boolean | `false` | |
| style | Custom style | StyleProp&lt;ViewStyle&gt; | - | |
| styles | Semantic DOM style | [SkeletonStyle](#skeletonstyle-interface) | - |  |

### SkeletonStyle interface

```typescript
interface SkeletonStyle {
  skeleton: ViewStyle
  skeletonTitle: ViewStyle
  skeletonParagraph: ViewStyle
  skeletonParagraphLine: ViewStyle
  skeletonParagraphLastLine: ViewStyle
}
```
