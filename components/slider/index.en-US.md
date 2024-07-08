---
category: Components
type: Data Entry
title: Slider
version: 5.2.0-rc.1
---

A Slider component for selecting particular value in range, eg: controls the display brightness of the screen.

### Rule
- By default, the minimum value in the left and maximum value in the right of `Slider` .
- Generally `Slider` is positioned horizontally.

## API

| Properties | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| defaultValue | Default value | `number` \|<br/> `[number, number]` | `range ? [0, 0] : 0` | |
| disabled | Whether disabled | `boolean` | `false` | |
| icon | The icon of slider | `ReactNode` | - | |
| marks | Tick marks | `{ [key: number]: React.ReactNode }` | - | `5.2.0` |
| max | Max value | `number` | `100` | |
| min | Min value | `number` | `0` | |
| onAfterChange | Consistent with the trigger timing of `touchend`, pass the current value as a parameter | `(value: number | [number, number]) => void` | - | |
| onChange | Triggered when the slider is dragged, and the current dragged value is passed in as a parameter | `(value: number | [number, number]) => void` | - | |
| range | Whether it is a double sliders | `boolean` | `false` | `5.2.0` |
| step | Step distance, the value must be greater than `0`, and `(max-min)` can be divisible by `step`. When `marks` is not null, the configuration of `step` is invalid | `number` | `1` | `5.2.0` |
| ticks | Whether to display the scale | `boolean` | `false` | `5.2.0` |
| value | Current value | `number` \|<br/> `[number, number]` | - | |

> The returned `value` format is `[number, number]` when `range={true}`, otherwise it is `number`.