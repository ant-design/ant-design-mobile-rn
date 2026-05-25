## NoticeBar

### Usage Example

```jsx
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

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface NoticeBarStyle {
  container: ViewStyle
  font: TextStyle
  background: ViewStyle
  marquee: TextStyle
  iconWrap: ViewStyle
  actionWrap: ViewStyle
  close: TextStyle
  link: TextStyle
}

export default (variables: Theme) =>
  StyleSheet.create<NoticeBarStyle>({
    font: {
      color: variables.brand_error,
    },
    background: {
      backgroundColor: variables.notice_bar_fill,
    },
    container: {
      minHeight: variables.notice_bar_height,
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'center',
    },
    marquee: {
      fontSize: variables.font_size_subhead,
    },
    iconWrap: {
      marginLeft: variables.h_spacing_lg,
      marginRight: variables.h_spacing_sm,
    },
    actionWrap: {
      justifyContent: 'center',
      paddingRight: variables.h_spacing_lg,
      paddingLeft: variables.h_spacing_sm,
    },
    close: {
      fontSize: 18,
      fontWeight: '200',
      textAlign: 'left',
    },
    link: {
      transform: [{ rotate: '225deg' }],
      fontWeight: '500',
      textAlign: 'left',
    },
  })
```

### Abstract DOM Structure

```html
<!-- 整体容器，包裹背景、图标、滚动文本和操作区域；对应 styles.container：容器区域样式 -->
<View styles={{ container, background, style }}>
  <!-- 可选图标容器，放置左侧图标；对应 styles.iconWrap：图标包裹区域 -->
  <View styles={{ iconWrap }}>
    <!-- icon 元素，任意 ReactNode -->
  </View>

  <!-- 滚动文本组件，负责滚动字幕效果；对应 styles.marquee：滚动文本容器样式，styles.font：文本字体样式，支持传入 style 透传 -->
  <Marquee style={...} styles={{ font, marquee }} ref={ref}>
    <!-- 滚动文本内容 -->
  </Marquee>

  <!-- 操作区域容器，展示关闭按钮或链接图标；对应 styles.actionWrap：操作区域包裹容器 -->
  <View styles={{ actionWrap }}>
    <!-- 条件渲染节点 -->
    <!-- 当 mode 为 closable 时 -->
    <!-- 关闭按钮文本或自定义操作内容；对应 styles.close：关闭按钮文本样式，styles.font：字体样式 -->
    <Text styles={{ font, close }} />
    <!-- 当 mode 为 link 或有自定义 action 时 -->
    <!-- 链接图标文本或自定义操作内容；对应 styles.link：链接文本样式，styles.font：字体样式 -->
    <Text styles={{ font, link }} />
  </View>
</View>
<!-- 当 mode 非 closable 时，整体外包裹一个点击区域，用于触发 onPress 事件 -->
<TouchableWithoutFeedback>
  <!-- 上述 View 容器作为子节点 -->
</TouchableWithoutFeedback>
```
