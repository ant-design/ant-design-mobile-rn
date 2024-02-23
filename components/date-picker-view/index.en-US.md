---
category: Components
type: Data Entry
title: DatePickerView
---

DatePickerView's functions like DatePicker, but it is rendered directly in the area instead of the pop-up window.

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

Properties | Descrition | Type | Default | Version
-----------|------------|------|---------|---------
| precision  | Precision | `Precision` | `day` |`5.1.0`|
| value | the currently selected value | Date | - |
| defaultValue | the default selected value | Date | - ||
| minDate   | minimum date | Date  |  2000-1-1  |
| maxDate   | maximum date | Date  |  2030-1-1  |
| onChange  | change handler | `(value: Date) => void` |  -  ||
| onValueChange | fire when picker col change | `(value: Date, index: number) => void` | - ||
| renderLabel | The function to custom rendering the label shown on a column. `type` means any value in `precision`, `data` means the default number | `(type:Precision / 'now', data: number) => ReactNode` | - ||
| filter  | Filter available time	 | `DatePickerFilter` | - | `5.1.0` |


In addition, the following attributes of `PickerView` are supported: `style` `styles` `itemStyle` `itemHeight` `numberOfLines` `renderMaskTop` `renderMaskBottom`
