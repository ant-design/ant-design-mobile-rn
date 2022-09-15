import React from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'
import { WithTheme, WithThemeStyles } from '../style'
import BadgeStyles, { BadgeStyle } from './style/index'

export interface BadgeProps extends WithThemeStyles<BadgeStyle> {
  style?: StyleProp<ViewStyle>
  size?: 'large' | 'small'
  overflowCount?: number
  corner?: boolean
  dot?: boolean
  text?: any
  children?: React.ReactNode
}

export default class Badge extends React.Component<BadgeProps, any> {
  static defaultProps = {
    size: 'small',
    overflowCount: 99,
    dot: false,
    corner: false,
  }

  render() {
    // tslint:disable:prefer-const
    let {
      styles,
      style,
      children,
      text,
      size,
      overflowCount,
      dot,
      corner,
      ...restProps // todo: hot
    } = this.props
    return (
      <WithTheme themeStyles={BadgeStyles} styles={this.props.styles}>
        {(s) => {
          text =
            typeof text === 'number' && text > (overflowCount as number)
              ? `${overflowCount}+`
              : text

          // dot mode don't need text
          if (dot) {
            text = ''
          }
          // fake styles
          const fakeStyles = s as any as { [key: string]: ViewStyle }
          const badgeCls = corner ? 'textCorner' : 'textDom'
          const contentDom = !dot ? (
            <View
              {...restProps}
              style={[s[badgeCls], fakeStyles[`${badgeCls}${size}`]]}>
              <Text style={[s.text]}>{text}</Text>
            </View>
          ) : (
            <View
              {...restProps}
              style={[s.dot, fakeStyles[`dotSize${size}`]]}
            />
          )

          return (
            <View style={[s.wrap, style]}>
              <View style={[fakeStyles[`${badgeCls}Wrap`]]}>
                {children}
                {text || dot ? contentDom : null}
              </View>
            </View>
          )
        }}
      </WithTheme>
    )
  }
}
