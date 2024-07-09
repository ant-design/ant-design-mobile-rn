import React, { useCallback, useImperativeHandle, useRef } from 'react'
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
      onSwipeableWillClose,
      ...restProps
    } = props

    const swipeActionRef = React.useRef<Swipeable>(null)
    useImperativeHandle(ref, () => swipeActionRef.current as Swipeable)

    const openRef = useRef<boolean>(false)
    const setOpenRef = useCallback((open) => {
      openRef.current = open
    }, [])

    const close = useCallback(() => {
      if (openRef.current === true) {
        openRef.current = false
        swipeActionRef.current?.close?.()
      }
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
            setOpenRef={setOpenRef}
            setClose={close}
            styles={styles}
          />
        )
      },
      [close, closeOnAction, left, right, setOpenRef, styles],
    )
    const renderLeftActions = useCallback(
      (progressAnimatedValue) => renderActions(progressAnimatedValue, true),
      [renderActions],
    )
    const renderRightActions = useCallback(
      (progressAnimatedValue) => renderActions(progressAnimatedValue, false),
      [renderActions],
    )

    // ======================== Swipeable onSwipeableOpen/onSwipeableWillClose ========================
    const handleSwipeableOpen = useCallback(
      (...args) => {
        openRef.current = true
        onSwipeableOpen && onSwipeableOpen.apply(undefined, args)
      },
      [onSwipeableOpen],
    )

    const handleSwipeableWillClose = useCallback(
      (...args) => {
        openRef.current = false
        onSwipeableWillClose && onSwipeableWillClose.apply(undefined, args)
      },
      [onSwipeableWillClose],
    )

    // ======================== Closing when click outside ========================
    useClickAway(() => {
      if (closeOnTouchOutside) {
        setTimeout(() => {
          close()
        })
      }
    })

    return (
      <Swipeable
        ref={swipeActionRef}
        friction={2}
        enableTrackpadTwoFingerGesture
        leftThreshold={30}
        rightThreshold={40}
        renderLeftActions={renderLeftActions}
        renderRightActions={renderRightActions}
        {...restProps}
        onSwipeableOpen={handleSwipeableOpen}
        onSwipeableWillClose={handleSwipeableWillClose}>
        {children}
      </Swipeable>
    )
  },
)
