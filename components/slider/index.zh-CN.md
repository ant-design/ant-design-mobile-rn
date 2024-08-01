---
category: Components
type: Data Entry
title: Slider
subtitle: 滑动输入条
version: update
---

允许用户在一个区间中选择特定值，eg：控制屏幕的显示亮度。

### 规则
- 默认状态下，左边为最小值，右边为最大值。
- 一般水平放置。

## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultValue | 默认值 | `number` \|<br/> `[number, number]` | `range ? [0, 0] : 0` | |
| disabled | 是否禁用 | `boolean` | `false` | |
| icon | 滑块的图标 | `ReactNode` | - | |
| marks | 刻度标记 | `{ [key: number]: React.ReactNode }` | - | `5.2.0` |
| max | 最大值 | `number` | `100` | |
| min | 最小值 | `number` | `0` | |
| onAfterChange | 与 `touchend` 触发时机一致，把当前值作为参数传入 | `(value: number | [number, number]) => void` | - | |
| onChange | 拖拽滑块时触发，并把当前拖拽的值作为参数传入 | `(value: number | [number, number]) => void` | - | |
| popover | 是否在拖动时显示悬浮提示，支持传入函数自定义渲染内容 | `boolean | ((value: number) => ReactNode)` | `false` | `5.2.0` |
| residentPopover | `popover` 是否常驻显示，`popover` 存在时生效 | `boolean ` | `false` | `5.2.0` |
| range | 是否为双滑块 | `boolean` | `false` | `5.2.0` |
| step | 步距，取值必须大于 `0`，并且 `(max - min)` 可被 `step` 整除。当 `marks` 不为空对象时，`step` 的配置失效 | `number` | `1` | `5.2.0` |
| style  | 最外层容器样式 | `StyleProp<ViewStyle>` | - | |
| styles | 语义化结构 style | [SliderStyle](#sliderstyle-语义化样式) | - | `5.2.0` |
| ticks | 是否显示刻度 | `boolean` | `false` | `5.2.0` |
| value | 当前值 | `number` \|<br/> `[number, number]` | - | |

> 当 `range={true}` 时返回的 `value` 格式为 `[number, number]` ，否则为 `number` 。

### SliderStyle 语义化样式

```typescript
interface SliderStyle {
  slider: ViewStyle // 同 style
  disabled: ViewStyle
  trackContianer: ViewStyle // 轨道容器
  track: ViewStyle // 轨道线
  fill: ViewStyle // 轨道填充部分

  // 滑轨按钮
  thumb: ViewStyle

  // 刻度
  ticks: ViewStyle
  tick: ViewStyle
  tickActive: ViewStyle

  // 刻度下的标记
  mark: ViewStyle
  markText: TextStyle
  markTextActive: TextStyle
}
```