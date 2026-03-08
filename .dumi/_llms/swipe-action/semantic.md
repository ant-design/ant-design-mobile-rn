### Abstract DOM Structure

```html
<!-- 滑动操作整体容器，来自 react-native-gesture-handler 的 Swipeable 组件，无法自定义样式 -->
<Swipeable>
  <!-- children 传入的内容，UI主体，非主题样式节点，略 -->

  <!-- 左侧滑动操作按钮容器，根据 RTL 方向切换 flexDirection -->
  <View
    styles={{}}
    style={{
      flexDirection: 'row' /* 或 'row-reverse'（基于 RTL） */
    }}>
    <!-- 左侧单个操作按钮，循环渲染，此处为代表性示例 -->
    <!-- 按钮整体容器，支持位移动画，动态根据滑动进度改变 translateX -->
    <Animated.View
      styles={{}}
      style={{
        transform: [{ translateX: /* 动态，基于 progressAnimatedValue 和布局计算 */ }]
      }}>
      <!-- 操作按钮，支持配置背景色与事件 -->
      <!-- 对应 styles.actionButton：操作按钮容器样式 -->
      <RectButton
        styles={{ actionButton }}
        style={... /* 支持 button.backgroundColor 覆盖背景色 */}
        {...button.actionButtonProps}
      >
        <!-- 操作按钮文本 或 自定义元素 -->
        <!-- 对应 styles.actionText：操作按钮文本样式 -->
        <!-- 对应 style 基础属性：支持通过 button.style 传入文本样式 -->
        <Text
          styles={{ actionText }}
          style={[button.style, button.color ? { color: button.color } : {}]}>
          操作按钮文本
        </Text>
        <!-- 或者如果传入的是 React 元素，即自定义内容，则渲染该元素 -->
      </RectButton>
    </Animated.View>
  </View>

  <!-- 右侧滑动操作按钮容器，与左侧同结构，唯一区别是 flexDirection 默认，及按钮参数不同 -->
  <!-- 同上，循环渲染操作按钮 -->
</Swipeable>
```
