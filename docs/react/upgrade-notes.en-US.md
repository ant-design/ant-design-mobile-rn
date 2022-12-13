---
order: 4
title: Upgrade
---

Here list some of main incompatible changes and recommended changes in the upgrade. See [Changelog](/changelog) for all changes.

### 5.0.3

> Installing peer dependencies

```bash
npm install @react-native-camera-roll/camera-roll @react-native-picker/picker @react-native-community/segmented-control @react-native-community/slider react-native-gesture-handler
```

or

```bash
yarn add @react-native-camera-roll/camera-roll @react-native-picker/picker @react-native-community/segmented-control @react-native-community/slider react-native-gesture-handler
```

### 4.2.0

> Installing peer dependencies

```bash
npm install @react-native-community/cameraroll @react-native-picker/picker @react-native-community/segmented-control @react-native-community/slider react-native-pager-view react-native-gesture-handler
```

or

```bash
yarn add @react-native-community/cameraroll @react-native-picker/picker @react-native-community/segmented-control @react-native-community/slider react-native-pager-view react-native-gesture-handler
```

### 4.1.0

> Installing peer dependencies

```bash
npm install @react-native-community/cameraroll @react-native-picker/picker @react-native-community/segmented-control @react-native-community/slider react-native-pager-view
```

or

```bash
yarn add @react-native-community/cameraroll @react-native-picker/picker @react-native-community/segmented-control @react-native-community/slider react-native-pager-view
```

> You need go to ios folder and run `pod install` (auto linking)，Android will handle it by itself.

### Link icon fonts

```bash
npx react-native link
```

### 3.0.0

**3.0.0** needs to install `react-native@0.57.x`

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
- Change `Grid` property `onClick` to `onPress`
- Link Icon Fonts

  ```sh
  react-native link @ant-design/icons-react-native
  ```

If you are at react-native@0.60.x after you install the package it will link automatically.

or if you want link it manually.

```sh
react-native link @ant-design/react-native
```

### 2.1.11 and before

[antd-mobile upgrade-notes](https://github.com/ant-design/ant-design-mobile/blob/master/docs/react/upgrade-notes.en-US.md#1x--20)
