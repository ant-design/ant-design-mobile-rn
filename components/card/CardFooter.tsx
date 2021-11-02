import React from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'
import { WithTheme, WithThemeStyles } from '../style'
import CardStyles, { CardStyle } from './style'

export interface CardFooterPropsType {
  content?: React.ReactNode
  extra?: React.ReactNode
}

export interface CardFooterProps
  extends CardFooterPropsType,
    WithThemeStyles<
      Pick<CardStyle, 'footerContent' | 'footerExtra' | 'footerWrap'>
    > {
  style?: StyleProp<ViewStyle>
}

export default class CardFooter extends React.Component<CardFooterProps, any> {
  static defaultProps = {
    style: {},
  }

  render() {
    const { content, extra, styles, style, ...restProps } = this.props

    return (
      <WithTheme styles={styles} themeStyles={CardStyles}>
        {(s) => {
          const contentDom =
            content !== undefined && React.isValidElement(content) ? (
              <View style={{ flex: 1 }}>{content}</View>
            ) : (
              <Text style={s.footerContent}>{content}</Text>
            )

          const extraDom =
            extra !== undefined && React.isValidElement(extra) ? (
              <View style={{ flex: 1 }}>{extra}</View>
            ) : (
              <Text style={[s.footerExtra]}>{extra}</Text>
            )

          return (
            <View style={[s.footerWrap, style]} {...restProps}>
              {contentDom}
              {extra ? extraDom : null}
            </View>
          )
        }}
      </WithTheme>
    )
  }
}
