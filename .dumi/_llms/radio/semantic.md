### Abstract DOM Structure

```html
<!-- List.Item 列表项容器，承载单个 RadioItem -->
<!-- 
  对应 styles.radioItemContent：文本内容样式，字体颜色、大小等
  对应 styles.radioItemContentDisable：禁用时文本样式
  对应 style 基础属性：外层容器样式透传（如 margin/padding/background 等）
-->
<List.Item
  style={...}  <!-- style 基础属性透传 -->
  disabled={false}
  accessibilityRole="radio"
  accessibilityState={{ checked: false, disabled: false }}
  onPress={() => {}}
  thumb={/* 左侧当 left 为 true 时的 Radio 组件 */}
  extra={/* 右侧当 right 为 true 时的 Radio 组件 */}
>
  <!-- 文本内容，最多一行，显示 children -->
  <Text
    style={{
      radioItemContent,          /* 一般文本样式 */
      radioItemContentDisable,   /* 禁用时文本样式 */
    }}
    numberOfLines={1}
  />
</List.Item>
```
