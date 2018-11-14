import React from 'react';
import  { PortalMethods } from './portal-host';

export type PortalConsumerProps = {
  manager: PortalMethods,
  children: React.ReactNode,
};

export default class PortalConsumer extends React.Component<PortalConsumerProps> {

  _key: any;
  componentDidMount() {
    if (!this.props.manager) {
      throw new Error(
        'Looks like you forgot to wrap your root component with `Provider` component from `react-native-paper`.\n\n' +
          "Please read our getting-started guide and make sure you've followed all the required steps.\n\n" +
          'https://callstack.github.io/react-native-paper/getting-started.html',
      );
    }

    this._key = this.props.manager.mount(this.props.children);
  }

  componentDidUpdate() {
    this.props.manager.update(this._key, this.props.children);
  }

  componentWillUnmount() {
    this.props.manager.unmount(this._key);
  }

  render() {
    return null;
  }
}
