---
category: Components
type: Data Entry
title: Picker
subtitle: 选择器
---

在一组预设数据中进行选择，e.g. 省市区选择。

### 规则
- 尽量使用 Picker 来帮助用户完成输入，避免用户通过键盘直接输入。
- DatePicker 是 Picker 的特定模式。

## API

### 属性

```ts
type PickerColumnItem = {
  label: string | ReactNode
  value: string | number
  key?: string | number
  children?: PickerColumnItem[]
}

type PickerColumn = PickerColumnItem[]

type PickerValue = string | number

type PickerValueExtend = {
  columns: PickerColumn[]
  items: (PickerColumnItem | undefined)[]
}
```

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| data  | 数据源     | `PickerColumn` / `PickerColumn[]` | -   |
| value  | 选中项  | `PickerValue[]`  | -   |
| defaultValue  | 默认选中项  | `PickerValue[]`  | -   |
| cascade  | 是否级联。<br/>子级来自`data`参数内的`children`   | Boolean | `true` |
| cols     | 列数    | Number | `3` |
| onChange | 选中后的回调，可使用[rc-form](https://github.com/react-component/form) | `(value: PickerValue[], extend: PickerValueExtend) => void`      | -   |
| onPickerChange | 每列数据选择变化后的回调函数   | `(value: PickerValue[], index: number) => void` | - |
| onVisibleChange  | 当显隐状态变化时回调函数    | `(visible: bool): void` |  -   |
| renderLabel | 	自定义渲染每列展示的内容  |   `(item: PickerColumnItem, index: number) => ReactNode`   | `(item) => item.label`  |
| locale | 国际化，可覆盖全局[LocaleProvider](/components/locale-provider-cn)的配置 | Object: {okText, dismissText, extra} | - |
| title  | 大标题 | ReactNode | - |
| okText | 选中的文案 | String |  `确定`  |
| dismissText  | 取消选中的文案 | String |  `取消`  |
| onOk   | 点击选中时执行的回调  | `(value: PickerValue[], extend: PickerValueExtend) => void`  |  - |
| onDismiss  | 点击取消时执行的回调 | (): void  |  -  |
| visible  | 是否显示选择器	  | Boolean | -  |
| loading  | 是否处于加载状态  | Boolean | -  |
| loadingContent  | 加载状态下展示的内容  | ReactNode | -  |
| indicatorStyle  | 默认Indicator的样式  | Object | -  |

### 自定义样式

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| style    | 外部样式   | `StyleProp<ViewStyle>` | -   |
| styles   | 内部组件样式集   | `PickerViewStyle` | -   |
| itemStyle| 每列样式   | `StyleProp<TextStyle>` | -   |
| itemHeight | 每列固定高度，未设值时会根据`numberOfLines`动态计算；`itemStyle`属性设置`{height}`值是无效的  |   Number   | -  |
| numberOfLines | 允许每列显示行数  |   Number   | `1`  |

#### 遮罩层
还支持自定义遮罩样式，如使用渐变组件`<LinearGradient />`。当前默认为白色半透明。

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| renderMaskTop | 自定义渲染上半部分遮罩层 | `()=> ReactNode` | `<View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.8)' }} />` |
| renderMaskBottom | 自定义渲染下半部分遮罩层 | `()=> ReactNode` | `<View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.8)' }} />` |

### Children
通常是 [List.Item](/components/list-cn/#List.Item) ，以下属性也是围绕着`List.Item`展开：

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| children| Picker占位组件，通常是`List.Item` | ReactNode |  `List.Item`  |
| extra   | Picker children的`extra`属性，无选中项时展示 | String |  `请选择`  |
| format  | 格式化选中值的函数，用于回显在`extra`属性上  | (labels: string[]): any | `(labels) => { return labels.join(','); } ` |
| triggerType  | 按钮事件名称 | String | `onPress` |
| disabled  | 是否不可用 | Boolean | `false` |

### PickerActions
属性 | 说明 | 类型
----|-----|------
| close |关闭 Picker|`() => void`|
| open  |显示 Picker|`() => void`|
| toggle|切换 Picker 的显示和隐藏状态|`() => void`|

### Ref
同 PickerActions
