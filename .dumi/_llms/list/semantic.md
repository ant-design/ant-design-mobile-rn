### Abstract DOM Structure

```html
<!-- 整体列表容器区域，包裹整个列表内容 -->
<View styles={{ List }} style={...}>
  <!-- 头部区域，支持自定义内容渲染 -->
  <!-- 对应 styles.Header：列表头部文字样式 -->
  <!-- 只在有 renderHeader 时渲染 -->
  <Text styles={{ Header }} />
  <!-- 列表主体内容区域，包含所有子元素 -->
  <View styles={{ Body }}>
    <!-- 列表条目，代表至少有一个 List.Item -->
    <!-- 一般由 List.Item 负责渲染，这里以占位示例展示 -->
    <View styles={{ Item }}>
      <!-- 左侧缩略图区域 -->
      <Image styles={{ Thumb }} />
      <!-- 内容区，显示主要文本和额外信息 -->
      <View styles={{ Line }}>
        <!-- 主内容文本 -->
        <Text styles={{ Content }} />
        <!-- 额外内容文本 -->
        <Text styles={{ Extra }} />
        <!-- 箭头图标 -->
        <Text styles={{ Arrow }} />
        <!-- 或竖直箭头样式 -->
        <Text styles={{ ArrowV }} />
      </View>
    </View>
    <!-- 列表项支持多行展示时，Thumb 和 Line 的对应样式 -->
    <!-- 对应 styles.multipleThumb, styles.multipleLine -->
    <!-- 根据 multipleLine 动态应用，动态样式 -->
    <!-- 支持 align 属性：修改 Line 中 alignItems 布局 -->
    <!-- Possible styles: multipleLine, multipleThumb (动态), alignStyle (flex-start/flex-end) -->
    <!-- 注意：上述是 List.Item 内部细节，主体只做示意 -->
    <!-- 这里 children 可能为字符串、ReactNode 或数组，内容包裹在 Content 样式内 -->

    <!-- 列表主体底部分割线 -->
    <View styles={{ BodyBottomLine }} />
  </View>
  <!-- 底部区域，支持自定义内容渲染 -->
  <!-- 对应 styles.Footer：列表尾部文字样式 -->
  <!-- 只在有 renderFooter 时渲染 -->
  <Text styles={{ Footer }} />
</View>
```
