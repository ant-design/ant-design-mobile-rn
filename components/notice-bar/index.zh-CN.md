---
category: Components
type: Data Display
title: NoticeBar
subtitle: 通告栏
version: update
---

在导航栏下方，一般用作系统提醒、活动提醒等通知。

### 规则
- 需要引起用户关注时使用，重要级别低于 Modal ，高于 Toast。
- 亦可实现轻量级的跑马灯效果。

## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
|-----|-----|------|-------|-----|
| action | 覆盖右侧图标 | `ReactNode` | - | |
| children | 子组件 | `ReactNode` | - | |
| icon | 左侧广播图标 | `ReactNode` | `<Icon name="sound" color={theme.brand_error} />`| |
| marqueeProps | 可滚动字幕组件参数 | [MarqueeProps](#marquee-props) | `{loop: false, leading: 500, trailing: 800, fps: 40}`  | |
| mode | 提示类型，控制右侧图标。存在`action`时将无效 | `closable`\|`link` | - | |
| onClose | 点击关闭的回调函数。仅当`mode="closable"`时生效 | `() => void` | - | `5.2.1` |
| onPress | 点击任意区域的回调函数 | `() => void` | - | |
| style  | 最外层样式 | `StyleProp<ViewStyle>` | - | |
| styles | 语义化结构 style | [NoticeBarStyle](#noticebarstyle-语义化样式) | - | |

 - 其中主题色 [theme.brand_error](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/style/themes/default.tsx#L35) = `#f4333c`


### MarqueeProps

| 属性 | 说明 | 类型 | 默认值 | 版本 |
|-----|------|-----|-------|-----|
| autoFill | 是否自动用children的副本填充字幕框中的空白区域 | `Boolean` | `false` | `5.2.1` |
| direction | 字幕滑动的方向 | `'left'` \| `'right'` \| `'up'` \| `'down'` | `'left'` | `5.2.2`新增`'up'`&`'down'`  |
| fps | 滚动速度，单位 `pixels/second` | `Number` |  40  | |
| leading | 渲染后动画延迟的时间（以毫秒为单位） | `Number` | 500 | |
| loop | 字幕循环的次数, `true`或`0`表示无限次 |  `Boolean` \| `Number` | `false` | |
| onFinish | 当字幕结束滚动时的回调。仅当`loop={false}`或`非零`时调用 | `() => void` | - | `5.2.1` |
| onCycleComplete | 当字幕完成循环时的回调。如果达到最大循环次数，则不会调用（改用 `onFinish`） | `() => void` | - | `5.2.1` |
| play | 播放或暂停滚动字幕 | `Boolean` | `true` | `5.2.1` |
| spacing | 重复字幕之间的间距。仅当`autoFill={true}`时有效 | `Number` | 0 | `5.2.1` |
| style | 字幕样式 | `TextStyle` | - | |
| trailing | 上一次循环后到下一次动画的延迟时间（以毫秒为单位） | `Number` | 800 | |
| wrapStyle | Marquee组件外部style | `ViewStyle` | - | |

> 设计参考：[https://github.com/justin-chu/react-fast-marquee](https://github.com/justin-chu/react-fast-marquee)，可作为跑马灯组件单独使用

```jsx
// 5.2.2 新增
import { Marquee } from '@ant-design/react-native'
```

## NoticeBarStyle 语义化样式

`5.2.1`重构了样式

```ts
interface NoticeBarStyle {
    container: ViewStyle,   // 最外层容器样式，默认:{minHeight: 36(theme.notice_bar_height)}
    font: TextStyle,        // 字体样式，默认:{color: #f4333c(theme.brand_error)}
    background: ViewStyle,  // 背景颜色，默认:{backgroundColor: #fffada}

    marquee: TextStyle,     // 滚动字幕字体样式

    iconWrap: ViewStyle,    // 左侧icon
    actionWrap: ViewStyle,  // 右侧action
    close: ViewStyle,       // mode="closeable" icon
    link: ViewStyle         // mode="link" icon
}
```

## Ref

`5.2.2`新增。 指向 MarqueeActions。

| 参数 | 说明 | 类型 |
|-----|------|------|
| play | 让字幕开始滚动 | `() => void` |
| pause | 让字幕暂停滚动 | `() => void` |
| stop | 让字幕归位初始位置 | `() => void` |
