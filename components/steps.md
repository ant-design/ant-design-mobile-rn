# Steps

Steps is typically used for displaying the progress of a task, or guiding users through the steps of a complex flow.

### Rules

- Suitable for step-by-step and long-lasting task, e.g. the process of transfer accounts. If the task is continuous and short, such as opening a page, component `Progress` will fit better.
- When the task is complicated or has a certain sequence in the series of subtasks, we can decompose it into several steps to make things easier, e.g. register new account.

## Examples

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
  <Step title="First" />
  <Step title="Second" />
  <Step title="Third" />
</Steps>
```

### Steps

The Steps container.

| Properties | Descrition                                                                                         | Type                              | Default    |
| ---------- | -------------------------------------------------------------------------------------------------- | --------------------------------- | ---------- |
| current    | To set the current step, counting from 0. You can overwrite this state by using `status` of `Step` | number                            | `0`        |
| size       | To specify the size of the step bar, a smaller size can be achieved by setting it to `small`       | string                            | -          |
| direction  | To specify the direction of the step bar(now only support `vertical` for react-native)             | Enum { 'vertical', 'horizontal' } | `vertical` |

### Steps.Step

A single step used as child component of the Step.

| Properties  | Descrition                                                                                     | Type                                                                                  | Default |
| ----------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------- |
| status      | To specify the status. It will be automatically set by `current` of `Steps` if not configured. | Enum { 'wait', 'process', 'finish', 'error' }                                         | `wait`  |
| title       | Title of the step                                                                              | React.Element                                                                         | -       |
| description | Detail of the step(optional property)                                                          | React.Element                                                                         | -       |
| icon        | Icon of the step(optional property)                                                            | object/React.Element                                                                  | -       |
| renderIcon  | customize step icon(optional)                                                                  | (params: { starting: boolean; waiting: boolean; error: boolean; }) => React.ReactNode | -       |
