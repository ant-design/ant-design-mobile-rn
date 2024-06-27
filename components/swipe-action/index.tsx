import React from 'react'
import {
  Animated,
  I18nManager,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native'
import {
  PanGestureHandlerProps,
  RectButton,
} from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { SwipeActionProps } from './PropsType'
import styles from './style'

declare type SwipeableExcludes = Exclude<
  keyof PanGestureHandlerProps,
  'onGestureEvent' | 'onHandlerStateChange'
>
interface SwipeableProps
  extends Pick<PanGestureHandlerProps, SwipeableExcludes> {
  enableTrackpadTwoFingerGesture?: boolean
  friction?: number
  leftThreshold?: number
  rightThreshold?: number
  overshootLeft?: boolean
  overshootRight?: boolean
  overshootFriction?: number
  onSwipeableLeftOpen?: () => void
  onSwipeableRightOpen?: () => void
  onSwipeableOpen?: () => void
  onSwipeableClose?: () => void
  onSwipeableLeftWillOpen?: () => void
  onSwipeableRightWillOpen?: () => void
  onSwipeableWillOpen?: () => void
  onSwipeableWillClose?: () => void
  /**
   *
   * This map describes the values to use as inputRange for extra interpolation:
   * AnimatedValue: [startValue, endValue]
   *
   * progressAnimatedValue: [0, 1]
   * dragAnimatedValue: [0, +]
   *
   * To support `rtl` flexbox layouts use `flexDirection` styling.
   * */
  renderLeftActions?: (
    progressAnimatedValue: Animated.AnimatedInterpolation,
    dragAnimatedValue: Animated.AnimatedInterpolation,
  ) => React.ReactNode
  /**
   *
   * This map describes the values to use as inputRange for extra interpolation:
   * AnimatedValue: [startValue, endValue]
   *
   * progressAnimatedValue: [0, 1]
   * dragAnimatedValue: [0, -]
   *
   * To support `rtl` flexbox layouts use `flexDirection` styling.
   * */
  renderRightActions?: (
    progressAnimatedValue: Animated.AnimatedInterpolation,
    dragAnimatedValue: Animated.AnimatedInterpolation,
  ) => React.ReactNode
  useNativeAnimations?: boolean
  animationOptions?: Record<string, unknown>
  containerStyle?: StyleProp<ViewStyle>
  childrenContainerStyle?: StyleProp<ViewStyle>
}

class SwipeAction extends React.Component<SwipeActionProps> {
  swipeableRow?: Swipeable

  render() {
    const { left, right, children, ...restProps } = this.props

    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        enableTrackpadTwoFingerGesture
        leftThreshold={30}
        rightThreshold={40}
        renderLeftActions={(v, d) => this.renderActions(v, d, true)}
        renderRightActions={(v, d) => this.renderActions(v, d, false)}
        // onSwipeableClose={onClose}
        // onSwipeableClose={onClose}
        {...restProps}>
        {children}
      </Swipeable>
    )
  }

  updateRef = (ref: Swipeable) => {
    this.swipeableRow = ref
  }
  close = () => {
    this.swipeableRow?.close()
  }

  renderActions = (
    progress: Animated.AnimatedInterpolation,
    _dragAnimatedValue: Animated.AnimatedInterpolation,
    isLeft = false,
  ) => {
    const { right, left, buttonWidth = 60 } = this.props
    const buttons = isLeft ? left : right
    if (!buttons) {
      return null
    }
    const len = buttons.length
    const width = buttonWidth * len
    return (
      <View
        style={{
          width,
          flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        }}>
        {buttons.map((button, i) => {
          const x = isLeft ? -i * buttonWidth : (len - i) * buttonWidth
          const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [x, 0],
            extrapolate: 'clamp',
          })
          const pressHandler = () => {
            if (button.disabled) {
              return
            }
            this.close()
            if (button.onPress) {
              button.onPress()
            }
          }
          return (
            <Animated.View
              key={i}
              style={{ flex: 1, transform: [{ translateX: trans }] }}>
              <RectButton
                style={[
                  styles.rightAction,
                  { backgroundColor: button.backgroundColor },
                ]}
                onPress={pressHandler}>
                {React.isValidElement(button.text) ? (
                  button.text
                ) : (
                  <Text
                    style={[
                      styles.actionText,
                      button.style,
                      { color: button.color },
                    ]}>
                    {button.text}
                  </Text>
                )}
              </RectButton>
            </Animated.View>
          )
        })}
      </View>
    )
  }
}

export default SwipeAction
