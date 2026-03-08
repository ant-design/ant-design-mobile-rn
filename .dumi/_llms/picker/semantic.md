### Abstract DOM Structure

```html
<!-- 整体弹出层容器，包含遮罩层及内容区 -->
<Modal
  styles={{ modal, container }}><!-- 对应 styles.modal：弹出层包装样式（定位、背景遮罩等） -->
                                   <!-- 对应 styles.container：弹出层内容容器（布局与背景） -->

  <!-- 头部区域，包含取消、标题、确定按钮 -->
  <View styles={{ header }}><!-- 对应 styles.header：头部容器布局 -->

    <!-- 取消按钮区域 -->
    <TouchableHighlight styles={{ headerItem }}><!-- 对应 styles.headerItem：按钮位置与尺寸 -->
      <!-- 取消按钮文字 -->
      <Text styles={{ actionText, dismissText }}/><!-- 对应 styles.actionText：按钮文字基础样式 -->
                                           <!-- 对应 styles.dismissText：取消按钮文字差异化样式 -->
    </TouchableHighlight>

    <!-- 标题区域 -->
    <View styles={{ headerItem }}><!-- 对应 styles.headerItem：标题位置与尺寸 -->
      <Text styles={{ title }}/><!-- 对应 styles.title：标题文字样式 -->
    </View>

    <!-- 确定按钮区域 -->
    <TouchableHighlight styles={{ headerItem }}><!-- 对应 styles.headerItem：按钮位置与尺寸 -->
      <!-- 确定按钮文字 -->
      <Text styles={{ actionText, okText }}/><!-- 对应 styles.actionText：按钮文字基础样式 -->
                                        <!-- 对应 styles.okText：确定按钮文字差异化样式 -->
    </TouchableHighlight>
  </View>

  <!-- 选择器视图区域，条件渲染 在弹出层显示时 -->
  <RMCPickerView
    styles={{
      wrappper,
      wheelWrapper,
      itemWrap,
      itemStyle,
      itemActiveStyle,
      mask,
      maskTop,
      maskMiddle,
      maskBottom
    }}
    style={...}><!-- 对应 styles.wrappper：选择器最外层容器 -->
                   <!-- 对应 styles.wheelWrapper：滚轮容器 -->
                   <!-- 对应 styles.itemWrap：单个选择项容器 -->
                   <!-- 对应 styles.itemStyle：普通选项文本样式 -->
                   <!-- 对应 styles.itemActiveStyle：激活状态选项文本样式 -->
                   <!-- 对应 styles.mask：遮罩层总样式 -->
                   <!-- 对应 styles.maskTop：遮罩层上部区域 -->
                   <!-- 对应 styles.maskMiddle：遮罩层中间区域 -->
                   <!-- 对应 styles.maskBottom：遮罩层下部区域 -->
  />
</Modal>

<!-- 触发组件（children），支持函数或 ReactNode -->
<!-- 该节点支持 style 基础属性透传，包含 value、extra、disabled、toggle 事件等 -->
{children}
```
