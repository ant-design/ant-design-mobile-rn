---
category: Components
type: Data Display
title: Carousel
---

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| selectedIndex |  current selected index  |  number  |  0  |
| dots | whether to display the indication dots | Boolean | true |
| vertical | controls the pagination display direction. | Boolean   | false |
| autoplay | autoplay mode active | Boolean   | false |
| autoplayInterval | interval for autoplay iteration | Number | 3000 |
| infinite | whether is infinite loop | Boolean   | false |
| afterChange  | callback to be called after a slide is changed | (current: number): void | |
| dotStyle  | style of dots | ViewStyle | |
| dotActiveStyle  | style of active dot | ViewStyle  | |
| pageStyle | style of the carousel page | ViewStyle |  |
| pagination | A generator function which could be used to customized pagination. | (props) => React.ReactNode  | |

## Carousel methods

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| goTo | jump to specified index | (index: number, animated?: boolean): void |  -  |

## FAQ

### On the Android platform, when using `Carousel` nested in `ScrollView`, the Carousel Item cannot slide. What should I do?

Support in `5.1.3`. Set the `nestedScrollEnabled` property of `ScrollView` to `true`.

```jsx
<ScrollView nestedScrollEnabled={true}>
  ...
  <Carousel vertical/>
</ScrollView>
```