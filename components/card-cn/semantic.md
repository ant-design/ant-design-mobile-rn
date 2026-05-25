## Card

### Usage Example

```jsx
import { Card, WhiteSpace, WingBlank } from '@ant-design/react-native'
import React from 'react'
import { Text, View } from 'react-native'

export default class BasicCardExample extends React.Component<any, any> {
  render() {
    return (
      <View style={{ paddingTop: 30 }}>
        <WingBlank size="lg">
          <Card>
            <Card.Header
              title="This is title"
              thumbStyle={{ width: 30, height: 30 }}
              thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              extra="this is extra"
            />
            <Card.Body>
              <View style={{ height: 42 }}>
                <Text style={{ marginLeft: 16 }}>Card Content</Text>
              </View>
            </Card.Body>
            <Card.Footer
              content="footer content"
              extra="footer extra content"
            />
          </Card>
        </WingBlank>
        <WhiteSpace size="lg" />
        <Card full>
          <Card.Header
            title="Full Column"
            thumbStyle={{ width: 30, height: 30 }}
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra="this is extra"
          />
          <Card.Body>
            <View style={{ height: 42 }}>
              <Text style={{ marginLeft: 16 }}>Card Content</Text>
            </View>
          </Card.Body>
          <Card.Footer content="footer content" extra="footer extra content" />
        </Card>
      </View>
    )
  }
}
```

### styles

```tsx
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface CardStyle {
  card: ViewStyle
  full: ViewStyle
  headerWrap: ViewStyle
  headerTitle: ViewStyle
  headerImage: ImageStyle
  headerContentWrap: ViewStyle
  headerContent: TextStyle
  headerExtraWrap: ViewStyle
  headerExtra: TextStyle
  body: ViewStyle
  footerWrap: ViewStyle
  footerContent: TextStyle
  footerExtra: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<CardStyle>({
    card: {
      borderWidth: theme.border_width_md,
      borderColor: theme.border_color_base,
      borderRadius: theme.radius_md,
      paddingBottom: theme.v_spacing_sm,
      flexDirection: 'column',
      backgroundColor: theme.fill_base,
    },
    full: {
      borderRadius: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
    },
    headerWrap: {
      flexDirection: 'row',
      paddingVertical: theme.v_spacing_sm,
      paddingRight: theme.h_spacing_lg,
      marginLeft: theme.h_spacing_lg,
      alignItems: 'center',
    },
    headerTitle: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerImage: {
      marginRight: theme.h_spacing_sm,
    },
    headerContentWrap: {
      flex: 1,
    },
    headerContent: {
      color: theme.color_text_base,
      fontSize: theme.font_size_heading,
      flex: 1,
    },
    headerExtraWrap: {
      flex: 1,
    },
    headerExtra: {
      flex: 1,
      fontSize: theme.font_size_heading,
      color: theme.color_text_caption,
      textAlign: 'right',
    },
    body: {
      flexGrow: 1,
      paddingVertical: theme.v_spacing_md,
      minHeight: 48,
      borderTopWidth: theme.border_width_md,
      borderColor: theme.border_color_base,
    },
    footerWrap: {
      flexDirection: 'row',
      paddingHorizontal: theme.h_spacing_lg,
    },
    footerContent: {
      flex: 1,
      fontSize: theme.font_size_base,
      color: theme.color_text_caption,
    },
    footerExtra: {
      textAlign: 'right',
      fontSize: theme.font_size_base,
      color: theme.color_text_caption,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 卡片容器，最外层包装视图，容纳头部、主体、底部 -->
<!-- 对应 styles.card：卡片基础容器样式 -->
<!-- 对应 styles.full（动态）：当 full 为 true 时，卡片充满容器 -->
<View styles={{ card, full }} style={...}>
  <!-- 头部区域，包含缩略图、标题及额外内容 -->
  <!-- 对应 styles.headerWrap：头部容器样式 -->
  <View styles={{ headerWrap }} style={...}>
    <!-- 头部标题区，包含缩略图与标题文本 -->
    <!-- 对应 styles.headerTitle：标题容器样式 -->
    <View styles={{ headerTitle }} style={...}>
      <!-- 缩略图区域，图片或自定义节点 -->
      <!-- 对应 styles.headerImage：缩略图图片样式 -->
      <Image styles={{ headerImage }} style={...} />
      <!-- 标题内容区 -->
      <!-- 对应 styles.headerContentWrap：标题内容包装器（当标题为 JSX 元素） -->
      <!-- 对应 styles.headerContent：标题文本样式（当标题为字符串或文本） -->
      <!-- 支持 style 基础属性透传：标题文本容器 -->
      { /* 条件渲染 element: 若 title 是 React元素，渲染 <View styles={{headerContentWrap}} />；否则 <Text styles={{headerContent}} /> */ }
      <View styles={{ headerContentWrap }} style={...} />
      <Text styles={{ headerContent }} style={...} />
    </View>
    <!-- 头部额外内容区域 -->
    <!-- 对应 styles.headerExtraWrap：额外内容包装器（当额外内容为 JSX 元素） -->
    <!-- 对应 styles.headerExtra：额外内容文本样式（当额外内容为文本） -->
    { /* 条件渲染 element: 若 extra 是 React元素，渲染 <View styles={{headerExtraWrap}} />；否则 <Text styles={{headerExtra}} /> */}
    <View styles={{ headerExtraWrap }} style={...} />
    <Text styles={{ headerExtra }} style={...} />
  </View>

  <!-- 主体区域，卡片内容区域 -->
  <!-- 对应 styles.body：主体容器样式 -->
  <!-- 支持 style 基础属性透传：主体内容容器 -->
  <View styles={{ body }} style={...} />

  <!-- 底部区域，包含内容和额外信息 -->
  <!-- 对应 styles.footerWrap：底部容器样式 -->
  <View styles={{ footerWrap }} style={...}>
    <!-- 底部主内容区 -->
    <!-- 对应 styles.footerContent：底部内容文本样式 -->
    { /* 条件渲染 element: 若 content 是 React元素，渲染 <View style={{flex: 1}} />；否则 <Text styles={{footerContent}} /> */}
    <View style={{ flex: 1 }} />
    <Text styles={{ footerContent }} style={...} />
    
    <!-- 底部额外内容区（可选） -->
    <!-- 对应 styles.footerExtra：底部额外文本样式 -->
    { /* 条件渲染：extra 存在时 */}
    { /* 条件渲染 element: 若 extra 是 React元素，渲染 <View style={{flex: 1}} />；否则 <Text styles={{footerExtra}} /> */}
    <View style={{ flex: 1 }} />
    <Text styles={{ footerExtra }} style={...} />
  </View>
</View>
```
