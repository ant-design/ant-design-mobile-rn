### Abstract DOM Structure

```html
<!-- 容器（轮播模式时是 Carousel 组件，否则是 View） -->
<!-- 无样式键，容器用于排列所有行内容 -->
<View>
  <!-- 多行，每行由 Flex 组件表示 -->
  <!-- 每行容器对应 styles.grayBorderBox：灰色边框盒子，用于分隔行 -->
  <Flex styles={{ grayBorderBox }}>
    <!-- 多个单元格，Flex.Item 组件表示 -->
    <!-- 单元格容器对应 styles.grayBorderBox：灰色边框盒子，边框为动态计算，支持 hasLine 控制边线 -->
    <!-- style 透传：itemStyle，可覆盖单元格样式，如大小、边框 -->
    <Flex.Item style={styles.grayBorderBox} style={...}>
      <!-- 单元格内部内容，Flex 组件列布局，支持点击事件 -->
      <Flex styles={{}}>
        <!-- 图标区域 -->
        <!-- 对应 styles.icon：图片样式，尺寸及颜色 -->
        <Image styles={{ icon }} />
        <!-- 文本区域 -->
        <!-- 对应 styles.text：文字样式 -->
        <Text styles={{ text }} />
      </Flex>
    </Flex.Item>

    <!-- 其他单元格依次类推 -->
  </Flex>

  <!-- 多行下一个 Flex 容器 -->

  <!-- 条件渲染：如果 isCarousel && 页数 > 1，整体包装成 Carousel，Carousel 子节点为分页 View -->
  <Carousel>
    <View styles={{ grayBorderBox }}>
      <!-- 多行 Flex 结构同上 -->
      <Flex styles={{ grayBorderBox }}>
        <Flex.Item style={[styles.grayBorderBox, flexItemStyle]} />
        <!-- 省略其他单元格，结构相同 -->
      </Flex>
      <!-- 其他行 -->
    </View>
    <!-- 其他页 -->
  </Carousel>
</View>
```
