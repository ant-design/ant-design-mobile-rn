import React from 'react'
import { ScrollView } from 'react-native'
import { Button, Flex, List, Radio, WingBlank } from '../../'
const RadioItem = Radio.RadioItem

type RadioValue = string | number
interface EventRadioGroup {
  target: { value: RadioValue }
}

interface EventRadioItem {
  target: { checked: boolean }
}
export default class BasicRadioExample extends React.Component<any, any> {
  state = {
    disabled: false,
    part1Value: 1,
    part2Value: 1,
    part3Value: 1,
  }

  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    })
  }

  onChange = (part1Value: any, e: EventRadioItem) => {
    if (e.target.checked) {
      this.setState({ part1Value })
    }
  }

  onGroupChange2 = (e: EventRadioGroup) => {
    this.setState({
      part2Value: e.target.value,
    })
  }

  onGroupChange3 = (e: EventRadioGroup) => {
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
            checked={this.state.part1Value === 1}
            onChange={this.onChange.bind(this, 1)}>
            Use Ant Design Component
          </RadioItem>
          <RadioItem
            checked={this.state.part1Value === 2}
            onChange={this.onChange.bind(this, 2)}>
            Use Ant Design Component
          </RadioItem>
        </List>
        <List renderHeader={'单选组合 RadioGroup\n一组互斥的 Radio 配合使用'}>
          <Radio.Group
            onChange={this.onGroupChange2}
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
          <Radio.Group
            onChange={this.onGroupChange3}
            value={this.state.part3Value}>
            <RadioItem value={1}>Option A</RadioItem>
            <RadioItem value={2}>Option B</RadioItem>
            <RadioItem value={3}>Option C</RadioItem>
            <RadioItem value={4} left>
              More...
            </RadioItem>
          </Radio.Group>
        </List>
        <List
          renderHeader={
            'Radio.Group 组合 - 配置方式\n可通过配置 options 参数来渲染单选框。'
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
  }

  onChange1 = (e: EventRadioGroup) => {
    console.log('radio1 checked', e.target.value)
    this.setState({
      value1: e.target.value,
    })
  }

  onChange2 = (e: EventRadioGroup) => {
    console.log('radio2 checked', e.target.value)
    this.setState({
      value2: e.target.value,
    })
  }

  onChange3 = (e: EventRadioGroup) => {
    console.log('radio3 checked', e.target.value)
    this.setState({
      value3: e.target.value,
    })
  }

  render() {
    const { value1, value2, value3 } = this.state
    return (
      <>
        <List renderHeader="PlainOptions">
          <Radio.Group
            options={plainOptions}
            onChange={this.onChange1}
            value={value1}
          />
        </List>
        <List renderHeader="Options">
          <Radio.Group
            options={options}
            onChange={this.onChange2}
            value={value2}
          />
        </List>
        <List renderHeader="OptionsWithDisabled">
          <Radio.Group
            options={optionsWithDisabled}
            onChange={this.onChange3}
            value={value3}
          />
        </List>
      </>
    )
  }
}
