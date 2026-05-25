## Button

### Usage Example

```jsx
import { Button, Icon, WhiteSpace, WingBlank } from '@ant-design/react-native'
import React from 'react'

export default () => (
  <WingBlank>
    <WhiteSpace />
    <Button>default</Button>
    <WhiteSpace />
    <Button disabled>default disabled</Button>
    <WhiteSpace />

    <Button type="primary">primary</Button>
    <WhiteSpace />
    <Button type="primary" disabled>
      primary disabled
    </Button>
    <WhiteSpace />

    <Button type="warning">warning</Button>
    <WhiteSpace />
    <Button type="warning" disabled>
      warning disabled
    </Button>
    <WhiteSpace />

    <Button loading>loading button</Button>

    <Button activeStyle={false}>No click feedback</Button>
    <WhiteSpace />
    <Button underlayColor={'blue'}>Custom Underlay</Button>
    <Button activeStyle={{ backgroundColor: 'red' }}>
      custom feedback style
    </Button>
    <WhiteSpace />

    <Button
      styles={{
        rawText: { color: 'darkgray' },
      }}
      style={{
        backgroundColor: 'red',
      }}>
      custon background and text color
    </Button>

    <WingBlank
      style={{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Button type="ghost">ghost</Button>
      <Button type="ghost" disabled>
        ghost disabled
      </Button>
      <Button type="ghost" size="small">
        ghost
      </Button>
    </WingBlank>
    <WhiteSpace />

    <Button type="primary">
      <Icon name="login" />
    </Button>
  </WingBlank>
)
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'
export interface ButtonStyles {
  container: ViewStyle
  defaultHighlight: ViewStyle
  primaryHighlight: ViewStyle
  ghostHighlight: ViewStyle
  warningHighlight: ViewStyle
  wrapperStyle: ViewStyle
  underlayStyle: ViewStyle
  largeRaw: ViewStyle
  largeUnderlayContainerRaw: ViewStyle
  smallRaw: ViewStyle
  smallUnderlayContainerRaw: ViewStyle
  defaultRaw: ViewStyle
  defaultUnderlayContainerRaw: ViewStyle
  primaryRaw: ViewStyle
  primaryUnderlayContainerRaw: ViewStyle
  ghostRaw: ViewStyle
  ghostUnderlayContainerRaw: ViewStyle
  warningRaw: ViewStyle
  warningUnderlayContainerRaw: ViewStyle
  defaultDisabledRaw: ViewStyle
  primaryDisabledRaw: ViewStyle
  ghostDisabledRaw: ViewStyle
  warningDisabledRaw: ViewStyle
  defaultHighlightText: TextStyle
  primaryHighlightText: TextStyle
  ghostHighlightText: TextStyle
  warningHighlightText: TextStyle
  rawText: TextStyle
  largeRawText: TextStyle
  smallRawText: TextStyle
  defaultRawText: TextStyle
  primaryRawText: TextStyle
  ghostRawText: TextStyle
  warningRawText: TextStyle
  defaultDisabledRawText: TextStyle
  primaryDisabledRawText: TextStyle
  ghostDisabledRawText: TextStyle
  warningDisabledRawText: TextStyle
  indicator: ViewStyle
}
export default (theme: Theme) =>
  StyleSheet.create<ButtonStyles>({
    container: {
      flexDirection: 'row',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    defaultHighlight: {
      backgroundColor: `${theme.fill_tap}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
      borderColor: theme.border_color_base,
    },
    primaryHighlight: {
      backgroundColor: `${theme.primary_button_fill_tap}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
      borderColor: theme.primary_button_fill,
    },
    ghostHighlight: {
      backgroundColor: 'transparent',
      borderColor: theme.ghost_button_fill_tap,
    },
    warningHighlight: {
      backgroundColor: `${theme.warning_button_fill_tap}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
      borderColor: theme.warning_button_fill,
    },
    wrapperStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.radius_md,
      borderWidth: 1,
    },
    underlayStyle: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    largeRaw: {
      height: theme.button_height,
    },
    largeUnderlayContainerRaw: {
      paddingLeft: theme.h_spacing_lg,
      paddingRight: theme.h_spacing_lg,
    },
    smallRaw: {
      height: theme.button_height_sm,
    },
    smallUnderlayContainerRaw: {
      paddingLeft: theme.h_spacing_sm,
      paddingRight: theme.h_spacing_sm,
    },
    defaultRaw: {
      backgroundColor: theme.fill_base,
      borderColor: theme.border_color_base,
    },
    defaultUnderlayContainerRaw: {},
    primaryRaw: {
      backgroundColor: theme.primary_button_fill,
      borderColor: theme.primary_button_fill,
    },
    primaryUnderlayContainerRaw: {},
    ghostRaw: {
      backgroundColor: 'transparent',
      borderColor: theme.ghost_button_color,
    },
    ghostUnderlayContainerRaw: {},
    warningRaw: {
      backgroundColor: theme.warning_button_fill,
      borderColor: theme.warning_button_fill,
    },
    warningUnderlayContainerRaw: {},
    defaultDisabledRaw: {
      backgroundColor: theme.fill_disabled,
      borderColor: theme.fill_disabled,
    },
    primaryDisabledRaw: {
      opacity: 0.4,
    },
    ghostDisabledRaw: {
      borderColor: `${theme.color_text_base}1A`, // alpha 10%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    warningDisabledRaw: {
      opacity: 0.4,
    },
    defaultHighlightText: {
      color: `${theme.color_text_base}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    primaryHighlightText: {
      color: `${theme.color_text_base_inverse}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    ghostHighlightText: {
      color: theme.ghost_button_fill_tap, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    warningHighlightText: {
      color: `${theme.color_text_base_inverse}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    rawText: {},
    largeRawText: {
      fontSize: theme.button_font_size,
    },
    smallRawText: {
      fontSize: theme.button_font_size_sm,
    },
    defaultRawText: {
      color: theme.color_text_base,
    },
    primaryRawText: {
      color: theme.color_text_base_inverse,
    },
    ghostRawText: {
      color: theme.ghost_button_color,
    },
    warningRawText: {
      color: theme.color_text_base_inverse,
    },
    defaultDisabledRawText: {
      color: `${theme.color_text_base}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    primaryDisabledRawText: {
      color: `${theme.color_text_base_inverse}99`, // alpha 60%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    ghostDisabledRawText: {
      color: `${theme.color_text_base}1A`, // alpha 10%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    warningDisabledRawText: {
      color: `${theme.color_text_base_inverse}99`, // alpha 60%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    indicator: {
      marginRight: theme.h_spacing_md,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 最外层可点击容器，支持按下高亮效果，控制按钮禁用状态，动态组合应用 size, type, disabled, style 相关样式 -->
<Pressable style={...} styles={{ wrapperStyle, largeRaw, smallRaw, defaultRaw, primaryRaw, ghostRaw, warningRaw,
  defaultDisabledRaw, primaryDisabledRaw, ghostDisabledRaw, warningDisabledRaw }}>
  <!-- 内层遮罩容器，承载按下高亮背景色，动态应用 size, type, underlayColor 和 activeStyle 相关样式，按下时启用 -->
  <View styles={{ underlayStyle, largeUnderlayContainerRaw, smallUnderlayContainerRaw,
    defaultUnderlayContainerRaw, primaryUnderlayContainerRaw, ghostUnderlayContainerRaw, warningUnderlayContainerRaw,
    defaultHighlight, primaryHighlight, ghostHighlight, warningHighlight }} style={...} />
  <!-- 按钮内容容器，布局按钮文本和加载指示器，固定样式 container -->
  <View styles={{ container }}>
    <!-- 条件渲染：加载指示器，按 loading 显示，大小固定，颜色根据按下状态和禁用状态动态计算 -->
    <ActivityIndicator styles={{ indicator }} />
    <!-- 按钮文本容器，动态应用 size, type, disabled, 按下高亮相关文本样式和 activeStyle，承载按钮文字内容 -->
    <AntmView styles={{ rawText, largeRawText, smallRawText, defaultRawText, primaryRawText, ghostRawText, warningRawText,
      defaultDisabledRawText, primaryDisabledRawText, ghostDisabledRawText, warningDisabledRawText,
      defaultHighlightText, primaryHighlightText, ghostHighlightText, warningHighlightText }} style={...} />
  </View>
</Pressable>
```
