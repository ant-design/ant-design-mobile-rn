## Input

### Usage Example

```jsx
import { Input, List } from '@ant-design/react-native'
import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

export default function InputExample() {
  const [value, setValue] = React.useState('')
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : undefined}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <List renderHeader="基本用法">
          <List.Item>
            <Input placeholder="请输入内容" />
          </List.Item>
        </List>
        <List renderHeader="受控模式">
          <List.Item>
            <Input
              placeholder="请输入内容"
              value={value}
              onChangeText={setValue}
            />
          </List.Item>
        </List>
        <List renderHeader="带清除按钮">
          <List.Item>
            <Input allowClear placeholder="allowClear" />
          </List.Item>
        </List>
        <List renderHeader="前缀和后缀">
          <List.Item>
            <Input prefix="前缀" suffix="后缀" placeholder="prefix / suffix" />
          </List.Item>
        </List>
        <List renderHeader="带字数提示">
          <List.Item>
            <Input showCount placeholder="showCount" />
          </List.Item>
          <List.Item>
            <Input
              maxLength={5}
              showCount={{
                formatter: ({ count, maxLength }) => `${count}/${maxLength}`,
              }}
              placeholder="showCount.formatter"
            />
          </List.Item>
        </List>
        <List renderHeader="TextArea">
          <List.Item>
            <Input.TextArea
              rows={4}
              maxLength={100}
              showCount
              allowClear
              placeholder="固定行数 row={4}"
            />
          </List.Item>
        </List>
        <List renderHeader="根据内容自动调整高度">
          <List.Item>
            <Input.TextArea autoSize placeholder="autoSize={true}" />
          </List.Item>
          <List.Item>
            <Input.TextArea
              autoSize={{ minRows: 2, maxRows: 6 }}
              placeholder="autoSize={{ minRows: 2, maxRows: 6 }}"
            />
          </List.Item>
        </List>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'
export interface InputStyle {
  container: ViewStyle
  input: ViewStyle
  clearIcon: ViewStyle
  prefix: ViewStyle | TextStyle
  showCount: TextStyle
  suffix: ViewStyle | TextStyle
  warning: TextStyle
  error: TextStyle
}
export default (theme: Theme) =>
  StyleSheet.create<InputStyle>({
    container: {
      width: '100%',
      maxWidth: '100%',
      maxHeight: '100%',
      minHeight: 24,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
    },
    input: {
      flex: 1,
      overflow: 'hidden',
      width: '100%',
      maxWidth: '100%',
      maxHeight: '100%',
      minHeight: 24,
      fontSize: theme.font_size_heading,
      color: theme.color_text_base,
      paddingVertical: theme.prefix_padding,
      textAlignVertical: 'center',
      includeFontPadding: true,
    },
    clearIcon: {
      backgroundColor: 'rgba(0,0,0,0.2)',
      borderRadius: 15,
      padding: 2,
      marginLeft: theme.prefix_padding,
    },
    prefix: {
      fontSize: theme.font_size_heading,
      color: theme.color_text_base,
      marginRight: theme.prefix_padding,
    },
    showCount: {
      fontSize: theme.font_size_heading,
      color: theme.color_text_placeholder,
      paddingLeft: theme.prefix_padding,
    },
    suffix: {
      fontSize: theme.font_size_heading,
      color: theme.color_text_base,
      marginLeft: theme.prefix_padding,
    },
    warning: {
      color: theme.brand_warning,
    },
    error: {
      color: theme.brand_error,
    },
  })
```

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
