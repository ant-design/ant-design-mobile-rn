---
category: Components
type: Layout
title: View
subtitle: 基础组件
---

更安全的View基础组件

## 规则

- 支持 `string`/`number` 类型的ReactNode

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| children | 子组件 | `React.ReactNode` \| `React.ReactText` |  -  |
| style    | 样式 | `StyleProp<ViewStyle>` \| `StyleProp<TextStyle>` | - |


> 更多 react-native `View` 属性请参考 react-native View (http://facebook.github.io/react-native/docs/view.html)

## FAQ

### 它和React Native内置组件View、Text有什么区别？

React Native View不支持 `string` / `number` 类型的children，一旦误传会导致手机崩溃，且无法定位到代码行数，

**此组件可以做一次错误兜底，优先保证设备不崩溃。**

常见的错误：
```jsx
const length = arr.length;

<View>
  {length && <Component />}
</View>

// 当length=0 时，实际渲染的是
<View>
  0
</View>
```

注意，只能做到一层保护，即使`<React.Fragment>`内的children类型出错时也无法得到保护：
```jsx
import {View} from '@ant-design/react-native'

<View>
  {/* still crash */}
  <React.Fragment>
    0
  </React.Fragment>

  {/* still crash */}
  <>''</>
</View>
```