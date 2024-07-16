import React, { useCallback, useImperativeHandle } from 'react'
import { Animated } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import useClickAway from '../_util/hooks/useClickAway'
import { SwipeActionProps } from './PropsType'
import { RenderActions } from './RenderActions'

export const SwipeAction = React.forwardRef<Swipeable, SwipeActionProps>(
  (props, ref) => {
    const {
      children,
      closeOnAction = true,
      closeOnTouchOutside,
      left,
      right,
      styles,
      onSwipeableOpen,
      ...restProps
    } = props

    const swipeActionRef = React.useRef<Swipeable>(null)
    useImperativeHandle(ref, () => swipeActionRef.current as Swipeable)

    const close = useCallback(() => {
      swipeActionRef.current?.close?.()
    }, [])

    // ======================== Swipeable renderLeftActions/renderRightActions ========================
    const renderActions = useCallback(
      (
        progressAnimatedValue: Animated.AnimatedInterpolation,
        isLeft = false,
      ) => {
        return (
          <RenderActions
            buttons={isLeft ? left : right}
            closeOnAction={closeOnAction}
            isLeft={isLeft}
            progressAnimatedValue={progressAnimatedValue}
            setClose={close}
            styles={styles}
          />
        )
      },
      [close, closeOnAction, left, right, styles],
    )
    const renderLeftActions = useCallback(
      (progressAnimatedValue) => renderActions(progressAnimatedValue, true),
      [renderActions],
    )
    const renderRightActions = useCallback(
      (progressAnimatedValue) => renderActions(progressAnimatedValue, false),
      [renderActions],
    )

    // ======================== Closing when click outside ========================
    const [{ preventDefault }] = useClickAway(() => {
      if (closeOnTouchOutside) {
        close()
      }
    })

    // ======================== Swipeable onSwipeableOpen preventDefault ========================
    const handleSwipeableOpen = useCallback(
      (...args) => {
        preventDefault()
        onSwipeableOpen && onSwipeableOpen.apply(undefined, args)
      },
      [onSwipeableOpen, preventDefault],
    )

    return (
      <Swipeable
        ref={swipeActionRef}
        friction={2}
        enableTrackpadTwoFingerGesture
        leftThreshold={30}
        rightThreshold={40}
        renderLeftActions={renderLeftActions}
        renderRightActions={renderRightActions}
        onSwipeableOpen={handleSwipeableOpen}
        {...restProps}>
        {children}
      </Swipeable>
    )
  },
)
