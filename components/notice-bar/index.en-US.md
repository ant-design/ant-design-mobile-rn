---
category: Components
type: Data Display
title: NoticeBar
version: update
---

Component to display a system message, event notice and etc. Which is under the navigation bar.

### Rules

- Be used to attract user's attension, the importance level is lower than `Modal` and higher than `Toast`.

## API

| Properties | Descrition | Type | Default | Version |
|------------|------------|------|---------|---------|
| action | text which is used to replace right icon | `ReactNode` | - | |
| children | The children rendered inside the marquee | `ReactNode` | - | |
| icon | Set the icon at the start position | `ReactNode` | `<Icon name="sound" color={theme.brand_error} />`| |
| marqueeProps | marquee params | [MarqueeProps](#marquee-props) | `{loop: false, leading: 500, trailing: 800, fps: 40}`  | |
| mode | Type of NoticeBar. Invalid when `action` is present | `closable`\|`link` | - | |
| onClose | A callback function, can be executed when you click the `action` icon. Only valid in `mode="closable"` | `() => void` | - | `5.2.1` |
| onPress | A callback function, can be executed when you click on the operating area | `() => void` | - | |
| style  | Container style | `StyleProp<ViewStyle>` | - | |
| styles | Semantic DOM style | [NoticeBarStyle](#noticebarstyle-interface) | - | |

- Theme color [theme.brand_error](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/style/themes/default.tsx#L35) = `#f4333c`

### Marquee props

> Design Reference https://github.com/justin-chu/react-fast-marquee

| Properties | Descrition | Type | Default | Version |
|------------|------------|------|---------|---------|
| autoFill | Whether to automatically fill blank space in the marquee with copies of the children or not | `Boolean` | false | `5.2.1` |
| direction | The direction the marquee slides | `"left"` \| `"right"` | "left" | `5.2.1` |
| fps | Speed calculated as pixels/second | `Number` |  40  | |
| leading | Duration to delay the animation after first render, in millisecond | `Number` | 500 | |
| loop | The number of times the marquee should loop, `true/0` is equivalent to infinite |  `Boolean` \| `Number` | false | |
| onFinish | A callback for when the marquee finishes scrolling and stops. Only calls if loop is non-zero or false. | `() => void` | - | `5.2.1` |
| onCycleComplete | A callback for when the marquee finishes a loop. Does not call if maximum loops are reached (use onFinish instead). | `() => void` | - | `5.2.1` |
| play | Whether to play or pause the marquee | `Boolean` | true | `5.2.1` |
| spacing | Spacing between repeting elements, valid when `autoFill={true}` | `Number` | 0 | `5.2.1` |
| style | The marquee Text style | `TextStyle` | - | |
| trailing | Duration to delay the animation after previous loop, valid when `autoFill={false}`, in millisecond | `Number` | 800 | |

## NoticeBarStyle interface

> New in `5.2.1`

```ts
interface NoticeBarStyle {
    container: ViewStyle,   // Outermost container style
    font: TextStyle,        // Font style, default: {color: theme.brand_error}
    background: ViewStyle,  // Background color, default: {backgroundColor: #fffada}

    marquee: TextStyle,     // marquee font style

    iconWrap: ViewStyle,    // left icon wrap
    actionWrap: ViewStyle,  // right action wrap
    close: ViewStyle,       // mode="closeable" icon
    link: ViewStyle         // mode="link" icon
}
```