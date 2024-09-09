[English](./README.md) | 简体中文

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

Ant Design 移动端设计规范。`@ant-design/react-native` 是 Ant Design 的移动规范的 React 实现，服务于蚂蚁及口碑无线业务。

## 特性

- 基于 Ant Design 移动设计规范。
- 规则化的视觉样式配置，适应各类产品风格。
- 基于 React Native 的多平台支持。
- 使用 TypeScript 开发，提供类型定义文件。

## Expo

> HTML5 预览: [ant-design-mobile-rn/index.html](https://1uokun.github.io/ant-design-mobile-rn/index.html)


|SDK 51|
|--|
| [<img width="250" alt="expo/ant-design-mobile-rn" src="https://qr.expo.dev/eas-update?slug=exp&projectId=7729a68b-f881-4294-89f5-5ae751bfb2b2&groupId=2e623b22-08d9-4ab2-92f2-017c7a92d5aa" />](https://expo.dev/preview/update?message=5.2.3&updateRuntimeVersion=5.2.3&createdAt=2024-09-09T09%3A01%3A36.394Z&slug=exp&projectId=7729a68b-f881-4294-89f5-5ae751bfb2b2&group=2e623b22-08d9-4ab2-92f2-017c7a92d5aa) |

提示：使用本地原相机扫瞄上面的二维码, 需要下载 Expo App: https://expo.io/tools

<details><summary>Expo SDK(44, 47, 49, 50) 历史版本</summary>

|Expo SDK 44|SDK 47 iOS|SDK 47 Android|SDK 49,50|
|--|--|--|--|
| [<img width="250" alt="expo/ant-design-mobile-rn" src="https://qr.expo.dev/expo-go?owner=1uokun&slug=ant-design-mobile-rn&releaseChannel=default&host=exp.host" />](https://expo.dev/@1uokun/ant-design-mobile-rn) | [<img width="250" alt="expo/ant-design-mobile-rn" src="https://qr.expo.dev/eas-update?updateId=38b3a547-ab2b-4066-95ed-400f1707dcc6&appScheme=exp&host=u.expo.dev" />](https://expo.dev/@1uokun/ant-design-mobile-rn) | [<img width="250" alt="expo/ant-design-mobile-rn" src="https://qr.expo.dev/eas-update?updateId=05f0e308-2dd5-4cb9-9e6b-1ae31561bfee&appScheme=exp&host=u.expo.dev" />](https://expo.dev/@1uokun/ant-design-mobile-rn) | [<img width="250" alt="expo/ant-design-mobile-rn" src="https://qr.expo.dev/eas-update?slug=exp&projectId=7729a68b-f881-4294-89f5-5ae751bfb2b2&groupId=bbf0a647-4ff2-46bd-9aad-dfd81bc6ba08" />](https://expo.dev/preview/update?message=5.2.2&updateRuntimeVersion=5.2.2&createdAt=2024-08-12T13%3A33%3A56.096Z&slug=exp&projectId=7729a68b-f881-4294-89f5-5ae751bfb2b2&group=bbf0a647-4ff2-46bd-9aad-dfd81bc6ba08) |
</details>

## 安装 & 使用

```bash
npm install @ant-design/react-native @ant-design/icons-react-native
```

### 安装peer依赖
接下来安装来自 `peerDependencies` 管理的依赖：

 - 如果使用Expo来构建项目的，请使用 `expo`（**推荐，这能安装到最合适的版本**）：
   ```bash
   npx expo install react-native-gesture-handler react-native-reanimated
   ```

 - 如果使用React Native CLI原生构建项目的，请使用 `npm` ：
   ```bash
   npm install react-native-gesture-handler react-native-reanimated
   ```
   
 - 对于 iOS 的 React Native CLI裸项目，请确保已安装 CocoaPods。然后执行 `pods` (auto linking)，
   <br/>Android 不需要手动处理：
   ```bash
   cd ios
   pod install
   cd ..
   ```

### 链接字体图标
将字体资源路径配置到根目录下的 `react-native.config.js` 文件中 ( 如果没有，请创建 )
```js
module.exports = {
  assets: ['node_modules/@ant-design/icons-react-native/fonts'],
};
```
然后执行 [react-native-asset](https://github.com/unimonkiez/react-native-asset) 的命令
```bash
npx react-native-asset
```

## 链接

- [首页](http://rn.mobile.ant.design)
- [更详细的安装说明 >](docs/react/introduce.zh-CN.md)
- [开发者文档](development.zh-CN.md)

## 本地演示

 - **使用 expo-cli 运行**

```bash
# go to expo example folder
cd example

# install dependencies
yarn

# start expo
yarn expo
```

 - **使用 react-native-cli 运行**

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

## 欢迎贡献

有任何建议或意见您可以进行 [提问](http://github.com/ant-design/ant-design-mobile-rn/issues)。

---

感谢@ant-design/react-native的所有贡献者：

<a href="https://github.com/ant-design/ant-design-mobile-rn/graphs/contributors">
  <img src="https://opencollective.com/ant-design-mobile-rn/contributors.svg?width=960&button=false" alt="contributors" />
</a>