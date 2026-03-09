# Stepper

`Stepper` can be used to increase or decrease value step by step.

### Rule
- When you want to make small adjustments to the value, you can use `Stepper`. eg: Adjust the annual return from 4.00% to 4.05%.

## Examples

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

| Name | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| allowEmpty | Whether to allow empty content. | `boolean` | `false` |
| defaultValue | Default value | `number \| null` | `0` |
| digits | Format to a fixed number of digits after the decimal point, set to `0` means format to integer. Will use `formatter` as display value when configured | `number` | - | 5.2.1 |
| disabled | Whether to disabled Stepper | `boolean` | `false` |
| formatter | Format value in input | `(value?: number) => string` | - | 5.2.1 |
| inputStyle | TextInput style | `StyleProp<TextStyle>` | - |
| max | Max value | `number` | - |
| min | Min value | `number` | - |
| minusButtonProps | The minus button props | [TouchableHighlightProps](https://reactnative.dev/docs/touchablehighlight) | `{ activeOpacity:1, underlayColor:'#ddd', children: <Text>-</Text>, delayLongPress:500  }` | 5.2.1 |
| plusButtonProps | The plus button props | [TouchableHighlightProps](https://reactnative.dev/docs/touchablehighlight) | `{ activeOpacity:1, underlayColor:'#ddd', children: <Text>+</Text>, delayLongPress:500  }` | 5.2.1 |
| onChange | Callback when value is changed | `(value: number \| null) => void` | - |
| parser | Parse input text into number which should work with `formatter` | `(text: string) => number` | - | 5.2.1 |
| step | The value to increase or decrease each time, can be a decimal | `number` | `1` |
| stringMode | Set value as string to support high precision decimals. Will set `defaultValue`,`value`, `min`, `max`, `onChange` to `string` type | `boolean` | `false` | 5.2.1 |
| styles | Semantic DOM style | [StepperStyle](#stepperstyle-interface) | - | 5.2.1 |
| value | Current number, controlled value | `number \| null` | - |

 - New in `5.2.1`. In addition, all properties of react-native [TextInput](http://facebook.github.io/react-native/docs/textinput.html) are supported, eg: **`readOnly`** **`onFocus`** **`onBlur`**

 - New in `5.2.1`. Support **Long Press To Trigger** increment or decrement; customizable execution timing: `plusButtonProps={{ delayLongPress: 500 }}`.

 - When `allowEmpty` is `true`, the `value` parameter of `onChange` may be **`null`**, please pay attention when using it.

### StepperStyle interface

`5.2.1`refactored the styles

```typescript
export interface StepperStyle extends Partial<InputStyle> {
  // extends InputStyle
  container: ViewStyle
  input: ViewStyle
  prefix: ViewStyle // for minus button
  suffix: ViewStyle // for plus button

  // StepperStyle
  inputDisabled: TextStyle
  stepWrap: ViewStyle // step button wrap
  stepText: TextStyle // step button text
  stepDisabled: ViewStyle // step button disabled
  disabledStepTextColor: TextStyle
}
```

## Ref
Same as [component/Input](/components/input#ref)
