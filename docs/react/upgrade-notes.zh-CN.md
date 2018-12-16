---
order: 4
title: 升级指南
---

此处着重列出升级中的不兼容变化和推荐改动。所有变动请见 [Changelog](/changelog)。

### 3.0.0

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
- Link Icon Fonts

  ```sh
  react-native link @ant-design/icons-react-native
  ```

### 2.1.11 and before

[antd-mobile upgrade-notes](https://github.com/ant-design/ant-design-mobile/blob/master/docs/react/upgrade-notes.zh-CN.md)
