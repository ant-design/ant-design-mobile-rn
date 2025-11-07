---
category: Components
type: Data Display
title: Rate
---

Graphical representation of the degree of rating scale.

### Rule

- Useful for showing things ratings and quick scoring.

## API

| Name            | Description                                                                             | Type                                                                                                  | Default   |
| --------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | --------- |
| value           | The value of rate.                                                                      | `number`                                                                                              | -         |
| defaultValue    | The default value of rate.                                                              | `number`                                                                                              | `0`       |
| count           | Total number of stars.                                                                  | `number`                                                                                              | `5`       |
| readOnly        | The component is unable to interact when `true`.                                        | `boolean`                                                                                             | `false`   |
| allowClear      | Whether to allow clearing after another click. Only works when `allowSwiping` is `false` | `boolean`                                                                                             | `false`   |
| allowHalf       | Whether to allow the selection of half.                                                 | `boolean`                                                                                             | `false`   |
| allowSwiping    | Whether to allow swiping to rate.                                                       | `boolean`                                                                                             | `false`   |
| style           | style                                                                                   | `ViewStyle`                                                                                           | -         |
| color           | The color for filled star                                                               | `string`                                                                                              | `#ff9f18` |
| emptyColor      | The color for empty star                                                                | `string`                                                                                              | `#eeeeee` |
| iconName        | The name of icon                                                                        | `string`                                                                                              | `star`    |
| iconType        | The type of icon                                                                        | `fill ｜ outline`                                                                                     | `fill`    |
| iconSize        | The size of icon                                                                        | `number`                                                                                              | `32`      |
| iconStyle       | The style of icon                                                                       | `ViewStyle`                                                                                           | -         |
| animationConfig | The config of animation                                                                 | `boolean ｜ {easing?: (value: number) => number; duration?: number; delay?: number; scale?: number;}` | -         |
| onChange        | Callback when select.                                                                   | `(value: number) => void`                                                                             | -         |
| onRatingStart   | The callback at the beginning of the interaction, before `onChange`                     | `(value: number) => void`                                                                             | -         |
| onRatingEnd     | The callback at the ending of the interaction, after `onChange`                         | `(value: number) => void`                                                                             | -         |
