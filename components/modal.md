# Modal

Use to show important information for the system, and ask for user feedback. eg: When deleting an important content, pop up a Modal for secondary confirmation.

### Rules
- Use as few as possible. Modal will interrupt user operation, only use it at important situation.
- Title should be concise, do not exceed 1 line; description should be concise and complete, generally no more than 2 lines.
- Operation buttons are up to 3(vertical), generally 1-2(horizontal); [ActionSheet](/components/action-sheet) is preferred when there are more than 3 actions.
- Generally put the most likely clicked button on the right side. In addition, the cancel button should always be on the left.

## Examples

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

Properties | Descrition | Type | Default | Version
-----------|------------|------|---------|---------|
| visible | Determine whether a modal dialog is visible or not | Boolean | false | |
| closable | Determine whether a close (x) button is visible or not | Boolean | false | |
| maskClosable | Determine whether to close the modal dialog when clicked mask of it | Boolean | true | |
| onClose | Callback for clicking close icon x or mask | (): void | - | |
| transparent | transparent mode or full screen mode | Boolean | false | |
| popup | popup mode | Boolean | false | |
| animationDuration | Animation duration, in ms | Number | 300 | `5.3.0` |
| animationType | Options: 'fade' / 'slide' | String |  |fade |
| modalType | The type of the popup. <br/>When it is `'portal'`, it is inserted from the `<Provider />` root node (default). <br/>When it is `'modal'`, it is the same as [`react-native/Modal`](https://reactnative.dev/docs/modal) (used to get the current context). <br/>When it is `'view'`, it is the same as `react-native/View` (used to nest popups in popups). | `'portal'`\| `'modal'` \| `'view'` | `'portal'` | `5.3.0` |
| title | title | React.Element | - | |
| footer | footer content | Array [{text, onPress}] | [] | |
| onRequestClose | The `onRequestClose` callback is called when the user taps the hardware back button on Android or the menu button on Apple TV. Returns `true` to prevent `BackHandler` events when modal is open.| (): boolean | false | |
| style | style same as `styles.innerContainer` | `ViewStyle` | - | |
| styles | Semantic DOM style | [ModalStyle](#modalstyle-interface) | - | |

### ModalStyle interface

```typescript
interface ModalStyle {
  container: ViewStyle      // Set `z-index`
  wrap: ViewStyle           // Set modal flex layout: `{justifyContent: 'center',alignItems: 'center'}`
  innerContainer: ViewStyle // modal content view, default: `{ widh:286 }`
  
  // modal content fields
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

When you need using Context, you can use `contextHolder` which created by `Modal.useModal` to insert into children. Modal created by hooks will get all the context where `contextHolder` are. Created `modal` has the same creating function with [`Modal.method`](#static-method)(Static method).

```jsx
const [modal, contextHolder] = Modal.useModal();

React.useEffect(() => {
  modal.alert(
    // ...
  );
}, []);

return <View>{contextHolder}</View>;
```

## Static method

### Modal.alert(title, message, actions?)

Properties | Descrition | Type | Default
-----------|------------|------|--------
| title | title | String or React.Element | -  |
| message | message  | String or React.Element  | -  |
| actions | button group, [{text, onPress, style}]  | Array | -  |
| onBackHandler | Callback of the back key (not required), returns true to close modal, false to prevent modal from closing| (): boolean | 无 |

### Modal.prompt(title, message, callbackOrActions, type?, defaultValue?)

Properties | Descrition | Type | Default
-----------|------------|------|--------
| title | title | String or React.Element | -  |
| message | message  | String or React.Element  | -  |
| callbackOrActions  | button group [{text, onPress}] or callback | Array or Function | -  |
| type  | prompt style | String (`default`, `secure-text`, `login-password`)|  `default`  |
| defaultValue  | Default(input whick type is password is not supported) | String | -  |
| placeholders  | ['', '']  | String[] | -  |
| onBackHandler | Callback of the back key (not required), returns true to close modal, false to prevent modal from closing| (): boolean | 无 |

### Modal.operation(actions?, onBackHandler?)

Properties | Descrition | Type | Default
-----------|------------|------|--------
| actions | button group, [{text, onPress, style}]  | Array | -  |
| onBackHandler | Callback of the back key (not required), returns true to close modal, false to prevent modal from closing| (): boolean | 无 |

## FAQ

### How to close the static Modal.method()?

You need to use `Portal.remove(key)` method; Take `Modal.alert` as an example
```jsx
import { Modal, Portal } from '@ant-design/react-native'
import { useRef } from 'react'

function App() {
  const key = useRef()

  const onOpen = () => {
    key.current = Modal.alert({})
  }

  const onClose = () => {
    // close the Modal.alert
    Portal.remove(key)
  }
}
```
When using `Modal.useModal`, use the `modal.remove(key)` method:
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
    // close the modal.alert
    modal.remove(key)
  }

  return (
    <>
     ...
     {contextHolder}
    </>
  )
}
```

### Why I can not access context,redux,useRouter in `<Modal />` or `Modal.xxx`?

Rendering `<Modal>` or calling Modal methods directly is dynamically inserted into the `<Provider>` root node through `Portal.add` by default. At this time, its context is different from the context of the current code, so the context information cannot be obtained.

When you need context info, <br/>
**1.** you can use `Modal.useModal` to get `modal` instance and `contextHolder` node. And put it in your children:
```tsx
const [modal, contextHolder] = Modal.useModal();

// then call modal.confirm instead of Modal.confirm

return (
  <Context1.Provider value="Ant">
    {/* contextHolder is in Context1, which means modal will get context of Context1 */}
    {contextHolder}
    <Context2.Provider value="Design">
      {/* contextHolder is out of Context2, which means modal will not get context of Context2 */}
    </Context2.Provider>
  </Context1.Provider>
);
```

**Note**: You must insert `contextHolder` into your children with hooks. You can use origin method if you do not need context connection.

**2.** When using `<Modal />`, by setting `modalType='modal'`, the **native Modal component** will be used internally to maintain the context:
```tsx
<Modal modelType="modal" ...>
 ...
</Modal>
```
