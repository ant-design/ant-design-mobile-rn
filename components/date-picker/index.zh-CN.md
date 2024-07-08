---
category: Components
type: Data Entry
title: DatePicker
subtitle: 日期选择
---

用于选择日期或者时间。

### 规则
- 最多精确到秒。


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
| locale | 国际化，可覆盖全局[LocaleProvider](/components/locale-provider-cn)的配置 | Object: {okText, dismissText, extra, `DatePickerLocale:{ year,month,day,hour,minute,am,pm }`} | - |
| filter  | 过滤可供选择的时间 | `DatePickerFilter` | - | `5.1.0` |


此外还支持 [Picker](/components/picker-cn) 的以下属性：`onPickerChange` `onVisibleChange` `style` `styles` `itemStyle` `itemHeight` `numberOfLines` `title` `okText` `dismissText` `okButtonProps` `dismissButtonProps` `visible` `children` `renderMaskTop` `renderMaskBottom`

### Children
同 [Picker](/components/picker-cn#children)，其中`format`类型不同：

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| format  | 格式化选中的值 |`(value: Date) => date string` | 引用 [Day.js Format](https://day.js.org/docs/en/parse/string-format)，参数对应精度:`YYYY-MM-DD`,`YYYY-MM-DD HH:mm:ss`|

### Ref
同 [Picker](/components/picker-cn#ref)。
