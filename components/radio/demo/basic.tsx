import React from 'react'
import { ScrollView } from 'react-native'
import { Button, Flex, List, Radio, WhiteSpace, WingBlank } from '../../'
const RadioItem = Radio.RadioItem

export default class BasicRadioExample extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context)
    this.state = {
      disabled: false,
      part1Value: 1,
      part2Value: 1,
      part3Value: 1,
    }
  }

  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    })
  }

  onChange2 = (e: { target: { value: any } }) => {
    this.setState({
      part2Value: e.target.value,
    })
  }

  onChange3 = (e: { target: { value: any } }) => {
    this.setState({
      part3Value: e.target.value,
    })
  }

  render() {
    return (
      <ScrollView>
        <List renderHeader="基本用法">
          <List.Item thumb={<Radio>Radio</Radio>} />
        </List>
        <List
          renderHeader="不可用"
          renderFooter={
            <Button type="primary" onPress={this.toggleDisabled}>
              Toggle disabled
            </Button>
          }>
          <List.Item>
            <Flex>
              <Radio defaultChecked={false} disabled={this.state.disabled}>
                Disabled
              </Radio>
              <WingBlank />
              <Radio disabled={this.state.disabled}>Disabled</Radio>
            </Flex>
          </List.Item>
        </List>
        <List renderHeader="RadioItem">
          <RadioItem
            right
            checked={this.state.part1Value === 1}
            onChange={(event) => {
              if (event.target.checked) {
                this.setState({ part1Value: 1 })
              }
            }}>
            Use Ant Design Component
          </RadioItem>
          <RadioItem
            right
            checked={this.state.part1Value === 2}
            onChange={(event) => {
              if (event.target.checked) {
                this.setState({ part1Value: 2 })
              }
            }}>
            Use Ant Design Component
          </RadioItem>
        </List>
        <List renderHeader={'单选组合 RadioGroup\n一组互斥的 Radio 配合使用'}>
          <Radio.Group
            onChange={this.onChange2}
            value={this.state.part2Value}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: 6,
            }}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
          </Radio.Group>
        </List>
        <List
          renderHeader={
            'Radio.Group 垂直\n垂直的 Radio.Group，配合更多输入框选项'
          }>
          <Radio.Group onChange={this.onChange3} value={this.state.part3Value}>
            <RadioItem value={1}>Option A</RadioItem>
            <RadioItem value={2}>Option B</RadioItem>
            <RadioItem value={3}>Option C</RadioItem>
            <RadioItem value={4}>More...</RadioItem>
          </Radio.Group>
        </List>
        <List
          renderHeader={
            'Radio.Group 组合 - 配置方式\n通过配置 options 参数来渲染单选框。也可通过 optionType 参数来设置 Radio 类型。'
          }>
          <RadioGroupExample />
        </List>
      </ScrollView>
    )
  }
}

const plainOptions = ['Apple', 'Pear', 'Orange']
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
]
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
]

class RadioGroupExample extends React.Component {
  state = {
    value1: 'Apple',
    value2: 'Apple',
    value3: 'Apple',
    value4: 'Apple',
  }

  onChange1 = (e: any) => {
    console.log('radio1 checked', e.target.value)
    this.setState({
      value1: e.target.value,
    })
  }

  onChange2 = (e: any) => {
    console.log('radio2 checked', e.target.value)
    this.setState({
      value2: e.target.value,
    })
  }

  onChange3 = (e: any) => {
    console.log('radio3 checked', e.target.value)
    this.setState({
      value3: e.target.value,
    })
  }

  onChange4 = (e: any) => {
    console.log('radio4 checked', e.target.value)
    this.setState({
      value4: e.target.value,
    })
  }

  render() {
    const { value1, value2, value3, value4 } = this.state
    return (
      <WingBlank>
        <WhiteSpace />
        <Radio.Group
          options={plainOptions}
          onChange={this.onChange1}
          value={value1}
        />
        <WhiteSpace />
        <WhiteSpace />
        <Radio.Group
          options={optionsWithDisabled}
          onChange={this.onChange2}
          value={value2}
        />
        <WhiteSpace />
        <WhiteSpace />
        <Radio.Group
          options={options}
          onChange={this.onChange3}
          value={value3}
        />
        <WhiteSpace />
        <WhiteSpace />
        <Radio.Group
          options={optionsWithDisabled}
          onChange={this.onChange4}
          value={value4}
        />
        <WhiteSpace />
      </WingBlank>
    )
  }
}
