### Abstract DOM Structure

```html
<!-- 触发弹出层的按钮区域，包含触发区域的自定义样式 -->
<TouchableOpacity style={...}>

  <!-- 触发区域内容，由调用者传入，可自定义 -->
  {children}

</TouchableOpacity>

<!-- 弹出层容器，样式可通过 styles.content 控制弹出层内容区域外观 -->
<View styles={{ content }}>

  <!-- 弹出层指示箭头，样式可通过 styles.arrow 控制箭头外观 -->
  <View styles={{ arrow }}/>

  <!-- 弹出层背景遮罩，样式可通过 styles.background 控制遮罩层视觉 -->
  <View styles={{ background }}/>

  <!-- 弹出层内容区域，包含滚动容器，承载所有弹出项 -->
  <ScrollView>

    <!-- 弹出项示例，多个弹出项为列表形式，这里展示一个代表 -->
    <!-- 
      弹出项可选状态 disabled，支持外部传入样式 style 叠加
      弹出项基础样式由主题 spacing 控制内边距
      点击时触发 onSelect 回调
    -->
    <TouchableOpacity styles={{ /* 基础内边距由 theme.v_spacing_md 控制 */ }} style={...}/>

  </ScrollView>
</View>
```
