# Toast

A lightweight feedback or tips, used to display content that does not interrupt user operations. Suitable for page transitions, data interaction and other scenes.

### Rules
- Toast with Icon, 4-6 words is recommended; Toast without Icon, the number of words should not exceed 14.

## Examples

```tsx
import { Button, List, Provider, Switch, Toast } from '@ant-design/react-native'
import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, ScrollView, Text } from 'react-native'

const ToastExample = () => {
  const handler = useRef<number>()
  const [enableMask, setEnableMask] = useState(Toast.getConfig().mask)
  const [enableStack, setEnableStack] = useState(Toast.getConfig().stackable)

  return (
    <Provider>
      <ScrollView>
        <List>
          <List.Item
            extra={
              <Switch
                checked={enableMask}
                onChange={(mask) => {
                  Toast.config({ mask })
                  setEnableMask(Toast.getConfig().mask)
                }}
              />
            }>
            Enable mask
            <List.Item.Brief>是否显示透明蒙层，防止触摸穿透</List.Item.Brief>
          </List.Item>
          <List.Item
            extra={
              <Switch
                checked={enableStack}
                onChange={(stackable) => {
                  Toast.config({ stackable })
                  setEnableStack(Toast.getConfig().stackable)
                }}
              />
            }>
            Enable stackable
            <List.Item.Brief>是否允许叠加显示</List.Item.Brief>
          </List.Item>
        </List>
        <List renderHeader="图标">
          <Button
            onPress={() => {
              Toast.success('Success')
            }}>
            成功
          </Button>
          <Button
            onPress={() => {
              Toast.fail('Fail')
            }}>
            失败
          </Button>
          <Button
            onPress={() => {
              Toast.offline('Network connection failed !!!')
            }}>
            网络失败
          </Button>
          <Button
            onPress={() => {
              Toast.loading('loading...')
            }}>
            加载中
          </Button>
          <Button
            onPress={() => {
              Toast.show({
                content: '上传中',
                icon: <ActivityIndicator />,
              })
            }}>
            自定义图标
          </Button>
        </List>
        <List renderHeader="更多功能">
          <Button
            onPress={() => {
              Toast.show({
                content: 'Hello World',
                position: 'top',
              })
            }}>
            顶部提示
          </Button>
          <Button
            onPress={() => {
              Toast.show({
                content: 'Hello World',
                position: 'bottom',
              })
            }}>
            底部提示
          </Button>
          <Button
            onPress={() => {
              Toast.show({
                icon: 'loading',
                content: <CountDownText />,
                duration: 5,
              })
            }}>
            动态内容
          </Button>
        </List>
        <List renderHeader="手动清除">
          <Button
            onPress={() => {
              handler.current = Toast.show({
                content: '这条提示不会自动消失',
                duration: 0,
                position: 'top',
                mask: false,
              })
            }}>
            显示
          </Button>
          <Button
            onPress={() => {
              handler.current && Toast.remove(handler.current)
            }}>
            清除
          </Button>
          <Button
            onPress={() => {
              Toast.removeAll()
            }}>
            关闭所有
          </Button>
        </List>
      </ScrollView>
    </Provider>
  )
}

export default ToastExample

const CountDownText = () => {
  const [count, setCount] = useState(5)
  const interval = useRef<any>()
  useEffect(() => {
    interval.current = setInterval(() => {
      setCount((x) => {
        if (x > 1) {
          return x - 1
        } else {
          return x
        }
      })
    }, 1000)
    return () => {
      interval.current && clearInterval(interval.current)
    }
  }, [])
  return <Text style={{ color: '#ffffff' }}>还剩 {count} 秒</Text>
}
```

## API

`Toast` only supports Imperative calls. The argument type is `string | ToastProps`.

- `Toast.show(props)` - New in `5.2.1`
- `Toast.success(props)`
- `Toast.fail(props)`
- `Toast.info(props)`
- `Toast.loading(props)`
- `Toast.offline(props)`

`Toast.show(string)`'s default config is `{duration:1.5, mask: false}`. Another method is to specify a shortcut to the `icon`.

ToastProps has these fields:

| Properties | Descrition | Type |  Required  | Default | Version |
| ---------- | ---------- | -----| -----------| --------|---------|
| content    | Toast content | `String | React.ReactNode` | Yes | - | |
| duration   | Delay time to close, which units is second | number |  No  | 3 | |
| icon       | Toast icon | `'success' | 'fail' | 'offline' | 'loading' | React.ReactNode` | No | - | `5.2.1` |
| mask       | Whether to show a transparent mask, which will prevent touch event of the whole page | Boolean |  No  | true | |
| onClose    | A callback function Triggered when the Toast is closed | Function | No | - | |
| position  | Vertical display position | `'top' | 'bottom' | 'center'` | No  | `'center'` | `5.2.1` |
| stackable |  Whether to allow toast overlay | Boolean  |  No | true | |
| styles    | Semantic DOM style              | [ToastStyle](#toaststyle-interface) | No | - | `5.2.1` |

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

### Toast.useToast()

New in `5.3.0`.  antd-mobile-rn will inserted into the root node of `<Provider>` through `Portal.add` when call toast methods. Whose context is different with origin code located context.
<br/>
When you need context info (like **Modal** context), you can use `toast.useToast` to get `toastApi` instance and `contextHolder` node. And put it in your children:

```jsx
import { Modal } from 'react-native'
import { Toast } from '@ant-design/react-native'

const [toastApi, contextHolder] = Toast.useToast();

const showLoading = () => {
  toastApi.loading(
    // ...
  );
}

return (
  <Modal>
    {contextHolder}
    <View>
      ...
    </View>
  </Modal>
);
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
