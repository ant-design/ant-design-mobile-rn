import React, { memo, useCallback, useContext, useState } from 'react'
import { Animated, LayoutChangeEvent, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import AccessibilityContext from '../provider/AccessibilityContext'
import { useTheme } from '../style'
import { SwipeoutButtonProps } from './PropsType'
import SwipeActionStyles, { SwipeActionStyle } from './style'

interface RenderActionsProps {
  buttons?: SwipeoutButtonProps[]
  closeOnAction: boolean
  isLeft: boolean
  progressAnimatedValue: Animated.AnimatedInterpolation
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

  const isRTL = useContext(AccessibilityContext)

  if (!Array.isArray(buttons) || buttons.length === 0) {
    return null
  }
  return (
    <View
      onLayout={onLayout}
      style={{
        flexDirection: isRTL ? 'row-reverse' : 'row',
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
    setClose,
    styles,
  } = props

  const pressHandler = useCallback(async () => {
    if (button.disabled || loading) {
      return
    }
    try {
      setLoading(true)
      if (button.onPress) {
        await button.onPress()
      }
    } finally {
      if (closeOnAction) {
        setClose()
      }
      setLoading(false)
    }
  }, [button, closeOnAction, loading, setClose])

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
      onTouchEnd={(e) => e.stopPropagation()}
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
