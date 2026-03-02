"use strict";(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[7430],{21145:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var t=e(67294),o={}},47348:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var t=e(67294),o={}},73243:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var t=e(67294),o={}},34305:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var t=e(67294),o={}},19391:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var t=e(67294),o={}},64379:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});const t=[{value:"2024-11-19 ",paraId:0},{value:"@1uokun",paraId:0},{value:"Take Slider as an example",paraId:1},{value:"Basic",paraId:2},{value:`Ant Design
`,paraId:3},{value:`    <Slider />
`,paraId:4},{value:`Headless UI
`,paraId:3},{value:`    <Slider.Root>
        <Slider.Track>
            <Slider.Range />
        </Slider.Tack>
        <Slider.Thumb />
    </Slider.Root>
`,paraId:5},{value:"Two Slider thumb",paraId:6},{value:`Ant Design
`,paraId:7},{value:`    <Slider range/>
`,paraId:8},{value:`Headless UI
`,paraId:7},{value:`    <Slider.Root>
        <Slider.Track>
            <Slider.Range />
        </Slider.Tack>
+    <Slider.Thumb index={0}/>
+    <Slider.Thumb index={1}/>
    </Slider.Root>
`,paraId:9},{value:"\u4FEE\u6539\u8F68\u9053\u6837\u5F0F",paraId:10},{value:`Ant Design
`,paraId:11},{value:`    <Slider styles={{track:{...}}}/>
`,paraId:12},{value:`Headless UI
`,paraId:11},{value:`    <Slider.Root>
+    <Slider.Track style={{...}} className={{...}}>
-    <Slider.Track>
            <Slider.Range />
        </Slider.Tack>
        <Slider.Thumb />
    </Slider.Root>
`,paraId:13},{value:"Track style change",paraId:14},{value:`Ant Design
(Not support\u274C)`,paraId:15},{value:`Headless UI
`,paraId:15},{value:`    <Slider.Root>
        <Slider.Track>
            <Slider.Range />
+         <View>
+            ...
+         </View>
        </Slider.Tack>
        <Slider.Thumb />
    </Slider.Root>
`,paraId:16},{value:"styles",paraId:17,tocIndex:0},{value:" has been deconstructed, each element style is independent and better supports ",paraId:17,tocIndex:0},{value:"tailwind",paraId:17,tocIndex:0},{value:" and ",paraId:17,tocIndex:0},{value:"animate style",paraId:17,tocIndex:0},{value:"Functions can be added or removed by adding or removing ",paraId:17,tocIndex:0},{value:"react element",paraId:17,tocIndex:0},{value:" instead of ",paraId:17,tocIndex:0},{value:"props",paraId:17,tocIndex:0},{value:"Component code is localized and can be expanded by yourself",paraId:17,tocIndex:0},{value:"Deconstructing the components of ",paraId:18,tocIndex:1},{value:"Slider",paraId:18,tocIndex:1},{value:"Track",paraId:19,tocIndex:1},{value:"Range",paraId:19,tocIndex:1},{value:"Thumb",paraId:19,tocIndex:1},{value:"Gesture",paraId:19,tocIndex:1},{value:"Root",paraId:19,tocIndex:1},{value:"Root component uses ",paraId:20,tocIndex:1},{value:"Context",paraId:20,tocIndex:1},{value:" to share props to children",paraId:20,tocIndex:1},{value:` // <Slier.Root> code
 <SliderContext.Provider value={props}>
     <Slider.Gesture gesture={gesture}>
         {props.children}
     </Slider.Gesture>
 </SliderContext.Provider>
`,paraId:21,tocIndex:1},{value:"Still retain support for ",paraId:22,tocIndex:1},{value:"Ant Design",paraId:22,tocIndex:1},{value:"Just download a set of antd style template code",paraId:23,tocIndex:1},{value:`// @/components/ui/slider
 <Slider.Root className="..." {...props}>
     <Slider.Track className="...">
         <Slider.Range className="..."/>
     </Slider.Tack>
     <Slider.Thumb index={0} className="..."/>
     {props.range && <Slider.Thumb index={1} className="..."/>}
 </Slider.Root>
`,paraId:24,tocIndex:1},{value:"Usage:",paraId:25,tocIndex:1},{value:`import { Slider } from "@/components/ui/slider"

<Slider defaultValue={33} max={100} step={1} />
`,paraId:26,tocIndex:1},{value:"discussions:  ",paraId:27,tocIndex:2},{value:"https://github.com/ant-design/ant-design-mobile-rn/discussions/1395",paraId:27,tocIndex:2}]},77898:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});const t=[{value:"2024-08-08 ",paraId:0},{value:"@1uokun",paraId:0},{value:"Before we talk about what ",paraId:1,tocIndex:0},{value:"styles",paraId:1,tocIndex:0},{value:" is, let's first briefly understand what CSS-in-JS is?",paraId:1,tocIndex:0},{value:"CSS-in-JS is a technique where CSS styles are written directly within JavaScript code, allowing developers to define and use styles within JavaScript files.",paraId:2,tocIndex:0},{value:"Common CSS-in-JS libraries include:",paraId:3,tocIndex:0},{value:"Styled-Components",paraId:4,tocIndex:0},{value:": Allows you to define styles using ES6 template string syntax.",paraId:4,tocIndex:0},{value:"Emotion",paraId:4,tocIndex:0},{value:": Provides a high-performance and flexible API for writing CSS.",paraId:4,tocIndex:0},{value:"JSS",paraId:4,tocIndex:0},{value:": Defines styles through JavaScript objects and dynamically injects them into the DOM.",paraId:4,tocIndex:0},{value:"According to the official website of React-Native,",paraId:5,tocIndex:0},{value:"With React Native, you style your application using JavaScript.",paraId:6,tocIndex:0},{value:"As a component grows in complexity, it is often cleaner to use ",paraId:7,tocIndex:0},{value:"StyleSheet.create",paraId:7,tocIndex:0},{value:" to define several styles in one place.",paraId:7,tocIndex:0},{value:"via",paraId:8,tocIndex:0},{value:"Here\u2019s a basic example:",paraId:9,tocIndex:0},{value:`const Button = ({ children }) => {
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
`,paraId:10,tocIndex:0},{value:"This is natural and can only support CSS-in-JS.",paraId:11,tocIndex:0},{value:"The design of ",paraId:12,tocIndex:0},{value:"StyleSheet.create",paraId:12,tocIndex:0},{value:" is similar to ",paraId:12,tocIndex:0},{value:"react-jss",paraId:12,tocIndex:0},{value:", which belongs to the JSS (JavaScript Style Sheets) category in CSS-in-JS. They have the following advantages:",paraId:12,tocIndex:0},{value:"Create a ",paraId:13,tocIndex:1},{value:"useStyles",paraId:13,tocIndex:1},{value:" hook function that receives a props object and returns an object from ",paraId:13,tocIndex:1},{value:"StyleSheet.create",paraId:13,tocIndex:1},{value:".",paraId:13,tocIndex:1},{value:"This way, the props object from the component can be used in the style:",paraId:14,tocIndex:1},{value:`const Button = ({children, ...props}) => {
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
      height: props.height, // From the component's \`height\` prop
      backgroundColor: '#108ee9',
    },
  })
`,paraId:15,tocIndex:1},{value:"The idea is that you define a theme, wrap your application with ",paraId:16,tocIndex:2},{value:"ThemeContext.Provider",paraId:16,tocIndex:2},{value:" and pass the theme object to ",paraId:16,tocIndex:2},{value:"ThemeContext.Provider",paraId:16,tocIndex:2},{value:".",paraId:16,tocIndex:2},{value:"Then create a ",paraId:17,tocIndex:2},{value:"useTheme",paraId:17,tocIndex:2},{value:" hook function that returns ",paraId:17,tocIndex:2},{value:"theme",paraId:17,tocIndex:2},{value:" object and receives ",paraId:17,tocIndex:2},{value:"theme",paraId:17,tocIndex:2},{value:" object to ",paraId:17,tocIndex:2},{value:"useStyles",paraId:17,tocIndex:2},{value:" hook function.",paraId:17,tocIndex:2},{value:`const Button = ({ children, ...props }) => {
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
      height: props.height, // From the component's \`height\` prop
      backgroundColor: theme.colorPrimary, // From \`ThemeContext\` variable
    },
  })
`,paraId:18,tocIndex:2},{value:"When we want to add ",paraId:19,tocIndex:3},{value:"padding",paraId:19,tocIndex:3},{value:" style to the Button component externally, we need to redesign the Button component and modify the internal source code:",paraId:19,tocIndex:3},{value:`export const App = () => {
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
`,paraId:20,tocIndex:3},{value:"The general plan is:",paraId:21,tocIndex:3},{value:"Add enough style class props",paraId:22,tocIndex:3},{value:"Add enough token css variables",paraId:22,tocIndex:3},{value:"This is an unforeseeable increase in maintenance costs. So how can we achieve external style overrides like CSS?",paraId:23,tocIndex:3},{value:"Support for CSS style overrides via the ",paraId:24,tocIndex:4},{value:"styles",paraId:24,tocIndex:4},{value:" prop (pseudocode), to avoid excessive props design that is not part of the core logic of a component.",paraId:24,tocIndex:4},{value:`/**
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
`,paraId:25,tocIndex:4},{value:"Q: So what is ",paraId:26,tocIndex:4},{value:"styles",paraId:26,tocIndex:4},{value:", Why is every component of ",paraId:26,tocIndex:4},{value:"@ant-design/react-native",paraId:26,tocIndex:4},{value:" designed with such a property?",paraId:26,tocIndex:4},{value:"A: ",paraId:27,tocIndex:4},{value:"styles",paraId:27,tocIndex:4},{value:" is a collection of styles for a components, and can override all styles of the component. But it also strengthens the existence of CSS Class Names",paraId:27,tocIndex:4},{value:"Take ",paraId:28,tocIndex:5},{value:"<Picker>",paraId:28,tocIndex:5},{value:" as an example",paraId:28,tocIndex:5},{value:"First step: we need know all the style class names of Picker (",paraId:29,tocIndex:5},{value:"provided in the document",paraId:30,tocIndex:5},{value:")",paraId:29,tocIndex:5},{value:`interface PickerViewStyle {
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
`,paraId:31,tocIndex:5},{value:"You can use the ",paraId:32,tocIndex:5},{value:"React Developer Tools",paraId:32,tocIndex:5},{value:" browser plug-in to locate DOM information.",paraId:32,tocIndex:5},{value:"Step 2: Set the ",paraId:33,tocIndex:5},{value:"styles",paraId:33,tocIndex:5},{value:" property",paraId:33,tocIndex:5},{value:`// It is recommended to use useMemo to cache variables
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
`,paraId:34,tocIndex:5},{value:"Base Style",paraId:35,tocIndex:5},{value:"Custom Style",paraId:35,tocIndex:5},{value:"discussions:  ",paraId:36,tocIndex:6},{value:"https://github.com/ant-design/ant-design-mobile-rn/discussions/1368",paraId:36,tocIndex:6}]},55408:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});const t=[{value:"@ant-design/react-native",paraId:0},{value:" is the React implementation of the ",paraId:0},{value:"Ant Design",paraId:0},{value:"'s mobile specification, serving the ant and koubei wireless service.",paraId:0},{value:`
  `,paraId:1},{value:`
  `,paraId:1},{value:"+",paraId:1},{value:`
  `,paraId:1},{value:"The UI is fully Configurable and Scalable, easily adapt to all kinds of product style.",paraId:2,tocIndex:0},{value:"Support Web / iOS / Android platform (Based on React Native), has a wealth of components, can fully cover all kinds of scenes. (antd-mobile)",paraId:2,tocIndex:0},{value:'Provide "Components are loaded on demand" / "Web page HD display" / "SVG Icon" optimization features, integrated development.',paraId:2,tocIndex:0},{value:"Use TypeScript to develop, provide type definition files, support type and attribute smart tips for easy business development.",paraId:2,tocIndex:0},{value:"Fully compatible with react / preact.",paraId:2,tocIndex:0},{value:"Medium-sized and large-scale applications.",paraId:3,tocIndex:1},{value:"Multi-terminal applications based on react / preact / react-native.",paraId:3,tocIndex:1},{value:"Custom UI-style applications.",paraId:3,tocIndex:1},{value:"Stable: ",paraId:4,tocIndex:2},{value:"Next: ",paraId:4,tocIndex:2},{value:`$ npm install @ant-design/react-native @ant-design/icons-react-native
`,paraId:5,tocIndex:3},{value:"We manage the following dependencies through ",paraId:6,tocIndex:4},{value:"peerDependencies",paraId:6,tocIndex:4},{value:" to allow you to choose versions more flexibly and reduce repeated installation of dependencies:",paraId:6,tocIndex:4},{value:"If you have an Expo managed project, install the dependencies with ",paraId:7,tocIndex:4},{value:"expo",paraId:7,tocIndex:4},{value:":",paraId:7,tocIndex:4},{value:`npx expo install react-native-gesture-handler react-native-reanimated react-native-worklets
`,paraId:8,tocIndex:4},{value:"If you have a bare React Native project, install the dependencies with ",paraId:9,tocIndex:4},{value:"npm",paraId:9,tocIndex:4},{value:":",paraId:9,tocIndex:4},{value:`npm install react-native-gesture-handler react-native-reanimated react-native-worklets
`,paraId:10,tocIndex:4},{value:"you also need to manually add the ",paraId:11,tocIndex:4},{value:"react-native-worklets/plugin",paraId:11,tocIndex:4},{value:" plugin to your ",paraId:11,tocIndex:4},{value:"babel.config.js",paraId:11,tocIndex:4},{value:` module.exports = {
     presets: [
       ... // don't add it here :)
     ],
     plugins: [
       ...
       'react-native-worklets/plugin',
     ],
   };
`,paraId:12,tocIndex:4},{value:"see more details in ",paraId:13,tocIndex:4},{value:"react-native-reanimated installation doc",paraId:13,tocIndex:4},{value:"Add assets to your ",paraId:14,tocIndex:5},{value:"react-native.config.js",paraId:14,tocIndex:5},{value:" ( If not exist, please create in project\u2019s root directory ):",paraId:14,tocIndex:5},{value:`module.exports = {
  assets: ['node_modules/@ant-design/icons-react-native/fonts'],
};
`,paraId:15,tocIndex:5},{value:"Run the ",paraId:16,tocIndex:5},{value:"react-native-asset",paraId:16,tocIndex:5},{value:"'s command and linking + unlinking is automatic:",paraId:16,tocIndex:5},{value:`npx react-native-asset
`,paraId:17,tocIndex:5},{value:"If you have an Expo managed project, skip the previous two steps and use ",paraId:18,tocIndex:5},{value:"expo-font",paraId:18,tocIndex:5},{value:" to load the font directly:",paraId:18,tocIndex:5},{value:`import { useFonts } from 'expo-font';

const [fontsLoaded] = useFonts({
 antoutline: require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
})
`,paraId:19,tocIndex:5},{value:"Example of usage:",paraId:20,tocIndex:6},{value:`import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Button from '@ant-design/react-native/lib/button';

class HelloWorldApp extends Component {
  render() {
    return <Button>Start</Button>;
  }
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
`,paraId:21,tocIndex:6},{value:"If you need to use ",paraId:22,tocIndex:6},{value:"Modal",paraId:22,tocIndex:6},{value:" and ",paraId:22,tocIndex:6},{value:"Toast",paraId:22,tocIndex:6},{value:" you also need to add ",paraId:22,tocIndex:6},{value:"Provider",paraId:22,tocIndex:6},{value:" to the app entry point",paraId:22,tocIndex:6},{value:`import React, { Component } from 'react';
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
`,paraId:23,tocIndex:6},{value:"The following two ways used to load the ",paraId:24,tocIndex:7},{value:"only components you used",paraId:24,tocIndex:7},{value:", select one of the ways you like.",paraId:24,tocIndex:7},{value:"Use ",paraId:25,tocIndex:7},{value:"babel-plugin-import",paraId:25,tocIndex:7},{value:" (Recommended)",paraId:25,tocIndex:7},{value:`// .babelrc or babel-loader option
{
  "plugins": [
    ["import", { libraryName: "@ant-design/react-native" }] // The difference with the Web platform is that you do not need to set the style
  ]
}
`,paraId:26,tocIndex:7},{value:"Then just change the way of import modules from @ant-design/react-native.",paraId:27,tocIndex:7},{value:`import { Button } from '@ant-design/react-native';
`,paraId:28,tocIndex:7},{value:"Note: Some people reflected that it would be ",paraId:29,tocIndex:7},{value:"unable to resolve module ",paraId:29,tocIndex:7},{value:"react-dom",paraId:29,tocIndex:7},{value:" in a project created with ",paraId:29,tocIndex:7},{value:"react-native init",paraId:29,tocIndex:7},{value:". If you encounter the same problem, you might try to install ",paraId:29,tocIndex:7},{value:"babel-plugin-module-resolver",paraId:29,tocIndex:7},{value:".",paraId:29,tocIndex:7},{value:"Manually import",paraId:30,tocIndex:7},{value:`import Button from '@ant-design/react-native/lib/button';
`,paraId:31,tocIndex:7},{value:"Custom theme and single component style",paraId:32,tocIndex:8},{value:`
Like `,paraId:32,tocIndex:8},{value:"#1853",paraId:32,tocIndex:8},{value:"Home Page",paraId:33,tocIndex:9},{value:"Developer Instruction",paraId:33,tocIndex:9},{value:"Please read our ",paraId:34,tocIndex:10},{value:"CONTRIBUTING.md",paraId:34,tocIndex:10},{value:" first.",paraId:34,tocIndex:10},{value:"If you'd like to help us improve @ant-design/react-native, just create a ",paraId:35,tocIndex:10},{value:"Pull Request",paraId:35,tocIndex:10},{value:". Feel free to report bugs and issues ",paraId:35,tocIndex:10},{value:"here",paraId:35,tocIndex:10},{value:".",paraId:35,tocIndex:10},{value:"If you're new to posting issues, we ask that you read ",paraId:36,tocIndex:10},{value:"How To Ask Questions The Smart Way",paraId:36,tocIndex:10},{value:" and ",paraId:36,tocIndex:10},{value:"How to Ask a Question in Open Source Community",paraId:36,tocIndex:10},{value:" and ",paraId:36,tocIndex:10},{value:"How to Report Bugs Effectively",paraId:36,tocIndex:10},{value:" prior to posting. Well written bug reports help us help you!",paraId:36,tocIndex:10},{value:"For questions on how to use antd, please post questions to ",paraId:37,tocIndex:11},{value:"stackoverflow",paraId:37,tocIndex:11},{value:" using the ",paraId:37,tocIndex:11},{value:"antd",paraId:37,tocIndex:11},{value:"/",paraId:37,tocIndex:11},{value:"antd-mobile-rn",paraId:37,tocIndex:11},{value:" tag. If you're not finding what you need on stackoverflow, you can find us on ",paraId:37,tocIndex:11},{value:"gitter",paraId:37,tocIndex:11},{value:" as well.",paraId:37,tocIndex:11},{value:"As always, we encourage experienced users to help those who are not familiar with ",paraId:38,tocIndex:11},{value:"antd",paraId:38,tocIndex:11},{value:"!",paraId:38,tocIndex:11},{value:"Stack Overflow",paraId:39,tocIndex:11},{value:"Segment Fault",paraId:39,tocIndex:11}]},85776:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});const t=[{value:"Note",paraId:0,tocIndex:0},{value:"The ",paraId:1,tocIndex:0},{value:"Ant Design React Native",paraId:1,tocIndex:0},{value:" version starts with the 3.x version** Ant Financial does not maintain the project**, it is now maintained by me ",paraId:1,tocIndex:0},{value:"Github",paraId:1,tocIndex:0},{value:", the previous discussion please checkout",paraId:1,tocIndex:0},{value:"(The new plan) 3.0.0 - Discussion ",paraId:1,tocIndex:0},{value:"Please contact me at: ",paraId:2,tocIndex:2},{value:"sqibang@gmail.com",paraId:2,tocIndex:2}]},93647:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});const t=[{value:"Here list some of main incompatible changes and recommended changes in the upgrade. See ",paraId:0},{value:"Changelog",paraId:1},{value:" for all changes.",paraId:0},{value:"Installing peer dependencies",paraId:2,tocIndex:0},{value:`npm install @ant-design/icons-react-native react-native-gesture-handler react-native-reanimated react-native-worklets
`,paraId:3,tocIndex:0},{value:"or",paraId:4,tocIndex:0},{value:`yarn add @ant-design/icons-react-native react-native-gesture-handler react-native-reanimated react-native-worklets
`,paraId:5,tocIndex:0},{value:"If you have a bare React Native project, you also need to manually add the ",paraId:6,tocIndex:0},{value:"react-native-worklets/plugin",paraId:6,tocIndex:0},{value:" plugin to your ",paraId:6,tocIndex:0},{value:"babel.config.js",paraId:6,tocIndex:0},{value:` module.exports = {
     presets: [
       ... // don't add it here :)
     ],
     plugins: [
       ...
       'react-native-worklets/plugin',
     ],
   };
`,paraId:7,tocIndex:0},{value:"see more details in ",paraId:8,tocIndex:0},{value:"react-native-reanimated installation doc",paraId:8,tocIndex:0},{value:"Installing peer dependencies",paraId:9,tocIndex:1},{value:`npm install @react-native-community/segmented-control @react-native-community/slider react-native-gesture-handler
`,paraId:10,tocIndex:1},{value:"or",paraId:11,tocIndex:1},{value:`yarn add @react-native-community/segmented-control @react-native-community/slider react-native-gesture-handler
`,paraId:12,tocIndex:1},{value:"\n> On the root of the Project, the `App.js/ App.tsx` file probably need import\n",paraId:13},{value:`import 'react-native-gesture-handler';
`,paraId:14,tocIndex:1},{value:"Installing peer dependencies",paraId:15,tocIndex:2},{value:`npm install @react-native-camera-roll/camera-roll @react-native-picker/picker @react-native-community/segmented-control @react-native-community/slider react-native-gesture-handler
`,paraId:16,tocIndex:2},{value:"or",paraId:17,tocIndex:2},{value:`yarn add @react-native-camera-roll/camera-roll @react-native-picker/picker @react-native-community/segmented-control @react-native-community/slider react-native-gesture-handler
`,paraId:18,tocIndex:2},{value:"Installing peer dependencies",paraId:19,tocIndex:3},{value:`npm install @react-native-community/cameraroll @react-native-picker/picker @react-native-community/segmented-control @react-native-community/slider react-native-pager-view react-native-gesture-handler
`,paraId:20,tocIndex:3},{value:"or",paraId:21,tocIndex:3},{value:`yarn add @react-native-community/cameraroll @react-native-picker/picker @react-native-community/segmented-control @react-native-community/slider react-native-pager-view react-native-gesture-handler
`,paraId:22,tocIndex:3},{value:"Installing peer dependencies",paraId:23,tocIndex:4},{value:`npm install @react-native-community/cameraroll @react-native-picker/picker @react-native-community/segmented-control @react-native-community/slider react-native-pager-view
`,paraId:24,tocIndex:4},{value:"or",paraId:25,tocIndex:4},{value:`yarn add @react-native-community/cameraroll @react-native-picker/picker @react-native-community/segmented-control @react-native-community/slider react-native-pager-view
`,paraId:26,tocIndex:4},{value:"You need go to ios folder and run ",paraId:27,tocIndex:4},{value:"pod install",paraId:27,tocIndex:4},{value:" (auto linking)\uFF0CAndroid will handle it by itself.",paraId:27,tocIndex:4},{value:`npx react-native link
`,paraId:28,tocIndex:5},{value:"3.0.0",paraId:29,tocIndex:6},{value:" needs to install ",paraId:29,tocIndex:6},{value:"react-native@0.57.x",paraId:29,tocIndex:6},{value:"Change import to ",paraId:30,tocIndex:6},{value:"import { Button, ... } from '@ant-design/react-native",paraId:30,tocIndex:6},{value:"Change ",paraId:31,tocIndex:6},{value:"LocaleProvider",paraId:31,tocIndex:6},{value:" to ",paraId:31,tocIndex:6},{value:"Provider",paraId:31,tocIndex:6},{value:" and the Provider are required from now on.",paraId:31,tocIndex:6},{value:"Provider",paraId:32,tocIndex:6},{value:`// dynamic theme example ./rn-kitchen-sink/app.js
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
`,paraId:33,tocIndex:6},{value:`Style Customization
\xA0\xA0 - Configure the default global theme style via `,paraId:34,tocIndex:6},{value:"Provider",paraId:34,tocIndex:6},{value:`
\xA0\xA0 - Override local component styles by using styles of the component, without importing all styles of the current component
\xA0\xA0 - There is no need to import a theme style file like 2.x. The current style file returns a function instead of an object.`,paraId:34,tocIndex:6},{value:"Toast",paraId:35,tocIndex:6},{value:" has removed method ",paraId:35,tocIndex:6},{value:"hide",paraId:35,tocIndex:6},{value:"Change ",paraId:36,tocIndex:6},{value:"Grid",paraId:36,tocIndex:6},{value:" property ",paraId:36,tocIndex:6},{value:"onClick",paraId:36,tocIndex:6},{value:" to ",paraId:36,tocIndex:6},{value:"onPress",paraId:36,tocIndex:6},{value:"Link Icon Fonts",paraId:37,tocIndex:6},{value:`react-native link @ant-design/icons-react-native
`,paraId:38,tocIndex:6},{value:"If you are at ",paraId:39,tocIndex:6},{value:"react-native@0.60.x",paraId:39,tocIndex:6},{value:" after you install the package it will link automatically.",paraId:39,tocIndex:6},{value:"or if you want link it manually.",paraId:40,tocIndex:6},{value:`react-native link @ant-design/react-native
`,paraId:41,tocIndex:6},{value:"antd-mobile upgrade-notes",paraId:42,tocIndex:7}]}}]);
