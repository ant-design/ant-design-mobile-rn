import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { WithTheme, WithThemeStyles } from '../style'
import cardStyles, { CardStyle } from './style'

export interface CardBodyProps
  extends WithThemeStyles<Pick<CardStyle, 'body'>> {
  style?: StyleProp<ViewStyle>
}

export default class CardBody extends React.Component<CardBodyProps, any> {
  static defaultProps = {
    style: {},
  }

  render() {
    const { style, styles, ...restProps } = this.props
    return (
      <WithTheme styles={styles} themeStyles={cardStyles}>
        {(s) => <View style={[s.body, style]} {...restProps} />}
      </WithTheme>
    )
  }
}
