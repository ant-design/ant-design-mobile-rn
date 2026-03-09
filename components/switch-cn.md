# Switch

在两个互斥对象进行选择，eg：选择开或关。

### 规则
- 这是一个"受控组件"。你必须使用`onChange`回调来更新`checked`属性以响应用户的操作。

## 代码演示

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

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| checked    | 是否默认选中    | Boolean       |   false  |
| defaultChecked | 初始是否打开 | Boolean   |   false     |
| disabled   | 是否不可修改    | Boolean       |   false  |
| loading    | 加载中的开关 | Boolean | false |
| onChange   | 变化时的回调函数，当返回 Promise 时，会自动显示加载状态 | `(val: boolean) => void \| Promise<void>` |  无  |
| color | 开关打开后的颜色 | String | `#4dd865` |
| checkedChildren | 选中时的内容 | ReactNode   |   无     |
| unCheckedChildren | 非选中时的内容 | ReactNode   |   无     |
| styles     | 语义化结构 style | [SwitchStyle](#switchStyle-语义化样式) | - |

### SwitchStyle 语义化样式

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
