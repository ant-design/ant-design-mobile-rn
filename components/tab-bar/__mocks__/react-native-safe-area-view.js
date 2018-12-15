import React from 'react';
import { View } from 'react-native';

class SafeAreaView extends React.Component {
  render() {
    return <View {...this.props}/>;
  }
}


export default SafeAreaView;
