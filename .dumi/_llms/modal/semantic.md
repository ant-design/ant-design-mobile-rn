### Abstract DOM Structure

```html
<!-- 遮罩层容器，屏幕全屏，悬浮遮罩 -->
<View styles={{ container }}>

  <!-- 遮罩层包裹容器 -->
  <View styles={{ wrap }}>
  
    <!-- 遮罩层，点击可关闭遮罩（条件展示，取决于 maskClosable） -->
    <TouchableWithoutFeedback>
      <Animated.View styles={{ maskClosable }}>  <!-- 动态 styles.opacity 用于遮罩显示隐藏动画 -->
        <View styles={{ maskClosable }} />
      </Animated.View>
    </TouchableWithoutFeedback>

    <!-- 弹窗内容容器，支持动画样式（如 slide-up, fade 等） -->
    <Animated.View styles={{ container }}>
    
      <!-- 对话框内容包裹容器，对于popup模式应用：popupContainer、popupSlideUp、popupSlideDown 动态样式 -->
      <View styles={{ innerContainer, popupContainer /* + 动态 popupSlideUp 或 popupSlideDown */ }} style={...}>

        <!-- 头部标题区域，显示标题文本 -->
        <Text styles={{ header }} />

        <!-- 内容区域，包裹 children 视图，支持 body 和 bodyStyle 透传 -->
        <View styles={{ body }} style={...}>
          {children}
        </View>

        <!-- 底部按钮区域，footer区域 -->
        <View styles={{ footer, buttonGroupV or buttonGroupH }}>

          <!-- 按钮列表（示例一个按钮，实际有多个按钮） -->
          <TouchableHighlight>
            <View styles={{ buttonWrapV or buttonWrapH }}>
              <Text styles={{ buttonText or buttonTextOperation }} style={...} />
            </View>
          </TouchableHighlight>
        </View>

        <!-- 关闭按钮区域（条件渲染，当 closable 为 true） -->
        <View styles={{ closeWrap }}>
          <TouchableWithoutFeedback>
            <View>
              <Text styles={{ close }} />
            </View>
          </TouchableWithoutFeedback>
        </View>

      </View>
    </Animated.View>

  </View>
</View>
```
