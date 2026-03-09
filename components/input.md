# Input

Entering content through the keyboard is the most basic form field wrapper.

### Rule
- It is generally used in form pages to collect information, and provides two types of text boxes and text-area boxes.
- The Input component is layout-independent. It can be used with the `List` component for quick layout; it also has built-in linkage interaction with the `Form` component.

## Examples

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

| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| allowClear | If allow to remove input content with clear icon | `boolean` \| `{ clearIcon: ReactNode }` | - |
| defaultValue | The initial input content | string | - |
| disabled | Whether the input is disabled | boolean | false |
| maxLength | The maximum number of characters in Input | number | - |
| prefix | The prefix icon for the Input | ReactNode | - |
| showCount | Whether to show character count | `boolean` \| `{ formatter: (info: { value: string, count: number, maxLength?: number }) => ReactNode }` | false |
| status | Set validation status | 'error' \| 'warning' | - |
| inputStyle | TextInput style | `StyleProp<TextStyle>` | - |
| style  | Container style | `StyleProp<ViewStyle>` | - |
| styles | Semantic DOM style | [InputStyle](#inputstyle-interface) | - |
| suffix | The suffix icon for the Input | ReactNode | - |
| type   | Declare the Input type, the same as the native [keyboardType](http://facebook.github.io/react-native/docs/textinput.html#keyboardtype) attribute | 'text' \| 'number' \| 'password' \| KeyboardTypeOptions | `text` |
| value | The input content value | string | - |
| onChange | Callback when user input, extra return `e.target.value` | `(e: NativeSyntheticEvent<TextInputChangeEventData>) => void;` | - |

The rest of the props of Input are exactly the same as the react-native [TextInput](http://facebook.github.io/react-native/docs/textinput.html).

### Input.TextArea

Same as Input, and more:

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| autoSize | Height auto size feature, can be set to `true` \| `false` or an object `{ minRows: 2, maxRows: 6 }` | boolean \| object | false |
| rows | sets the number of lines for a textarea.	Prioritize`autoSize`  | number | 2 |
| styles | Semantic DOM style | [InputStyle](#inputstyle-interface) | - |

### InputStyle interface

```typescript
interface InputStyle {
  container: ViewStyle // Same as `style` prop
  input: ViewStyle     // Same as `inputStyle` prop
  clearIcon: ViewStyle
  prefix: ViewStyle | TextStyle
  showCount: TextStyle
  suffix: ViewStyle | TextStyle
  warning: TextStyle
  error: TextStyle
}
```

## Ref
Ref to [TextInput](http://facebook.github.io/react-native/docs/textinput.html)

## FAQ

## When setting `allowClear` on the Android platform, why does it not work when I click clearIcon?

In Android, clearIcon will only appear when you are in editing state (`focus`).
<br/>When this component is wrapped by `ScrollView`, set the `keyboardShouldPersistTaps` property to `handled` or `always`, the icon will respond correctly to the click event

```jsx
<ScrollView keyboardShouldPersistTaps="always">
...
</ScrollView>
```

### Why Input in control can make `value` exceed `maxLength`?

When in control, component should show as what it set to avoid submit value not align with store value in Form.
