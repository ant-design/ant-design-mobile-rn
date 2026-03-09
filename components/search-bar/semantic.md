## SearchBar

### Usage Example

```jsx
import { SearchBar } from '@ant-design/react-native'
import React from 'react'
import { Alert, View } from 'react-native'

export default class SearchBarDemo extends React.Component<any, any> {
  state = {
    value: '美食',
  }

  onChange = (value: any) => {
    this.setState({ value })
  }

  clear = () => {
    this.setState({ value: '' })
  }

  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <SearchBar defaultValue="初始值" placeholder="搜索" />
        <SearchBar
          value={this.state.value}
          placeholder="搜索"
          onSubmit={(value: any) => Alert.alert(value)}
          onCancel={this.clear}
          onChange={this.onChange}
          showCancelButton
        />
      </View>
    )
  }
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface SearchBarStyle {
  input: TextStyle
  inputWrapper: ViewStyle
  wrapper: ViewStyle
  cancelTextContainer: ViewStyle
  cancelText: TextStyle
  search: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<SearchBarStyle>({
    inputWrapper: {
      flex: 1,
      flexDirection: 'row',
    },
    input: {
      borderRadius: theme.radius_md,
      backgroundColor: theme.fill_grey,
      borderColor: theme.border_color_base,
      borderWidth: theme.border_width_sm,
      height: theme.search_bar_input_height,
      color: theme.color_text_base,
      fontSize: theme.font_size_base,
      paddingLeft:
        theme.h_spacing_lg + theme.icon_size_xxs + theme.h_spacing_sm,
      paddingRight:
        theme.h_spacing_lg + theme.icon_size_xxs + theme.h_spacing_sm,
      flex: 1,
      paddingTop: 0,
      paddingBottom: 0,
    },
    wrapper: {
      backgroundColor: theme.fill_base,
      height: theme.search_bar_height,
      paddingLeft: theme.h_spacing_md,
      paddingRight: theme.h_spacing_md,
      flexDirection: 'row',
      alignItems: 'center',
    },
    cancelTextContainer: {
      height: theme.search_bar_input_height,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cancelText: {
      fontSize: theme.link_button_font_size,
      color: theme.color_link,
      paddingLeft: theme.h_spacing_lg,
    },
    search: {
      color: theme.color_icon_base,
      position: 'absolute',
      left: theme.h_spacing_md + 8,
      top: (theme.search_bar_height - theme.icon_size_xxs) / 2,
      fontSize: theme.icon_size_xxs,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 整体容器，包裹整个搜索栏区域 -->
<View styles={{ wrapper }}>

  <!-- 输入框外层容器，用于输入框布局 -->
  <View styles={{ inputWrapper }}>

    <!-- 文本输入框，支持 style 基础属性透传，用于输入搜索内容 -->
    <TextInput style={...} styles={{ input }} />

  </View>

  <!-- 搜索图标，显示搜索放大镜图标 -->
  <Icon styles={{ search }} />

  <!-- 取消按钮容器，条件渲染，当 showCancelButton 或输入框聚焦时显示 -->
  <View styles={{ cancelTextContainer }}>

    <!-- 取消按钮文字，点击触发取消操作 -->
    <Text styles={{ cancelText }} />

  </View>
</View>
```
