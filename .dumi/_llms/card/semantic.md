### Abstract DOM Structure

```html
<!-- 卡片容器，最外层包装视图，容纳头部、主体、底部 -->
<!-- 对应 styles.card：卡片基础容器样式 -->
<!-- 对应 styles.full（动态）：当 full 为 true 时，卡片充满容器 -->
<View styles={{ card, full }} style={...}>
  <!-- 头部区域，包含缩略图、标题及额外内容 -->
  <!-- 对应 styles.headerWrap：头部容器样式 -->
  <View styles={{ headerWrap }} style={...}>
    <!-- 头部标题区，包含缩略图与标题文本 -->
    <!-- 对应 styles.headerTitle：标题容器样式 -->
    <View styles={{ headerTitle }} style={...}>
      <!-- 缩略图区域，图片或自定义节点 -->
      <!-- 对应 styles.headerImage：缩略图图片样式 -->
      <Image styles={{ headerImage }} style={...} />
      <!-- 标题内容区 -->
      <!-- 对应 styles.headerContentWrap：标题内容包装器（当标题为 JSX 元素） -->
      <!-- 对应 styles.headerContent：标题文本样式（当标题为字符串或文本） -->
      <!-- 支持 style 基础属性透传：标题文本容器 -->
      { /* 条件渲染 element: 若 title 是 React元素，渲染 <View styles={{headerContentWrap}} />；否则 <Text styles={{headerContent}} /> */ }
      <View styles={{ headerContentWrap }} style={...} />
      <Text styles={{ headerContent }} style={...} />
    </View>
    <!-- 头部额外内容区域 -->
    <!-- 对应 styles.headerExtraWrap：额外内容包装器（当额外内容为 JSX 元素） -->
    <!-- 对应 styles.headerExtra：额外内容文本样式（当额外内容为文本） -->
    { /* 条件渲染 element: 若 extra 是 React元素，渲染 <View styles={{headerExtraWrap}} />；否则 <Text styles={{headerExtra}} /> */}
    <View styles={{ headerExtraWrap }} style={...} />
    <Text styles={{ headerExtra }} style={...} />
  </View>

  <!-- 主体区域，卡片内容区域 -->
  <!-- 对应 styles.body：主体容器样式 -->
  <!-- 支持 style 基础属性透传：主体内容容器 -->
  <View styles={{ body }} style={...} />

  <!-- 底部区域，包含内容和额外信息 -->
  <!-- 对应 styles.footerWrap：底部容器样式 -->
  <View styles={{ footerWrap }} style={...}>
    <!-- 底部主内容区 -->
    <!-- 对应 styles.footerContent：底部内容文本样式 -->
    { /* 条件渲染 element: 若 content 是 React元素，渲染 <View style={{flex: 1}} />；否则 <Text styles={{footerContent}} /> */}
    <View style={{ flex: 1 }} />
    <Text styles={{ footerContent }} style={...} />
    
    <!-- 底部额外内容区（可选） -->
    <!-- 对应 styles.footerExtra：底部额外文本样式 -->
    { /* 条件渲染：extra 存在时 */}
    { /* 条件渲染 element: 若 extra 是 React元素，渲染 <View style={{flex: 1}} />；否则 <Text styles={{footerExtra}} /> */}
    <View style={{ flex: 1 }} />
    <Text styles={{ footerExtra }} style={...} />
  </View>
</View>
```
