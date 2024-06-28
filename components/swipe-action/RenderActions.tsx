import React, { memo, useCallback, useState } from 'react'
import {
  Animated,
  I18nManager,
  LayoutChangeEvent,
  Text,
  View,
} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useTheme } from '../style'
import { SwipeoutButtonProps } from './PropsType'
import SwipeActionStyles, { SwipeActionStyle } from './style'

interface RenderActionsProps {
  buttons?: SwipeoutButtonProps[]
  closeOnAction: boolean
  isLeft: boolean
  progressAnimatedValue: Animated.AnimatedInterpolation
  setOpenRef: (open: boolean) => void
  setClose: () => void
  styles?: Partial<SwipeActionStyle>
}

interface SwipeActionButtonProps extends Omit<RenderActionsProps, 'buttons'> {
  button: SwipeoutButtonProps
  buttonWidth: number
}

export const RenderActions: React.FC<RenderActionsProps> = memo((props) => {
  const { buttons, ...restProps } = props

  const [buttonWidth, setButtonWidth] = useState(0)

  const onLayout = (e: LayoutChangeEvent) => {
    setButtonWidth(e.nativeEvent.layout.width)
  }

  if (!Array.isArray(buttons) || buttons.length === 0) {
    return null
  }
  return (
    <View
      onLayout={onLayout}
      // TODO-luokun: 专门封装一个 RTL 组件
      style={{
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
      }}>
      {buttons.map((button, i) => {
        return (
          <SwipeActionButton
            key={i}
            button={button}
            buttonWidth={buttonWidth}
            {...restProps}
          />
        )
      })}
    </View>
  )
})

const SwipeActionButton: React.FC<SwipeActionButtonProps> = memo((props) => {
  const [loading, setLoading] = useState(false)

  const {
    button,
    buttonWidth,
    closeOnAction,
    isLeft,
    progressAnimatedValue,
    setOpenRef,
    setClose,
    styles,
  } = props

  const pressHandler = useCallback(async () => {
    if (button.disabled || loading) {
      return
    }
    // Forced not to be closed
    if (!closeOnAction) {
      setOpenRef(false)
    }
    try {
      setLoading(true)
      if (button.onPress) {
        await button.onPress()
      }
    } finally {
      setTimeout(() => {
        if (closeOnAction) {
          setClose()
        }
        setLoading(false)
      })
    }
  }, [button, closeOnAction, loading, setClose, setOpenRef])

  const [layout, setLayout] = useState<{ x: number; width: number }>({
    x: 0,
    width: 0,
  })
  const onLayout = (e: LayoutChangeEvent) => {
    const { x, width } = e.nativeEvent.layout
    setLayout({ x, width })
  }

  const ss = useTheme({
    styles,
    themeStyles: SwipeActionStyles,
  })

  const trans = progressAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [isLeft ? -1 * layout.width : buttonWidth - layout.x, 0],
    extrapolate: 'clamp',
  })

  return (
    <Animated.View
      onLayout={onLayout}
      style={{
        transform: [{ translateX: trans }],
      }}>
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
})
