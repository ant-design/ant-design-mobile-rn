---
category: Components
type: Feedback
title: Toast
subtitle: 轻提示
version: update
---

一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。

### 规则
- 有 Icon 的 Toast，字数为 4-6 个；没有 Icon 的 Toast，字数不宜超过 14 个。

## API

`Toast`只支持指令式调用，入参类型为`string | ToastProps`。

- `Toast.show(props)` - `5.2.0`新增
- `Toast.success(props)`
- `Toast.fail(props)`
- `Toast.info(props)`
- `Toast.loading(props)`
- `Toast.offline(props)`

`Toast.show(string)`的默认配置是`{duration:1.5, mask: false}`，其他方法是指定icon的快捷调用方式。

ToastProps 参数如下：

|    属性    | 说明                           | 类型      | 必填 | 默认值 | 版本 |
| --------  | ------------------------------ | -------- | --- | ------ | ------|
| content   | 提示内容                        | `String | React.ReactNode`   | 是   |  -     ||
| duration  | 自动关闭的延时，单位秒            | number   |  否  |  3       ||
| icon      | 图标                           | `'success' | 'fail' | 'offline' | 'loading' | React.ReactNode` | 否 | - | `5.2.0` |
| mask      | 是否显示透明蒙层，防止触摸穿透     | Boolean   |  否   |   true  ||
| position  | 垂直方向显示位置                 | `'top' | 'bottom' | 'center'` | 否  | `'center'` | `5.2.0` |
| onClose   | 关闭后回调                      | Function  |  否  | - ||
| stackable | 是否允许叠加显示                 | Boolean  |  否   |   true  ||
| styles    | 语义化结构 style                | [ToastStyle](#toaststyle-语义化样式) | 否 | - | `5.2.0` |

> **注：**  duration = 0 时，onClose 无效，toast 不会消失，隐藏 toast 需要手动调用 remove

```js
import { Toast } from '@ant-design/react-native';

const key = Toast.loading('message');
Toast.remove(key);
```

### Toast.removeAll

关闭所有显示中的 `Toast`。

```ts
Toast.removeAll()
```

### Toast.config

全局配置，支持配置 `duration`、`mask`、`onClose`、`position`、`stackable` 和 `styles`。配置方法如下：

```ts
Toast.config({ duration: 1, position: 'top' })

// 可获取当前配置
Toast.getConfig()
```

### ToastStyle 语义化样式

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