import React from 'react';
import { Text, View } from 'react-native';
import { Button, Icon, Portal } from '../..';

export default class PopoverExample extends React.Component<any, any> {
  render() {
    let key: number;

    const contents = (
      <View style={{ backgroundColor: 'green', padding: 100 }}>
        <Button
          onPress={() => {
            Portal.remove(key);
          }}
          type="primary"
          style={{
            position: 'absolute',
            top: 100,
            right: 0,
          }}
        >
          <Icon name="close-circle" />
        </Button>
        <View>
          <Text>自定义Portal</Text>
        </View>
      </View>
    );
    return (
      <View>
        <Button
          onPress={() => {
            key = Portal.add(contents);
          }}
        >
          Open Portal
        </Button>
      </View>
    );
  }
}

export const title = 'Portal';
export const description = 'Portal example';
