# Flex

Flex 是 CSS flex 布局的一个封装。

## 代码演示

```tsx
import { Button, Flex, WhiteSpace, WingBlank } from '@ant-design/react-native'
import React from 'react'
import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native'

const Circle = (props: any) => {
  const size = props.size || 20
  const style = {
    borderRadius: size / 2,
    backgroundColor: '#527fe4',
    width: size,
    height: size,
    margin: 1,
  }
  return <View style={style} />
}

export default class FlexExample extends React.Component<any, any> {
  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <WingBlank style={{ marginTop: 20, marginBottom: 5 }}>
          <Text style={{ marginBottom: 10 }}>项目的排列方向</Text>
          <Text>direction="row":主轴为水平方向，起点在左端</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <Button size="small">按钮1</Button>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <Button size="small">按钮2</Button>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <Button size="small">按钮3</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>direction="column":主轴为垂直方向，起点在上沿</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex direction="column">
            <Flex.Item style={{ paddingBottom: 4 }}>
              <Button size="small">按钮1</Button>
            </Flex.Item>
            <Flex.Item style={{ paddingBottom: 4 }}>
              <Button size="small">按钮2</Button>
            </Flex.Item>
            <Flex.Item style={{ paddingBottom: 4 }}>
              <Button size="small">按钮3</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>
            项目在主轴上的对齐方式
          </Text>
          <Text>justify="start":左对齐</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex justify="start">
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>justify="center":居中</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex justify="center">
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>justify="end":右对齐</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex justify="end">
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>justify="between":两端对齐，项目之间的间隔都相等</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex justify="between">
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>justify="around":每个项目两侧的间隔相等</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex justify="around">
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>
            项目在交叉轴上的对齐方式
          </Text>
          <Text>align="start":交叉轴的起点对齐</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex align="start" style={{ height: 30 }}>
            <Text
              style={{
                fontSize: 20,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              兜兜
            </Text>
            <Text
              style={{
                fontSize: 18,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              兜兜
            </Text>
            <Text
              style={{
                fontSize: 16,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              兜兜
            </Text>
            <Text
              style={{
                fontSize: 14,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              兜兜
            </Text>
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>align="center":交叉轴的中点对齐</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex align="center" style={{ height: 30 }}>
            <Text
              style={{
                fontSize: 20,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              兜兜
            </Text>
            <Text
              style={{
                fontSize: 18,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              兜兜
            </Text>
            <Text
              style={{
                fontSize: 16,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              兜兜
            </Text>
            <Text
              style={{
                fontSize: 14,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              兜兜
            </Text>
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>align="end":交叉轴的终点对齐</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex align="end" style={{ height: 30 }}>
            <Text
              style={{
                fontSize: 20,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              兜兜
            </Text>
            <Text
              style={{
                fontSize: 18,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              兜兜
            </Text>
            <Text
              style={{
                fontSize: 16,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              兜兜
            </Text>
            <Text
              style={{
                fontSize: 14,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              兜兜
            </Text>
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>
            align="stretch":如果项目未设置高度或设为auto，将占满整个容器的高度
          </Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <WingBlank>
            <Flex align="stretch" style={{ height: 70 }}>
              <Text
                style={{
                  fontSize: 20,
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#527fe4',
                }}>
                兜兜
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#527fe4',
                }}>
                兜兜
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#527fe4',
                }}>
                兜兜
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#527fe4',
                }}>
                兜兜
              </Text>
            </Flex>
          </WingBlank>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text style={{ marginBottom: 10 }}>是否折行</Text>
          <Text>wrap="wrap":换行</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <TouchableWithoutFeedback onPress={() => ({})}>
            <Flex wrap="wrap">
              {'ooooooooooooooooooooooooooooo'.split('').map((char, i) => (
                <Circle key={`${i}-${char}`} />
              ))}
            </Flex>
          </TouchableWithoutFeedback>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>wrap="nowrap":不换行</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex wrap="nowrap" onPress={() => ({})}>
            {'ooooooooooooooooooooooooooooo'.split('').map((char, i) => (
              <Circle key={`${i}-${char}`} />
            ))}
          </Flex>
        </WingBlank>
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
      </ScrollView>
    )
  }
}
```

## API

### Flex

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| direction | 项目定位方向，值可以为 `row`,`row-reverse`,`column`,`column-reverse`, RN 仅支持`row`,`column`  | String  | `row` |
| wrap | 子元素的换行方式，可选`nowrap`,`wrap`,`wrap-reverse`, RN 仅支持`nowrap`,`wrap`  | String  | `nowrap` |
| justify  | 子元素在主轴上的对齐方式，可选`start`,`end`,`center`,`between`,`around`    | String   | `start` |
| align    | 子元素在交叉轴上的对齐方式，可选`start`,`center`,`end`,`baseline`,`stretch` RN仅支持`start`,`end`,`center`,`stretch`  | String   | `center` |

### Flex.Item

Flex.Item 组件默认加上了样式`flex:1`,保证所有 item 平均分宽度, Flex 容器的 children 不一定是 Flex.Item
