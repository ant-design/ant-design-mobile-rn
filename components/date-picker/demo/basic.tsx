import { DatePicker, List, Provider } from '@ant-design/react-native'
import React from 'react'

export default class PopupExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      value: undefined,
    }
  }

  onChange = (value: any) => {
    this.setState({ value })
  }

  render() {
    return (
      <Provider>
        <List>
          <DatePicker
            value={this.state.value}
            precision="day"
            minDate={new Date(2015, 7, 6)}
            maxDate={new Date(2026, 11, 3)}
            onChange={this.onChange}
            format="YYYY-MM-DD">
            <List.Item arrow="horizontal">Select Date</List.Item>
          </DatePicker>
        </List>
      </Provider>
    )
  }
}
