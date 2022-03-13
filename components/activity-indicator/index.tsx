import React from 'react'
import { ActivityIndicator, ColorValue, Text, View } from 'react-native'
import { WithTheme, WithThemeStyles } from '../style'
import ActivityIndicatorStyles, { ActivityIndicatorStyle } from './style/index'

export interface ActivityIndicatorNativeProps
  extends WithThemeStyles<ActivityIndicatorStyle> {
  color?: ColorValue
  animating?: boolean
  toast?: boolean
  size?: number | 'large' | 'small'
  text?: string
}

export default class RNActivityIndicator extends React.Component<
  ActivityIndicatorNativeProps,
  any
> {
  static defaultProps = {
    animating: true,
    color: 'gray',
    size: 'small',
    toast: false,
  }

  _renderToast() {
    const { color = 'white', size = 'large' } = this.props

    return (
      <WithTheme
        styles={this.props.styles}
        themeStyles={ActivityIndicatorStyles}>
        {(styles) => (
          <View style={[styles.container]}>
            <View style={[styles.innerContainer, { height: 89 }]}>
              <View style={[styles.wrapper]}>
                <ActivityIndicator color={color} size={size} />
                {this.props.text && (
                  <Text style={[styles.toast]}>{this.props.text}</Text>
                )}
              </View>
            </View>
          </View>
        )}
      </WithTheme>
    )
  }

  _renderSpinner() {
    const { color, size, text } = this.props
    return (
      <WithTheme
        styles={this.props.styles}
        themeStyles={ActivityIndicatorStyles}>
        {(styles) => (
          <View style={styles.spinner}>
            <ActivityIndicator color={color} size={size} />
            {text && <Text style={[styles.tip]}>{text}</Text>}
          </View>
        )}
      </WithTheme>
    )
  }

  render() {
    if (this.props.animating) {
      return this.props.toast ? this._renderToast() : this._renderSpinner()
    }
    return null
  }
}
