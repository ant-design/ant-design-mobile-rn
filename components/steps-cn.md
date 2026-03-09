# Steps

显示一个任务的进度；或者引导用户完成某个复杂任务。

### 规则
- 应用在离散和时间较长的进度显示，eg：转账进度；如果任务是连续和短暂的，应该使用 Progress 来显示，eg：打开页面。
- 当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务，eg：用户注册新账号。

## 代码演示

```tsx
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

## API

```jsx
<Steps>
  <Step title="第一步" />
  <Step title="第二步" />
  <Step title="第三步" />
</Steps>
```

### Steps

整体步骤条。

| 属性      | 说明                                                                          | 类型                              | 默认值     |
| --------- | ----------------------------------------------------------------------------- | --------------------------------- | ---------- |
| current   | 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 `status` 属性覆盖状态 | number                            | 0          |
| size      | 尺寸，支持设置小尺寸`small`                                                   | string                            | -          |
| status    | 指定当前步骤的状态，可选 `wait` `process` `finish` `error`                    | string                            | `process`  |
| direction | step 样式( RN 目前只支持 vertical )                                           | Enum { 'vertical', 'horizontal' } | `vertical` |

### Steps.Step

步骤条内的每一个步骤。

| 属性        | 说明                                                                   | 类型                                                                                  | 默认值 |
| ----------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------ |
| status      | 指定状态。当不配置该属性时，会使用 Steps 的 `current` 来自动指定状态。 | Enum { 'wait', 'process', 'finish', 'error' }                                         | `wait` |
| title       | 标题                                                                   | React.Element                                                                         | -      |
| description | 步骤的详情描述，可选                                                   | React.Element                                                                         | -      |
| icon        | 步骤图标，可选                                                         | object/React.Element                                                                  | -      |
| renderIcon  | 自定义步骤图标，可选                                                   | (params: { starting: boolean; waiting: boolean; error: boolean; }) => React.ReactNode | -      |
