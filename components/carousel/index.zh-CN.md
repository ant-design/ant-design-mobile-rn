---
category: Components
type: Data Display
title: Carousel
subtitle: 走马灯
---

走马灯，轮播图

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| selectedIndex |  手动设置当前显示的索引  |  number  |  0  |
| dots | 是否显示面板指示点 | Boolean   | true |
| vertical | 垂直显示 | Boolean   | false |
| autoplay | 是否自动切换 | Boolean   | false |
| autoplayInterval | 自动切换的时间间隔 | Number | 3000 |
| infinite | 是否循环播放 | Boolean   | false |
| afterChange  | 切换面板后的回调函数 | (current: number): void  | 无 |
| dotStyle  | 指示点样式 | ViewStyle | 无 |
| dotActiveStyle  | 当前激活的指示点样式 | ViewStyle | 无 |
| pageStyle | 轮播页样式 | ViewStyle | 无 |
| pagination | 自定义 pagination | (props) => React.ReactNode  |  |

## Carousel methods

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| goTo | 跳转到指定位置 | (index: number, animated?: boolean): void |  -  |

## FAQ

### 在Android平台，ScrollView中嵌套使用Carousel，会发生Carousel Item不能滑动的情况，怎么办？

`5.1.3`新增支持。 设置`ScrollView`的`nestedScrollEnabled`属性为`true`即可。

```jsx
<ScrollView nestedScrollEnabled={true}>
  ...
  <Carousel vertical/>
</ScrollView>
```