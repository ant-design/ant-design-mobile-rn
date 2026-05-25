## Tag

### Usage Example

```jsx
import { Tag, WhiteSpace } from '@ant-design/react-native'
import React from 'react'
import { View } from 'react-native'

function onChange(selected: any) {
  console.log(`tag selected: ${selected}`)
}

export default class BasicTagExample extends React.Component<any, any> {
  render() {
    return (
      <View style={{ padding: 10 }}>
        <Tag>Basic</Tag>
        <WhiteSpace />
        <Tag selected>Selected</Tag>
        <WhiteSpace />
        <Tag disabled>Disabled</Tag>
        <WhiteSpace />
        <Tag onChange={onChange}>Callback</Tag>
        <WhiteSpace />
        <Tag
          closable
          onClose={() => {
            console.log('onClose')
          }}
          afterClose={() => {
            console.log('afterClose')
          }}>
          Closable
        </Tag>
        <WhiteSpace />
        <Tag small>Small and Readonly</Tag>
        <WhiteSpace />
        <Tag
          onLongPress={() => {
            console.log('onLongPress')
          }}>
          LongPress
        </Tag>
      </View>
    )
  }
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface TagStyle {
  tag: ViewStyle
  wrap: ViewStyle
  wrapSmall: ViewStyle
  text: TextStyle
  textSmall: TextStyle
  normalWrap: ViewStyle
  normalText: TextStyle
  activeWrap: ViewStyle
  activeText: TextStyle
  disabledWrap: ViewStyle
  disabledText: TextStyle
  close: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<TagStyle>({
    tag: {
      position: 'relative',
      flexDirection: 'row',
      overflow: 'visible',
    },
    wrap: {
      height: theme.tag_height,
      // lineHeight: theme.tag_height, // doest work in RN
      justifyContent: 'center',
      borderRadius: theme.radius_sm,
      borderWidth: theme.border_width_sm,
      borderStyle: 'solid',
      paddingVertical: 0,
      paddingHorizontal: theme.h_spacing_lg,
    },
    wrapSmall: {
      height: theme.tag_height_sm,
      paddingVertical: 0,
      paddingHorizontal: theme.h_spacing_sm,
    },
    text: {
      fontSize: theme.button_font_size_sm,
      textAlign: 'center',
    },
    textSmall: {
      fontSize: theme.font_size_icontext,
    },
    normalWrap: {
      backgroundColor: theme.fill_base,
      borderColor: theme.border_color_base,
    },
    normalText: {
      color: theme.color_text_caption,
    },
    activeWrap: {
      backgroundColor: theme.fill_base,
      borderColor: theme.brand_primary,
    },
    activeText: {
      color: theme.color_link,
    },
    disabledWrap: {
      backgroundColor: theme.fill_disabled,
      borderColor: theme.fill_disabled,
    },
    disabledText: {
      color: theme.color_text_disabled,
    },
    close: {
      position: 'absolute',
      top: -6,
      left: -6,
      color: theme.color_text_placeholder,
      backgroundColor: 'transparent',
      borderRadius: 999,
      fontSize: 16,
    },
  })
```

### Abstract DOM Structure

```html
<!--
  整个标签容器
  视觉用途：包裹整体标签内容及关闭图标
  对应 styles.tag：标签根容器样式
  对应 style 基础属性：继承外部传入的 style，用于自定义标签整体样式
-->
<View styles={{ tag }} style={...}>
  <!--
    标签可点击区域，响应点击及长按事件
    视觉用途：标签内容包裹层，所有标签文字或自定义子节点都在此区域
    对应 styles.wrap：标签默认外层容器样式
    对应 styles.wrapSmall：small 类型标签的容器样式（动态可能生效）
    对应 styles.normalWrap：非禁用且未选中标签的容器样式（动态可能生效）
    对应 styles.activeWrap：被选中且非禁用标签的容器样式（动态可能生效）
    对应 styles.disabledWrap：禁用状态标签容器样式（动态可能生效）
  -->
  <TouchableWithoutFeedback>
    <View styles={{ wrap, normalWrap, wrapSmall, activeWrap, disabledWrap }}>
      <!--
        标签内容区
        视觉用途：标签文本显示区域或自定义内容
        对应 styles.text：标签文本基础样式
        对应 styles.textSmall：small 类型标签文本样式（动态可能生效）
        对应 styles.normalText：非禁用且未选中标签文本样式（动态可能生效）
        对应 styles.activeText：被选中且非禁用标签文本样式（动态可能生效）
        对应 styles.disabledText：禁用状态标签文本样式（动态可能生效）
      -->
      <Text styles={{ text, textSmall, normalText, activeText, disabledText }}/>
      <!--
        或自定义子节点 children，直接渲染无额外样式包裹
      -->
    </View>
  </TouchableWithoutFeedback>

  <!--
    关闭按钮，条件渲染：closable 且非禁用且非 small 时显示
    视觉用途：标签右侧关闭图标
    对应 styles.close：关闭图标样式
  -->
  <Icon styles={{ close }}/>
</View>
```
