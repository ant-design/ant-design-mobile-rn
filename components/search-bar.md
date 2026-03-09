# SearchBar

Normally located below NavBar, the activation status is exited by the Cancel button.

### Rules

- Should fill some text in placeholder to remind the user to enter the relevant content, such as: "双11特卖".
- Below the SearchBar, you can provide useful labels copy to help users complete the input directly by clicking, such as: List some of the most recent search keywords.

## Examples

```tsx
import { SearchBar } from '@ant-design/react-native'
import React from 'react'
import { Alert, View } from 'react-native'

export default class SearchBarDemo extends React.Component<any, any> {
  state = {
    value: '美食',
  }

  onChange = (value: any) => {
    this.setState({ value })
  }

  clear = () => {
    this.setState({ value: '' })
  }

  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <SearchBar defaultValue="初始值" placeholder="搜索" />
        <SearchBar
          value={this.state.value}
          placeholder="搜索"
          onSubmit={(value: any) => Alert.alert(value)}
          onCancel={this.clear}
          onChange={this.onChange}
          showCancelButton
        />
      </View>
    )
  }
}
```

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| defaultValue |  the uncontrolled default value    | String |    |
| value      |  the controlled current value  | String |    |
| placeholder    |    placeholder   | String |    |
| onSubmit    |  submit event (click the enter on the keyboard) | (val: string): void |    |
| onChange    |    change event callback     | (val: string): void |    |
| onFocus    |    focus event callback     | (): void |    |
| onBlur    |    blur event callback     | (): void |    |
| onCancel  | Click the `Cancel` button to trigger (The text of the input box is no longer automatically cleared) | (val: string): void |    |
| showCancelButton |  Whether the `Cancel` button is always displayed  | bool |  `false`  |
| cancelText  |  Customize the text of the `Cancel` button   | String |  `取消`  |
| disabled    |   Set disabled  | bool |  `false`  |

Note: RN version more API please refer to [http://facebook.github.io/react-native/docs/textinput.html](http://facebook.github.io/react-native/docs/textinput.html)
