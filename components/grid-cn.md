# Grid

在水平和垂直方向，将布局切分成若干等大的区块。

### 规则
- 区块中的内容应该是同类元素，eg：都是图片，或者都是图标+文字。

## 代码演示

```tsx
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

## API

| 属性           | 说明                                   | 类型                              | 默认值      |
| -------------- | -------------------------------------- | --------------------------------- | ----------- |
| data           | 传入的菜单数据                         | `Array<{icon, text}>`             | []          |
| onPress        | 点击每个菜单的回调函数                 | (el: Object, index: number): void | -           |
| columnNum      | 列数                                   | number                            | `4`         |
| hasLine        | 是否有边框                             | boolean                           | `true`      |
| isCarousel     | 是否跑马灯,                            | boolean                           | `false`     |
| carouselProps  | 跑马灯属性                             | CarouselProps                     | `{}` |
| carouselMaxRow | 如果是跑马灯, 一页跑马灯需要展示的行数 | number                            | `2`         |
| renderItem     | 自定义每个 grid 条目的创建函数         | (el, index) => React.Node         | -           |
| itemStyle      | 每个格子自定义样式                     | object                            | {}          |
`isCarousel = true` 模式时，还可以传递 [carousel](https://mobile.ant.design/components/carousel) 相关的 API。
