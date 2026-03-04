### Abstract DOM Structure

```html
<!-- 最外层可点击容器，支持按下高亮效果，控制按钮禁用状态，动态组合应用 size, type, disabled, style 相关样式 -->
<Pressable style={...} styles={{ wrapperStyle, largeRaw, smallRaw, defaultRaw, primaryRaw, ghostRaw, warningRaw,
  defaultDisabledRaw, primaryDisabledRaw, ghostDisabledRaw, warningDisabledRaw }}>
  <!-- 内层遮罩容器，承载按下高亮背景色，动态应用 size, type, underlayColor 和 activeStyle 相关样式，按下时启用 -->
  <View styles={{ underlayStyle, largeUnderlayContainerRaw, smallUnderlayContainerRaw,
    defaultUnderlayContainerRaw, primaryUnderlayContainerRaw, ghostUnderlayContainerRaw, warningUnderlayContainerRaw,
    defaultHighlight, primaryHighlight, ghostHighlight, warningHighlight }} style={...} />
  <!-- 按钮内容容器，布局按钮文本和加载指示器，固定样式 container -->
  <View styles={{ container }}>
    <!-- 条件渲染：加载指示器，按 loading 显示，大小固定，颜色根据按下状态和禁用状态动态计算 -->
    <ActivityIndicator styles={{ indicator }} />
    <!-- 按钮文本容器，动态应用 size, type, disabled, 按下高亮相关文本样式和 activeStyle，承载按钮文字内容 -->
    <AntmView styles={{ rawText, largeRawText, smallRawText, defaultRawText, primaryRawText, ghostRawText, warningRawText,
      defaultDisabledRawText, primaryDisabledRawText, ghostDisabledRawText, warningDisabledRawText,
      defaultHighlightText, primaryHighlightText, ghostHighlightText, warningHighlightText }} style={...} />
  </View>
</Pressable>
```
