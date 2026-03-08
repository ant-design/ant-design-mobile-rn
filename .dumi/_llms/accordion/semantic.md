### Abstract DOM Structure

```html
<!-- 容器，包裹整个折叠面板，布局外层容器 -->
<View styles={{ container }} style={...}> 
  <!-- 折叠面板头部，每个面板项的头部区域 -->
  <View styles={{ header }} style={...}> 
    <!-- 头部内容的包裹容器，若 header 不是 React 元素，则显示文本内容用 -->
    <View styles={{ headerWrap }}> 
      <!-- 头部文字内容 -->
      <Text styles={{ headerText }} />
    </View>
    <!-- 箭头图标容器，显示向上或向下箭头 -->
    <View styles={{ arrow }}>
      <!-- 箭头图标，动态显示 up 或 down -->
      <Icon styles={{ arrow }} />
    </View>
  </View>

  <!-- 折叠面板内容区域 -->
  <View styles={{ content }}>
    <!-- 折叠内容文本 -->
    <Text styles={{ contentText }} />
  </View>

  <!-- 
  注：以上头部和内容节点为每个面板项重复渲染的结构
  -->
</View>
```
