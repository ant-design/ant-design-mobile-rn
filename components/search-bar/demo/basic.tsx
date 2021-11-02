import React from 'react'
import { Alert, View } from 'react-native'
import { SearchBar } from '../../'

export default class SearchBarDemo extends React.Component<any, any> {
  state = {
    value: '美食',
  }

  onChange = (value: any) => {
    this.setState({ value })
  }

  clear = () => {
    this.setState({ value: '' })
  }

  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <SearchBar defaultValue="初始值" placeholder="搜索" />
        <SearchBar
          value={this.state.value}
          placeholder="搜索"
          onSubmit={(value: any) => Alert.alert(value)}
          onCancel={this.clear}
          onChange={this.onChange}
          showCancelButton
        />
      </View>
    )
  }
}
