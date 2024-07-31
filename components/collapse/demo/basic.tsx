import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { ActivityIndicator, Collapse, Icon, List, Result } from '../../'

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
