/* tslint:disable:no-console */
import React from 'react'
import { View } from 'react-native'
import { List, SwipeAction } from '../../'

export default class BasicSwipeActionExample extends React.Component<any, any> {
  render() {
    const right = [
      {
        text: 'More',
        onPress: () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              console.log('asd')
              resolve(123)
            }, 1500)
          })
        },
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
        // onPress: () => console.log('reply'),
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
            // closeOnAction={true}
            // closeOnTouchOutside={false}
            closeOnAction={false}
            closeOnTouchOutside
            // onSwipeableOpen={() => console.log('open')}
            // onSwipeableClose={() => console.log('close')}
          >
            <List.Item extra="extra content" disabled>
              Simple example: left and right buttons
            </List.Item>
          </SwipeAction>
        </List>
      </View>
    )
  }
}
