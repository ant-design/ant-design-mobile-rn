---
category: Components
type: Layout
title: Divider
subtitle: 分割线
---

对不同章节的文本段落进行分割。
对行内文字/链接进行分割，例如表格的操作列。

### Divider

| 属性              | 说明                                                                                         | 类型                          | 默认值                     | 必选  |
| ----------------- | -------------------------------------------------------------------------------------------- | ----------------------------- | -------------------------- | ----- |
| content           | 嵌套的标题                                                                                   | `React.ReactNode` \| `string` | `false`                    | false |
| orientation       | 水平还是垂直类型                                                                             | `horizontal` \| `vertical`    | `horizontal`               | false |
| variant           | 分割线是实线、还是虚线                                                                       | `solid` \| `dashed`           | `solid`                    | false |
| position          | 标题的位置                                                                                   | `left` \| `center` \|`right`  | `center`                   | false |
| color             | 分割线颜色                                                                                   | `ColorValue`                  | `#c6c6c6`                  | false |
| thickness         | 分割线厚度                                                                                   | `number`                      | `StyleSheet.hairlineWidth` | false |
| pattern           | 虚线节段长度、间距。 仅`variant` 为 `dashed`时生效。                                         | `number[]`                    | `[4,2]`                    | false |
| innerPadding      | 标题的内边距                                                                                 | `number` \| `string` \| `undefined`              | `10`                       | false |
| orientationMargin | 标题和最近 left/right 边框之间的距离，去除了分割线，同时 `position` 必须为 `left` 或 `right` | `number` \| `string` \| `undefined`            |                            | false |
| style             | 分割线样式对象                                                                               | `ViewStyle`                   |                            | false |
