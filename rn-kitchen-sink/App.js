import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { AppRegistry } from 'react-native'
import 'react-native-gesture-handler'
import Provider from '../components/provider'
import RnIndex from './components/index'
import Theme from './components/Theme'
import { OTHERS, UIBARS, UICONTROLS, UIVIEWS } from './demoList'

const getOptions = (title) => ({
  title,
  headerStyle: {
    backgroundColor: 'black',
  },
  headerTintColor: 'white',
})

const scenes = {}

;[...UIVIEWS, ...UICONTROLS, ...OTHERS, ...UIBARS].map((component) => {
  const Module = component.module.default
  scenes[component.title] = {
    screen: Module,
    navigationOptions: getOptions(component.title),
  }
})

const Stack = createStackNavigator()

class App extends React.Component {
  state = {
    theme: null,
    currentTheme: null,
  }

  changeTheme = (theme, currentTheme) => {
    this.setState({ theme, currentTheme })
  }

  render() {
    const { theme, currentTheme } = this.state
    return (
      <Provider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="native">
            <Stack.Screen
              name="native"
              component={RnIndex}
              options={{
                ...getOptions('Ant Design'),
                headerLeft: (props) => (
                  <Theme
                    {...props}
                    changeTheme={this.changeTheme}
                    currentTheme={currentTheme}
                  />
                ),
              }}
            />
            {Object.keys(scenes).map((key) => (
              <Stack.Screen
                name={key}
                key={key}
                component={scenes[key].screen}
                options={scenes[key].navigationOptions}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('KitchenSink', () => App)

export default App

// global catch error to avoid crash
global.ErrorUtils?.setGlobalHandler((e, isFatal) => {
  if (isFatal) {
    // eslint-disable-next-line no-alert
    alert(`${e.name}: ${e.message}`)
  }
})
