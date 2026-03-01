---
category: Blog
title: styles是什么？
author: 1uokun
date: 2024-08-08
---

2024-08-08 [@1uokun](https://github.com/1uokun)

## CSS-in-JS是什么？

在聊`styles`是什么之前，我们先简单了解CSS-in-JS是什么？

CSS-in-JS是一种将CSS样式直接编写在JavaScript代码中的技术，使得开发者能够在JavaScript文件中定义和使用样式。

常见的CSS-in-JS库包括：

 - [Styled-Components](https://github.com/styled-components/styled-components): 允许你使用ES6的模板字符串语法定义样式。
 - [Emotion](https://github.com/emotion-js/emotion): 提供了高性能和灵活的API来写CSS。
 - [JSS](https://github.com/cssinjs/jss): 通过JavaScript对象定义样式，并将其动态注入到DOM中。


而React-Native根据官网描述，

> 在React-native中，样式是通过JavaScript来实现的，所有的核心组件都接受名为style的属性。
>
> 为应对实际开发中组件的样式会越来越复杂，建议使用`StyleSheet.create`来集中定义组件的样式。
> 
> [via](https://reactnative.dev/docs/style)

举一个基础案例：
```jsx
const Button = ({ children }) => {
  return (
    <TouchableHighlight style={styles.myButton}>
      {children}
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  myButton: {
    height: 47,
    backgroundColor: '#108ee9',
  },
})
```

这就是天生的且只能支持CSS-in-JS了。

其中`StyleSheet.create`的设计是类似于[react-jss](https://cssinjs.org/react-jss?v=v10.10.1)，属于CSS-in-JS中的JSS（JavaScript Style Sheets）一类，他们有着以下的优势：

### 动态值

创建一个 `useStyles` hook函数，接收一个props对象，并返回`StyleSheet.create`的对象。

这样样式中就可以使用来自组件props对象：

```jsx
const Button = ({children, ...props}) => {
  const styles = useStyles(props)
  return (
    <TouchableHighlight style={styles.myButton}>
      {children}
    </TouchableHighlight>
  )
}

// create useStyles hooks
const useStyles = (props) =>
  StyleSheet.create({
    myButton: {
      height: props.height, // 来自组件的 `height` prop
      backgroundColor: '#108ee9',
    },
  })
```

### 主题化

使用Context统一维护所有主题变量（`ThemeContext`），即用`ThemeContext.Provider`包装你的应用程序并将theme对象传递给`ThemeContext.Provider`。

随后创建一个 `useTheme` hook函数，返回theme对像；同时将theme对象也入参到 `useStyles` hook函数中。

```jsx
const Button = ({ children, ...props }) => {
  const theme = useTheme()
  const styles = useStyles({...props, theme})
  return (
    <TouchableHighlight style={styles.myButton}>
      {children}
    </TouchableHighlight>
  )
}

export const App = () => {
  const theme = {
    colorPrimary: '#108ee9',
  }
  return (
    <ThemeContext.Provider theme={theme}>
      <Button height={47}>I am a button</Button>
    </ThemeContext.Provider>
  )
}

// create ThemeContext & useTheme hooks
const ThemeContext = React.createContext({})
const useTheme = () => {
  return React.useContext(ThemeContext)
}


// useStyles hooks
const useStyles = ({...props, theme}) =>
  StyleSheet.create({
    myButton: {
      height: props.height, // 来自组件的 height prop
      backgroundColor: theme.colorPrimary, // 来自ThemeContext变量
    },
  })
```


## CSS-in-JS 的困境

当我们想在外部为Button组件添加`padding`样式时，需要重新设计Button组件，改动内部的源码:
```diff
export const App = () => {
  return (
-    <Button>I am a button</Button>
+    <Button padding={7}>I am a button</Button>
  )
}

const useStyles = (props) =>
  StyleSheet.create({
    myButton: {
      height: props.height,
+      padding: props.padding
    },
  })
```

大致方案为：

 1. 添加足量的style类props
 2. 添加足量的token css变量

这是可以遇见的徒增维护成本。那么如何实现像CSS那样可以用外部样式覆盖呢？

## styles是什么？

通过`styles`一个prop来支持实现CSS样式覆盖的能力（以下为简易后的代码，实际会做一些性能优化和边际保护），避免过多的非组件核心逻辑的props设计。

```jsx
/**
 * @params   styles = { myButton: { padding } }
 * const baseStyles = { myButton: { height } }
 *
 * @return { myButton: [{ height }, { padding }] }
 * **/
const useStyles = ({...props, styles}) => {
  const baseStyles = StyleSheet.create({
    myButton: {
      height: props.height,
    },
  })

  // 类似 lodash.mergesWidth
  return _.mergeWidth(baseStyles, styles)
}


<Button styles={{ myButton: { padding: 7 } }}>
    I am a button
</Button>
```

 - Q：为此`styles`是什么，为什么`@ant-design/react-native`的每个组件都被设计了这么一个属性呢？

 - A：`styles`就是支持组件相同的样式集合，能覆盖组件的所有样式，但是也强化了类似CSS样式类名的存在。

## 实战
以 `<Picker>` 为例，

第一步，我们需要聚焦Picker的样式类名([文档](/components/picker-cn/#pickerstyle-语义化样式)中有提供)

```ts
interface PickerViewStyle {
  wrappper: ViewStyle
  wheelWrapper: ViewStyle

   // item style
  itemWrap: ViewStyle
  itemStyle: TextStyle

  // 遮罩层
  mask: ViewStyle
  maskTop: ViewStyle
  maskMiddle: ViewStyle
  maskBottom: ViewStyle
}

interface PickerStyle extends Partial<PickerViewStyle> {
  // modal 相关的样式
  modal: ViewStyle
  container: ViewStyle
  header: ViewStyle
  headerItem: ViewStyle
  actionText: TextStyle
  title: TextStyle
  okText: TextStyle
  dismissText: TextStyle
}
```
可以借助[React Developer Tools](https://chrome.google.com/webstore/detail/fmkadmapgofadopljbjfkapdkoienihi)浏览器插件定位DOM信息

<img src="https://luokun.oss-cn-hangzhou.aliyuncs.com/github/8211723121784_.pic.jpg" width="700" />

第二步，设置`styles`属性
```jsx
// 建议使用 useMemo 缓存变量
const styles = useMemo(
  () => ({
    itemActiveStyle: {
      color: '#108ee9',
      fontWeight: 'bold',
    },
    mask: {
      paddingHorizontal: 10,
    },
    maskMiddle: {
      backgroundColor: 'rgba(51,51,51,0.1)',
      borderRadius: 10,
    },
  }),
  [],
)

<Picker 
  styles={styles}
>
...
</Picker>
```

| 基础样式 | 定制样式 |
|---------|---------|
| <img src="https://luokun.oss-cn-hangzhou.aliyuncs.com/github/picker-old.png" width="500"/> | <img src="https://luokun.oss-cn-hangzhou.aliyuncs.com/github/picker-new-style.jpg" width="500"/> |

## 结尾

> 讨论区： https://github.com/ant-design/ant-design-mobile-rn/discussions/1368