# DatePickerView

DatePickerView 的功能类似于 DatePicker ，但它是直接渲染在区域中，而不是弹出窗口。

## 代码演示

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
