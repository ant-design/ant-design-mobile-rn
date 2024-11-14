---
category: Components
type: Feedback
title: Modal
---

Use to show important information for the system, and ask for user feedback. eg: When deleting an important content, pop up a Modal for secondary confirmation.

### Rules
- Use as few as possible. Modal will interrupt user operation, only use it at important situation.
- Title should be concise, do not exceed 1 line; description should be concise and complete, generally no more than 2 lines.
- Operation buttons are up to 3(vertical), generally 1-2(horizontal); [ActionSheet](/components/action-sheet) is preferred when there are more than 3 actions.
- Generally put the most likely clicked button on the right side. In addition, the cancel button should always be on the left.

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