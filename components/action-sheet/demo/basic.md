---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

[Demo Source Code](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/action-sheet/demo/basic.tsx)

```jsx
import React from 'react';
import { View, Text, Platform } from 'react-native';
import { ActionSheet, Button } from '@ant-design/react-native';
export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.showActionSheet = () => {
      const BUTTONS = [
        'Operation1',
        'Operation2',
        'Operation3',
        'Delete',
        'Cancel',
      ];
      ActionSheet.showActionSheetWithOptions(
        {
          title: 'Title',
          message: 'Description',
          options: BUTTONS,
          cancelButtonIndex: 4,
          destructiveButtonIndex: 3,
        },
        buttonIndex => {
          this.setState({ clicked: BUTTONS[buttonIndex] });
        }
      );
    };
    this.showShareActionSheet = () => {
      const opts = {
        message: 'Message to go with the shared url',
        title: 'Share Actionsheet',
      };
      if (Platform.OS === 'ios') {
        opts.url = 'https://www.alipay.com/';
        opts.tintColor = '#ff0000';
        opts.excludedActivityTypes = ['com.apple.UIKit.activity.PostToTwitter'];
      }
      ActionSheet.showShareActionSheetWithOptions(
        opts,
        error => alert(error),
        (success, method) => {
          let text;
          if (success) {
            text = `Shared with ${method}`;
          } else {
            text = 'Did not share';
          }
          this.setState({ text });
        }
      );
    };
    this.state = {
      clicked: 'none',
      text: '',
    };
  }
  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <View style={[{ padding: 8 }]}>
          <Button onPress={this.showActionSheet}>showActionSheet</Button>
        </View>
        <Text style={[{ padding: 8 }]}>
          clicked button: {this.state.clicked}
        </Text>
        <View style={[{ padding: 8 }]}>
          <Button onPress={this.showShareActionSheet}>
            showShareActionSheet
          </Button>
        </View>
        <Text style={[{ padding: 8 }]}>{this.state.text}</Text>
      </View>
    );
  }
}
export const title = 'ActionSheet';
export const description = 'ActionSheet example';
```
