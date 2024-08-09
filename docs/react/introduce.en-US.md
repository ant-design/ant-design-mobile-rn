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

## Version

- Stable: [![npm package](http://img.shields.io/npm/v/@ant-design/react-native.svg?style=flat-square)](http://npmjs.com/package/@ant-design/react-native)
- Next: [![npm package](https://img.shields.io/npm/v/@ant-design/react-native/next.svg)](http://npmjs.com/package/@ant-design/react-native)

## Installation

```bash
$ npm install @ant-design/react-native @ant-design/icons-react-native
```

### Installing peer dependencies
We manage the following dependencies through `peerDependencies` to allow you to choose versions more flexibly and reduce repeated installation of dependencies:

 - If you have an Expo managed project, install the dependencies with `expo`:
   ```bash
   npx expo install react-native-gesture-handler react-native-reanimated
   ```

 - If you have a bare React Native project, install the dependencies with `npm`:
   ```bash
   npm install react-native-gesture-handler react-native-reanimated
   ```

### Link icon fonts

 - Add assets to your `react-native.config.js` ( If not exist, please create in project’s root directory ):

   ```js
   module.exports = {
     assets: ['node_modules/@ant-design/icons-react-native/fonts'],
   };
   ```

 - Run the [react-native-asset](https://github.com/unimonkiez/react-native-asset)'s command and linking + unlinking is automatic:

   ```bash
   npx react-native-asset
   ```

 - If you have an Expo managed project, skip the previous two steps and use [expo-font](https://docs.expo.dev/versions/latest/sdk/font/) to load the font directly:
   ```jsx
   import { useFonts } from 'expo-font';

   const [fontsLoaded] = useFonts({
    antoutline: require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
  })
   ```

## Usage

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

## Links

- [Home Page](https://rn.mobile.ant.design/)
- [Developer Instruction](http://github.com/ant-design/ant-design-mobile-rn/blob/master/development.en-US.md)

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
