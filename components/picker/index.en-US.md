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

Properties | Descrition | Type | Default | Version
-----------|------------|------|--------|--------
| data     | data source     | `PickerColumn` / `PickerColumn[]` | -   |  |
| value    | Selected options  | `PickerValue[]`  | -   |  |
| defaultValue  | Default selected options  | `PickerValue[]`  | -   |  |
| cascade  | whether cascade <br/>child cascade get from `data[].children`   | Boolean | `true` |  |
| cols     | col numbers    | Number | `3` |  |
| onChange | selected callback function, can use [Form](/components/form) | `(value: PickerValue[], extend: PickerValueExtend) => void`      | -   |  |
| onPickerChange | trigger on each column of selected data is changed   | `(value: PickerValue[], index: number) => void` | - |  |
| onVisibleChange  | visible state change callback    | `(visible: bool): void` |  -   |  |
| renderLabel | 	The function to custom rendering the label shown on a column  |   `(item: PickerColumnItem, itemIndex: number, colIndex: number) => ReactNode`   | `(item) => item.label`  | `5.2.2` |
| locale | international, can override the configuration of the global [Provider](/components/provider)'s `locale` | Object: Object: {okText, dismissText, extra} | - |  |
| title  | title | ReactNode | - |  |
| okText | ok text | String |  `确定`  |  |
| dismissText  | dismiss text | String |  `取消`  |  |
| onOk   | handler called when click ok  | `(value: PickerValue[], extend: PickerValueExtend) => void`  |  - |  |
| onDismiss  | handler called when click cancel | (): void  |  -  |  |
| okButtonProps  | The ok button props | [TouchableHighlightProps](https://reactnative.dev/docs/touchablehighlight)  |  `{ activeOpacity:1, underlayColor:'#ddd' }`  | `5.1.3` |
| dismissButtonProps  | The dismiss button props | [TouchableHighlightProps](https://reactnative.dev/docs/touchablehighlight)  |  `{ activeOpacity:1, underlayColor:'#ddd' }`  | `5.1.3` |
| visible  | Whether to show or hide the Picker  | Boolean | -  |  |
| loading  | Should the Picker displays as loading state	  | Boolean | -  | `5.1.0` |
| loadingContent  | The loading content displayed in loading state	  | ReactNode | -  | `5.1.0` |
| indicatorStyle  | style of default Indicator  | Object | -  |  |

### Custom Style

Properties | Descrition | Type | Default | Version
-----------|------------|------|---------|---------
| style    | style   | `StyleProp<ViewStyle>` | -   | |
| styles   | inner component styles  | [PickerStyle](#pickerstyle-interface) & [PickerViewStyle](/components/picker-view/#pickerviewstyle-interface) | -   | `5.1.0`refactored |
| itemStyle| style to apply to each of the item labels   | `StyleProp<TextStyle>` | -   | |
| itemHeight | Height of option item, calculated by `numberOfLines` when without value; `itemStyle` was not allowed to set `{height}`  |   Number   | -  | |
| numberOfLines | Used to truncate the text with an ellipsis after computing the text layout, including line wrapping, such that the total number of lines does not exceed this number  |   Number   | `1`  | |

### PickerStyle interface
```jsx
interface PickerStyle extends Partial<PickerViewStyle> {
  // modal style
  modal: ViewStyle
  container: ViewStyle
  header: ViewStyle
  headerItem: ViewStyle
  actionText: TextStyle
  title: TextStyle
  okText: TextStyle
  dismissText: TextStyle
}
```

#### Mask View

New in `5.1.0`. Support custom mask style, such as using the gradient component `<LinearGradient />`. Default is white translucency.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| renderMaskTop | The function to custom rendering the mask top half view | `()=> ReactNode` | `<View style={{ flex: 1, opacity:0.8, backgroundColor: theme.fill_base }} />` |
| renderMaskBottom | The function to custom rendering the mask bottom half view | `()=> ReactNode` | `<View style={{ flex: 1, opacity:0.8, backgroundColor: theme.fill_base }} />` |

- Theme color [theme.fill_base](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/style/themes/default.tsx#L24) = `#ffffff`

### Custom Children
Picker's children is best to [List.Item](/components/list/#List.Item), if not, need to be a custom component (the `onPress`/`extra` props need to be handled in the component):

Properties | Descrition | Type | Default | Version |
-----------|------------|------|--------|--------
| children| usually `List.Item` | `ReactNode`/`({disabled, extra, value, toggle})=>ReactNode` | -  | `5.2.1` add function as Children |
| extra   | Picker's children `extra` prop, display when no `value`(Similar to a placeholder) | String |  `please select`  |  |
| format  | a function that formats the selected value	  | (labels: string[]): any | `(labels) => { return labels.join(','); } ` |  |
| triggerType  | Press event name | String | `onPress` |  |
| disabled  | set disabled	 | Boolean | `false` |  |

### PickerActions
Properties | Descrition | Type
-----------|------------|-----
| close    | Close Picker | `() => void` |
| open     | Open Picker  | `() => void` |
| toggle   | Toggle the visible state of Picker | `() => void` |

### Ref
Same as PickerActions


## FAQ

### Why is the Picker hidden when it popup in the native Modal?

By default, `<Picker />` is dynamically inserted into the `<Provider>` root node via `Portal.add`, and the zIndex level of the native Modal is above everything, including its root node.

So if you must use the `<Picker />` component in the native Modal, you can set `modalType='modal'` to keep it at the same level as the native Modal.

```tsx
import {Modal} from 'react-native';
import {Picker} from '@ant-design/react-native';

<Modal>
  ...
  
  <Picker
    modalType="modal" // add here
    visible={visible}
    data={data}>
    <List.Item arrow="horizontal">省市选择</List.Item>
  </Picker>

</Modal>
```