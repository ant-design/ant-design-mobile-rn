# Input

通过键盘输入内容，是最基础的表单域包装。

### Rule
- 一般用在表单页进行信息的收集，提供文本框、文本域两种类型。
- 组件是布局无关的，可以配合 `List` 组件快速布局；同时内置了 `Form` 组件的联动交互。

## 代码演示

```tsx
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

## API

### Input

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowClear | 可以点击清除图标删除内容 | `boolean` \| `{ clearIcon: ReactNode }` | - |
| defaultValue | 输入框默认内容 | string | - |
| disabled | 是否禁用状态，默认为 false | boolean | false |
| maxLength | 最大长度 | number | - |
| prefix | 带有前缀图标的 input | ReactNode | - |
| showCount | 是否展示字数 | `boolean` \| `{ formatter: (info: { value: string, count: number, maxLength?: number }) => ReactNode }` | false |
| status | 设置校验状态 | 'error' \| 'warning' | - |
| inputStyle | TextInput style | `StyleProp<TextStyle>` | - |
| style  | 容器(container)样式 | `StyleProp<ViewStyle>` | - |
| styles | 语义化结构 style | [InputStyle](#inputstyle-语义化样式) | - |
| suffix | 带有后缀图标的 input | ReactNode | - |
| type | 声明 Input 类型，同原生 [`keyboardType`](https://reactnative.dev/docs/textinput.html#keyboardtype) 属性 | 'text' \| 'number' \|'password' \| KeyboardTypeOptions | `text` |
| value | 输入框内容 | string | - |
| onChange | 输入框内容变化时的回调，额外支持`e.target.value`的返回 | `(e: NativeSyntheticEvent<TextInputChangeEventData>) => void;` | - |

Input 的其他属性和 react-native 内置组件[TextInput](http://facebook.github.io/react-native/docs/textinput.html) 一致。


### Input.TextArea

同 `Input` 属性，外加：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoSize | 自适应内容高度，可设置为 `true` \| `false` 或对象：`{ minRows: 2, maxRows: 6 }` | boolean \| object | false |
| rows | 固定显示几行，`autoSize` 优先级高 | number | 2 |
| styles | 语义化结构 style | [InputStyle](#inputstyle-语义化样式) | - |

### InputStyle 语义化样式

```typescript
interface InputStyle {
  container: ViewStyle // 同 `style` prop 
  input: ViewStyle     // 同 `inputStyle` prop
  clearIcon: ViewStyle
  prefix: ViewStyle | TextStyle
  showCount: TextStyle
  suffix: ViewStyle | TextStyle
  warning: TextStyle
  error: TextStyle
}
```

## Ref
指向 [TextInput](http://facebook.github.io/react-native/docs/textinput.html)

## FAQ

### 在Android平台设置`allowClear`，为什么我点击clearIcon无效？

在 Android 中, 处于编辑状态(`focus`)时 clearIcon 才会出现, 
<br/>且此组件被`ScrollView`包裹时, 设置`ScrollView的keyboardShouldPersistTaps`属性为`handled`或`always`时, 
<br/>icon才会正确响应点击事件

```jsx
<ScrollView keyboardShouldPersistTaps="always">
...
</ScrollView>
```

### 为何 Input 受控时，`value` 可以超过 `maxLength`？

受控时，组件应该按照受控内容展示。以防止在表单组件内使用时显示值和提交值不同的问题。
