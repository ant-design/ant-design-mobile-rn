### Abstract DOM Structure

```html
<!-- 整体容器，包裹背景、图标、滚动文本和操作区域；对应 styles.container：容器区域样式 -->
<View styles={{ container, background, style }}>
  <!-- 可选图标容器，放置左侧图标；对应 styles.iconWrap：图标包裹区域 -->
  <View styles={{ iconWrap }}>
    <!-- icon 元素，任意 ReactNode -->
  </View>

  <!-- 滚动文本组件，负责滚动字幕效果；对应 styles.marquee：滚动文本容器样式，styles.font：文本字体样式，支持传入 style 透传 -->
  <Marquee style={...} styles={{ font, marquee }} ref={ref}>
    <!-- 滚动文本内容 -->
  </Marquee>

  <!-- 操作区域容器，展示关闭按钮或链接图标；对应 styles.actionWrap：操作区域包裹容器 -->
  <View styles={{ actionWrap }}>
    <!-- 条件渲染节点 -->
    <!-- 当 mode 为 closable 时 -->
    <!-- 关闭按钮文本或自定义操作内容；对应 styles.close：关闭按钮文本样式，styles.font：字体样式 -->
    <Text styles={{ font, close }} />
    <!-- 当 mode 为 link 或有自定义 action 时 -->
    <!-- 链接图标文本或自定义操作内容；对应 styles.link：链接文本样式，styles.font：字体样式 -->
    <Text styles={{ font, link }} />
  </View>
</View>
<!-- 当 mode 非 closable 时，整体外包裹一个点击区域，用于触发 onPress 事件 -->
<TouchableWithoutFeedback>
  <!-- 上述 View 容器作为子节点 -->
</TouchableWithoutFeedback>
```
