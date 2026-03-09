## Accordion

### Usage Example

```jsx
import { Accordion, List } from '@ant-design/react-native'
import React from 'react'
import { View } from 'react-native'

export default class AccordionExmple extends React.Component<any, any> {
  state = {
    activeSections: [2, 0],
  }
  onChange = (activeSections: number[]) => {
    this.setState({ activeSections })
  }
  render() {
    return (
      <View style={{ marginTop: 80, marginBottom: 10 }}>
        <Accordion
          onChange={this.onChange}
          activeSections={this.state.activeSections}>
          <Accordion.Panel header="Title 1">
            <List>
              <List.Item>Content 1</List.Item>
              <List.Item>Content 2</List.Item>
              <List.Item>Content 3</List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="Title 2">
            this is panel content2 or other
          </Accordion.Panel>
          <Accordion.Panel header="Title 3">
            Text text text text text text text text text text text text text
            text text
          </Accordion.Panel>
        </Accordion>
      </View>
    )
  }
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface AccordionStyle {
  container: ViewStyle
  header: ViewStyle
  arrow: TextStyle
  headerWrap: ViewStyle
  headerText: TextStyle
  content: ViewStyle
  contentText: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<AccordionStyle>({
    container: {
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: theme.border_color_base,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: theme.h_spacing_lg,
      paddingRight: 2 * theme.h_spacing_lg,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: theme.border_color_base,
    },
    arrow: {
      color: theme.color_icon_base,
    },
    headerWrap: {
      flex: 1,
      height: theme.list_item_height,
      alignItems: 'center',
      flexDirection: 'row',
    },
    headerText: {
      color: theme.color_text_base,
      fontSize: theme.font_size_heading,
    },
    content: {
      paddingVertical: theme.v_spacing_md,
      paddingHorizontal: theme.h_spacing_md,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: theme.border_color_base,
    },
    contentText: {
      fontSize: theme.font_size_subhead,
      color: theme.color_text_paragraph,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 容器，包裹整个折叠面板，布局外层容器 -->
<View styles={{ container }} style={...}> 
  <!-- 折叠面板头部，每个面板项的头部区域 -->
  <View styles={{ header }} style={...}> 
    <!-- 头部内容的包裹容器，若 header 不是 React 元素，则显示文本内容用 -->
    <View styles={{ headerWrap }}> 
      <!-- 头部文字内容 -->
      <Text styles={{ headerText }} />
    </View>
    <!-- 箭头图标容器，显示向上或向下箭头 -->
    <View styles={{ arrow }}>
      <!-- 箭头图标，动态显示 up 或 down -->
      <Icon styles={{ arrow }} />
    </View>
  </View>

  <!-- 折叠面板内容区域 -->
  <View styles={{ content }}>
    <!-- 折叠内容文本 -->
    <Text styles={{ contentText }} />
  </View>

  <!-- 
  注：以上头部和内容节点为每个面板项重复渲染的结构
  -->
</View>
```
