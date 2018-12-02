import React from 'react';
import { TextProps } from 'react-native';
import {
  IconOutline,
  OutlineGlyphMapType,
} from '@ant-design/icons-react-native';
import variables from '../style/themes/default';

export interface IconProps extends TextProps {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | number;
  color?: string;
  name: OutlineGlyphMapType;
}

export default class Icon extends React.Component<IconProps, any> {
  static defaultProps = {
    size: 'md',
    color: variables.color_icon_base,
  };

  render() {
    const { size, color, name, ...rest } = this.props;
    const sizeMap: { [key: string]: number } = {
      xxs: 15,
      xs: 18,
      sm: 21,
      md: 22,
      lg: 36,
    };
    const fontSize = typeof size === 'string' ? sizeMap[size] : size;

    return <IconOutline size={fontSize} color={color} name={name} {...rest} />;
  }
}
