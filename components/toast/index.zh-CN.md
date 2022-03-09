---
category: Components
type: Feedback
title: Toast
subtitle: 轻提示
---

一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。

### 规则
- 有 Icon 的 Toast，字数为 4-6 个；没有 Icon 的 Toast，字数不宜超过 14 个。

## API

- `Toast.success(props)`
- `Toast.fail(props)`
- `Toast.info(props)`
- `Toast.loading(props)`
- `Toast.offline(props)`

Props 参数如下：

|    属性    | 说明                           | 类型      | 必填 | 默认值 |
| --------  | ------------------------------ | -------- | --- | ------ |
| content   | 提示内容                        | `String | React.ReactNode`   | 是   |  -     |
| duration  | 自动关闭的延时，单位秒            | number   |  否  |  3       |
| onClose   | 关闭后回调                      | Function  |  否  | - |
| mask      | 是否显示透明蒙层，防止触摸穿透     | Boolean   |  否   |   true  |
| stackable | 是否允许叠加显示                 | Boolean  |  否   |   true  |

> **注：**  duration = 0 时，onClose 无效，toast 不会消失，隐藏 toast 需要手动调用 remove

```js
import { Toast } from '@ant-design/react-native';

const key = Toast.loading('message');
Toast.remove(key);

// 或者强制关闭所有Toast
Toast.removeAll()
```

### 自定义配置

- `Toast.getConfig()` - 获取当前配置
- `Toast.config(props)` - 配置非必填项的默认值
