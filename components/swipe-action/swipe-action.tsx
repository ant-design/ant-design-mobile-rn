import React, { useCallback, useImperativeHandle } from 'react'
import Swipeable, {
  type SwipeableMethods,
} from 'react-native-gesture-handler/ReanimatedSwipeable'
import type { SharedValue } from 'react-native-reanimated'
import useClickAway from '../_util/hooks/useClickAway'
import { SwipeActionProps } from './PropsType'
import { RenderActions } from './RenderActions'

export const SwipeAction = React.forwardRef<SwipeableMethods, SwipeActionProps>(
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

    const swipeActionRef = React.useRef<SwipeableMethods>(null)
    useImperativeHandle(ref, () => swipeActionRef.current as SwipeableMethods)

    const close = useCallback(() => {
      swipeActionRef.current?.close?.()
    }, [])

    // ======================== Swipeable renderLeftActions/renderRightActions ========================
    const renderActions = useCallback(
      (progress: SharedValue<number>, isLeft = false) => {
        return (
          <RenderActions
            buttons={isLeft ? left : right}
            closeOnAction={closeOnAction}
            isLeft={isLeft}
            progress={progress}
            setClose={close}
            styles={styles}
          />
        )
      },
      [close, closeOnAction, left, right, styles],
    )
    const renderLeftActions = useCallback(
      (progress: SharedValue<number>) => renderActions(progress, true),
      [renderActions],
    )
    const renderRightActions = useCallback(
      (progress: SharedValue<number>) => renderActions(progress, false),
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
      (...args: Parameters<NonNullable<typeof onSwipeableOpen>>) => {
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
