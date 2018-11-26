import React from 'react';
import { Grid, Icon } from '../../';
import { ScrollView } from 'react-native';
import {
  outlineGlyphMap,
  OutlineGlyphMapType,
} from '@ant-design/icons-react-native/lib/outline';

export default class IConDemo extends React.Component<any, any> {
  render() {
    const outlineData = Object.keys(outlineGlyphMap).map(
      (item: OutlineGlyphMapType) => ({
        icon: <Icon name={item} />,
        text: item,
      }),
    );

    return (
      <ScrollView>
        <Grid data={outlineData} columnNum={3} hasLine={false} />
      </ScrollView>
    );
  }
}

export const title = 'Icon';
export const description = 'Icon Example';
