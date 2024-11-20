---
category: Components
type: Data Display
title: Carousel
---

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