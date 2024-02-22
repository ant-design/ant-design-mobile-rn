---
order: 4
title: 升级指南
---

此处着重列出升级中的不兼容变化和推荐改动。所有变动请见 [Changelog](/changelog)。

### 5.1.0

> 安装 peer 依赖

```bash
npm install @react-native-community/segmented-control @react-native-community/slider react-native-gesture-handler
```

or

```bash
yarn add @react-native-community/segmented-control @react-native-community/slider react-native-gesture-handler
```
<br/>
> 在项目的根目录下，入口文件(通常是App.js)文件中需要引入这句：

```js
import 'react-native-gesture-handler';
```

### 5.0.3

> 安装 peer 依赖

```bash
npm install @react-native-camera-roll/camera-roll @react-native-picker/picker @react-native-community/segmented-control @react-native-community/slider react-native-gesture-handler
```

or

```bash
yarn add @react-native-camera-roll/camera-roll @react-native-picker/picker @react-native-community/segmented-control @react-native-community/slider react-native-gesture-handler
```

### 4.2.0

> 安装 peer 依赖

```bash
npm install @react-native-community/cameraroll @react-native-picker/picker @react-native-community/segmented-control @react-native-community/slider react-native-pager-view react-native-gesture-handler
```

or

```bash
yarn add @react-native-community/cameraroll @react-native-picker/picker @react-native-community/segmented-control @react-native-community/slider react-native-pager-view react-native-gesture-handler
```

### 4.1.0

> 升级到 4.0.0+需要安装 peer 依赖然后 link

```bash
npm install @react-native-community/cameraroll @react-native-picker/picker @react-native-community/segmented-control @react-native-community/slider react-native-pager-view
```

or

```bash
yarn add @react-native-community/cameraroll @react-native-picker/picker @react-native-community/segmented-control @react-native-community/slider react-native-pager-view
```

> 安装完依赖后需要到 iOS 目录 `pod install`(auto linking)，Android 不需要手动处理

### 链接字体图标

```bash
# 手动链接字体图标
npx react-native link
```

### 3.0.0

**3.0.0**开始需要安装 `react-native@0.57.x`

- 修改之前的 import 方式改成 `import { Button, ... } from '@ant-design/react-native`
- 多语言以及主题，由之前的 `LocaleProvider` 改成`Provider`，现在的`Provider` 支持`theme`跟`locale`，Provider 必须在 app 入口指定，不然部分组件用不了（因为现在支持多个 Modal 以及在 Modal 上面显示 Toast）

- Provider 配置

  ```jsx
  // 动态主题配置可以查看 ./rn-kitchen-sink/app.js
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

- 样式重写
  - 通过 `Provider` 的 theme 配置默认的全局主题样式
  - 通过组件的 styles 覆盖局部组件样式，不需要导入当前组件的所有样式
  - 不需要像 2.x 那样导入一个样式文件，现在的样式文件返回的是一个 function 而不是一个对象了
- Toast 移除了 `hide` 方法
- 修改`Grid`的`onClick`属性为`onPress`
- Link Icon Fonts

  ```sh
  react-native link @ant-design/icons-react-native
  ```

  如果你使用的是 react-native@0.60.x 会自动 link，如需手动 link 请使用

  ```sh
  react-native link @ant-design/react-native
  ```

### 2.1.11 and before

[antd-mobile upgrade-notes](https://github.com/ant-design/ant-design-mobile/blob/master/docs/react/upgrade-notes.zh-CN.md)
