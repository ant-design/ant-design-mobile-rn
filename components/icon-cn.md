# Icon

## 如何使用

### 安装依赖

```bash
npm install @ant-design/icons-react-native@latest
```


### Linking

 - 将字体资源路径配置到根目录下的 `react-native.config.js` 文件中 ( 如果没有，请创建 )

   ```js
   module.exports = {
     assets: ['node_modules/@ant-design/icons-react-native/fonts'],
   };
   ```

 - 然后执行 [react-native-asset](https://github.com/unimonkiez/react-native-asset) 的命令

   ```bash
   npx react-native-asset
   ```
   字体文件将会自动复制到`ios` 和 `android` 资源文件中。
   
 - 如果使用Expo来构建项目，省略上两步，直接使用 [expo-font](https://docs.expo.dev/versions/latest/sdk/font/) 加载字体：
   ```jsx
   import { useFonts } from 'expo-font';

   const [fontsLoaded] = useFonts({
    antoutline: require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
   })
   ```

## 代码演示

```tsx
import {
  outlineGlyphMap,
  OutlineGlyphMapType,
} from '@ant-design/icons-react-native/lib/outline'
import { Grid, Icon, SearchBar, Toast } from '@ant-design/react-native'
import React from 'react'
import { ScrollView } from 'react-native'
const data = Object.keys(outlineGlyphMap).map((item: OutlineGlyphMapType) => ({
  icon: <Icon name={item} />,
  text: item,
}))
export default class IConDemo extends React.Component<any, any> {
  state = {
    data,
  }
  handlePress = (dataItem: { icon?: any; text?: string }) => {
    Toast.show(`<Icon name="${dataItem.text}" />`)
  }
  render() {
    return (
      <ScrollView>
        <SearchBar
          placeholder="Search by icon name"
          onChange={(text) => {
            this.setState(() => ({
              data: data.filter((d) => d.text.match(new RegExp(text, 'gi'))),
            }))
          }}
        />
        <Grid
          data={this.state.data}
          columnNum={3}
          hasLine={false}
          onPress={this.handlePress}
        />
      </ScrollView>
    )
  }
}

export const title = 'Icon'
export const description = 'Icon Example'
```

## API

| 属性  | 说明                | 类型                               | 默认值 |
| ----- | ------------------- | ---------------------------------- | ------ |
| name  | OutlineGlyphMapType | string                             |
| size  | 图标大小            | 'xxs'/'xs'/'sm'/'md'/'lg' / number | `md`   |
| color | 图标颜色            | Color                              | '#000' |

 - 注1：Demo中点击图标可自动复制`<Icon />`代码。
 - 注2：关于`OutlineGlyphMapType`，默认现在Icon使用了 `ant-design-icons` 里面的`outline` 图标。
