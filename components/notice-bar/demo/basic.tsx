import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { Icon, List, NoticeBar, Slider, Switch, WhiteSpace } from '../../'

export default function NoticeBarExample() {
  return (
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
              Notice: I can be a React component, multiple React components, or
              just some text.
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
  )
}

function ControlDemo() {
  const [play, setPlay] = useState(true)
  const [autoFill, setAutoFill] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('left')
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
      <List.Item
        extra={
          <Switch
            checkedChildren="L"
            unCheckedChildren="R"
            checked={direction === 'left'}
            onChange={(checked) => setDirection(checked ? 'left' : 'right')}
          />
        }>
        Direction
      </List.Item>
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
