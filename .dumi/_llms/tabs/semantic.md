### Abstract DOM Structure

```html
<!-- 整体容器视图，承载整个 Tabs 组件 -->
<View styles={{ container }}>
  <!-- 顶部或底部的分割线容器，会根据 tabBarPosition 渲染，支持 style 透传 -->
  <View styles={{ /* styles.topTabBarSplitLine 或 styles.bottomTabBarSplitLine */ }} style={...}>
    <!-- DefaultTabBar 组件，渲染标签栏 -->
    <View styles={{ container }} style={/* 支持通过 tabBarBackgroundColor 设置背景色 */}>
      <!-- 可横向滚动的标签 ScrollView 容器，scrollEnabled 动态根据 tabs.length 和 page 决定 -->
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        directionalLockEnabled
        bounces={false}
        scrollsToTop={false}
        keyboardShouldPersistTaps={/* 透传 */}
      >
        <!-- 标签集合容器，承载所有的标签项和下划线 -->
        <View styles={{ tabs }} style={/* 支持传入 tabsContainerStyle 和 tabBarBackgroundColor */}>
          <!-- 单个 Tab 标签，TouchableOpacity 用于点击，支持 onPress -->
          <!-- 对应 styles.tab：标签基础布局样式 -->
          <TouchableOpacity>
            <View styles={{ tab }} style={/* 支持传入 tabStyle，设置最小宽度 */}>
              <!-- 标签标题文本，文本颜色动态根据是否激活 -->
              <!-- 对应 styles.textStyle：文字基础样式 -->
              <Text styles={{ textStyle }} style={/* 支持传入 tabBarTextStyle，动态设置文字颜色 */} />
              <!-- 或者自定义 renderTab 渲染的节点 -->
            </View>
          </TouchableOpacity>
          <!-- 说明：上述 Tab 节点为列表项，多个 Tab 依次排列 -->
          <!-- 这里展示一个代表性的 Tab -->
          
          <!-- Tab 下方指示线 -->
          <!-- 对应 styles.underline：下划线基础样式 -->
          <Animated.View styles={{ underline }} style={/* 动态样式 left、width，支持 tabBarUnderlineStyle 覆盖 */} />
          <!-- 或自定义 renderUnderline 渲染 -->
        </View>
      </ScrollView>
    </View>
  </View>

  <!-- 内容区域，Carousel 容器包裹所有 Tab 子页面 -->
  <Carousel
    style={/* 动态宽高，依据容器尺寸变化 */}
    scrollEnabled={/* 动态，依据 swipeable 属性 */}
  >
    <!-- 每个 Tab 页面的容器 View -->
    <!-- 宽度固定为容器宽度，高度根据内容或容器高度 -->
    <View style={{ width: containerWidth, height: containerHeight || flex:1 }}>
      <!-- 对应的 Tab 内容节点，可能是缓存的，自定义内容 -->
    </View>
    <!-- 说明：上述内容项为列表，多个 Tab 页内容依次排列 -->
    <!-- 这里展示一个代表性的内容项 -->
  </Carousel>
</View>
```
