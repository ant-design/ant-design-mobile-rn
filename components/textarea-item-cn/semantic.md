## TextareaItem

### Usage Example

```jsx
import { List, TextareaItem, Toast } from '@ant-design/react-native'
import React from 'react'
import { ScrollView } from 'react-native'

export default class BasicTextAreaItemExample extends React.Component<
  any,
  any
> {
  constructor(props: any) {
    super(props)
    this.state = {
      val: '默认带value',
    }
  }

  onChange = (val: any) => {
    // console.log(val);
    this.setState({ val })
  }

  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <List renderHeader={'基本'}>
          <TextareaItem rows={4} placeholder="固定行数" />

          <TextareaItem rows={4} placeholder="多行带计数" count={100} />

          <TextareaItem
            rows={4}
            placeholder="高度自适应"
            autoHeight
            style={{ paddingVertical: 5 }}
          />

          <TextareaItem value={this.state.val} onChange={this.onChange} />

          <TextareaItem value="不可编辑 editable = {false}" editable={false} />

          <TextareaItem clear={false} placeholder="不显示清除按钮" />

          <TextareaItem
            error
            defaultValue="报错样式 error={true}"
            onErrorClick={() => Toast.fail('Error message')}
          />
        </List>
      </ScrollView>
    )
  }
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface TextareaItemStyle {
  container: ViewStyle
  input: TextStyle
  icon: ViewStyle
  errorIcon: ViewStyle
  count: ViewStyle
  countText: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<TextareaItemStyle>({
    container: {
      borderBottomWidth: theme.border_width_sm,
      borderBottomColor: theme.border_color_base,
    },
    input: {
      paddingHorizontal: theme.h_spacing_md,
      backgroundColor: theme.fill_base,
      fontSize: theme.font_size_heading,
      lineHeight: Math.round(1.3 * theme.font_size_heading),
      textAlignVertical: 'top',
    },
    icon: {
      position: 'absolute',
      top: 8,
      width: theme.icon_size_xs,
      height: theme.icon_size_xs,
    },
    errorIcon: {
      position: 'absolute',
      right: 18,
      top: 12,
    },
    count: {
      position: 'absolute',
      right: theme.h_spacing_md,
      bottom: theme.h_spacing_md,
    },
    countText: {},
  })
```

### Abstract DOM Structure

```html
<!-- 最外层容器，包裹整个多行文本输入
     对应 styles.container：容器整体样式 -->
<View styles={{ container }}>
  <!-- 多行文本输入框，支持多行和自动高度，显示错误时右侧留空隙
       对应 styles.input：文本输入框样式
       对应 style 基础属性：支持外部传入 style 透传 -->
  <TextInput style={[styles.input]} styles={{ input }} />

  <!-- 错误状态提示图标容器，仅在 error 为 true 时渲染
       视觉用途：错误提示图标的容器
       对应 styles.errorIcon：错误图标容器样式 -->
  <TouchableWithoutFeedback>
    <View styles={{ errorIcon }}>
      <!-- Icon 图标组件，显示 info-circle 的错误符号 -->
      <Icon />
    </View>
  </TouchableWithoutFeedback>

  <!-- 输入字数统计容器，仅当 rows > 1 且 count > 0 时渲染
       视觉用途：显示已输入字数/最大字数统计
       对应 styles.count：字数统计容器样式 -->
  <View styles={{ count }}>
    <!-- 用于显示字数文本
         对应 styles.countText：字数文本样式 -->
    <Text styles={{ countText }} />
  </View>
</View>
```
