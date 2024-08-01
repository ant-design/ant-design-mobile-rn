import type { FC, ReactNode } from 'react'
import React, { useRef } from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'

function useInitialized(check?: boolean) {
  const initializedRef = useRef(check)
  if (check) {
    initializedRef.current = true
  }
  return !!initializedRef.current
}

function useShouldRender(
  active: boolean,
  forceRender?: boolean,
  destroyOnClose?: boolean,
) {
  const initialized = useInitialized(active)
  if (forceRender) {
    return true
  }
  if (active) {
    return true
  }
  if (!initialized) {
    return false
  }
  return !destroyOnClose
}

export const CollapsePanelContent: FC<{
  visible: boolean
  forceRender: boolean
  destroyOnClose: boolean
  children?: ReactNode
  style?: StyleProp<ViewStyle>
}> = (props) => {
  const { visible, children, style } = props

  const shouldRender = useShouldRender(
    visible,
    props.forceRender,
    props.destroyOnClose,
  )

  const height = useSharedValue(0)

  const derivedHeight = useDerivedValue(() =>
    withSpring(height.value * Number(visible), {
      restDisplacementThreshold: 0.01,
      mass: 1,
      stiffness: 200,
      damping: 25,
      overshootClamping: true,
    }),
  )
  const bodyStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
  }))

  return (
    <Animated.View style={[styles.animatedView, bodyStyle, style]}>
      <View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height
        }}
        style={styles.wrapper}>
        {shouldRender && children}
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    position: 'absolute',
  },
  animatedView: {
    width: '100%',
    overflow: 'hidden',
  },
})
