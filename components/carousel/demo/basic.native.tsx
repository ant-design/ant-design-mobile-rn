import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { Carousel } from 'antd-mobile-rn';

export default class BasicCarouselExample extends React.Component<any, any> {
  onHorizontalSelectedIndexChange(index: number) {
    /* tslint:disable: no-console */
    console.log('horizontal change to', index);
  }
  onVerticalSelectedIndexChange(index: number) {
    /* tslint:disable: no-console */
    console.log('vertical change to', index);
  }
  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <View style={{ paddingHorizontal: 15 }}>
          <Text>horizontal</Text>
          <Carousel
            style={styles.wrapper}
            selectedIndex={2}
            autoplay
            infinite
            afterChange={this.onHorizontalSelectedIndexChange}
          >
            <View style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
              <Text>Carousel 1</Text>
            </View>
            <View style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}>
              <Text>Carousel 2</Text>
            </View>
            <View style={[styles.containerHorizontal, { backgroundColor: 'yellow' }]}>
              <Text>Carousel 3</Text>
            </View>
            <View style={[styles.containerHorizontal, { backgroundColor: 'aqua' }]}>
              <Text>Carousel 4</Text>
            </View>
            <View style={[styles.containerHorizontal, { backgroundColor: 'fuchsia' }]}>
              <Text>Carousel 5</Text>
            </View>
          </Carousel>
          <Text>Carousel will adjust height based on content</Text>
          <Text>{React.Children.count(this.props.children)}</Text>
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <Text>vertical</Text>
          <Carousel
            style={styles.wrapper}
            selectedIndex={2}
            autoplay
            infinite
            afterChange={this.onVerticalSelectedIndexChange}
            vertical
          >
            <View style={[styles.containerVertical, { backgroundColor: 'red' }]}>
              <Text>Carousel 1</Text>
            </View>
            <View style={[styles.containerVertical, { backgroundColor: 'blue' }]}>
              <Text>Carousel 2</Text>
            </View>
            <View style={[styles.containerVertical, { backgroundColor: 'yellow' }]}>
              <Text>Carousel 3</Text>
            </View>
            <View style={[styles.containerVertical, { backgroundColor: 'aqua' }]}>
              <Text>Carousel 4</Text>
            </View>
            <View style={[styles.containerVertical, { backgroundColor: 'fuchsia' }]}>
              <Text>Carousel 5</Text>
            </View>
          </Carousel>
          <Text>Use the height of the first child as the height of the Carousel</Text>
          <Text>{React.Children.count(this.props.children)}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create<{
  wrapper: ViewStyle;
  containerHorizontal: ViewStyle;
  containerVertical: ViewStyle;
  text: TextStyle;
}>({
  wrapper: {
    backgroundColor: '#fff',
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
});
