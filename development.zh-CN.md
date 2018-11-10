# Development

## 环境

```
node = 6+
npm = 3+
```

## 代码风格

TypeScript

```bash
$ npm run lint
```

### 目录结构
```
├── AUTHORS.txt             作者
├── CHANGELOG.xxx.md        变更记录文档
├── LICENSE                 许可证
├── README.md               自述文档
├── components              组件代码
├── development.xxx.md      开发说明文档
├── docs                    其他文档
├── rn-kitchen-sink         RN示例工程代码
├── scripts                 辅助脚本
├── site                    官网代码
├── tests                   通用测试代码
├── tsconfig.json           TypeScript配置
├── typings                 第三方缺失定义
```

### API 规范

设计原则

1. 尽量和 react-native 一致。
2. react-native 没有的组件，参考 antd。
3. antd 也没有的, 发 issue 讨论。

组件名以 `-` 分割, 例如 `date-picker`，文件后缀名统一为 `.tsx`。


### 组件实现

- 尽量使用 react-component/xx 的组件, 有问题 pr 到 react-component/xx
- 复杂组件拆分到 react-component/xx 单独维护
- 不符合以上情况发帖讨论

### 示例

无特殊情况（iOS Android 代码完全一致）不用带后缀.

- `components/button/index.tsx`

```jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';

// 可独立到 components/button/style/index.tsx
const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
});

class Button extends React.Component {
  render() {
    return (
      <View style={[styles.button]}>
        {this.props.children}
      </View>
    );
  }
}

export default Button;
```

- `components/button/demo/basic.tsx`

```jsx
import { Button } from '@ant-design/react-native';
import React from 'react';
import { Text, View } from 'react-native';

class BasicButtonExample extends React.Component {
  render() {
    return <Button><Text>basic button</Text></Button>;
  }
}

exports.title = 'Button';
exports.description = 'button example';
exports.demo = BasicButtonExample;
```

## 开发流程

```bash
$ npm install

# In one terminal tab
$ npm run rn-start

# Open one ios/android simulator
# Open another terminal tab
$ npm run ios / android
```

demo app 代码地址：https://github.com/ant-design/ant-design-mobile-rn/tree/master/rn-kitchen-sink

If you need to add a new component, then modify `rn-kitchen-sink/demoList.js` and `./index.js`.

### 提交代码

自己从 master 新开一个分支开发.

```bash
git checkout -b xx-feature
```

开发完成后。

```bash
$ git add --all
$ git commit -am "描述"
$ git pull --rebase origin master
# 解决冲突
$ git push origin xx-feature:xx-feature
```

提交 mr, 指定相应人员 review, 根据反馈进一步修改提交.

由 review 人合并进主干后

```bash
$ git checkout master
$ git pull
```

### 运行测试

运行所有测试：

```bash
$ npm run test:all
```

更新 snapshot：

```bash
$ npm run test -- -u
```

只运行某文件的某个测试：

```bash
$ npm run test -- components/button/__tests__/index.test.js -t 'pressIn'
```
