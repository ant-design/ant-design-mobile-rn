---
order: 0
title: Ant Design Mobile RN of React
---

`@ant-design/react-native` 是 [Ant Design](http://ant.design) 的移动规范的 React 实现，服务于蚂蚁及口碑无线业务。

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

## 特性和优势

- UI 样式高度可配置，拓展性更强，轻松适应各类产品风格
- 基于 React Native 的 iOS / Android / Web 多平台支持，组件丰富、能全面覆盖各类场景 (antd-mobile)
- 提供 "组件按需加载" / "Web 页面高清显示" / "SVG Icon" 等优化方案，一体式开发
- 使用 TypeScript 开发，提供类型定义文件，支持类型及属性智能提示，方便业务开发
- 全面兼容 react

## 适用场景

- 适合于中大型产品应用
- 适合于基于 react-native 的多终端应用
- 适合不同 UI 风格的高度定制需求的应用

## 版本

- 稳定版：[![npm package](http://img.shields.io/npm/v/@ant-design/react-native.svg?style=flat-square)](http://npmjs.com/package/@ant-design/react-native)
- 开发版：[![npm package](https://img.shields.io/npm/v/@ant-design/react-native/next.svg)](http://npmjs.com/package/@ant-design/react-native)

## 安装

首先，您需要将它们安装到您的项目中：
```bash
$ npm install @ant-design/react-native @ant-design/icons-react-native
```

### 安装 peerDependencies
我们将以下依赖通过 `peerDependencies` 进行管理，目的是为了让您可以更灵活地选择版本，减少重复安装依赖：

 - 如果使用Expo来构建项目的，请使用 `expo`（**推荐，这能安装到最合适的版本**）：
   ```bash
   npx expo install react-native-gesture-handler react-native-reanimated
   ```

 - 如果使用React Native CLI原生构建项目的，请使用 `npm` ：
   ```bash
   npm install react-native-gesture-handler react-native-reanimated
   ```

### 链接字体图标

 - 将字体资源路径配置到根目录下的 `react-native.config.js` 文件中 ( 如果没有，请创建 )：

   ```js
   module.exports = {
     assets: ['node_modules/@ant-design/icons-react-native/fonts'],
   };
   ```

 - 然后执行 [react-native-asset](https://github.com/unimonkiez/react-native-asset) 的命令，字体文件将会自动复制到`ios` 和 `android` 资源文件中：

   ```bash
   npx react-native-asset
   ```

 - 如果使用Expo来构建项目，省略上两步，直接使用 [expo-font](https://docs.expo.dev/versions/latest/sdk/font/) 加载字体：
   ```jsx
   import { useFonts } from 'expo-font';

   const [fontsLoaded] = useFonts({
    antoutline: require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
  })
   ```

## 示例

组件使用实例：

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

**如果需要使用`Modal`以及`Toast`还需要在 App 的入口处加上`Provider`**

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

##### 按需加载

下面两种方式都可以**只加载**用到的组件，选择其中一种方式即可。

- 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)（推荐）。

  ```js
  // .babelrc or babel-loader option
  {
    "plugins": [
      ["import", { libraryName: "@ant-design/react-native" }] // 与 Web 平台的区别是不需要设置 style
    ]
  }
  ```

  然后改变从 @ant-design/react-native 引入模块方式即可。

  ```jsx
  import { Button } from '@ant-design/react-native';
  ```

  > 说明：有人反映通过 `react-native init` 创建的项目在使用时可能会报 [Unable to resolve module `react-dom`](https://github.com/ant-design/ant-design-mobile/issues/2054) 的错误 ，此时不妨安装 [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver) 试试~

- 手动引入

  ```jsx
  import Button from '@ant-design/react-native/lib/button';
  ```

##### 更多增强 (非必须):

> [自定义 RN 主题和单个组件样式](https://github.com/ant-design/antd-mobile-samples/tree/master/rn-custom-ui#antd-mobile-with-rn-custom-ui)
> 比如 [#1853](https://github.com/ant-design/ant-design-mobile/issues/1853)


## 链接

- [首页](https://rn.mobile.ant.design/)
- [开发者文档](http://github.com/ant-design/ant-design-mobile-rn/blob/master/development.zh-CN.md)

## 如何贡献

在任何形式的参与前，请先阅读 [贡献者文档](https://github.com/ant-design/ant-design-mobile-rn/blob/master/.github/CONTRIBUTING.md)。有任何建议或意见您可以 [Pull Request](https://github.com/ant-design/ant-design-mobile-rn/pulls)，给我们 [报告 Bug](https://github.com/ant-design/ant-design-mobile-rn/issues/new)。

> 强烈推荐阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)、[《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545) 和 [《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)，更好的问题更容易获得帮助。

## 社区互助

如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助，同时我们也鼓励资深用户通过下面的途径给新人提供帮助。

通过 Stack Overflow 或者 Segment Fault 提问时，建议加上 `antd`/`antd-mobile-rn` 标签。

1. [Stack Overflow](http://stackoverflow.com/questions/tagged/antd)（推荐）
2. [Segment Fault](https://segmentfault.com/t/antd)
3. [![Join the chat at https://gitter.im/ant-design/ant-design](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ant-design/ant-design?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
