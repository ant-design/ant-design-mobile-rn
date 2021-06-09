import React from 'react'
import {
  Image,
  ImageStyle,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native'
import { WithTheme, WithThemeStyles } from '../style'
import CardStyles, { CardStyle } from './style'

export interface CardHeaderPropsType
  extends WithThemeStyles<
    Pick<
      CardStyle,
      | 'headerContentWrap'
      | 'headerContent'
      | 'headerExtraWrap'
      | 'headerExtra'
      | 'headerImage'
      | 'headerTitle'
      | 'headerWrap'
    >
  > {
  title?: React.ReactNode
  /** need url of img, if this is string. */
  thumb?: React.ReactNode
  extra?: React.ReactNode
}
export interface CardHeaderProps extends CardHeaderPropsType {
  style?: StyleProp<ViewStyle>
  thumbStyle?: StyleProp<ImageStyle>
}

export default class CardHeader extends React.Component<CardHeaderProps, any> {
  static defaultProps = {
    thumbStyle: {},
    style: {},
  }

  render() {
    const { title, thumb, thumbStyle, extra, style, styles, ...restProps } =
      this.props
    return (
      <WithTheme styles={styles} themeStyles={CardStyles}>
        {(s) => {
          const titleDom =
            title === undefined ? null : React.isValidElement(title) ? (
              <View style={s.headerContentWrap}>{title}</View>
            ) : (
              <Text style={s.headerContent}>{title}</Text>
            )

          const extraDom =
            extra === undefined ? null : React.isValidElement(extra) ? (
              <View style={s.headerExtraWrap}>{extra}</View>
            ) : (
              <Text style={[s.headerExtra]}>{extra}</Text>
            )

          return (
            <View style={[s.headerWrap, style]} {...restProps}>
              <View style={[s.headerTitle]}>
                {typeof thumb === 'string' ? (
                  <Image
                    source={{ uri: thumb }}
                    style={[s.headerImage, thumbStyle]}
                  />
                ) : (
                  thumb
                )}
                {titleDom}
              </View>
              {extra ? extraDom : null}
            </View>
          )
        }}
      </WithTheme>
    )
  }
}
