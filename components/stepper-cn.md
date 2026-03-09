# Stepper

用作增加或者减少当前数值。

### 规则
- 当想要对数值进行小幅度调整时，可以使用 Stepper，eg：将年化收益从 4.00% 调整到 4.05%。

## 代码演示

```tsx
import { List, Provider, Stepper, Toast } from '@ant-design/react-native'
import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

export default function StepperExample() {
  return (
    <Provider>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : undefined}>
        <ScrollView>
          <List renderHeader={'基础用法'}>
            <List.Item
              extra={
                <Stepper
                  defaultValue={1}
                  onChange={(value) => {
                    console.log(value)
                  }}
                />
              }>
              基础用法
            </List.Item>
            <List.Item extra={<Stepper step={10} defaultValue={10} />}>
              步长设置
            </List.Item>
            <List.Item extra={<Stepper min={-5} max={5} />}>
              限制输入范围
            </List.Item>
            <List.Item extra={<Stepper digits={1} />}>
              格式化到一位小数
            </List.Item>
            <List.Item
              extra={
                <Stepper
                  defaultValue={93}
                  formatter={(value) => `$ ${value}`}
                  parser={(text) => parseFloat(text.replace('$', ''))}
                  onChange={(value) => {
                    console.log(value, typeof value)
                  }}
                />
              }>
              自定义格式
            </List.Item>
          </List>
          <List renderHeader={'状态/样式'}>
            <List.Item extra={<Stepper disabled />}>禁用状态</List.Item>
            <List.Item extra={<Stepper readOnly />}>输入框只读状态</List.Item>
            <List.Item
              extra={
                <Stepper
                  onFocus={() => {
                    Toast.info('获得焦点')
                  }}
                  onBlur={() => {
                    Toast.info('失去焦点')
                  }}
                />
              }>
              获得/失去焦点
            </List.Item>
            <List.Item
              extra={
                <Stepper
                  allowEmpty={true}
                  min={10}
                  max={20}
                  onChange={(value) => {
                    console.log(value)
                  }}
                />
              }>
              允许清空
            </List.Item>
            <List.Item extra={<Stepper defaultValue={10000} step={10000} />}>
              自定义样式
            </List.Item>
          </List>
          <StringModeExample />
        </ScrollView>
      </KeyboardAvoidingView>
    </Provider>
  )
}

const StringModeExample = () => {
  const [value, setValue] = React.useState('9999999999999999')
  return (
    <List renderHeader={'stringMode'}>
      <List.Item>
        <Stepper
          stringMode
          defaultValue="0.000000000000002"
          step="0.000000000000001"
          onChange={console.log}
          style={{ width: '100%' }}
        />
      </List.Item>
      <List renderHeader={'stringMode control'}>
        <List.Item>
          <Stepper
            stringMode
            value={value}
            step="13579"
            onChange={setValue}
            style={{ width: '100%' }}
          />
        </List.Item>
      </List>
    </List>
  )
}
```

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowEmpty | 是否允许内容为空 | `boolean` | `false` |
| defaultValue | 默认值 | `number \| null` | `0` |
| digits | 格式化到小数点后固定位数，设置为 `0` 表示格式化到整数。配置 `formatter` 时展示会以 `formatter` 为准 | `number` | - | 5.2.1 |
| disabled | 是否禁用步进器 | `boolean` | `false` |
| formatter | 格式化展示数值 | `(value?: number) => string` | - | 5.2.1 |
| inputStyle | TextInput style | `StyleProp<TextStyle>` | - |
| max | 最大值 | `number` | - |
| min | 最小值 | `number` | - |
| minusButtonProps | minus 按钮 props | [TouchableHighlightProps](https://reactnative.dev/docs/touchablehighlight) | `{ activeOpacity:1, underlayColor:'#ddd', children: <Text>-</Text>, delayLongPress:500 }` | 5.2.1 |
| plusButtonProps | plus 按钮 props | [TouchableHighlightProps](https://reactnative.dev/docs/touchablehighlight) | `{ activeOpacity:1, underlayColor:'#ddd', children: <Text>+</Text>, delayLongPress:500 }` | 5.2.1 |
| onChange | 变化时的回调 | `(value: number \| null) => void` | - |
| parser | 将输入解析为对应数字，一般配合 `formatter` 使用 | `(text: string) => number` | - | 5.2.1 |
| step | 每次增加或减少的值，可以为小数 | `number` | `1` |
| stringMode | 字符值模式，开启后支持高精度小数。开启后 `defaultValue`、`value`、`min`、`max`、`onChange` 等都将转换为 `string` 类型 | `boolean` | `false` | 5.2.1 |
| styles | 语义化结构 style | [StepperStyle](#stepperstyle-语义化样式) | - | 5.2.1 |
| value | 当前数，受控值 | `number \| null` | - |

 - `5.2.1`新增。此外还支持 react-native 内置组件 [TextInput](http://facebook.github.io/react-native/docs/textinput.html) 的所有属性，例如：**`readOnly`** **`onFocus`** **`onBlur`** 等。

 - `5.2.1`新增。支持 **长按持续触发** 递加或递减；可自定义执行时机：`plusButtonProps={{ delayLongPress: 500 }}`。

 - 当 `allowEmpty` 为 `true` 时，`onChange` 的 `value` 参数可能会为 **`null`**，在使用时请留意。

### StepperStyle 语义化样式

`5.2.1`重构了样式。

```typescript
export interface StepperStyle extends Partial<InputStyle> {
  // 继承自InputStyle
  container: ViewStyle
  input: ViewStyle
  prefix: ViewStyle // 用于 minus 按钮样式
  suffix: ViewStyle // 用于 plus 按钮样式

  // StepperStyle
  inputDisabled: TextStyle
  stepWrap: ViewStyle // step button wrap
  stepText: TextStyle // step button text
  stepDisabled: ViewStyle // step button disabled
  disabledStepTextColor: TextStyle
}
```

### Ref
同 [components/Input](/components/input-cn#ref) ref
