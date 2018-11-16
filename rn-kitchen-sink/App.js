import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import React from 'react';
// import Home from './components/Home';
import RnIndex from './components/RnIndex';
import WebIndex from './components/WebIndex';
import { OTHERS, UIBARS, UICONTROLS, UIVIEWS } from './demoList';
import Provider from '../components/provider';

const getOptions = title => ({
  title,
  headerStyle: {
    backgroundColor: 'black',
  },
  headerTintColor: 'white',
});

const scenes = {
  // Home: {
  //   screen: Home,
  //   navigationOptions: getOptions('Ant Design Mobile'),
  // },
  native: {
    screen: RnIndex,
    navigationOptions: getOptions('Antm React Native'),
  },
  web: {
    screen: WebIndex,
    navigationOptions: getOptions('Antm Web Component'),
  },
};

[...UIVIEWS, ...UICONTROLS, ...OTHERS, ...UIBARS].map((component) => {
  const Module = component.module.default;
  scenes[component.title] = {
    screen: Module,
    navigationOptions: getOptions(component.title),
  };
});

const RootNavigator = createStackNavigator(scenes);

const App = () => (<Provider>
  <RootNavigator />
</Provider>);


AppRegistry.registerComponent('kitchen-sink', () => App);

export default App;
