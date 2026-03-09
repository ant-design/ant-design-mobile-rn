### Abstract DOM Structure

```html
<!-- 最外层容器，包裹整个多行文本输入
     对应 styles.container：容器整体样式 -->
<View styles={{ container }}>
  <!-- 多行文本输入框，支持多行和自动高度，显示错误时右侧留空隙
       对应 styles.input：文本输入框样式
       对应 style 基础属性：支持外部传入 style 透传 -->
  <TextInput style={[styles.input]} styles={{ input }} />

  <!-- 错误状态提示图标容器，仅在 error 为 true 时渲染
       视觉用途：错误提示图标的容器
       对应 styles.errorIcon：错误图标容器样式 -->
  <TouchableWithoutFeedback>
    <View styles={{ errorIcon }}>
      <!-- Icon 图标组件，显示 info-circle 的错误符号 -->
      <Icon />
    </View>
  </TouchableWithoutFeedback>

  <!-- 输入字数统计容器，仅当 rows > 1 且 count > 0 时渲染
       视觉用途：显示已输入字数/最大字数统计
       对应 styles.count：字数统计容器样式 -->
  <View styles={{ count }}>
    <!-- 用于显示字数文本
         对应 styles.countText：字数文本样式 -->
    <Text styles={{ countText }} />
  </View>
</View>
```
