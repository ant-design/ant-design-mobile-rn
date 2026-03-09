## InputItem

### Usage Example

```jsx
import { Button, InputItem, List } from '@ant-design/react-native'
import React from 'react'
import { ScrollView, Text } from 'react-native'

declare var jest: any

export default class BasicInputItemExample extends React.Component<any, any> {
  inputRef: any

  constructor(props: any) {
    super(props)
    this.state = {
      value: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      labelnum1: '',
      labelnum2: '',
      labelnum3: '',
      text: '',
      bankCard: '',
      phone: '',
      password: '',
      number: '',
    }
  }

  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}>
        <List renderHeader={'基本'}>
          <InputItem
            clear
            error
            value={this.state.value}
            onChange={(value: any) => {
              this.setState({
                value,
              })
            }}
            extra="元"
            placeholder="有标签">
            输入框
          </InputItem>
          <InputItem
            clear
            value="不可编辑"
            onChange={(value: any) => {
              this.setState({
                value,
              })
            }}
            extra={<Text>元</Text>}
            placeholder="不可编辑"
            editable={false}>
            输入框
          </InputItem>
          <InputItem
            clear
            value="disabled"
            onChange={(value: any) => {
              this.setState({
                value,
              })
            }}
            extra={<Text>元</Text>}
            placeholder="disabled"
            disabled>
            输入框
          </InputItem>
          <InputItem
            clear
            value={this.state.value1}
            onChange={(value: any) => {
              this.setState({
                value1: value,
              })
            }}
            placeholder="无标签"
          />
          <InputItem
            defaultValue="xx"
            clear
            placeholder="自动获取光标"
            autoFocus={
              /* TODO: https://github.com/facebook/jest/issues/3707  */ typeof jest ===
              'undefined'
            }>
            标题
          </InputItem>
          <InputItem
            clear
            placeholder="点击下方按钮该输入框会获取光标"
            ref={(el: any) => (this.inputRef = el)}>
            标题
          </InputItem>
          <List.Item>
            <Button
              onPress={() => {
                this.inputRef.focus()
              }}
              type="primary">
              点击获取光标
            </Button>
          </List.Item>
        </List>
        <List renderHeader={'固定标签字数'}>
          <InputItem
            clear
            value={this.state.labelnum1}
            onChange={(value: any) => {
              this.setState({
                labelnum1: value,
              })
            }}
            labelNumber={2}
            placeholder="两个字标签">
            姓名
          </InputItem>
          <InputItem
            clear
            value={this.state.labelnum2}
            onChange={(value: any) => {
              this.setState({
                labelnum2: value,
              })
            }}
            labelNumber={3}
            placeholder="三个字标签">
            校验码
          </InputItem>
          <InputItem
            clear
            value={this.state.labelnum3}
            onChange={(value: any) => {
              this.setState({
                labelnum3: value,
              })
            }}
            labelNumber={4}
            placeholder="四个字标签（默认）">
            四字标签
          </InputItem>
        </List>
        <List renderHeader={'格式'}>
          <InputItem
            clear
            error
            value={this.state.text}
            onChange={(value: any) => {
              this.setState({
                text: value,
              })
            }}
            placeholder="text">
            文本输入
          </InputItem>
          <InputItem
            clear
            type="bankCard"
            value={this.state.bankcard}
            onChange={(value: any) => {
              this.setState({
                bankcard: value,
              })
            }}
            placeholder="bankCard">
            银行卡
          </InputItem>
          <InputItem
            clear
            type="phone"
            value={this.state.phone}
            onChange={(value: any) => {
              this.setState({
                phone: value,
              })
            }}
            placeholder="phone">
            手机号
          </InputItem>
          <InputItem
            clear
            type="password"
            value={this.state.password}
            onChange={(value: any) => {
              this.setState({
                password: value,
              })
            }}
            placeholder="password">
            密码
          </InputItem>
          <InputItem
            clear
            type="number"
            value={this.state.number}
            onChange={(value: any) => {
              this.setState({
                number: value,
              })
            }}
            placeholder="number">
            数字
          </InputItem>
        </List>
      </ScrollView>
    )
  }
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'
export interface InputItemStyle {
  container: ViewStyle
  text: TextStyle
  input: TextStyle
  inputDisabled: TextStyle
  inputErrorColor: TextStyle
  clear: ViewStyle
  extra: TextStyle
  errorIcon: ViewStyle
}
export default (theme: Theme) =>
  StyleSheet.create<InputItemStyle>({
    container: {
      height: theme.list_item_height + theme.border_width_sm,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: theme.border_color_base,
      marginLeft: theme.h_spacing_lg,
      paddingRight: theme.h_spacing_lg,
      marginTop: 0,
      marginBottom: 0,
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      marginRight: theme.h_spacing_sm,
      textAlignVertical: 'center',
      fontSize: theme.font_size_heading,
      color: theme.color_text_base,
    },
    input: {
      flex: 1,
      // height: theme.list_item_height,
      backgroundColor: 'transparent',
      fontSize: theme.font_size_heading,
      color: theme.color_text_base,
    },
    inputDisabled: {
      backgroundColor: theme.fill_disabled,
      color: theme.color_text_disabled,
    },
    inputErrorColor: {
      color: '#f50',
    },
    clear: {
      backgroundColor: theme.color_icon_base,
      borderRadius: 15,
      padding: 2,
    },
    extra: {
      marginLeft: theme.h_spacing_sm,
      fontSize: theme.font_size_subhead,
      color: theme.color_text_caption,
    },
    errorIcon: {
      marginLeft: theme.h_spacing_sm,
      width: theme.icon_size_sm,
      height: theme.icon_size_sm,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 输入项容器，包裹所有输入相关内容 -->
<!-- 对应 styles.container：容器整体样式，包含边框样式 -->
<View styles={{ container }}>
  <!-- 左侧标签文字区域（如果 children 是字符串） -->
  <!-- 对应 styles.text：标签文本样式，宽度可根据 labelNumber 变量调整 -->
  <!-- 如果 children 是 ReactNode 非字符串，则用 View 包裹，支持自定义内容 -->
  <Text styles={{ text }} />
  <!-- 或者 -->
  <View style={{ /* textStyle 宽度 */ }}></View>

  <!-- 用户输入框 -->
  <!-- 对应 styles.input：输入框文本样式 -->
  <!-- 可能同时叠加样式：styles.inputErrorColor (错误状态)、styles.inputDisabled (禁用状态) -->
  <!-- 支持自定义 style 基础属性透传（由 style 传入） -->
  <Input style={...} styles={{ input, inputErrorColor, inputDisabled }} />

  <!-- 安卓平台下，编辑状态且有输入值时的清除按钮（条件渲染） -->
  <!-- 对应 styles.clear：清除按钮区域样式 -->
  <TouchableOpacity styles={{ clear }} />

  <!-- 右侧额外附加内容区域 -->
  <!-- 对应 styles.extra：额外说明文字样式 -->
  <!-- 可能内容为字符串（Text）或 JSX 节点 -->
  <TouchableWithoutFeedback>
    <View>
      <Text styles={{ extra }} />
      <!-- 或任意 ReactNode -->
    </View>
  </TouchableWithoutFeedback>

  <!-- 错误状态下的错误图标 -->
  <!-- 对应 styles.errorIcon：错误图标容器样式 -->
  <TouchableWithoutFeedback>
    <View styles={{ errorIcon }}>
      <Icon />
    </View>
  </TouchableWithoutFeedback>
</View>
```
