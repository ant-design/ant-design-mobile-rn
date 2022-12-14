---
order: 0
title: Ant Design Mobile RN of React
---

`@ant-design/react-native` is the React implementation of the [Ant Design](http://ant.design)'s mobile specification, serving the ant and koubei wireless service.

<div class="pic-plus">
  <img width="160" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg">
  <span>+</span>
  <img width="160" src="https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg">
</div>

<style>
.pic-plus > * {
  display: inline-block;
  vertical-align: middle;
}
.pic-plus {
  margin: 40px 0;
}
.pic-plus span {
  font-size: 30px;
  color: #aaa;
  margin: 0 40px;
}
</style>

## Features and Advantages

- The UI is fully Configurable and Scalable, easily adapt to all kinds of product style.
- Support Web / iOS / Android platform (Based on React Native), has a wealth of components, can fully cover all kinds of scenes. (antd-mobile)
- Provide "Components are loaded on demand" / "Web page HD display" / "SVG Icon" optimization features, integrated development.
- Use TypeScript to develop, provide type definition files, support type and attribute smart tips for easy business development.
- Fully compatible with react / preact.

## Applicable Scenes

- Medium-sized and large-scale applications.
- Multi-terminal applications based on react / preact / react-native.
- Custom UI-style applications.

## Getting Started

> Before delving into Ant Design React, a good knowledge of [React](http://facebook.github.io/react/) and [ES2015](http://babeljs.io/docs/learn-es2015/) is needed.
>
> Make sure that you had installed [Node.js](https://nodejs.org/en/)(> v4.x) correctly.

### 1. Create a New Project

Can be an existing project, or a newly created empty project with create-react-native-app, you can also copy and modify from the official example [scaffolding](https://github.com/ant-design/antd-mobile-samples/tree/master/rn-web).

> More official [examples](https://github.com/ant-design/antd-mobile-samples).
> Also, you can use any [scaffold](https://github.com/enaqx/awesome-react#boilerplates) available in React ecosystem.

The complete procedure please check the document here: [antd-mobile-sample/create-react-native-app](https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-native-app)

### 2. Installation

```bash
$ npm install @ant-design/react-native --save
```

or

```bash
$ yarn add @ant-design/react-native
```

### Link icon fonts


```bash
$ npm install @ant-design/icons-react-native --save
```

or

```bash
$ yarn add @ant-design/icons-react-native
```

```bash
$ npx react-native link @ant-design/icons-react-native
```

> If you are using expo please make sure fonts has been loaded

```jsx
import { AppLoading, Font } from 'expo';
...
...
class App extends React.Component {
  state = {
    theme: null,
    currentTheme: null,
    isReady: false,
  };
  changeTheme = (theme, currentTheme) => {
    this.setState({ theme, currentTheme });
  };
  async componentDidMount() {
    await Font.loadAsync(
      'antoutline',
      // eslint-disable-next-line
      require('@ant-design/icons-react-native/fonts/antoutline.ttf')
    );

    await Font.loadAsync(
      'antfill',
      // eslint-disable-next-line
      require('@ant-design/icons-react-native/fonts/antfill.ttf')
    );
    // eslint-disable-next-line
    this.setState({ isReady: true });
  }
  render() {
    const { theme, currentTheme, isReady } = this.state;
    if (!isReady) {
      return <AppLoading />;
    }
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
This is not the way you would write it if you were using expo sdk32 or above
```jsx
import { Font } from 'expo';
```
Instead, use a separate name
```jsx
import * as Font from 'expo-font';
```

### 3. Usage

Example of usage:

```jsx
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Button from '@ant-design/react-native/lib/button';

class HelloWorldApp extends Component {
  render() {
    return <Button>Start</Button>;
  }
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
```

**If you need to use `Modal` and `Toast` you also need to add `Provider` to the app entry point**

```jsx
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Button, Provider, Toast } from '@ant-design/react-native';

class HelloWorldApp extends Component {
  render() {
    return (
      <Provider>
        <Button onPress={() => Toast.info('This is a toast tips')}>
          Start
        </Button>
      </Provider>
    );
  }
}
```

##### Use modularized @ant-design/react-native

The following two ways used to load the **only components you used**, select one of the ways you like.

- Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)

  ```js
  // .babelrc or babel-loader option
  {
    "plugins": [
      ["import", { libraryName: "@ant-design/react-native" }] // The difference with the Web platform is that you do not need to set the style
    ]
  }
  ```

  Then just change the way of import modules from @ant-design/react-native.

  ```jsx
  import { Button } from '@ant-design/react-native';
  ```

  > Note: Some people reflected that it would be [unable to resolve module `react-dom`](https://github.com/ant-design/ant-design-mobile/issues/2054) in a project created with `react-native init`. If you encounter the same problem, you might try to install [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver).

- Manually import

  ```jsx
  import Button from '@ant-design/react-native/lib/button';
  ```

##### More enhanced (optional):

> [Custom theme and single component style](https://github.com/ant-design/antd-mobile-samples/tree/master/rn-custom-ui#antd-mobile-with-rn-custom-ui)
> Like [#1853](https://github.com/ant-design/ant-design-mobile/issues/1853)

## Version

- Stable: [![npm package](http://img.shields.io/npm/v/@ant-design/react-native.svg?style=flat-square)](http://npmjs.com/package/@ant-design/react-native)
- Next: [![npm package](https://img.shields.io/npm/v/@ant-design/react-native/next.svg)](http://npmjs.com/package/@ant-design/react-native)

## Links

- [Home Page](https://rn.mobile.ant.design/)
- [Developer Instruction](http://github.com/ant-design/ant-design-mobile-rn/blob/master/development.en-US.md)
- [React components](http://github.com/react-component)

## Contributing

Please read our [CONTRIBUTING.md](https://github.com/ant-design/ant-design-mobile-rn/blob/master/.github/CONTRIBUTING.md) first.

If you'd like to help us improve @ant-design/react-native, just create a [Pull Request](https://github.com/ant-design/ant-design-mobile-rn/pulls). Feel free to report bugs and issues [here](https://github.com/ant-design/ant-design-mobile-rn/issues/new).

> If you're new to posting issues, we ask that you read [_How To Ask Questions The Smart Way_](http://www.catb.org/~esr/faqs/smart-questions.html) and [How to Ask a Question in Open Source Community](https://github.com/seajs/seajs/issues/545) and [How to Report Bugs Effectively](http://www.chiark.greenend.org.uk/~sgtatham/bugs.html) prior to posting. Well written bug reports help us help you!

## Need Help?

For questions on how to use antd, please post questions to [stackoverflow](http://stackoverflow.com/questions/tagged/antd) using the `antd`/`antd-mobile-rn` tag. If you're not finding what you need on stackoverflow, you can find us on [gitter](https://gitter.im/ant-design/ant-design-english?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) as well.

As always, we encourage experienced users to help those who are not familiar with `antd`!

1. [Stack Overflow](http://stackoverflow.com/questions/tagged/antd)
2. [Segment Fault](https://segmentfault.com/t/antd)
3. [![Join the chat at https://gitter.im/ant-design/ant-design](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ant-design/ant-design?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
