import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Button, List, Tooltip } from '../..'
import { TooltipProps } from '../PropsType'

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
    <ScrollView>
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
        <Tooltip
          content="Hello World"
          placement="bottom"
          mode="dark"
          defaultVisible>
          <Button style={{ alignSelf: 'flex-start', margin: 10 }}>点我</Button>
        </Tooltip>
      </List>
      <List renderHeader="气泡位置">
        <Tooltip
          // key={placement}
          visible
          content={
            <View>
              <Text>Popover</Text>
              <Text>Content</Text>
            </View>
          }
          placement={placement}>
          <Button style={{ alignSelf: 'center', margin: 10 }}>
            {placement}
          </Button>
        </Tooltip>
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
