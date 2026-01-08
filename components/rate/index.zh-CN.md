---
category: Components
type: Data Display
title: Rate
subtitle: 评分
version: 5.5.0
---

用图形表示评分等级程度。

### 规则

- 适用于展示事物评级以及快速打分。

## API

| 属性            | 说明                                                      | 类型                                                                                                  | 默认值           |
| --------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ---------------- |
| value           | 当前数，受控值                                            | `number`                                                                                              | -                |
| defaultValue    | 默认值                                                    | `number`                                                                                              | `0`              |
| count           | star 总数                                                 | `number`                                                                                              | `5`              |
| readOnly        | 只读，无法进行交互                                        | `boolean`                                                                                             | `false`          |
| allowClear      | 是否允许再次点击后清除，仅在`allowSwiping`为`false`时生效 | `boolean`                                                                                             | `false`          |
| allowHalf       | 是否允许半选                                              | `boolean`                                                                                             | `false`          |
| allowSwiping    | 是否允许滑动评分                                          | `boolean`                                                                                             | `false`          |
| style           | 样式                                                      | `ViewStyle`                                                                                           | -                |
| color           | 填充 star 的颜色                                          | `string`                                                                                              | `#ff9f18`        |
| emptyColor      | 空 star 的颜色                                            | `string`                                                                                              | `#eeeeee`        |
| iconName        | 图标名称                                                  | `string`                                                                                              | `star`, 默认星星 |
| iconType        | 图标类型                                                  | `fill ｜ outline`                                                                                     | `fill`, 实底风格 |
| iconSize        | 图标大小                                                  | `number`                                                                                              | `32`             |
| iconStyle       | 图标样式                                                  | `ViewStyle`                                                                                           | -                |
| animationConfig | 动画配置                                                  | `boolean ｜ {easing?: (value: number) => number; duration?: number; delay?: number; scale?: number;}` | -                |
| onChange        | 选择时的回调                                              | `(value: number) => void`                                                                             | -                |
| onRatingStart   | 在交互开始时的回调，在`onChange`之前                      | `(value: number) => void`                                                                             | -                |
| onRatingEnd     | 在交互结束时的回调，在`onChange`之后                      | `(value: number) => void`                                                                             | -                |
