### Abstract DOM Structure

```html
<!-- 最外层触摸区域容器，用户交互区域，对应 styles.checkbox_wrapper：容器总体样式，支持 style 基础属性透传 -->
<Pressable style={styles={{ checkbox_wrapper } } } style={...}>

  <!-- 波纹效果容器区域，对应 styles.checkbox_wave：波纹动画外层 -->
  <View styles={{ checkbox_wave }}>

    <!-- 复选框主节点，根据选中及禁用状态切换边框和背景色，对应 styles.checkbox, checkbox_checked, checkbox_disabled（动态） -->
    <View styles={{ checkbox, checkbox_checked, checkbox_disabled }}>

      <!-- 复选框内部标记区域，承载勾选或 indeterminate 标记，对应 styles.checkbox_inner, checkbox_inner_disabled, checkbox_inner_indeterminate（动态） -->
      <Animated.View styles={{ checkbox_inner, checkbox_inner_disabled, checkbox_inner_indeterminate }} />

      <!-- 复选框内部前置图形，承载勾选动画或 indeterminate 线条，对应 styles.checkbox_inner_before, checkbox_inner_before_disabled, checkbox_inner_before_indeterminate（动态） -->
      <Animated.View styles={{ checkbox_inner_before, checkbox_inner_before_disabled, checkbox_inner_before_indeterminate }} />

    </View>
  </View>

  <!-- 复选框文本标签区域，对应 styles.checkbox_label, checkbox_label_disabled（动态） -->
  <AntmView styles={{ checkbox_label, checkbox_label_disabled }} />

</Pressable>
```
