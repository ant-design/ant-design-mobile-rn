### Abstract DOM Structure

```html
<!-- 外层容器，整体包裹 Carousel 组件 -->
<View style={this.props.style}>
  <!-- 滚动容器，承载轮播页，支持横向或纵向滑动，分页滚动 -->
  <ScrollView
    styles={{ wrapperStyle }}
    style={...} <!-- 透传 style 基础属性，来自 this.props -->
  >
    <!-- 轮播页面，一个或多个，宽高与 Carousel 组件一致 -->
    <View 
      key="carousel_0" 
      styles={{ wrapperStyle }} <!-- pageStyle 实际应用外部 style，宽高由 state 控制 -->
      style={...} <!-- 透传 style 基础属性，pageStyle 可传递 -->
    >
      <!-- 轮播内容，可能支持懒加载 -->
      <!-- 内容为具体图片或视图 -->
    </View>
    <!-- 以下为重复页面，通常根据 count 个数渲染多个同级 View 页 -->
  </ScrollView>

  <!-- 分页指示器容器，显示轮播点 -->
  <View styles={[pagination, paginationX | paginationY]}>
    <!-- @dynamic vertical: paginationX (水平) / paginationY (垂直) -->
    <View style={{ flexDirection: 'row' | 'column' }}>
      <!-- 每个圆点，多个，展示一个代表 -->
      <View
        styles={[pointStyle, spaceStyle, dotStyle, /* 当前选中时动态添加 pointActiveStyle, dotActiveStyle */]}
      />
      <!-- 多个轮播点同层级 -->
    </View>
  </View>
</View>
```
