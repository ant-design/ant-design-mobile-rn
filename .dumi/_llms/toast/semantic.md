### Abstract DOM Structure

```html
<!-- 顶层定位容器，控制弹窗位置（顶部/底部/居中）和整体容器样式 -->
<View styles={{ container }} pointerEvents={/* mask ? undefined : 'box-none' */}>
  <!-- 内部容器，背景层样式 -->
  <View styles={{ innerContainer }}>
    <!-- 动画透明度控制容器，显示/隐藏动画 -->
    <Animated.View style={{ opacity: /* fadeAnim.current */ }}>
      <!-- 内容包裹容器：根据是否有 icon 选择iconToast或textToast样式 -->
      <View styles={{ innerWrap, iconToast /* 有icon时 */, textToast /* 无icon时 */ }}>
        <!-- 图标区域，根据type和icon渲染不同icon或loading指示器 -->
        <!-- 
          iconDom节点
          对应 styles.centering（loading时，内容居中）
          对应 styles.image（普通图标样式）
          动态：根据 type 和 icon 渲染 ActivityIndicator 或 Icon 组件或传入 ReactNode 
        -->
        {iconDom}
        <!-- 文字内容 -->
        <!-- 
          对应 styles.content（文本样式）
          支持自定义传入 content 为 ReactNode 或字符串（字符串则用<Text>包裹）
        -->
        {React.isValidElement(content) ? content : <Text styles={{ content }} />}
      </View>
    </Animated.View>
  </View>
</View>
```
