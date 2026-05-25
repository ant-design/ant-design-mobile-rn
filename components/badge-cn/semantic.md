## Badge

### Usage Example

```jsx
import { Badge, WhiteSpace } from '@ant-design/react-native'
import React from 'react'
import { ScrollView, View } from 'react-native'

export default class BasicTagExample extends React.Component<any, any> {
  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={{ padding: 20 }}>
          <Badge text={9}>
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>

          <WhiteSpace size="lg" />

          <Badge text={109} overflowCount={100}>
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>

          <WhiteSpace size="lg" />

          <Badge text={109}>
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>

          <WhiteSpace size="lg" />

          <Badge text="new">
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>

          <WhiteSpace size="lg" />

          <Badge text={109} dot>
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>

          <WhiteSpace size="lg" />

          <Badge text={33} corner>
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>
        </View>
      </ScrollView>
    )
  }
}
```

### styles

```tsx
import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface BadgeStyle {
  wrap: ViewStyle
  textCornerWrap: ViewStyle
  dot: ViewStyle
  dotSizelarge: ViewStyle
  textDom: ViewStyle
  textCorner: ViewStyle
  textCornerlarge: ViewStyle
  text: TextStyle
}

const grid = 4

export default (theme: Theme) =>
  StyleSheet.create<BadgeStyle>({
    wrap: {
      flexDirection: 'row',
    },
    textCornerWrap: {
      overflow: 'hidden',
    },
    dot: {
      width: 2 * grid,
      height: 2 * grid,
      borderRadius: grid,
      backgroundColor: theme.brand_important,
      position: 'absolute',
      top: -1 * grid,
      right: -1 * grid,
    },
    dotSizelarge: {
      width: 4 * grid,
      height: 4 * grid,
      borderRadius: 2 * grid,
    },
    textDom: {
      paddingVertical: 0.5 * grid,
      paddingHorizontal: (Platform.OS === 'ios' ? 1.5 : 2) * grid,
      backgroundColor: theme.brand_important,
      borderRadius: 4 * theme.radius_sm,
      borderStyle: 'solid',
      position: 'absolute',
      top: -10,
      right: -15,
    },
    textCorner: {
      width: 18 * grid,
      backgroundColor: theme.brand_important,
      transform: [
        {
          rotate: '45deg',
        },
      ],
      position: 'absolute',
      top: 2 * grid,
    },
    textCornerlarge: {
      width: 26 * grid,
      top: 3 * grid,
    },
    text: {
      color: theme.color_text_base_inverse,
      textAlign: 'center',
    },
  })
```

### Abstract DOM Structure

```html
<!-- 最外层包裹容器，主要用于整体布局和定位 
     对应 styles.wrap：包裹层样式 -->
<View styles={{ wrap }} style={...}>
  <!-- 内容包裹容器，定位 children 和徽标内容 
       对应 styles.textCornerWrap（corner 模式）/ styles.textDomWrap（非 corner 模式） 动态 -->
  <View styles={{ textCornerWrap /* 或 textDomWrap */ }}>
    <!-- 子节点内容（children） -->
    {children}
    <!-- 条件渲染：当 text 或 dot 存在时展示徽标内容 -->
    
    <!-- 普通文本徽标容器 
         视觉用途：承载数字或文字徽标
         对应 styles.textDom，styles.textDomlarge（size 为 large 时） 动态 -->
    <View styles={{ textDom, textDomlarge /* 动态选其一 */ }}>
      <!-- 徽标文字内容 
           对应 styles.text：文本样式 -->
      <Text styles={{ text }}/>
    </View>

    <!-- 点徽标容器（dot 为 true 时显示） 
         视觉用途：小圆点样式徽标
         对应 styles.dot，styles.dotSizelarge（size 为 large 时） 动态 -->
    <View styles={{ dot, dotSizelarge /* 动态选其一 */ }}/>
  </View>
</View>
```
