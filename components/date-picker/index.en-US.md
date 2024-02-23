---
category: Components
type: Data Entry
title: DatePicker
---

Used to select a date or time.

### Rules
- At most accurate to seconds.


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
-----------|------------|------|--------|--------
| precision  | Precision | `Precision` | `day` |`5.1.0`|
| value | the currently selected value | Date | - ||
| defaultValue | the default selected value | Date | - ||
| minDate   | minimum date | Date  |  2000-1-1  ||
| maxDate   | maximum date | Date  |  2030-1-1  ||
| onChange  | change handler | `(value: Date) => void` |  -  ||
| onValueChange | fire when picker col change | `(value: Date, index: number) => void` | - ||
| renderLabel | The function to custom rendering the label shown on a column. `type` means any value in `precision`, `data` means the default number | `(type:Precision / 'now', data: number) => ReactNode` | - ||
| locale | international, can override the configuration of the global [LocaleProvider](/components/locale-provider) | Object: Object: {okText, dismissText, extra, `DatePickerLocale:{ year,month,day,hour,minute,am,pm }`} | - |
| filter  | Filter available time	 | `DatePickerFilter` | - | `5.1.0` |


In addition, the following attributes of `Picker` are supported: `onPickerChange` `onVisibleChange` `style` `styles` `itemStyle` `itemHeight` `numberOfLines` `title` `okText` `dismissText` `visible` `children` `renderMaskTop` `renderMaskBottom`

### Children
Same as [Picker](/components/picker/#Children), except type `format` is different：

Properties | Descrition | Type | Default
----|-----|------|------
| format  | format the selected value |`(value: Date) => date string` | import [Day.js Format](https://day.js.org/docs/en/parse/string-format), precision:`YYYY-MM-DD`,`YYYY-MM-DD HH:mm:ss`|

### Ref
Same as `Picker`