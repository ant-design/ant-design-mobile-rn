---
category: Components
type: Data Entry
title: Picker
---

Choose from a set of data, e.g. Country choice.

### Rules
- Try to use Picker to help users complete the input, to avoid the user through the keyboard directly input.
- DatePicker is Picker's specific pattern.

## API

### Props

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

Properties | Descrition | Type | Default
-----------|------------|------|--------
| data     | data source     | `PickerColumn` / `PickerColumn[]` | -   |
| value    | Selected options  | `PickerValue[]`  | -   |
| defaultValue  | Default selected options  | `PickerValue[]`  | -   |
| cascade  | whether cascade <br/>child cascade get from `data[].children`   | Boolean | `true` |
| cols     | col numbers    | Number | `3` |
| onChange | selected callback function, can use [rc-form](https://github.com/react-component/form) | `(value: PickerValue[], extend: PickerValueExtend) => void`      | -   |
| onPickerChange | trigger on each column of selected data is changed   | `(value: PickerValue[], index: number) => void` | - |
| onVisibleChange  | visible state change callback    | `(visible: bool): void` |  -   |
| renderLabel | 	The function to custom rendering the label shown on a column  |   `(item: PickerColumnItem, index: number) => ReactNode`   | `(item) => item.label`  |
| locale | international, can override the configuration of the global [LocaleProvider](/components/locale-provider) | Object: Object: {okText, dismissText, extra} | - |
| title  | title | ReactNode | - |
| okText | ok text | String |  `确定`  |
| dismissText  | dismiss text | String |  `取消`  |
| onOk   | handler called when click ok  | `(value: PickerValue[], extend: PickerValueExtend) => void`  |  - |
| onDismiss  | handler called when click cancel | (): void  |  -  |
| visible  | Whether to show or hide the Picker  | Boolean | -  |
| loading  | Should the Picker displays as loading state	  | Boolean | -  |
| loadingContent  | The loading content displayed in loading state	  | ReactNode | -  |
| indicatorStyle  | style of default Indicator  | Object | -  |

### Custom Style

Properties | Descrition | Type | Default
-----------|------------|------|--------
| style    | style   | `StyleProp<ViewStyle>` | -   |
| styles   | inner component styles   | interface `PickerViewStyle` | -   |
| itemStyle| style to apply to each of the item labels   | `StyleProp<TextStyle>` | -   |
| itemHeight | Height of option item, calculated by `numberOfLines` when without value; `itemStyle` was not allowed to set `{height}`  |   Number   | -  |
| numberOfLines | Used to truncate the text with an ellipsis after computing the text layout, including line wrapping, such that the total number of lines does not exceed this number  |   Number   | `1`  |

#### Mask View

Support custom mask style, such as using the gradient component `<LinearGradient />`. Default is white translucency.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| renderMaskTop | The function to custom rendering the mask top half view | `()=> ReactNode` | `<View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.8)' }} />` |
| renderMaskBottom | The function to custom rendering the mask bottom half view | `()=> ReactNode` | `<View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.8)' }} />` |


### Children
Picker's children is best to [List.Item](/components/list/#List.Item), if not, need to be a custom component (the `onClick`/`extra` props need to be handled in the component):

Properties | Descrition | Type | Default
-----------|------------|------|--------
| children| usually `List.Item` | ReactNode |  `List.Item`  |
| extra   | Picker's children `extra` prop, display when no `value` | String |  `请选择`  |
| format  | a function that formats the selected value	  | (labels: string[]): any | `(labels) => { return labels.join(','); } ` |
| triggerType  | Press event name | String | `onPress` |
| disabled  | set disabled	 | Boolean | `false` |

### PickerActions
Properties | Descrition | Type
-----------|------------|-----
| close    | Close Picker | `() => void` |
| open     | Open Picker  | `() => void` |
| toggle   | Toggle the visible state of Picker | `() => void` |

### Ref
Same as PickerActions
