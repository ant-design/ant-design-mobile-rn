import React from 'react'
import { ScrollView } from 'react-native'
import { Button, List, Tooltip } from '../..'

export default function TooltipExample() {
  return (
    <ScrollView>
      <List renderHeader="基本用法">
        <Tooltip
          content="Hello World"
          trigger="click"
          placement="right"
          defaultVisible>
          <Button>点我</Button>
        </Tooltip>
      </List>
    </ScrollView>
  )
}
