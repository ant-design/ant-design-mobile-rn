import React from 'react'
import { ScrollView, Text } from 'react-native'
import { PickerView } from '../../'

const basicColumns = [
  [
    { label: '周一', value: 'Mon' },
    { label: '周二', value: 'Tues' },
    { label: '周三', value: 'Wed' },
    { label: '周四', value: 'Thur' },
    { label: '周五', value: 'Fri' },
  ],
  [
    { label: '上午', value: 'am' },
    { label: '下午', value: 'pm' },
  ],
]

export default class PickerViewExample extends React.Component {
  state = {
    value: undefined,
  }
  onChange = (value: any) => {
    this.setState({
      value,
    })
  }
  render() {
    return (
      <ScrollView
        nestedScrollEnabled //  Enables nested scrolling for Android API level 21+. Nested scrolling is supported by default on iOS.
      >
        <Text style={{ margin: 16 }}>基础用法</Text>
        <PickerView data={basicColumns} cascade={false} />

        <Text style={{ margin: 16 }}>自定义高度</Text>
        <PickerView
          data={basicColumns}
          cascade={false}
          style={{ height: 450 }}
          itemHeight={55}
          itemStyle={{
            padding: 0,
          }}
        />

        <Text style={{ margin: 16 }}>受控模式</Text>
        <PickerView
          onChange={this.onChange}
          value={this.state.value}
          data={basicColumns}
          cascade={false}
        />

        <Text style={{ margin: 16 }} />
      </ScrollView>
    )
  }
}
