---
category: Components
type: Data Entry
title: Stepper
---

`Stepper` can be used to increase or decrease value step by step.

### Rule
- When you want to make small adjustments to the value, you can use `Stepper`. eg: Adjust the annual return from 4.00% to 4.05%.

## API

| Name | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| allowEmpty | Whether to allow empty content. | `boolean` | `false` |
| defaultValue | Default value | `number \| null` | `0` |
| digits | Format to a fixed number of digits after the decimal point, set to `0` means format to integer. Will use `formatter` as display value when configured | `number` | - | 5.2.0 |
| disabled | Whether to disabled Stepper | `boolean` | `false` |
| formatter | Format value in input | `(value?: number) => string` | - | 5.2.0 |
| inputStyle | TextInput style | `StyleProp<TextStyle>` | - |
| inputReadOnly | Whether input readonly or not | `boolean` | `false` |
| max | Max value | `number` | - |
| min | Min value | `number` | - |
| onBlur | Triggered when the input lose focus | `(e: React.FocusEvent<HTMLInputElement>) => void` | - |
| onChange | Callback when value is changed | `(value: number \| null) => void` | - |
| onFocus | Triggered when the input get focus | `(e: React.FocusEvent<HTMLInputElement>) => void` | - |
| parser | Parse input text into number which should work with `formatter` | `(text: string) => number` | - | 5.2.0 |
| step | The value to increase or decrease each time, can be a decimal | `number` | `1` |
| stringMode | Set value as string to support high precision decimals. Will set `defaultValue`,`value`, `min`, `max`, `onChange` to `string` type | `boolean` | `false` | 5.2.0 |
| value | Current number, controlled value | `number \| null` | - |

New in `5.2.0`. In addition, all properties of react-native [TextInput](http://facebook.github.io/react-native/docs/textinput.html) are supported, eg: `readOnly`

When `allowEmpty` is `true`, the `value` parameter of `onChange` may be `null`, please pay attention when using it.

## Ref
Same as [Input](/components/input#ref)