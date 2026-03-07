const styles = {
  itemActiveStyle: {
    color: '#108ee9',
    fontWeight: 'bold',
  },
  maskMiddle: {
    backgroundColor: 'rgba(51,51,51,0.1)',
    borderRadius: 10,
  },
}
import { List, PickerView } from '@ant-design/react-native'
import React from 'react'
import { ScrollView } from 'react-native'

const basicColumns = [
  [
    { label: '2021年', value: '2021' },
    { label: '2022年', value: '2022' },
    { label: '2023年', value: '2023' },
    { label: '2024年', value: '2024' },
    { label: '2025年', value: '2025' },
  ],
  [
    { label: '1月', value: '1' },
    { label: '2月', value: '2' },
    { label: '3月', value: '3' },
    { label: '4月', value: '4' },
    { label: '5月', value: '5' },
  ],
  [
    { label: '1日', value: '1' },
    { label: '2日', value: '2' },
    { label: '3日', value: '3' },
    { label: '4日', value: '4' },
    { label: '5日', value: '5' },
  ],
]

export default class PickerViewExample extends React.Component {
  state = {
    value: ['2023', '3', '3'],
  }
  onChange = (value: any) => {
    this.setState({
      value,
    })
  }
  render() {
    return (
      <ScrollView nestedScrollEnabled>
        <List renderHeader={'选择日期'}>
          <PickerView
            styles={styles}
            onChange={this.onChange}
            value={this.state.value}
            data={basicColumns}
            cascade={false}
          />
        </List>
      </ScrollView>
    )
  }
}
