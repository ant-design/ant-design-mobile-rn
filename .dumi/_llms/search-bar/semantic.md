### Abstract DOM Structure

```html
<!-- 整体容器，包裹整个搜索栏区域 -->
<View styles={{ wrapper }}>

  <!-- 输入框外层容器，用于输入框布局 -->
  <View styles={{ inputWrapper }}>

    <!-- 文本输入框，支持 style 基础属性透传，用于输入搜索内容 -->
    <TextInput style={...} styles={{ input }} />

  </View>

  <!-- 搜索图标，显示搜索放大镜图标 -->
  <Icon styles={{ search }} />

  <!-- 取消按钮容器，条件渲染，当 showCancelButton 或输入框聚焦时显示 -->
  <View styles={{ cancelTextContainer }}>

    <!-- 取消按钮文字，点击触发取消操作 -->
    <Text styles={{ cancelText }} />

  </View>
</View>
```
