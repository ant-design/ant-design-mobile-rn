# TabBar

Located at the bottom of the APP, to facilitate users to quickly switch between different functional modules。

### Rule
- Used as a class of APP classification, the number of tab between 3-5 is better。
- Even if a Tab is not available, do not disable or remove the Tab。
- Use Badge make a hint，stay can also know that there is content update。

## Examples

```tsx
import { Icon, SearchBar, TabBar } from '@ant-design/react-native'
import React from 'react'
import { Text, View } from 'react-native'

export default class BasicTabBarExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      selectedTab: 'redTab',
    }
  }

  renderContent(pageText: any) {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <SearchBar placeholder="Search" showCancelButton />
        <Text style={{ margin: 50 }}>{pageText}</Text>
      </View>
    )
  }

  onChangeTab(tabName: any) {
    this.setState({
      selectedTab: tabName,
    })
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#f5f5f5">
        <TabBar.Item
          title="Life"
          icon={<Icon name="home" />}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => this.onChangeTab('blueTab')}>
          {this.renderContent('Life Tab')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="ordered-list" />}
          title="Koubei"
          badge={2}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => this.onChangeTab('redTab')}>
          {this.renderContent('Koubei Tab')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="like" />}
          title="Friend"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => this.onChangeTab('greenTab')}>
          {this.renderContent('Friend Tab')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="user" />}
          title="My"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => this.onChangeTab('yellowTab')}>
          {this.renderContent('My Tab')}
        </TabBar.Item>
      </TabBar>
    )
  }
}
```

## API

### TabBar

Properties | Descrition | Type | Default
-----------|------------|------|--------
| barTintColor  | tabbar's background color     | String   | `white`    |
| tintColor  | selected's font color   | String | `#108ee9`   |
| unselectedTintColor | unselected's font color  | String | '#888'    |
| hidden   | whether it is hidden  | Boolean | false   |

### TabBar.Item

Properties | Descrition | Type | Default
-----------|------------|------|--------
| badge  | badge number  | Number \ String           | 无     |
| onPress  | on press the bar, need change component by yourself. state & selecte={true} | Function | `(){}`     |
| selected  | whether it is selected | Boolean | false     |
| icon  | the default icon | `Image Source | React.ReactNode` |      |
| selectedIcon  |  the icon of selected | `Image Source | React.ReactNode` |      |
| title  |  title | String |      |
| key  |  unique identification | String |   无   |
| iconStyle  |  icon style | String | { width: 28, height: 28 }     |
