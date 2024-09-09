English | [简体中文](./README.zh-CN.md)

<p align="center">
  <a href="http://rn.mobile.ant.design">
    <img width="320" src="https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png">
  </a>
</p>

# Ant Design Mobile RN

[![](https://img.shields.io/travis/ant-design/ant-design-mobile-rn.svg?style=flat-square)](https://travis-ci.org/ant-design/ant-design-mobile-rn)
[![Codecov](https://img.shields.io/codecov/c/github/ant-design/ant-design-mobile-rn.svg?style=flat-square)](https://codecov.io/gh/ant-design/ant-design-mobile-rn)
[![npm package](https://img.shields.io/npm/v/@ant-design/react-native.svg?style=flat-square)](https://www.npmjs.org/package/@ant-design/react-native)
[![NPM downloads](http://img.shields.io/npm/dm/@ant-design/react-native.svg?style=flat-square)](https://npmjs.org/package/@ant-design/react-native)
[![Dependency Status](https://david-dm.org/ant-design/ant-design-mobile-rn.svg?style=flat-square)](https://david-dm.org/ant-design/ant-design-mobile-rn)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/ant-design/ant-design-mobile-rn.svg)](http://isitmaintained.com/project/ant-design/ant-design-mobile-rn 'Percentage of issues still open')
[![Join the chat at https://gitter.im/ant-design/ant-design](https://img.shields.io/gitter/room/ant-design/ant-design.svg?style=flat-square)](https://gitter.im/ant-design/ant-design?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A configurable Mobile UI specification and React-based implementation.

> If you only care about the style you may give [[Tanjun]](https://github.com/bang88/Tanjun) a try. 

## Features

- Follow Ant Design Mobile UI specification.
- Configurable UI style for different products.
- Support web and native usages based on React Native.
- Develop in TypeScript.

## Expo

> HTML5 Preview: [ant-design-mobile-rn/index.html](https://1uokun.github.io/ant-design-mobile-rn/index.html)


|SDK 51|
|--|
| [<img width="250" alt="expo/ant-design-mobile-rn" src="https://qr.expo.dev/eas-update?slug=exp&projectId=7729a68b-f881-4294-89f5-5ae751bfb2b2&groupId=2e623b22-08d9-4ab2-92f2-017c7a92d5aa" />](https://expo.dev/preview/update?message=5.2.3&updateRuntimeVersion=5.2.3&createdAt=2024-09-09T09%3A01%3A36.394Z&slug=exp&projectId=7729a68b-f881-4294-89f5-5ae751bfb2b2&group=2e623b22-08d9-4ab2-92f2-017c7a92d5aa) |

Open the camera app on your device and scan the code above, <br>
need install expo app: https://expo.io/tools

<details><summary>Expo SDK(44, 47, 49, 50) history version</summary>

|Expo SDK 44|SDK 47 iOS|SDK 47 Android|SDK 49,50|
|--|--|--|--|
| [<img width="250" alt="expo/ant-design-mobile-rn" src="https://qr.expo.dev/expo-go?owner=1uokun&slug=ant-design-mobile-rn&releaseChannel=default&host=exp.host" />](https://expo.dev/@1uokun/ant-design-mobile-rn) | [<img width="250" alt="expo/ant-design-mobile-rn" src="https://qr.expo.dev/eas-update?updateId=38b3a547-ab2b-4066-95ed-400f1707dcc6&appScheme=exp&host=u.expo.dev" />](https://expo.dev/@1uokun/ant-design-mobile-rn) | [<img width="250" alt="expo/ant-design-mobile-rn" src="https://qr.expo.dev/eas-update?updateId=05f0e308-2dd5-4cb9-9e6b-1ae31561bfee&appScheme=exp&host=u.expo.dev" />](https://expo.dev/@1uokun/ant-design-mobile-rn) | [<img width="250" alt="expo/ant-design-mobile-rn" src="https://qr.expo.dev/eas-update?slug=exp&projectId=7729a68b-f881-4294-89f5-5ae751bfb2b2&groupId=bbf0a647-4ff2-46bd-9aad-dfd81bc6ba08" />](https://expo.dev/preview/update?message=5.2.2&updateRuntimeVersion=5.2.2&createdAt=2024-08-12T13%3A33%3A56.096Z&slug=exp&projectId=7729a68b-f881-4294-89f5-5ae751bfb2b2&group=bbf0a647-4ff2-46bd-9aad-dfd81bc6ba08) |
</details>


## Install & Usage

```bash
$ npm install @ant-design/react-native @ant-design/icons-react-native
```

### Installing peer dependencies

Next, install the required peer dependencies. You need to run different commands depending on whether your project is an Expo managed project or a bare React Native project.

 - If you have an Expo managed project, install the dependencies with `expo`:
   ```bash
   npx expo install react-native-gesture-handler react-native-reanimated
   ```

 - If you have a bare React Native project, install the dependencies with `npm`:
   ```bash
   npm install react-native-gesture-handler react-native-reanimated
   ```

 - For iOS with bare React Native project, make sure you have CocoaPods installed. Then install the pods to complete the installation:
   ```bash
   cd ios
   pod install
   cd ..
   ```

### Link icon fonts

Add assets to your `react-native.config.js` ( If not exist, please create in project’s root directory )
```js
module.exports = {
  assets: ['node_modules/@ant-design/icons-react-native/fonts'],
};
```
Run the [react-native-asset](https://github.com/unimonkiez/react-native-asset)'s command and linking + unlinking is automatic
```bash
npx react-native-asset
```

## Links

- [Home Page](http://rn.mobile.ant.design)
- [More Introduce >](docs/react/introduce.en-US.md)
- [Developer Instruction](development.en-US.md)

## Development

 - **Running On Expo**

> node >= 18

```bash
# go to expo example folder
cd example

# install dependencies
yarn

# start expo
yarn expo
```

 - **Running On Device**

```bash
# clone
git clone git@github.com:ant-design/ant-design-mobile-rn.git

# go to ant rn folder
cd ant-design-mobile-rn

# install dependencies
yarn

# start ios
cd rn-kitchen-sink/ios && pod install
yarn ios 

# start android
yarn android
```

## Contributing

We welcome all contributions, please read our [CONTRIBUTING.md](https://github.com/ant-design/ant-design-mobile-rn/blob/master/.github/CONTRIBUTING.md) first. You can submit any ideas as [pull requests](https://github.com/ant-design/ant-design-mobile-rn/pulls) or as a [GitHub issue](https://github.com/ant-design/ant-design-mobile-rn/issues). If you'd like to improve code, check out the [Development Instruction](https://github.com/ant-design/ant-design-mobile-rn/blob/master/development.en-US.md) and have a good time! :)

---

Thanks to all the contributors of @ant-design/react-native:

<a href="https://github.com/ant-design/ant-design-mobile-rn/graphs/contributors">
  <img src="https://opencollective.com/ant-design-mobile-rn/contributors.svg?width=960&button=false" alt="contributors" />
</a>