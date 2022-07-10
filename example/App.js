import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import React from 'react'
import App from '../rn-kitchen-sink/App'
export default class extends React.Component {
  state = {
    isReady: false,
  }

  async componentDidMount() {
    await Font.loadAsync(
      'antoutline',
      require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
    )

    await Font.loadAsync(
      'antfill',
      require('@ant-design/icons-react-native/fonts/antfill.ttf'),
    )
    this.setState({ isReady: true })
  }
  render() {
    const { isReady } = this.state
    if (!isReady) {
      return <AppLoading />
    }
    return <App />
  }
}
