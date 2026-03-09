### Abstract DOM Structure

```html
<!-- 容器区域，整体包裹 ActionSheet，负责布局 -->
<View styles={{ container }}>
  <!-- 弹窗内容区域，Modal 组件对应的内容样式 -->
  <Modal styles={{ content }}>
    <View>
      <!-- 标题区域，显示标题文字，只在配置有 title 时渲染 -->
      <View styles={{ title }}>
        <!-- 标题文字 -->
        <Text styles={{ titleText }} />
      </View>

      <!-- 信息区域，显示附加文字信息，只在配置有 message 时渲染 -->
      <AntmView styles={{ message }} />

      <!-- 选项列表容器，包含多个按钮项 -->
      <View>
        <!-- 以下为 options 列表中的单个项代表，循环渲染 -->

        <!-- 选项容器，支持取消按钮样式条件应用（cancelBtn） -->
        <View styles={{ cancelBtn }}>
          <!-- 按钮触摸区域，支持按钮基础样式 btn -->
          <TouchableHighlight styles={{ btn }} />

          <!-- 按钮文字，基础样式 btnText，销毁按钮样式 destructiveBtn 条件应用 -->
          <Text styles={{ btnText, destructiveBtn }} />

          <!-- 取消按钮遮罩层，条件渲染 -->
          <View styles={{ cancelBtnMask }} />
        </View>
      </View>
    </View>
  </Modal>
</View>
```
