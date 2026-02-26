/**
 * 本地覆盖：先加载默认 DocLayout（会注入 dumi 默认 less），再加载本目录的 index.less，
 * 这样 index.less 里的样式会覆盖默认，无需使用 !important。
 */
import { Provider } from '@ant-design/react-native'
import DefaultDocLayout from 'dumi/theme-default/layouts/DocLayout'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import './index.less'

export default function DocLayout(props: any) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider>
        <DefaultDocLayout {...props} />
      </Provider>
    </GestureHandlerRootView>
  )
}
