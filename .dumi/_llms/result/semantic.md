### Abstract DOM Structure

```html
<!-- 整体结果容器，包含所有结果内容 -->
<!-- 对应 styles.result：结果容器布局 -->
<View style={[styles.result, style]}>

  <!-- 图标区域容器，包裹图片或自定义图标节点 -->
  <!-- 对应 styles.imgWrap：图标容器定位和尺寸 -->
  <View style={styles.imgWrap} />

  <!-- 标题区域容器 -->
  <!-- 对应 styles.title：标题容器布局 -->
  <View style={styles.title}>
    <!-- 标题文本 -->
    <!-- 对应 styles.titleText：标题文字样式 -->
    <Text style={styles.titleText} />
    <!-- 或自定义标题 ReactNode，支持复杂结构 -->
  </View>

  <!-- 信息内容区域容器 -->
  <!-- 对应 styles.message：信息区域布局 -->
  <View style={styles.message}>
    <!-- 信息文本 -->
    <!-- 对应 styles.messageText：信息文字样式 -->
    <Text style={styles.messageText} />
    <!-- 或自定义信息 ReactNode，支持复杂结构 -->
  </View>

  <!-- 按钮区域容器 -->
  <!-- 对应 styles.buttonWrap：按钮容器布局 -->
  <View style={styles.buttonWrap}>
    <!-- 按钮控件，封装 antd-mobile-rn Button 组件 -->
    <!-- 对应 styles.button：按钮样式 -->
    <Button style={styles.button} type={buttonType}></Button>
  </View>

</View>
```
