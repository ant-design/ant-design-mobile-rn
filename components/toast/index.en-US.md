---
category: Components
type: Feedback
title: Toast
version: 5.2.0-rc.1
---

A lightweight feedback or tips, used to display content that does not interrupt user operations. Suitable for page transitions, data interaction and other scenes.

### Rules
- Toast with Icon, 4-6 words is recommended; Toast without Icon, the number of words should not exceed 14.

## API

- `Toast.success(props)`
- `Toast.fail(props)`
- `Toast.info(props)`
- `Toast.loading(props)`
- `Toast.offline(props)`

Props has these fields:

| Properties | Descrition | Type |  Required  | Default | Version |
| ---------- | ---------- | -----| -----------| --------|---------|
| content    | Toast content | `String | React.ReactNode` | Yes | - | |
| duration   | Delay time to close, which units is second | number |  No  | 3 | |
| icon       | Toast icon | `'success' | 'fail' | 'offline' | 'loading' | React.ReactNode` | No | - | `5.2.0` |
| mask       | Whether to show a transparent mask, which will prevent touch event of the whole page | Boolean |  No  | true | |
| onClose    | A callback function Triggered when the Toast is closed | Function | No | - | |
| position  | Vertical display position | `'top' | 'bottom' | 'center'` | No  | `'center'` | `5.2.0` |
| stackable |  Whether to allow toast overlay | Boolean  |  No | true | |
| styles    | Semantic DOM style              | [ToastStyle](#toaststyle-interface) | No | - | `5.2.0` |

> **Notice：** OnClose is invalid and Toast does not hide, If set duration = 0, toast will not auto hide, you have to manually do it.

```js
import { Toast } from '@ant-design/react-native';

const key = Toast.loading('message');
Toast.remove(key);
```

### Toast.removeAll

Turn off `Toast` in all displays.

```ts
Toast.removeAll()
```

### Toast.config

Methods for global configuration. Support `duration`、`mask`、`onClose`、`position`、`stackable` and `style`. The configuration method is as follows:

```ts
Toast.config({ duration: 1, position: 'top' })

// get current config
Toast.getConfig()
```

### InputStyle interface

```typescript
interface ToastStyle {
  container: ViewStyle
  innerContainer: ViewStyle
  innerWrap: ViewStyle
  iconToast: ViewStyle
  textToast: ViewStyle
  content: TextStyle
  image: TextStyle
  centering: ViewStyle
}
```