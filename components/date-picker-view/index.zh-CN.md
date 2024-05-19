---
category: Components
type: Data Entry
title: DatePickerView
subtitle: 日期选择器
---

DatePickerView 的功能类似于 DatePicker ，但它是直接渲染在区域中，而不是弹出窗口。

## API

```ts
type Precision =
  | 'week'
  | 'week-day'
  | 'year'
  | 'month'
  | 'day'
  | 'hour'
  | 'minute'
  | 'second'

type DatePickerFilter = Partial<
  Record<
    Precision,
    (
      val: number,
      extend: {
        date: Date
      }
    ) => boolean
  >
>
```

属性 | 说明 | 类型 | 默认值 | 版本
----|-----|------|------|------
| precision  | 精度 | `Precision` | `day` |`5.1.0`|
| value | 当前选中时间 | Date | 无 ||
| defaultValue | 默认选中时间 | Date | 无 ||
| minDate   | 最小可选日期 | Date  |  2000-1-1  ||
| maxDate   | 最大可选日期 | Date  |  2030-1-1  ||
| onChange   | 时间发生变化的回调函数  | `(value: Date) => void` | - ||
| onValueChange | 每列 picker 改变时的回调 | `(value: Date, index: number) => void` | - ||
| renderLabel | 自定义渲染每列展示的内容。其中 `type` 参数为 `precision` 中的任意值或 `now`，`data` 参数为默认渲染的数字 | `(type:Precision / 'now', data: number) => ReactNode` | - ||
| filter  | 过滤可供选择的时间 | `DatePickerFilter` | - | `5.1.0` |


此外还支持 [PickerView](/components/picker-view-cn) 的以下属性：`style` `styles` `itemStyle` `itemHeight` `numberOfLines` `renderMaskTop` `renderMaskBottom`