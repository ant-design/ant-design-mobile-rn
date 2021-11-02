/* tslint:disable:no-console */
import React from 'react'
import { View } from 'react-native'
import { List, SwipeAction } from '../../'

export default class BasicSwipeActionExample extends React.Component<any, any> {
  render() {
    const right = [
      {
        text: 'More',
        onPress: () => console.log('more'),
        backgroundColor: 'orange',
        color: 'white',
      },
      {
        text: 'Delete',
        onPress: () => console.log('delete'),
        backgroundColor: 'red',
        color: 'white',
      },
    ]
    const left = [
      {
        text: 'Read',
        onPress: () => console.log('read'),
        backgroundColor: 'blue',
        color: 'white',
      },
      {
        text: 'Reply',
        onPress: () => console.log('reply'),
        backgroundColor: 'green',
        color: 'white',
      },
    ]

    return (
      <View style={{ paddingTop: 30 }}>
        <List>
          <SwipeAction
            right={right}
            left={left}
            onSwipeableOpen={() => console.log('open')}
            onSwipeableClose={() => console.log('close')}>
            <List.Item extra="extra content">
              Simple example: left and right buttons
            </List.Item>
          </SwipeAction>
        </List>
      </View>
    )
  }
}
