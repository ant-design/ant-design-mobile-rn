import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { WithTheme } from '../style';
export interface WhiteSpaceProps {
  style?: StyleProp<ViewStyle>;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
class WhiteSpace extends React.Component<WhiteSpaceProps, any> {
  static defaultProps = {
    size: 'md',
  };

  render() {
    const { size, style } = this.props;
    return (
      <WithTheme>
        {(_, theme) => (
          <View style={[{ height: theme[`v_spacing_${size}`] }, style]} />
        )}
      </WithTheme>
    );
  }
}

export default WhiteSpace;
