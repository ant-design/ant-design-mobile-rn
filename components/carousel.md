# Carousel

## Examples

```tsx
import { Button, Carousel } from '@ant-design/react-native'
import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'

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
```

## API

Properties | Descrition | Type | Default | Version
-----------|------------|------|---------|----------
| afterChange  | callback to be called after a slide is changed | (current: number) => void | | |
| autoplay | autoplay mode active | Boolean   | false | |
| autoplayInterval | interval for autoplay iteration | Number | 3000 | |
| dots | whether to display the indication dots | Boolean | true | |
| dotStyle  | style of dots | ViewStyle | | |
| dotActiveStyle  | style of active dot | ViewStyle  | | |
| infinite | whether is infinite loop | Boolean   | false | |
| lazy | Function which takes an object with the current page and returns a boolean to indicate whether to lazily render the scenes. | Boolean \| `(index:number) => boolean` | false | `5.3.1` |
| renderLazyPlaceholder | A callback that returns a custom React Element to render for pages not yet rendered. Requires the `lazy` prop to be enabled. | `(index:number) => ReactNode` | - | `5.3.1` |
| pageStyle | style of the carousel page | ViewStyle |  | |
| pagination | A generator function which could be used to customized pagination. | (props) => ReactNode  | | |
| selectedIndex |  current selected index  |  number  |  0  | |
| style | ScrollView style<br/>(`tips: Recommended setting, the overall carousel size is determined by the container scrollview and not the inner page`) | ViewStyle | | |
| vertical | controls the pagination display direction. | Boolean   | false | |
| onScrollAnimationEnd | Called when a scrolling animation ends. | ()=>void   | | `5.3.0` |

The rest of the props of Carousel are exactly the same as the react-native [ScrollView](https://reactnative.dev/docs/scrollview.html);

eg: `scrollEnabled`、`onScroll` (if it not works, it is a mandatory prop of Carousel)

## Carousel ref methods

Properties | Descrition | Type 
----|-----|------
| goTo | jump to specified index | `(index: number, animated?: boolean): void` |
| scrollNextPage | scroll to next page | `() => void` |

## FAQ

### 1. On the Android platform, when using `Carousel` nested in `ScrollView`, the Carousel Item cannot slide. What should I do?

Support in `5.1.3`. Set the `nestedScrollEnabled` property of `ScrollView` to `true`.

```jsx
<ScrollView nestedScrollEnabled={true}>
  ...
  <Carousel vertical/>
</ScrollView>
```

### 2. Use `lazy` and `renderLazyPlaceholder` props to render routes as needed

Support in `5.3.1`.
```jsx
// `lazy={true}` only the current page is rendered
<Carousel 
  lazy
  renderLazyPlaceholder={()=> <Loading /> }
/>

// eg: Render the sibling pages, a total of 3 pages
<Carousel 
  lazy={(i) => Math.abs(selectedIndex - i) < 2}
>
```

### 3. Why choose Carousel instead of `react-native-pager-view` ?

First, Carousel supports the `infinite` property, which means 🌟a true infinite loop🌟. <br/>
Second, Carousel is completely based on `ScrollView`, which is not only lighter but also more compatible.
