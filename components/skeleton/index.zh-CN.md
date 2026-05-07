---
category: Components
group:
  title: 反馈
  order: 5
title: Skeleton
subtitle: 骨架屏
version: 5.5.0
---

在需要等待加载内容的位置设置一个骨架屏，可以降低用户的认知负担，使加载过程更自然。

### 规则
- 骨架屏用于表示内容正在加载中。
- 使用骨架屏可以提升感知性能，减少用户在加载过程中的焦虑感。
- 骨架组件包含 Title 和 Paragraph，用于常见的内容结构。

## 代码演示

<code src="./demo/basic.tsx"></code>

## API

### Skeleton

| 属性 | 说明 | 类型 | 默认值 |
|----|-----|------|-------
| animated | 是否显示动画 | Boolean | `false` |
| style | 自定义样式 | StyleProp&lt;ViewStyle&gt; | - |
| styles | 语义化结构 style | [SkeletonStyle](#skeletonstyle-语义化样式) | - |

### Skeleton.Provider

> 可选的性能优化组件。

当页面中同时渲染大量开启动画的 `Skeleton` 时，每个 `Skeleton` 独立创建动画可能会带来额外开销，并且动画节奏可能不同步。使用 `Skeleton.Provider` 包裹这些组件后，内部的 `Skeleton` 会共享同一个动画实例，从而让动画表现更一致。

### Skeleton.Title

标题骨架屏组件。

|属性 | 说明 | 类型 | 默认值 |
|----|-----|------|-------
| animated | 是否显示动画 | Boolean | `false` |
| style | 自定义样式 | StyleProp&lt;ViewStyle&gt; | - |
| styles | 语义化结构 style | [SkeletonStyle](#skeletonstyle-语义化样式) | - |

### Skeleton.Paragraph

段落骨架屏组件。

|属性 | 说明 | 类型 | 默认值 |
|----|-----|------|-------
| lineCount | 行数 | Number | `3` |
| animated | 是否显示动画 | Boolean | `false` |
| style | 自定义样式 | StyleProp&lt;ViewStyle&gt; | - |
| styles | 语义化结构 style | [SkeletonStyle](#skeletonstyle-语义化样式) | - |

### SkeletonStyle 语义化样式

```typescript
interface SkeletonStyle {
  skeleton: ViewStyle                   // 自定义样式类
  skeletonShimmer: ViewStyle            // 扫光层（animated 时）
  skeletonTitle: ViewStyle              // 标题容器
  skeletonParagraph: ViewStyle          // 段落容器
  skeletonParagraphLine: ViewStyle      // 段落行
  skeletonParagraphLastLine: ViewStyle  // 段落最后一行
}
```
