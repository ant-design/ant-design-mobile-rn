---
category: Components
type: Data Entry
title: InputItem
---

A foundational component for inputting text into the app via a keyboard.

### Rule
- Support text input via keyboard or clipboard.
- The cursor can be moved horizontally.
- Handle text with a specific format, eg: hide password.

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
