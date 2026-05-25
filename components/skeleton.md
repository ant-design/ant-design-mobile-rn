# Skeleton

A placeholder for loading state, which can reduce users' cognitive load and make the loading process more natural.

### Rule
- Skeleton screens are used to indicate that content is loading.
- Use skeleton screens to improve perceived performance and reduce user anxiety during loading.
- Skeleton components include Title and Paragraph for common content structures.

## Demo

```tsx
import { List, Skeleton } from '@ant-design/react-native'
import React from 'react'

class SkeletonExample extends React.Component {
  render() {
    return (
      <Skeleton.Provider>
        <List renderHeader="基础用法" />
        <Skeleton.Title />
        <Skeleton.Paragraph />
        <List renderHeader="有动画的骨架屏" />
        <Skeleton.Title animated />
        <Skeleton.Paragraph lineCount={5} animated />
        <List renderHeader="自定义" />
        <Skeleton
          animated
          style={{
            width: '70%',
            height: 100,
            borderRadius: 8,
            marginTop: 16,
            marginBottom: 8
          }}
        />
      </Skeleton.Provider>
    )
  }
}

export default SkeletonExample
```

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
