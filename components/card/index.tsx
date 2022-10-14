import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { WithTheme, WithThemeStyles } from '../style'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import CardHeader from './CardHeader'
import CardStyles, { CardStyle } from './style/index'

export interface CardNativeProps extends WithThemeStyles<CardStyle> {
  style?: StyleProp<ViewStyle>
  full?: boolean
  children?: React.ReactNode
}

export default class Card extends React.Component<CardNativeProps, any> {
  static defaultProps = {
    style: {},
    full: false,
  }

  static Header = CardHeader
  static Body = CardBody
  static Footer = CardFooter

  render() {
    const { style, styles, full, children, ...restProps } = this.props
    return (
      <WithTheme themeStyles={CardStyles} styles={styles}>
        {(s) => {
          const cardStyle = full ? s.full : {}
          const childDom = React.Children.map(children, (child) =>
            React.cloneElement(child as React.ReactElement<any>, { s }),
          )
          return (
            <View style={[s.card, cardStyle, style]} {...restProps}>
              {childDom}
            </View>
          )
        }}
      </WithTheme>
    )
  }
}
