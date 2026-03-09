# Ant Design Mobile RN Semantic Documentation

Aggregated semantic descriptions for all components.

> 34 components with semantic descriptions

# accordion Semantic

Source: https://rn.mobile.ant.design/components/accordion/semantic.md

## Accordion

### Usage Example

```jsx
import { Accordion, List } from '@ant-design/react-native'
import React from 'react'
import { View } from 'react-native'

export default class AccordionExmple extends React.Component<any, any> {
  state = {
    activeSections: [2, 0],
  }
  onChange = (activeSections: number[]) => {
    this.setState({ activeSections })
  }
  render() {
    return (
      <View style={{ marginTop: 80, marginBottom: 10 }}>
        <Accordion
          onChange={this.onChange}
          activeSections={this.state.activeSections}>
          <Accordion.Panel header="Title 1">
            <List>
              <List.Item>Content 1</List.Item>
              <List.Item>Content 2</List.Item>
              <List.Item>Content 3</List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="Title 2">
            this is panel content2 or other
          </Accordion.Panel>
          <Accordion.Panel header="Title 3">
            Text text text text text text text text text text text text text
            text text
          </Accordion.Panel>
        </Accordion>
      </View>
    )
  }
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface AccordionStyle {
  container: ViewStyle
  header: ViewStyle
  arrow: TextStyle
  headerWrap: ViewStyle
  headerText: TextStyle
  content: ViewStyle
  contentText: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<AccordionStyle>({
    container: {
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: theme.border_color_base,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: theme.h_spacing_lg,
      paddingRight: 2 * theme.h_spacing_lg,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: theme.border_color_base,
    },
    arrow: {
      color: theme.color_icon_base,
    },
    headerWrap: {
      flex: 1,
      height: theme.list_item_height,
      alignItems: 'center',
      flexDirection: 'row',
    },
    headerText: {
      color: theme.color_text_base,
      fontSize: theme.font_size_heading,
    },
    content: {
      paddingVertical: theme.v_spacing_md,
      paddingHorizontal: theme.h_spacing_md,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: theme.border_color_base,
    },
    contentText: {
      fontSize: theme.font_size_subhead,
      color: theme.color_text_paragraph,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 容器，包裹整个折叠面板，布局外层容器 -->
<View styles={{ container }} style={...}> 
  <!-- 折叠面板头部，每个面板项的头部区域 -->
  <View styles={{ header }} style={...}> 
    <!-- 头部内容的包裹容器，若 header 不是 React 元素，则显示文本内容用 -->
    <View styles={{ headerWrap }}> 
      <!-- 头部文字内容 -->
      <Text styles={{ headerText }} />
    </View>
    <!-- 箭头图标容器，显示向上或向下箭头 -->
    <View styles={{ arrow }}>
      <!-- 箭头图标，动态显示 up 或 down -->
      <Icon styles={{ arrow }} />
    </View>
  </View>

  <!-- 折叠面板内容区域 -->
  <View styles={{ content }}>
    <!-- 折叠内容文本 -->
    <Text styles={{ contentText }} />
  </View>

  <!-- 
  注：以上头部和内容节点为每个面板项重复渲染的结构
  -->
</View>
```

---

# action-sheet Semantic

Source: https://rn.mobile.ant.design/components/action-sheet/semantic.md

## ActionSheet

### Usage Example

```jsx
import { ActionSheet, Button, Provider } from '@ant-design/react-native'
import React from 'react'
import { Platform, Text, View } from 'react-native'

export default class Test extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      clicked: 'none',
      text: '',
    }
  }
  render() {
    return (
      <Provider>
        <View style={{ marginTop: 30 }}>
          <View style={[{ padding: 8 }]}>
            <Button onPress={this.showActionSheet}>showActionSheet</Button>
          </View>
          <Text style={[{ padding: 8 }]}>
            clicked button: {this.state.clicked}
          </Text>
          <View style={[{ padding: 8 }]}>
            <Button onPress={this.showShareActionSheet}>
              showShareActionSheet
            </Button>
          </View>
          <Text style={[{ padding: 8 }]}>{this.state.text}</Text>
        </View>
      </Provider>
    )
  }
  showActionSheet = () => {
    const BUTTONS = [
      'Operation1',
      'Operation2',
      'Operation3',
      'Delete',
      'Cancel',
    ]
    ActionSheet.showActionSheetWithOptions(
      {
        title: 'Title',
        message: 'Description',
        options: BUTTONS,
        cancelButtonIndex: 4,
        destructiveButtonIndex: 3,
      },
      (buttonIndex: any) => {
        this.setState({ clicked: BUTTONS[buttonIndex] })
      },
    )
  }
  showShareActionSheet = () => {
    const opts: any = {
      message: 'Message to go with the shared url',
      title: 'Share Actionsheet',
    }

    if (Platform.OS === 'ios') {
      opts.url = 'https://www.alipay.com/'
      opts.tintColor = '#ff0000'
      opts.excludedActivityTypes = ['com.apple.UIKit.activity.PostToTwitter']
    }

    ActionSheet.showShareActionSheetWithOptions(
      opts,
      (error: any) => alert(error),
      (success: any, method: any) => {
        let text
        if (success) {
          text = `Shared with ${method}`
        } else {
          text = 'Did not share'
        }
        this.setState({ text })
      },
    )
  }
}

export const title = 'ActionSheet'
export const description = 'ActionSheet example'
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface ActionSheetStyle {
  container: ViewStyle
  wrap: ViewStyle
  content: ViewStyle
  mask: ViewStyle
  title: ViewStyle
  titleText: TextStyle
  message: ViewStyle
  btn: ViewStyle
  btnText: TextStyle
  cancelBtn: ViewStyle
  cancelBtnMask: ViewStyle
  destructiveBtn: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<ActionSheetStyle>({
    container: {
      zIndex: theme.action_sheet_zindex,
    },
    wrap: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
    },
    content: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: theme.fill_base,
    },
    mask: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: theme.fill_mask,
    },
    title: {
      flex: 1,
      alignItems: 'center',
      marginTop: theme.h_spacing_lg,
      marginBottom: theme.h_spacing_lg,
    },
    titleText: {
      fontWeight: '500',
      color: theme.color_text_base,
    },
    message: {
      flex: 1,
      alignItems: 'center',
      marginBottom: theme.h_spacing_lg,
      color: theme.color_text_base,
      textAlign: 'center',
    },
    btn: {
      alignItems: 'center',
      justifyContent: 'center',
      height: theme.actionsheet_item_height,
      borderStyle: 'solid',
      borderTopWidth: 1,
      borderTopColor: theme.border_color_base,
    },
    btnText: {
      color: theme.color_text_base,
    },
    cancelBtn: {
      marginTop: theme.v_spacing_md,
      position: 'relative',
    },
    cancelBtnMask: {
      position: 'absolute',
      top: -theme.v_spacing_md,
      left: 0,
      right: 0,
      height: theme.v_spacing_md,
      backgroundColor: theme.fill_grey,
      borderStyle: 'solid',
      borderTopWidth: 1,
      borderTopColor: theme.border_color_base,
    },
    destructiveBtn: {
      color: theme.brand_error,
      fontSize: theme.actionsheet_item_font_size,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 容器区域，整体包裹 ActionSheet，负责布局 -->
<View styles={{ container }}>
  <!-- 弹窗内容区域，Modal 组件对应的内容样式 -->
  <Modal styles={{ content }}>
    <View>
      <!-- 标题区域，显示标题文字，只在配置有 title 时渲染 -->
      <View styles={{ title }}>
        <!-- 标题文字 -->
        <Text styles={{ titleText }} />
      </View>

      <!-- 信息区域，显示附加文字信息，只在配置有 message 时渲染 -->
      <AntmView styles={{ message }} />

      <!-- 选项列表容器，包含多个按钮项 -->
      <View>
        <!-- 以下为 options 列表中的单个项代表，循环渲染 -->

        <!-- 选项容器，支持取消按钮样式条件应用（cancelBtn） -->
        <View styles={{ cancelBtn }}>
          <!-- 按钮触摸区域，支持按钮基础样式 btn -->
          <TouchableHighlight styles={{ btn }} />

          <!-- 按钮文字，基础样式 btnText，销毁按钮样式 destructiveBtn 条件应用 -->
          <Text styles={{ btnText, destructiveBtn }} />

          <!-- 取消按钮遮罩层，条件渲染 -->
          <View styles={{ cancelBtnMask }} />
        </View>
      </View>
    </View>
  </Modal>
</View>
```

---

# activity-indicator Semantic

Source: https://rn.mobile.ant.design/components/activity-indicator/semantic.md

## ActivityIndicator

### Usage Example

```jsx
import { ActivityIndicator, Button, Flex, WhiteSpace, WingBlank } from '@ant-design/react-native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class ActivityIndicatorExample extends React.Component<
  any,
  any
> {
  closeTimer: any
  constructor(props: any) {
    super(props)
    this.state = {
      animating: false,
    }
    this.loadingToast = this.loadingToast.bind(this)
  }

  componentWillUnmount() {
    clearTimeout(this.closeTimer)
  }

  loadingToast() {
    this.setState({ animating: !this.state.animating })
    this.closeTimer = setTimeout(() => {
      this.setState({ animating: !this.state.animating })
    }, 2000)
  }

  render() {
    return (
      <View style={[styles.demo]}>
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>Icon without text</Text>
            </Flex.Item>
            <Flex.Item>
              <ActivityIndicator />
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>Icon with text</Text>
            </Flex.Item>
            <Flex.Item>
              <ActivityIndicator text="Loading..." />
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>Dark Background</Text>
            </Flex.Item>
            <Flex.Item>
              <View style={[styles.darkBg]}>
                <ActivityIndicator color="#fff" />
              </View>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>Large Size</Text>
            </Flex.Item>
            <Flex.Item>
              <ActivityIndicator size="large" />
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
        <WingBlank>
          <Button onPress={this.loadingToast}>Click to show Toast</Button>
        </WingBlank>
        <ActivityIndicator
          animating={this.state.animating}
          toast
          size="large"
          text="Loading..."
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  demo: {
    marginTop: 20,
  },
  darkBg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 89,
    height: 89,
    backgroundColor: '#2B2F42',
  },
  gray: {
    backgroundColor: '#CCC',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
})
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface ActivityIndicatorStyle {
  container: ViewStyle
  innerContainer: ViewStyle
  wrapper: ViewStyle
  tip: TextStyle
  toast: TextStyle
  spinner: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<ActivityIndicatorStyle>({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'transparent',
      zIndex: theme.toast_zindex,
    },
    innerContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    wrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 89,
      height: 89,
      borderRadius: theme.radius_md,
      backgroundColor: theme.toast_fill,
    },
    tip: {
      color: theme.color_text_base,
      fontSize: theme.font_size_base,
      marginLeft: theme.h_spacing_md,
    },
    toast: {
      color: theme.color_text_base_inverse,
      fontSize: theme.font_size_base,
      marginTop: theme.v_spacing_sm,
    },
    spinner: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
```

### Abstract DOM Structure

```html
<!-- 最外层容器：toast 模式的遮罩容器 -->
<!-- 对应 styles.container：容器布局样式 -->
<View styles={{ container }}>
  <!-- 内部容器，固定高度，居中内容 -->
  <!-- 对应 styles.innerContainer：内层容器样式 -->
  <View styles={{ innerContainer }}>
    <!-- 内容包装容器，水平排列加载指示器和文本 -->
    <!-- 对应 styles.wrapper：包裹加载器和文字区域 -->
    <View styles={{ wrapper }}>
      <!-- RN 内置的加载指示器 -->
      <ActivityIndicator />
      <!-- toast 模式的提示文字 -->
      <!-- 对应 styles.toast：toast 文字样式 -->
      <Text styles={{ toast }} />
    </View>
  </View>
</View>

<!-- 默认 spinner 模式结构，简化示例 -->
<!-- 最外层容器，水平排列加载指示器和文字 -->
<!-- 对应 styles.spinner：普通模式容器样式 -->
<View styles={{ spinner }}>
  <ActivityIndicator />
  <!-- spinner 模式的提示文字 -->
  <!-- 对应 styles.tip：spinner 文字样式 -->
  <Text styles={{ tip }} />
</View>
```

---

# badge Semantic

Source: https://rn.mobile.ant.design/components/badge/semantic.md

## Badge

### Usage Example

```jsx
import { Badge, WhiteSpace } from '@ant-design/react-native'
import React from 'react'
import { ScrollView, View } from 'react-native'

export default class BasicTagExample extends React.Component<any, any> {
  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={{ padding: 20 }}>
          <Badge text={9}>
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>

          <WhiteSpace size="lg" />

          <Badge text={109} overflowCount={100}>
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>

          <WhiteSpace size="lg" />

          <Badge text={109}>
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>

          <WhiteSpace size="lg" />

          <Badge text="new">
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>

          <WhiteSpace size="lg" />

          <Badge text={109} dot>
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>

          <WhiteSpace size="lg" />

          <Badge text={33} corner>
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>
        </View>
      </ScrollView>
    )
  }
}
```

### styles

```tsx
import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface BadgeStyle {
  wrap: ViewStyle
  textCornerWrap: ViewStyle
  dot: ViewStyle
  dotSizelarge: ViewStyle
  textDom: ViewStyle
  textCorner: ViewStyle
  textCornerlarge: ViewStyle
  text: TextStyle
}

const grid = 4

export default (theme: Theme) =>
  StyleSheet.create<BadgeStyle>({
    wrap: {
      flexDirection: 'row',
    },
    textCornerWrap: {
      overflow: 'hidden',
    },
    dot: {
      width: 2 * grid,
      height: 2 * grid,
      borderRadius: grid,
      backgroundColor: theme.brand_important,
      position: 'absolute',
      top: -1 * grid,
      right: -1 * grid,
    },
    dotSizelarge: {
      width: 4 * grid,
      height: 4 * grid,
      borderRadius: 2 * grid,
    },
    textDom: {
      paddingVertical: 0.5 * grid,
      paddingHorizontal: (Platform.OS === 'ios' ? 1.5 : 2) * grid,
      backgroundColor: theme.brand_important,
      borderRadius: 4 * theme.radius_sm,
      borderStyle: 'solid',
      position: 'absolute',
      top: -10,
      right: -15,
    },
    textCorner: {
      width: 18 * grid,
      backgroundColor: theme.brand_important,
      transform: [
        {
          rotate: '45deg',
        },
      ],
      position: 'absolute',
      top: 2 * grid,
    },
    textCornerlarge: {
      width: 26 * grid,
      top: 3 * grid,
    },
    text: {
      color: theme.color_text_base_inverse,
      textAlign: 'center',
    },
  })
```

### Abstract DOM Structure

```html
<!-- 最外层包裹容器，主要用于整体布局和定位 
     对应 styles.wrap：包裹层样式 -->
<View styles={{ wrap }} style={...}>
  <!-- 内容包裹容器，定位 children 和徽标内容 
       对应 styles.textCornerWrap（corner 模式）/ styles.textDomWrap（非 corner 模式） 动态 -->
  <View styles={{ textCornerWrap /* 或 textDomWrap */ }}>
    <!-- 子节点内容（children） -->
    {children}
    <!-- 条件渲染：当 text 或 dot 存在时展示徽标内容 -->
    
    <!-- 普通文本徽标容器 
         视觉用途：承载数字或文字徽标
         对应 styles.textDom，styles.textDomlarge（size 为 large 时） 动态 -->
    <View styles={{ textDom, textDomlarge /* 动态选其一 */ }}>
      <!-- 徽标文字内容 
           对应 styles.text：文本样式 -->
      <Text styles={{ text }}/>
    </View>

    <!-- 点徽标容器（dot 为 true 时显示） 
         视觉用途：小圆点样式徽标
         对应 styles.dot，styles.dotSizelarge（size 为 large 时） 动态 -->
    <View styles={{ dot, dotSizelarge /* 动态选其一 */ }}/>
  </View>
</View>
```

---

# button Semantic

Source: https://rn.mobile.ant.design/components/button/semantic.md

## Button

### Usage Example

```jsx
import { Button, Icon, WhiteSpace, WingBlank } from '@ant-design/react-native'
import React from 'react'

export default () => (
  <WingBlank>
    <WhiteSpace />
    <Button>default</Button>
    <WhiteSpace />
    <Button disabled>default disabled</Button>
    <WhiteSpace />

    <Button type="primary">primary</Button>
    <WhiteSpace />
    <Button type="primary" disabled>
      primary disabled
    </Button>
    <WhiteSpace />

    <Button type="warning">warning</Button>
    <WhiteSpace />
    <Button type="warning" disabled>
      warning disabled
    </Button>
    <WhiteSpace />

    <Button loading>loading button</Button>

    <Button activeStyle={false}>No click feedback</Button>
    <WhiteSpace />
    <Button underlayColor={'blue'}>Custom Underlay</Button>
    <Button activeStyle={{ backgroundColor: 'red' }}>
      custom feedback style
    </Button>
    <WhiteSpace />

    <Button
      styles={{
        rawText: { color: 'darkgray' },
      }}
      style={{
        backgroundColor: 'red',
      }}>
      custon background and text color
    </Button>

    <WingBlank
      style={{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Button type="ghost">ghost</Button>
      <Button type="ghost" disabled>
        ghost disabled
      </Button>
      <Button type="ghost" size="small">
        ghost
      </Button>
    </WingBlank>
    <WhiteSpace />

    <Button type="primary">
      <Icon name="login" />
    </Button>
  </WingBlank>
)
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'
export interface ButtonStyles {
  container: ViewStyle
  defaultHighlight: ViewStyle
  primaryHighlight: ViewStyle
  ghostHighlight: ViewStyle
  warningHighlight: ViewStyle
  wrapperStyle: ViewStyle
  underlayStyle: ViewStyle
  largeRaw: ViewStyle
  largeUnderlayContainerRaw: ViewStyle
  smallRaw: ViewStyle
  smallUnderlayContainerRaw: ViewStyle
  defaultRaw: ViewStyle
  defaultUnderlayContainerRaw: ViewStyle
  primaryRaw: ViewStyle
  primaryUnderlayContainerRaw: ViewStyle
  ghostRaw: ViewStyle
  ghostUnderlayContainerRaw: ViewStyle
  warningRaw: ViewStyle
  warningUnderlayContainerRaw: ViewStyle
  defaultDisabledRaw: ViewStyle
  primaryDisabledRaw: ViewStyle
  ghostDisabledRaw: ViewStyle
  warningDisabledRaw: ViewStyle
  defaultHighlightText: TextStyle
  primaryHighlightText: TextStyle
  ghostHighlightText: TextStyle
  warningHighlightText: TextStyle
  rawText: TextStyle
  largeRawText: TextStyle
  smallRawText: TextStyle
  defaultRawText: TextStyle
  primaryRawText: TextStyle
  ghostRawText: TextStyle
  warningRawText: TextStyle
  defaultDisabledRawText: TextStyle
  primaryDisabledRawText: TextStyle
  ghostDisabledRawText: TextStyle
  warningDisabledRawText: TextStyle
  indicator: ViewStyle
}
export default (theme: Theme) =>
  StyleSheet.create<ButtonStyles>({
    container: {
      flexDirection: 'row',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    defaultHighlight: {
      backgroundColor: `${theme.fill_tap}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
      borderColor: theme.border_color_base,
    },
    primaryHighlight: {
      backgroundColor: `${theme.primary_button_fill_tap}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
      borderColor: theme.primary_button_fill,
    },
    ghostHighlight: {
      backgroundColor: 'transparent',
      borderColor: theme.ghost_button_fill_tap,
    },
    warningHighlight: {
      backgroundColor: `${theme.warning_button_fill_tap}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
      borderColor: theme.warning_button_fill,
    },
    wrapperStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.radius_md,
      borderWidth: 1,
    },
    underlayStyle: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    largeRaw: {
      height: theme.button_height,
    },
    largeUnderlayContainerRaw: {
      paddingLeft: theme.h_spacing_lg,
      paddingRight: theme.h_spacing_lg,
    },
    smallRaw: {
      height: theme.button_height_sm,
    },
    smallUnderlayContainerRaw: {
      paddingLeft: theme.h_spacing_sm,
      paddingRight: theme.h_spacing_sm,
    },
    defaultRaw: {
      backgroundColor: theme.fill_base,
      borderColor: theme.border_color_base,
    },
    defaultUnderlayContainerRaw: {},
    primaryRaw: {
      backgroundColor: theme.primary_button_fill,
      borderColor: theme.primary_button_fill,
    },
    primaryUnderlayContainerRaw: {},
    ghostRaw: {
      backgroundColor: 'transparent',
      borderColor: theme.ghost_button_color,
    },
    ghostUnderlayContainerRaw: {},
    warningRaw: {
      backgroundColor: theme.warning_button_fill,
      borderColor: theme.warning_button_fill,
    },
    warningUnderlayContainerRaw: {},
    defaultDisabledRaw: {
      backgroundColor: theme.fill_disabled,
      borderColor: theme.fill_disabled,
    },
    primaryDisabledRaw: {
      opacity: 0.4,
    },
    ghostDisabledRaw: {
      borderColor: `${theme.color_text_base}1A`, // alpha 10%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    warningDisabledRaw: {
      opacity: 0.4,
    },
    defaultHighlightText: {
      color: `${theme.color_text_base}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    primaryHighlightText: {
      color: `${theme.color_text_base_inverse}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    ghostHighlightText: {
      color: theme.ghost_button_fill_tap, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    warningHighlightText: {
      color: `${theme.color_text_base_inverse}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    rawText: {},
    largeRawText: {
      fontSize: theme.button_font_size,
    },
    smallRawText: {
      fontSize: theme.button_font_size_sm,
    },
    defaultRawText: {
      color: theme.color_text_base,
    },
    primaryRawText: {
      color: theme.color_text_base_inverse,
    },
    ghostRawText: {
      color: theme.ghost_button_color,
    },
    warningRawText: {
      color: theme.color_text_base_inverse,
    },
    defaultDisabledRawText: {
      color: `${theme.color_text_base}4D`, // alpha 30%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    primaryDisabledRawText: {
      color: `${theme.color_text_base_inverse}99`, // alpha 60%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    ghostDisabledRawText: {
      color: `${theme.color_text_base}1A`, // alpha 10%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    warningDisabledRawText: {
      color: `${theme.color_text_base_inverse}99`, // alpha 60%  https://codepen.io/chriscoyier/pen/XjbzAW
    },
    indicator: {
      marginRight: theme.h_spacing_md,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 最外层可点击容器，支持按下高亮效果，控制按钮禁用状态，动态组合应用 size, type, disabled, style 相关样式 -->
<Pressable style={...} styles={{ wrapperStyle, largeRaw, smallRaw, defaultRaw, primaryRaw, ghostRaw, warningRaw,
  defaultDisabledRaw, primaryDisabledRaw, ghostDisabledRaw, warningDisabledRaw }}>
  <!-- 内层遮罩容器，承载按下高亮背景色，动态应用 size, type, underlayColor 和 activeStyle 相关样式，按下时启用 -->
  <View styles={{ underlayStyle, largeUnderlayContainerRaw, smallUnderlayContainerRaw,
    defaultUnderlayContainerRaw, primaryUnderlayContainerRaw, ghostUnderlayContainerRaw, warningUnderlayContainerRaw,
    defaultHighlight, primaryHighlight, ghostHighlight, warningHighlight }} style={...} />
  <!-- 按钮内容容器，布局按钮文本和加载指示器，固定样式 container -->
  <View styles={{ container }}>
    <!-- 条件渲染：加载指示器，按 loading 显示，大小固定，颜色根据按下状态和禁用状态动态计算 -->
    <ActivityIndicator styles={{ indicator }} />
    <!-- 按钮文本容器，动态应用 size, type, disabled, 按下高亮相关文本样式和 activeStyle，承载按钮文字内容 -->
    <AntmView styles={{ rawText, largeRawText, smallRawText, defaultRawText, primaryRawText, ghostRawText, warningRawText,
      defaultDisabledRawText, primaryDisabledRawText, ghostDisabledRawText, warningDisabledRawText,
      defaultHighlightText, primaryHighlightText, ghostHighlightText, warningHighlightText }} style={...} />
  </View>
</Pressable>
```

---

# card Semantic

Source: https://rn.mobile.ant.design/components/card/semantic.md

## Card

### Usage Example

```jsx
import { Card, WhiteSpace, WingBlank } from '@ant-design/react-native'
import React from 'react'
import { Text, View } from 'react-native'

export default class BasicCardExample extends React.Component<any, any> {
  render() {
    return (
      <View style={{ paddingTop: 30 }}>
        <WingBlank size="lg">
          <Card>
            <Card.Header
              title="This is title"
              thumbStyle={{ width: 30, height: 30 }}
              thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              extra="this is extra"
            />
            <Card.Body>
              <View style={{ height: 42 }}>
                <Text style={{ marginLeft: 16 }}>Card Content</Text>
              </View>
            </Card.Body>
            <Card.Footer
              content="footer content"
              extra="footer extra content"
            />
          </Card>
        </WingBlank>
        <WhiteSpace size="lg" />
        <Card full>
          <Card.Header
            title="Full Column"
            thumbStyle={{ width: 30, height: 30 }}
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra="this is extra"
          />
          <Card.Body>
            <View style={{ height: 42 }}>
              <Text style={{ marginLeft: 16 }}>Card Content</Text>
            </View>
          </Card.Body>
          <Card.Footer content="footer content" extra="footer extra content" />
        </Card>
      </View>
    )
  }
}
```

### styles

```tsx
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface CardStyle {
  card: ViewStyle
  full: ViewStyle
  headerWrap: ViewStyle
  headerTitle: ViewStyle
  headerImage: ImageStyle
  headerContentWrap: ViewStyle
  headerContent: TextStyle
  headerExtraWrap: ViewStyle
  headerExtra: TextStyle
  body: ViewStyle
  footerWrap: ViewStyle
  footerContent: TextStyle
  footerExtra: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<CardStyle>({
    card: {
      borderWidth: theme.border_width_md,
      borderColor: theme.border_color_base,
      borderRadius: theme.radius_md,
      paddingBottom: theme.v_spacing_sm,
      flexDirection: 'column',
      backgroundColor: theme.fill_base,
    },
    full: {
      borderRadius: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
    },
    headerWrap: {
      flexDirection: 'row',
      paddingVertical: theme.v_spacing_sm,
      paddingRight: theme.h_spacing_lg,
      marginLeft: theme.h_spacing_lg,
      alignItems: 'center',
    },
    headerTitle: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerImage: {
      marginRight: theme.h_spacing_sm,
    },
    headerContentWrap: {
      flex: 1,
    },
    headerContent: {
      color: theme.color_text_base,
      fontSize: theme.font_size_heading,
      flex: 1,
    },
    headerExtraWrap: {
      flex: 1,
    },
    headerExtra: {
      flex: 1,
      fontSize: theme.font_size_heading,
      color: theme.color_text_caption,
      textAlign: 'right',
    },
    body: {
      flexGrow: 1,
      paddingVertical: theme.v_spacing_md,
      minHeight: 48,
      borderTopWidth: theme.border_width_md,
      borderColor: theme.border_color_base,
    },
    footerWrap: {
      flexDirection: 'row',
      paddingHorizontal: theme.h_spacing_lg,
    },
    footerContent: {
      flex: 1,
      fontSize: theme.font_size_base,
      color: theme.color_text_caption,
    },
    footerExtra: {
      textAlign: 'right',
      fontSize: theme.font_size_base,
      color: theme.color_text_caption,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 卡片容器，最外层包装视图，容纳头部、主体、底部 -->
<!-- 对应 styles.card：卡片基础容器样式 -->
<!-- 对应 styles.full（动态）：当 full 为 true 时，卡片充满容器 -->
<View styles={{ card, full }} style={...}>
  <!-- 头部区域，包含缩略图、标题及额外内容 -->
  <!-- 对应 styles.headerWrap：头部容器样式 -->
  <View styles={{ headerWrap }} style={...}>
    <!-- 头部标题区，包含缩略图与标题文本 -->
    <!-- 对应 styles.headerTitle：标题容器样式 -->
    <View styles={{ headerTitle }} style={...}>
      <!-- 缩略图区域，图片或自定义节点 -->
      <!-- 对应 styles.headerImage：缩略图图片样式 -->
      <Image styles={{ headerImage }} style={...} />
      <!-- 标题内容区 -->
      <!-- 对应 styles.headerContentWrap：标题内容包装器（当标题为 JSX 元素） -->
      <!-- 对应 styles.headerContent：标题文本样式（当标题为字符串或文本） -->
      <!-- 支持 style 基础属性透传：标题文本容器 -->
      { /* 条件渲染 element: 若 title 是 React元素，渲染 <View styles={{headerContentWrap}} />；否则 <Text styles={{headerContent}} /> */ }
      <View styles={{ headerContentWrap }} style={...} />
      <Text styles={{ headerContent }} style={...} />
    </View>
    <!-- 头部额外内容区域 -->
    <!-- 对应 styles.headerExtraWrap：额外内容包装器（当额外内容为 JSX 元素） -->
    <!-- 对应 styles.headerExtra：额外内容文本样式（当额外内容为文本） -->
    { /* 条件渲染 element: 若 extra 是 React元素，渲染 <View styles={{headerExtraWrap}} />；否则 <Text styles={{headerExtra}} /> */}
    <View styles={{ headerExtraWrap }} style={...} />
    <Text styles={{ headerExtra }} style={...} />
  </View>

  <!-- 主体区域，卡片内容区域 -->
  <!-- 对应 styles.body：主体容器样式 -->
  <!-- 支持 style 基础属性透传：主体内容容器 -->
  <View styles={{ body }} style={...} />

  <!-- 底部区域，包含内容和额外信息 -->
  <!-- 对应 styles.footerWrap：底部容器样式 -->
  <View styles={{ footerWrap }} style={...}>
    <!-- 底部主内容区 -->
    <!-- 对应 styles.footerContent：底部内容文本样式 -->
    { /* 条件渲染 element: 若 content 是 React元素，渲染 <View style={{flex: 1}} />；否则 <Text styles={{footerContent}} /> */}
    <View style={{ flex: 1 }} />
    <Text styles={{ footerContent }} style={...} />
    
    <!-- 底部额外内容区（可选） -->
    <!-- 对应 styles.footerExtra：底部额外文本样式 -->
    { /* 条件渲染：extra 存在时 */}
    { /* 条件渲染 element: 若 extra 是 React元素，渲染 <View style={{flex: 1}} />；否则 <Text styles={{footerExtra}} /> */}
    <View style={{ flex: 1 }} />
    <Text styles={{ footerExtra }} style={...} />
  </View>
</View>
```

---

# carousel Semantic

Source: https://rn.mobile.ant.design/components/carousel/semantic.md

## Carousel

### Usage Example

```jsx
import { Button, Carousel } from '@ant-design/react-native'
import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'

export default class BasicCarouselExample extends React.Component<any, any> {
  carousel: null | Carousel
  constructor(props: any) {
    super(props)
    this.state = {
      selectedIndex: 2,
      autoplay: true,
    }
  }
  onHorizontalSelectedIndexChange = (index: number) => {
    /* tslint:disable: no-console */
    console.log('horizontal change to', index)
    this.setState({ selectedIndex: index })
  }
  onVerticalSelectedIndexChange(index: number) {
    /* tslint:disable: no-console */
    console.log('vertical change to', index)
  }
  render() {
    return (
      <ScrollView style={{ paddingTop: 30 }}>
        <View style={{ paddingHorizontal: 15 }}>
          <Text>horizontal</Text>
          <Carousel
            style={styles.wrapper}
            selectedIndex={this.state.selectedIndex}
            autoplay
            infinite
            afterChange={this.onHorizontalSelectedIndexChange}
            ref={(ref) => (this.carousel = ref)}>
            <View
              style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
              <Text>Carousel 1</Text>
            </View>
            <View
              style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}>
              <Text>Carousel 2</Text>
            </View>
            <View
              style={[
                styles.containerHorizontal,
                { backgroundColor: 'yellow' },
              ]}>
              <Text>Carousel 3</Text>
            </View>
            <View
              style={[styles.containerHorizontal, { backgroundColor: 'aqua' }]}>
              <Text>Carousel 4</Text>
            </View>
            <View
              style={[
                styles.containerHorizontal,
                { backgroundColor: 'fuchsia' },
              ]}>
              <Text>Carousel 5</Text>
            </View>
          </Carousel>
          <Button onPress={() => this.carousel && this.carousel.goTo(0)}>
            Go to 0
          </Button>
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <Text>vertical</Text>
          <Carousel
            style={styles.wrapper}
            selectedIndex={1}
            autoplay={this.state.autoplay}
            infinite
            afterChange={this.onVerticalSelectedIndexChange}
            vertical>
            <View
              style={[styles.containerVertical, { backgroundColor: 'red' }]}>
              <Text>Carousel 1</Text>
            </View>
            <View
              style={[styles.containerVertical, { backgroundColor: 'blue' }]}>
              <Text>Carousel 2</Text>
            </View>
            <View
              style={[styles.containerVertical, { backgroundColor: 'yellow' }]}>
              <Text>Carousel 3</Text>
            </View>
            <View
              style={[styles.containerVertical, { backgroundColor: 'aqua' }]}>
              <Text>Carousel 4</Text>
            </View>
            <View
              style={[
                styles.containerVertical,
                { backgroundColor: 'fuchsia' },
              ]}>
              <Text>Carousel 5</Text>
            </View>
          </Carousel>
          <Button
            onPress={() => this.setState({ autoplay: !this.state.autoplay })}>
            {`Toggle autoplay ${this.state.autoplay ? 'true' : 'false'}`}
          </Button>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create<{
  wrapper: ViewStyle
  containerHorizontal: ViewStyle
  containerVertical: ViewStyle
  text: TextStyle
}>({
  wrapper: {
    backgroundColor: '#fff',
    width: '100%',
    height: 150,
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
})
```

### styles

```tsx
import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface CarouselStyle {
  pagination: ViewStyle
  paginationX: ViewStyle
  paginationY: ViewStyle
  pointStyle: ViewStyle
  pointActiveStyle: ViewStyle
  spaceStyle: ViewStyle
  wrapperStyle: ViewStyle
}
export default (theme: Theme) =>
  StyleSheet.create<CarouselStyle>({
    pagination: {
      position: 'absolute',
      alignItems: 'center',
    },
    paginationX: {
      bottom: 10,
      left: 0,
      right: 0,
    },
    paginationY: {
      right: 10,
      top: 0,
      bottom: 0,
    },
    pointStyle: {
      width: 8,
      height: 8,
      borderRadius: 8,
      backgroundColor: theme.color_icon_base,
    },
    pointActiveStyle: {
      backgroundColor: '#888',
    },
    spaceStyle: {
      marginHorizontal: theme.h_spacing_sm / 2,
      marginVertical: theme.v_spacing_sm / 2,
    },
    wrapperStyle: {
      overflow: 'hidden',
    },
  })
```

### Abstract DOM Structure

```html
<!-- 外层容器，整体包裹 Carousel 组件 -->
<View style={this.props.style}>
  <!-- 滚动容器，承载轮播页，支持横向或纵向滑动，分页滚动 -->
  <ScrollView
    styles={{ wrapperStyle }}
    style={...} <!-- 透传 style 基础属性，来自 this.props -->
  >
    <!-- 轮播页面，一个或多个，宽高与 Carousel 组件一致 -->
    <View 
      key="carousel_0" 
      styles={{ wrapperStyle }} <!-- pageStyle 实际应用外部 style，宽高由 state 控制 -->
      style={...} <!-- 透传 style 基础属性，pageStyle 可传递 -->
    >
      <!-- 轮播内容，可能支持懒加载 -->
      <!-- 内容为具体图片或视图 -->
    </View>
    <!-- 以下为重复页面，通常根据 count 个数渲染多个同级 View 页 -->
  </ScrollView>

  <!-- 分页指示器容器，显示轮播点 -->
  <View styles={[pagination, paginationX | paginationY]}>
    <!-- @dynamic vertical: paginationX (水平) / paginationY (垂直) -->
    <View style={{ flexDirection: 'row' | 'column' }}>
      <!-- 每个圆点，多个，展示一个代表 -->
      <View
        styles={[pointStyle, spaceStyle, dotStyle, /* 当前选中时动态添加 pointActiveStyle, dotActiveStyle */]}
      />
      <!-- 多个轮播点同层级 -->
    </View>
  </View>
</View>
```

---

# checkbox Semantic

Source: https://rn.mobile.ant.design/components/checkbox/semantic.md

## Checkbox

### Usage Example

```jsx
import { Button, Checkbox, Flex, List, WingBlank } from '@ant-design/react-native'
import React from 'react'
import { ScrollView } from 'react-native'
const AgreeItem = Checkbox.AgreeItem
const CheckboxItem = Checkbox.CheckboxItem

export default class BasicCheckboxExample extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context)
    this.state = {
      checked: true,
      disabled: false,

      checkBox1: true,
      agreeItem1: true,
      checkboxItem1: true,
    }
  }

  onChange = (e: { target: { checked: boolean } }) => {
    console.log(`checked = ${e.target.checked}`)
  }

  toggleChecked = () => {
    this.setState({ checked: !this.state.checked })
  }

  toggleDisable = () => {
    this.setState({ disabled: !this.state.disabled })
  }
  onChange2 = (e: { target: { checked: boolean } }) => {
    console.log('checked = ', e.target.checked)
    this.setState({
      checked: e.target.checked,
    })
  }

  render() {
    const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${
      this.state.disabled ? 'Disabled' : 'Enabled'
    }`
    return (
      <ScrollView>
        <List renderHeader="基本用法">
          <List.Item
            thumb={<Checkbox onChange={this.onChange}>Checkbox</Checkbox>}
          />
        </List>
        <List renderHeader="不可用">
          <List.Item thumb={<Checkbox defaultChecked={false} disabled />} />
          <List.Item thumb={<Checkbox defaultChecked disabled />} />
        </List>
        <List
          renderHeader="受控的Checkbox"
          renderFooter={
            <Flex>
              <Flex.Item style={{ margin: 10 }}>
                <Button
                  type="primary"
                  size="small"
                  onPress={this.toggleChecked}>
                  {!this.state.checked ? 'Check' : 'Uncheck'}
                </Button>
              </Flex.Item>
              <Flex.Item style={{ margin: 10 }}>
                <Button
                  type="primary"
                  size="small"
                  onPress={this.toggleDisable}>
                  {!this.state.disabled ? 'Disable' : 'Enable'}
                </Button>
              </Flex.Item>
            </Flex>
          }>
          <List.Item
            thumb={
              <Checkbox
                checked={this.state.checked}
                disabled={this.state.disabled}
                onChange={this.onChange2}>
                {label}
              </Checkbox>
            }
          />
        </List>
        <List renderHeader="AgreeItem">
          <AgreeItem>
            Agree agreement agreement agreement agreement agreement agreement
            agreement
          </AgreeItem>
        </List>
        <List renderHeader="CheckboxItem">
          <CheckboxItem
            checked={this.state.checkboxItem1}
            onChange={(event) => {
              this.setState({ checkboxItem1: event.target.checked })
            }}>
            Option 1
          </CheckboxItem>
          <CheckboxItem>Option 2</CheckboxItem>
          <CheckboxItem disabled>Option 3</CheckboxItem>
          <CheckboxItem disabled checked right>
            More...
          </CheckboxItem>
        </List>
        <List
          renderHeader={
            '全选\n在实现全选效果时，你可能会用到 indeterminate 属性。'
          }>
          <CheckboxGroupExample />
        </List>
      </ScrollView>
    )
  }
}

const plainOptions = ['Apple', 'Pear', 'Orange']
const defaultCheckedList = ['Apple', 'Orange']

const CheckboxGroupExample = () => {
  const [checkedList, setCheckedList] = React.useState(
    new Set(defaultCheckedList),
  )
  const [indeterminate, setIndeterminate] = React.useState(true)
  const [checkAll, setCheckAll] = React.useState(false)

  const onChange = (value: any, e: { target: { checked: boolean } }) => {
    if (e.target.checked) {
      checkedList.add(value)
    } else {
      checkedList.delete(value)
    }

    setCheckedList(new Set(checkedList))
    setIndeterminate(
      !!checkedList.size && checkedList.size < plainOptions.length,
    )
    setCheckAll(checkedList.size === plainOptions.length)
  }

  const onCheckAllChange = (e: { target: { checked: boolean } }) => {
    setCheckedList(e.target.checked ? new Set(plainOptions) : new Set())
    setIndeterminate(false)
    setCheckAll(e.target.checked)
  }

  return (
    <>
      <CheckboxItem
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}>
        Check all
      </CheckboxItem>
      <WingBlank>
        {plainOptions.map((a) => (
          <CheckboxItem
            key={a}
            onChange={onChange.bind(this, a)}
            checked={checkedList.has(a)}>
            {a}
          </CheckboxItem>
        ))}
      </WingBlank>
    </>
  )
}
```

### styles

```tsx
import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface CheckboxStyle {
  checkbox_wrapper: ViewStyle
  checkbox_wave: ViewStyle
  checkbox: ViewStyle
  checkbox_checked: ViewStyle
  checkbox_disabled: ViewStyle
  checkbox_inner: ViewStyle
  checkbox_inner_disabled: ViewStyle
  checkbox_inner_before: ViewStyle
  checkbox_inner_before_disabled: ViewStyle
  checkbox_label: ViewStyle
  checkbox_label_disabled: ViewStyle
  checkbox_inner_indeterminate: ViewStyle
  checkbox_inner_before_indeterminate: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<CheckboxStyle>({
    checkbox_wrapper: {
      margin: 0,
      padding: 0,
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox_wave: {
      width: 20,
      height: 20,
      padding: 2,
      overflow: 'hidden',
    },
    checkbox: {
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: 2,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.checkbox_border,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkbox_checked: {
      borderColor: theme.brand_primary,
    },
    checkbox_disabled: {
      borderColor: theme.checkbox_border_disabled,
      backgroundColor: theme.checkbox_fill_disabled,
    },

    // ==========checkbox Inner PrefixCls============
    checkbox_inner: {
      //box-sizing not support in RN
      width: '103%',
      height: '103%',
      backgroundColor: theme.brand_primary,
    },
    checkbox_inner_indeterminate: {
      backgroundColor: 'transparent',
    },
    checkbox_inner_disabled: {
      backgroundColor: theme.checkbox_fill_disabled,
    },

    // ==========inner::after============
    checkbox_inner_before: {
      transform: [{ rotate: '45deg' }],
      position: 'absolute',
      width: 6,
      height: 9,
      bottom: '20%',
      borderWidth: 2,
      borderColor: '#ffffff',
      borderTopWidth: 0,
      borderLeftWidth: 0,
    },
    // 半选状态样式
    checkbox_inner_before_indeterminate: {
      position: 'absolute',
      width: 8,
      height: 8,
      backgroundColor: theme.brand_primary,
    },
    checkbox_inner_before_disabled: {
      borderColor: theme.checkbox_border_disabled,
    },

    // ==========label============
    checkbox_label: {
      backgroundColor: 'transparent',
      marginRight: theme.h_spacing_md,
      marginLeft: theme.h_spacing_md,
      color: theme.color_text_base,
    },
    checkbox_label_disabled: {
      color: theme.color_text_disabled,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 最外层触摸区域容器，用户交互区域，对应 styles.checkbox_wrapper：容器总体样式，支持 style 基础属性透传 -->
<Pressable style={styles={{ checkbox_wrapper } } } style={...}>

  <!-- 波纹效果容器区域，对应 styles.checkbox_wave：波纹动画外层 -->
  <View styles={{ checkbox_wave }}>

    <!-- 复选框主节点，根据选中及禁用状态切换边框和背景色，对应 styles.checkbox, checkbox_checked, checkbox_disabled（动态） -->
    <View styles={{ checkbox, checkbox_checked, checkbox_disabled }}>

      <!-- 复选框内部标记区域，承载勾选或 indeterminate 标记，对应 styles.checkbox_inner, checkbox_inner_disabled, checkbox_inner_indeterminate（动态） -->
      <Animated.View styles={{ checkbox_inner, checkbox_inner_disabled, checkbox_inner_indeterminate }} />

      <!-- 复选框内部前置图形，承载勾选动画或 indeterminate 线条，对应 styles.checkbox_inner_before, checkbox_inner_before_disabled, checkbox_inner_before_indeterminate（动态） -->
      <Animated.View styles={{ checkbox_inner_before, checkbox_inner_before_disabled, checkbox_inner_before_indeterminate }} />

    </View>
  </View>

  <!-- 复选框文本标签区域，对应 styles.checkbox_label, checkbox_label_disabled（动态） -->
  <AntmView styles={{ checkbox_label, checkbox_label_disabled }} />

</Pressable>
```

---

# form Semantic

Source: https://rn.mobile.ant.design/components/form/semantic.md

## Form

### Usage Example

```jsx
import {
  Button,
  Form,
  Input,
  Picker,
  Provider,
  Radio,
  Flex as Row,
  Switch,
} from '@ant-design/react-native'
import type { FormProps } from '@ant-design/react-native/lib/form'
import { district } from 'antd-mobile-demo-data'
import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'


const Col = Row.Item

type FieldType = {
  username?: string
  password?: string
  remember?: string
  isDefault?: boolean
}

const FormExample: React.FC = () => {
  const [form] = Form.useForm()

  const onSubmit = () => {
    form.submit()
  }

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo,
  ) => {
    console.log('Failed:', errorInfo)
  }

  const pickerRef = React.useRef<any>(null)

  return (
    <Provider>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : undefined}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <Form
            name="basic"
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={{
              doorNumber: '',
              username: '',
              phoneNumber: '',
              isDefault: false,
            }}
            renderHeader="水平布局菜单">
            <Form.Item
              label="地址"
              name="address"
              rules={[{ required: true, message: '地址不能为空' }]}
              arrow="horizontal"
              onPress={() => {
                pickerRef.current.toggle()
              }}>
              <Picker data={district} cols={3} ref={pickerRef}>
                {({ extra, value, toggle }) => (
                  <Input
                    value={value?.length ? extra : undefined}
                    onFocus={toggle}
                    placeholder="省/市/区"
                  />
                )}
              </Picker>
            </Form.Item>

            <Form.Item
              label="收货人"
              name="username"
              extra={
                <Form.Item name="gender" noStyle>
                  <Radio.Group>
                    <Row>
                      <Radio value={1}>先生</Radio>
                      <Radio value={2}>女士</Radio>
                    </Row>
                  </Radio.Group>
                </Form.Item>
              }>
              <Input placeholder="请输入收货人姓名" />
            </Form.Item>

            <Form.Item
              label="手机号"
              name="phoneNumber"
              hasFeedback
              validateDebounce={500}
              rules={[{ pattern: /^1[3456789]\d{9}$/ }, { required: true }]}>
              <Input type="number" placeholder="请输入手机号" />
            </Form.Item>

            <Form.Item
              label="设为默认"
              name="isDefault"
              wrapperStyle={{ alignItems: 'flex-end' }}
              valuePropName="checked">
              <Switch />
            </Form.Item>

            <Form.Item>
              <Row>
                <Col style={{ marginRight: 10 }}>
                  <Button onPress={() => form.resetFields()}>重置</Button>
                </Col>
                <Col>
                  <Button type="primary" onPress={onSubmit}>
                    保存
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
          <Form name="vertical" layout="vertical" renderHeader="垂直布局菜单">
            <Form.Item label="问题描述">
              <Input.TextArea
                placeholder="请填写10个字以上的问题描述，以便我们提供更好的服务。"
                maxLength={200}
                showCount
                rows={6}
              />
            </Form.Item>
            <Form.Item
              label="联系电话"
              name="phone"
              help="如您选择填写联系方式，该信息将同步至开发者">
              <Input type="number" placeholder="选填，请填写您的手机号码" />
            </Form.Item>
          </Form>
        </ScrollView>
      </KeyboardAvoidingView>
    </Provider>
  )
}

export default FormExample
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { ListItemStyle, ListStyle } from '../../list/style'
import { Theme } from '../../style'

export interface FormStyle extends ListStyle {}
export interface FormItemStyle extends ListItemStyle {
  formItemLabel: ViewStyle
  formItemLabelText: ViewStyle | TextStyle
  formItemControl: ViewStyle
  asterisk: TextStyle
  optional: TextStyle
}

export interface ValidateStatusStyle {
  error: TextStyle
  warning: TextStyle
  success: TextStyle
  validating: TextStyle
  feedbackIcon: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<Partial<FormItemStyle & ValidateStatusStyle>>({
    formItemLabel: {
      minWidth: theme.prefix_width,
      position: 'relative',
      flexDirection: 'row',
      paddingTop: theme.prefix_padding,
    },
    formItemLabelText: {
      color: theme.color_text_base,
      fontSize: theme.font_size_heading,
    },
    asterisk: {
      position: 'absolute',
      left: -theme.font_size_heading / 2,
      top: theme.prefix_padding,
      color: theme.brand_error,
      fontSize: theme.font_size_heading,
    },
    optional: {
      color: 'rgba(0, 0, 0, 0.45)',
      fontSize: theme.font_size_heading,
    },
    formItemControl: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },

    error: {
      color: theme.brand_error,
    },
    warning: {
      color: theme.brand_warning,
    },
    success: {
      color: theme.brand_success,
    },
    validating: {
      color: theme.brand_primary,
    },
    feedbackIcon: {},
  })
```

### Abstract DOM Structure

```html
<!-- 顶层表单容器，包含整个表单列表，支持样式透传 -->
<FieldForm
  component={AntmList}
  style={...} styles={{ List }}
>
  <!-- 表单列表容器，显示表单项列表 -->
  <AntmList styles={{ List }}>
    <!-- 表单项节点（List.Item），为表单的基本单元，支持基本样式 -->
    <List.Item styles={{ Item }} style={...}>
      <!-- 表单项标签容器，负责渲染label及必选标记 -->
      <View styles={{ formItemLabel }}>
        <!-- 必选星号，条件渲染 -->
        <!-- 对应 styles.asterisk：必填星号样式 -->
        <Text styles={{ asterisk }} />
        <!-- 标签文本容器，支持 labelStyle 叠加 -->
        <!-- 对应 styles.formItemLabelText：标签文本样式 -->
        <AntdView style={...} styles={{ formItemLabelText }} />
        <!-- 可选文字，条件渲染requiredMark='optional'时显示 -->
        <!-- 对应 styles.optional：可选标记样式 -->
        <Text styles={{ optional }} />
      </View>
      <!-- 表单控件容器，包含表单控件及校验错误提示 -->
      <View styles={{ formItemControl }} style={...}>
        <!-- 表单控件（children），典型为输入框或选择器等，支持用户传入任意控件 -->
        {...children}
        <!-- 错误提示列表，条件渲染，有错误或帮助提示时显示 -->
        <Brief styles={{ error, warning, success, validating }}>
          <!-- 错误或帮助提示文本 -->
          ...
        </Brief>
      </View>
      <!-- 验证状态反馈图标，条件渲染hasFeedback为true，动态样式 -->
      <View styles={{ feedbackIcon }}>
        <!-- success, warning, error, validating 状态对应不同图标或loading -->
        <Icon styles={{ success | warning | error | validating }} />
        <ActivityIndicator styles={{ validating }} />
      </View>
      <!-- 分割线，List.Item内部行分割线 -->
      <View styles={{ Line }} />
      <!-- 缩略图，List.Item中的Thumb，支持样式定制 -->
      <Image styles={{ Thumb }} />
    </List.Item>
    <!-- 其它重复的List.Item表示表单中不同项 -->
  </AntmList>
</FieldForm>
```

---

# grid Semantic

Source: https://rn.mobile.ant.design/components/grid/semantic.md

## Grid

### Usage Example

```jsx
import { Grid } from '@ant-design/react-native'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  text: `Name${i}`,
}))

export default class BasicGridExample extends React.Component<any, any> {
  render() {
    return (
      <ScrollView>
        <View style={[{ margin: 10 }]}>
          <Text>Simple</Text>
        </View>
        <View style={[{ padding: 10 }]}>
          <Grid data={data} hasLine={false} />
        </View>

        <View style={[{ margin: 10 }]}>
          <Text>Carousel</Text>
        </View>
        <Grid
          data={data}
          columnNum={3}
          isCarousel
          carouselProps={{
            style: {
              width: '100%',
              height: 320,
            },
          }}
          onPress={(_el: any, index: any) => alert(index)}
        />
        <View style={[{ margin: 10 }]}>
          <Text>Custom GridCell Style</Text>
        </View>
        <Grid
          data={data}
          columnNum={3}
          itemStyle={{ height: 150, backgroundColor: '#ffff00' }}
        />
      </ScrollView>
    )
  }
}
```

### styles

```tsx
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'
export interface GridStyle {
  grayBorderBox: ViewStyle
  icon: ImageStyle
  text: TextStyle
}
export default (theme: Theme) =>
  StyleSheet.create<GridStyle>({
    grayBorderBox: {
      borderColor: theme.border_color_base,
    },
    icon: {
      width: theme.icon_size_md,
      height: theme.icon_size_md,
    },
    text: {
      fontSize: theme.font_size_caption_sm,
      color: theme.color_text_base,
      marginTop: theme.v_spacing_md,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 容器（轮播模式时是 Carousel 组件，否则是 View） -->
<!-- 无样式键，容器用于排列所有行内容 -->
<View>
  <!-- 多行，每行由 Flex 组件表示 -->
  <!-- 每行容器对应 styles.grayBorderBox：灰色边框盒子，用于分隔行 -->
  <Flex styles={{ grayBorderBox }}>
    <!-- 多个单元格，Flex.Item 组件表示 -->
    <!-- 单元格容器对应 styles.grayBorderBox：灰色边框盒子，边框为动态计算，支持 hasLine 控制边线 -->
    <!-- style 透传：itemStyle，可覆盖单元格样式，如大小、边框 -->
    <Flex.Item style={styles.grayBorderBox} style={...}>
      <!-- 单元格内部内容，Flex 组件列布局，支持点击事件 -->
      <Flex styles={{}}>
        <!-- 图标区域 -->
        <!-- 对应 styles.icon：图片样式，尺寸及颜色 -->
        <Image styles={{ icon }} />
        <!-- 文本区域 -->
        <!-- 对应 styles.text：文字样式 -->
        <Text styles={{ text }} />
      </Flex>
    </Flex.Item>

    <!-- 其他单元格依次类推 -->
  </Flex>

  <!-- 多行下一个 Flex 容器 -->

  <!-- 条件渲染：如果 isCarousel && 页数 > 1，整体包装成 Carousel，Carousel 子节点为分页 View -->
  <Carousel>
    <View styles={{ grayBorderBox }}>
      <!-- 多行 Flex 结构同上 -->
      <Flex styles={{ grayBorderBox }}>
        <Flex.Item style={[styles.grayBorderBox, flexItemStyle]} />
        <!-- 省略其他单元格，结构相同 -->
      </Flex>
      <!-- 其他行 -->
    </View>
    <!-- 其他页 -->
  </Carousel>
</View>
```

---

# input Semantic

Source: https://rn.mobile.ant.design/components/input/semantic.md

## Input

### Usage Example

```jsx
import { Input, List } from '@ant-design/react-native'
import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

export default function InputExample() {
  const [value, setValue] = React.useState('')
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : undefined}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <List renderHeader="基本用法">
          <List.Item>
            <Input placeholder="请输入内容" />
          </List.Item>
        </List>
        <List renderHeader="受控模式">
          <List.Item>
            <Input
              placeholder="请输入内容"
              value={value}
              onChangeText={setValue}
            />
          </List.Item>
        </List>
        <List renderHeader="带清除按钮">
          <List.Item>
            <Input allowClear placeholder="allowClear" />
          </List.Item>
        </List>
        <List renderHeader="前缀和后缀">
          <List.Item>
            <Input prefix="前缀" suffix="后缀" placeholder="prefix / suffix" />
          </List.Item>
        </List>
        <List renderHeader="带字数提示">
          <List.Item>
            <Input showCount placeholder="showCount" />
          </List.Item>
          <List.Item>
            <Input
              maxLength={5}
              showCount={{
                formatter: ({ count, maxLength }) => `${count}/${maxLength}`,
              }}
              placeholder="showCount.formatter"
            />
          </List.Item>
        </List>
        <List renderHeader="TextArea">
          <List.Item>
            <Input.TextArea
              rows={4}
              maxLength={100}
              showCount
              allowClear
              placeholder="固定行数 row={4}"
            />
          </List.Item>
        </List>
        <List renderHeader="根据内容自动调整高度">
          <List.Item>
            <Input.TextArea autoSize placeholder="autoSize={true}" />
          </List.Item>
          <List.Item>
            <Input.TextArea
              autoSize={{ minRows: 2, maxRows: 6 }}
              placeholder="autoSize={{ minRows: 2, maxRows: 6 }}"
            />
          </List.Item>
        </List>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'
export interface InputStyle {
  container: ViewStyle
  input: ViewStyle
  clearIcon: ViewStyle
  prefix: ViewStyle | TextStyle
  showCount: TextStyle
  suffix: ViewStyle | TextStyle
  warning: TextStyle
  error: TextStyle
}
export default (theme: Theme) =>
  StyleSheet.create<InputStyle>({
    container: {
      width: '100%',
      maxWidth: '100%',
      maxHeight: '100%',
      minHeight: 24,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
    },
    input: {
      flex: 1,
      overflow: 'hidden',
      width: '100%',
      maxWidth: '100%',
      maxHeight: '100%',
      minHeight: 24,
      fontSize: theme.font_size_heading,
      color: theme.color_text_base,
      paddingVertical: theme.prefix_padding,
      textAlignVertical: 'center',
      includeFontPadding: true,
    },
    clearIcon: {
      backgroundColor: 'rgba(0,0,0,0.2)',
      borderRadius: 15,
      padding: 2,
      marginLeft: theme.prefix_padding,
    },
    prefix: {
      fontSize: theme.font_size_heading,
      color: theme.color_text_base,
      marginRight: theme.prefix_padding,
    },
    showCount: {
      fontSize: theme.font_size_heading,
      color: theme.color_text_placeholder,
      paddingLeft: theme.prefix_padding,
    },
    suffix: {
      fontSize: theme.font_size_heading,
      color: theme.color_text_base,
      marginLeft: theme.prefix_padding,
    },
    warning: {
      color: theme.brand_warning,
    },
    error: {
      color: theme.brand_error,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 容器，包裹整个输入组件区域，对应 styles.container：输入框整体布局样式 -->
<View styles={{ container, style }}>
  <!-- 前缀元素区域（如图标或文字），对应 styles.prefix：前缀区域样式；动态状态样式 statusClassName（styles.error、styles.warning） -->
  <AntmView styles={{ prefix, ...(statusClassName && [statusClassName]) }} />

  <!-- 文字输入框，主要用于用户输入，对应 styles.input：输入框基础样式；动态状态样式 statusClassName（styles.error、styles.warning）；支持外层传入 inputStyle 透传样式 -->
  <TextInput style={styles={{ input, ...(statusClassName && [statusClassName]) }} style={inputStyle} />

  <!-- 清除按钮容器，条件渲染（focus && allowClear && editable && !disabled && innerValue 存在），对应 styles.clearIcon：清除按钮样式 -->
  <TouchableOpacity styles={{ clearIcon }} />

  <!-- 计数文本区域，仅在 showCount 为 true 或对象时展示，对应 styles.showCount：计数文字样式；动态状态样式 statusClassName（styles.error、styles.warning） -->
  <Text styles={{ showCount, ...(statusClassName && [statusClassName]) }} />

  <!-- 后缀元素及状态反馈图标容器，条件渲染（hasFeedback || suffix），对应 styles.suffix：后缀区域样式；动态状态样式 statusClassName（styles.error、styles.warning） -->
  <AntmView styles={{ suffix, ...(statusClassName && [statusClassName]) }} />
  <!-- 反馈图标（如错误、警告图标），条件渲染（hasFeedback） -->
  <!-- feedbackIcon -->
</View>
```

---

# input-item Semantic

Source: https://rn.mobile.ant.design/components/input-item/semantic.md

## InputItem

### Usage Example

```jsx
import { Button, InputItem, List } from '@ant-design/react-native'
import React from 'react'
import { ScrollView, Text } from 'react-native'

declare var jest: any

export default class BasicInputItemExample extends React.Component<any, any> {
  inputRef: any

  constructor(props: any) {
    super(props)
    this.state = {
      value: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      labelnum1: '',
      labelnum2: '',
      labelnum3: '',
      text: '',
      bankCard: '',
      phone: '',
      password: '',
      number: '',
    }
  }

  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}>
        <List renderHeader={'基本'}>
          <InputItem
            clear
            error
            value={this.state.value}
            onChange={(value: any) => {
              this.setState({
                value,
              })
            }}
            extra="元"
            placeholder="有标签">
            输入框
          </InputItem>
          <InputItem
            clear
            value="不可编辑"
            onChange={(value: any) => {
              this.setState({
                value,
              })
            }}
            extra={<Text>元</Text>}
            placeholder="不可编辑"
            editable={false}>
            输入框
          </InputItem>
          <InputItem
            clear
            value="disabled"
            onChange={(value: any) => {
              this.setState({
                value,
              })
            }}
            extra={<Text>元</Text>}
            placeholder="disabled"
            disabled>
            输入框
          </InputItem>
          <InputItem
            clear
            value={this.state.value1}
            onChange={(value: any) => {
              this.setState({
                value1: value,
              })
            }}
            placeholder="无标签"
          />
          <InputItem
            defaultValue="xx"
            clear
            placeholder="自动获取光标"
            autoFocus={
              /* TODO: https://github.com/facebook/jest/issues/3707  */ typeof jest ===
              'undefined'
            }>
            标题
          </InputItem>
          <InputItem
            clear
            placeholder="点击下方按钮该输入框会获取光标"
            ref={(el: any) => (this.inputRef = el)}>
            标题
          </InputItem>
          <List.Item>
            <Button
              onPress={() => {
                this.inputRef.focus()
              }}
              type="primary">
              点击获取光标
            </Button>
          </List.Item>
        </List>
        <List renderHeader={'固定标签字数'}>
          <InputItem
            clear
            value={this.state.labelnum1}
            onChange={(value: any) => {
              this.setState({
                labelnum1: value,
              })
            }}
            labelNumber={2}
            placeholder="两个字标签">
            姓名
          </InputItem>
          <InputItem
            clear
            value={this.state.labelnum2}
            onChange={(value: any) => {
              this.setState({
                labelnum2: value,
              })
            }}
            labelNumber={3}
            placeholder="三个字标签">
            校验码
          </InputItem>
          <InputItem
            clear
            value={this.state.labelnum3}
            onChange={(value: any) => {
              this.setState({
                labelnum3: value,
              })
            }}
            labelNumber={4}
            placeholder="四个字标签（默认）">
            四字标签
          </InputItem>
        </List>
        <List renderHeader={'格式'}>
          <InputItem
            clear
            error
            value={this.state.text}
            onChange={(value: any) => {
              this.setState({
                text: value,
              })
            }}
            placeholder="text">
            文本输入
          </InputItem>
          <InputItem
            clear
            type="bankCard"
            value={this.state.bankcard}
            onChange={(value: any) => {
              this.setState({
                bankcard: value,
              })
            }}
            placeholder="bankCard">
            银行卡
          </InputItem>
          <InputItem
            clear
            type="phone"
            value={this.state.phone}
            onChange={(value: any) => {
              this.setState({
                phone: value,
              })
            }}
            placeholder="phone">
            手机号
          </InputItem>
          <InputItem
            clear
            type="password"
            value={this.state.password}
            onChange={(value: any) => {
              this.setState({
                password: value,
              })
            }}
            placeholder="password">
            密码
          </InputItem>
          <InputItem
            clear
            type="number"
            value={this.state.number}
            onChange={(value: any) => {
              this.setState({
                number: value,
              })
            }}
            placeholder="number">
            数字
          </InputItem>
        </List>
      </ScrollView>
    )
  }
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'
export interface InputItemStyle {
  container: ViewStyle
  text: TextStyle
  input: TextStyle
  inputDisabled: TextStyle
  inputErrorColor: TextStyle
  clear: ViewStyle
  extra: TextStyle
  errorIcon: ViewStyle
}
export default (theme: Theme) =>
  StyleSheet.create<InputItemStyle>({
    container: {
      height: theme.list_item_height + theme.border_width_sm,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: theme.border_color_base,
      marginLeft: theme.h_spacing_lg,
      paddingRight: theme.h_spacing_lg,
      marginTop: 0,
      marginBottom: 0,
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      marginRight: theme.h_spacing_sm,
      textAlignVertical: 'center',
      fontSize: theme.font_size_heading,
      color: theme.color_text_base,
    },
    input: {
      flex: 1,
      // height: theme.list_item_height,
      backgroundColor: 'transparent',
      fontSize: theme.font_size_heading,
      color: theme.color_text_base,
    },
    inputDisabled: {
      backgroundColor: theme.fill_disabled,
      color: theme.color_text_disabled,
    },
    inputErrorColor: {
      color: '#f50',
    },
    clear: {
      backgroundColor: theme.color_icon_base,
      borderRadius: 15,
      padding: 2,
    },
    extra: {
      marginLeft: theme.h_spacing_sm,
      fontSize: theme.font_size_subhead,
      color: theme.color_text_caption,
    },
    errorIcon: {
      marginLeft: theme.h_spacing_sm,
      width: theme.icon_size_sm,
      height: theme.icon_size_sm,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 输入项容器，包裹所有输入相关内容 -->
<!-- 对应 styles.container：容器整体样式，包含边框样式 -->
<View styles={{ container }}>
  <!-- 左侧标签文字区域（如果 children 是字符串） -->
  <!-- 对应 styles.text：标签文本样式，宽度可根据 labelNumber 变量调整 -->
  <!-- 如果 children 是 ReactNode 非字符串，则用 View 包裹，支持自定义内容 -->
  <Text styles={{ text }} />
  <!-- 或者 -->
  <View style={{ /* textStyle 宽度 */ }}></View>

  <!-- 用户输入框 -->
  <!-- 对应 styles.input：输入框文本样式 -->
  <!-- 可能同时叠加样式：styles.inputErrorColor (错误状态)、styles.inputDisabled (禁用状态) -->
  <!-- 支持自定义 style 基础属性透传（由 style 传入） -->
  <Input style={...} styles={{ input, inputErrorColor, inputDisabled }} />

  <!-- 安卓平台下，编辑状态且有输入值时的清除按钮（条件渲染） -->
  <!-- 对应 styles.clear：清除按钮区域样式 -->
  <TouchableOpacity styles={{ clear }} />

  <!-- 右侧额外附加内容区域 -->
  <!-- 对应 styles.extra：额外说明文字样式 -->
  <!-- 可能内容为字符串（Text）或 JSX 节点 -->
  <TouchableWithoutFeedback>
    <View>
      <Text styles={{ extra }} />
      <!-- 或任意 ReactNode -->
    </View>
  </TouchableWithoutFeedback>

  <!-- 错误状态下的错误图标 -->
  <!-- 对应 styles.errorIcon：错误图标容器样式 -->
  <TouchableWithoutFeedback>
    <View styles={{ errorIcon }}>
      <Icon />
    </View>
  </TouchableWithoutFeedback>
</View>
```

---

# list Semantic

Source: https://rn.mobile.ant.design/components/list/semantic.md

## List

### Usage Example

```jsx
import { List } from '@ant-design/react-native'
import React from 'react'
import { Image, ScrollView, View } from 'react-native'

const Item = List.Item
const Brief = Item.Brief

export default class BasicListExample extends React.Component<any, any> {
  render() {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#f5f5f9' }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <List renderHeader={'basic'}>
          <Item data-seed="logId">
            标题文字点击无反馈，文字超长则隐藏，文字超长则隐藏
          </Item>
          <Item wrap>
            文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行
          </Item>
          <Item disabled extra="箭头向右" arrow="horizontal" onPress={() => {}}>
            标题文字
          </Item>
          <Item extra="箭头向下" arrow="down" onPress={() => {}}>
            标题文字
          </Item>
          <Item extra="箭头向上" arrow="up" onPress={() => {}}>
            标题文字
          </Item>
          <Item extra="没有箭头" arrow="empty">
            标题文字
          </Item>
          <Item
            extra={
              <View>
                内容内容
                <Brief style={{ textAlign: 'right' }}>辅助文字内容</Brief>
              </View>
            }
            multipleLine>
            垂直居中对齐
          </Item>
          <Item extra="内容内容" multipleLine>
            垂直居中对齐<Brief>辅助文字内容</Brief>
          </Item>
          <Item
            wrap
            extra="文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行"
            multipleLine
            align="top"
            arrow="horizontal">
            顶部对齐
            <Brief>辅助文字内容辅助文字内容辅助文字内容辅助文字内容</Brief>
            <Brief>辅助文字内容</Brief>
          </Item>
          <Item
            extra={
              <View>
                内容内容
                <Brief style={{ textAlign: 'right' }}>辅助文字内容</Brief>
              </View>
            }
            multipleLine
            align="bottom">
            底部对齐
          </Item>
        </List>
        <List renderHeader={'带缩略图'}>
          <Item thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png">
            thumb
          </Item>
          <Item
            thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            arrow="horizontal">
            thumb
          </Item>
          <Item
            extra={
              <Image
                source={{
                  uri: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
                }}
                style={{ width: 29, height: 29 }}
              />
            }
            arrow="horizontal">
            extra为Image
          </Item>
        </List>
      </ScrollView>
    )
  }
}

export const title = 'List'
export const description = 'List Example'
```

### styles

```tsx
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'
export interface ListStyle {
  List: ViewStyle
  Header: TextStyle
  Footer: TextStyle
  Body: ViewStyle
  BodyBottomLine: ViewStyle
}

export interface ListItemStyle {
  underlayColor: ViewStyle
  Item: ViewStyle
  Line: ViewStyle
  Thumb: ImageStyle
  Content: TextStyle
  Extra: TextStyle
  Arrow: TextStyle
  ArrowV: TextStyle
  multipleLine: ViewStyle
  multipleThumb: ImageStyle
}

export interface BriefStyle {
  Brief: ViewStyle
  BriefText: TextStyle
}

export default (variables: Theme) =>
  StyleSheet.create<ListStyle & ListItemStyle & BriefStyle>({
    List: {
      backgroundColor: variables.fill_body,
    },
    Header: {
      fontSize: variables.font_size_base,
      color: variables.color_text_caption,
      paddingHorizontal: variables.h_spacing_lg,
      paddingTop: variables.v_spacing_lg,
      paddingBottom: variables.v_spacing_md,
    },
    Footer: {
      fontSize: variables.font_size_base,
      color: variables.color_text_caption,
      paddingHorizontal: variables.h_spacing_lg,
      paddingVertical: variables.v_spacing_md,
    },
    Body: {
      position: 'relative',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: variables.border_color_thin,
    },
    BodyBottomLine: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: StyleSheet.hairlineWidth,
      backgroundColor: variables.border_color_thin,
    },

    underlayColor: {
      backgroundColor: variables.fill_tap,
    },
    Item: {
      flexGrow: 1,
      alignItems: 'center',
      flexDirection: 'row',
      paddingLeft: variables.h_spacing_lg,
      backgroundColor: variables.fill_base,
    },
    Line: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: variables.h_spacing_lg,
      paddingVertical: variables.v_spacing_sm,
      minHeight: variables.list_item_height,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: variables.border_color_base,
    },
    Thumb: {
      width: variables.icon_size_md,
      height: variables.icon_size_md,
      marginRight: variables.h_spacing_lg,
    },
    Content: {
      color: variables.color_text_base,
      fontSize: variables.font_size_heading,
      textAlignVertical: 'center',
      flex: 1,
    },
    Extra: {
      color: variables.color_text_caption,
      fontSize: variables.font_size_heading,
      textAlign: 'right',
      textAlignVertical: 'center',
      paddingLeft: variables.h_spacing_md,
      maxWidth: variables.extra_max_width,
    },
    Brief: {
      minHeight: variables.font_size_icontext,
    },
    BriefText: {
      color: variables.color_text_caption,
      fontSize: variables.font_size_subhead,
      paddingTop: variables.v_spacing_xs,
      textAlignVertical: 'center',
    },
    Arrow: {
      marginLeft: variables.h_spacing_md,
      marginTop: variables.v_spacing_xs,
    },
    ArrowV: {
      marginLeft: variables.h_spacing_md,
    },
    multipleLine: {
      paddingVertical: variables.v_spacing_sm,
    },
    multipleThumb: {
      width: variables.icon_size_lg,
      height: variables.icon_size_lg,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 整体列表容器区域，包裹整个列表内容 -->
<View styles={{ List }} style={...}>
  <!-- 头部区域，支持自定义内容渲染 -->
  <!-- 对应 styles.Header：列表头部文字样式 -->
  <!-- 只在有 renderHeader 时渲染 -->
  <Text styles={{ Header }} />
  <!-- 列表主体内容区域，包含所有子元素 -->
  <View styles={{ Body }}>
    <!-- 列表条目，代表至少有一个 List.Item -->
    <!-- 一般由 List.Item 负责渲染，这里以占位示例展示 -->
    <View styles={{ Item }}>
      <!-- 左侧缩略图区域 -->
      <Image styles={{ Thumb }} />
      <!-- 内容区，显示主要文本和额外信息 -->
      <View styles={{ Line }}>
        <!-- 主内容文本 -->
        <Text styles={{ Content }} />
        <!-- 额外内容文本 -->
        <Text styles={{ Extra }} />
        <!-- 箭头图标 -->
        <Text styles={{ Arrow }} />
        <!-- 或竖直箭头样式 -->
        <Text styles={{ ArrowV }} />
      </View>
    </View>
    <!-- 列表项支持多行展示时，Thumb 和 Line 的对应样式 -->
    <!-- 对应 styles.multipleThumb, styles.multipleLine -->
    <!-- 根据 multipleLine 动态应用，动态样式 -->
    <!-- 支持 align 属性：修改 Line 中 alignItems 布局 -->
    <!-- Possible styles: multipleLine, multipleThumb (动态), alignStyle (flex-start/flex-end) -->
    <!-- 注意：上述是 List.Item 内部细节，主体只做示意 -->
    <!-- 这里 children 可能为字符串、ReactNode 或数组，内容包裹在 Content 样式内 -->

    <!-- 列表主体底部分割线 -->
    <View styles={{ BodyBottomLine }} />
  </View>
  <!-- 底部区域，支持自定义内容渲染 -->
  <!-- 对应 styles.Footer：列表尾部文字样式 -->
  <!-- 只在有 renderFooter 时渲染 -->
  <Text styles={{ Footer }} />
</View>
```

---

# modal Semantic

Source: https://rn.mobile.ant.design/components/modal/semantic.md

## Modal

### Usage Example

```jsx
import {
  Button,
  List,
  Modal,
  Provider,
  Switch,
  Toast,
  WhiteSpace,
  WingBlank,
} from '@ant-design/react-native'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

export default class BasicModalExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      visible: false,
      visible1: false,
      visible2: false,
      modalType: 'portal',
    }
  }

  onClose = () => {
    this.setState({
      visible: false,
    })
  }

  onClose1 = () => {
    this.setState({
      visible1: false,
    })
  }

  onClose2 = () => {
    this.setState({
      visible2: false,
    })
  }

  onButtonClick = () => {
    Modal.alert('Title', 'alert content', [
      { text: 'Cancel', onPress: () => console.log('cancel'), style: 'cancel' },
      { text: 'OK', onPress: () => console.log('ok') },
    ])
  }

  onButtonClickPromise = () => {
    Modal.alert('Title', 'promise button', [
      {
        text: 'Cancel',
        onPress: () => {
          Toast.info('onPress promise resolve', 1)
          return new Promise((resolve) => {
            setTimeout(resolve, 1000)
          })
        },
        style: 'cancel',
      },
      {
        text: 'Hold on',
        onPress: () => {
          Toast.info('onPress promise reject', 1)
          return new Promise((_, reject) => {
            setTimeout(reject, 1000)
          })
        },
      },
    ])
  }

  onButtonClick2 = () => {
    Modal.operation([
      { text: '标为未读', onPress: () => console.log('标为未读被点击了') },
      { text: '置顶聊天', onPress: () => console.log('置顶聊天被点击了') },
    ])
  }

  onButtonClick3 = () => {
    Modal.prompt(
      'Login',
      'Pleas input login information',
      (login: any, password: any) =>
        console.log(`login: ${login}, password: ${password}`),
      'login-password',
      '',
      ['Please input name', 'Please input password'],
    )
  }

  onButtonClick4 = () => {
    Modal.prompt(
      'Input password',
      'password message',
      (password: any) => console.log(`password: ${password}`),
      'secure-text',
      'defaultValue',
    )
  }

  onButtonClick5 = () => {
    Modal.prompt(
      'Name',
      'name message',
      (password: any) => console.log(`password: ${password}`),
      'default',
      '',
      ['please input name'],
    )
  }

  onButtonClick6 = () => {
    Modal.operation(
      [
        { text: '标为未读', onPress: () => console.log('标为未读被点击了') },
        { text: '置顶聊天', onPress: () => console.log('置顶聊天被点击了') },
      ],
      () => {
        console.log('返回键点击')
        return false
      },
    )
  }
  render() {
    const footerButtons = [
      { text: 'Cancel', onPress: () => console.log('cancel') },
      { text: 'Ok', onPress: () => console.log('ok') },
    ]
    return (
      <Provider>
        <ScrollView style={{ marginTop: 20 }}>
          <List>
            <List.Item
              extra={
                <Switch
                  style={{ width: 70 }}
                  checked={this.state.modalType === 'modal'}
                  onChange={(val) => {
                    this.setState({ modalType: val ? 'modal' : 'portal' })
                  }}
                  checkedChildren="modal"
                  unCheckedChildren="portal"
                />
              }>
              切换modalType
              <List.Item.Brief>
                `modalType='modal'`时将调用原生Modal{' '}
              </List.Item.Brief>
            </List.Item>
          </List>
          <WingBlank>
            <Button onPress={() => this.setState({ visible: true })}>
              showModal
            </Button>
            <WhiteSpace />
            <Button onPress={() => this.setState({ visible1: true })}>
              transparent:false
            </Button>
            <WhiteSpace />
            <Button onPress={() => this.setState({ visible2: true })}>
              popup
            </Button>
            <WhiteSpace />
            <Button onPress={this.onButtonClick}>Modal.alert</Button>
            <WhiteSpace />
            <Button onPress={this.onButtonClickPromise}>
              Modal.alert (promise)
            </Button>
            <WhiteSpace />
            <Button onPress={this.onButtonClick2}>Modal.opertation</Button>
            <WhiteSpace />
            <Button onPress={this.onButtonClick6}>
              Modal.opertation (onBackHandler)
            </Button>
            <WhiteSpace />
            <Button onPress={this.onButtonClick5}>
              Modal.prompt (default)
            </Button>
            <WhiteSpace />
            <Button onPress={this.onButtonClick3}>
              Modal.prompt (login-password)
            </Button>
            <WhiteSpace />
            <Button onPress={this.onButtonClick4}>
              Modal.prompt (secure-text)
            </Button>
          </WingBlank>
          <Modal
            title="Title"
            transparent
            modalType={this.state.modalType}
            onClose={this.onClose}
            maskClosable
            visible={this.state.visible}
            closable
            footer={footerButtons}>
            <View style={{ paddingVertical: 20 }}>
              <Text style={{ textAlign: 'center' }}>Content...</Text>
              <Text style={{ textAlign: 'center' }}>Content...</Text>
            </View>
            <Button type="primary" onPress={this.onClose}>
              close modal
            </Button>
          </Modal>
          <Modal
            transparent={false}
            modalType={this.state.modalType}
            visible={this.state.visible1}
            animationType="slide-up"
            onClose={this.onClose1}>
            <View style={{ paddingVertical: 220 }}>
              <Text style={{ textAlign: 'center' }}>Content...</Text>
              <Text style={{ textAlign: 'center' }}>Content...</Text>
            </View>
            <Button
              type="primary"
              style={{ marginBottom: 10 }}
              onPress={() => Toast.info('Hello Toast in Modal now works')}>
              {this.state.modalType === 'portal'
                ? 'Hello Toast in Modal now works'
                : "Hello Toast not works when modalType='portal'"}
            </Button>
            <Button type="primary" onPress={this.onClose1}>
              close modal
            </Button>
          </Modal>
          <Modal
            popup
            modalType={this.state.modalType}
            visible={this.state.visible2}
            animationType="slide-up"
            onClose={this.onClose2}>
            <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
              <Text style={{ textAlign: 'center' }}>Content...</Text>
              <Text style={{ textAlign: 'center' }}>Content...</Text>
            </View>
            <Button type="primary" onPress={this.onClose2}>
              close modal
            </Button>
          </Modal>
        </ScrollView>
      </Provider>
    )
  }
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface ModalStyle {
  container: ViewStyle
  wrap: ViewStyle
  popupContainer: ViewStyle
  innerContainer: ViewStyle
  popupSlideUp: ViewStyle
  popupSlideDown: ViewStyle
  footer: ViewStyle
  header: TextStyle
  body: ViewStyle
  maskClosable: ViewStyle
  closeWrap: ViewStyle
  close: TextStyle
  buttonGroupH: ViewStyle
  buttonGroupV: ViewStyle
  buttonWrapH: ViewStyle
  buttonWrapV: ViewStyle
  buttonText: TextStyle
  operationContainer: ViewStyle
  operationBody: ViewStyle
  buttonTextOperation: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<ModalStyle>({
    container: {
      zIndex: theme.modal_zindex,
    },
    wrap: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    popupContainer: {},
    popupSlideUp: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
    popupSlideDown: {},
    innerContainer: {
      borderRadius: theme.radius_md,
      width: 286,
      paddingTop: theme.v_spacing_xl,
      overflow: 'hidden',
      backgroundColor: theme.fill_base,
    },
    footer: {},
    header: {
      fontSize: theme.modal_font_size_heading,
      color: theme.color_text_base,
      textAlign: 'center',
      paddingHorizontal: theme.h_spacing_lg,
    },
    body: {
      paddingTop: 0,
      paddingBottom: theme.v_spacing_lg,
      paddingHorizontal: theme.h_spacing_lg,
    },
    maskClosable: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'transparent',
    },
    closeWrap: {
      position: 'absolute',
      top: theme.v_spacing_xl,
      left: theme.h_spacing_lg,
    },
    close: {
      fontSize: 40,
      fontWeight: '200',
      color: '#bcbcbc',
      lineHeight: 30,
    },
    buttonGroupH: {
      flexGrow: 1,
      flexDirection: 'row',
    },
    buttonGroupV: {
      flexGrow: 1,
      flexDirection: 'column',
    },
    buttonWrapH: {
      height: theme.modal_button_height,
      flexGrow: 1,
      justifyContent: 'center',
      borderColor: theme.border_color_base,
      borderTopWidth: StyleSheet.hairlineWidth,
      borderRightWidth: StyleSheet.hairlineWidth,
      paddingVertical: 11,
    },
    buttonWrapV: {
      flexGrow: 1,
      borderTopWidth: StyleSheet.hairlineWidth,
      borderColor: theme.border_color_base,
      paddingVertical: 11,
    },
    buttonText: {
      textAlign: 'center',
      color: theme.color_link,
      fontSize: theme.modal_button_font_size,
      backgroundColor: 'transparent',
    },
    operationContainer: {
      paddingTop: 0,
    },
    operationBody: {
      paddingBottom: 0,
      paddingHorizontal: 0,
    },
    buttonTextOperation: {
      color: theme.color_text_base,
      textAlign: 'left',
      paddingHorizontal: 15,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 遮罩层容器，屏幕全屏，悬浮遮罩 -->
<View styles={{ container }}>

  <!-- 遮罩层包裹容器 -->
  <View styles={{ wrap }}>
  
    <!-- 遮罩层，点击可关闭遮罩（条件展示，取决于 maskClosable） -->
    <TouchableWithoutFeedback>
      <Animated.View styles={{ maskClosable }}>  <!-- 动态 styles.opacity 用于遮罩显示隐藏动画 -->
        <View styles={{ maskClosable }} />
      </Animated.View>
    </TouchableWithoutFeedback>

    <!-- 弹窗内容容器，支持动画样式（如 slide-up, fade 等） -->
    <Animated.View styles={{ container }}>
    
      <!-- 对话框内容包裹容器，对于popup模式应用：popupContainer、popupSlideUp、popupSlideDown 动态样式 -->
      <View styles={{ innerContainer, popupContainer /* + 动态 popupSlideUp 或 popupSlideDown */ }} style={...}>

        <!-- 头部标题区域，显示标题文本 -->
        <Text styles={{ header }} />

        <!-- 内容区域，包裹 children 视图，支持 body 和 bodyStyle 透传 -->
        <View styles={{ body }} style={...}>
          {children}
        </View>

        <!-- 底部按钮区域，footer区域 -->
        <View styles={{ footer, buttonGroupV or buttonGroupH }}>

          <!-- 按钮列表（示例一个按钮，实际有多个按钮） -->
          <TouchableHighlight>
            <View styles={{ buttonWrapV or buttonWrapH }}>
              <Text styles={{ buttonText or buttonTextOperation }} style={...} />
            </View>
          </TouchableHighlight>
        </View>

        <!-- 关闭按钮区域（条件渲染，当 closable 为 true） -->
        <View styles={{ closeWrap }}>
          <TouchableWithoutFeedback>
            <View>
              <Text styles={{ close }} />
            </View>
          </TouchableWithoutFeedback>
        </View>

      </View>
    </Animated.View>

  </View>
</View>
```

---

# notice-bar Semantic

Source: https://rn.mobile.ant.design/components/notice-bar/semantic.md

## NoticeBar

### Usage Example

```jsx
import {
  Icon,
  List,
  NoticeBar,
  Picker,
  Provider,
  Slider,
  Switch,
  WhiteSpace,
} from '@ant-design/react-native'
import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'

export default function NoticeBarExample() {
  return (
    <Provider>
      <ScrollView style={{ marginBottom: 40 }}>
        {true && (
          <>
            <List renderHeader={'自定义颜色'}>
              <WhiteSpace />
              <NoticeBar>默认</NoticeBar>
              <WhiteSpace />
              <NoticeBar
                styles={{
                  font: { color: '#ffffff' },
                  background: { backgroundColor: '#f4333c' },
                }}>
                错误
              </NoticeBar>
              <WhiteSpace />
              <NoticeBar
                styles={{
                  font: { color: '#108ee9' },
                  background: { backgroundColor: '#d0e4ff' },
                }}>
                信息
              </NoticeBar>
              <WhiteSpace />
            </List>
            <List renderHeader={'可关闭'}>
              <NoticeBar mode="closable">这条通知可以关闭</NoticeBar>
            </List>
            <List renderHeader={'超长滚动'}>
              <WhiteSpace />
              <NoticeBar marqueeProps={{ loop: true }}>
                Notice: I can be a React component, multiple React components,
                or just some text.
              </NoticeBar>
              <WhiteSpace />
              <NoticeBar
                marqueeProps={{
                  loop: true,
                  autoFill: true,
                  trailing: 0,
                  spacing: 10,
                }}>
                autoFill&spacing
              </NoticeBar>
            </List>
            <List renderHeader={'自定义'}>
              <WhiteSpace />
              <NoticeBar
                mode="link"
                onPress={() => {
                  console.log('onPress')
                }}>
                mode="link"
              </NoticeBar>
              <WhiteSpace />
              <NoticeBar
                mode="closable"
                icon={<Icon name="compass" style={{ color: '#f4333c' }} />}
                action={
                  <Icon name="close-circle" style={{ color: '#f4333c' }} />
                }>
                自定义图标
              </NoticeBar>
              <WhiteSpace />
              <NoticeBar
                marqueeProps={{ loop: true, autoFill: true }}
                mode="closable"
                action={<Text style={{ color: '#a1a1a1' }}>不再提示</Text>}>
                自定义右侧功能区 Closable demo for `action`.
              </NoticeBar>
              <WhiteSpace />
            </List>
          </>
        )}
        <List renderHeader={'方向/播放/暂停控制'}>
          <ControlDemo />
        </List>
      </ScrollView>
    </Provider>
  )
}

function ControlDemo() {
  const [play, setPlay] = useState(true)
  const [autoFill, setAutoFill] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right' | 'up' | 'down'>(
    'left',
  )
  const [fps, setFps] = useState(40)
  return (
    <>
      <WhiteSpace />
      <NoticeBar
        marqueeProps={{
          play,
          autoFill,
          direction,
          fps,
          loop: 0,
        }}>
        Notice: I can be a React component, multiple React components, or just
        some text.
      </NoticeBar>
      <WhiteSpace />
      <List.Item extra={<Switch checked={play} onChange={setPlay} />}>
        Play
      </List.Item>
      <List.Item extra={<Switch checked={autoFill} onChange={setAutoFill} />}>
        AutoFill
      </List.Item>
      <Picker
        data={[
          { label: 'Left', value: 'left' },
          { label: 'Right', value: 'right' },
          { label: 'Up', value: 'up' },
          { label: 'Down', value: 'down' },
        ]}
        value={[direction]}
        onChange={(val) => setDirection(val[0] as any)}>
        <List.Item arrow="horizontal">Direction</List.Item>
      </Picker>
      <List.Item>
        <List.Item.Brief>速度fps: {fps}</List.Item.Brief>
        <Slider
          onAfterChange={setFps}
          ticks
          step={10}
          defaultValue={fps}
          popover
        />
      </List.Item>
    </>
  )
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface NoticeBarStyle {
  container: ViewStyle
  font: TextStyle
  background: ViewStyle
  marquee: TextStyle
  iconWrap: ViewStyle
  actionWrap: ViewStyle
  close: TextStyle
  link: TextStyle
}

export default (variables: Theme) =>
  StyleSheet.create<NoticeBarStyle>({
    font: {
      color: variables.brand_error,
    },
    background: {
      backgroundColor: variables.notice_bar_fill,
    },
    container: {
      minHeight: variables.notice_bar_height,
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'center',
    },
    marquee: {
      fontSize: variables.font_size_subhead,
    },
    iconWrap: {
      marginLeft: variables.h_spacing_lg,
      marginRight: variables.h_spacing_sm,
    },
    actionWrap: {
      justifyContent: 'center',
      paddingRight: variables.h_spacing_lg,
      paddingLeft: variables.h_spacing_sm,
    },
    close: {
      fontSize: 18,
      fontWeight: '200',
      textAlign: 'left',
    },
    link: {
      transform: [{ rotate: '225deg' }],
      fontWeight: '500',
      textAlign: 'left',
    },
  })
```

### Abstract DOM Structure

```html
<!-- 整体容器，包裹背景、图标、滚动文本和操作区域；对应 styles.container：容器区域样式 -->
<View styles={{ container, background, style }}>
  <!-- 可选图标容器，放置左侧图标；对应 styles.iconWrap：图标包裹区域 -->
  <View styles={{ iconWrap }}>
    <!-- icon 元素，任意 ReactNode -->
  </View>

  <!-- 滚动文本组件，负责滚动字幕效果；对应 styles.marquee：滚动文本容器样式，styles.font：文本字体样式，支持传入 style 透传 -->
  <Marquee style={...} styles={{ font, marquee }} ref={ref}>
    <!-- 滚动文本内容 -->
  </Marquee>

  <!-- 操作区域容器，展示关闭按钮或链接图标；对应 styles.actionWrap：操作区域包裹容器 -->
  <View styles={{ actionWrap }}>
    <!-- 条件渲染节点 -->
    <!-- 当 mode 为 closable 时 -->
    <!-- 关闭按钮文本或自定义操作内容；对应 styles.close：关闭按钮文本样式，styles.font：字体样式 -->
    <Text styles={{ font, close }} />
    <!-- 当 mode 为 link 或有自定义 action 时 -->
    <!-- 链接图标文本或自定义操作内容；对应 styles.link：链接文本样式，styles.font：字体样式 -->
    <Text styles={{ font, link }} />
  </View>
</View>
<!-- 当 mode 非 closable 时，整体外包裹一个点击区域，用于触发 onPress 事件 -->
<TouchableWithoutFeedback>
  <!-- 上述 View 容器作为子节点 -->
</TouchableWithoutFeedback>
```

---

# pagination Semantic

Source: https://rn.mobile.ant.design/components/pagination/semantic.md

## Pagination

### Usage Example

```jsx
import { Pagination, WhiteSpace, WingBlank } from '@ant-design/react-native'
import React from 'react'

const locale = {
  prevText: '上一步',
  nextText: '下一步',
}

export default class BasicPaginationExample extends React.Component<any, any> {
  render() {
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Pagination total={5} current={1} locale={locale} />

        <WhiteSpace size="lg" />
        <Pagination simple total={5} current={1} locale={locale} />

        <WhiteSpace size="lg" />
        <Pagination mode="number" total={5} current={3} />

        <WhiteSpace size="lg" />
        <Pagination mode="pointer" total={5} current={2} />
      </WingBlank>
    )
  }
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface PaginationStyle {
  container: ViewStyle
  numberStyle: ViewStyle
  totalStyle: TextStyle
  activeTextStyle: TextStyle
  indicatorStyle: ViewStyle
  pointStyle: ViewStyle
  pointActiveStyle: ViewStyle
  spaceStyle: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<PaginationStyle>({
    container: {
      // fix: 高度坍塌 in react-native@0.75+
      // flex: 1,
      justifyContent: 'center',
    },
    numberStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    totalStyle: {
      fontSize: 18,
      color: theme.color_text_base,
    },
    activeTextStyle: {
      fontSize: 18,
      color: theme.color_link,
    },
    indicatorStyle: {
      flexDirection: 'row',
      alignSelf: 'center',
    },
    pointStyle: {
      width: 8,
      height: 8,
      borderRadius: 8,
      backgroundColor: theme.color_icon_base,
    },
    pointActiveStyle: {
      backgroundColor: '#888',
    },
    spaceStyle: {
      marginHorizontal: theme.h_spacing_sm / 2,
      marginVertical: theme.v_spacing_sm / 2,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 最外层容器区域
     对应 styles.container：整体容器样式 -->
<View styles={{ container }}>
  <!-- 模式为 'button'（默认）时，左右两个按钮以及当前页数显示区域 -->
  <Flex>
    <Flex.Item>
      <!-- 上一页按钮文字区域
           支持禁用状态（disabled）
           注意按钮内部自带样式，不在本组件中定义 -->
      <Button>
        <!-- 取消对应 styles，按钮文字内容通过 locale 透传 -->
      </Button>
    </Flex.Item>

    <!-- simple为 false 时，显示当前页数和总页数区域 -->
    <Flex.Item>
      <View styles={{ numberStyle }}>
        <!-- 当前页数文字区域
             对应 styles.activeTextStyle：高亮当前页数 -->
        <Text styles={{ activeTextStyle }} />
        <!-- 总页数文字区域
             对应 styles.totalStyle：总页数显示 -->
        <Text styles={{ totalStyle }} />
      </View>
    </Flex.Item>
    <!-- simple为 true 时，此处 Flex.Item 为空占位 -->

    <Flex.Item>
      <!-- 下一页按钮文字区域
           支持禁用状态（disabled）
           注意按钮内部自带样式，不在本组件中定义 -->
      <Button>
        <!-- 取消对应 styles，按钮文字内容通过 locale 透传 -->
      </Button>
    </Flex.Item>
  </Flex>

  <!-- 模式为 'number' 时，显示当前页数和总页数区域 -->
  <View styles={{ numberStyle }}>
    <!-- 当前页数文字区域
         对应 styles.activeTextStyle：高亮当前页数 -->
    <Text styles={{ activeTextStyle }} />
    <!-- 总页数文字区域
         对应 styles.totalStyle：总页数显示 -->
    <Text styles={{ totalStyle }} />
  </View>

  <!-- 模式为 'pointer' 时，显示圆点指示器 -->
  <View styles={{ indicatorStyle }} style={... /* 支持外部 indicatorStyle 叠加 */}>
    <!-- 圆点列表，代表性示例 -->
    <!-- 单个圆点 -->
    <View styles={{ pointStyle, spaceStyle }} />
    <!-- 当前页对应圆点，高亮样式附加 -->
    <View styles={{ pointStyle, spaceStyle, pointActiveStyle }} />
  </View>
</View>
```

---

# picker Semantic

Source: https://rn.mobile.ant.design/components/picker/semantic.md

## Picker

### Usage Example

```jsx
import {
  Button,
  List,
  Picker,
  PickerValue,
  PickerValueExtend,
  Provider,
} from '@ant-design/react-native'
import { district } from 'antd-mobile-demo-data'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const CustomChildren = (props: any) => (
  <TouchableOpacity onPress={props.onPress}>
    <View
      style={{
        height: 36,
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Text style={{ flex: 1 }}>{props.children}</Text>
      <Text style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>
        {props.extra}
      </Text>
    </View>
  </TouchableOpacity>
)

// visible用法
function BasicDemo() {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState<any[]>([])
  const [extend, setExtend] = useState<any>()
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingLeft: 16,
      }}>
      <Button
        type="primary"
        onPress={() => {
          setVisible(true)
        }}>
        选择
      </Button>

      {/* extend渲染所选值 */}
      <Text>
        {extend?.items?.map((item: any) => item.label).join(',') || ' 未选择'}
      </Text>

      {/* visible控制显示/隐藏 */}
      <Picker
        data={district}
        cols={3}
        onChange={setValue}
        onVisibleChange={(v) => {
          setVisible(v)
        }}
        visible={visible}
        value={value}
        onOk={(v: PickerValue[], ext: PickerValueExtend) => {
          setValue(v)
          setExtend(ext)
        }}
      />
    </View>
  )
}

export default class PopupExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      data: [],
      value: [],
      pickerValue: [],
    }
  }
  onPress = () => {
    setTimeout(() => {
      this.setState({
        data: district,
      })
    }, 500)
  }
  onChange = (value: any) => {
    this.setState({ value })
  }

  render() {
    return (
      <Provider>
        <List renderHeader={'List Children'}>
          <Picker
            data={district}
            cols={3}
            value={this.state.value}
            onChange={this.onChange}>
            <List.Item arrow="horizontal">省市选择</List.Item>
          </Picker>
          <Picker
            data={this.state.data}
            cols={2}
            value={this.state.value}
            onChange={this.onChange}>
            <List.Item arrow="horizontal" onPress={this.onPress}>
              省市选择(异步加载)
            </List.Item>
          </Picker>
          <Picker
            title="选择地区"
            data={district}
            cols={2}
            value={this.state.pickerValue}
            onChange={(v: any) => this.setState({ pickerValue: v })}
            onOk={(v: any) => this.setState({ pickerValue: v })}>
            <CustomChildren>Customized children</CustomChildren>
          </Picker>
        </List>
        <List renderHeader={'visible 控制显示/隐藏'}>
          <BasicDemo />
        </List>
      </Provider>
    )
  }
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { PickerViewStyle } from '../../picker-view/style'
import { Theme } from '../../style'

export interface PickerStyle extends Partial<PickerViewStyle> {
  modal: ViewStyle
  container: ViewStyle
  header: ViewStyle
  headerItem: ViewStyle
  actionText: TextStyle
  title: TextStyle
  okText: TextStyle
  dismissText: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<PickerStyle>({
    modal: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    container: {},
    header: {
      height: theme.picker_header_height,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: theme.border_color_thin,
      backgroundColor: theme.fill_base,
    },
    headerItem: {
      height: theme.picker_header_height,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    actionText: {
      color: theme.brand_primary,
      fontSize: theme.font_size_heading,
      textAlign: 'center',
    },
    okText: {},
    dismissText: {},
    title: {
      color: theme.color_text_caption,
      fontSize: theme.font_size_heading,
      textAlign: 'center',
    },
  })
```

### Abstract DOM Structure

```html
<!-- 整体弹出层容器，包含遮罩层及内容区 -->
<Modal
  styles={{ modal, container }}><!-- 对应 styles.modal：弹出层包装样式（定位、背景遮罩等） -->
                                   <!-- 对应 styles.container：弹出层内容容器（布局与背景） -->

  <!-- 头部区域，包含取消、标题、确定按钮 -->
  <View styles={{ header }}><!-- 对应 styles.header：头部容器布局 -->

    <!-- 取消按钮区域 -->
    <TouchableHighlight styles={{ headerItem }}><!-- 对应 styles.headerItem：按钮位置与尺寸 -->
      <!-- 取消按钮文字 -->
      <Text styles={{ actionText, dismissText }}/><!-- 对应 styles.actionText：按钮文字基础样式 -->
                                           <!-- 对应 styles.dismissText：取消按钮文字差异化样式 -->
    </TouchableHighlight>

    <!-- 标题区域 -->
    <View styles={{ headerItem }}><!-- 对应 styles.headerItem：标题位置与尺寸 -->
      <Text styles={{ title }}/><!-- 对应 styles.title：标题文字样式 -->
    </View>

    <!-- 确定按钮区域 -->
    <TouchableHighlight styles={{ headerItem }}><!-- 对应 styles.headerItem：按钮位置与尺寸 -->
      <!-- 确定按钮文字 -->
      <Text styles={{ actionText, okText }}/><!-- 对应 styles.actionText：按钮文字基础样式 -->
                                        <!-- 对应 styles.okText：确定按钮文字差异化样式 -->
    </TouchableHighlight>
  </View>

  <!-- 选择器视图区域，条件渲染 在弹出层显示时 -->
  <RMCPickerView
    styles={{
      wrappper,
      wheelWrapper,
      itemWrap,
      itemStyle,
      itemActiveStyle,
      mask,
      maskTop,
      maskMiddle,
      maskBottom
    }}
    style={...}><!-- 对应 styles.wrappper：选择器最外层容器 -->
                   <!-- 对应 styles.wheelWrapper：滚轮容器 -->
                   <!-- 对应 styles.itemWrap：单个选择项容器 -->
                   <!-- 对应 styles.itemStyle：普通选项文本样式 -->
                   <!-- 对应 styles.itemActiveStyle：激活状态选项文本样式 -->
                   <!-- 对应 styles.mask：遮罩层总样式 -->
                   <!-- 对应 styles.maskTop：遮罩层上部区域 -->
                   <!-- 对应 styles.maskMiddle：遮罩层中间区域 -->
                   <!-- 对应 styles.maskBottom：遮罩层下部区域 -->
  />
</Modal>

<!-- 触发组件（children），支持函数或 ReactNode -->
<!-- 该节点支持 style 基础属性透传，包含 value、extra、disabled、toggle 事件等 -->
{children}
```

---

# picker-view Semantic

Source: https://rn.mobile.ant.design/components/picker-view/semantic.md

## PickerView

### Usage Example

```jsx
import { List, PickerView } from '@ant-design/react-native'
import React from 'react'
import { ScrollView } from 'react-native'

const basicColumns = [
  [
    { label: '周一', value: 'Mon' },
    { label: '周二', value: 'Tues' },
    { label: '周三', value: 'Wed' },
    { label: '周四', value: 'Thur' },
    { label: '周五', value: 'Fri' },
  ],
  [
    { label: '上午', value: 'am' },
    { label: '下午', value: 'pm' },
  ],
]

export default class PickerViewExample extends React.Component {
  state = {
    value: undefined,
  }
  onChange = (value: any) => {
    this.setState({
      value,
    })
  }
  render() {
    return (
      <ScrollView
        nestedScrollEnabled // 🚩 Enables nested scrolling for Android API level 21+. Nested scrolling is supported by default on iOS.
      >
        <List renderHeader={'基础用法'}>
          <PickerView data={basicColumns} cascade={false} />
        </List>
        <List renderHeader={'自定义高度'}>
          <PickerView
            data={basicColumns}
            cascade={false}
            style={{ height: 450 }}
            itemHeight={55}
            itemStyle={{
              padding: 0,
            }}
          />
        </List>
        <List renderHeader={'受控模式'}>
          <PickerView
            onChange={this.onChange}
            value={this.state.value}
            data={basicColumns}
            cascade={false}
          />
        </List>
      </ScrollView>
    )
  }
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface PickerViewStyle {
  wrappper: ViewStyle
  wheelWrapper: ViewStyle
  itemWrap: ViewStyle
  itemStyle: TextStyle
  itemActiveStyle: TextStyle
  mask: ViewStyle
  maskTop: ViewStyle
  maskMiddle: ViewStyle
  maskBottom: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<PickerViewStyle>({
    wrappper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: theme.fill_base,
    },
    wheelWrapper: {
      zIndex: 1,
      display: 'flex',
      flexDirection: 'row',
    },

    itemWrap: {
      overflow: 'hidden',
      justifyContent: 'center',
      height: theme.picker_item_height,
      paddingHorizontal: theme.h_spacing_sm,
    },
    itemStyle: {
      fontSize: theme.font_size_caption,
      color: theme.color_text_base,
      textAlign: 'center',
      includeFontPadding: false,
    },
    itemActiveStyle: {},

    mask: {
      position: 'absolute',
      zIndex: 2,
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    maskTop: {
      flex: 1,
      overflow: 'hidden',
    },
    maskMiddle: {
      borderColor: theme.border_color_thin,
      borderTopWidth: StyleSheet.hairlineWidth,
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    maskBottom: {
      flex: 1,
      overflow: 'hidden',
    },
  })
```

### Abstract DOM Structure

```html
<!-- 整体容器，包含所有轮子及遮罩层
  对应 styles.wrappper：容器整体布局样式
  对应 style 基础属性：支持外层自定义样式透传 -->
<View style={style} styles={{ wrappper }}>
  <!-- 轮子包裹容器，高度动态由内部测量与外层布局决定
    对应 styles.wheelWrapper：轮子区域包裹样式 -->
  <View styles={{ wheelWrapper }}>

    <!-- 条件渲染：加载 loading 时显示的 loading 容器 -->
    <!-- loading 状态下显示 loading 内容或默认 ActivityIndicator -->
    <View style={{ flex: 1, alignSelf: 'center' }}>
      <!-- loading 动画指示器 -->
      <ActivityIndicator style={p.indicatorStyle || {}} />
    </View>

    <!-- 非 loading 时，轮子列表映射，每一个表示一列 -->
    <!-- 以下示例只展示一个 Wheel 组件，表示一个轮子 -->
    <!-- Wheel 组件内部展示可滚动选择的 Picker 项 -->
    <Wheel
      index={0}
      column={[] /* 当前列数据 */}
      value={undefined /* 当前列选中值 */}
      onSelect={() => {} /* 选中回调 */}
      itemHeight={0 /* 每项高度 */}
      wheelHeight={0 /* 轮子高度 */}
      renderLabel={() => <View styles={{ itemWrap }}>
        <!-- 单个选项容器，固定高度，包裹文本 -->
        <Text styles={{ itemStyle, itemActiveStyle }}>
          <!-- 选项文本内容 -->
        </Text>
      </View>}
      styles={{ /* Wheel 内部未暴露样式，视为功能组件 */ }}
    />

  </View>

  <!-- 遮罩层整体，覆盖在 Wheel 组件上，禁止触摸穿透
    对应 styles.mask：遮罩层容器样式 -->
  <View styles={{ mask }} pointerEvents="none">

    <!-- 遮罩层顶部区域，用于渐隐效果等视觉表现
        对应 styles.maskTop：顶部渐变遮罩样式 -->
    <View styles={{ maskTop }}>
      <!-- 自定义渲染的顶部遮罩内容 -->
    </View>

    <!-- 遮罩层中间区域，通常为高亮显示区，使中间项突出
        对应 styles.maskMiddle：中间区域高亮遮罩样式
        动态 height 绑定 itemHeight -->
    <View styles={{ maskMiddle }} />

    <!-- 遮罩层底部区域，用于渐隐效果等视觉表现
        对应 styles.maskBottom：底部渐变遮罩样式 -->
    <View styles={{ maskBottom }}>
      <!-- 自定义渲染的底部遮罩内容 -->
    </View>

  </View>
</View>
```

---

# popover Semantic

Source: https://rn.mobile.ant.design/components/popover/semantic.md

## Popover

### Usage Example

```jsx
import { List, Popover } from '@ant-design/react-native'
import React from 'react'
import { Easing, StyleSheet, Text, View } from 'react-native'

const Item = Popover.Item

export default class PopoverExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      selected: '',
    }
  }

  onSelect = (value: any) => {
    this.setState({
      // visible: false,
      selected: value,
    })
  }
  render() {
    let overlay = [1, 2, 3].map((i, index) => (
      <Item key={index} value={`option ${i}`}>
        <Text>option {i}</Text>
      </Item>
    ))
    overlay = overlay.concat([
      <Item key="4" value="disabled" disabled>
        <Text style={{ color: '#ddd' }}>disabled opt</Text>
      </Item>,
      <Item key="6" value="button ct" style={{ backgroundColor: '#efeff4' }}>
        <Text>关闭</Text>
      </Item>,
    ])
    return (
      <React.Fragment>
        <List>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) =>
            this.renderList(overlay, item),
          )}
        </List>
        <Popover
          overlay={
            <Popover.Item value={'test'}>
              <Text>自定义组件 x</Text>
            </Popover.Item>
          }
          renderOverlayComponent={(nodes) => (
            <View>
              <Text
                style={{
                  paddingHorizontal: 9,
                  paddingTop: 16,
                  color: '#2b2b2b',
                  fontWeight: 'bold',
                }}>
                我是自定义组件title
              </Text>
              {nodes}
            </View>
          )}>
          <Text
            style={{
              margin: 16,
            }}>
            自定义组件
          </Text>
        </Popover>
        <Popover
          overlay={overlay}
          useNativeDriver
          duration={200}
          easing={(show) => (show ? Easing.in(Easing.ease) : Easing.step0)}>
          <Text
            style={{
              margin: 16,
            }}>
            自定义动画
          </Text>
        </Popover>
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              margin: 16,
              color: 'red',
            }}>
            如果你设置了 placement 属性请确保你的内容够位置显示，默认是 auto
            自动计算位置
          </Text>
          {['left', 'right', 'top', 'bottom'].map((p) => (
            <Popover
              key={p}
              overlay={
                <Popover.Item value={p}>
                  <Text>自定义组件 {p}</Text>
                </Popover.Item>
              }
              placement={p as any}>
              <Text
                style={{
                  margin: 16,
                }}>
                {p}
              </Text>
            </Popover>
          ))}
        </View>
      </React.Fragment>
    )
  }

  private renderList(overlay: React.ReactNode[], key: number) {
    return (
      <List.Item
        key={key}
        extra={
          <Popover
            overlay={overlay}
            triggerStyle={styles.triggerStyle}
            onSelect={(v) =>
              this.setState({
                [`selected${key}`]: v,
              })
            }>
            <Text>菜单</Text>
          </Popover>
        }>
        <View>
          <Text>选择了：{this.state[`selected${key}`]}</Text>
        </View>
      </List.Item>
    )
  }
}

const styles = StyleSheet.create({
  triggerStyle: {
    paddingHorizontal: 6,
  },
})

export const title = 'Popover'
export const description = 'Popover example'
```

### styles

```tsx
import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface PopoverStyle {
  content: ViewStyle
  arrow: ViewStyle
  background: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<PopoverStyle>({
    content: {
      backgroundColor: theme.fill_base,
      borderRadius: theme.radius_sm,
      padding: 0,
      elevation: 3,
    },
    arrow: {
      borderTopColor: 'transparent',
    },
    background: {
      backgroundColor: 'transparent',
    },
  })
```

### Abstract DOM Structure

```html
<!-- 触发弹出层的按钮区域，包含触发区域的自定义样式 -->
<TouchableOpacity style={...}>

  <!-- 触发区域内容，由调用者传入，可自定义 -->
  {children}

</TouchableOpacity>

<!-- 弹出层容器，样式可通过 styles.content 控制弹出层内容区域外观 -->
<View styles={{ content }}>

  <!-- 弹出层指示箭头，样式可通过 styles.arrow 控制箭头外观 -->
  <View styles={{ arrow }}/>

  <!-- 弹出层背景遮罩，样式可通过 styles.background 控制遮罩层视觉 -->
  <View styles={{ background }}/>

  <!-- 弹出层内容区域，包含滚动容器，承载所有弹出项 -->
  <ScrollView>

    <!-- 弹出项示例，多个弹出项为列表形式，这里展示一个代表 -->
    <!-- 
      弹出项可选状态 disabled，支持外部传入样式 style 叠加
      弹出项基础样式由主题 spacing 控制内边距
      点击时触发 onSelect 回调
    -->
    <TouchableOpacity styles={{ /* 基础内边距由 theme.v_spacing_md 控制 */ }} style={...}/>

  </ScrollView>
</View>
```

---

# progress Semantic

Source: https://rn.mobile.ant.design/components/progress/semantic.md

## Progress

### Usage Example

```jsx
import { Button, Progress, WhiteSpace } from '@ant-design/react-native'
import React from 'react'
import { Text, View, ViewStyle } from 'react-native'

export default class BasicProgressExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      percent: 40,
    }
  }

  onAdd = () => {
    let p = this.state.percent + 10
    if (this.state.percent >= 100) {
      p = 0
    }
    this.setState({ percent: p })
  }

  render() {
    const style = {
      marginTop: 80,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }
    return (
      <View>
        <Progress percent={90} position="fixed" />

        <View style={[style as ViewStyle]}>
          <View style={{ marginRight: 10, height: 4, flex: 1 }}>
            <Progress percent={this.state.percent} />
          </View>
          <Text>{this.state.percent}%</Text>
        </View>
        <Button
          style={{ width: 50, marginLeft: 10 }}
          type="ghost"
          size="small"
          onPress={this.onAdd}>
          (+-)10
        </Button>

        <WhiteSpace />
        <Progress percent={5} />
      </View>
    )
  }
}
```

### styles

```tsx
import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'
export interface ProgressStyle {
  progressOuter: ViewStyle
  progressBar: ViewStyle
}
export default (theme: Theme) =>
  StyleSheet.create<ProgressStyle>({
    progressOuter: {
      backgroundColor: theme.border_color_base,
      flex: 1,
    },
    progressBar: {
      borderBottomWidth: 4,
      borderStyle: 'solid',
      borderColor: theme.brand_primary,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 进度条外层容器，负责限制进度条整体宽度和定位 -->
<!-- 对应 styles.progressOuter：外层容器的基础样式，如背景色、尺寸等 -->
<!-- 对应 style 基础属性：支持自定义外层容器样式，如 margin、padding、背景色等 -->
<View style={...}>
  <!-- 进度条填充部分，宽度动态反映进度百分比 -->
  <!-- 对应 styles.progressBar：进度条填充颜色和高度等基础样式 -->
  <!-- 对应 style 基础属性：支持自定义进度条样式，如背景色 -->
  <View style={...} />
  <!-- 当 appearTransition 为 true 时，使用 Animated.View 代替普通 View，实现渐变动画 -->
  <!-- 条件渲染：appearTransition === true 则渲染 Animated.View -->
  <Animated.View style={...} />
</View>
```

---

# radio Semantic

Source: https://rn.mobile.ant.design/components/radio/semantic.md

## Radio

### Usage Example

```jsx
import { Button, Flex, List, Radio, WingBlank } from '@ant-design/react-native'
import React from 'react'
import { ScrollView } from 'react-native'
const RadioItem = Radio.RadioItem

type RadioValue = string | number
interface EventRadioGroup {
  target: { value: RadioValue }
}

interface EventRadioItem {
  target: { checked: boolean }
}
export default class BasicRadioExample extends React.Component<any, any> {
  state = {
    disabled: false,
    part1Value: 1,
    part2Value: 1,
    part3Value: 1,
  }

  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    })
  }

  onChange = (part1Value: any, e: EventRadioItem) => {
    if (e.target.checked) {
      this.setState({ part1Value })
    }
  }

  onGroupChange2 = (e: EventRadioGroup) => {
    this.setState({
      part2Value: e.target.value,
    })
  }

  onGroupChange3 = (e: EventRadioGroup) => {
    this.setState({
      part3Value: e.target.value,
    })
  }

  render() {
    return (
      <ScrollView>
        <List renderHeader="基本用法">
          <List.Item thumb={<Radio>Radio</Radio>} />
        </List>
        <List
          renderHeader="不可用"
          renderFooter={
            <Button type="primary" onPress={this.toggleDisabled}>
              Toggle disabled
            </Button>
          }>
          <List.Item>
            <Flex>
              <Radio defaultChecked={false} disabled={this.state.disabled}>
                Disabled
              </Radio>
              <WingBlank />
              <Radio disabled={this.state.disabled}>Disabled</Radio>
            </Flex>
          </List.Item>
        </List>
        <List renderHeader="RadioItem">
          <RadioItem
            checked={this.state.part1Value === 1}
            onChange={this.onChange.bind(this, 1)}>
            Use Ant Design Component
          </RadioItem>
          <RadioItem
            checked={this.state.part1Value === 2}
            onChange={this.onChange.bind(this, 2)}>
            Use Ant Design Component
          </RadioItem>
        </List>
        <List renderHeader={'单选组合 RadioGroup\n一组互斥的 Radio 配合使用'}>
          <Radio.Group
            onChange={this.onGroupChange2}
            value={this.state.part2Value}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: 6,
            }}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
          </Radio.Group>
        </List>
        <List
          renderHeader={
            'Radio.Group 垂直\n垂直的 Radio.Group，配合更多输入框选项'
          }>
          <Radio.Group
            onChange={this.onGroupChange3}
            value={this.state.part3Value}>
            <RadioItem value={1}>Option A</RadioItem>
            <RadioItem value={2}>Option B</RadioItem>
            <RadioItem value={3}>Option C</RadioItem>
            <RadioItem value={4} left>
              More...
            </RadioItem>
          </Radio.Group>
        </List>
        <List
          renderHeader={
            'Radio.Group 组合 - 配置方式\n可通过配置 options 参数来渲染单选框。'
          }>
          <RadioGroupExample />
        </List>
      </ScrollView>
    )
  }
}

const plainOptions = ['Apple', 'Pear', 'Orange']
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
]
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
]

class RadioGroupExample extends React.Component {
  state = {
    value1: 'Apple',
    value2: 'Apple',
    value3: 'Apple',
  }

  onChange1 = (e: EventRadioGroup) => {
    console.log('radio1 checked', e.target.value)
    this.setState({
      value1: e.target.value,
    })
  }

  onChange2 = (e: EventRadioGroup) => {
    console.log('radio2 checked', e.target.value)
    this.setState({
      value2: e.target.value,
    })
  }

  onChange3 = (e: EventRadioGroup) => {
    console.log('radio3 checked', e.target.value)
    this.setState({
      value3: e.target.value,
    })
  }

  render() {
    const { value1, value2, value3 } = this.state
    return (
      <>
        <List renderHeader="PlainOptions">
          <Radio.Group
            options={plainOptions}
            onChange={this.onChange1}
            value={value1}
          />
        </List>
        <List renderHeader="Options">
          <Radio.Group
            options={options}
            onChange={this.onChange2}
            value={value2}
          />
        </List>
        <List renderHeader="OptionsWithDisabled">
          <Radio.Group
            options={optionsWithDisabled}
            onChange={this.onChange3}
            value={value3}
          />
        </List>
      </>
    )
  }
}
```

### styles

```tsx
import { StyleSheet, TextStyle } from 'react-native'
import { Theme } from '../../style'

export interface RadioItemStyle {
  radioItemContent: TextStyle
  radioItemContentDisable: TextStyle
}

// only for Checkbox themeStyles func
export default (theme: Theme) =>
  StyleSheet.create({
    checkbox_wave: { borderRadius: 999 },
    checkbox: { borderRadius: 999 },
    checkbox_inner: { width: 0, height: 0 },
    checkbox_inner_before: {
      width: 8,
      height: 8,
      borderRadius: 999,
      backgroundColor: theme.brand_primary,
      borderWidth: 0,
    },
    checkbox_inner_before_disabled: {
      backgroundColor: '#0003',
    },
    radioItemContent: {
      color: theme.color_text_base,
      marginRight: theme.h_spacing_md,
      marginLeft: theme.h_spacing_md,
    },
    radioItemContentDisable: {
      color: theme.color_text_disabled,
    },
  })
```

### Abstract DOM Structure

```html
<!-- List.Item 列表项容器，承载单个 RadioItem -->
<!-- 
  对应 styles.radioItemContent：文本内容样式，字体颜色、大小等
  对应 styles.radioItemContentDisable：禁用时文本样式
  对应 style 基础属性：外层容器样式透传（如 margin/padding/background 等）
-->
<List.Item
  style={...}  <!-- style 基础属性透传 -->
  disabled={false}
  accessibilityRole="radio"
  accessibilityState={{ checked: false, disabled: false }}
  onPress={() => {}}
  thumb={/* 左侧当 left 为 true 时的 Radio 组件 */}
  extra={/* 右侧当 right 为 true 时的 Radio 组件 */}
>
  <!-- 文本内容，最多一行，显示 children -->
  <Text
    style={{
      radioItemContent,          /* 一般文本样式 */
      radioItemContentDisable,   /* 禁用时文本样式 */
    }}
    numberOfLines={1}
  />
</List.Item>
```

---

# result Semantic

Source: https://rn.mobile.ant.design/components/result/semantic.md

## Result

### Usage Example

```jsx
import { Result } from '@ant-design/react-native'
import React from 'react'
import { Image, ScrollView, Text } from 'react-native'

export default class ResultExample extends React.Component<any, any> {
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#F5F5F9', flex: 1 }}>
        <Text style={{ margin: 10, color: '#999' }}>URI 图片</Text>
        <Result
          imgUrl={{
            uri: 'https://zos.alipayobjects.com/rmsportal/GcBguhrOdlYvGfnsXgrE.png',
          }}
          title="验证成功"
          message="所提交内容已成功完成验证"
        />

        <Text style={{ margin: 10, color: '#999' }}>Image source</Text>
        <Result
          imgUrl={require('./alipay.png')}
          title="验证成功"
          message="所提交内容已成功完成验证"
        />

        <Text style={{ margin: 10, color: '#999' }}>Image element</Text>
        <Result
          img={
            <Image
              source={require('./alipay.png')}
              style={{ width: 60, height: 60 }}
            />
          }
          title="验证成功"
          message={<Text>所提交内容已成功完成验证</Text>}
        />

        <Text style={{ margin: 10, color: '#999' }}>含 button 操作</Text>
        <Result
          img={
            <Image
              source={require('./alipay.png')}
              style={{ width: 60, height: 60 }}
            />
          }
          title="验证成功"
          message="所提交内容已成功完成验证"
          buttonText="完成"
          buttonType="primary"
          onButtonClick={(e: any) => alert(e.toString())}
        />
      </ScrollView>
    )
  }
}
```

### styles

```tsx
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface ResultStyle {
  result: ViewStyle
  imgWrap: ViewStyle
  img: ImageStyle
  title: ViewStyle
  titleText: TextStyle
  message: ViewStyle
  messageText: TextStyle
  buttonWrap: ViewStyle
  button: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<ResultStyle>({
    result: {
      alignItems: 'center',
      paddingVertical: theme.v_spacing_xl,
      backgroundColor: theme.fill_base,
      borderBottomColor: theme.border_color_base,
    },
    imgWrap: {
      margin: 0,
    },
    img: {
      width: 60,
      height: 60,
    },
    title: {
      marginTop: theme.v_spacing_lg,
      paddingHorizontal: theme.h_spacing_lg,
    },
    titleText: {
      fontSize: 21,
      color: theme.color_text_base,
    },
    message: {
      marginTop: theme.v_spacing_lg,
      paddingHorizontal: theme.h_spacing_lg,
    },
    messageText: {
      fontSize: theme.font_size_caption,
      color: theme.color_text_caption,
    },
    buttonWrap: {
      flexDirection: 'row',
      marginTop: theme.v_spacing_lg,
      paddingHorizontal: theme.h_spacing_lg,
    },
    button: {
      flex: 1,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 整体结果容器，包含所有结果内容 -->
<!-- 对应 styles.result：结果容器布局 -->
<View style={[styles.result, style]}>

  <!-- 图标区域容器，包裹图片或自定义图标节点 -->
  <!-- 对应 styles.imgWrap：图标容器定位和尺寸 -->
  <View style={styles.imgWrap} />

  <!-- 标题区域容器 -->
  <!-- 对应 styles.title：标题容器布局 -->
  <View style={styles.title}>
    <!-- 标题文本 -->
    <!-- 对应 styles.titleText：标题文字样式 -->
    <Text style={styles.titleText} />
    <!-- 或自定义标题 ReactNode，支持复杂结构 -->
  </View>

  <!-- 信息内容区域容器 -->
  <!-- 对应 styles.message：信息区域布局 -->
  <View style={styles.message}>
    <!-- 信息文本 -->
    <!-- 对应 styles.messageText：信息文字样式 -->
    <Text style={styles.messageText} />
    <!-- 或自定义信息 ReactNode，支持复杂结构 -->
  </View>

  <!-- 按钮区域容器 -->
  <!-- 对应 styles.buttonWrap：按钮容器布局 -->
  <View style={styles.buttonWrap}>
    <!-- 按钮控件，封装 antd-mobile-rn Button 组件 -->
    <!-- 对应 styles.button：按钮样式 -->
    <Button style={styles.button} type={buttonType}></Button>
  </View>

</View>
```

---

# search-bar Semantic

Source: https://rn.mobile.ant.design/components/search-bar/semantic.md

## SearchBar

### Usage Example

```jsx
import { SearchBar } from '@ant-design/react-native'
import React from 'react'
import { Alert, View } from 'react-native'

export default class SearchBarDemo extends React.Component<any, any> {
  state = {
    value: '美食',
  }

  onChange = (value: any) => {
    this.setState({ value })
  }

  clear = () => {
    this.setState({ value: '' })
  }

  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <SearchBar defaultValue="初始值" placeholder="搜索" />
        <SearchBar
          value={this.state.value}
          placeholder="搜索"
          onSubmit={(value: any) => Alert.alert(value)}
          onCancel={this.clear}
          onChange={this.onChange}
          showCancelButton
        />
      </View>
    )
  }
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface SearchBarStyle {
  input: TextStyle
  inputWrapper: ViewStyle
  wrapper: ViewStyle
  cancelTextContainer: ViewStyle
  cancelText: TextStyle
  search: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<SearchBarStyle>({
    inputWrapper: {
      flex: 1,
      flexDirection: 'row',
    },
    input: {
      borderRadius: theme.radius_md,
      backgroundColor: theme.fill_grey,
      borderColor: theme.border_color_base,
      borderWidth: theme.border_width_sm,
      height: theme.search_bar_input_height,
      color: theme.color_text_base,
      fontSize: theme.font_size_base,
      paddingLeft:
        theme.h_spacing_lg + theme.icon_size_xxs + theme.h_spacing_sm,
      paddingRight:
        theme.h_spacing_lg + theme.icon_size_xxs + theme.h_spacing_sm,
      flex: 1,
      paddingTop: 0,
      paddingBottom: 0,
    },
    wrapper: {
      backgroundColor: theme.fill_base,
      height: theme.search_bar_height,
      paddingLeft: theme.h_spacing_md,
      paddingRight: theme.h_spacing_md,
      flexDirection: 'row',
      alignItems: 'center',
    },
    cancelTextContainer: {
      height: theme.search_bar_input_height,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cancelText: {
      fontSize: theme.link_button_font_size,
      color: theme.color_link,
      paddingLeft: theme.h_spacing_lg,
    },
    search: {
      color: theme.color_icon_base,
      position: 'absolute',
      left: theme.h_spacing_md + 8,
      top: (theme.search_bar_height - theme.icon_size_xxs) / 2,
      fontSize: theme.icon_size_xxs,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 整体容器，包裹整个搜索栏区域 -->
<View styles={{ wrapper }}>

  <!-- 输入框外层容器，用于输入框布局 -->
  <View styles={{ inputWrapper }}>

    <!-- 文本输入框，支持 style 基础属性透传，用于输入搜索内容 -->
    <TextInput style={...} styles={{ input }} />

  </View>

  <!-- 搜索图标，显示搜索放大镜图标 -->
  <Icon styles={{ search }} />

  <!-- 取消按钮容器，条件渲染，当 showCancelButton 或输入框聚焦时显示 -->
  <View styles={{ cancelTextContainer }}>

    <!-- 取消按钮文字，点击触发取消操作 -->
    <Text styles={{ cancelText }} />

  </View>
</View>
```

---

# slider Semantic

Source: https://rn.mobile.ant.design/components/slider/semantic.md

## Slider

### Usage Example

```jsx
import { List, Provider, Slider, Switch, Toast } from '@ant-design/react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

export default function StepperExample() {
  useEffect(() => {
    Toast.config({ stackable: false })
  }, [])

  const [disabledStep, setDisabledStep] = useState(false)
  const [tapToSeek, setTapToSeek] = useState(true)
  const marks = {
    0: 0,
    // 20: 20,
    40: 40,
    60: '',
    80: 80,
    100: 100,
  }

  const toastValue = (value: number | [number, number]) => {
    let text = ''
    if (typeof value === 'number') {
      text = `${value}`
    } else {
      text = `[${value.join(',')}]`
    }
    Toast.show({ content: `当前选中值为：${text}`, position: 'top' })
  }

  return (
    <Provider>
      <ScrollView>
        <List>
          <List.Item
            extra={
              <Switch
                checked={disabledStep}
                onChange={(val) => {
                  setDisabledStep(val)
                }}
              />
            }>
            Disabled Step
            <List.Item.Brief>
              是否禁用步距；禁用后`onChange`将返回带有小数点的值
            </List.Item.Brief>
          </List.Item>
          <List.Item
            extra={
              <Switch
                checked={tapToSeek}
                onChange={(val) => {
                  setTapToSeek(val)
                }}
              />
            }>
            Tap To Seek
            <List.Item.Brief>
              是否允许点击滑块轨道来设置slider值
            </List.Item.Brief>
          </List.Item>
        </List>
        <List
          renderHeader={'基础用法'}
          onStartShouldSetResponder={() => true}
          onTouchStart={(e) => e.stopPropagation()}>
          <List.Item>
            <Slider
              max={1}
              disabledStep={disabledStep}
              tapToSeek={tapToSeek}
              onChange={toastValue}
              onAfterChange={toastValue}
              onSlidingStart={(val, index) =>
                console.log('onSlidingStart', { val, index })
              }
              onSlidingComplete={(val, index) =>
                console.log('onSlidingComplete', { val, index })
              }
            />
          </List.Item>
        </List>
        <List renderHeader={'显示刻度(ticks)并指定步距(step)'}>
          <List.Item>
            <Slider
              ticks
              step={10}
              defaultValue={40}
              disabledStep={disabledStep}
              tapToSeek={tapToSeek}
            />
          </List.Item>
        </List>
        <List renderHeader={'传入刻度标记(marks)'}>
          <List.Item>
            <Slider
              marks={marks}
              ticks
              disabledStep={disabledStep}
              tapToSeek={tapToSeek}
            />
          </List.Item>
        </List>
        <List renderHeader={'最大(max)/最小值(min)'}>
          <List.Item>
            <Slider
              step={100}
              min={100}
              max={1000}
              ticks
              onAfterChange={toastValue}
              disabledStep={disabledStep}
              tapToSeek={tapToSeek}
            />
          </List.Item>
        </List>
        <List renderHeader={'双滑块(range)'}>
          <List.Item>
            <Slider
              marks={marks}
              ticks
              range
              defaultValue={[60, 40]}
              disabledStep={disabledStep}
              tapToSeek={tapToSeek}
            />
          </List.Item>
        </List>
        <List renderHeader={'在拖动时显示悬浮提示'}>
          <List.Item>
            <Slider popover disabledStep={disabledStep} tapToSeek={tapToSeek} />
          </List.Item>
        </List>
      </ScrollView>
    </Provider>
  )
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface SliderStyle {
  slider: ViewStyle
  disabled: ViewStyle

  // 轨道
  trackContianer: ViewStyle
  track: ViewStyle
  fill: ViewStyle

  // 滑轨按钮
  thumb: ViewStyle

  // 刻度
  ticks: ViewStyle
  tick: ViewStyle
  tickActive: ViewStyle

  // 刻度下的标记
  mark: ViewStyle
  markText: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<SliderStyle>({
    slider: {
      paddingVertical: 5,
      paddingHorizontal: 14,
    },
    disabled: {},
    trackContianer: {
      paddingVertical: 8,
      position: 'relative',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    track: {
      position: 'absolute',
      width: '100%',
      zIndex: 1,
      height: 3,
      borderRadius: 3,
      backgroundColor: theme.fill_grey,
    },
    fill: {
      position: 'absolute',
      zIndex: 1,
      height: 3,
      borderRadius: 3,
      backgroundColor: theme.brand_primary,
    },

    thumb: {
      zIndex: 3,
    },

    ticks: {
      position: 'absolute',
      width: '100%',
      height: 3,
      backgroundColor: 'transparent',
      zIndex: 2,
    },
    tick: {
      position: 'absolute',
      top: -2,
      width: 7,
      height: 7,
      marginLeft: -3,
      backgroundColor: theme.fill_grey,
      borderRadius: 7,
    },
    tickActive: {
      backgroundColor: theme.brand_primary,
    },

    mark: {
      position: 'relative',
      width: '100%',
      height: 11,
    },
    markText: {
      transform: [{ translateX: -theme.font_size_caption_sm / 2 }],
      fontSize: theme.font_size_caption_sm,
      color: theme.color_text_paragraph,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 手势检测器容器，绑定滑动，点击等手势 -->
<GestureDetector style={{}}>
  <!-- 整个 Slider 容器区域 -->
  <!-- 视觉用途：Slider 容器区域 -->
  <!-- 对应 styles.slider：Slider 组件主容器样式 -->
  <!-- 对应 styles.disabled：禁用时叠加样式 -->
  <!-- 支持 style 基础属性透传 style={...} -->
  <View style={[styles.slider, disabled && styles.disabled, style]}>

    <!-- 滑轨容器 -->
    <!-- 视觉用途：滑轨的触摸区域容器 -->
    <!-- 对应 styles.trackContianer：滑轨容器样式 -->
    <View style={styles.trackContianer} onLayout={...}>

      <!-- 滑轨背景条 -->
      <!-- 视觉用途：滑轨轨道背景 -->
      <!-- 对应 styles.track：滑轨条背景样式 -->
      <View style={styles.track} />

      <!-- 滑轨填充条，表示已选择的范围 -->
      <!-- 视觉用途：滑轨已选中的范围 -->
      <!-- 动态样式包含 left 和 width 由滑块位置控制 -->
      <!-- 对应 styles.fill：填充条样式 -->
      <Animated.View style={[styles.fill, /*动态 fillStyle*/]} />

      <!-- 刻度容器，条件渲染：ticks 为 true 时显示 -->
      <!-- 视觉用途：刻度点整体容器 -->
      <!-- 对应 styles.ticks：刻度点容器样式 -->
      <View style={styles.ticks}>
        <!-- 单条刻度点，重复元素 -->
        <!-- 视觉用途：单个刻度点 -->
        <!-- 动态样式决定是否激活对应样式按滑块位置判断 -->
        <!-- 对应 styles.tick：刻度点默认样式 -->
        <!-- 对应 styles.tickActive：激活状态刻度点样式 -->
        <Animated.View style={[styles.tick, styles.tickActive /*动态根据滑块位置切换*/, { left: 'X%' }]} />
        <!-- 省略其他刻度点 -->
      </View>

      <!-- 滑块 1，右滑块，如果 range 为 true 则表示区间最大值滑块 -->
      <!-- 视觉用途：滑块按钮 -->
      <!-- 对应 styles.thumb：滑块按钮样式 -->
      <Animated.View style={[styles.thumb, /*动态横向位移*/]}>
        <!-- 滑块内容，默认显示 ThumbIcon 或者自定义 icon，支持带气泡浮层 -->
        <!-- 气泡浮层由 Tooltip 组件实现 -->
        <View>{/* ThumbIcon 或 icon，自定义内容 */}</View>
      </Animated.View>

      <!-- 滑块 0，左滑块，仅 range 为 true 时渲染 -->
      <!-- 视觉用途：区间左侧滑块按钮 -->
      <!-- 同右侧滑块样式及行为 -->
      <Animated.View style={[styles.thumb, /*动态横向位移*/]}>
        <View>{/* ThumbIcon 或 icon，自定义内容 */}</View>
      </Animated.View>

    </View>

    <!-- 刻度下方的标记文本容器，条件渲染：marks 存在时显示 -->
    <!-- 视觉用途：滑轨下方的文本标记容器 -->
    <!-- 对应 styles.mark：标记容器样式 -->
    <View style={styles.mark}>
      <!-- 单个标记文本，代表性示例 -->
      <!-- 视觉用途：单个标记文本 -->
      <!-- 对应 styles.markText：标记文本样式 -->
      <View style={{ position: 'absolute', left: 'X%' }}>
        <View style={styles.markText}>标记内容</View>
      </View>
      <!-- 省略其他标记 -->
    </View>

  </View>
</GestureDetector>
```

---

# stepper Semantic

Source: https://rn.mobile.ant.design/components/stepper/semantic.md

## Stepper

### Usage Example

```jsx
import { List, Provider, Stepper, Toast } from '@ant-design/react-native'
import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

export default function StepperExample() {
  return (
    <Provider>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : undefined}>
        <ScrollView>
          <List renderHeader={'基础用法'}>
            <List.Item
              extra={
                <Stepper
                  defaultValue={1}
                  onChange={(value) => {
                    console.log(value)
                  }}
                />
              }>
              基础用法
            </List.Item>
            <List.Item extra={<Stepper step={10} defaultValue={10} />}>
              步长设置
            </List.Item>
            <List.Item extra={<Stepper min={-5} max={5} />}>
              限制输入范围
            </List.Item>
            <List.Item extra={<Stepper digits={1} />}>
              格式化到一位小数
            </List.Item>
            <List.Item
              extra={
                <Stepper
                  defaultValue={93}
                  formatter={(value) => `$ ${value}`}
                  parser={(text) => parseFloat(text.replace('$', ''))}
                  onChange={(value) => {
                    console.log(value, typeof value)
                  }}
                />
              }>
              自定义格式
            </List.Item>
          </List>
          <List renderHeader={'状态/样式'}>
            <List.Item extra={<Stepper disabled />}>禁用状态</List.Item>
            <List.Item extra={<Stepper readOnly />}>输入框只读状态</List.Item>
            <List.Item
              extra={
                <Stepper
                  onFocus={() => {
                    Toast.info('获得焦点')
                  }}
                  onBlur={() => {
                    Toast.info('失去焦点')
                  }}
                />
              }>
              获得/失去焦点
            </List.Item>
            <List.Item
              extra={
                <Stepper
                  allowEmpty={true}
                  min={10}
                  max={20}
                  onChange={(value) => {
                    console.log(value)
                  }}
                />
              }>
              允许清空
            </List.Item>
            <List.Item extra={<Stepper defaultValue={10000} step={10000} />}>
              自定义样式
            </List.Item>
          </List>
          <StringModeExample />
        </ScrollView>
      </KeyboardAvoidingView>
    </Provider>
  )
}

const StringModeExample = () => {
  const [value, setValue] = React.useState('9999999999999999')
  return (
    <List renderHeader={'stringMode'}>
      <List.Item>
        <Stepper
          stringMode
          defaultValue="0.000000000000002"
          step="0.000000000000001"
          onChange={console.log}
          style={{ width: '100%' }}
        />
      </List.Item>
      <List renderHeader={'stringMode control'}>
        <List.Item>
          <Stepper
            stringMode
            value={value}
            step="13579"
            onChange={setValue}
            style={{ width: '100%' }}
          />
        </List.Item>
      </List>
    </List>
  )
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { InputStyle } from '../../input/style'
import { Theme } from '../../style'
export interface StepperStyle extends Partial<InputStyle> {
  inputDisabled: TextStyle
  stepWrap: ViewStyle
  stepText: TextStyle
  stepDisabled: ViewStyle
  disabledStepTextColor: TextStyle
}
export default (theme: Theme) =>
  StyleSheet.create<StepperStyle>({
    // override Input style
    container: {
      alignItems: 'stretch',
      width: 104,
    },
    input: {
      fontSize: theme.font_size_base,
      color: theme.color_text_base,
      textAlign: 'center',
      backgroundColor: theme.fill_grey,
    },
    prefix: {
      flexShrink: 0,
      marginRight: 2,
    },
    suffix: {
      flexShrink: 0,
      marginLeft: 2,
    },

    // Stepper style
    inputDisabled: {
      opacity: 0.4,
    },
    stepWrap: {
      width: 28,
      flex: 1,
      justifyContent: 'center',
      borderRadius: theme.radius_xs,
      backgroundColor: theme.fill_grey,
    },
    stepText: {
      textAlign: 'center',
      fontSize: 20,
      color: theme.brand_primary,
      backgroundColor: 'transparent',
    },
    stepDisabled: {
      opacity: 0.4,
    },
    disabledStepTextColor: {
      color: theme.color_text_disabled,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 包裹步进器整体的输入框容器 -->
<Input
  ref={ref}
  style={...} 
  styles={{ container /* 输入框容器样式 */, input /* 输入框样式 */, inputDisabled /* 禁用时输入框样式 */ }}
  disabled={disabled} 
  value={state.value}
  onChangeText={...}
  onFocus={...}
  onBlur={...}
  selectTextOnFocus
  prefix={
    <!-- 减号按钮容器，包含样式: stepWrap 步进器按钮包裹, stepDisabled 禁用按钮样式（动态 - 根据 minusDisabled） -->
    <TouchableHighlight
      disabled={minusDisabled}
      style={{ stepWrap, stepDisabled /* 动态: 当 minusDisabled 为 true */ }}
      onPress={handleMinus}
      onLongPress={onLongPressMinus}
      onPressOut={onPressOut}
      activeOpacity={1}
      underlayColor={theme.fill_tap}
      {...minusButtonProps}
    >
      <!-- 减号按钮文本，样式: stepText 步进器按钮文字, disabledStepTextColor 禁用时文字颜色（动态 - 根据 minusDisabled） -->
      <Text style={{ stepText, disabledStepTextColor /* 动态: 当 minusDisabled 为 true */ }}>-</Text>
    </TouchableHighlight>
  }
  suffix={
    <!-- 加号按钮容器，包含样式: stepWrap 步进器按钮包裹, stepDisabled 禁用按钮样式（动态 - 根据 plusDisabled） -->
    <TouchableHighlight
      disabled={plusDisabled}
      style={{ stepWrap, stepDisabled /* 动态: 当 plusDisabled 为 true */ }}
      onPress={handlePlus}
      onLongPress={onLongPressPlus}
      onPressOut={onPressOut}
      activeOpacity={1}
      underlayColor={theme.fill_tap}
      {...plusButtonProps}
    >
      <!-- 加号按钮文本，样式: stepText 步进器按钮文字, disabledStepTextColor 禁用时文字颜色（动态 - 根据 plusDisabled） -->
      <Text style={{ stepText, disabledStepTextColor /* 动态: 当 plusDisabled 为 true */ }}>+</Text>
    </TouchableHighlight>
  }
/>
```

---

# steps Semantic

Source: https://rn.mobile.ant.design/components/steps/semantic.md

## Steps

### Usage Example

```jsx
import { Icon, Steps, WingBlank } from '@ant-design/react-native'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
const Step = Steps.Step

export default class BasicTimelineExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      steps1: [
        { title: 'Finished', description: 'This is description' },
        { title: 'In Progress', description: 'This is description' },
        { title: 'Waiting', description: 'This is description' },
      ],
      steps2: [
        {
          title: 'Finished',
          description: 'This is description',
          status: 'finish',
        },
        {
          title: 'In Progress',
          description: 'This is description',
          status: 'process',
        },
        {
          title: 'Waiting',
          description: 'This is description',
          status: 'error',
        },
        {
          title: 'Waiting',
          description: 'This is description',
          status: 'wait',
        },
      ],
    }
  }
  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 60 }}>
          <WingBlank size="lg">
            <Steps size="small" current={1} direction="horizontal">
              {this.state.steps1.map((item: any, index: any) => (
                <Step
                  key={index}
                  title={
                    <View>
                      <Text>title:{item.title}</Text>
                    </View>
                  }
                  status={item.status}
                />
              ))}
            </Steps>
          </WingBlank>
        </View>
        <View style={{ marginTop: 60 }}>
          <WingBlank size="lg">
            <Steps size="small" current={1}>
              {this.state.steps1.map((item: any, index: any) => (
                <Step
                  key={index}
                  title={
                    <View>
                      <Text>title:{item.title}</Text>
                    </View>
                  }
                  description={
                    <View>
                      <Text>desc:{item.description}</Text>
                    </View>
                  }
                  status={item.status}
                />
              ))}
            </Steps>
          </WingBlank>
        </View>
        <View>
          <WingBlank size="lg">
            <Steps size="small">
              {this.state.steps2.map((item: any, index: any) => (
                <Step
                  key={index}
                  title={item.title}
                  description={item.description}
                  status={item.status}
                />
              ))}
            </Steps>
          </WingBlank>
        </View>
        <View>
          <WingBlank size="lg">
            <Steps current={1}>
              {this.state.steps1.map((item: any, index: any) => (
                <Step
                  key={index}
                  title={item.title}
                  description={item.description}
                  status={item.status}
                />
              ))}
            </Steps>
          </WingBlank>
        </View>
        <View>
          <WingBlank size="lg">
            <Steps>
              {this.state.steps2.map((item: any, index: any) => (
                <Step
                  key={index}
                  title={item.title}
                  description={item.description}
                  status={item.status}
                />
              ))}
            </Steps>
          </WingBlank>
        </View>
        <View>
          <WingBlank size="lg">
            <Steps current={1}>
              <Step
                key={0}
                title="Finished"
                description="This is description"
                status="finish"
              />
              <Step
                key={1}
                title="Progress"
                description="This is description"
                status="progress"
              />
              <Step
                key={2}
                title="Wait"
                description="This is description"
                status="wait"
                icon={<Icon name="down" size={20} color="white" />}
              />
            </Steps>
          </WingBlank>
        </View>
        <View>
          <WingBlank size="lg">
            <Steps current={1}>
              <Step
                key={0}
                title="Finished"
                description="This is description"
                status="finish"
                renderIcon={({ starting, waiting, error }) => {
                  let icon
                  if (starting) {
                    icon = <Icon name="home" />
                  } else if (waiting) {
                    icon = <Icon name="user" />
                  } else if (error) {
                    icon = <Icon name="star" />
                  }
                  return icon
                }}
              />
              <Step
                key={1}
                title="Progress"
                description="This is description"
                status="progress"
                renderIcon={({ starting, waiting, error }) => {
                  let icon
                  if (starting) {
                    icon = <Icon name="home" />
                  } else if (waiting) {
                    icon = <Icon name="user" />
                  } else if (error) {
                    icon = <Icon name="star" />
                  }
                  return icon
                }}
              />
              <Step
                key={2}
                title="Wait"
                description="This is description"
                status="wait"
                renderIcon={({ starting, waiting, error }) => {
                  let icon
                  if (starting) {
                    icon = <Icon name="home" />
                  } else if (waiting) {
                    icon = <Icon name="user" />
                  } else if (error) {
                    icon = <Icon name="star" />
                  }
                  return icon
                }}
              />
              <Step
                key={3}
                title="Wait"
                description="This is description"
                status="error"
                renderIcon={({ starting, waiting, error }) => {
                  let icon
                  if (starting) {
                    icon = <Icon name="home" />
                  } else if (waiting) {
                    icon = <Icon name="user" />
                  } else if (error) {
                    icon = <Icon name="star" />
                  }
                  return icon
                }}
              />
            </Steps>
          </WingBlank>
        </View>
      </ScrollView>
    )
  }
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

const grid = 4

export interface StepsStyle {
  head_default_s: ViewStyle
  head_blue_s: ViewStyle
  head_gray_s: ViewStyle
  head_red_s: ViewStyle
  icon_s: TextStyle

  head_default_l: ViewStyle
  head_blue_l: ViewStyle
  head_gray_l: ViewStyle
  head_red_l: ViewStyle
  tail_default_l: ViewStyle
  icon_l: TextStyle

  tail_default_s: ViewStyle
  tail_default_s_h: ViewStyle
  tail_gray: ViewStyle
  tail_blue: ViewStyle
  tail_error: ViewStyle
  tail_last: ViewStyle
  content_s: ViewStyle
  content_s_h: ViewStyle
  content_l: ViewStyle
  title_s: TextStyle
  description_s: TextStyle
  title_l: TextStyle
  description_l: TextStyle
}
export default (theme: Theme) =>
  StyleSheet.create<StepsStyle>({
    head_default_s: {
      width: 18,
      height: 18,
      backgroundColor: theme.fill_base,
      borderRadius: 18,
      borderWidth: theme.border_width_lg,
      borderColor: theme.brand_primary,
      borderStyle: 'solid',
      overflow: 'hidden',
    },
    head_blue_s: {
      borderColor: theme.brand_primary,
    },
    head_gray_s: {
      borderColor: theme.color_text_placeholder,
    },
    head_red_s: {
      borderColor: theme.brand_error,
    },
    icon_s: {
      fontSize: 14,
    },

    head_default_l: {
      width: 24,
      height: 24,
      backgroundColor: theme.fill_base,
      borderRadius: 18,
      borderWidth: theme.border_width_lg,
      borderColor: theme.brand_primary,
      borderStyle: 'solid',
      overflow: 'hidden',
    },
    head_blue_l: {
      borderColor: theme.brand_primary,
      backgroundColor: theme.brand_primary,
    },
    head_gray_l: {
      borderColor: theme.color_text_placeholder,
      backgroundColor: theme.color_text_placeholder,
    },
    head_red_l: {
      borderColor: theme.brand_error,
      backgroundColor: theme.brand_error,
    },
    tail_default_l: {
      width: theme.border_width_lg,
      height: 30,
      marginLeft: 11,
    },
    icon_l: {
      fontSize: 20,
    },
    tail_default_s: {
      width: theme.border_width_lg,
      flex: 1,
      marginLeft: 2 * grid,
    },
    tail_default_s_h: {
      height: theme.border_width_lg,
      width: 50,
      marginTop: 2 * grid,
    },
    tail_gray: {
      backgroundColor: theme.color_text_placeholder,
    },
    tail_blue: {
      backgroundColor: theme.brand_primary,
    },
    tail_error: {
      backgroundColor: theme.brand_error,
    },
    tail_last: {
      backgroundColor: 'transparent',
    },
    content_s: {
      paddingLeft: theme.h_spacing_md,
    },
    content_s_h: {
      paddingTop: theme.v_spacing_md,
    },
    content_l: {
      paddingLeft: theme.h_spacing_lg,
    },
    title_s: {
      fontWeight: 'bold',
      fontSize: theme.font_size_caption,
      paddingBottom: theme.v_spacing_md,
      color: theme.color_text_base,
    },
    description_s: {
      fontSize: theme.font_size_caption_sm,
      color: theme.color_text_base,
    },
    title_l: {
      fontWeight: 'bold',
      fontSize: theme.font_size_heading,
      paddingBottom: theme.v_spacing_md,
      color: theme.color_text_base,
    },
    description_l: {
      fontSize: theme.font_size_subhead,
      color: theme.color_text_base,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 外层容器，承载所有步骤，行或列布局 -->
<View style={style={{ flexDirection: 'row | column' }}}>
  <!-- StepsItem 列表示例，步骤项为兄弟节点，展示一个代表项 -->
  <!-- 步骤项容器，水平或垂直方向切换，控制头部与内容排列 -->
  <View style={styles={{ flexDirection: 'row | column' }}}>
    <!-- 头部区域，圆形背景，颜色根据状态和尺寸变化 -->
    <!-- 对应 styles.key: head_default_s/l, head_blue_s/l, head_gray_s/l, head_red_s/l，影响头部背景颜色和尺寸 -->
    <View style={styles={head_default_s | head_default_l, head_blue_s | head_blue_l | head_gray_s | head_gray_l | head_red_s | head_red_l}}>
      <!-- 状态图标，完成、等待、错误等表示 -->
      <!-- 对应 styles.key: icon_s, icon_l，控制图标大小和样式 -->
      <Icon style={styles={icon_s | icon_l}} />
      <!-- 或用户传入的自定义 icon -->
    </View>

    <!-- 上方连线 -->
    <!-- 对应 styles.key: tail_default_s/h, tail_blue, tail_gray, tail_last, tail_error，控制连线样式和颜色 -->
    <View style={styles={tail_default_s | tail_default_s_h | tail_blue | tail_gray | tail_last | tail_error}} />

    <!-- 下方连线 -->
    <!-- 同上，对应不同状态的样式，动态切换 -->
    <View style={styles={tail_default_s | tail_default_s_h | tail_blue | tail_gray | tail_last | tail_error}} />
  </View>

  <!-- 内容区域，显示标题和描述 -->
  <!-- 对应 styles.key: content_s, content_s_h, content_l，控制内容容器布局与边距 -->
  <View style={styles={content_s | content_s_h | content_l}}>
    <!-- 标题文本，支持字符串或节点 -->
    <!-- 对应 styles.key: title_s, title_l，控制字体大小、颜色等 -->
    <Text style={styles={title_s | title_l}} />

    <!-- 描述文本，支持字符串或节点 -->
    <!-- 对应 styles.key: description_s, description_l，控制字体大小、颜色等 -->
    <Text style={styles={description_s | description_l}} />
  </View>
</View>
```

---

# swipe-action Semantic

Source: https://rn.mobile.ant.design/components/swipe-action/semantic.md

## SwipeAction

### Usage Example

```jsx
import { List, SwipeAction } from '@ant-design/react-native'
import React from 'react'
import { View } from 'react-native'

export default class BasicSwipeActionExample extends React.Component<any, any> {
  asyncFunction = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('asd')
        resolve(123)
      }, 1500)
    })
  }

  render() {
    const right = [
      {
        text: 'More',
        onPress: async () => {
          await this.asyncFunction()
        },
        backgroundColor: 'orange',
        color: 'white',
      },
      {
        text: 'Delete',
        onPress: () => console.log('delete'),
        backgroundColor: 'red',
        color: 'white',
      },
    ]
    const left = [
      {
        text: 'Read',
        onPress: () => console.log('read'),
        backgroundColor: 'blue',
        color: 'white',
      },
      {
        text: 'Reply',
        onPress: () => console.log('reply'),
        backgroundColor: 'green',
        color: 'white',
      },
    ]

    return (
      <View style={{ paddingTop: 30 }}>
        <List>
          <SwipeAction
            right={right}
            left={left}
            closeOnAction
            closeOnTouchOutside>
            <List.Item extra="extra content">
              Simple example: left and right buttons
            </List.Item>
          </SwipeAction>
        </List>
        <List>
          <SwipeAction
            right={right}
            left={left}
            closeOnAction={false}
            closeOnTouchOutside
            onSwipeableOpen={() => console.log('open')}
            onSwipeableClose={() => console.log('close')}>
            <List.Item extra="extra content">
              Simple example: left and right buttons
            </List.Item>
          </SwipeAction>
        </List>
      </View>
    )
  }
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface SwipeActionStyle {
  actionButton: ViewStyle
  actionText: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<SwipeActionStyle>({
    actionButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    actionText: {
      color: theme.color_text_base_inverse,
      fontSize: theme.font_size_base,
      backgroundColor: 'transparent',
      padding: 10,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 滑动操作整体容器，来自 react-native-gesture-handler 的 Swipeable 组件，无法自定义样式 -->
<Swipeable>
  <!-- children 传入的内容，UI主体，非主题样式节点，略 -->

  <!-- 左侧滑动操作按钮容器，根据 RTL 方向切换 flexDirection -->
  <View
    styles={{}}
    style={{
      flexDirection: 'row' /* 或 'row-reverse'（基于 RTL） */
    }}>
    <!-- 左侧单个操作按钮，循环渲染，此处为代表性示例 -->
    <!-- 按钮整体容器，支持位移动画，动态根据滑动进度改变 translateX -->
    <Animated.View
      styles={{}}
      style={{
        transform: [{ translateX: /* 动态，基于 progressAnimatedValue 和布局计算 */ }]
      }}>
      <!-- 操作按钮，支持配置背景色与事件 -->
      <!-- 对应 styles.actionButton：操作按钮容器样式 -->
      <RectButton
        styles={{ actionButton }}
        style={... /* 支持 button.backgroundColor 覆盖背景色 */}
        {...button.actionButtonProps}
      >
        <!-- 操作按钮文本 或 自定义元素 -->
        <!-- 对应 styles.actionText：操作按钮文本样式 -->
        <!-- 对应 style 基础属性：支持通过 button.style 传入文本样式 -->
        <Text
          styles={{ actionText }}
          style={[button.style, button.color ? { color: button.color } : {}]}>
          操作按钮文本
        </Text>
        <!-- 或者如果传入的是 React 元素，即自定义内容，则渲染该元素 -->
      </RectButton>
    </Animated.View>
  </View>

  <!-- 右侧滑动操作按钮容器，与左侧同结构，唯一区别是 flexDirection 默认，及按钮参数不同 -->
  <!-- 同上，循环渲染操作按钮 -->
</Swipeable>
```

---

# switch Semantic

Source: https://rn.mobile.ant.design/components/switch/semantic.md

## Switch

### Usage Example

```jsx
import { Button, Icon, List, Switch, WhiteSpace, WingBlank } from '@ant-design/react-native'
import React from 'react'
import { ScrollView } from 'react-native'

export default class SwitchExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      disabled: true,
      checked: false,
    }
  }

  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    })
  }

  sleep1s = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
  }

  onChangeAsync = async (val: boolean) => {
    await this.sleep1s()
    this.setState({
      checked: val,
    })
  }

  render() {
    return (
      <ScrollView>
        <List renderHeader="基本">
          <List.Item extra={<Switch />}>最简单的用法</List.Item>
        </List>
        <List renderHeader="不可用">
          <List.Item extra={<Switch disabled={this.state.disabled} />}>
            Switch 失效状态
          </List.Item>
          <WhiteSpace />
          <WingBlank>
            <Button type="primary" onPress={this.toggle}>
              Toggle disabled
            </Button>
          </WingBlank>
        </List>
        <List renderHeader="文字和图标">
          <List.Item
            extra={
              <Switch
                checkedChildren="开"
                unCheckedChildren="关"
                defaultChecked
              />
            }
          />
          <List.Item
            extra={<Switch checkedChildren="1" unCheckedChildren="0" />}
          />
          <List.Item
            extra={
              <Switch
                checkedChildren={<Icon name="check" color="white" />}
                unCheckedChildren={<Icon name="close" color="white" />}
                defaultChecked
              />
            }
          />
        </List>
        <List renderHeader="加载中">
          <List.Item extra={<Switch checked loading />}>
            标识开关操作仍在执行中
          </List.Item>
          <List.Item extra={<Switch loading />} />
        </List>
        <List renderHeader="颜色">
          <List.Item extra={<Switch checked color="red" />}>
            color="red"
          </List.Item>
        </List>
        <List renderHeader="异步">
          <List.Item
            extra={
              <Switch
                checked={this.state.checked}
                onChange={this.onChangeAsync}
              />
            }>
            onChange 返回 Promise
          </List.Item>
        </List>
      </ScrollView>
    )
  }
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface SwitchStyle {
  switch: ViewStyle
  switch_inner: ViewStyle | TextStyle
  switch_handle: ViewStyle
  switch_checked: ViewStyle
  switch_unchecked: ViewStyle
  switch_inner_checked: ViewStyle
  switch_inner_unchecked: ViewStyle
  switch_handle_checked: ViewStyle
  switch_handle_unchecked: ViewStyle
  switch_checked_disabled: ViewStyle
  switch_unchecked_disabled: ViewStyle
  switch_handle_disabled: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<SwitchStyle>({
    switch: {
      position: 'relative',
      width: 55,
      height: 31,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 0,
      borderRadius: 31,
    },
    // handle
    switch_handle: {
      position: 'absolute',
      width: 27,
      height: 27,
      borderRadius: 27,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      shadowColor: 'rgb(0, 35, 11)',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 10,
    },
    // inner
    switch_inner: {
      color: '#fff',
      fontSize: 12,
      flex: 1,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: theme.switch_inner_zindex,
    },
    switch_inner_checked: {
      marginLeft: 7,
      marginRight: 27,
    },
    switch_inner_unchecked: {
      marginLeft: 27,
      marginRight: 7,
    },
    // checked
    switch_checked: {
      borderColor: theme.brand_primary,
      backgroundColor: theme.brand_primary,
    },
    switch_unchecked: {
      borderColor: theme.switch_unchecked,
      backgroundColor: theme.switch_unchecked,
    },
    switch_handle_checked: {
      right: 0,
    },
    switch_handle_unchecked: {
      left: 0,
    },
    // disabled
    switch_checked_disabled: {
      borderColor: `${theme.brand_primary}66`,
      backgroundColor: `${theme.brand_primary}66`, // brand_primary的40%透明度
    },
    switch_unchecked_disabled: {
      borderColor: theme.switch_unchecked_disabled,
      backgroundColor: theme.switch_unchecked_disabled,
    },
    switch_handle_disabled: {},
  })
```

### Abstract DOM Structure

```html
<!-- Pressable 外层交互容器，支持开关功能及禁用状态 -->
<Pressable style={undefined}>

  <!-- 开关主体容器，视觉为开关轨道，支持 checked/unchecked/disabled 状态
       对应 styles.switch：开关轨道基础样式
       对应 styles.switch_checked：开关选中状态下轨道样式
       对应 styles.switch_unchecked：开关未选中状态下轨道样式
       对应 styles.switch_checked_disabled：选中且禁用状态轨道样式
       对应 styles.switch_unchecked_disabled：未选中且禁用状态轨道样式
       对应 style 基础属性：支持最小宽度、背景色及边框色透传
  -->
  <View styles={{ switch, switch_checked, switch_unchecked, switch_checked_disabled, switch_unchecked_disabled }} style={...}>

    <!-- 可动画滑块，视觉为开关的“手柄”
         对应 styles.switch_handle：手柄基础样式
         对应 styles.switch_handle_checked：手柄选中状态样式
         对应 styles.switch_handle_unchecked：手柄未选中状态样式
         对应 styles.switch_handle_disabled：手柄禁用状态样式
         对应 style 基础属性：支持背景色透传，动画样式动态计算宽度和位置
    -->
    <Animated.View styles={{ switch_handle, switch_handle_checked, switch_handle_unchecked, switch_handle_disabled }} style={...}>

      <!-- loading 状态下显示的指示器，条件渲染，当 loading 为 true 时显示 -->
      <RNActivityIndicator />

    </Animated.View>

    <!-- 可动画内层容器，视觉为开关轨道中的填充部分，用于显示 checked 和 unchecked 子内容
         对应 styles.switch_inner：内层容器基础样式
         对应 styles.switch_inner_checked：选中状态下内层变化样式
         对应 styles.switch_inner_unchecked：未选中状态下内层变化样式
         对应 style 基础属性：动画 marginLeft 和 marginRight 动态调整位移
    -->
    <AnimatedView styles={{ switch_inner, switch_inner_checked, switch_inner_unchecked }} style={...}>
      
      <!-- 条件渲染，已选中时显示 checkedChildren，否则显示 unCheckedChildren -->
      <!-- 示例：选中的子内容或未选中的子内容 -->

    </AnimatedView>
  </View>
</Pressable>
```

---

# tab-bar Semantic

Source: https://rn.mobile.ant.design/components/tab-bar/semantic.md

## TabBar

### Usage Example

```jsx
import { Icon, SearchBar, TabBar } from '@ant-design/react-native'
import React from 'react'
import { Text, View } from 'react-native'

export default class BasicTabBarExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      selectedTab: 'redTab',
    }
  }

  renderContent(pageText: any) {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <SearchBar placeholder="Search" showCancelButton />
        <Text style={{ margin: 50 }}>{pageText}</Text>
      </View>
    )
  }

  onChangeTab(tabName: any) {
    this.setState({
      selectedTab: tabName,
    })
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#f5f5f5">
        <TabBar.Item
          title="Life"
          icon={<Icon name="home" />}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => this.onChangeTab('blueTab')}>
          {this.renderContent('Life Tab')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="ordered-list" />}
          title="Koubei"
          badge={2}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => this.onChangeTab('redTab')}>
          {this.renderContent('Koubei Tab')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="like" />}
          title="Friend"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => this.onChangeTab('greenTab')}>
          {this.renderContent('Friend Tab')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="user" />}
          title="My"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => this.onChangeTab('yellowTab')}>
          {this.renderContent('My Tab')}
        </TabBar.Item>
      </TabBar>
    )
  }
}
```

### styles

```tsx
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface TabBarStyle {
  tabbar: ViewStyle
  content: ViewStyle
  tabs: ViewStyle
  barItem: ViewStyle
  barIcon: ImageStyle
  barItemSelected: ViewStyle
  barItemTitle: TextStyle
  contentItem: ViewStyle
  contentItemSelected: ViewStyle
  badge: ViewStyle
  badgeText: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<TabBarStyle>({
    tabbar: {
      flex: 1,
    },
    content: {
      flex: 1,
    },
    tabs: {
      height: theme.tab_bar_height,
      borderTopWidth: theme.border_width_md,
      borderColor: theme.border_color_base,
      borderStyle: 'solid',
      flexDirection: 'row',
    },
    barItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    barIcon: {
      width: 28,
      height: 28,
      marginTop: 2,
    },
    barItemSelected: {},
    barItemTitle: {
      fontSize: theme.font_size_icontext,
      marginTop: 2,
    },
    contentItem: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'white',
      height: 0,
    },
    contentItemSelected: {
      height: undefined,
    },
    badge: {
      minWidth: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: theme.brand_important,
      position: 'absolute',
      top: 0,
      left: 20,
      paddingHorizontal: theme.h_spacing_sm,
    },
    badgeText: {
      textAlign: 'center',
      color: 'white',
    },
  })
```

### Abstract DOM Structure

```html
<!-- 整体安全区域包裹，确保底部导航栏适配刘海屏 -->
<SafeAreaView style={{ flex: 1 }}>
  <!-- TabBar 包裹容器，包含内容区和底部标签栏 -->
  <!-- 对应 styles.tabbar：TabBar 主容器样式 -->
  <View styles={{ tabbar }}>
    <!-- 内容显示区，仅展示选中标签对应的内容 -->
    <!-- 对应 styles.content：内容区容器样式 -->
    <View styles={{ content }}>
      <!-- 选中内容项容器，仅显示一个选中项 -->
      <!-- 对应 styles.contentItem：内容项样式 -->
      <!-- 对应 styles.contentItemSelected：选中内容项的额外样式 -->
      <View styles={{ contentItem, contentItemSelected }}>
        <!-- 这里插入 TabBarItem 的 children 内容 -->
      </View>
    </View>

    <!-- 底部标签栏容器 -->
    <!-- 对应 styles.tabs：底部标签栏容器样式 -->
    <View styles={{ tabs }} style={...}>
      <!-- 以下是 TabBarItem，重复多个，以下只展示一个示例 -->
      <!-- 整个标签项容器，包含图标和标题文字，支持外部 style 透传 -->
      <!-- 对应 styles.barItem：标签项默认样式 -->
      <!-- 对应 styles.barItemSelected：选中标签项样式，动态饰品 -->
      <TouchableWithoutFeedback>
        <View styles={{ barItem }} style={...}>
          <View>
            <!-- 标签图标区域，支持 React 元素或图片 -->
            <!-- 图标元素支持样式透传 iconStyle -->
            <!-- 对应 styles.barIcon：图标样式 -->
            <ImageOrIcon styles={{ barIcon }} />

            <!-- 徽章容器，条件渲染，仅当 badge 存在时 -->
            <!-- 对应 styles.badge：徽章背景样式 -->
            <View styles={{ badge }}>
              <!-- 徽章文字 -->
              <!-- 对应 styles.badgeText：徽章文字样式 -->
              <Text styles={{ badgeText }} />
            </View>
          </View>

          <!-- 标签标题文字 -->
          <!-- 对应 styles.barItemTitle：标签文字样式 -->
          <!-- 颜色根据选中状态动态传入 -->
          <Text styles={{ barItemTitle }} />
        </View>
      </TouchableWithoutFeedback>
      <!-- 多个标签项重复结构 -->
    </View>
  </View>
</SafeAreaView>
```

---

# tabs Semantic

Source: https://rn.mobile.ant.design/components/tabs/semantic.md

## Tabs

### Usage Example

```jsx
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Tabs from '..'

const renderContent = (tab: any, index: any) => {
  const style = {
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#ddd',
  } as any
  const content = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
    return (
      <View key={`${index}_${i}`} style={style}>
        <Text>
          {tab.title} - {i}
        </Text>
      </View>
    )
  })
  return (
    <ScrollView key={index} style={{ backgroundColor: '#fff' }}>
      {content}
    </ScrollView>
  )
}

export default class BasicTabsExample extends React.Component<any, any> {
  render() {
    const tabs = [
      { title: 'First Tab' },
      { title: 'Second Tab' },
      { title: 'Third Tab' },
    ]
    const tabs2 = [
      { title: '1st Tab' },
      { title: '2nd Tab' },
      { title: '3rd Tab' },
      { title: '4th Tab' },
      { title: '5th Tab' },
      { title: '6th Tab' },
      { title: '7th Tab' },
      { title: '8th Tab' },
      { title: '9th Tab' },
    ]
    const style = {
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      backgroundColor: '#fff',
    } as any
    return (
      <View style={{ flex: 1 }}>
        <Tabs tabs={tabs}>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
        <Text style={{ margin: 16 }}>Custom RenderTabBar</Text>
        <Tabs
          tabs={tabs}
          renderTabBar={(tabProps) => (
            <View
              style={{
                paddingHorizontal: 16,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              {tabProps.tabs.map((tab, i) => (
                // change the style to fit your needs
                <TouchableOpacity
                  activeOpacity={0.9}
                  key={tab.key || i}
                  style={{
                    // width: '30%',
                    padding: 6,
                  }}
                  onPress={() => {
                    const { goToTab, onTabClick } = tabProps
                    // tslint:disable-next-line:no-unused-expression
                    onTabClick && onTabClick(tabs[i], i)
                    // tslint:disable-next-line:no-unused-expression
                    goToTab && goToTab(i)
                  }}>
                  <Text
                    style={{
                      color: tabProps.activeTab === i ? 'green' : '#333333',
                    }}>
                    {tab.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
        <View style={{ flex: 2 }}>
          <Tabs tabs={tabs2} initialPage={1} tabBarPosition="top">
            {tabs2.map((tab, index) => renderContent(tab, index))}
          </Tabs>
        </View>
      </View>
    )
  }
}

export const title = 'Tabs'
export const description = 'Tabs example'
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'
export interface TabBarStyle {
  container: ViewStyle
  tabs: ViewStyle
  tab: ViewStyle
  underline: ViewStyle
  textStyle: TextStyle
}
export default (theme: Theme) =>
  StyleSheet.create<TabBarStyle>({
    container: {},
    tabs: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: theme.fill_base,
      justifyContent: 'space-around',
      shadowRadius: 0,
      shadowOpacity: 0,
      elevation: 0,
    },
    tab: {
      height: theme.tabs_height,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      flexDirection: 'row',
    },
    underline: {
      height: 2,
      backgroundColor: theme.brand_primary,
    },
    textStyle: {
      fontSize: theme.tabs_font_size_heading,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 整体容器视图，承载整个 Tabs 组件 -->
<View styles={{ container }}>
  <!-- 顶部或底部的分割线容器，会根据 tabBarPosition 渲染，支持 style 透传 -->
  <View styles={{ /* styles.topTabBarSplitLine 或 styles.bottomTabBarSplitLine */ }} style={...}>
    <!-- DefaultTabBar 组件，渲染标签栏 -->
    <View styles={{ container }} style={/* 支持通过 tabBarBackgroundColor 设置背景色 */}>
      <!-- 可横向滚动的标签 ScrollView 容器，scrollEnabled 动态根据 tabs.length 和 page 决定 -->
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        directionalLockEnabled
        bounces={false}
        scrollsToTop={false}
        keyboardShouldPersistTaps={/* 透传 */}
      >
        <!-- 标签集合容器，承载所有的标签项和下划线 -->
        <View styles={{ tabs }} style={/* 支持传入 tabsContainerStyle 和 tabBarBackgroundColor */}>
          <!-- 单个 Tab 标签，TouchableOpacity 用于点击，支持 onPress -->
          <!-- 对应 styles.tab：标签基础布局样式 -->
          <TouchableOpacity>
            <View styles={{ tab }} style={/* 支持传入 tabStyle，设置最小宽度 */}>
              <!-- 标签标题文本，文本颜色动态根据是否激活 -->
              <!-- 对应 styles.textStyle：文字基础样式 -->
              <Text styles={{ textStyle }} style={/* 支持传入 tabBarTextStyle，动态设置文字颜色 */} />
              <!-- 或者自定义 renderTab 渲染的节点 -->
            </View>
          </TouchableOpacity>
          <!-- 说明：上述 Tab 节点为列表项，多个 Tab 依次排列 -->
          <!-- 这里展示一个代表性的 Tab -->
          
          <!-- Tab 下方指示线 -->
          <!-- 对应 styles.underline：下划线基础样式 -->
          <Animated.View styles={{ underline }} style={/* 动态样式 left、width，支持 tabBarUnderlineStyle 覆盖 */} />
          <!-- 或自定义 renderUnderline 渲染 -->
        </View>
      </ScrollView>
    </View>
  </View>

  <!-- 内容区域，Carousel 容器包裹所有 Tab 子页面 -->
  <Carousel
    style={/* 动态宽高，依据容器尺寸变化 */}
    scrollEnabled={/* 动态，依据 swipeable 属性 */}
  >
    <!-- 每个 Tab 页面的容器 View -->
    <!-- 宽度固定为容器宽度，高度根据内容或容器高度 -->
    <View style={{ width: containerWidth, height: containerHeight || flex:1 }}>
      <!-- 对应的 Tab 内容节点，可能是缓存的，自定义内容 -->
    </View>
    <!-- 说明：上述内容项为列表，多个 Tab 页内容依次排列 -->
    <!-- 这里展示一个代表性的内容项 -->
  </Carousel>
</View>
```

---

# tag Semantic

Source: https://rn.mobile.ant.design/components/tag/semantic.md

## Tag

### Usage Example

```jsx
import { Tag, WhiteSpace } from '@ant-design/react-native'
import React from 'react'
import { View } from 'react-native'

function onChange(selected: any) {
  console.log(`tag selected: ${selected}`)
}

export default class BasicTagExample extends React.Component<any, any> {
  render() {
    return (
      <View style={{ padding: 10 }}>
        <Tag>Basic</Tag>
        <WhiteSpace />
        <Tag selected>Selected</Tag>
        <WhiteSpace />
        <Tag disabled>Disabled</Tag>
        <WhiteSpace />
        <Tag onChange={onChange}>Callback</Tag>
        <WhiteSpace />
        <Tag
          closable
          onClose={() => {
            console.log('onClose')
          }}
          afterClose={() => {
            console.log('afterClose')
          }}>
          Closable
        </Tag>
        <WhiteSpace />
        <Tag small>Small and Readonly</Tag>
        <WhiteSpace />
        <Tag
          onLongPress={() => {
            console.log('onLongPress')
          }}>
          LongPress
        </Tag>
      </View>
    )
  }
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface TagStyle {
  tag: ViewStyle
  wrap: ViewStyle
  wrapSmall: ViewStyle
  text: TextStyle
  textSmall: TextStyle
  normalWrap: ViewStyle
  normalText: TextStyle
  activeWrap: ViewStyle
  activeText: TextStyle
  disabledWrap: ViewStyle
  disabledText: TextStyle
  close: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<TagStyle>({
    tag: {
      position: 'relative',
      flexDirection: 'row',
      overflow: 'visible',
    },
    wrap: {
      height: theme.tag_height,
      // lineHeight: theme.tag_height, // doest work in RN
      justifyContent: 'center',
      borderRadius: theme.radius_sm,
      borderWidth: theme.border_width_sm,
      borderStyle: 'solid',
      paddingVertical: 0,
      paddingHorizontal: theme.h_spacing_lg,
    },
    wrapSmall: {
      height: theme.tag_height_sm,
      paddingVertical: 0,
      paddingHorizontal: theme.h_spacing_sm,
    },
    text: {
      fontSize: theme.button_font_size_sm,
      textAlign: 'center',
    },
    textSmall: {
      fontSize: theme.font_size_icontext,
    },
    normalWrap: {
      backgroundColor: theme.fill_base,
      borderColor: theme.border_color_base,
    },
    normalText: {
      color: theme.color_text_caption,
    },
    activeWrap: {
      backgroundColor: theme.fill_base,
      borderColor: theme.brand_primary,
    },
    activeText: {
      color: theme.color_link,
    },
    disabledWrap: {
      backgroundColor: theme.fill_disabled,
      borderColor: theme.fill_disabled,
    },
    disabledText: {
      color: theme.color_text_disabled,
    },
    close: {
      position: 'absolute',
      top: -6,
      left: -6,
      color: theme.color_text_placeholder,
      backgroundColor: 'transparent',
      borderRadius: 999,
      fontSize: 16,
    },
  })
```

### Abstract DOM Structure

```html
<!--
  整个标签容器
  视觉用途：包裹整体标签内容及关闭图标
  对应 styles.tag：标签根容器样式
  对应 style 基础属性：继承外部传入的 style，用于自定义标签整体样式
-->
<View styles={{ tag }} style={...}>
  <!--
    标签可点击区域，响应点击及长按事件
    视觉用途：标签内容包裹层，所有标签文字或自定义子节点都在此区域
    对应 styles.wrap：标签默认外层容器样式
    对应 styles.wrapSmall：small 类型标签的容器样式（动态可能生效）
    对应 styles.normalWrap：非禁用且未选中标签的容器样式（动态可能生效）
    对应 styles.activeWrap：被选中且非禁用标签的容器样式（动态可能生效）
    对应 styles.disabledWrap：禁用状态标签容器样式（动态可能生效）
  -->
  <TouchableWithoutFeedback>
    <View styles={{ wrap, normalWrap, wrapSmall, activeWrap, disabledWrap }}>
      <!--
        标签内容区
        视觉用途：标签文本显示区域或自定义内容
        对应 styles.text：标签文本基础样式
        对应 styles.textSmall：small 类型标签文本样式（动态可能生效）
        对应 styles.normalText：非禁用且未选中标签文本样式（动态可能生效）
        对应 styles.activeText：被选中且非禁用标签文本样式（动态可能生效）
        对应 styles.disabledText：禁用状态标签文本样式（动态可能生效）
      -->
      <Text styles={{ text, textSmall, normalText, activeText, disabledText }}/>
      <!--
        或自定义子节点 children，直接渲染无额外样式包裹
      -->
    </View>
  </TouchableWithoutFeedback>

  <!--
    关闭按钮，条件渲染：closable 且非禁用且非 small 时显示
    视觉用途：标签右侧关闭图标
    对应 styles.close：关闭图标样式
  -->
  <Icon styles={{ close }}/>
</View>
```

---

# textarea-item Semantic

Source: https://rn.mobile.ant.design/components/textarea-item/semantic.md

## TextareaItem

### Usage Example

```jsx
import { List, TextareaItem, Toast } from '@ant-design/react-native'
import React from 'react'
import { ScrollView } from 'react-native'

export default class BasicTextAreaItemExample extends React.Component<
  any,
  any
> {
  constructor(props: any) {
    super(props)
    this.state = {
      val: '默认带value',
    }
  }

  onChange = (val: any) => {
    // console.log(val);
    this.setState({ val })
  }

  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <List renderHeader={'基本'}>
          <TextareaItem rows={4} placeholder="固定行数" />

          <TextareaItem rows={4} placeholder="多行带计数" count={100} />

          <TextareaItem
            rows={4}
            placeholder="高度自适应"
            autoHeight
            style={{ paddingVertical: 5 }}
          />

          <TextareaItem value={this.state.val} onChange={this.onChange} />

          <TextareaItem value="不可编辑 editable = {false}" editable={false} />

          <TextareaItem clear={false} placeholder="不显示清除按钮" />

          <TextareaItem
            error
            defaultValue="报错样式 error={true}"
            onErrorClick={() => Toast.fail('Error message')}
          />
        </List>
      </ScrollView>
    )
  }
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface TextareaItemStyle {
  container: ViewStyle
  input: TextStyle
  icon: ViewStyle
  errorIcon: ViewStyle
  count: ViewStyle
  countText: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<TextareaItemStyle>({
    container: {
      borderBottomWidth: theme.border_width_sm,
      borderBottomColor: theme.border_color_base,
    },
    input: {
      paddingHorizontal: theme.h_spacing_md,
      backgroundColor: theme.fill_base,
      fontSize: theme.font_size_heading,
      lineHeight: Math.round(1.3 * theme.font_size_heading),
      textAlignVertical: 'top',
    },
    icon: {
      position: 'absolute',
      top: 8,
      width: theme.icon_size_xs,
      height: theme.icon_size_xs,
    },
    errorIcon: {
      position: 'absolute',
      right: 18,
      top: 12,
    },
    count: {
      position: 'absolute',
      right: theme.h_spacing_md,
      bottom: theme.h_spacing_md,
    },
    countText: {},
  })
```

### Abstract DOM Structure

```html
<!-- 最外层容器，包裹整个多行文本输入
     对应 styles.container：容器整体样式 -->
<View styles={{ container }}>
  <!-- 多行文本输入框，支持多行和自动高度，显示错误时右侧留空隙
       对应 styles.input：文本输入框样式
       对应 style 基础属性：支持外部传入 style 透传 -->
  <TextInput style={[styles.input]} styles={{ input }} />

  <!-- 错误状态提示图标容器，仅在 error 为 true 时渲染
       视觉用途：错误提示图标的容器
       对应 styles.errorIcon：错误图标容器样式 -->
  <TouchableWithoutFeedback>
    <View styles={{ errorIcon }}>
      <!-- Icon 图标组件，显示 info-circle 的错误符号 -->
      <Icon />
    </View>
  </TouchableWithoutFeedback>

  <!-- 输入字数统计容器，仅当 rows > 1 且 count > 0 时渲染
       视觉用途：显示已输入字数/最大字数统计
       对应 styles.count：字数统计容器样式 -->
  <View styles={{ count }}>
    <!-- 用于显示字数文本
         对应 styles.countText：字数文本样式 -->
    <Text styles={{ countText }} />
  </View>
</View>
```

---

# toast Semantic

Source: https://rn.mobile.ant.design/components/toast/semantic.md

## Toast

### Usage Example

```jsx
import { Button, List, Provider, Switch, Toast } from '@ant-design/react-native'
import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, ScrollView, Text } from 'react-native'

const ToastExample = () => {
  const handler = useRef<number>()
  const [enableMask, setEnableMask] = useState(Toast.getConfig().mask)
  const [enableStack, setEnableStack] = useState(Toast.getConfig().stackable)

  return (
    <Provider>
      <ScrollView>
        <List>
          <List.Item
            extra={
              <Switch
                checked={enableMask}
                onChange={(mask) => {
                  Toast.config({ mask })
                  setEnableMask(Toast.getConfig().mask)
                }}
              />
            }>
            Enable mask
            <List.Item.Brief>是否显示透明蒙层，防止触摸穿透</List.Item.Brief>
          </List.Item>
          <List.Item
            extra={
              <Switch
                checked={enableStack}
                onChange={(stackable) => {
                  Toast.config({ stackable })
                  setEnableStack(Toast.getConfig().stackable)
                }}
              />
            }>
            Enable stackable
            <List.Item.Brief>是否允许叠加显示</List.Item.Brief>
          </List.Item>
        </List>
        <List renderHeader="图标">
          <Button
            onPress={() => {
              Toast.success('Success')
            }}>
            成功
          </Button>
          <Button
            onPress={() => {
              Toast.fail('Fail')
            }}>
            失败
          </Button>
          <Button
            onPress={() => {
              Toast.offline('Network connection failed !!!')
            }}>
            网络失败
          </Button>
          <Button
            onPress={() => {
              Toast.loading('loading...')
            }}>
            加载中
          </Button>
          <Button
            onPress={() => {
              Toast.show({
                content: '上传中',
                icon: <ActivityIndicator />,
              })
            }}>
            自定义图标
          </Button>
        </List>
        <List renderHeader="更多功能">
          <Button
            onPress={() => {
              Toast.show({
                content: 'Hello World',
                position: 'top',
              })
            }}>
            顶部提示
          </Button>
          <Button
            onPress={() => {
              Toast.show({
                content: 'Hello World',
                position: 'bottom',
              })
            }}>
            底部提示
          </Button>
          <Button
            onPress={() => {
              Toast.show({
                icon: 'loading',
                content: <CountDownText />,
                duration: 5,
              })
            }}>
            动态内容
          </Button>
        </List>
        <List renderHeader="手动清除">
          <Button
            onPress={() => {
              handler.current = Toast.show({
                content: '这条提示不会自动消失',
                duration: 0,
                position: 'top',
                mask: false,
              })
            }}>
            显示
          </Button>
          <Button
            onPress={() => {
              handler.current && Toast.remove(handler.current)
            }}>
            清除
          </Button>
          <Button
            onPress={() => {
              Toast.removeAll()
            }}>
            关闭所有
          </Button>
        </List>
      </ScrollView>
    </Provider>
  )
}

export default ToastExample

const CountDownText = () => {
  const [count, setCount] = useState(5)
  const interval = useRef<any>()
  useEffect(() => {
    interval.current = setInterval(() => {
      setCount((x) => {
        if (x > 1) {
          return x - 1
        } else {
          return x
        }
      })
    }, 1000)
    return () => {
      interval.current && clearInterval(interval.current)
    }
  }, [])
  return <Text style={{ color: '#ffffff' }}>还剩 {count} 秒</Text>
}
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface ToastStyle {
  container: ViewStyle
  innerContainer: ViewStyle
  innerWrap: ViewStyle
  iconToast: ViewStyle
  textToast: ViewStyle
  content: TextStyle
  image: TextStyle
  centering: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<ToastStyle>({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'transparent',
      alignItems: 'center',
      zIndex: theme.toast_zindex,
    },
    innerContainer: {
      backgroundColor: 'transparent',
    },
    innerWrap: {
      alignItems: 'center',
      backgroundColor: theme.toast_fill,
      minWidth: 100,
    },
    iconToast: {
      borderRadius: theme.radius_lg,
      padding: theme.v_spacing_lg,
    },
    textToast: {
      borderRadius: theme.radius_sm,
      paddingVertical: theme.v_spacing_md,
      paddingHorizontal: theme.v_spacing_lg,
    },
    content: {
      color: theme.color_text_base_inverse,
      fontSize: theme.font_size_subhead,
    },
    image: {
      marginBottom: theme.v_spacing_xs,
    },
    centering: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.v_spacing_md,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 顶层定位容器，控制弹窗位置（顶部/底部/居中）和整体容器样式 -->
<View styles={{ container }} pointerEvents={/* mask ? undefined : 'box-none' */}>
  <!-- 内部容器，背景层样式 -->
  <View styles={{ innerContainer }}>
    <!-- 动画透明度控制容器，显示/隐藏动画 -->
    <Animated.View style={{ opacity: /* fadeAnim.current */ }}>
      <!-- 内容包裹容器：根据是否有 icon 选择iconToast或textToast样式 -->
      <View styles={{ innerWrap, iconToast /* 有icon时 */, textToast /* 无icon时 */ }}>
        <!-- 图标区域，根据type和icon渲染不同icon或loading指示器 -->
        <!-- 
          iconDom节点
          对应 styles.centering（loading时，内容居中）
          对应 styles.image（普通图标样式）
          动态：根据 type 和 icon 渲染 ActivityIndicator 或 Icon 组件或传入 ReactNode 
        -->
        {iconDom}
        <!-- 文字内容 -->
        <!-- 
          对应 styles.content（文本样式）
          支持自定义传入 content 为 ReactNode 或字符串（字符串则用<Text>包裹）
        -->
        {React.isValidElement(content) ? content : <Text styles={{ content }} />}
      </View>
    </Animated.View>
  </View>
</View>
```

---

# tooltip Semantic

Source: https://rn.mobile.ant.design/components/tooltip/semantic.md

## Tooltip

### Usage Example

```jsx
import {
  Button,
  Icon,
  List,
  Provider,
  Toast,
  Tooltip,
} from '@ant-design/react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Action, TooltipProps } from '../PropsType'

const actions: Action[] = [
  { key: 'scan', icon: <Icon name="scan" />, text: '扫一扫' },
  { key: 'payment', icon: <Icon name="pay-circle" />, text: '付钱/收钱' },
  { key: 'bus', icon: <Icon name="qrcode" />, text: '乘车码' },
  { key: 'assistant', icon: <Icon name="ant-design" />, text: '智能助理' },
]

export default function TooltipExample() {
  const [placement, setPlacement] =
    useState<TooltipProps['placement']>('top-start')

  useEffect(() => {
    let current = 0

    const timer = setInterval(() => {
      if (current >= directionList.length - 1) {
        current = 0
      } else {
        current += 1
      }
      setPlacement(directionList[current])
    }, 2000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Provider>
      <ScrollView {...Tooltip.scrollProps}>
        <List renderHeader="基本用法">
          <Tooltip
            content="Hello World"
            trigger="onPress"
            placement="right"
            defaultVisible>
            <Button style={{ alignSelf: 'flex-start', margin: 10 }}>
              点我
            </Button>
          </Tooltip>
        </List>
        <List renderHeader="深色气泡">
          <Tooltip content="Hello World" placement="bottom" mode="dark" visible>
            <Button
              style={{ alignSelf: 'flex-start', margin: 10, marginBottom: 30 }}>
              点我
            </Button>
          </Tooltip>
        </List>
        <List renderHeader="气泡位置">
          <Tooltip
            visible
            content={
              <View>
                <Text>Popover</Text>
                <Text>Content</Text>
              </View>
            }
            styles={{ arrow: { borderTopColor: 'yellow' } }}
            placement={placement}>
            <Button style={{ alignSelf: 'center', margin: 10 }}>
              {placement}
            </Button>
          </Tooltip>
        </List>
        <List renderHeader="浅色气泡菜单">
          <Tooltip.Menu
            actions={actions}
            placement="bottom-start"
            onAction={(node) => Toast.show(`选择了 ${node.text}`)}
            trigger="onPress">
            <Button style={{ alignSelf: 'flex-start', margin: 10 }}>
              点我
            </Button>
          </Tooltip.Menu>
        </List>
        <List renderHeader="深色气泡菜单">
          <Tooltip.Menu
            mode="dark"
            actions={actions}
            placement="bottom-start"
            onAction={(node) => Toast.show(`选择了 ${node.text}`)}
            trigger="onPress">
            <Button style={{ alignSelf: 'flex-start', margin: 10 }}>
              点我
            </Button>
          </Tooltip.Menu>
        </List>
        <List renderHeader="超过最大数量，隐藏滚动">
          <Tooltip.Menu
            actions={actions}
            maxCount={2}
            onAction={(node) => Toast.show(`选择了 ${node.text}`)}
            placement="bottom-start"
            trigger="onPress">
            <Button style={{ alignSelf: 'flex-start', margin: 10 }}>
              点我
            </Button>
          </Tooltip.Menu>
        </List>
      </ScrollView>
    </Provider>
  )
}

const directionList = [
  'top-start',
  'top',
  'top-end',
  'right-start',
  'right',
  'right-end',
  'bottom-end',
  'bottom',
  'bottom-start',
  'left-end',
  'left',
  'left-start',
] as const
```

### styles

```tsx
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { ListItemStyle } from '../../list/style'
import { Theme } from '../../style'

export interface TooltipStyle extends ListItemStyle {
  tooltip: ViewStyle
  tooltipText: TextStyle
  arrow: ViewStyle
}

export default (theme: Theme, mode?: 'dark' | 'light') =>
  StyleSheet.create<Partial<TooltipStyle & ListItemStyle>>({
    tooltip: {
      zIndex: theme.tooltip_zindex,
      backgroundColor: mode === 'dark' ? theme.tooltip_dark : theme.fill_base,
      borderRadius: theme.tooltip_border_radius,
      shadowColor: 'rgba(51, 51, 51, 1)',
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 12,
      elevation: 12,
      minWidth: 32,
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
    tooltipText: {
      color: mode === 'dark' ? '#ffffff' : theme.color_text_base,
    },
    arrow: {
      width: 0,
      height: 0,
      // borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',
      borderStyle: 'solid',
      borderWidth: theme.tooltip_arrow_size,
      position: 'absolute',
    },

    // ListItem
    underlayColor: {
      backgroundColor: 'transparent',
    },
    Line: {
      flex: undefined,
    },
    Content: {
      flex: undefined,
      color: mode === 'dark' ? '#ffffff' : theme.color_text_base,
    },
    Item: {
      backgroundColor: 'transparent',
      paddingLeft: 0,
    },
  })
```

### Abstract DOM Structure

```html
<!-- 
  Wrapper 组件，包裹tooltip触发子元素
  视觉用途：触发区域容器，包含 children，响应触发事件（如点击）
  不直接对应样式，触发事件由 trigger 控制
-->
<Wrapper>
  <!-- children 触发元素，透传 -->
</Wrapper>

<!-- 
  条件渲染的 tooltip 容器，visible 为 true 时显示
  视觉用途：tooltip 弹出层 主容器
  对应 styles.tooltip：主容器样式，定义布局、背景等
  支持 style 基础属性透传，用于自定义外部 style
-->
<View style={style} styles={{ tooltip }}>

  <!-- 
    箭头容器，渲染 tooltip 指示箭头
    视觉用途：tooltip 箭头，显示方向指示
    对应 styles.arrow：箭头的样式，包含大小颜色和旋转（动态）
    动态样式 keys: arrow（箭头位置样式动态计算）、tooltip_arrow_size（大小相关）
  -->
  <View styles={{ arrow }} />

  <!-- 
    tooltip 内容区域，显示提示文字或自定义内容
    视觉用途：tooltip 主要文本或内容显示区域
    对应 styles.tooltipText：内容文本样式，控制字体颜色、大小等
  -->
  <AntmView styles={{ tooltipText }} />
</View>
```

---
