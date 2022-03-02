import React from 'react'
import { ActivityIndicator, Animated, Text, View } from 'react-native'
import Icon, { IconNames } from '../icon'
import { WithTheme, WithThemeStyles } from '../style'
import ToastStyles, { ToastStyle } from './style/index'

export interface ToastProps extends WithThemeStyles<ToastStyle> {
  content: string | React.ReactNode
  duration?: number
  onClose?: () => void
  mask?: boolean
  type?: string
  onAnimationEnd?: () => void
}

export default class ToastContainer extends React.Component<ToastProps, any> {
  static defaultProps = {
    duration: 3,
    mask: true,
    onClose() {},
  }

  anim: Animated.CompositeAnimation | null

  constructor(props: ToastProps) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(0),
    }
  }

  componentDidMount() {
    const { onAnimationEnd } = this.props
    const duration = this.props.duration as number
    const timing = Animated.timing
    if (this.anim) {
      this.anim = null
    }
    const animArr = [
      timing(this.state.fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.delay(duration * 1000),
    ]
    if (duration > 0) {
      animArr.push(
        timing(this.state.fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      )
    }
    this.anim = Animated.sequence(animArr)
    this.anim.start(() => {
      if (duration > 0) {
        this.anim = null
        if (onAnimationEnd) {
          onAnimationEnd()
        }
      }
    })
  }

  componentWillUnmount() {
    if (this.anim) {
      this.anim.stop()
      this.anim = null
    }

    const { onClose } = this.props
    if (onClose) {
      onClose()
    }
  }

  render() {
    const { type = '', content, mask } = this.props
    return (
      <WithTheme styles={this.props.styles} themeStyles={ToastStyles}>
        {(styles) => {
          const iconType: {
            [key: string]: IconNames
          } = {
            success: 'check-circle',
            fail: 'close-circle',
            offline: 'frown',
          }

          let iconDom: React.ReactElement<any> | null = null
          if (type === 'loading') {
            iconDom = (
              <ActivityIndicator
                animating
                style={[styles.centering]}
                color="white"
                size="large"
              />
            )
          } else if (type === 'info') {
            iconDom = null
          } else {
            iconDom = (
              <Icon
                name={iconType[type]}
                style={styles.image}
                color="white"
                size={36}
              />
            )
          }

          return (
            <View
              style={[styles.container]}
              pointerEvents={mask ? undefined : 'box-none'}>
              <View style={[styles.innerContainer]}>
                <Animated.View style={{ opacity: this.state.fadeAnim }}>
                  <View
                    style={[
                      styles.innerWrap,
                      iconDom ? styles.iconToast : styles.textToast,
                    ]}>
                    {iconDom}
                    {React.isValidElement(content) ? (
                      content
                    ) : (
                      <Text style={styles.content}>{content}</Text>
                    )}
                  </View>
                </Animated.View>
              </View>
            </View>
          )
        }}
      </WithTheme>
    )
  }
}
