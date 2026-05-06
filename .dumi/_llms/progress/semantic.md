### Abstract DOM Structure

```html
<!-- 进度条外层容器，负责限制进度条整体宽度和定位 -->
<!-- 对应 styles.progressOuter：外层容器的基础样式，如背景色、尺寸等 -->
<!-- 对应 style 基础属性：支持自定义外层容器样式，如 margin、padding、背景色等 -->
<View style={...}>
  <!-- 进度条填充部分，宽度动态反映进度百分比 -->
  <!-- 对应 styles.progressBar：进度条填充颜色和高度等基础样式 -->
  <!-- 对应 style 基础属性：支持自定义进度条样式，如背景色 -->
  <View style={...} />
  <!-- 当 appearTransition 为 true 时，使用 Animated.View 代替普通 View，实现渐变动画 -->
  <!-- 条件渲染：appearTransition === true 则渲染 Animated.View -->
  <Animated.View style={...} />
</View>
```
