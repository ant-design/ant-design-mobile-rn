import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

import { List, Slider, Switch, Toast } from '../../'

export default function StepperExample() {
  useEffect(() => {
    Toast.config({ stackable: false })
  }, [])

  const [disabledStep, setDisabledStep] = useState(false)
  const [tapToSeek, setTapToSeek] = useState(true)
  const marks = {
    0: 0,
    // 20: 20,
    40: 40,
    60: '',
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
      <List>
        <List.Item
          extra={
            <Switch
              checked={disabledStep}
              onChange={(val) => {
                setDisabledStep(val)
              }}
            />
          }>
          Disabled Step
          <List.Item.Brief>
            是否禁用步距；禁用后`onChange`将返回带有小数点的值
          </List.Item.Brief>
        </List.Item>
        <List.Item
          extra={
            <Switch
              checked={tapToSeek}
              onChange={(val) => {
                setTapToSeek(val)
              }}
            />
          }>
          Tap To Seek
          <List.Item.Brief>是否允许点击滑块轨道来设置slider值</List.Item.Brief>
        </List.Item>
      </List>
      <List
        renderHeader={'基础用法'}
        onStartShouldSetResponder={() => true}
        onTouchStart={(e) => e.stopPropagation()}>
        <List.Item>
          <Slider
            max={1}
            disabledStep={disabledStep}
            tapToSeek={tapToSeek}
            onChange={toastValue}
            onAfterChange={toastValue}
            onSlidingStart={(val, index) =>
              console.log('onSlidingStart', { val, index })
            }
            onSlidingComplete={(val, index) =>
              console.log('onSlidingComplete', { val, index })
            }
          />
        </List.Item>
      </List>
      <List renderHeader={'显示刻度(ticks)并指定步距(step)'}>
        <List.Item>
          <Slider
            ticks
            step={10}
            defaultValue={40}
            disabledStep={disabledStep}
            tapToSeek={tapToSeek}
          />
        </List.Item>
      </List>
      <List renderHeader={'传入刻度标记(marks)'}>
        <List.Item>
          <Slider
            marks={marks}
            ticks
            disabledStep={disabledStep}
            tapToSeek={tapToSeek}
          />
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
            disabledStep={disabledStep}
            tapToSeek={tapToSeek}
          />
        </List.Item>
      </List>
      <List renderHeader={'双滑块(range)'}>
        <List.Item>
          <Slider
            marks={marks}
            ticks
            range
            defaultValue={[60, 40]}
            disabledStep={disabledStep}
            tapToSeek={tapToSeek}
          />
        </List.Item>
      </List>
      <List renderHeader={'在拖动时显示悬浮提示'}>
        <List.Item>
          <Slider popover disabledStep={disabledStep} tapToSeek={tapToSeek} />
        </List.Item>
      </List>
    </ScrollView>
  )
}
