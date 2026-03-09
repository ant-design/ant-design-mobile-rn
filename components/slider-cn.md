# Slider

允许用户在一个区间中选择特定值，eg：控制屏幕的显示亮度。

### 规则
- 默认状态下，左边为最小值，右边为最大值。
- 一般水平放置。

## 代码演示

```tsx
import { List, Provider, Slider, Switch, Toast } from '@ant-design/react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

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
    <Provider>
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
            <List.Item.Brief>
              是否允许点击滑块轨道来设置slider值
            </List.Item.Brief>
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
    </Provider>
  )
}
```

## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultValue | 默认值 | `number` \|<br/> `[number, number]` | `range ? [0, 0] : 0` | |
| disabled | 是否禁用 | `boolean` | `false` | |
| disabledStep | 是否禁用步距；禁用后`onChange`将返回带有小数点的值 | `boolean` | `false` | `5.3.0` |
| icon | 滑块的图标 | `ReactNode` | - | |
| marks | 刻度标记 | `{ [key: number]: React.ReactNode }` | - | `5.2.1` |
| max | 最大值 | `number` | `100` | |
| min | 最小值 | `number` | `0` | |
| onAfterChange | 与 `touchend` 触发时机一致，把当前值作为参数传入 | `(value: number | [number, number]) => void` | - | |
| onChange | 拖拽滑块时触发，并把当前拖拽的值作为参数传入 | `(value: number | [number, number]) => void` | - | |
| onSlidingStart | 当用户拿起滑块时调用的回调。<br/>初始值作为参数传递给回调处理程序。 | `(value: number | [number, number], index: number) => void` | - | `5.3.0` |
| onSlidingComplete | 当用户释放滑块时调用的回调，无论值是否已更改。<br/>当前值作为参数传递给回调处理程序。 | `(value: number | [number, number], index: number) => void` | - | `5.3.0` |
| popover | 是否在拖动时显示悬浮提示，支持传入函数自定义渲染内容 | `boolean | ((value: number) => ReactNode)` | `false` | `5.2.1` |
| residentPopover | `popover` 是否常驻显示，`popover` 存在时生效 | `boolean ` | `false` | `5.2.1` |
| range | 是否为双滑块 | `boolean` | `false` | `5.2.1` |
| step | 步距，取值必须大于 `0`，并且 `(max - min)` 可被 `step` 整除。当 `marks` 不为空对象时，`step` 的配置失效 | `number` | `1` | `5.2.1` |
| style  | 最外层容器样式 | `StyleProp<ViewStyle>` | - | |
| styles | 语义化结构 style | [SliderStyle](#sliderstyle-语义化样式) | - | `5.2.1` |
| tapToSeek | 允许点击轨道来设置 thumb icon 位置 | `boolean` | `true` | `5.3.0` |
| ticks | 是否显示刻度 | `boolean` | `false` | `5.2.1` |
| value | 当前值 | `number` \|<br/> `[number, number]` | - | |

> 当 `range={true}` 时返回的 `value` 格式为 `[number, number]` ，否则为 `number` 。

### SliderStyle 语义化样式

```typescript
interface SliderStyle {
  slider: ViewStyle // 同 style，`range=false`时属于PanGesture区域
  disabled: ViewStyle

  // 轨道
  trackContianer: ViewStyle // 轨道容器
  track: ViewStyle // 轨道线
  fill: ViewStyle // 轨道填充部分

  // 滑轨按钮wrap+阴影
  thumb: ViewStyle

  // 刻度
  ticks: ViewStyle
  tick: ViewStyle
  tickActive: ViewStyle

  // 刻度下的标记
  mark: ViewStyle
  markText: TextStyle
}
```
