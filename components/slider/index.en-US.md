---
category: Components
type: Data Entry
title: Slider
---

A Slider component for selecting particular value in range, eg: controls the display brightness of the screen.

### Rule
- By default, the minimum value in the left and maximum value in the right of `Slider` .
- Generally `Slider` is positioned horizontally.

## API

| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| defaultValue | Default value | `number \| [number, number]` | `range ? [0, 0] : 0` |
| disabled | Whether disabled | `boolean` | `false` |
| icon | The icon of slider | `ReactNode` | - |
| marks | Tick marks | `{ [key: number]: React.ReactNode }` | - |
| max | Max value | `number` | `100` |
| min | Min value | `number` | `0` |
| onAfterChange | Consistent with the trigger timing of `touchend`, pass the current value as a parameter | `(value: number \| [number, number]) => void` | - |
| onChange | Triggered when the slider is dragged, and the current dragged value is passed in as a parameter | `(value: number \| [number, number]) => void` | - |
| range | Whether it is a double sliders | `boolean` | `false` |
| step | Step distance, the value must be greater than `0`, and `(max-min)` can be divisible by `step`. When `marks` is not null, the configuration of `step` is invalid | `number` | `1` |
| ticks | Whether to display the scale | `boolean` | `false` |
| value | Current value | `number \| [number, number]` | - |