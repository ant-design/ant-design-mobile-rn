### Abstract DOM Structure

```html
<!-- 最外层容器：toast 模式的遮罩容器 -->
<!-- 对应 styles.container：容器布局样式 -->
<View styles={{ container }}>
  <!-- 内部容器，固定高度，居中内容 -->
  <!-- 对应 styles.innerContainer：内层容器样式 -->
  <View styles={{ innerContainer }}>
    <!-- 内容包装容器，水平排列加载指示器和文本 -->
    <!-- 对应 styles.wrapper：包裹加载器和文字区域 -->
    <View styles={{ wrapper }}>
      <!-- RN 内置的加载指示器 -->
      <ActivityIndicator />
      <!-- toast 模式的提示文字 -->
      <!-- 对应 styles.toast：toast 文字样式 -->
      <Text styles={{ toast }} />
    </View>
  </View>
</View>

<!-- 默认 spinner 模式结构，简化示例 -->
<!-- 最外层容器，水平排列加载指示器和文字 -->
<!-- 对应 styles.spinner：普通模式容器样式 -->
<View styles={{ spinner }}>
  <ActivityIndicator />
  <!-- spinner 模式的提示文字 -->
  <!-- 对应 styles.tip：spinner 文字样式 -->
  <Text styles={{ tip }} />
</View>
```
