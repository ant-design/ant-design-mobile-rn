import { createStackNavigator } from 'react-navigation';
import { UIVIEWS, UICONTROLS, OTHERS, UIBARS } from './demoList';
import Home from './components/RnIndex'
const getOptions = title => ({
  title,
  headerStyle: {
    backgroundColor: 'black',
  },
  headerTintColor: 'white',
});

const scenes = {
  Home: {
    screen: Home,
    navigationOptions: getOptions('Ant Design Mobile'),
  },
};

[...UIVIEWS, ...UICONTROLS, ...OTHERS, ...UIBARS].map((component) => {
  const Module = component.module.default;
  scenes[component.title] = {
    screen: Module,
    navigationOptions: getOptions(component.title),
  };
});

const App = createStackNavigator(scenes);

export default App;
