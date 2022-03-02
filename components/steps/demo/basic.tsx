import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Icon, Steps, WingBlank } from '../../'
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
