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

## 演示

```bash
# clone
git clone git@github.com:ant-design/ant-design-mobile-rn.git

# go to ant rn folder
cd ant-design-mobile-rn

# install dependencies
yarn

# start ios simulator or android
# cd rn-kitchen-sink/ios && pod install
yarn ios # or yarn android

```

## 安装 & 使用

```bash
npm install @ant-design/react-native --save
```

or

```bash
yarn add @ant-design/react-native
```

### 安装peer依赖(4.0.0+)

```bash
npm install @react-native-community/cameraroll @react-native-community/picker @react-native-community/segmented-control @react-native-community/slider @react-native-community/viewpager
```

or

```bash
yarn add @react-native-community/cameraroll @react-native-community/picker @react-native-community/segmented-control @react-native-community/slider @react-native-community/viewpager
```

> 安装完依赖后需要到 iOS 目录 `pod install`(auto linking)，Android 不需要手动处理

### 链接字体图标以及自动链接

```bash
# 手动链接字体图标
npx react-native link
```

[介绍](docs/react/introduce.zh-CN.md#安装)

## 链接

- [首页](http://rn.mobile.ant.design)
- [开发文档](development.zh-CN.md)
- [底层 React 模块](http://github.com/react-component)
- [官方 Demo 集合](https://github.com/ant-design/antd-mobile-samples)

## 欢迎贡献

有任何建议或意见您可以进行 [提问](http://github.com/ant-design/ant-design-mobile-rn/issues)。
