import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, ScrollView, Text } from 'react-native'
import { Button, List, Switch, Toast } from '../../'

const ToastExample = () => {
  const handler = useRef<number>()
  const [enableMask, setEnableMask] = useState(Toast.getConfig().mask)
  const [enableStack, setEnableStack] = useState(Toast.getConfig().stackable)

  return (
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
