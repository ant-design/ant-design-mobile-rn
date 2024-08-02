---
category: Components
type: Data Entry
title: PickerView
---

PickerView's functions like Picker, but it is rendered directly in the area instead of the pop-up window.

## API

### Props

Properties | Descrition | Type | Default
-----------|------------|------|--------
| data     | data source     | `PickerColumn` / `PickerColumn[]` | -   |
| value    | Selected options	  | `PickerValue[]`  | -   |
| defaultValue  | Default selected options  | `PickerValue[]`  | -   |
| cascade  | whether cascade <br/>child cascade get from `data[].children`   | Boolean | `true` |
| cols     | col numbers    | Number | `3` |
| onChange | selected callback function, can use [rc-form](https://github.com/react-component/form) | `(value: PickerValue[], extend: PickerValueExtend) => void`      | -   |
| renderLabel | 	The function to custom rendering the label shown on a column  |   `(item: PickerColumnItem, index: number) => ReactNode`   | `(item) => item.label`  |
| loading  | Should the Picker displays as loading state	  | Boolean | -  |
| loadingContent  | The loading content displayed in loading state	  | ReactNode | `<ActivityIndicator/>`  |
| indicatorStyle  | style of default Indicator  | Object | -  |

For the type definition of  `PickerColumnItem` `PickerColumn` `PickerValue` `PickerValueExtend`, please refer to the document of [Picker](/components/picker/).

### Custom Style

Properties | Descrition | Type | Default
-----------|------------|------|--------
| style    | style   | `StyleProp<ViewStyle>` | -   |
| styles   | Semantic DOM style   | [PickerViewStyle](#pickerviewstyle-interface) | -   |
| itemStyle| style to apply to each of the item labels   | `StyleProp<TextStyle>` | -   |
| itemHeight | Height of option item, calculated by `numberOfLines` when without value; `itemStyle` was not allowed to set `{height}`  |   Number   | -  |
| numberOfLines | Used to truncate the text with an ellipsis after computing the text layout, including line wrapping, such that the total number of lines does not exceed this number  |   Number   | `1`  |

#### PickerViewStyle interface

```jsx
interface PickerViewStyle {
  wrappper: ViewStyle
  wheelWrapper: ViewStyle

  // item style
  itemWrap: ViewStyle
  itemStyle: TextStyle

  // mask view
  mask: ViewStyle
  maskTop: ViewStyle
  maskMiddle: ViewStyle
  maskBottom: ViewStyle
}
```

#### Mask View

Support custom mask style, such as using the gradient component `<LinearGradient />`. Default is white translucency.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| renderMaskTop | The function to custom rendering the mask top half view | `()=> ReactNode` | `<View style={{ flex: 1, opacity:0.8, backgroundColor: theme.fill_base }} />` |
| renderMaskBottom | The function to custom rendering the mask bottom half view | `()=> ReactNode` | `<View style={{ flex: 1, opacity:0.8, backgroundColor: theme.fill_base }} />` |

- Theme color [theme.fill_base](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/style/themes/default.tsx#L24) = `#ffffff`

## FAQ

### On the Android platform, when using `PickerView` nested in `ScrollView`, the Picker Item cannot slide. What should I do?

Support in `5.1.3`. Set the `nestedScrollEnabled` property of `ScrollView` to `true`.

```jsx
<ScrollView nestedScrollEnabled={true}>
  ...
  <PickerView />
</ScrollView>
```