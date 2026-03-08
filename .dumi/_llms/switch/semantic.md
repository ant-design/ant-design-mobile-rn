### Abstract DOM Structure

```html
<!-- Pressable 外层交互容器，支持开关功能及禁用状态 -->
<Pressable style={undefined}>

  <!-- 开关主体容器，视觉为开关轨道，支持 checked/unchecked/disabled 状态
       对应 styles.switch：开关轨道基础样式
       对应 styles.switch_checked：开关选中状态下轨道样式
       对应 styles.switch_unchecked：开关未选中状态下轨道样式
       对应 styles.switch_checked_disabled：选中且禁用状态轨道样式
       对应 styles.switch_unchecked_disabled：未选中且禁用状态轨道样式
       对应 style 基础属性：支持最小宽度、背景色及边框色透传
  -->
  <View styles={{ switch, switch_checked, switch_unchecked, switch_checked_disabled, switch_unchecked_disabled }} style={...}>

    <!-- 可动画滑块，视觉为开关的“手柄”
         对应 styles.switch_handle：手柄基础样式
         对应 styles.switch_handle_checked：手柄选中状态样式
         对应 styles.switch_handle_unchecked：手柄未选中状态样式
         对应 styles.switch_handle_disabled：手柄禁用状态样式
         对应 style 基础属性：支持背景色透传，动画样式动态计算宽度和位置
    -->
    <Animated.View styles={{ switch_handle, switch_handle_checked, switch_handle_unchecked, switch_handle_disabled }} style={...}>

      <!-- loading 状态下显示的指示器，条件渲染，当 loading 为 true 时显示 -->
      <RNActivityIndicator />

    </Animated.View>

    <!-- 可动画内层容器，视觉为开关轨道中的填充部分，用于显示 checked 和 unchecked 子内容
         对应 styles.switch_inner：内层容器基础样式
         对应 styles.switch_inner_checked：选中状态下内层变化样式
         对应 styles.switch_inner_unchecked：未选中状态下内层变化样式
         对应 style 基础属性：动画 marginLeft 和 marginRight 动态调整位移
    -->
    <AnimatedView styles={{ switch_inner, switch_inner_checked, switch_inner_unchecked }} style={...}>
      
      <!-- 条件渲染，已选中时显示 checkedChildren，否则显示 unCheckedChildren -->
      <!-- 示例：选中的子内容或未选中的子内容 -->

    </AnimatedView>
  </View>
</Pressable>
```
