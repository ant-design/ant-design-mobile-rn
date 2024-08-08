---
category: Components
type: Data Entry
title: PickerView
subtitle: 选择器
---

PickerView 的功能类似于 Picker ，但它是直接渲染在区域中，而不是弹出窗口。

## API

### 属性

属性 | 说明 | 类型 | 默认值 | 版本
----|-----|------|-------|-----
| data  | 数据源     | `PickerColumn` / `PickerColumn[]` | -   | |
| value  | 选中项  | `PickerValue[]`  | -   | |
| defaultValue  | 默认选中项  | `PickerValue[]`  | -   | |
| cascade  | 是否级联。<br/>子级来自`data`参数内的`children`属性   | Boolean | `true` | |
| cols     | 列数    | Number | `3` | |
| onChange | 选中后的回调，可配合使用[Form](/components/form) | `(value: PickerValue[], extend: PickerValueExtend) => void`      | -   | |
| renderLabel | 	自定义渲染每列展示的内容  |   `(item: PickerColumnItem, itemIndex: number, colIndex: number) => ReactNode`   | `(item) => item.label`  | `5.2.2` |
| loading  | 是否处于加载状态  | Boolean | -  | `5.1.0` |
| loadingContent  | 加载状态下展示的内容  | ReactNode | `<ActivityIndicator/>`  | `5.1.0` |
| indicatorStyle  | 默认Indicator的样式  | Object | -  | |

关于 `PickerColumnItem` `PickerColumn` `PickerValue` `PickerValueExtend` 的类型定义，请参考 [Picker](/components/picker-cn/) 的文档。

### 自定义样式

属性 | 说明 | 类型 | 默认值 | 版本
----|-----|------|-------|-----
| style    | 外部样式   | `StyleProp<ViewStyle>` | -   | |
| styles   | 语义化结构 style   | [PickerViewStyle](#pickerviewstyle-语义化样式) | -   | `5.1.0`重构了样式 |
| itemStyle| 每列样式   | `StyleProp<TextStyle>` | -   | |
| itemHeight | 每列固定高度，未设值时会根据`numberOfLines`动态计算；`itemStyle`属性设置`{height}`值是无效的  |   Number   | -  | |
| numberOfLines | 允许每列显示行数  |   Number   | `1`  | |

#### PickerViewStyle 语义化样式

```jsx
interface PickerViewStyle {
  wrappper: ViewStyle
  wheelWrapper: ViewStyle

  // item style
  itemWrap: ViewStyle
  itemStyle: TextStyle
  itemActiveStyle: TextStyle // `5.2.2`新增

  // 遮罩层
  mask: ViewStyle
  maskTop: ViewStyle
  maskMiddle: ViewStyle
  maskBottom: ViewStyle
}
```

#### 遮罩层

`5.1.0`新增。还支持自定义遮罩样式，如使用渐变组件`<LinearGradient />`。当前默认为白色半透明。

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| renderMaskTop | 自定义渲染上半部分遮罩层 | `(theme)=> ReactNode` | `<View style={{ flex: 1, opacity:0.8, backgroundColor: theme.fill_base }} />` |
| renderMaskBottom | 自定义渲染下半部分遮罩层 | `(theme)=> ReactNode` | `<View style={{ flex: 1, opacity:0.8, backgroundColor: theme.fill_base }} />` |

 - 其中主题色 [theme.fill_base](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/style/themes/default.tsx#L24) = `#ffffff`
## FAQ

### 在Android平台，ScrollView中嵌套使用PickerView，会发生Picker Item不能滑动的情况，怎么办？

`5.1.3`新增支持。 设置`ScrollView`的`nestedScrollEnabled`属性为`true`即可。

```jsx
<ScrollView nestedScrollEnabled={true}>
  ...
  <PickerView />
</ScrollView>
```