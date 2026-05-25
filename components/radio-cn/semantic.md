## Radio

### Usage Example

```jsx
import { Button, Flex, List, Radio, WingBlank } from '@ant-design/react-native'
import React from 'react'
import { ScrollView } from 'react-native'
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
```

### styles

```tsx
import { StyleSheet, TextStyle } from 'react-native'
import { Theme } from '../../style'

export interface RadioItemStyle {
  radioItemContent: TextStyle
  radioItemContentDisable: TextStyle
}

// only for Checkbox themeStyles func
export default (theme: Theme) =>
  StyleSheet.create({
    checkbox_wave: { borderRadius: 999 },
    checkbox: { borderRadius: 999 },
    checkbox_inner: { width: 0, height: 0 },
    checkbox_inner_before: {
      width: 8,
      height: 8,
      borderRadius: 999,
      backgroundColor: theme.brand_primary,
      borderWidth: 0,
    },
    checkbox_inner_before_disabled: {
      backgroundColor: '#0003',
    },
    radioItemContent: {
      color: theme.color_text_base,
      marginRight: theme.h_spacing_md,
      marginLeft: theme.h_spacing_md,
    },
    radioItemContentDisable: {
      color: theme.color_text_disabled,
    },
  })
```

### Abstract DOM Structure

```html
<!-- List.Item 列表项容器，承载单个 RadioItem -->
<!-- 
  对应 styles.radioItemContent：文本内容样式，字体颜色、大小等
  对应 styles.radioItemContentDisable：禁用时文本样式
  对应 style 基础属性：外层容器样式透传（如 margin/padding/background 等）
-->
<List.Item
  style={...}  <!-- style 基础属性透传 -->
  disabled={false}
  accessibilityRole="radio"
  accessibilityState={{ checked: false, disabled: false }}
  onPress={() => {}}
  thumb={/* 左侧当 left 为 true 时的 Radio 组件 */}
  extra={/* 右侧当 right 为 true 时的 Radio 组件 */}
>
  <!-- 文本内容，最多一行，显示 children -->
  <Text
    style={{
      radioItemContent,          /* 一般文本样式 */
      radioItemContentDisable,   /* 禁用时文本样式 */
    }}
    numberOfLines={1}
  />
</List.Item>
```
