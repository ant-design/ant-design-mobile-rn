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
