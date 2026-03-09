## Steps

### Usage Example

```jsx
import { Icon, Steps, WingBlank } from '@ant-design/react-native'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
const Step = Steps.Step

export default class BasicTimelineExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      steps1: [
        { title: 'Finished', description: 'This is description' },
        { title: 'In Progress', description: 'This is description' },
        { title: 'Waiting', description: 'This is description' },
      ],
      steps2: [
        {
          title: 'Finished',
          description: 'This is description',
          status: 'finish',
        },
        {
          title: 'In Progress',
          description: 'This is description',
          status: 'process',
        },
        {
          title: 'Waiting',
          description: 'This is description',
          status: 'error',
        },
        {
          title: 'Waiting',
          description: 'This is description',
          status: 'wait',
        },
      ],
    }
  }
  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 60 }}>
          <WingBlank size="lg">
            <Steps size="small" current={1} direction="horizontal">
              {this.state.steps1.map((item: any, index: any) => (
                <Step
                  key={index}
                  title={
                    <View>
                      <Text>title:{item.title}</Text>
                    </View>
                  }
                  status={item.status}
                />
              ))}
            </Steps>
          </WingBlank>
        </View>
        <View style={{ marginTop: 60 }}>
          <WingBlank size="lg">
            <Steps size="small" current={1}>
              {this.state.steps1.map((item: any, index: any) => (
                <Step
                  key={index}
                  title={
                    <View>
                      <Text>title:{item.title}</Text>
                    </View>
                  }
                  description={
                    <View>
                      <Text>desc:{item.description}</Text>
                    </View>
                  }
                  status={item.status}
                />
              ))}
            </Steps>
          </WingBlank>
        </View>
        <View>
          <WingBlank size="lg">
            <Steps size="small">
              {this.state.steps2.map((item: any, index: any) => (
                <Step
                  key={index}
                  title={item.title}
                  description={item.description}
                  status={item.status}
                />
              ))}
            </Steps>
          </WingBlank>
        </View>
        <View>
          <WingBlank size="lg">
            <Steps current={1}>
              {this.state.steps1.map((item: any, index: any) => (
                <Step
                  key={index}
                  title={item.title}
                  description={item.description}
                  status={item.status}
                />
              ))}
            </Steps>
          </WingBlank>
        </View>
        <View>
          <WingBlank size="lg">
            <Steps>
              {this.state.steps2.map((item: any, index: any) => (
                <Step
                  key={index}
                  title={item.title}
                  description={item.description}
                  status={item.status}
                />
              ))}
            </Steps>
          </WingBlank>
        </View>
        <View>
          <WingBlank size="lg">
            <Steps current={1}>
              <Step
                key={0}
                title="Finished"
                description="This is description"
                status="finish"
              />
              <Step
                key={1}
                title="Progress"
                description="This is description"
                status="progress"
              />
              <Step
                key={2}
                title="Wait"
                description="This is description"
                status="wait"
                icon={<Icon name="down" size={20} color="white" />}
              />
            </Steps>
          </WingBlank>
        </View>
        <View>
          <WingBlank size="lg">
            <Steps current={1}>
              <Step
                key={0}
                title="Finished"
                description="This is description"
                status="finish"
                renderIcon={({ starting, waiting, error }) => {
                  let icon
                  if (starting) {
                    icon = <Icon name="home" />
                  } else if (waiting) {
                    icon = <Icon name="user" />
                  } else if (error) {
                    icon = <Icon name="star" />
                  }
                  return icon
                }}
              />
              <Step
                key={1}
                title="Progress"
                description="This is description"
                status="progress"
                renderIcon={({ starting, waiting, error }) => {
                  let icon
                  if (starting) {
                    icon = <Icon name="home" />
                  } else if (waiting) {
                    icon = <Icon name="user" />
                  } else if (error) {
                    icon = <Icon name="star" />
                  }
                  return icon
                }}
              />
              <Step
                key={2}
                title="Wait"
                description="This is description"
                status="wait"
                renderIcon={({ starting, waiting, error }) => {
                  let icon
                  if (starting) {
                    icon = <Icon name="home" />
                  } else if (waiting) {
                    icon = <Icon name="user" />
                  } else if (error) {
                    icon = <Icon name="star" />
                  }
                  return icon
                }}
              />
              <Step
                key={3}
                title="Wait"
                description="This is description"
                status="error"
                renderIcon={({ starting, waiting, error }) => {
                  let icon
                  if (starting) {
                    icon = <Icon name="home" />
                  } else if (waiting) {
                    icon = <Icon name="user" />
                  } else if (error) {
                    icon = <Icon name="star" />
                  }
                  return icon
                }}
              />
            </Steps>
          </WingBlank>
        </View>
      </ScrollView>
    )
  }
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

const grid = 4

export interface StepsStyle {
  head_default_s: ViewStyle
  head_blue_s: ViewStyle
  head_gray_s: ViewStyle
  head_red_s: ViewStyle
  icon_s: TextStyle

  head_default_l: ViewStyle
  head_blue_l: ViewStyle
  head_gray_l: ViewStyle
  head_red_l: ViewStyle
  tail_default_l: ViewStyle
  icon_l: TextStyle

  tail_default_s: ViewStyle
  tail_default_s_h: ViewStyle
  tail_gray: ViewStyle
  tail_blue: ViewStyle
  tail_error: ViewStyle
  tail_last: ViewStyle
  content_s: ViewStyle
  content_s_h: ViewStyle
  content_l: ViewStyle
  title_s: TextStyle
  description_s: TextStyle
  title_l: TextStyle
  description_l: TextStyle
}
export default (theme: Theme) =>
  StyleSheet.create<StepsStyle>({
    head_default_s: {
      width: 18,
      height: 18,
      backgroundColor: theme.fill_base,
      borderRadius: 18,
      borderWidth: theme.border_width_lg,
      borderColor: theme.brand_primary,
      borderStyle: 'solid',
      overflow: 'hidden',
    },
    head_blue_s: {
      borderColor: theme.brand_primary,
    },
    head_gray_s: {
      borderColor: theme.color_text_placeholder,
    },
    head_red_s: {
      borderColor: theme.brand_error,
    },
    icon_s: {
      fontSize: 14,
    },

    head_default_l: {
      width: 24,
      height: 24,
      backgroundColor: theme.fill_base,
      borderRadius: 18,
      borderWidth: theme.border_width_lg,
      borderColor: theme.brand_primary,
      borderStyle: 'solid',
      overflow: 'hidden',
    },
    head_blue_l: {
      borderColor: theme.brand_primary,
      backgroundColor: theme.brand_primary,
    },
    head_gray_l: {
      borderColor: theme.color_text_placeholder,
      backgroundColor: theme.color_text_placeholder,
    },
    head_red_l: {
      borderColor: theme.brand_error,
      backgroundColor: theme.brand_error,
    },
    tail_default_l: {
      width: theme.border_width_lg,
      height: 30,
      marginLeft: 11,
    },
    icon_l: {
      fontSize: 20,
    },
    tail_default_s: {
      width: theme.border_width_lg,
      flex: 1,
      marginLeft: 2 * grid,
    },
    tail_default_s_h: {
      height: theme.border_width_lg,
      width: 50,
      marginTop: 2 * grid,
    },
    tail_gray: {
      backgroundColor: theme.color_text_placeholder,
    },
    tail_blue: {
      backgroundColor: theme.brand_primary,
    },
    tail_error: {
      backgroundColor: theme.brand_error,
    },
    tail_last: {
      backgroundColor: 'transparent',
    },
    content_s: {
      paddingLeft: theme.h_spacing_md,
    },
    content_s_h: {
      paddingTop: theme.v_spacing_md,
    },
    content_l: {
      paddingLeft: theme.h_spacing_lg,
    },
    title_s: {
      fontWeight: 'bold',
      fontSize: theme.font_size_caption,
      paddingBottom: theme.v_spacing_md,
      color: theme.color_text_base,
    },
    description_s: {
      fontSize: theme.font_size_caption_sm,
      color: theme.color_text_base,
    },
    title_l: {
      fontWeight: 'bold',
      fontSize: theme.font_size_heading,
      paddingBottom: theme.v_spacing_md,
      color: theme.color_text_base,
    },
    description_l: {
      fontSize: theme.font_size_subhead,
      color: theme.color_text_base,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 外层容器，承载所有步骤，行或列布局 -->
<View style={style={{ flexDirection: 'row | column' }}}>
  <!-- StepsItem 列表示例，步骤项为兄弟节点，展示一个代表项 -->
  <!-- 步骤项容器，水平或垂直方向切换，控制头部与内容排列 -->
  <View style={styles={{ flexDirection: 'row | column' }}}>
    <!-- 头部区域，圆形背景，颜色根据状态和尺寸变化 -->
    <!-- 对应 styles.key: head_default_s/l, head_blue_s/l, head_gray_s/l, head_red_s/l，影响头部背景颜色和尺寸 -->
    <View style={styles={head_default_s | head_default_l, head_blue_s | head_blue_l | head_gray_s | head_gray_l | head_red_s | head_red_l}}>
      <!-- 状态图标，完成、等待、错误等表示 -->
      <!-- 对应 styles.key: icon_s, icon_l，控制图标大小和样式 -->
      <Icon style={styles={icon_s | icon_l}} />
      <!-- 或用户传入的自定义 icon -->
    </View>

    <!-- 上方连线 -->
    <!-- 对应 styles.key: tail_default_s/h, tail_blue, tail_gray, tail_last, tail_error，控制连线样式和颜色 -->
    <View style={styles={tail_default_s | tail_default_s_h | tail_blue | tail_gray | tail_last | tail_error}} />

    <!-- 下方连线 -->
    <!-- 同上，对应不同状态的样式，动态切换 -->
    <View style={styles={tail_default_s | tail_default_s_h | tail_blue | tail_gray | tail_last | tail_error}} />
  </View>

  <!-- 内容区域，显示标题和描述 -->
  <!-- 对应 styles.key: content_s, content_s_h, content_l，控制内容容器布局与边距 -->
  <View style={styles={content_s | content_s_h | content_l}}>
    <!-- 标题文本，支持字符串或节点 -->
    <!-- 对应 styles.key: title_s, title_l，控制字体大小、颜色等 -->
    <Text style={styles={title_s | title_l}} />

    <!-- 描述文本，支持字符串或节点 -->
    <!-- 对应 styles.key: description_s, description_l，控制字体大小、颜色等 -->
    <Text style={styles={description_s | description_l}} />
  </View>
</View>
```
