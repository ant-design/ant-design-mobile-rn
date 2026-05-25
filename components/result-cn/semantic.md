## Result

### Usage Example

```jsx
import { Result } from '@ant-design/react-native'
import React from 'react'
import { Image, ScrollView, Text } from 'react-native'

export default class ResultExample extends React.Component<any, any> {
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#F5F5F9', flex: 1 }}>
        <Text style={{ margin: 10, color: '#999' }}>URI 图片</Text>
        <Result
          imgUrl={{
            uri: 'https://zos.alipayobjects.com/rmsportal/GcBguhrOdlYvGfnsXgrE.png',
          }}
          title="验证成功"
          message="所提交内容已成功完成验证"
        />

        <Text style={{ margin: 10, color: '#999' }}>Image source</Text>
        <Result
          imgUrl={require('./alipay.png')}
          title="验证成功"
          message="所提交内容已成功完成验证"
        />

        <Text style={{ margin: 10, color: '#999' }}>Image element</Text>
        <Result
          img={
            <Image
              source={require('./alipay.png')}
              style={{ width: 60, height: 60 }}
            />
          }
          title="验证成功"
          message={<Text>所提交内容已成功完成验证</Text>}
        />

        <Text style={{ margin: 10, color: '#999' }}>含 button 操作</Text>
        <Result
          img={
            <Image
              source={require('./alipay.png')}
              style={{ width: 60, height: 60 }}
            />
          }
          title="验证成功"
          message="所提交内容已成功完成验证"
          buttonText="完成"
          buttonType="primary"
          onButtonClick={(e: any) => alert(e.toString())}
        />
      </ScrollView>
    )
  }
}
```

### styles

```tsx
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface ResultStyle {
  result: ViewStyle
  imgWrap: ViewStyle
  img: ImageStyle
  title: ViewStyle
  titleText: TextStyle
  message: ViewStyle
  messageText: TextStyle
  buttonWrap: ViewStyle
  button: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<ResultStyle>({
    result: {
      alignItems: 'center',
      paddingVertical: theme.v_spacing_xl,
      backgroundColor: theme.fill_base,
      borderBottomColor: theme.border_color_base,
    },
    imgWrap: {
      margin: 0,
    },
    img: {
      width: 60,
      height: 60,
    },
    title: {
      marginTop: theme.v_spacing_lg,
      paddingHorizontal: theme.h_spacing_lg,
    },
    titleText: {
      fontSize: 21,
      color: theme.color_text_base,
    },
    message: {
      marginTop: theme.v_spacing_lg,
      paddingHorizontal: theme.h_spacing_lg,
    },
    messageText: {
      fontSize: theme.font_size_caption,
      color: theme.color_text_caption,
    },
    buttonWrap: {
      flexDirection: 'row',
      marginTop: theme.v_spacing_lg,
      paddingHorizontal: theme.h_spacing_lg,
    },
    button: {
      flex: 1,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 整体结果容器，包含所有结果内容 -->
<!-- 对应 styles.result：结果容器布局 -->
<View style={[styles.result, style]}>

  <!-- 图标区域容器，包裹图片或自定义图标节点 -->
  <!-- 对应 styles.imgWrap：图标容器定位和尺寸 -->
  <View style={styles.imgWrap} />

  <!-- 标题区域容器 -->
  <!-- 对应 styles.title：标题容器布局 -->
  <View style={styles.title}>
    <!-- 标题文本 -->
    <!-- 对应 styles.titleText：标题文字样式 -->
    <Text style={styles.titleText} />
    <!-- 或自定义标题 ReactNode，支持复杂结构 -->
  </View>

  <!-- 信息内容区域容器 -->
  <!-- 对应 styles.message：信息区域布局 -->
  <View style={styles.message}>
    <!-- 信息文本 -->
    <!-- 对应 styles.messageText：信息文字样式 -->
    <Text style={styles.messageText} />
    <!-- 或自定义信息 ReactNode，支持复杂结构 -->
  </View>

  <!-- 按钮区域容器 -->
  <!-- 对应 styles.buttonWrap：按钮容器布局 -->
  <View style={styles.buttonWrap}>
    <!-- 按钮控件，封装 antd-mobile-rn Button 组件 -->
    <!-- 对应 styles.button：按钮样式 -->
    <Button style={styles.button} type={buttonType}></Button>
  </View>

</View>
```
