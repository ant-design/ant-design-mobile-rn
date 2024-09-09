import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import { Button, Carousel } from '../../'

export default class BasicCarouselExample extends React.Component<any, any> {
  carousel: null | Carousel
  constructor(props: any) {
    super(props)
    this.state = {
      selectedIndex: 2,
      autoplay: true,
    }
  }
  onHorizontalSelectedIndexChange = (index: number) => {
    /* tslint:disable: no-console */
    console.log('horizontal change to', index)
    this.setState({ selectedIndex: index })
  }
  onVerticalSelectedIndexChange(index: number) {
    /* tslint:disable: no-console */
    console.log('vertical change to', index)
  }
  render() {
    return (
      <ScrollView style={{ paddingTop: 30 }}>
        <View style={{ paddingHorizontal: 15 }}>
          <Text>horizontal</Text>
          <Carousel
            style={styles.wrapper}
            selectedIndex={this.state.selectedIndex}
            autoplay
            infinite
            afterChange={this.onHorizontalSelectedIndexChange}
            ref={(ref) => (this.carousel = ref)}>
            <View
              style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
              <Text>Carousel 1</Text>
            </View>
            <View
              style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}>
              <Text>Carousel 2</Text>
            </View>
            <View
              style={[
                styles.containerHorizontal,
                { backgroundColor: 'yellow' },
              ]}>
              <Text>Carousel 3</Text>
            </View>
            <View
              style={[styles.containerHorizontal, { backgroundColor: 'aqua' }]}>
              <Text>Carousel 4</Text>
            </View>
            <View
              style={[
                styles.containerHorizontal,
                { backgroundColor: 'fuchsia' },
              ]}>
              <Text>Carousel 5</Text>
            </View>
          </Carousel>
          <Button onPress={() => this.carousel && this.carousel.goTo(0)}>
            Go to 0
          </Button>
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <Text>vertical</Text>
          <Carousel
            style={styles.wrapper}
            selectedIndex={1}
            autoplay={this.state.autoplay}
            infinite
            afterChange={this.onVerticalSelectedIndexChange}
            vertical>
            <View
              style={[styles.containerVertical, { backgroundColor: 'red' }]}>
              <Text>Carousel 1</Text>
            </View>
            <View
              style={[styles.containerVertical, { backgroundColor: 'blue' }]}>
              <Text>Carousel 2</Text>
            </View>
            <View
              style={[styles.containerVertical, { backgroundColor: 'yellow' }]}>
              <Text>Carousel 3</Text>
            </View>
            <View
              style={[styles.containerVertical, { backgroundColor: 'aqua' }]}>
              <Text>Carousel 4</Text>
            </View>
            <View
              style={[
                styles.containerVertical,
                { backgroundColor: 'fuchsia' },
              ]}>
              <Text>Carousel 5</Text>
            </View>
          </Carousel>
          <Button
            onPress={() => this.setState({ autoplay: !this.state.autoplay })}>
            {`Toggle autoplay ${this.state.autoplay ? 'true' : 'false'}`}
          </Button>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create<{
  wrapper: ViewStyle
  containerHorizontal: ViewStyle
  containerVertical: ViewStyle
  text: TextStyle
}>({
  wrapper: {
    backgroundColor: '#fff',
    width: '100%',
    height: 150,
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
})
