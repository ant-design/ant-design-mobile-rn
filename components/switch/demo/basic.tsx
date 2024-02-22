import React from 'react'
import { ScrollView } from 'react-native'
import { Button, Icon, List, Switch, WhiteSpace, WingBlank } from '../../'

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
