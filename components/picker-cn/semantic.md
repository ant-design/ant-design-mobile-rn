## Picker

### Usage Example

```jsx
import {
  Button,
  List,
  Picker,
  PickerValue,
  PickerValueExtend,
  Provider,
} from '@ant-design/react-native'
import { district } from 'antd-mobile-demo-data'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const CustomChildren = (props: any) => (
  <TouchableOpacity onPress={props.onPress}>
    <View
      style={{
        height: 36,
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Text style={{ flex: 1 }}>{props.children}</Text>
      <Text style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>
        {props.extra}
      </Text>
    </View>
  </TouchableOpacity>
)

// visible用法
function BasicDemo() {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState<any[]>([])
  const [extend, setExtend] = useState<any>()
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingLeft: 16,
      }}>
      <Button
        type="primary"
        onPress={() => {
          setVisible(true)
        }}>
        选择
      </Button>

      {/* extend渲染所选值 */}
      <Text>
        {extend?.items?.map((item: any) => item.label).join(',') || ' 未选择'}
      </Text>

      {/* visible控制显示/隐藏 */}
      <Picker
        data={district}
        cols={3}
        onChange={setValue}
        onVisibleChange={(v) => {
          setVisible(v)
        }}
        visible={visible}
        value={value}
        onOk={(v: PickerValue[], ext: PickerValueExtend) => {
          setValue(v)
          setExtend(ext)
        }}
      />
    </View>
  )
}

export default class PopupExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      data: [],
      value: [],
      pickerValue: [],
    }
  }
  onPress = () => {
    setTimeout(() => {
      this.setState({
        data: district,
      })
    }, 500)
  }
  onChange = (value: any) => {
    this.setState({ value })
  }

  render() {
    return (
      <Provider>
        <List renderHeader={'List Children'}>
          <Picker
            data={district}
            cols={3}
            value={this.state.value}
            onChange={this.onChange}>
            <List.Item arrow="horizontal">省市选择</List.Item>
          </Picker>
          <Picker
            data={this.state.data}
            cols={2}
            value={this.state.value}
            onChange={this.onChange}>
            <List.Item arrow="horizontal" onPress={this.onPress}>
              省市选择(异步加载)
            </List.Item>
          </Picker>
          <Picker
            title="选择地区"
            data={district}
            cols={2}
            value={this.state.pickerValue}
            onChange={(v: any) => this.setState({ pickerValue: v })}
            onOk={(v: any) => this.setState({ pickerValue: v })}>
            <CustomChildren>Customized children</CustomChildren>
          </Picker>
        </List>
        <List renderHeader={'visible 控制显示/隐藏'}>
          <BasicDemo />
        </List>
      </Provider>
    )
  }
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { PickerViewStyle } from '../../picker-view/style'
import { Theme } from '../../style'

export interface PickerStyle extends Partial<PickerViewStyle> {
  modal: ViewStyle
  container: ViewStyle
  header: ViewStyle
  headerItem: ViewStyle
  actionText: TextStyle
  title: TextStyle
  okText: TextStyle
  dismissText: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<PickerStyle>({
    modal: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    container: {},
    header: {
      height: theme.picker_header_height,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: theme.border_color_thin,
      backgroundColor: theme.fill_base,
    },
    headerItem: {
      height: theme.picker_header_height,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    actionText: {
      color: theme.brand_primary,
      fontSize: theme.font_size_heading,
      textAlign: 'center',
    },
    okText: {},
    dismissText: {},
    title: {
      color: theme.color_text_caption,
      fontSize: theme.font_size_heading,
      textAlign: 'center',
    },
  })
```

### Abstract DOM Structure

```html
<!-- 整体弹出层容器，包含遮罩层及内容区 -->
<Modal
  styles={{ modal, container }}><!-- 对应 styles.modal：弹出层包装样式（定位、背景遮罩等） -->
                                   <!-- 对应 styles.container：弹出层内容容器（布局与背景） -->

  <!-- 头部区域，包含取消、标题、确定按钮 -->
  <View styles={{ header }}><!-- 对应 styles.header：头部容器布局 -->

    <!-- 取消按钮区域 -->
    <TouchableHighlight styles={{ headerItem }}><!-- 对应 styles.headerItem：按钮位置与尺寸 -->
      <!-- 取消按钮文字 -->
      <Text styles={{ actionText, dismissText }}/><!-- 对应 styles.actionText：按钮文字基础样式 -->
                                           <!-- 对应 styles.dismissText：取消按钮文字差异化样式 -->
    </TouchableHighlight>

    <!-- 标题区域 -->
    <View styles={{ headerItem }}><!-- 对应 styles.headerItem：标题位置与尺寸 -->
      <Text styles={{ title }}/><!-- 对应 styles.title：标题文字样式 -->
    </View>

    <!-- 确定按钮区域 -->
    <TouchableHighlight styles={{ headerItem }}><!-- 对应 styles.headerItem：按钮位置与尺寸 -->
      <!-- 确定按钮文字 -->
      <Text styles={{ actionText, okText }}/><!-- 对应 styles.actionText：按钮文字基础样式 -->
                                        <!-- 对应 styles.okText：确定按钮文字差异化样式 -->
    </TouchableHighlight>
  </View>

  <!-- 选择器视图区域，条件渲染 在弹出层显示时 -->
  <RMCPickerView
    styles={{
      wrappper,
      wheelWrapper,
      itemWrap,
      itemStyle,
      itemActiveStyle,
      mask,
      maskTop,
      maskMiddle,
      maskBottom
    }}
    style={...}><!-- 对应 styles.wrappper：选择器最外层容器 -->
                   <!-- 对应 styles.wheelWrapper：滚轮容器 -->
                   <!-- 对应 styles.itemWrap：单个选择项容器 -->
                   <!-- 对应 styles.itemStyle：普通选项文本样式 -->
                   <!-- 对应 styles.itemActiveStyle：激活状态选项文本样式 -->
                   <!-- 对应 styles.mask：遮罩层总样式 -->
                   <!-- 对应 styles.maskTop：遮罩层上部区域 -->
                   <!-- 对应 styles.maskMiddle：遮罩层中间区域 -->
                   <!-- 对应 styles.maskBottom：遮罩层下部区域 -->
  />
</Modal>

<!-- 触发组件（children），支持函数或 ReactNode -->
<!-- 该节点支持 style 基础属性透传，包含 value、extra、disabled、toggle 事件等 -->
{children}
```
