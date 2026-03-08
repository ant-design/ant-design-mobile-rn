### Abstract DOM Structure

```html
<!-- 外层容器，承载所有步骤，行或列布局 -->
<View style={style={{ flexDirection: 'row | column' }}}>
  <!-- StepsItem 列表示例，步骤项为兄弟节点，展示一个代表项 -->
  <!-- 步骤项容器，水平或垂直方向切换，控制头部与内容排列 -->
  <View style={styles={{ flexDirection: 'row | column' }}}>
    <!-- 头部区域，圆形背景，颜色根据状态和尺寸变化 -->
    <!-- 对应 styles.key: head_default_s/l, head_blue_s/l, head_gray_s/l, head_red_s/l，影响头部背景颜色和尺寸 -->
    <View style={styles={head_default_s | head_default_l, head_blue_s | head_blue_l | head_gray_s | head_gray_l | head_red_s | head_red_l}}>
      <!-- 状态图标，完成、等待、错误等表示 -->
      <!-- 对应 styles.key: icon_s, icon_l，控制图标大小和样式 -->
      <Icon style={styles={icon_s | icon_l}} />
      <!-- 或用户传入的自定义 icon -->
    </View>

    <!-- 上方连线 -->
    <!-- 对应 styles.key: tail_default_s/h, tail_blue, tail_gray, tail_last, tail_error，控制连线样式和颜色 -->
    <View style={styles={tail_default_s | tail_default_s_h | tail_blue | tail_gray | tail_last | tail_error}} />

    <!-- 下方连线 -->
    <!-- 同上，对应不同状态的样式，动态切换 -->
    <View style={styles={tail_default_s | tail_default_s_h | tail_blue | tail_gray | tail_last | tail_error}} />
  </View>

  <!-- 内容区域，显示标题和描述 -->
  <!-- 对应 styles.key: content_s, content_s_h, content_l，控制内容容器布局与边距 -->
  <View style={styles={content_s | content_s_h | content_l}}>
    <!-- 标题文本，支持字符串或节点 -->
    <!-- 对应 styles.key: title_s, title_l，控制字体大小、颜色等 -->
    <Text style={styles={title_s | title_l}} />

    <!-- 描述文本，支持字符串或节点 -->
    <!-- 对应 styles.key: description_s, description_l，控制字体大小、颜色等 -->
    <Text style={styles={description_s | description_l}} />
  </View>
</View>
```
