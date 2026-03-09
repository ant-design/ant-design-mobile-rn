# Collapse

可以折叠/展开的内容区域。

### 规则
- 对复杂区域进行分组和隐藏，保持页面的整洁。
- 手风琴是一种特殊的折叠面板，只允许单个内容区域展开。

## 代码演示

```tsx
import { ActivityIndicator, Collapse, Icon, List, Result } from '@ant-design/react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

export default function CollapseExmple() {
  return (
    <ScrollView>
      <List renderHeader="手风琴模式">
        <Collapse accordion>
          <Collapse.Panel key="1" title="第一项">
            手风琴模式只能同时展开一个
          </Collapse.Panel>
          <Collapse.Panel key="2" title="第二项">
            手风琴模式只能同时展开一个
          </Collapse.Panel>
          <Collapse.Panel key="3" title="第三项">
            手风琴模式只能同时展开一个
          </Collapse.Panel>
        </Collapse>
      </List>
      <List renderHeader="自定义折叠图标">
        <Collapse
          defaultActiveKey={['1']}
          arrow={(active) =>
            active ? <Icon name="minus" /> : <Icon name="plus" />
          }>
          <Collapse.Panel key="1" title="第一项">
            你可以通过 Collapse 的 arrow 属性来控制全部面板的箭头
          </Collapse.Panel>
          <Collapse.Panel
            key="2"
            title="第二项"
            arrow={<Icon name="down-circle" />}>
            也可以通过 Collapse.Panel 的 arrow 属性来自定义单个面板的箭头
          </Collapse.Panel>
          <Collapse.Panel
            key="3"
            title="第三项"
            arrow={(active) =>
              active ? (
                <Icon name="check-circle" />
              ) : (
                <Icon name="close-circle" />
              )
            }>
            如果你给 arrow 属性传入的是是一个渲染函数，那么
            @ant-design/react-native 不会为你增加动画，arrow
            属性的效果就完全交由你自己来控制了
          </Collapse.Panel>
        </Collapse>
      </List>

      <List renderHeader="动态内容">
        <Collapse accordion>
          <Collapse.Panel key="1" title="第一项" destroyOnClose>
            <DynamicContent message="不可见时销毁 destroyOnClose={true}" />
          </Collapse.Panel>
          <Collapse.Panel key="2" title="第二项" forceRender>
            <DynamicContent message="预加载 forceRender={true}" />
          </Collapse.Panel>
        </Collapse>
      </List>
    </ScrollView>
  )
}

function DynamicContent(props: { message: string }) {
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      setTimeout(() => {
        setFinished(true)
      }, 1000)
    }
    loadData()
  }, [])

  return finished ? (
    <Result title="处理成功" message={props.message} />
  ) : (
    <ActivityIndicator />
  )
}
```

## API

### Collapse

属性 | 说明 | 类型 | 默认值 |
----|-----|------|-------|
| accordion | 是否开启手风琴模式 | `Boolean` | `false` |
| activeKey | 当前展开面板的 `key` | 手风琴模式：`string | null` <br/> 非手风琴模式：`string[]` | - |
| arrowIcon | 自定义箭头图标，<br/>如果是 ReactNode，会自动为你增加旋转动画效果 | `ReactNode | ((active: boolean) => React.ReactNode)` | - |
| defaultActiveKey | 默认展开面板的 `key` | 手风琴模式：`string | null` <br/> 非手风琴模式：`string[]` | - |
| onChange | 切换面板时触发	| 手风琴模式：`(activeKey: string | null) => void` <br/> 非手风琴模式：`(activeKey: string[]) => void` | - |
| styles | 语义化结构 style | 同 [ListStyle](/components/list-cn#liststyle-语义化样式) & [ListItemStyle](/components/list-cn#listitemstyle-语义化样式) | - |


### Collapse.Panel

属性 | 说明 | 类型 | 默认值 |
----|-----|------|-------|
| arrowIcon | 自定义箭头图标 | `ReactNode | ((active: boolean) => React.ReactNode)` | - |
| destroyOnClose | 不可见时是否销毁 `DOM` 结构 | `Boolean` | `false` |
| disabled | 是否为禁用状态 | `Boolean` | `false` |
| forceRender | 被隐藏时是否渲染 `DOM` 结构	 | `Boolean` | `false` |
| key | 唯一标识符 | `String` | - |
| onPress | 标题栏的点击事件 | `(event: GestureResponderEvent) => void` | - |
| styles | 语义化结构 style | 同 [ListItemStyle](/components/list-cn#listitemstyle-语义化样式) | - |
| title | 标题栏左侧内容 | `ReactNode` | - |
