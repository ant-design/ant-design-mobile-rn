### Abstract DOM Structure

```html
<!-- 容器，包裹整个输入组件区域，对应 styles.container：输入框整体布局样式 -->
<View styles={{ container, style }}>
  <!-- 前缀元素区域（如图标或文字），对应 styles.prefix：前缀区域样式；动态状态样式 statusClassName（styles.error、styles.warning） -->
  <AntmView styles={{ prefix, ...(statusClassName && [statusClassName]) }} />

  <!-- 文字输入框，主要用于用户输入，对应 styles.input：输入框基础样式；动态状态样式 statusClassName（styles.error、styles.warning）；支持外层传入 inputStyle 透传样式 -->
  <TextInput style={styles={{ input, ...(statusClassName && [statusClassName]) }} style={inputStyle} />

  <!-- 清除按钮容器，条件渲染（focus && allowClear && editable && !disabled && innerValue 存在），对应 styles.clearIcon：清除按钮样式 -->
  <TouchableOpacity styles={{ clearIcon }} />

  <!-- 计数文本区域，仅在 showCount 为 true 或对象时展示，对应 styles.showCount：计数文字样式；动态状态样式 statusClassName（styles.error、styles.warning） -->
  <Text styles={{ showCount, ...(statusClassName && [statusClassName]) }} />

  <!-- 后缀元素及状态反馈图标容器，条件渲染（hasFeedback || suffix），对应 styles.suffix：后缀区域样式；动态状态样式 statusClassName（styles.error、styles.warning） -->
  <AntmView styles={{ suffix, ...(statusClassName && [statusClassName]) }} />
  <!-- 反馈图标（如错误、警告图标），条件渲染（hasFeedback） -->
  <!-- feedbackIcon -->
</View>
```
