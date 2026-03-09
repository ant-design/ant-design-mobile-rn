# InputItem

> This package has been deprecated in `5.2.1`, recommend [components/Input](/components/input)

A foundational component for inputting text into the app via a keyboard.

### Rule
- Support text input via keyboard or clipboard.
- The cursor can be moved horizontally.
- Handle text with a specific format, eg: hide password.

## Examples

```tsx
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

## API

**`InputItem` must wrapped by a [List](https://mobile.ant.design/components/list)**

Properties | Description | Type | Default
-----------|------------|------|--------
| type    | can be `bankCard`; `phone`(which the maxLength is 11 and setting will be ignored); `password`; `number`(in order to evoke the 'numeric keyboard with decimal', this type is not a native number, but `<input type="text" pattern="[0-9]*"/>`); `digit`(represent the native type number); As well as other standard html input type values. | String |  `text`  |
| value | the value of input (see [react doc](https://facebook.github.io/react/docs/forms.html) for more information about controled component)  | String | |
| defaultValue | provides an initial value that will change when the user starts typing. | String |  -  |
| placeholder  | the string that will be rendered before text input has been entered. | String | ''  |
| editable    | whether is editable        | bool |  true  |
| disabled    | whether is disabled        | bool |  true  |
| clear      |  whether to display clear(it takes effect only `editable` is `true` and `disabled` is `false` has been set) | bool | false  |
| maxLength      |  limits the maximum number of characters that can be entered      | number |    |
| onChange    | callback that is called when the text input's text changes | (val: string): void |  -  |
| onBlur     | callback that is called when the text input is blurred | (val: string): void |   -  |
| onFocus    | callback that is called when the text input is focused | (val: string): void |  -  |
| error       | whether to display error       | bool |  false  |
| onErrorClick   | callback that is called when the error icon is clicked  | (e: Object): void |   |
| extra       | the right content of `InputItem`   | string or node |  ''  |
| onExtraClick      | callback that is called when the extra content is clicked | (e: Object): void |  |
| onVirtualKeyboardConfirm | callback that is called when "confirm" button of virtual keyboard is clicked | (val: string): void |  |
| labelNumber  | number of label text, valid value is 2 to 7 | number | `5` |
| locale   | 国际化，可覆盖全局`[LocaleProvider](https://mobile.ant.design/components/locale-provider)`的配置,  when`type`is`money`，can cunstom the keyboard confirm item's label | Object: { confirmLabel } |  无 |
| last      |  If it is the last item, the `borderBottom` will be removed, the default has `borderBottom`   | bool | false  |

> More available react-native `InputItem` API can be found at [react-native TextInput](http://facebook.github.io/react-native/docs/textinput.html)

> Note: `InputItem` does not support negative number if `type` is text, you can use `type=text` to do that.

## InputItem Instance methods

Property | Description | Type | Default
----|-----|------|------
| focus    | Force focus back onto the input node  | (): void |  -  |
