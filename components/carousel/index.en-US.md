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
| dotStyle  | style of dots | Object | |
| dotActiveStyle  | style of active dot | Object  | |
| onScrollBeginDrag | as same as react-native scrollView `onScrollBeginDrag` | (): void | - |
| bounces | as same as react-native scrollView `bounces` | Boolean | true |
| pagination | A generator function which could be used to customized pagination. | (props) => React.ReactNode  | |
