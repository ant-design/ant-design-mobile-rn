### Abstract DOM Structure

```html
<!-- 
  Wrapper 组件，包裹tooltip触发子元素
  视觉用途：触发区域容器，包含 children，响应触发事件（如点击）
  不直接对应样式，触发事件由 trigger 控制
-->
<Wrapper>
  <!-- children 触发元素，透传 -->
</Wrapper>

<!-- 
  条件渲染的 tooltip 容器，visible 为 true 时显示
  视觉用途：tooltip 弹出层 主容器
  对应 styles.tooltip：主容器样式，定义布局、背景等
  支持 style 基础属性透传，用于自定义外部 style
-->
<View style={style} styles={{ tooltip }}>

  <!-- 
    箭头容器，渲染 tooltip 指示箭头
    视觉用途：tooltip 箭头，显示方向指示
    对应 styles.arrow：箭头的样式，包含大小颜色和旋转（动态）
    动态样式 keys: arrow（箭头位置样式动态计算）、tooltip_arrow_size（大小相关）
  -->
  <View styles={{ arrow }} />

  <!-- 
    tooltip 内容区域，显示提示文字或自定义内容
    视觉用途：tooltip 主要文本或内容显示区域
    对应 styles.tooltipText：内容文本样式，控制字体颜色、大小等
  -->
  <AntmView styles={{ tooltipText }} />
</View>
```
