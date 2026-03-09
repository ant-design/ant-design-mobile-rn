# Icon

## How to Use

### 安装依赖

```bash
npm install @ant-design/icons-react-native@latest
```


### Linking

 - Add assets to your `react-native.config.js` ( If not exist, please create in project’s root directory )

   ```js
   module.exports = {
     assets: ['node_modules/@ant-design/icons-react-native/fonts'],
   };
   ```

 - Run the [`react-native-asset`](https://github.com/unimonkiez/react-native-asset)'s command and linking + unlinking is automatic

   ```bash
   npx react-native-asset
   ```
   will copy fonts to `ios` and `android` assets folder.
 - If you have an Expo managed project, skip the previous two steps and use [expo-font](https://docs.expo.dev/versions/latest/sdk/font/) to load the font directly:
   ```jsx
   import { useFonts } from 'expo-font';

   const [fontsLoaded] = useFonts({
    antoutline: require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
   })
   ```

## Examples

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

| Properties | Description         | Type                               | Default |
| ---------- | ------------------- | ---------------------------------- | ------- |
| name       | `OutlineGlyphMapType` | string                             |
| size       | icon size           | 'xxs'/'xs'/'sm'/'md'/'lg' / number | `md`    |
| color      | icon color          | Color                              | '#000'  |

 - Tips1: Clicking the icon in the demo will automatically copy the code to the `<Icon />`.
 - Tips2: By default, Icon uses the `outline` icon in `ant-design-icons`
