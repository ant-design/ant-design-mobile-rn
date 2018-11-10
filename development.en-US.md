# Development

## Environment

```
node = 6+
npm = 3+
```

## Code convention for @ant-design/react-native

TypeScript

```bash
$ npm run lint
```

### Directory Structure
```
├── AUTHORS.txt             authors
├── CHANGELOG.xxx.md        changelog document
├── LICENSE                 license
├── README.md               readme document
├── components              components source code
├── development.xxx.md      development document
├── docs                    other docs
├── rn-kitchen-sink         RN demo project source code
├── scripts                 scripts for development
├── site                    offical website source code
├── tests                   test code
├── tsconfig.json           TypeScript config
├── typings                 mistake defined for TypeScript
```

### API Design Philosophy

Basic principles:

1. remain the same with react-native as much as possible.
2. components which react-native do not have, should follow [antd convention](https://ant.design/)。
3. components which totally new, please open a issue and we will discuss about it.

component name separate with `-`, such as `date-picker`，and file Extensions should be `.tsx`。


### Components Implementation

- prefer to use [react-component](https://github.com/react-component/), you can PR to react-component if you find any problem.
- complicated component should abstract it's basic logic into [react-component](https://github.com/react-component/)
- any problem you do not sure, open a issue and discuss.

### Samples

general we do not distinguish Android and Ios, so no suffix.

- `components/button/index.tsx`

```jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';

// just a example, may extract style to components/button/style/index.tsx
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
import * as React from 'react';
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

## Development

```bash
$ npm install

# In one terminal tab
$ npm run rn-start

# Open one ios/android simulator
# Open another terminal tab
$ npm run ios / android
```

The code of demo app: https://github.com/ant-design/ant-design-mobile-rn/tree/master/rn-kitchen-sink

If you need to add a new component, then modify `rn-kitchen-sink/demoList.js` and `./index.js`.

### Tips about Pull Request

Fork and git clone, and check a new branch from `master`.

```bash
git checkout -b xx-feature
```

After you are done.

```bash
$ git add --all
$ git commit -am "some description"
$ git pull --rebase origin master
# fix some conflict if need be
$ git push origin xx-feature:xx-feature
```

Open Pull Request, assign a owner, and we will follow and review this.

After you pr is merged into master.

```bash
$ git checkout master
$ git pull
```

### Run tests

Run all test:

```bash
$ npm run test:all
```

Update snapshot：

```bash
$ npm run test -- -u
```

Run specific test:

```bash
$ npm run test -- components/button/__tests__/index.test.js -t 'pressIn'
```
