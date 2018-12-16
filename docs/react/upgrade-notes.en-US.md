---
order: 4
title: Upgrade
---

Here list some of main incompatible changes and recommended changes in the upgrade. See [Changelog](/changelog) for all changes.

### 3.0.0

- Change import to `import { Button, ... } from '@ant-design/react-native`
- Change `LocaleProvider` to `Provider` and the Provider are required from now on.

- Provider

  ```jsx
  // dynamic theme example ./rn-kitchen-sink/app.js
  const RootNavigator = createStackNavigator(scenes);
  class App extends React.Component {
    state = {
      theme: null,
      currentTheme: null,
    };
    changeTheme = (theme, currentTheme) => {
      this.setState({ theme, currentTheme });
    };
    render() {
      const { theme, currentTheme } = this.state;
      return (
        <Provider theme={theme}>
          <RootNavigator
            screenProps={{ changeTheme: this.changeTheme, currentTheme }}
          />
        </Provider>
      );
    }
  }
  ```

- Style Customization
     - Configure the default global theme style via `Provider`
     - Override local component styles by using styles of the component, without importing all styles of the current component
     - There is no need to import a theme style file like 2.x. The current style file returns a function instead of an object.
- `Toast` has removed method `hide`
- Link Icon Fonts

  ```sh
  react-native link @ant-design/icons-react-native
  ```

### 2.1.11 and before

[antd-mobile upgrade-notes](https://github.com/ant-design/ant-design-mobile/blob/master/docs/react/upgrade-notes.en-US.md#1x--20)
