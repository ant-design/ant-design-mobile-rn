# NoticeBar

Component to display a system message, event notice and etc. Which is under the navigation bar.

### Rules

- Be used to attract user's attension, the importance level is lower than `Modal` and higher than `Toast`.
- It can also achieve a lightweight marquee effect.

## Examples

```tsx
import {
  Icon,
  List,
  NoticeBar,
  Picker,
  Provider,
  Slider,
  Switch,
  WhiteSpace,
} from '@ant-design/react-native'
import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'

export default function NoticeBarExample() {
  return (
    <Provider>
      <ScrollView style={{ marginBottom: 40 }}>
        {true && (
          <>
            <List renderHeader={'自定义颜色'}>
              <WhiteSpace />
              <NoticeBar>默认</NoticeBar>
              <WhiteSpace />
              <NoticeBar
                styles={{
                  font: { color: '#ffffff' },
                  background: { backgroundColor: '#f4333c' },
                }}>
                错误
              </NoticeBar>
              <WhiteSpace />
              <NoticeBar
                styles={{
                  font: { color: '#108ee9' },
                  background: { backgroundColor: '#d0e4ff' },
                }}>
                信息
              </NoticeBar>
              <WhiteSpace />
            </List>
            <List renderHeader={'可关闭'}>
              <NoticeBar mode="closable">这条通知可以关闭</NoticeBar>
            </List>
            <List renderHeader={'超长滚动'}>
              <WhiteSpace />
              <NoticeBar marqueeProps={{ loop: true }}>
                Notice: I can be a React component, multiple React components,
                or just some text.
              </NoticeBar>
              <WhiteSpace />
              <NoticeBar
                marqueeProps={{
                  loop: true,
                  autoFill: true,
                  trailing: 0,
                  spacing: 10,
                }}>
                autoFill&spacing
              </NoticeBar>
            </List>
            <List renderHeader={'自定义'}>
              <WhiteSpace />
              <NoticeBar
                mode="link"
                onPress={() => {
                  console.log('onPress')
                }}>
                mode="link"
              </NoticeBar>
              <WhiteSpace />
              <NoticeBar
                mode="closable"
                icon={<Icon name="compass" style={{ color: '#f4333c' }} />}
                action={
                  <Icon name="close-circle" style={{ color: '#f4333c' }} />
                }>
                自定义图标
              </NoticeBar>
              <WhiteSpace />
              <NoticeBar
                marqueeProps={{ loop: true, autoFill: true }}
                mode="closable"
                action={<Text style={{ color: '#a1a1a1' }}>不再提示</Text>}>
                自定义右侧功能区 Closable demo for `action`.
              </NoticeBar>
              <WhiteSpace />
            </List>
          </>
        )}
        <List renderHeader={'方向/播放/暂停控制'}>
          <ControlDemo />
        </List>
      </ScrollView>
    </Provider>
  )
}

function ControlDemo() {
  const [play, setPlay] = useState(true)
  const [autoFill, setAutoFill] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right' | 'up' | 'down'>(
    'left',
  )
  const [fps, setFps] = useState(40)
  return (
    <>
      <WhiteSpace />
      <NoticeBar
        marqueeProps={{
          play,
          autoFill,
          direction,
          fps,
          loop: 0,
        }}>
        Notice: I can be a React component, multiple React components, or just
        some text.
      </NoticeBar>
      <WhiteSpace />
      <List.Item extra={<Switch checked={play} onChange={setPlay} />}>
        Play
      </List.Item>
      <List.Item extra={<Switch checked={autoFill} onChange={setAutoFill} />}>
        AutoFill
      </List.Item>
      <Picker
        data={[
          { label: 'Left', value: 'left' },
          { label: 'Right', value: 'right' },
          { label: 'Up', value: 'up' },
          { label: 'Down', value: 'down' },
        ]}
        value={[direction]}
        onChange={(val) => setDirection(val[0] as any)}>
        <List.Item arrow="horizontal">Direction</List.Item>
      </Picker>
      <List.Item>
        <List.Item.Brief>速度fps: {fps}</List.Item.Brief>
        <Slider
          onAfterChange={setFps}
          ticks
          step={10}
          defaultValue={fps}
          popover
        />
      </List.Item>
    </>
  )
}
```

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

| Properties | Descrition | Type | Default | Version |
|------------|------------|------|---------|---------|
| autoFill | Whether to automatically fill blank space in the marquee with copies of the children or not | `Boolean` | false | `5.2.1` |
| direction | The direction the marquee slides | `'left'` \| `'right'` \| `'up'` \| `'down'` | `'left'` | `5.2.2` add `'up'`&`'down'`  |
| fps | Speed calculated as pixels/second | `Number` |  40  | |
| leading | Duration to delay the animation after first render, in millisecond | `Number` | 500 | |
| loop | The number of times the marquee should loop, `true/0` is equivalent to infinite |  `Boolean` \| `Number` | false | |
| onFinish | A callback for when the marquee finishes scrolling and stops. Only calls if loop is non-zero or false. | `() => void` | - | `5.2.1` |
| onCycleComplete | A callback for when the marquee finishes a loop. Does not call if maximum loops are reached (use onFinish instead). | `() => void` | - | `5.2.1` |
| play | Whether to play or pause the marquee | `Boolean` | true | `5.2.1` |
| spacing | Spacing between repeting elements, valid when `autoFill={true}` | `Number` | 0 | `5.2.1` |
| style | The marquee Text style | `TextStyle` | - | |
| trailing | Duration to delay the animation after previous loop, valid when `autoFill={false}`, in millisecond | `Number` | 800 | |
| wrapStyle | Marquee wrap view style | `ViewStyle` | - | |

> Design Reference: [https://github.com/justin-chu/react-fast-marquee](https://github.com/justin-chu/react-fast-marquee), can be used as a marquee component alone

```jsx
// New in 5.2.2
import { Marquee } from '@ant-design/react-native'
```

## NoticeBarStyle interface

`5.2.1`refactored the styles

```ts
interface NoticeBarStyle {
    container: ViewStyle,   // Outermost container style, default: {minHeight: 36(theme.notice_bar_height)}
    font: TextStyle,        // Font style, default: {color: #f4333c(theme.brand_error)}
    background: ViewStyle,  // Background color, default: {backgroundColor: #fffada}

    marquee: TextStyle,     // marquee font style

    iconWrap: ViewStyle,    // left icon wrap
    actionWrap: ViewStyle,  // right action wrap
    close: ViewStyle,       // mode="closeable" icon
    link: ViewStyle         // mode="link" icon
}
```

## Ref

New in `5.2.1`. Ref to MarqueeActions.

| Properties | Descrition | Type|
|-----|------|------|
| play | Start the marquee text rolling | `() => void` |
| pause | Pause the marquee text | `() => void` |
| stop | Return the marquee text to the original position | `() => void` |
