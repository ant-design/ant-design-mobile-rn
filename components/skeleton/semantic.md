## Skeleton

### Usage Example

```jsx
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

### styles

```tsx
import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface SkeletonStyle {
  skeleton: ViewStyle
  skeletonShimmer: ViewStyle
  skeletonTitle: ViewStyle
  skeletonParagraph: ViewStyle
  skeletonParagraphLine: ViewStyle
  skeletonParagraphLastLine: ViewStyle
}

export default (_theme: Theme) =>
  StyleSheet.create<SkeletonStyle>({
    skeleton: {
      backgroundColor: _theme.skeleton_background_color,
      width: '100%',
      height: 0,
      borderRadius: 0,
    },
    skeletonShimmer: {
      width: 160,
      backgroundColor: 'rgba(129, 129, 129, 0.14)',
    },
    skeletonTitle: {
      width: '45%',
      height: 32,
      borderRadius: _theme.radius_xs,
      marginTop: 16, // 不支持gap属性
      marginBottom: 8,
    },
    skeletonParagraph: {},
    skeletonParagraphLine: {
      height: 18,
      borderRadius: _theme.radius_xs,
      marginVertical: 6,
    },
    skeletonParagraphLastLine: {
      width: '65%',
      marginBottom: 12,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 非动画模式（animated=false）：静态占位块 -->
<!-- 对应 styles.skeleton：骨架屏底色和尺寸 -->
<View style={[styles.skeleton, style]} />

<!-- 动画模式（animated=true）：带扫光 + 呼吸效果 -->
<AnimatedSkeleton>

  <!-- 骨架屏主体容器，动态叠加 opacity 呼吸动画（skeletonOpacity），overflow='hidden' 裁剪扫光溢出 -->
  <!-- 对应 styles.skeleton：骨架屏底色和尺寸 -->
  <!-- 呼吸动画与扫光联动：扫光亮时骨架暗（opacity≈0.3），扫光走时骨架亮（opacity≈1） -->
  <Animated.View style={[styles.skeleton, style, { opacity: skeletonOpacity }]} onLayout={...}>

    <!-- 扫光层，绝对定位覆盖在骨架上，同时执行 translateX 水平移动 + opacity 渐隐渐显 -->
    <!-- 对应 styles.skeletonShimmer：扫光条宽度与颜色（半透明白色） -->
    <Animated.View style={[styles.skeletonShimmer, { position: 'absolute', transform: [{ translateX }], opacity }]} pointerEvents="none" />

  </Animated.View>
</AnimatedSkeleton>
```
