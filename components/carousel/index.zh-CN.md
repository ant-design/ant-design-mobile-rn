---
category: Components
type: Data Display
title: Carousel
subtitle: 走马灯
---

走马灯，轮播图

## API

属性 | 说明 | 类型 | 默认值 | 版本
----|-----|------|-------|-----
| afterChange  | 切换面板后的回调函数 | (current: number) => void  | 无 | |
| autoplay | 是否自动切换 | Boolean   | false | |
| autoplayInterval | 自动切换的时间间隔 | Number | 3000 | |
| dots | 是否显示面板指示点 | Boolean   | true | |
| dotStyle  | 指示点样式 | ViewStyle | 无 | |
| dotActiveStyle  | 当前激活的指示点样式 | ViewStyle | 无 | |
| infinite | 是否循环播放 | Boolean   | false | |
| lazy | 是否懒加载。支持布尔值或函数返回 | Boolean \| `(index:number) => boolean` | false | `5.3.1` |
| renderLazyPlaceholder | 返回自定义 React 元素以呈现尚未呈现的页面的回调。以`索引`作为参数的对象。需要启用 `lazy` 属性。 | `(index:number) => ReactNode` | - | `5.3.1` |
| pageStyle | 轮播页内样式 | ViewStyle | 无 | |
| pagination | 自定义 pagination | (props) => ReactNode  |  | |
| selectedIndex |  手动设置当前显示的索引  |  number  |  0  | |
| style | 轮播容器样式<br/>(建议设置，整体轮播大小由容器决定非页内决定) | ViewStyle | 无 | |
| vertical | 垂直显示 | Boolean   | false | |
| onScrollAnimationEnd | 当滚动动画结束时调用 | ()=>void   | 无 | `5.3.0` |


Carousel 的其他属性和 react-native 内置组件[ScrollView](https://reactnative.dev/docs/scrollview.html) 一致;<br/>
比如：`scrollEnabled`、`onScroll` (若设置后不生效则为Carousel强制属性)

## Carousel methods

属性 | 说明 | 类型 
----|-----|------
| goTo | 跳转到指定位置 | `(index: number, animated?: boolean) => void` |
| scrollNextPage | 滚动到下一页 | `() => void` |

## FAQ

### 1. 在Android平台，ScrollView中嵌套使用Carousel，会发生Carousel Item不能滑动的情况，怎么办？

`5.1.3`新增支持。 设置`ScrollView`的`nestedScrollEnabled`属性为`true`即可。

```jsx
<ScrollView nestedScrollEnabled={true}>
  ...
  <Carousel vertical/>
</ScrollView>
```

### 2. 使用 lazy 和 renderLazyPlaceholder 属性懒加载提高性能

`5.3.1`新增支持。
```jsx
// lazy={true} 表示只渲染当前page
<Carousel 
  lazy
  renderLazyPlaceholder={()=> <Loading /> }
/>

// 渲染相邻的page，总共3个page
<Carousel 
  lazy={(i) => Math.abs(selectedIndex - i) < 2}
>
```

### 3. Carousel和 `react-native-pager-view` 有什么区别（或优势）？

首先，Carousel支持`infinite`属性，即🌟真正的无限循环🌟。 <br/>
其次，Carousel是完全基于`ScrollView`实现，不仅更轻量，且更具有兼容性。