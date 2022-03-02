/* tslint:disable:no-console */
import React from 'react'
import { DeviceEventEmitter, Text } from 'react-native'
import { Button, List, Switch, Toast, WhiteSpace, WingBlank } from '../../'

function showToastStack() {
  // multiple toast
  Toast.fail({
    content: 'This is a toast tips 1 !!!',
    duration: 3,
    stackable: true,
  })
  Toast.success({
    content: 'This is a toast tips 2 !!!',
    duration: 2,
    stackable: true,
  })
  Toast.info({
    content: 'This is a toast tips 3 !!!',
    duration: 1,
    stackable: true,
  })
}

function infoToast() {
  Toast.info({
    content: 'Text toast',
  })
}

function successToast() {
  Toast.success('Load success !!!', 1)
}

function showToastNoMask() {
  Toast.info({
    content: 'Toast without mask',
    mask: false,
  })
}

function failToast() {
  Toast.fail('Load failed !!!')
}

function offline() {
  Toast.offline('Network connection failed !!!')
}

function loadingToast() {
  Toast.loading({
    content: 'Loading...',
    duration: 1,
    onClose: () => console.log('Load complete !!!'),
  })
}

function alwaysShowToastInfo() {
  const key = Toast.info('Toast with duration = 0, removed by timer', 0, () => {
    Toast.info('Toast.info onClose callback called!')
  })
  setTimeout(() => {
    Toast.remove(key)
  }, 3000)
}

function alwaysShowToastLoading() {
  Toast.loading('Loading...', 0, () => {
    Toast.info('Toast.loading onClose callback called!')
  })
  setTimeout(() => {
    Toast.removeAll()
  }, 3000)
}

function showCustomViewToast() {
  Toast.info(
    { content: <Text style={{ color: 'red' }}>Toast Custom View</Text> },
    2,
  )
  setTimeout(() => {
    Toast.success(
      { content: <Text style={{ color: 'red' }}>Toast Custom View</Text> },
      2,
    )
  }, 2500)
}

export default class ToastExample extends React.Component<any, any> {
  timer: any

  state = {
    enableMask: Toast.getConfig().mask,
    enableStack: Toast.getConfig().stackable,
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeAllListeners('navigatorBack')
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
  }

  render() {
    return (
      <WingBlank style={{ marginTop: 20 }}>
        <List>
          <List.Item
            extra={
              <Switch
                checked={this.state.enableMask}
                onChange={(mask) => {
                  Toast.config({ mask })
                  this.setState({ enableMask: Toast.getConfig().mask })
                }}
              />
            }>
            Enable Mask
          </List.Item>
          <List.Item
            extra={
              <Switch
                checked={this.state.enableStack}
                onChange={(stackable) => {
                  Toast.config({ stackable })
                  this.setState({ enableStack: Toast.getConfig().stackable })
                }}
              />
            }>
            Enable Stack
          </List.Item>
        </List>
        <WhiteSpace />
        <Button onPress={showToastNoMask}>Without mask</Button>
        <WhiteSpace />
        <Button onPress={showToastStack}>Stackable toast</Button>
        <WhiteSpace />
        <Button onPress={infoToast}>Text toast</Button>
        <WhiteSpace />
        <Button onPress={successToast}>Success toast</Button>
        <WhiteSpace />
        <Button onPress={failToast}>Failed toast</Button>
        <WhiteSpace />
        <Button onPress={offline}>Network failure toast</Button>
        <WhiteSpace />
        <Button onPress={loadingToast}>Loading toast</Button>
        <WhiteSpace />
        <Button onPress={alwaysShowToastInfo}>
          Toast.info with duration = 0
        </Button>
        <WhiteSpace />
        <Button onPress={alwaysShowToastLoading}>
          Toast.loading with duration = 0
        </Button>
        <WhiteSpace />
        <Button onPress={showCustomViewToast}>Toast with custom view</Button>
      </WingBlank>
    )
  }
}
