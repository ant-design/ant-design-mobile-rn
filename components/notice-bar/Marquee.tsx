import React from 'react'
import {
  Animated,
  Easing,
  LayoutChangeEvent,
  StyleProp,
  Text,
  TextStyle,
  View,
} from 'react-native'

export interface MarqueeProps {
  text?: React.ReactNode
  loop?: boolean
  leading?: number
  trailing?: number
  className?: string
  fps?: number
  style?: StyleProp<TextStyle>
  maxWidth?: number
}

class Marquee extends React.PureComponent<MarqueeProps, any> {
  static defaultProps = {
    text: '',
    loop: false,
    leading: 500,
    trailing: 800,
    fps: 40,
    maxWidth: 1000,
  }

  texts: any
  left: any

  constructor(props: MarqueeProps) {
    super(props)

    this.texts = {}
    this.left = new Animated.Value(0)
    this.state = {
      twidth: 0,
      width: 0,
    }
  }

  onLayout = (e: LayoutChangeEvent) => {
    if (this.state.twidth) {
      return
    }

    this.setState(
      {
        twidth: e.nativeEvent.layout.width,
      },
      () => {
        // onLayout may be earlier than onLayoutContainer on android, can not be sure width < twidth at that time.
        this.tryStart()
      },
    )
  }

  tryStart() {
    if (this.state.twidth > this.state.width && this.state.width) {
      this.startMove()
    }
  }

  onLayoutContainer = (e: LayoutChangeEvent) => {
    if (!this.state.width) {
      this.setState(
        {
          width: e.nativeEvent.layout.width,
        },
        () => {
          this.left.setValue(0)
          this.tryStart()
        },
      )
    }
  }

  startMove = () => {
    const { fps = 40, loop } = this.props
    const SPPED = (1 / fps) * 1000
    // tslint:disable-next-line:no-this-assignment
    const { props } = this
    Animated.timing(this.left, {
      toValue: 1,
      duration: this.state.twidth * SPPED,
      easing: Easing.linear,
      delay: props.leading,
      isInteraction: false,
      useNativeDriver: true,
    }).start(() => {
      if (loop) {
        this.moveToHeader()
      }
    })
  }

  moveToHeader = () => {
    Animated.timing(this.left, {
      toValue: 0,
      duration: 0,
      delay: this.props.trailing,
      isInteraction: false,
      useNativeDriver: true,
    }).start(() => {
      this.startMove()
    })
  }

  render() {
    const { width, twidth } = this.state
    const { style, text, maxWidth } = this.props

    const textChildren = (
      <Text
        onLayout={this.onLayout}
        numberOfLines={1}
        ellipsizeMode="tail"
        style={style}>
        {text}
      </Text>
    )

    return (
      <View
        style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
        onLayout={this.onLayoutContainer}>
        <Animated.View
          // tslint:disable-next-line:jsx-no-multiline-js
          style={{
            flexDirection: 'row',
            transform: [
              {
                translateX: this.left.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -twidth + width],
                }),
              },
            ],
            width: maxWidth,
          }}>
          {textChildren}
        </Animated.View>
      </View>
    )
  }
}

export default Marquee
