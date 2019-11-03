---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

[Demo Source Code](https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/toast/demo/basic.tsx)

```jsx
/* tslint:disable:no-console */
import React from 'react';
import { DeviceEventEmitter } from 'react-native';
import {
  Provider,
  Button,
  Toast,
  WhiteSpace,
  WingBlank,
  portal,
} from '@ant-design/react-native';
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
export class ToastExample extends React.Component {
  constructor() {
    super(...arguments);
    this.alwaysShowToast = () => {
      const key = Toast.info('A toast width duration = 0 !!!', 0);
      this.timer = setTimeout(() => {
        portal.remove(key);
      }, 5000);
    };
  }
  componentWillUnmount() {
    DeviceEventEmitter.removeAllListeners('navigatorBack');
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
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
export default () => (
  <Provider>
    <ToastExample />
  </Provider>
);
```
