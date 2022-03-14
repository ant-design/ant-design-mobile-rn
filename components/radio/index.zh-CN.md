---
category: Components
type: Data Entry
title: Radio
subtitle: 单选框
---

单选框

## API

### 属性
```ts
type RadioValue = string | number
```

### Radio

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| defaultChecked |  初始是否选中  |  Boolean  | 无  |
| checked    |  指定当前是否选中  |  Boolean  | 无  |
| disabled   |  禁用  | Boolean |  false  |
| onChange   |  change 事件触发的回调函数 | (e: { target: { checked: boolean } }) => void  |   无  |
| value      |  携带的标识值，用于 Group 模式  |  `RadioValue`  |  无  |

### Radio.RadioItem

基于`List.Item`对`Radio`进行封装,`List.Item`的`extra`属性固定传入`Radio`,其他属性和`List.Item`一致。
其他 API 和 Radio 相同。

### Radio.Group `v5.0.0`

单选框组合，用于包裹一组 `Radio`。

```ts
type Event = { target: { value: RadioValue } }
```

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| defaultValue |  默认选中的值  |  `RadioValue`  |  无  |
| disabled |  禁选所有子单选器  |  Boolean |  false  |
| options  |  以配置形式设置子元素  | `string[]` \| `number[]` \| `Array<{ label: string value: string disabled?: boolean }>` |  无  ｜
| value    |  用于设置当前选中的值  |  `RadioValue`  |  无  |
| onChange |  选项变化时的回调函数  |  (e: `Event`) => void |  无  |