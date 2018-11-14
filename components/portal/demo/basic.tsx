import React, { Fragment } from 'react';
import { Text, View } from 'react-native';
import Portal from '../portal';

export default class PopoverExample extends React.Component<any, any> {
  render() {
    return (
      <Fragment>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
          <Portal key={i}>
            <View
              style={{
                marginTop: 88 + i * 30,
                backgroundColor: 'red',
                height: 100,
                opacity: i * 0.1,
              }}
            >
              <Text style={{ fontWeight: '700', fontSize: 24 }}>{i}</Text>
            </View>
          </Portal>
        ))}
      </Fragment>
    );
  }
}

export const title = 'Portal';
export const description = 'Portal example';
