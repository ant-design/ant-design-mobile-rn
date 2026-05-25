## Pagination

### Usage Example

```jsx
import { Pagination, WhiteSpace, WingBlank } from '@ant-design/react-native'
import React from 'react'

const locale = {
  prevText: '上一步',
  nextText: '下一步',
}

export default class BasicPaginationExample extends React.Component<any, any> {
  render() {
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Pagination total={5} current={1} locale={locale} />

        <WhiteSpace size="lg" />
        <Pagination simple total={5} current={1} locale={locale} />

        <WhiteSpace size="lg" />
        <Pagination mode="number" total={5} current={3} />

        <WhiteSpace size="lg" />
        <Pagination mode="pointer" total={5} current={2} />
      </WingBlank>
    )
  }
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface PaginationStyle {
  container: ViewStyle
  numberStyle: ViewStyle
  totalStyle: TextStyle
  activeTextStyle: TextStyle
  indicatorStyle: ViewStyle
  pointStyle: ViewStyle
  pointActiveStyle: ViewStyle
  spaceStyle: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<PaginationStyle>({
    container: {
      // fix: 高度坍塌 in react-native@0.75+
      // flex: 1,
      justifyContent: 'center',
    },
    numberStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    totalStyle: {
      fontSize: 18,
      color: theme.color_text_base,
    },
    activeTextStyle: {
      fontSize: 18,
      color: theme.color_link,
    },
    indicatorStyle: {
      flexDirection: 'row',
      alignSelf: 'center',
    },
    pointStyle: {
      width: 8,
      height: 8,
      borderRadius: 8,
      backgroundColor: theme.color_icon_base,
    },
    pointActiveStyle: {
      backgroundColor: '#888',
    },
    spaceStyle: {
      marginHorizontal: theme.h_spacing_sm / 2,
      marginVertical: theme.v_spacing_sm / 2,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 最外层容器区域
     对应 styles.container：整体容器样式 -->
<View styles={{ container }}>
  <!-- 模式为 'button'（默认）时，左右两个按钮以及当前页数显示区域 -->
  <Flex>
    <Flex.Item>
      <!-- 上一页按钮文字区域
           支持禁用状态（disabled）
           注意按钮内部自带样式，不在本组件中定义 -->
      <Button>
        <!-- 取消对应 styles，按钮文字内容通过 locale 透传 -->
      </Button>
    </Flex.Item>

    <!-- simple为 false 时，显示当前页数和总页数区域 -->
    <Flex.Item>
      <View styles={{ numberStyle }}>
        <!-- 当前页数文字区域
             对应 styles.activeTextStyle：高亮当前页数 -->
        <Text styles={{ activeTextStyle }} />
        <!-- 总页数文字区域
             对应 styles.totalStyle：总页数显示 -->
        <Text styles={{ totalStyle }} />
      </View>
    </Flex.Item>
    <!-- simple为 true 时，此处 Flex.Item 为空占位 -->

    <Flex.Item>
      <!-- 下一页按钮文字区域
           支持禁用状态（disabled）
           注意按钮内部自带样式，不在本组件中定义 -->
      <Button>
        <!-- 取消对应 styles，按钮文字内容通过 locale 透传 -->
      </Button>
    </Flex.Item>
  </Flex>

  <!-- 模式为 'number' 时，显示当前页数和总页数区域 -->
  <View styles={{ numberStyle }}>
    <!-- 当前页数文字区域
         对应 styles.activeTextStyle：高亮当前页数 -->
    <Text styles={{ activeTextStyle }} />
    <!-- 总页数文字区域
         对应 styles.totalStyle：总页数显示 -->
    <Text styles={{ totalStyle }} />
  </View>

  <!-- 模式为 'pointer' 时，显示圆点指示器 -->
  <View styles={{ indicatorStyle }} style={... /* 支持外部 indicatorStyle 叠加 */}>
    <!-- 圆点列表，代表性示例 -->
    <!-- 单个圆点 -->
    <View styles={{ pointStyle, spaceStyle }} />
    <!-- 当前页对应圆点，高亮样式附加 -->
    <View styles={{ pointStyle, spaceStyle, pointActiveStyle }} />
  </View>
</View>
```
