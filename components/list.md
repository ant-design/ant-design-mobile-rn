# List

A single and continuous block content is vertically arranged to display current contents, status and available operations. eg：Contact List.

In case you need an infinite scroll list - consider using [ListView](https://mobile.ant.design/components/list-view/) component.

### Rule
- Generally `List` consists of main infomation, main operations, secondary infomation and secondary operations.
- The main infomation and main operations are placed on the left side of list, and secondary infomation and secondary operations are placed on the right side.

## Examples

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

Properties | Descrition | Type | Default | Version |
-----------|------------|------|---------|---------|
| renderHeader       | list heder  | (): void |    | |
| renderFooter       | list footer  | (): void |    | |
| styles | Semantic DOM style | [ListStyle](#liststyle-interface) | - | `5.2.1` |

### List.Item

Properties | Descrition | Type | Default | Version |
-----------|------------|------|---------|---------|
| thumb    | thumbnail on the left side of `List`(string type will be used to set img src)  | String \| React.Element | | |
| extra    | extra content on the right side of `List` | String \| React.Element | | |
| arrow    | arrow direction, options: `horizontal`,`up`,`down`, `empty`; `empty` option may hide the dom  | String | | |
| align    | vertical alignment of child elements，options: `top`,`middle`,`bottom`  | String   | `middle` | | |
| onPress  | callback is called when  list is clicked | Same as [TouchableHighlightProps['onPress']](#touchablehighlightprops) | | |
| multipleLine | multiple line | Boolean  | `false`  | |
| wrap     | Whether to wrap long texts, otherwise it will be hidden by default. | Boolean  | `false` | |
| styles   | Semantic DOM style | [ListItemStyle](#listitemstyle-interface) | - | `5.2.1` |

### TouchableHighlightProps

New in `5.2.1`. In addition, all properties of [TouchableHighlightProps](https://reactnative.dev/docs/touchablehighlight) are supported; 
when setting `onPress` props, it has a default touch style:
<br/> `{ underlayColor:'#dddddd', activeOpacity: 0.5 }`

### List.Item.Brief

Brief infomation

Properties | Descrition | Type | Default | Version |
-----------|------------|------|---------|---------|
| wrap     | Whether to wrap long texts, otherwise it will be hidden by default. | Boolean  | `false` | |
| styles   | Semantic DOM style | [BriefStyle](#briefstyle-interface) | - | `5.2.1` |

### ListStyle interface

```typescript
interface ListStyle {
  List: ViewStyle
  Header: TextStyle
  Footer: TextStyle
  Body: ViewStyle
  BodyBottomLine: ViewStyle
}
```
### ListItemStyle interface

```typescript
interface ListItemStyle {
  underlayColor: ViewStyle // ListItem is a TouchableHighlight
  
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
### BriefStyle interface

```typescript
interface BriefStyle {
  Brief: ViewStyle
  BriefText: TextStyle
}
```
