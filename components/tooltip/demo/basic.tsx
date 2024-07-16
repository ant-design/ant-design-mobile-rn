import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Button, Icon, List, Toast, Tooltip } from '../..'
import { Action, TooltipProps } from '../PropsType'

const actions: Action[] = [
  { key: 'scan', icon: <Icon name="scan" />, text: '扫一扫' },
  { key: 'payment', icon: <Icon name="pay-circle" />, text: '付钱/收钱' },
  { key: 'bus', icon: <Icon name="qrcode" />, text: '乘车码' },
  { key: 'assistant', icon: <Icon name="ant-design" />, text: '智能助理' },
]

export default function TooltipExample() {
  const [placement, setPlacement] =
    useState<TooltipProps['placement']>('top-start')

  useEffect(() => {
    let current = 0

    const timer = setInterval(() => {
      if (current >= directionList.length - 1) {
        current = 0
      } else {
        current += 1
      }
      setPlacement(directionList[current])
    }, 2000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <ScrollView {...Tooltip.scrollProps}>
      <List renderHeader="基本用法">
        <Tooltip
          content="Hello World"
          trigger="onPress"
          placement="right"
          defaultVisible>
          <Button style={{ alignSelf: 'flex-start', margin: 10 }}>点我</Button>
        </Tooltip>
      </List>
      <List renderHeader="深色气泡">
        <Tooltip content="Hello World" placement="bottom" mode="dark" visible>
          <Button
            style={{ alignSelf: 'flex-start', margin: 10, marginBottom: 30 }}>
            点我
          </Button>
        </Tooltip>
      </List>
      <List renderHeader="气泡位置" />
      <Tooltip
        visible
        content={
          <View>
            <Text>Popover</Text>
            <Text>Content</Text>
          </View>
        }
        placement={placement}>
        <Button style={{ alignSelf: 'center', margin: 10 }}>{placement}</Button>
      </Tooltip>
      <List renderHeader="浅色气泡菜单">
        <Tooltip.Menu
          actions={actions}
          placement="bottom-start"
          onAction={(node) => Toast.show(`选择了 ${node.text}`)}
          trigger="onPress">
          <Button style={{ alignSelf: 'flex-start', margin: 10 }}>点我</Button>
        </Tooltip.Menu>
      </List>
      <List renderHeader="深色气泡菜单">
        <Tooltip.Menu
          mode="dark"
          actions={actions}
          placement="bottom-start"
          onAction={(node) => Toast.show(`选择了 ${node.text}`)}
          trigger="onPress">
          <Button style={{ alignSelf: 'flex-start', margin: 10 }}>点我</Button>
        </Tooltip.Menu>
      </List>
      <List renderHeader="超过最大数量，隐藏滚动">
        <Tooltip.Menu
          actions={actions}
          maxCount={2}
          onAction={(node) => Toast.show(`选择了 ${node.text}`)}
          placement="bottom-start"
          trigger="onPress">
          <Button style={{ alignSelf: 'flex-start', margin: 10 }}>点我</Button>
        </Tooltip.Menu>
      </List>
    </ScrollView>
  )
}

const directionList = [
  'top-start',
  'top',
  'top-end',
  'right-start',
  'right',
  'right-end',
  'bottom-end',
  'bottom',
  'bottom-start',
  'left-end',
  'left',
  'left-start',
] as const
