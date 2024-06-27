```jsx
<FloatingManager>


</FloatingManager>
```

方案一：reference 镜像在portal内，这样不受zIndex影响
 缺点：不跟随滚动 ❌

方案二：接收zIndex设定，只需fix android端的问题
 缺点：用户理解成本高
 优点：开发简单，性能好

方案三：重写useFloating，基于computePosition重新计算

 `x`和`y`定义为`px`和`py`，而非`offsetX`和`offsetY`
 注意：需要实现点击任意非tooltip区域需要自动关闭所有tooltip
 实现： `useClickAway`
 
```jsx
import {computePosition} from '@floating-ui/core';
 
const referenceEl = {width: 100, height: 100, x: 50, y: 50};
const floatingEl = {width: 200, height: 200, x: 0, y: 0};
 
computePosition(referenceEl, floatingEl, {
  platform: {
    // See https://floating-ui.com/docs/platform
  },
}).then(({x, y}) => {
  // Paint the screen.
});
```

方案四： `<FloatingManager>`包裹
 跟随滚动update
 缺点：性能卡顿
```jsx
<ScrollView {...scrollViewProps}>
```