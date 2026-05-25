## Switch

### Usage Example

```jsx
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

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface SwitchStyle {
  switch: ViewStyle
  switch_inner: ViewStyle | TextStyle
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

export default (theme: Theme) =>
  StyleSheet.create<SwitchStyle>({
    switch: {
      position: 'relative',
      width: 55,
      height: 31,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 0,
      borderRadius: 31,
    },
    // handle
    switch_handle: {
      position: 'absolute',
      width: 27,
      height: 27,
      borderRadius: 27,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      shadowColor: 'rgb(0, 35, 11)',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 10,
    },
    // inner
    switch_inner: {
      color: '#fff',
      fontSize: 12,
      flex: 1,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: theme.switch_inner_zindex,
    },
    switch_inner_checked: {
      marginLeft: 7,
      marginRight: 27,
    },
    switch_inner_unchecked: {
      marginLeft: 27,
      marginRight: 7,
    },
    // checked
    switch_checked: {
      borderColor: theme.brand_primary,
      backgroundColor: theme.brand_primary,
    },
    switch_unchecked: {
      borderColor: theme.switch_unchecked,
      backgroundColor: theme.switch_unchecked,
    },
    switch_handle_checked: {
      right: 0,
    },
    switch_handle_unchecked: {
      left: 0,
    },
    // disabled
    switch_checked_disabled: {
      borderColor: `${theme.brand_primary}66`,
      backgroundColor: `${theme.brand_primary}66`, // brand_primary的40%透明度
    },
    switch_unchecked_disabled: {
      borderColor: theme.switch_unchecked_disabled,
      backgroundColor: theme.switch_unchecked_disabled,
    },
    switch_handle_disabled: {},
  })
```

### Abstract DOM Structure

```html
<!-- Pressable 外层交互容器，支持开关功能及禁用状态 -->
<Pressable style={undefined}>

  <!-- 开关主体容器，视觉为开关轨道，支持 checked/unchecked/disabled 状态
       对应 styles.switch：开关轨道基础样式
       对应 styles.switch_checked：开关选中状态下轨道样式
       对应 styles.switch_unchecked：开关未选中状态下轨道样式
       对应 styles.switch_checked_disabled：选中且禁用状态轨道样式
       对应 styles.switch_unchecked_disabled：未选中且禁用状态轨道样式
       对应 style 基础属性：支持最小宽度、背景色及边框色透传
  -->
  <View styles={{ switch, switch_checked, switch_unchecked, switch_checked_disabled, switch_unchecked_disabled }} style={...}>

    <!-- 可动画滑块，视觉为开关的“手柄”
         对应 styles.switch_handle：手柄基础样式
         对应 styles.switch_handle_checked：手柄选中状态样式
         对应 styles.switch_handle_unchecked：手柄未选中状态样式
         对应 styles.switch_handle_disabled：手柄禁用状态样式
         对应 style 基础属性：支持背景色透传，动画样式动态计算宽度和位置
    -->
    <Animated.View styles={{ switch_handle, switch_handle_checked, switch_handle_unchecked, switch_handle_disabled }} style={...}>

      <!-- loading 状态下显示的指示器，条件渲染，当 loading 为 true 时显示 -->
      <RNActivityIndicator />

    </Animated.View>

    <!-- 可动画内层容器，视觉为开关轨道中的填充部分，用于显示 checked 和 unchecked 子内容
         对应 styles.switch_inner：内层容器基础样式
         对应 styles.switch_inner_checked：选中状态下内层变化样式
         对应 styles.switch_inner_unchecked：未选中状态下内层变化样式
         对应 style 基础属性：动画 marginLeft 和 marginRight 动态调整位移
    -->
    <AnimatedView styles={{ switch_inner, switch_inner_checked, switch_inner_unchecked }} style={...}>
      
      <!-- 条件渲染，已选中时显示 checkedChildren，否则显示 unCheckedChildren -->
      <!-- 示例：选中的子内容或未选中的子内容 -->

    </AnimatedView>
  </View>
</Pressable>
```
