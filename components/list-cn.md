# List

单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表。

当你需要一个 infinite scroll 列表时，请使用 [ListView](https://mobile.ant.design/components/list-view/)。

### 规则
- 一般由主要信息、主要操作、次要信息、次要操作组成。
- 主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。

## 代码演示

```tsx
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

## API

### List

属性 | 说明 | 类型 | 默认值 | 版本 |
----|-----|------|-------|------
| renderHeader       | list heder  | (): void |  无  | |
| renderFooter       | list footer  | (): void |  无  | |
| styles | 语义化结构 style | [ListStyle](#liststyle-语义化样式) | - | `5.2.1` |

### List.Item

属性 | 说明 | 类型 | 默认值 | 版本 |
----|-----|------|-------|------
| thumb       | 缩略图(当为 string 类型时作为 img src)  | String \| React.Element |  无  | |
| extra      | 右边内容        | String \| React.Element |  无  | |
| arrow      | 箭头方向(右,上,下), 可选`horizontal`,`up`,`down`,`empty`，如果是`empty`则存在对应的dom,但是不显示   | String |   无  | |
| align    |  子元素垂直对齐，可选`top`,`middle`,`bottom`  | String   | `middle` | |
| onPress    | 点击事件的回调函数 | 同[TouchableHighlightProps['onPress']](#touchablehighlightprops) |  无  | |
| multipleLine    | 多行 | Boolean  | `false`  | |
| wrap    | 是否换行，默认情况下，文字超长会被隐藏， | Boolean  | `false`  ||
| styles | 语义化结构 style | [ListItemStyle](#listitemstyle-语义化样式) | - | `5.2.1` |

### TouchableHighlightProps
`5.2.1`新增。此外还支持 [TouchableHighlightProps](https://reactnative.dev/docs/touchablehighlight) 的所有属性，当设置 `onPress` 事件时，会有默认点击样式:
<br/> `{ underlayColor:'#dddddd', activeOpacity: 0.5 }`

### List.Item.Brief
辅助说明

属性 | 说明 | 类型 | 默认值 | 版本 |
----|-----|------|-------|------
| wrap    | 是否换行，默认情况下，文字超长会被隐藏， | Boolean  | `false`  | |
| styles | 语义化结构 style | [BriefStyle](#briefstyle-语义化样式) | - | `5.2.1` |

### ListStyle 语义化样式

```typescript
interface ListStyle {
  List: ViewStyle
  Header: TextStyle
  Footer: TextStyle
  Body: ViewStyle
  BodyBottomLine: ViewStyle
}
```
### ListItemStyle 语义化样式

```typescript
interface ListItemStyle {
  underlayColor: ViewStyle // ListItem其实是一个TouchableHighlight

  Item: ViewStyle // ListItem wrap
  Line: ViewStyle // borderBottom

  Thumb: ImageStyle
  Content: TextStyle
  Extra: TextStyle
  
  Arrow: TextStyle  // horizontal arrow
  ArrowV: TextStyle // up/down arrow
  multipleLine: ViewStyle
  multipleThumb: ImageStyle
}
```
### BriefStyle 语义化样式

```typescript
interface BriefStyle {
  Brief: ViewStyle
  BriefText: TextStyle
}
```
