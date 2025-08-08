---
category: Components
type: Layout
title: Divider
---

Divide sections of an article.
Divide inline text and links such as the operation column of table.

### Divider

| Properties        | Description                                                                                                         | Type                          | Default                    | Required |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------- | -------------------------- | -------- |
| content           | The wrapped title                                                                                                   | `React.ReactNode` \| `string` | `false`                    | false    |
| orientation       | The orientation type of divider                                                                                     | `horizontal` \| `vertical`    | `horizontal`               | false    |
| variant           | Whether line is dashed or solid                                                                                     | `solid` \| `dashed`           | `solid`                    | false    |
| position          | The position of title inside divider                                                                                | `left` \| `center` \|`right`  | `center`                   | false    |
| color             | The color of divider                                                                                                | `ColorValue`                  | `#c6c6c6`                  | false    |
| thickness         | The thickness of divider                                                                                            | `number`                      | `StyleSheet.hairlineWidth` | false    |
| pattern           | The length of line sections and the spacing between line sections. Only takes effect when `variant` equals `dashed` | `number[]`                    | `[4,2]`                    | false    |
| innerPadding      | The inner padding of wrapped title                                                                                  | `number` \| `string` \| `undefined`            | `10`                       | false    |
| orientationMargin | The margin-left/right between the title and its closest border, while the `position` must be `left` or `right`      | `number` \| `string` \| `undefined`              |                            | false    |
| style             | The style object of divider                                                                                         | `ViewStyle`                   |                            | false    |
