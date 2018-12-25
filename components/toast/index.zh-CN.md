---
category: Components
type: Feedback
title: Toast
subtitle: 轻提示
---

一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。

### 规则
- 一次只显示一个 toast。
- 有 Icon 的 Toast，字数为 4-6 个；没有 Icon 的 Toast，字数不宜超过 14 个。

## API

- `Toast.success(content, duration, onClose, mask)`
- `Toast.fail(content, duration, onClose, mask)`
- `Toast.info(content, duration, onClose, mask)`
- `Toast.loading(content, duration, onClose, mask)`
- `Toast.offline(content, duration, onClose, mask)`

组件提供了五个静态方法，参数如下：

| 属性     | 说明                           | 类型                    | 默认值 |
| -------- | ------------------------------ | ----------------------- | ------ |
| content  | 提示内容                       | React.Element or String | 无     |
| duration | 自动关闭的延时，单位秒         | number                  | 3      |
| onClose  | 关闭后回调                     | Function                | 无     |
| mask     | 是否显示透明蒙层，防止触摸穿透 | Boolean                 | true   |

> **注：**  duration = 0 时，onClose 无效，toast 不会消失；隐藏 toast 需要手动调用 hide


> 3.0.0 开始移除了 之前的`Toast.hide`方法，`Toast.xxx` 现在返回一个`key`可以使用`Portal.remove(key)`手动关闭提示

```js
  import { Portal, Toast } from '@ant-design/react-native'
  const key Toast.loading('messsage')
  Portal.remove(key)
```
