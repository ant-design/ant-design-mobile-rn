---
category: Components
type: Feedback
title: Toast
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

| Properties | Descrition                                                                           | Type                |  Required  | Default |
| ---------- | ------------------------------------------------------------------------------------ | ----------------------- | ------- | ------- |
| content    | Toast content                                                                        | `String | React.ReactNode` | Yes | -       |
| duration   | Delay time to close, which units is second                                           | number                  |  No  | 3       |
| onClose    | A callback function Triggered when the Toast is closed                               | Function                |  No  | -       |
| mask       | Whether to show a transparent mask, which will prevent touch event of the whole page | Boolean                 |  No  | true    |
| stackable |  Whether to allow toast overlay       | Boolean  |  No   |   true  |

> **Notice：** OnClose is invalid and Toast does not hide, If set duration = 0, toast will not auto hide, you have to manually do it.

```js
import { Toast } from '@ant-design/react-native';

const key = Toast.loading('message');
Toast.remove(key);

// Or force close all toasts
Toast.removeAll()
```

### Configuration

- `Toast.getConfig()` - get current config
- `Toast.config(props)` - customize default value for NOT required parameters
