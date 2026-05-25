## Modal

### Usage Example

```jsx
import {
  Button,
  List,
  Modal,
  Provider,
  Switch,
  Toast,
  WhiteSpace,
  WingBlank,
} from '@ant-design/react-native'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

export default class BasicModalExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      visible: false,
      visible1: false,
      visible2: false,
      modalType: 'portal',
    }
  }

  onClose = () => {
    this.setState({
      visible: false,
    })
  }

  onClose1 = () => {
    this.setState({
      visible1: false,
    })
  }

  onClose2 = () => {
    this.setState({
      visible2: false,
    })
  }

  onButtonClick = () => {
    Modal.alert('Title', 'alert content', [
      { text: 'Cancel', onPress: () => console.log('cancel'), style: 'cancel' },
      { text: 'OK', onPress: () => console.log('ok') },
    ])
  }

  onButtonClickPromise = () => {
    Modal.alert('Title', 'promise button', [
      {
        text: 'Cancel',
        onPress: () => {
          Toast.info('onPress promise resolve', 1)
          return new Promise((resolve) => {
            setTimeout(resolve, 1000)
          })
        },
        style: 'cancel',
      },
      {
        text: 'Hold on',
        onPress: () => {
          Toast.info('onPress promise reject', 1)
          return new Promise((_, reject) => {
            setTimeout(reject, 1000)
          })
        },
      },
    ])
  }

  onButtonClick2 = () => {
    Modal.operation([
      { text: '标为未读', onPress: () => console.log('标为未读被点击了') },
      { text: '置顶聊天', onPress: () => console.log('置顶聊天被点击了') },
    ])
  }

  onButtonClick3 = () => {
    Modal.prompt(
      'Login',
      'Pleas input login information',
      (login: any, password: any) =>
        console.log(`login: ${login}, password: ${password}`),
      'login-password',
      '',
      ['Please input name', 'Please input password'],
    )
  }

  onButtonClick4 = () => {
    Modal.prompt(
      'Input password',
      'password message',
      (password: any) => console.log(`password: ${password}`),
      'secure-text',
      'defaultValue',
    )
  }

  onButtonClick5 = () => {
    Modal.prompt(
      'Name',
      'name message',
      (password: any) => console.log(`password: ${password}`),
      'default',
      '',
      ['please input name'],
    )
  }

  onButtonClick6 = () => {
    Modal.operation(
      [
        { text: '标为未读', onPress: () => console.log('标为未读被点击了') },
        { text: '置顶聊天', onPress: () => console.log('置顶聊天被点击了') },
      ],
      () => {
        console.log('返回键点击')
        return false
      },
    )
  }
  render() {
    const footerButtons = [
      { text: 'Cancel', onPress: () => console.log('cancel') },
      { text: 'Ok', onPress: () => console.log('ok') },
    ]
    return (
      <Provider>
        <ScrollView style={{ marginTop: 20 }}>
          <List>
            <List.Item
              extra={
                <Switch
                  style={{ width: 70 }}
                  checked={this.state.modalType === 'modal'}
                  onChange={(val) => {
                    this.setState({ modalType: val ? 'modal' : 'portal' })
                  }}
                  checkedChildren="modal"
                  unCheckedChildren="portal"
                />
              }>
              切换modalType
              <List.Item.Brief>
                `modalType='modal'`时将调用原生Modal{' '}
              </List.Item.Brief>
            </List.Item>
          </List>
          <WingBlank>
            <Button onPress={() => this.setState({ visible: true })}>
              showModal
            </Button>
            <WhiteSpace />
            <Button onPress={() => this.setState({ visible1: true })}>
              transparent:false
            </Button>
            <WhiteSpace />
            <Button onPress={() => this.setState({ visible2: true })}>
              popup
            </Button>
            <WhiteSpace />
            <Button onPress={this.onButtonClick}>Modal.alert</Button>
            <WhiteSpace />
            <Button onPress={this.onButtonClickPromise}>
              Modal.alert (promise)
            </Button>
            <WhiteSpace />
            <Button onPress={this.onButtonClick2}>Modal.opertation</Button>
            <WhiteSpace />
            <Button onPress={this.onButtonClick6}>
              Modal.opertation (onBackHandler)
            </Button>
            <WhiteSpace />
            <Button onPress={this.onButtonClick5}>
              Modal.prompt (default)
            </Button>
            <WhiteSpace />
            <Button onPress={this.onButtonClick3}>
              Modal.prompt (login-password)
            </Button>
            <WhiteSpace />
            <Button onPress={this.onButtonClick4}>
              Modal.prompt (secure-text)
            </Button>
          </WingBlank>
          <Modal
            title="Title"
            transparent
            modalType={this.state.modalType}
            onClose={this.onClose}
            maskClosable
            visible={this.state.visible}
            closable
            footer={footerButtons}>
            <View style={{ paddingVertical: 20 }}>
              <Text style={{ textAlign: 'center' }}>Content...</Text>
              <Text style={{ textAlign: 'center' }}>Content...</Text>
            </View>
            <Button type="primary" onPress={this.onClose}>
              close modal
            </Button>
          </Modal>
          <Modal
            transparent={false}
            modalType={this.state.modalType}
            visible={this.state.visible1}
            animationType="slide-up"
            onClose={this.onClose1}>
            <View style={{ paddingVertical: 220 }}>
              <Text style={{ textAlign: 'center' }}>Content...</Text>
              <Text style={{ textAlign: 'center' }}>Content...</Text>
            </View>
            <Button
              type="primary"
              style={{ marginBottom: 10 }}
              onPress={() => Toast.info('Hello Toast in Modal now works')}>
              {this.state.modalType === 'portal'
                ? 'Hello Toast in Modal now works'
                : "Hello Toast not works when modalType='portal'"}
            </Button>
            <Button type="primary" onPress={this.onClose1}>
              close modal
            </Button>
          </Modal>
          <Modal
            popup
            modalType={this.state.modalType}
            visible={this.state.visible2}
            animationType="slide-up"
            onClose={this.onClose2}>
            <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
              <Text style={{ textAlign: 'center' }}>Content...</Text>
              <Text style={{ textAlign: 'center' }}>Content...</Text>
            </View>
            <Button type="primary" onPress={this.onClose2}>
              close modal
            </Button>
          </Modal>
        </ScrollView>
      </Provider>
    )
  }
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface ModalStyle {
  container: ViewStyle
  wrap: ViewStyle
  popupContainer: ViewStyle
  innerContainer: ViewStyle
  popupSlideUp: ViewStyle
  popupSlideDown: ViewStyle
  footer: ViewStyle
  header: TextStyle
  body: ViewStyle
  maskClosable: ViewStyle
  closeWrap: ViewStyle
  close: TextStyle
  buttonGroupH: ViewStyle
  buttonGroupV: ViewStyle
  buttonWrapH: ViewStyle
  buttonWrapV: ViewStyle
  buttonText: TextStyle
  operationContainer: ViewStyle
  operationBody: ViewStyle
  buttonTextOperation: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<ModalStyle>({
    container: {
      zIndex: theme.modal_zindex,
    },
    wrap: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    popupContainer: {},
    popupSlideUp: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
    popupSlideDown: {},
    innerContainer: {
      borderRadius: theme.radius_md,
      width: 286,
      paddingTop: theme.v_spacing_xl,
      overflow: 'hidden',
      backgroundColor: theme.fill_base,
    },
    footer: {},
    header: {
      fontSize: theme.modal_font_size_heading,
      color: theme.color_text_base,
      textAlign: 'center',
      paddingHorizontal: theme.h_spacing_lg,
    },
    body: {
      paddingTop: 0,
      paddingBottom: theme.v_spacing_lg,
      paddingHorizontal: theme.h_spacing_lg,
    },
    maskClosable: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'transparent',
    },
    closeWrap: {
      position: 'absolute',
      top: theme.v_spacing_xl,
      left: theme.h_spacing_lg,
    },
    close: {
      fontSize: 40,
      fontWeight: '200',
      color: '#bcbcbc',
      lineHeight: 30,
    },
    buttonGroupH: {
      flexGrow: 1,
      flexDirection: 'row',
    },
    buttonGroupV: {
      flexGrow: 1,
      flexDirection: 'column',
    },
    buttonWrapH: {
      height: theme.modal_button_height,
      flexGrow: 1,
      justifyContent: 'center',
      borderColor: theme.border_color_base,
      borderTopWidth: StyleSheet.hairlineWidth,
      borderRightWidth: StyleSheet.hairlineWidth,
      paddingVertical: 11,
    },
    buttonWrapV: {
      flexGrow: 1,
      borderTopWidth: StyleSheet.hairlineWidth,
      borderColor: theme.border_color_base,
      paddingVertical: 11,
    },
    buttonText: {
      textAlign: 'center',
      color: theme.color_link,
      fontSize: theme.modal_button_font_size,
      backgroundColor: 'transparent',
    },
    operationContainer: {
      paddingTop: 0,
    },
    operationBody: {
      paddingBottom: 0,
      paddingHorizontal: 0,
    },
    buttonTextOperation: {
      color: theme.color_text_base,
      textAlign: 'left',
      paddingHorizontal: 15,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 遮罩层容器，屏幕全屏，悬浮遮罩 -->
<View styles={{ container }}>

  <!-- 遮罩层包裹容器 -->
  <View styles={{ wrap }}>
  
    <!-- 遮罩层，点击可关闭遮罩（条件展示，取决于 maskClosable） -->
    <TouchableWithoutFeedback>
      <Animated.View styles={{ maskClosable }}>  <!-- 动态 styles.opacity 用于遮罩显示隐藏动画 -->
        <View styles={{ maskClosable }} />
      </Animated.View>
    </TouchableWithoutFeedback>

    <!-- 弹窗内容容器，支持动画样式（如 slide-up, fade 等） -->
    <Animated.View styles={{ container }}>
    
      <!-- 对话框内容包裹容器，对于popup模式应用：popupContainer、popupSlideUp、popupSlideDown 动态样式 -->
      <View styles={{ innerContainer, popupContainer /* + 动态 popupSlideUp 或 popupSlideDown */ }} style={...}>

        <!-- 头部标题区域，显示标题文本 -->
        <Text styles={{ header }} />

        <!-- 内容区域，包裹 children 视图，支持 body 和 bodyStyle 透传 -->
        <View styles={{ body }} style={...}>
          {children}
        </View>

        <!-- 底部按钮区域，footer区域 -->
        <View styles={{ footer, buttonGroupV or buttonGroupH }}>

          <!-- 按钮列表（示例一个按钮，实际有多个按钮） -->
          <TouchableHighlight>
            <View styles={{ buttonWrapV or buttonWrapH }}>
              <Text styles={{ buttonText or buttonTextOperation }} style={...} />
            </View>
          </TouchableHighlight>
        </View>

        <!-- 关闭按钮区域（条件渲染，当 closable 为 true） -->
        <View styles={{ closeWrap }}>
          <TouchableWithoutFeedback>
            <View>
              <Text styles={{ close }} />
            </View>
          </TouchableWithoutFeedback>
        </View>

      </View>
    </Animated.View>

  </View>
</View>
```
