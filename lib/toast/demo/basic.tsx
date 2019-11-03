/* tslint:disable:no-console */
import React from 'react';
import { DeviceEventEmitter } from 'react-native';
import { Button, Portal, Toast, WhiteSpace, WingBlank } from '../../';

function showToast() {
  // multiple toast
  Toast.info('This is a toast tips 1 !!!', 4);
  Toast.info('This is a toast tips 2 !!!', 3);
  Toast.info('This is a toast tips 3 !!!', 1);
}

function successToast() {
  Toast.success('Load success !!!', 1);
}

function showToastNoMask() {
  Toast.info('Toast without mask !!!', 1, undefined, false);
}

function failToast() {
  Toast.fail('Load failed !!!');
}

function offline() {
  Toast.offline('Network connection failed !!!');
}

function loadingToast() {
  Toast.loading('Loading...', 1, () => {
    console.log('Load complete !!!');
  });
}

export default class ToastExample extends React.Component<any, any> {
  timer: any;

  componentWillUnmount() {
    (DeviceEventEmitter as any).removeAllListeners('navigatorBack');
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  alwaysShowToast = () => {
    const key = Toast.info('A toast width duration = 0 !!!', 0);
    this.timer = setTimeout(() => {
      Portal.remove(key);
    }, 5000);
  };

  render() {
    return (
      <WingBlank style={{ marginTop: 80 }}>
        <WhiteSpace />
        <Button onPress={showToastNoMask}>Without mask</Button>
        <WhiteSpace />
        <Button onPress={showToast}>Text toast</Button>
        <WhiteSpace />
        <Button onPress={successToast}>Success toast</Button>
        <WhiteSpace />
        <Button onPress={failToast}>Failed toast</Button>
        <WhiteSpace />
        <Button onPress={offline}>Network failure toast</Button>
        <WhiteSpace />
        <Button onPress={loadingToast}>Loading toast</Button>
        <WhiteSpace />
        <Button onPress={this.alwaysShowToast}>Toast width duration = 0</Button>
        <WhiteSpace />
      </WingBlank>
    );
  }
}
