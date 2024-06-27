import React, { useCallback, useImperativeHandle, useRef } from 'react'
import { Animated, I18nManager, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import useClickAway from '../_util/hooks/useClickAway'
import { useTheme } from '../style'
import { SwipeActionProps } from './PropsType'
import SwipeActionStyle from './style'

export const SwipeAction = React.forwardRef<Swipeable, SwipeActionProps>(
  (props, ref) => {
    const {
      buttonWidth = 60,
      children,
      closeOnAction = true,
      closeOnTouchOutside,
      left,
      right,
      styles,
      onSwipeableOpen,
      onSwipeableClose,
      ...restProps
    } = props

    const swipeActionRef = React.useRef<Swipeable>(null)
    useImperativeHandle(ref, () => swipeActionRef.current as Swipeable)

    const openRef = useRef<boolean | undefined>(false)
    const close = useCallback(() => {
      setTimeout(() => {
        if (openRef.current === true) {
          openRef.current = false

          swipeActionRef.current?.close?.()
        }
      })
    }, [])

    const ss = useTheme({
      styles,
      themeStyles: SwipeActionStyle,
    })

    const renderActions = useCallback(
      (
        progress: Animated.AnimatedInterpolation,
        _dragAnimatedValue: Animated.AnimatedInterpolation,
        isLeft = false,
      ) => {
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
              const pressHandler = async () => {
                if (button.disabled) {
                  return
                }
                if (closeOnTouchOutside) {
                  // TODO-luokun: closeOnAction优先级大于closeOnTouchOutside
                  openRef.current = undefined
                }
                try {
                  // TODO-luokun: add loading
                  if (button.onPress) {
                    await button.onPress()
                  }
                } finally {
                  if (closeOnAction) {
                    close()
                  }
                }
              }
              return (
                <Animated.View
                  key={i}
                  style={{ flex: 1, transform: [{ translateX: trans }] }}
                  onStartShouldSetResponder={() => false}
                  onStartShouldSetResponderCapture={() => false}>
                  <RectButton
                    onPress={pressHandler}
                    style={[
                      ss.actionButton,
                      button.backgroundColor
                        ? { backgroundColor: button.backgroundColor }
                        : {},
                    ]}
                    {...button.actionButtonProps}>
                    {React.isValidElement(button.text) ? (
                      button.text
                    ) : (
                      <Text
                        style={[
                          ss.actionText,
                          button.style,
                          button.color ? { color: button.color } : {},
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
      },
      [
        buttonWidth,
        close,
        closeOnAction,
        closeOnTouchOutside,
        left,
        right,
        ss.actionButton,
        ss.actionText,
      ],
    )

    const handleSwipeableOpen = useCallback(() => {
      openRef.current = true
      onSwipeableOpen?.()
    }, [onSwipeableOpen])

    const handleSwipeableClose = useCallback(() => {
      openRef.current = false
      onSwipeableClose?.()
    }, [onSwipeableClose])

    useClickAway(() => {
      if (closeOnTouchOutside) {
        close()
      }
      if (openRef.current === undefined) {
        openRef.current = true
      }
    })

    return (
      <Swipeable
        ref={swipeActionRef}
        friction={2}
        enableTrackpadTwoFingerGesture
        leftThreshold={30}
        rightThreshold={40}
        renderLeftActions={(v, d) => renderActions(v, d, true)}
        renderRightActions={(v, d) => renderActions(v, d, false)}
        {...restProps}
        onSwipeableOpen={handleSwipeableOpen}
        onSwipeableClose={handleSwipeableClose}>
        {children}
      </Swipeable>
    )
  },
)
