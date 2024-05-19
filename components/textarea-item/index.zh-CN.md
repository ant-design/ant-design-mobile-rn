---
category: Components
type: Data Entry
title: TextareaItem
subtitle: 多行输入(归档)
---

> 已停止更新，推荐使用 [components/Input.TextArea](/components/input-cn#inputtextarea)

用于接受多行文本。

### 规则
- 支持通过键盘或者剪切板输入文本。
- 通过光标可以在垂直或者水平方向进行移动。

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| value    | value 值(受控与否参考https://facebook.github.io/react/docs/forms.html)  | String |  无  |
| defaultValue    | 设置初始默认值        | String |  -  |
| placeholder      | placeholder        | String | ''  |
| editable    | 是否可编辑        | bool |  true  |
| disabled    | 是否禁用        | bool |  false  |
| clear      |  是否带清除功能(仅`editable`为`true`,`disabled`为`false`才生效) | bool | false  |
| rows      |   显示几行      | number |   1 |
| count      |  计数功能,兼具最大长度,默认为0,代表不开启计数功能      | number | -  |
| onChange    | change 事件触发的回调函数 | (val: string): void |  -  |
| error       | 报错样式        | bool |  false  |
| onErrorClick       | 点击报错 icon 触发的回调   | (): void |  无  |
| autoHeight       | 高度自适应, autoHeight 和 rows 请二选一    | bool  | false  |
| labelNumber  | 定宽枚举值：`num * @input-label-width: 34px`，可用`2-7`之间的数字，一般(不能保证全部)能对应显示出相应个数的中文文字(不考虑英文字符) | number | `5` |
| last      |  如果是最后一项，则将移除`borderBottom`（默认拥有`borderBottom`）    | bool | false  |

> 更多属性请参考 react-native TextInput (http://facebook.github.io/react-native/docs/textinput.html)

