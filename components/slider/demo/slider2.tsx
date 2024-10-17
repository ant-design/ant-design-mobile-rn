import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  TextInput,
} from 'react-native-gesture-handler'
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'

const INITIAL_BOX_SIZE = 50
const SLIDER_WIDTH = 300

Animated.addWhitelistedNativeProps({ text: true })

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

export const Slider2 = () => {
  const offset = useSharedValue(0)
  const boxWidth = useSharedValue(INITIAL_BOX_SIZE)
  const MAX_VALUE = SLIDER_WIDTH - INITIAL_BOX_SIZE

  const pan = Gesture.Pan()
    .enabled(false)
    .onChange((event) => {
      offset.value =
        Math.abs(offset.value) <= MAX_VALUE
          ? offset.value + event.changeX <= 0
            ? 0
            : offset.value + event.changeX >= MAX_VALUE
            ? MAX_VALUE
            : offset.value + event.changeX
          : offset.value

      const newWidth = INITIAL_BOX_SIZE + offset.value
      boxWidth.value = newWidth
    })

  const gesture = React.useMemo(() => {
    const pan2 = Gesture.Pan()
      .enabled(true)
      .failOffsetY([-1, 1]) // must horizontal
      .onChange((event) => {
        console.log(event.state, 'event.stat2e')
        offset.value =
          Math.abs(offset.value) <= MAX_VALUE
            ? offset.value + event.changeX <= 0
              ? 0
              : offset.value + event.changeX >= MAX_VALUE
              ? MAX_VALUE
              : offset.value + event.changeX
            : offset.value

        const newWidth = INITIAL_BOX_SIZE + offset.value
        boxWidth.value = newWidth
      })

    // long press in 350ms
    const pan3 = Gesture.Pan()
      .enabled(true)
      .activateAfterLongPress(400)
      .onChange((event) => {
        console.log(event.state, 'event.state')
        offset.value =
          Math.abs(offset.value) <= MAX_VALUE
            ? offset.value + event.changeX <= 0
              ? 0
              : offset.value + event.changeX >= MAX_VALUE
              ? MAX_VALUE
              : offset.value + event.changeX
            : offset.value

        const newWidth = INITIAL_BOX_SIZE + offset.value
        boxWidth.value = newWidth
      })

    return Gesture.Race(pan2, pan3)
  }, [MAX_VALUE, boxWidth, offset])

  const boxStyle = useAnimatedStyle(() => {
    return {
      width: INITIAL_BOX_SIZE + offset.value,
    }
  })

  const sliderStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    }
  })

  const animatedBoxTextColor = {
    color: '#001a72',
  }

  const animatedProps = useAnimatedProps(() => {
    return {
      text: `Box width: ${Math.round(boxWidth.value)}`,
      defaultValue: `Box width: ${boxWidth.value}`,
    }
  })

  return (
    <GestureHandlerRootView style={styles.container}>
      <AnimatedTextInput
        animatedProps={animatedProps}
        style={[animatedBoxTextColor, styles.boxWidthText]}
        editable={false}
      />
      <Animated.View style={[styles.box, boxStyle]} />
      <GestureDetector gesture={gesture}>
        <View style={styles.sliderTrack}>
          <GestureDetector gesture={pan}>
            <Animated.View style={[styles.sliderHandle, sliderStyle]} />
          </GestureDetector>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
  },
  sliderTrack: {
    width: SLIDER_WIDTH,
    height: 50,
    backgroundColor: '#82cab2',
    borderRadius: 25,
    justifyContent: 'center',
    padding: 5,
  },
  sliderHandle: {
    width: 40,
    height: 40,
    backgroundColor: '#f8f9ff',
    borderRadius: 20,
    position: 'absolute',
    left: 5,
  },
  box: {
    height: INITIAL_BOX_SIZE,
    backgroundColor: '#b58df1',
    borderRadius: 10,
  },
  boxWidthText: {
    textAlign: 'center',
    fontSize: 18,
  },
})
