# DatePickerView

DatePickerView's functions like DatePicker, but it is rendered directly in the area instead of the pop-up window.

## Examples

```tsx
import { DatePickerView, DatePickerFilter } from '@ant-design/react-native'
import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'

const now = new Date()

export default () => {
  const [value, setValue] = useState<Date>(now)

  return (
    <ScrollView nestedScrollEnabled>
      <Text style={{ margin: 16 }}>基础用法</Text>
      <DatePickerView />

      <Text style={{ margin: 16 }}>受控模式</Text>
      <DatePickerView
        value={value}
        onChange={(val) => {
          setValue(val)
          console.log('onChange', val)
        }}
      />

      <Text style={{ margin: 16 }}>自定义每列的渲染内容</Text>
      <DatePickerView defaultValue={now} renderLabel={labelRenderer} />

      <Text style={{ margin: 16 }}>周选择器</Text>
      <DatePickerView
        onChange={(val) => console.log('onChange', val)}
        precision="week-day"
        defaultValue={now}
        renderLabel={weekdayLabelRenderer}
      />

      <Text style={{ margin: 16 }}>过滤可供选择的时间</Text>
      <DatePickerView
        defaultValue={now}
        precision="hour"
        renderLabel={labelRenderer}
        filter={dateFilter}
      />
    </ScrollView>
  )
}

const labelRenderer = (type: string, data: number) => {
  switch (type) {
    case 'year':
      return data + '年'
    case 'month':
      return data + '月'
    case 'day':
      return data + '日'
    case 'hour':
      return data + '时'
    case 'minute':
      return data + '分'
    case 'second':
      return data + '秒'
    default:
      return data
  }
}

const weekdayLabelRenderer = (type: string, data: number) => {
  switch (type) {
    case 'year':
      return data + '年'
    case 'week':
      return data + '周'
    case 'week-day':
      return weekdayToZh(data)
    default:
      return data
  }
}

const dateFilter: DatePickerFilter = {
  day: (_val, { date }) => {
    // 去除所有周末
    if (date.getDay() > 5 || date.getDay() === 0) {
      return false
    }
    return true
  },
  hour: (val: number) => {
    // 只保留每天的14点到18点
    if (val < 14 || val > 18) {
      return false
    }
    return true
  },
}

const weekdayToZh = (weekday: number) => {
  switch (weekday) {
    case 1:
      return '周一'
    case 2:
      return '周二'
    case 3:
      return '周三'
    case 4:
      return '周四'
    case 5:
      return '周五'
    case 6:
      return '周六'
    case 7:
      return '周日'
    default:
      return weekday
  }
}
```

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


In addition, the following properties of [PickerView](/components/picker-view) are supported: `style` `styles` `itemStyle` `itemHeight` `numberOfLines` `renderMaskTop` `renderMaskBottom`
