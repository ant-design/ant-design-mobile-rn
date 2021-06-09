/* tslint:disable:no-console */
import React from 'react'
import { Text, View } from 'react-native'
import { DatePickerView } from '../../'

export default class DatePickerViewExample extends React.Component {
  state = {
    value: undefined,
    value12hours: undefined,
  }
  onChange = (value: any) => {
    console.log(value)
    this.setState({ value })
  }
  onValueChange = (...args: any[]) => {
    console.log(args)
  }
  render() {
    return (
      <View>
        <Text style={{ margin: 16 }}>use12Hours</Text>
        <DatePickerView
          value={this.state.value12hours}
          onChange={(v) => this.setState({ value12hours: v })}
          use12Hours
        />
        <Text style={{ margin: 16 }}>Start DateTime</Text>
        <DatePickerView
          value={this.state.value}
          onChange={this.onChange}
          onValueChange={this.onValueChange}
        />
        <Text style={{ margin: 16 }}>End DateTime</Text>
        <DatePickerView
          value={this.state.value}
          onChange={this.onChange}
          onValueChange={this.onValueChange}
        />
      </View>
    )
  }
}
