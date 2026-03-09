## Checkbox

### Usage Example

```jsx
import { Button, Checkbox, Flex, List, WingBlank } from '@ant-design/react-native'
import React from 'react'
import { ScrollView } from 'react-native'
const AgreeItem = Checkbox.AgreeItem
const CheckboxItem = Checkbox.CheckboxItem

export default class BasicCheckboxExample extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context)
    this.state = {
      checked: true,
      disabled: false,

      checkBox1: true,
      agreeItem1: true,
      checkboxItem1: true,
    }
  }

  onChange = (e: { target: { checked: boolean } }) => {
    console.log(`checked = ${e.target.checked}`)
  }

  toggleChecked = () => {
    this.setState({ checked: !this.state.checked })
  }

  toggleDisable = () => {
    this.setState({ disabled: !this.state.disabled })
  }
  onChange2 = (e: { target: { checked: boolean } }) => {
    console.log('checked = ', e.target.checked)
    this.setState({
      checked: e.target.checked,
    })
  }

  render() {
    const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${
      this.state.disabled ? 'Disabled' : 'Enabled'
    }`
    return (
      <ScrollView>
        <List renderHeader="基本用法">
          <List.Item
            thumb={<Checkbox onChange={this.onChange}>Checkbox</Checkbox>}
          />
        </List>
        <List renderHeader="不可用">
          <List.Item thumb={<Checkbox defaultChecked={false} disabled />} />
          <List.Item thumb={<Checkbox defaultChecked disabled />} />
        </List>
        <List
          renderHeader="受控的Checkbox"
          renderFooter={
            <Flex>
              <Flex.Item style={{ margin: 10 }}>
                <Button
                  type="primary"
                  size="small"
                  onPress={this.toggleChecked}>
                  {!this.state.checked ? 'Check' : 'Uncheck'}
                </Button>
              </Flex.Item>
              <Flex.Item style={{ margin: 10 }}>
                <Button
                  type="primary"
                  size="small"
                  onPress={this.toggleDisable}>
                  {!this.state.disabled ? 'Disable' : 'Enable'}
                </Button>
              </Flex.Item>
            </Flex>
          }>
          <List.Item
            thumb={
              <Checkbox
                checked={this.state.checked}
                disabled={this.state.disabled}
                onChange={this.onChange2}>
                {label}
              </Checkbox>
            }
          />
        </List>
        <List renderHeader="AgreeItem">
          <AgreeItem>
            Agree agreement agreement agreement agreement agreement agreement
            agreement
          </AgreeItem>
        </List>
        <List renderHeader="CheckboxItem">
          <CheckboxItem
            checked={this.state.checkboxItem1}
            onChange={(event) => {
              this.setState({ checkboxItem1: event.target.checked })
            }}>
            Option 1
          </CheckboxItem>
          <CheckboxItem>Option 2</CheckboxItem>
          <CheckboxItem disabled>Option 3</CheckboxItem>
          <CheckboxItem disabled checked right>
            More...
          </CheckboxItem>
        </List>
        <List
          renderHeader={
            '全选\n在实现全选效果时，你可能会用到 indeterminate 属性。'
          }>
          <CheckboxGroupExample />
        </List>
      </ScrollView>
    )
  }
}

const plainOptions = ['Apple', 'Pear', 'Orange']
const defaultCheckedList = ['Apple', 'Orange']

const CheckboxGroupExample = () => {
  const [checkedList, setCheckedList] = React.useState(
    new Set(defaultCheckedList),
  )
  const [indeterminate, setIndeterminate] = React.useState(true)
  const [checkAll, setCheckAll] = React.useState(false)

  const onChange = (value: any, e: { target: { checked: boolean } }) => {
    if (e.target.checked) {
      checkedList.add(value)
    } else {
      checkedList.delete(value)
    }

    setCheckedList(new Set(checkedList))
    setIndeterminate(
      !!checkedList.size && checkedList.size < plainOptions.length,
    )
    setCheckAll(checkedList.size === plainOptions.length)
  }

  const onCheckAllChange = (e: { target: { checked: boolean } }) => {
    setCheckedList(e.target.checked ? new Set(plainOptions) : new Set())
    setIndeterminate(false)
    setCheckAll(e.target.checked)
  }

  return (
    <>
      <CheckboxItem
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}>
        Check all
      </CheckboxItem>
      <WingBlank>
        {plainOptions.map((a) => (
          <CheckboxItem
            key={a}
            onChange={onChange.bind(this, a)}
            checked={checkedList.has(a)}>
            {a}
          </CheckboxItem>
        ))}
      </WingBlank>
    </>
  )
}
```

### styles

```tsx
import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface CheckboxStyle {
  checkbox_wrapper: ViewStyle
  checkbox_wave: ViewStyle
  checkbox: ViewStyle
  checkbox_checked: ViewStyle
  checkbox_disabled: ViewStyle
  checkbox_inner: ViewStyle
  checkbox_inner_disabled: ViewStyle
  checkbox_inner_before: ViewStyle
  checkbox_inner_before_disabled: ViewStyle
  checkbox_label: ViewStyle
  checkbox_label_disabled: ViewStyle
  checkbox_inner_indeterminate: ViewStyle
  checkbox_inner_before_indeterminate: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<CheckboxStyle>({
    checkbox_wrapper: {
      margin: 0,
      padding: 0,
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox_wave: {
      width: 20,
      height: 20,
      padding: 2,
      overflow: 'hidden',
    },
    checkbox: {
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: 2,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.checkbox_border,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkbox_checked: {
      borderColor: theme.brand_primary,
    },
    checkbox_disabled: {
      borderColor: theme.checkbox_border_disabled,
      backgroundColor: theme.checkbox_fill_disabled,
    },

    // ==========checkbox Inner PrefixCls============
    checkbox_inner: {
      //box-sizing not support in RN
      width: '103%',
      height: '103%',
      backgroundColor: theme.brand_primary,
    },
    checkbox_inner_indeterminate: {
      backgroundColor: 'transparent',
    },
    checkbox_inner_disabled: {
      backgroundColor: theme.checkbox_fill_disabled,
    },

    // ==========inner::after============
    checkbox_inner_before: {
      transform: [{ rotate: '45deg' }],
      position: 'absolute',
      width: 6,
      height: 9,
      bottom: '20%',
      borderWidth: 2,
      borderColor: '#ffffff',
      borderTopWidth: 0,
      borderLeftWidth: 0,
    },
    // 半选状态样式
    checkbox_inner_before_indeterminate: {
      position: 'absolute',
      width: 8,
      height: 8,
      backgroundColor: theme.brand_primary,
    },
    checkbox_inner_before_disabled: {
      borderColor: theme.checkbox_border_disabled,
    },

    // ==========label============
    checkbox_label: {
      backgroundColor: 'transparent',
      marginRight: theme.h_spacing_md,
      marginLeft: theme.h_spacing_md,
      color: theme.color_text_base,
    },
    checkbox_label_disabled: {
      color: theme.color_text_disabled,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 最外层触摸区域容器，用户交互区域，对应 styles.checkbox_wrapper：容器总体样式，支持 style 基础属性透传 -->
<Pressable style={styles={{ checkbox_wrapper } } } style={...}>

  <!-- 波纹效果容器区域，对应 styles.checkbox_wave：波纹动画外层 -->
  <View styles={{ checkbox_wave }}>

    <!-- 复选框主节点，根据选中及禁用状态切换边框和背景色，对应 styles.checkbox, checkbox_checked, checkbox_disabled（动态） -->
    <View styles={{ checkbox, checkbox_checked, checkbox_disabled }}>

      <!-- 复选框内部标记区域，承载勾选或 indeterminate 标记，对应 styles.checkbox_inner, checkbox_inner_disabled, checkbox_inner_indeterminate（动态） -->
      <Animated.View styles={{ checkbox_inner, checkbox_inner_disabled, checkbox_inner_indeterminate }} />

      <!-- 复选框内部前置图形，承载勾选动画或 indeterminate 线条，对应 styles.checkbox_inner_before, checkbox_inner_before_disabled, checkbox_inner_before_indeterminate（动态） -->
      <Animated.View styles={{ checkbox_inner_before, checkbox_inner_before_disabled, checkbox_inner_before_indeterminate }} />

    </View>
  </View>

  <!-- 复选框文本标签区域，对应 styles.checkbox_label, checkbox_label_disabled（动态） -->
  <AntmView styles={{ checkbox_label, checkbox_label_disabled }} />

</Pressable>
```
