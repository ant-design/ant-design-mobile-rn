# TextareaItem

> This package has been deprecated in `5.2.1`, recommend [components/Input.TextArea](/components/input#inputtextarea)

A foundational component for inputting multi-line text into the app via a keyboard.

### Rule
- Support text input via keyboard or clipboard.
- The cursor can be moved horizontally.

## Examples

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

Properties | Descrition | Type | Default
-----------|------------|------|--------
| value | the value to show for the textarea (see [react doc](https://facebook.github.io/react/docs/forms.html) for more information about controlled component)  | String | |
| defaultValue | provides an initial value that will change when the user starts typing.  | String |  -  |
| placeholder      | the string that will be rendered before text input has been entered. | String | ''  |
| editable    | whether is editable         | bool |  true  |
| disabled    | whether is disabled         | bool |  false  |
| clear       | whether to display the clear icon (it takes effect only if `editable` is `true` and `disabled` is `false`) | bool | false  |
| rows        | sets the number of lines for a textarea     | number |   1 |
| count |  it is used for word count and maxlength, the default is 0 which indicates that word count is turned off. | number | -  |
| onChange    | callback that is called when the textarea's text changes. | (val: string): void |  -  |
| error       | whether to display error         | bool |  false  |
| onErrorClick   | callback that is called when the error icon is clicked   | (): void |    |
| autoHeight | auto adjust height (only use one of `autoHeight` and `rows` properties) | bool  | false  |
| labelNumber  | number of label text, valid value is 2 to 7 | number | `5` |
| last      |  If it is the last item, the `borderBottom` will be removed, the default has `borderBottom`   | bool | false  |

> More available react-native `TextareaItem` API can be found at [react-native TextInput](http://facebook.github.io/react-native/docs/textinput.html)
