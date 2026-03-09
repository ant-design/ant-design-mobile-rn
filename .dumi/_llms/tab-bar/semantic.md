### Abstract DOM Structure

```html
<!-- 整体安全区域包裹，确保底部导航栏适配刘海屏 -->
<SafeAreaView style={{ flex: 1 }}>
  <!-- TabBar 包裹容器，包含内容区和底部标签栏 -->
  <!-- 对应 styles.tabbar：TabBar 主容器样式 -->
  <View styles={{ tabbar }}>
    <!-- 内容显示区，仅展示选中标签对应的内容 -->
    <!-- 对应 styles.content：内容区容器样式 -->
    <View styles={{ content }}>
      <!-- 选中内容项容器，仅显示一个选中项 -->
      <!-- 对应 styles.contentItem：内容项样式 -->
      <!-- 对应 styles.contentItemSelected：选中内容项的额外样式 -->
      <View styles={{ contentItem, contentItemSelected }}>
        <!-- 这里插入 TabBarItem 的 children 内容 -->
      </View>
    </View>

    <!-- 底部标签栏容器 -->
    <!-- 对应 styles.tabs：底部标签栏容器样式 -->
    <View styles={{ tabs }} style={...}>
      <!-- 以下是 TabBarItem，重复多个，以下只展示一个示例 -->
      <!-- 整个标签项容器，包含图标和标题文字，支持外部 style 透传 -->
      <!-- 对应 styles.barItem：标签项默认样式 -->
      <!-- 对应 styles.barItemSelected：选中标签项样式，动态饰品 -->
      <TouchableWithoutFeedback>
        <View styles={{ barItem }} style={...}>
          <View>
            <!-- 标签图标区域，支持 React 元素或图片 -->
            <!-- 图标元素支持样式透传 iconStyle -->
            <!-- 对应 styles.barIcon：图标样式 -->
            <ImageOrIcon styles={{ barIcon }} />

            <!-- 徽章容器，条件渲染，仅当 badge 存在时 -->
            <!-- 对应 styles.badge：徽章背景样式 -->
            <View styles={{ badge }}>
              <!-- 徽章文字 -->
              <!-- 对应 styles.badgeText：徽章文字样式 -->
              <Text styles={{ badgeText }} />
            </View>
          </View>

          <!-- 标签标题文字 -->
          <!-- 对应 styles.barItemTitle：标签文字样式 -->
          <!-- 颜色根据选中状态动态传入 -->
          <Text styles={{ barItemTitle }} />
        </View>
      </TouchableWithoutFeedback>
      <!-- 多个标签项重复结构 -->
    </View>
  </View>
</SafeAreaView>
```
