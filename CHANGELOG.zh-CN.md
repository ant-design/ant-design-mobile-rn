---
order: 2
title: 更新日志
toc: false
---

`@ant-design/react-native` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

#### 发布周期

- 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
- 次版本号：每月发布一个带有新特性的向下兼容的版本。
- 主版本号：含有破坏性更新和新特性，不在发布周期内。

---

### 3.0.0

`2018-12-15`

**不兼容更新** 更多信息请查看 [#119](https://github.com/ant-design/ant-design-mobile-rn/issues/119)

- 全新的包名 `@ant-design/react-native` 谢谢 [afc163](https://github.com/afc163) 提供
- 组件文件重命名，去掉了之前的`.native`后缀
- 更友好的主题支持，方便用户自定义，全新的 `Provider`
- 重构了所有组件支持自定义局部样式
- 完善 TypeScript 类型定义
- Toast现在支持在Modal之上显示
- bug 修复
- 完善文档，使用 codesandbox 以及 react-native-web 提供部分组件在线预览
- 重构 Icon 组件，现在使用 [ant-design-icons](https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-react-native)
- Toast 移除了 `hide` 方法
- 更多组件优化以及使用方式请查看文档
- 从 2.x 升级到 3.0.0 请查看[upgrade notes](https://rn.mobile.ant.design/docs/react/upgrade-notes-cn)

### 2.3.0

`2018-10-20`

- `Input`添加`editable`. ([#78](https://github.com/ant-design/ant-design-mobile-rn/pull/78))
- 修复`Button`组件`activeStyle`属性为对象时不起作用的问题. ([#105](https://github.com/ant-design/ant-design-mobile-rn/pull/105))
- `Modal`支持多语言. ([#115](https://github.com/ant-design/ant-design-mobile-rn/pull/115))
- 西班牙语. ([#75](https://github.com/ant-design/ant-design-mobile-rn/pull/75))
- TypeScript 类型定义完善. ([#83](https://github.com/ant-design/ant-design-mobile-rn/pull/83))

### 2.2.1

`2018-07-17`

- Grid 组件单个项高度通过 column 来做计算. ([#61](https://github.com/ant-design/ant-design-mobile-rn/pull/61))
- 利用 normalize-css-color 替换 react-native 自带模块，修复 >= 0.56 下的报错. ([#57](https://github.com/ant-design/ant-design-mobile-rn/pull/57))

### 2.2.0

`2018-06-15`

- 拆分 antd-mobile react native 代码到 `antd-mobile-rn` 包。
- 特性: 使 `Tag` 组件支持长按。([#20](https://github.com/ant-design/ant-design-mobile-rn/issues/20))

### 2.1.11

`2018-05-31`

- [antd-mobile@2.1.11 及以前更新日志](https://github.com/ant-design/ant-design-mobile/blob/master/CHANGELOG.en-US.md#2111)
