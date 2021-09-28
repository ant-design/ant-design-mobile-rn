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

interface ViewInterface extends ViewProps, TextProps {
  children?: React.ReactNode | React.ReactText
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>
}
class AntmView extends React.PureComponent<ViewInterface> {
  render() {
    const { children, ...restProps } = this.props

    if (React.isValidElement(children)) {
      return <View {...restProps} children={children} />
    }

    if (['number', 'string'].includes(typeof children)) {
      return <Text {...restProps} children={children} />
    }

    if (Array.isArray(children)) {
      if (children.some(React.isValidElement)) {
        return (
          <View {...restProps}>
            {React.Children.map(children, (child) => (
              <AntmView children={child} />
            ))}
          </View>
        )
      } else {
        return (
          <Text
            {...restProps}
            children={children.reduce((a, b) => (a || '') + '' + (b || ''))}
          />
        )
      }
    }

    return null
  }
}

export default AntmView
