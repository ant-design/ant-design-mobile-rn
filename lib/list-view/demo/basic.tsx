import React from 'react';
import { Text, View } from 'react-native';
import { ListView } from '../../';

export default class BasicListExample extends React.Component<any, any> {
  state = {
    layout: 'list',
  };
  sleep = (time: any) =>
    new Promise(resolve => setTimeout(() => resolve(), time));
  onFetch = async (
    page = 1,
    startFetch: (arg0: string[], arg1: number) => void,
    abortFetch: () => void,
  ) => {
    try {
      //This is required to determinate whether the first loading list is all loaded.
      let pageLimit = 30;
      if (this.state.layout === 'grid') pageLimit = 60;
      const skip = (page - 1) * pageLimit;

      //Generate dummy data
      let rowData = Array.from(
        { length: pageLimit },
        (_, index) => `item -> ${index + skip}`,
      );

      //Simulate the end of the list if there is no more data returned from the server
      if (page === 3) {
        rowData = [];
      }

      //Simulate the network loading in ES7 syntax (async/await)
      await this.sleep(2000);
      startFetch(rowData, pageLimit);
    } catch (err) {
      abortFetch(); //manually stop the refresh or pagination if it encounters network error
    }
  };

  renderItem = (item: any) => {
    return (
      <View style={{ padding: 10 }}>
        <Text>{item}</Text>
      </View>
    );
  };

  render() {
    return (
      <ListView
        onFetch={this.onFetch}
        keyExtractor={(item: any, index: any) =>
          `${this.state.layout} - ${item} - ${index}`
        }
        renderItem={this.renderItem}
        numColumns={this.state.layout === 'list' ? 1 : 3}
      />
    );
  }
}

export const title = 'ListView';
export const description = 'ListView Example';
