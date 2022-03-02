import {
  outlineGlyphMap,
  OutlineGlyphMapType,
} from '@ant-design/icons-react-native/lib/outline'
import React from 'react'
import { ScrollView } from 'react-native'
import { Grid, Icon, SearchBar } from '../../'
const data = Object.keys(outlineGlyphMap).map((item: OutlineGlyphMapType) => ({
  icon: <Icon name={item} />,
  text: item,
}))
export default class IConDemo extends React.Component<any, any> {
  state = {
    data,
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
        <Grid data={this.state.data} columnNum={3} hasLine={false} />
      </ScrollView>
    )
  }
}

export const title = 'Icon'
export const description = 'Icon Example'
