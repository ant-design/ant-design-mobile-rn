import React from 'react'
import {
  Animated,
  Dimensions,
  LayoutChangeEvent,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native'
import { WithTheme, WithThemeStyles } from '../style'
import ProgressStyles, { ProgressStyle } from './style/index'

export interface ProgressProps extends WithThemeStyles<ProgressStyle> {
  wrapWidth?: number
  style?: StyleProp<ViewStyle>
  barStyle?: StyleProp<ViewStyle>
  percent?: number
  position?: 'fixed' | 'normal'
  unfilled?: boolean
  appearTransition?: boolean
}

export default class Progress extends React.Component<ProgressProps, any> {
  static defaultProps = {
    percent: 0,
    position: 'normal',
    unfilled: true,
    appearTransition: false,
  }

  constructor(props: ProgressProps) {
    super(props)
    this.state = {
      wrapWidth: props.wrapWidth || Dimensions.get('window').width,
      percentage: new Animated.Value(0),
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps: ProgressProps) {
    if (nextProps.wrapWidth !== this.props.wrapWidth) {
      this.setState({ wrapWidth: nextProps.wrapWidth })
    }
    if (
      this.props.appearTransition &&
      nextProps.percent !== this.props.percent
    ) {
      this.setState({
        percentage: new Animated.Value(this.getWidth(nextProps.percent)),
      })
    }
  }

  componentDidMount() {
    if (this.props.appearTransition) {
      this.state.percentage.setValue(0)
      Animated.timing(this.state.percentage, {
        toValue: this.getWidth(),
        duration: 1000,
        useNativeDriver: true,
      }).start()
    }
  }

  onLayout = (e: LayoutChangeEvent) => {
    this.setState({
      wrapWidth: e.nativeEvent.layout.width,
    })
  }

  normalPercent = (percent?: number) => {
    let widthPercent: any = 0
    if (percent !== undefined && percent > 0) {
      widthPercent = percent > 100 ? 100 : percent
    }
    return widthPercent
  }

  getWidth = (percent = this.props.percent) => {
    return this.state.wrapWidth * (this.normalPercent(percent) / 100)
  }

  render() {
    const { position, unfilled, style, barStyle } = this.props

    const percentStyle = {
      width: this.getWidth(),
      height: 0,
    }

    return (
      <WithTheme styles={this.props.styles} themeStyles={ProgressStyles}>
        {(styles) => {
          let child = (
            <View style={[styles.progressBar, percentStyle, barStyle]} />
          )
          if (this.props.appearTransition) {
            percentStyle.width = this.state.percentage
            child = (
              <Animated.View
                style={[styles.progressBar, percentStyle, barStyle]}
              />
            )
          }

          const outerStyle = [
            styles.progressOuter,
            position === 'fixed' ? { position: 'absolute', top: 0 } : {},
            !unfilled ? { backgroundColor: 'transparent' } : {},
            style,
          ] as ViewStyle

          return (
            <View onLayout={this.onLayout} style={outerStyle}>
              {child}
            </View>
          )
        }}
      </WithTheme>
    )
  }
}
