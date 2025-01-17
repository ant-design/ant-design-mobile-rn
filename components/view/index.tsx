import React from 'react'
import {
  StyleProp,
  Text,
  TextProps,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native'

export interface ViewInterface extends ViewProps, TextProps {
  children?: React.ReactNode | React.ReactText
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>
}
class AntmView extends React.PureComponent<ViewInterface> {
  render() {
    const { children, ...restProps } = this.props

    if (['number', 'string'].includes(typeof children)) {
      return <Text {...restProps} children={children} />
    }

    if (Array.isArray(children)) {
      if (children.some(React.isValidElement)) {
        return (
          <View {...restProps}>
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return child
              }
              return <Text>{child}</Text>
            })}
          </View>
        )
      } else {
        return (
          <Text
            {...restProps}
            children={children.reduce((a, b) => (a || '') + '' + (b || ''), '')}
          />
        )
      }
    }

    return <View {...this.props} />
  }
}

export default AntmView
