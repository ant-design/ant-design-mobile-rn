# TextareaItem

> 已停止更新，推荐使用 [components/Input.TextArea](/components/input-cn#inputtextarea)

用于接受多行文本。

### 规则
- 支持通过键盘或者剪切板输入文本。
- 通过光标可以在垂直或者水平方向进行移动。

## 代码演示

```tsx
import { List, TextareaItem, Toast } from '@ant-design/react-native'
import React from 'react'
import { ScrollView } from 'react-native'

export default class BasicTextAreaItemExample extends React.Component<
  any,
  any
> {
  constructor(props: any) {
    super(props)
    this.state = {
      val: '默认带value',
    }
  }

  onChange = (val: any) => {
    // console.log(val);
    this.setState({ val })
  }

  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <List renderHeader={'基本'}>
          <TextareaItem rows={4} placeholder="固定行数" />

          <TextareaItem rows={4} placeholder="多行带计数" count={100} />

          <TextareaItem
            rows={4}
            placeholder="高度自适应"
            autoHeight
            style={{ paddingVertical: 5 }}
          />

          <TextareaItem value={this.state.val} onChange={this.onChange} />

          <TextareaItem value="不可编辑 editable = {false}" editable={false} />

          <TextareaItem clear={false} placeholder="不显示清除按钮" />

          <TextareaItem
            error
            defaultValue="报错样式 error={true}"
            onErrorClick={() => Toast.fail('Error message')}
          />
        </List>
      </ScrollView>
    )
  }
}
```

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
