---
category: Blog
title: What is styles?
author: 1uokun
date: 2024-08-08
---

2024-08-08 [@1uokun](https://github.com/1uokun)

## What is CSS-in-JS?

Before we talk about what `styles` is, let's first briefly understand what CSS-in-JS is?

CSS-in-JS is a technique where CSS styles are written directly within JavaScript code, allowing developers to define and use styles within JavaScript files.

Common CSS-in-JS libraries include:

 - [Styled-Components](https://github.com/styled-components/styled-components): Allows you to define styles using ES6 template string syntax.
 - [Emotion](https://github.com/emotion-js/emotion): Provides a high-performance and flexible API for writing CSS.
 - [JSS](https://github.com/cssinjs/jss): Defines styles through JavaScript objects and dynamically injects them into the DOM.


According to the official website of React-Native,

> With React Native, you style your application using JavaScript. 
> 
> As a component grows in complexity, it is often cleaner to use `StyleSheet.create` to define several styles in one place.
> 
> [via](https://reactnative.dev/docs/style)

Here’s a basic example:
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

This is natural and can only support CSS-in-JS.

The design of `StyleSheet.create` is similar to [react-jss](https://cssinjs.org/react-jss?v=v10.10.1), which belongs to the JSS (JavaScript Style Sheets) category in CSS-in-JS. They have the following advantages:

### Dynamic values

Create a `useStyles` hook function that receives a props object and returns an object from `StyleSheet.create`.

This way, the props object from the component can be used in the style:

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
      height: props.height, // From the component's `height` prop
      backgroundColor: '#108ee9',
    },
  })
```

### Theming

The idea is that you define a theme, wrap your application with `ThemeContext.Provider` and pass the theme object to `ThemeContext.Provider`. 

Then create a `useTheme` hook function that returns `theme` object and receives `theme` object to `useStyles` hook function.

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
      height: props.height, // From the component's `height` prop
      backgroundColor: theme.colorPrimary, // From `ThemeContext` variable
    },
  })
```


## Dilemma of CSS-in-JS

When we want to add `padding` style to the Button component externally, we need to redesign the Button component and modify the internal source code:
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

The general plan is:

 1. Add enough style class props
 2. Add enough token css variables

This is an unforeseeable increase in maintenance costs. So how can we achieve external style overrides like CSS?

## What is styles?

Support for CSS style overrides via the `styles` prop (pseudocode), to avoid excessive props design that is not part of the core logic of a component.

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

  // Similar to lodash.mergesWidth
  return _.mergeWidth(baseStyles, styles)
}


<Button styles={{ myButton: { padding: 7 } }}>
    I am a button
</Button>
```

 - Q: So what is `styles`, Why is every component of `@ant-design/react-native` designed with such a property?

 - A: `styles` is a collection of styles for a components, and can override all styles of the component. But it also strengthens the existence of CSS Class Names

## Demonstration (teaching)
Take `<Picker>` as an example

First step: we need know all the style class names of Picker ([provided in the document]((/components/picker/#pickerstyle-interface)))

```ts
interface PickerViewStyle {
  wrappper: ViewStyle
  wheelWrapper: ViewStyle

   // item style
  itemWrap: ViewStyle
  itemStyle: TextStyle
  itemActiveStyle: TextStyle

  // Mask View
  mask: ViewStyle
  maskTop: ViewStyle
  maskMiddle: ViewStyle
  maskBottom: ViewStyle
}

interface PickerStyle extends Partial<PickerViewStyle> {
  // modal style
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

You can use the [React Developer Tools](https://chrome.google.com/webstore/detail/fmkadmapgofadopljbjfkapdkoienihi) browser plug-in to locate DOM information.

<img src="https://luokun.oss-cn-hangzhou.aliyuncs.com/github/8211723121784_.pic.jpg" width="700" />

Step 2: Set the `styles` property
```jsx
<Picker 
  styles={{
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
  }}
>
...
</Picker>
```

| Base Style | Custom Style |
|---------|---------|
| <img src="https://luokun.oss-cn-hangzhou.aliyuncs.com/github/picker-old.png" width="500"/> | <img src="https://luokun.oss-cn-hangzhou.aliyuncs.com/github/picker-new-style.jpg" width="500"/> |

## The End

> discussions:  https://github.com/ant-design/ant-design-mobile-rn/discussions/1368