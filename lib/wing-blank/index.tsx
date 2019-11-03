import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { WithTheme } from '../style';

export interface WingBlankProps {
  style?: StyleProp<ViewStyle>;
  size?: 'sm' | 'md' | 'lg';
}
class WingBlank extends React.Component<WingBlankProps, any> {
  static defaultProps = {
    size: 'lg',
  };

  render() {
    const { size, style, children } = this.props;
    return (
      <WithTheme>
        {(_, theme) => {
          const margin = theme[`h_spacing_${size}`];
          return (
            <View style={[{ marginLeft: margin, marginRight: margin }, style]}>
              {children}
            </View>
          );
        }}
      </WithTheme>
    );
  }
}

export default WingBlank;
