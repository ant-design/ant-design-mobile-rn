### Abstract DOM Structure

```html
<!-- 顶层表单容器，包含整个表单列表，支持样式透传 -->
<FieldForm
  component={AntmList}
  style={...} styles={{ List }}
>
  <!-- 表单列表容器，显示表单项列表 -->
  <AntmList styles={{ List }}>
    <!-- 表单项节点（List.Item），为表单的基本单元，支持基本样式 -->
    <List.Item styles={{ Item }} style={...}>
      <!-- 表单项标签容器，负责渲染label及必选标记 -->
      <View styles={{ formItemLabel }}>
        <!-- 必选星号，条件渲染 -->
        <!-- 对应 styles.asterisk：必填星号样式 -->
        <Text styles={{ asterisk }} />
        <!-- 标签文本容器，支持 labelStyle 叠加 -->
        <!-- 对应 styles.formItemLabelText：标签文本样式 -->
        <AntdView style={...} styles={{ formItemLabelText }} />
        <!-- 可选文字，条件渲染requiredMark='optional'时显示 -->
        <!-- 对应 styles.optional：可选标记样式 -->
        <Text styles={{ optional }} />
      </View>
      <!-- 表单控件容器，包含表单控件及校验错误提示 -->
      <View styles={{ formItemControl }} style={...}>
        <!-- 表单控件（children），典型为输入框或选择器等，支持用户传入任意控件 -->
        {...children}
        <!-- 错误提示列表，条件渲染，有错误或帮助提示时显示 -->
        <Brief styles={{ error, warning, success, validating }}>
          <!-- 错误或帮助提示文本 -->
          ...
        </Brief>
      </View>
      <!-- 验证状态反馈图标，条件渲染hasFeedback为true，动态样式 -->
      <View styles={{ feedbackIcon }}>
        <!-- success, warning, error, validating 状态对应不同图标或loading -->
        <Icon styles={{ success | warning | error | validating }} />
        <ActivityIndicator styles={{ validating }} />
      </View>
      <!-- 分割线，List.Item内部行分割线 -->
      <View styles={{ Line }} />
      <!-- 缩略图，List.Item中的Thumb，支持样式定制 -->
      <Image styles={{ Thumb }} />
    </List.Item>
    <!-- 其它重复的List.Item表示表单中不同项 -->
  </AntmList>
</FieldForm>
```
