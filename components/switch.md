# Switch

Select between two status, e.g. Select On or Off.

### Rules
- This is a **controlled component** that requires an `onChange` callback that updates the `checked` prop in order for the component to reflect user actions. 

## Examples

```tsx
import { Button, Icon, List, Switch, WhiteSpace, WingBlank } from '@ant-design/react-native'
import React from 'react'
import { ScrollView } from 'react-native'

export default class SwitchExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      disabled: true,
      checked: false,
    }
  }

  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    })
  }

  sleep1s = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
  }

  onChangeAsync = async (val: boolean) => {
    await this.sleep1s()
    this.setState({
      checked: val,
    })
  }

  render() {
    return (
      <ScrollView>
        <List renderHeader="基本">
          <List.Item extra={<Switch />}>最简单的用法</List.Item>
        </List>
        <List renderHeader="不可用">
          <List.Item extra={<Switch disabled={this.state.disabled} />}>
            Switch 失效状态
          </List.Item>
          <WhiteSpace />
          <WingBlank>
            <Button type="primary" onPress={this.toggle}>
              Toggle disabled
            </Button>
          </WingBlank>
        </List>
        <List renderHeader="文字和图标">
          <List.Item
            extra={
              <Switch
                checkedChildren="开"
                unCheckedChildren="关"
                defaultChecked
              />
            }
          />
          <List.Item
            extra={<Switch checkedChildren="1" unCheckedChildren="0" />}
          />
          <List.Item
            extra={
              <Switch
                checkedChildren={<Icon name="check" color="white" />}
                unCheckedChildren={<Icon name="close" color="white" />}
                defaultChecked
              />
            }
          />
        </List>
        <List renderHeader="加载中">
          <List.Item extra={<Switch checked loading />}>
            标识开关操作仍在执行中
          </List.Item>
          <List.Item extra={<Switch loading />} />
        </List>
        <List renderHeader="颜色">
          <List.Item extra={<Switch checked color="red" />}>
            color="red"
          </List.Item>
        </List>
        <List renderHeader="异步">
          <List.Item
            extra={
              <Switch
                checked={this.state.checked}
                onChange={this.onChangeAsync}
              />
            }>
            onChange 返回 Promise
          </List.Item>
        </List>
      </ScrollView>
    )
  }
}
```

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| checked    | Whether is checked by default    | Boolean       |   false  |
| defaultChecked | Whether to open initially	 | Boolean   |   false     |
| disabled   | whether is disabled    | Boolean       |   false  |
| loading    | Loading status | Boolean | false |
| onChange   | The callback function when changing, when the Promise is returned, the loading status will be displayed automatically	 | `(val: boolean) => void \| Promise<void>` |  -  |
| color | Background color when the switch is turned on. | String | #4dd865 |
| checkedChildren | Selected content | ReactNode   |   -     |
| unCheckedChildren | Non-selected content | ReactNode   |   -     |
| styles     | Semantic DOM style | [SwitchStyle](#switchstyle-interface) | - |

### SwitchStyle interface

```typescript
interface SwitchStyle {
  switch: ViewStyle
  switch_inner: ViewStyle
  switch_handle: ViewStyle
  switch_checked: ViewStyle
  switch_unchecked: ViewStyle
  switch_inner_checked: ViewStyle
  switch_inner_unchecked: ViewStyle
  switch_handle_checked: ViewStyle
  switch_handle_unchecked: ViewStyle
  switch_checked_disabled: ViewStyle
  switch_unchecked_disabled: ViewStyle
  switch_handle_disabled: ViewStyle
}
```
