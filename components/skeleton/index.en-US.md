---
category: Components
group:
  title: Feedback
  order: 5
title: Skeleton
version: 5.5.0
---

A placeholder for loading state, which can reduce users' cognitive load and make the loading process more natural.

### Rule
- Skeleton screens are used to indicate that content is loading.
- Use skeleton screens to improve perceived performance and reduce user anxiety during loading.
- Skeleton components include Title and Paragraph for common content structures.

## Demo

<code src="./demo/basic.tsx"></code>

## API

### Skeleton

| Properties | Description | Type | Default |
|-----------|------------|------|---------
| animated | Whether to show animation | Boolean | `false` |
| style | Custom style | StyleProp&lt;ViewStyle&gt; | - |
| styles | Semantic DOM style | [SkeletonStyle](#skeletonstyle-interface) | - |

### Skeleton.Provider

> An optional performance optimization component.

When many animated `Skeleton` components are rendered at the same time, creating an animation for each one can add extra overhead and may cause their animation timing to drift. Wrap them with `Skeleton.Provider` to let the inner `Skeleton` components share one animation instance, keeping the animation more consistent.

### Skeleton.Title

Title skeleton component.

| Properties | Description | Type | Default |
|-----------|------------|------|---------
| animated | Whether to show animation | Boolean | `false` |
| style | Custom style | StyleProp&lt;ViewStyle&gt; | - |
| styles | Semantic DOM style | [SkeletonStyle](#skeletonstyle-interface) | - |

### Skeleton.Paragraph

Paragraph skeleton component.

| Properties | Description | Type | Default |
|-----------|------------|------|---------
| lineCount | Number of lines | Number | `3` |
| animated | Whether to show animation | Boolean | `false` |
| style | Custom style | StyleProp&lt;ViewStyle&gt; | - |
| styles | Semantic DOM style | [SkeletonStyle](#skeletonstyle-interface) | - |

### SkeletonStyle interface

```typescript
interface SkeletonStyle {
  skeleton: ViewStyle                   // Custom style class
  skeletonShimmer: ViewStyle            // Shimmer overlay when animated
  skeletonTitle: ViewStyle              // Title container
  skeletonParagraph: ViewStyle          // Paragraph container
  skeletonParagraphLine: ViewStyle      // Paragraph line
  skeletonParagraphLastLine: ViewStyle  // Last paragraph line
}
```
