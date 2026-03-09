## List

### Usage Example

```jsx
import { List } from '@ant-design/react-native'
import React from 'react'
import { Image, ScrollView, View } from 'react-native'

const Item = List.Item
const Brief = Item.Brief

export default class BasicListExample extends React.Component<any, any> {
  render() {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#f5f5f9' }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <List renderHeader={'basic'}>
          <Item data-seed="logId">
            标题文字点击无反馈，文字超长则隐藏，文字超长则隐藏
          </Item>
          <Item wrap>
            文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行
          </Item>
          <Item disabled extra="箭头向右" arrow="horizontal" onPress={() => {}}>
            标题文字
          </Item>
          <Item extra="箭头向下" arrow="down" onPress={() => {}}>
            标题文字
          </Item>
          <Item extra="箭头向上" arrow="up" onPress={() => {}}>
            标题文字
          </Item>
          <Item extra="没有箭头" arrow="empty">
            标题文字
          </Item>
          <Item
            extra={
              <View>
                内容内容
                <Brief style={{ textAlign: 'right' }}>辅助文字内容</Brief>
              </View>
            }
            multipleLine>
            垂直居中对齐
          </Item>
          <Item extra="内容内容" multipleLine>
            垂直居中对齐<Brief>辅助文字内容</Brief>
          </Item>
          <Item
            wrap
            extra="文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行"
            multipleLine
            align="top"
            arrow="horizontal">
            顶部对齐
            <Brief>辅助文字内容辅助文字内容辅助文字内容辅助文字内容</Brief>
            <Brief>辅助文字内容</Brief>
          </Item>
          <Item
            extra={
              <View>
                内容内容
                <Brief style={{ textAlign: 'right' }}>辅助文字内容</Brief>
              </View>
            }
            multipleLine
            align="bottom">
            底部对齐
          </Item>
        </List>
        <List renderHeader={'带缩略图'}>
          <Item thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png">
            thumb
          </Item>
          <Item
            thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            arrow="horizontal">
            thumb
          </Item>
          <Item
            extra={
              <Image
                source={{
                  uri: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
                }}
                style={{ width: 29, height: 29 }}
              />
            }
            arrow="horizontal">
            extra为Image
          </Item>
        </List>
      </ScrollView>
    )
  }
}

export const title = 'List'
export const description = 'List Example'
```

### styles

```tsx
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'
export interface ListStyle {
  List: ViewStyle
  Header: TextStyle
  Footer: TextStyle
  Body: ViewStyle
  BodyBottomLine: ViewStyle
}

export interface ListItemStyle {
  underlayColor: ViewStyle
  Item: ViewStyle
  Line: ViewStyle
  Thumb: ImageStyle
  Content: TextStyle
  Extra: TextStyle
  Arrow: TextStyle
  ArrowV: TextStyle
  multipleLine: ViewStyle
  multipleThumb: ImageStyle
}

export interface BriefStyle {
  Brief: ViewStyle
  BriefText: TextStyle
}

export default (variables: Theme) =>
  StyleSheet.create<ListStyle & ListItemStyle & BriefStyle>({
    List: {
      backgroundColor: variables.fill_body,
    },
    Header: {
      fontSize: variables.font_size_base,
      color: variables.color_text_caption,
      paddingHorizontal: variables.h_spacing_lg,
      paddingTop: variables.v_spacing_lg,
      paddingBottom: variables.v_spacing_md,
    },
    Footer: {
      fontSize: variables.font_size_base,
      color: variables.color_text_caption,
      paddingHorizontal: variables.h_spacing_lg,
      paddingVertical: variables.v_spacing_md,
    },
    Body: {
      position: 'relative',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: variables.border_color_thin,
    },
    BodyBottomLine: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: StyleSheet.hairlineWidth,
      backgroundColor: variables.border_color_thin,
    },

    underlayColor: {
      backgroundColor: variables.fill_tap,
    },
    Item: {
      flexGrow: 1,
      alignItems: 'center',
      flexDirection: 'row',
      paddingLeft: variables.h_spacing_lg,
      backgroundColor: variables.fill_base,
    },
    Line: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: variables.h_spacing_lg,
      paddingVertical: variables.v_spacing_sm,
      minHeight: variables.list_item_height,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: variables.border_color_base,
    },
    Thumb: {
      width: variables.icon_size_md,
      height: variables.icon_size_md,
      marginRight: variables.h_spacing_lg,
    },
    Content: {
      color: variables.color_text_base,
      fontSize: variables.font_size_heading,
      textAlignVertical: 'center',
      flex: 1,
    },
    Extra: {
      color: variables.color_text_caption,
      fontSize: variables.font_size_heading,
      textAlign: 'right',
      textAlignVertical: 'center',
      paddingLeft: variables.h_spacing_md,
      maxWidth: variables.extra_max_width,
    },
    Brief: {
      minHeight: variables.font_size_icontext,
    },
    BriefText: {
      color: variables.color_text_caption,
      fontSize: variables.font_size_subhead,
      paddingTop: variables.v_spacing_xs,
      textAlignVertical: 'center',
    },
    Arrow: {
      marginLeft: variables.h_spacing_md,
      marginTop: variables.v_spacing_xs,
    },
    ArrowV: {
      marginLeft: variables.h_spacing_md,
    },
    multipleLine: {
      paddingVertical: variables.v_spacing_sm,
    },
    multipleThumb: {
      width: variables.icon_size_lg,
      height: variables.icon_size_lg,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 整体列表容器区域，包裹整个列表内容 -->
<View styles={{ List }} style={...}>
  <!-- 头部区域，支持自定义内容渲染 -->
  <!-- 对应 styles.Header：列表头部文字样式 -->
  <!-- 只在有 renderHeader 时渲染 -->
  <Text styles={{ Header }} />
  <!-- 列表主体内容区域，包含所有子元素 -->
  <View styles={{ Body }}>
    <!-- 列表条目，代表至少有一个 List.Item -->
    <!-- 一般由 List.Item 负责渲染，这里以占位示例展示 -->
    <View styles={{ Item }}>
      <!-- 左侧缩略图区域 -->
      <Image styles={{ Thumb }} />
      <!-- 内容区，显示主要文本和额外信息 -->
      <View styles={{ Line }}>
        <!-- 主内容文本 -->
        <Text styles={{ Content }} />
        <!-- 额外内容文本 -->
        <Text styles={{ Extra }} />
        <!-- 箭头图标 -->
        <Text styles={{ Arrow }} />
        <!-- 或竖直箭头样式 -->
        <Text styles={{ ArrowV }} />
      </View>
    </View>
    <!-- 列表项支持多行展示时，Thumb 和 Line 的对应样式 -->
    <!-- 对应 styles.multipleThumb, styles.multipleLine -->
    <!-- 根据 multipleLine 动态应用，动态样式 -->
    <!-- 支持 align 属性：修改 Line 中 alignItems 布局 -->
    <!-- Possible styles: multipleLine, multipleThumb (动态), alignStyle (flex-start/flex-end) -->
    <!-- 注意：上述是 List.Item 内部细节，主体只做示意 -->
    <!-- 这里 children 可能为字符串、ReactNode 或数组，内容包裹在 Content 样式内 -->

    <!-- 列表主体底部分割线 -->
    <View styles={{ BodyBottomLine }} />
  </View>
  <!-- 底部区域，支持自定义内容渲染 -->
  <!-- 对应 styles.Footer：列表尾部文字样式 -->
  <!-- 只在有 renderFooter 时渲染 -->
  <Text styles={{ Footer }} />
</View>
```
