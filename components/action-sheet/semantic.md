## ActionSheet

### Usage Example

```jsx
import { ActionSheet, Button, Provider } from '@ant-design/react-native'
import React from 'react'
import { Platform, Text, View } from 'react-native'

export default class Test extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      clicked: 'none',
      text: '',
    }
  }
  render() {
    return (
      <Provider>
        <View style={{ marginTop: 30 }}>
          <View style={[{ padding: 8 }]}>
            <Button onPress={this.showActionSheet}>showActionSheet</Button>
          </View>
          <Text style={[{ padding: 8 }]}>
            clicked button: {this.state.clicked}
          </Text>
          <View style={[{ padding: 8 }]}>
            <Button onPress={this.showShareActionSheet}>
              showShareActionSheet
            </Button>
          </View>
          <Text style={[{ padding: 8 }]}>{this.state.text}</Text>
        </View>
      </Provider>
    )
  }
  showActionSheet = () => {
    const BUTTONS = [
      'Operation1',
      'Operation2',
      'Operation3',
      'Delete',
      'Cancel',
    ]
    ActionSheet.showActionSheetWithOptions(
      {
        title: 'Title',
        message: 'Description',
        options: BUTTONS,
        cancelButtonIndex: 4,
        destructiveButtonIndex: 3,
      },
      (buttonIndex: any) => {
        this.setState({ clicked: BUTTONS[buttonIndex] })
      },
    )
  }
  showShareActionSheet = () => {
    const opts: any = {
      message: 'Message to go with the shared url',
      title: 'Share Actionsheet',
    }

    if (Platform.OS === 'ios') {
      opts.url = 'https://www.alipay.com/'
      opts.tintColor = '#ff0000'
      opts.excludedActivityTypes = ['com.apple.UIKit.activity.PostToTwitter']
    }

    ActionSheet.showShareActionSheetWithOptions(
      opts,
      (error: any) => alert(error),
      (success: any, method: any) => {
        let text
        if (success) {
          text = `Shared with ${method}`
        } else {
          text = 'Did not share'
        }
        this.setState({ text })
      },
    )
  }
}

export const title = 'ActionSheet'
export const description = 'ActionSheet example'
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface ActionSheetStyle {
  container: ViewStyle
  wrap: ViewStyle
  content: ViewStyle
  mask: ViewStyle
  title: ViewStyle
  titleText: TextStyle
  message: ViewStyle
  btn: ViewStyle
  btnText: TextStyle
  cancelBtn: ViewStyle
  cancelBtnMask: ViewStyle
  destructiveBtn: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<ActionSheetStyle>({
    container: {
      zIndex: theme.action_sheet_zindex,
    },
    wrap: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
    },
    content: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: theme.fill_base,
    },
    mask: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: theme.fill_mask,
    },
    title: {
      flex: 1,
      alignItems: 'center',
      marginTop: theme.h_spacing_lg,
      marginBottom: theme.h_spacing_lg,
    },
    titleText: {
      fontWeight: '500',
      color: theme.color_text_base,
    },
    message: {
      flex: 1,
      alignItems: 'center',
      marginBottom: theme.h_spacing_lg,
      color: theme.color_text_base,
      textAlign: 'center',
    },
    btn: {
      alignItems: 'center',
      justifyContent: 'center',
      height: theme.actionsheet_item_height,
      borderStyle: 'solid',
      borderTopWidth: 1,
      borderTopColor: theme.border_color_base,
    },
    btnText: {
      color: theme.color_text_base,
    },
    cancelBtn: {
      marginTop: theme.v_spacing_md,
      position: 'relative',
    },
    cancelBtnMask: {
      position: 'absolute',
      top: -theme.v_spacing_md,
      left: 0,
      right: 0,
      height: theme.v_spacing_md,
      backgroundColor: theme.fill_grey,
      borderStyle: 'solid',
      borderTopWidth: 1,
      borderTopColor: theme.border_color_base,
    },
    destructiveBtn: {
      color: theme.brand_error,
      fontSize: theme.actionsheet_item_font_size,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 容器区域，整体包裹 ActionSheet，负责布局 -->
<View styles={{ container }}>
  <!-- 弹窗内容区域，Modal 组件对应的内容样式 -->
  <Modal styles={{ content }}>
    <View>
      <!-- 标题区域，显示标题文字，只在配置有 title 时渲染 -->
      <View styles={{ title }}>
        <!-- 标题文字 -->
        <Text styles={{ titleText }} />
      </View>

      <!-- 信息区域，显示附加文字信息，只在配置有 message 时渲染 -->
      <AntmView styles={{ message }} />

      <!-- 选项列表容器，包含多个按钮项 -->
      <View>
        <!-- 以下为 options 列表中的单个项代表，循环渲染 -->

        <!-- 选项容器，支持取消按钮样式条件应用（cancelBtn） -->
        <View styles={{ cancelBtn }}>
          <!-- 按钮触摸区域，支持按钮基础样式 btn -->
          <TouchableHighlight styles={{ btn }} />

          <!-- 按钮文字，基础样式 btnText，销毁按钮样式 destructiveBtn 条件应用 -->
          <Text styles={{ btnText, destructiveBtn }} />

          <!-- 取消按钮遮罩层，条件渲染 -->
          <View styles={{ cancelBtnMask }} />
        </View>
      </View>
    </View>
  </Modal>
</View>
```
