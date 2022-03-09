import React from 'react'
import { ScrollView } from 'react-native'
import { Button, Checkbox, Flex, List, WingBlank } from '../../'
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
