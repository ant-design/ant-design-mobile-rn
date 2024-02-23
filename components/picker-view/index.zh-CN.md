---
category: Components
type: Data Entry
title: PickerView
subtitle: 选择器
---

PickerView 的功能类似于 Picker ，但它是直接渲染在区域中，而不是弹出窗口。

## API

### 属性

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| data  | 数据源     | `PickerColumn` / `PickerColumn[]` | -   |
| value  | 选中项  | `PickerValue[]`  | -   |
| defaultValue  | 默认选中项  | `PickerValue[]`  | -   |
| cascade  | 是否级联。<br/>子级来自`data`参数内的`children`属性   | Boolean | `true` |
| cols     | 列数    | Number | `3` |
| onChange | 选中后的回调，可使用[rc-form](https://github.com/react-component/form) | `(value: PickerValue[], extend: PickerValueExtend) => void`      | -   |
| renderLabel | 	自定义渲染每列展示的内容  |   `(item: PickerColumnItem, index: number) => ReactNode`   | `(item) => item.label`  |
| loading  | 是否处于加载状态  | Boolean | -  |
| loadingContent  | 加载状态下展示的内容  | ReactNode | `<ActivityIndicator/>`  |
| indicatorStyle  | 默认Indicator的样式  | Object | -  |

关于 `PickerColumnItem` `PickerColumn` `PickerValue` `PickerValueExtend` 的类型定义，请参考 [Picker](/components/picker-cn/) 的文档。

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