---
category: Components
type: Data Entry
title: InputItem
subtitle: 文本输入(归档)
---

> `5.2.1` 已停止更新，推荐使用 [components/Input](/components/input-cn)

用于接受单行文本。

### 规则
- 支持通过键盘或者剪切板输入文本。
- 通过光标可以在水平方向进行移动。
- 对特定格式的文本进行处理，eg：隐藏密码。

## API

**`InputItem` 必须用 [List](https://mobile.ant.design/components/list) 组件包裹才能正常使用**

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    | 可以是银行卡`bankCard`; 手机号`phone`(此时最大长度固定为11,`maxLength`设置无效); 密码`password`; 数字`number`(为了尽量唤起`带小数点`的数字键盘，此类型并不是原生 number，而是`<input type="text" pattern="[0-9]*" />`); `digit`(表示原生的 number 类型); 以及其他标准 input type 类型 | String |  `text`  |
| value    | value 值(受控与否参考https://facebook.github.io/react/docs/forms.html)  | String |  无  |
| defaultValue    | 设置初始默认值        | String |  -  |
| placeholder      | placeholder        | String | ''  |
| editable    | 是否可编辑        | bool |  true  |
| disabled    | 是否禁用        | bool |  true  |
| clear      |  是否带清除功能(仅`editable`为`true`,`disabled`为`false`才生效)。在 Android 中, 处于编辑状态(focus)时 icon 才会出现, 且此组件被`ScrollView`包裹时, 设置`ScrollView`的`keyboardShouldPersistTaps`属性为`handled`或`always`时, icon才会正确响应点击事件 | bool | false  |
| maxLength      |  最大长度      | number |  无  |
| onChange    | change 事件触发的回调函数 | (val: string): void |  -  |
| onBlur     | blur 事件触发的回调函数 | (val: string): void |   -  |
| onFocus    | focus 事件触发的回调函数 | (val: string): void |  -  |
| error       | 报错样式        | bool |  false  |
| onErrorClick       | 点击报错 icon 触发的回调函数  | (e: Object): void |  无  |
| extra       | 右边注释   | string or node |  ''  |
| onExtraClick      | extra 点击事件触发的回调函数 | (e: Object): void |  无  |
| onVirtualKeyboardConfirm | 虚拟键盘点击确认时的回调函数 | (val: string): void |  无  |
| labelNumber  | 标签的文字个数，可用`2-7`之间的数字 | number | `5` |
| locale   | 国际化，可覆盖全局`[LocaleProvider](https://mobile.ant.design/components/locale-provider)`的配置, 当`type`为`money`，可以自定义确认按钮的文案。 | Object: { confirmLabel } |  无 |
| last      |  如果是最后一项，则将移除`borderBottom`（默认拥有`borderBottom`）    | bool | false  |

> 更多 react-native `InputItem` 属性请参考 react-native TextInput (http://facebook.github.io/react-native/docs/textinput.html)

> 注意: `InputItem` 当 `type=number` 时不支持输入负号, 你可以利用 `type=text` 来自己实现。

## InputItem methods

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| focus    | 使 input 聚焦  | (): void |  -  |
