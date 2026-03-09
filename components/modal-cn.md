# Modal

用作显示系统的重要信息，并请求用户进行操作反馈，eg：删除某个重要内容时，弹出 Modal 进行二次确认。

### 规则
- 尽可能少用。Modal 会打断用户操作，只用在重要的时候。
- 标题应该简明，不能超过 1 行；描述内容应该简明、完整，一般不多于 2 行。
- 操作按钮最多到 3 个（竖排），一般为 1-2 个（横排）；3 个以上建议使用组件 ActionSheet 来完成。
- 一般将用户最可能点击的按钮，放在右侧。另外，取消按钮应当始终放在左侧。

## 代码演示

```tsx
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

## API

### Modal

属性 | 说明 | 类型 | 默认值 | 版本 |
----|-----|------|-------|------|
| visible | 对话框是否可见 | Boolean | false | |
| closable | 是否显示关闭按钮 | Boolean | false | |
| maskClosable | 点击蒙层是否允许关闭 | Boolean | true | |
| onClose | 点击 x 或 mask 回调 | (): void | 无 | |
| transparent | 是否背景透明 | Boolean | false | |
| popup | 是否弹窗模式 | Boolean | false | |
| animationDuration | 动画持续时间，单位ms | Number | 300 | `5.3.0` |
| animationType | 可选: 'fade' / 'slide' | String | fade | |
| modalType | 弹窗的类型，<br/>为`'portal'`时则从`<Provider />`根节点插入(默认)，<br/>为`'modal'`时则同[`react-native/Modal`](https://reactnative.dev/docs/modal)(用于获取当前context)，<br/>为`'view'`时则同`react-native/View`(用于弹窗中嵌套弹窗) | `'portal'`\| `'modal'` \| `'view'` | `'portal'` | `5.3.0` |
| title | 标题 | React.Element | 无 | |
| footer | 底部内容 | Array [{text, onPress}] | [] | |
| onRequestClose | `onRequestClose`回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。返回true时会在 modal 处于开启状态时阻止`BackHandler`事件。| (): boolean | false | |
| style | 样式，同`styles.innerContainer` | `ViewStyle` | - | |
| styles | 语义化结构 style | [ModalStyle](#modalstyle-语义化样式) | - | |

### ModalStyle 语义化样式

```typescript
interface ModalStyle {
  container: ViewStyle      // 设置了`z-index`
  wrap: ViewStyle           // 设置了modal的flex布局，默认： `{justifyContent: 'center',alignItems: 'center'}`
  innerContainer: ViewStyle // modal主要内容区域, 默认：`{ width:286 }`

  // modal内容组成的各个元素样式
  footer: ViewStyle
  header: TextStyle
  body: ViewStyle
  closeWrap: ViewStyle
  close: TextStyle
  buttonGroupH: ViewStyle
  buttonGroupV: ViewStyle
  buttonWrapH: ViewStyle
  buttonWrapV: ViewStyle
  buttonText: TextStyle

  // popup
  popupContainer: ViewStyle
  popupSlideUp: ViewStyle
  popupSlideDown: ViewStyle

  // operation
  operationContainer: ViewStyle
  operationBody: ViewStyle
  buttonTextOperation: TextStyle
}
```

### Modal.useModal()

`5.3.0`新增。当你需要使用 Context 时，可以通过 `Modal.useModal` 创建一个 `contextHolder` 插入子节点中。通过 hooks 创建的临时 Modal 将会得到 `contextHolder` 所在位置的所有上下文。创建的 `modal` 对象拥有与 [`Modal.method`](#静态方法) 静态方法相同的创建通知方法。

```jsx
const [modal, contextHolder] = Modal.useModal();

React.useEffect(() => {
  modal.confirm(
    // ...
  );
}, []);

return <View>{contextHolder}</View>;
```

## 静态方法
### Modal.alert(title, message, actions?, platform?)

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| title | 标题  | String 或 React.Element | 无  |
| message  | 提示信息  | String 或 React.Element  | 无  |
| actions | 按钮组, [{text, onPress, style}] | Array | 无  |
| onBackHandler | 返回键的回调(非必须)，返回true则关闭modal，false阻止modal关闭| (): boolean | 无 | 

### Modal.prompt(title, message, callbackOrActions, type?, defaultValue?, placeholders?, platform?)

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| title | 标题  | String 或 React.Element | 无  |
| message  | 提示信息  | String 或 React.Element  | 无  |
| callbackOrActions  | 按钮组 [{text, onPress}] 或回调函数  | Array or Function | 无  |
| type | prompt 的样式 | String (`default`, `secure-text`, `login-password`)|  `default`  |
| defaultValue | 默认值(input 为 password 类型不支持) | String | -  |
| placeholders | ['', '']  | String[] | -  |
| onBackHandler | 返回键的回调(非必须)，返回true则关闭modal，false阻止modal关闭| (): boolean | 无 | 

### Modal.operation(actions?, onBackHandler?)

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| actions | 按钮组, [{text, onPress, style}] | Array | 无  |
| onBackHandler | 返回键的回调(非必须)，返回true则关闭modal，false阻止modal关闭| (): boolean | 无 | 

## FAQ

### 静态方法Modal如何关闭？

需要借助`Portal.remove(key)`方法； 以下 `Modal.alert` 为例
```jsx
import { Modal, Portal } from '@ant-design/react-native'
import { useRef } from 'react'

function App() {
  const key = useRef()

  const onOpen = () => {
    key.current = Modal.alert({})
  }

  const onClose = () => {
    // 关闭Modal.alert
    Portal.remove(key)
  }
}
```
使用 `Modal.useModal` 时则借助 `modal.remove(key)` 方法：
```jsx
import { Modal, Portal } from '@ant-design/react-native'
import { useRef } from 'react'

function App() {
  const [modal, contextHolder] = Modal.useModal();
   const key = useRef()

  const onOpen = () => {
    key.current = modal.alert({})
  }

  const onClose = () => {
    // 关闭modal.alert
    modal.remove(key)
  }
}
```

### 为什么 Modal 不能获取当前 context、redux、useRouter 的内容？

渲染 `<Modal>` 或直接调用 Modal 方法，默认是通过 `Portal.add` 动态插入到 `<Provider>` 根节点的，此时其 context 与当前代码所在 context 并不相同，因而无法获取 context 信息。

当你需要 context 信息时，<br/>
1.通过 `Modal.useModal` 方法会返回 `modal` 实体以及 `contextHolder` 节点。将其插入到你需要获取 context 位置即可：

```tsx
const [modal, contextHolder] = Modal.useModal();

return (
  <Context1.Provider value="Ant">
    {/* contextHolder 在 Context1 内，它可以获得 Context1 的 context */}
    {contextHolder}
    <Context2.Provider value="Design">
      {/* contextHolder 在 Context2 外，因而不会获得 Context2 的 context */}
    </Context2.Provider>
  </Context1.Provider>
);
```

**异同**：通过 hooks 创建的 `contextHolder` 必须插入到子元素节点中才会生效，当你不需要上下文信息时请直接调用。

2.使用`<Modal />`时，则通过设置 `modalType='modal'` 内部会改为使用 **原生Modal组件** 来保持 context ：
```tsx
<Modal modelType="modal" ...>
 ...
</Modal>
```
