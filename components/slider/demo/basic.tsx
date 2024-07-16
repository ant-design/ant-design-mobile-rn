import React from 'react'
import { ScrollView } from 'react-native'

import { List, Slider, Toast } from '../../'

export default function StepperExample() {
  const marks = {
    0: 0,
    20: 20,
    40: 40,
    60: 60,
    80: 80,
    100: 100,
  }

  const toastValue = (value: number | [number, number]) => {
    let text = ''
    if (typeof value === 'number') {
      text = `${value}`
    } else {
      text = `[${value.join(',')}]`
    }
    Toast.show({ content: `当前选中值为：${text}`, position: 'top' })
  }

  return (
    <ScrollView>
      <List renderHeader={'基础用法'}>
        <List.Item>
          <Slider onAfterChange={toastValue} />
        </List.Item>
      </List>
      <List renderHeader={'显示刻度(ticks)并指定步距(step)'}>
        <List.Item>
          <Slider ticks step={10} defaultValue={40} />
        </List.Item>
      </List>
      <List renderHeader={'传入刻度标记(marks)'}>
        <List.Item>
          <Slider marks={marks} ticks step={20} />
        </List.Item>
      </List>
      <List renderHeader={'最大(max)/最小值(min)'}>
        <List.Item>
          <Slider
            step={100}
            min={100}
            max={1000}
            ticks
            onAfterChange={toastValue}
          />
        </List.Item>
      </List>
      <List renderHeader={'双滑块(range)'}>
        <List.Item>
          <Slider marks={marks} ticks range defaultValue={[60, 40]} />
        </List.Item>
      </List>
      <List renderHeader={'在拖动时显示悬浮提示'}>
        <List.Item>
          <Slider popover />
        </List.Item>
      </List>
    </ScrollView>
  )
}
