import 'react-native-gesture-handler/jestSetup.js'

jest.mock('react-native-reanimated', () => {
  const React = require('react')
  const { View } = require('react-native')

  const createAnimatedComponent = (Component) => Component

  return {
    __esModule: true,
    default: {
      View,
      createAnimatedComponent,
    },
    View,
    createAnimatedComponent,
    useSharedValue: (init) => ({ value: init }),
    useAnimatedStyle: (factory, _deps) => factory(),
    useAnimatedProps: (factory, _deps) => factory(),
    useDerivedValue: (factory) => ({ value: factory() }),
    useAnimatedRef: () => ({ current: null }),
    useEvent: () => () => {},
    setGestureState: () => {},
    measure: () => ({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      pageX: 0,
      pageY: 0,
    }),
    interpolate: (_value, _input, output) => output[0],
    Extrapolation: {
      IDENTITY: 'identity',
      CLAMP: 'clamp',
      EXTEND: 'extend',
    },
    ReduceMotion: {
      System: 'system',
      Always: 'always',
      Never: 'never',
    },
    withTiming: (value) => value,
    withSpring: (value) => value,
    withDecay: (value) => value,
    runOnJS: (fn) => fn,
    runOnUI: (fn) => fn,
    useAnimatedReaction: () => {},
    useFrameCallback: () => {},
    Easing: {
      linear: (t) => t,
      ease: (t) => t,
      bezier: () => ({ factory: () => (t) => t }),
    },
    FadeIn: {},
    FadeOut: {},
    Layout: {},
  }
})

jest.mock('react-native-gesture-handler/ReanimatedSwipeable', () => {
  const React = require('react')
  const { View } = require('react-native')

  const MockSwipeable = React.forwardRef((props, ref) => {
    const {
      children,
      renderLeftActions,
      renderRightActions,
      ...rest
    } = props
    React.useImperativeHandle(ref, () => ({
      close: jest.fn(),
      openLeft: jest.fn(),
      openRight: jest.fn(),
      reset: jest.fn(),
    }))
    const progress = { value: 0 }
    const translation = { value: 0 }
    const methods = {
      close: jest.fn(),
      openLeft: jest.fn(),
      openRight: jest.fn(),
      reset: jest.fn(),
    }
    return React.createElement(
      View,
      rest,
      renderLeftActions && renderLeftActions(progress, translation, methods),
      children,
      renderRightActions && renderRightActions(progress, translation, methods),
    )
  })

  return {
    __esModule: true,
    default: MockSwipeable,
    SwipeDirection: { LEFT: 'left', RIGHT: 'right' },
  }
})

jest.mock('react-native-gesture-handler/ReanimatedDrawerLayout', () => {
  const React = require('react')
  const { View } = require('react-native')

  const MockDrawerLayout = React.forwardRef((props, ref) => {
    const { children, renderNavigationView, ...rest } = props
    React.useImperativeHandle(ref, () => ({
      openDrawer: jest.fn(),
      closeDrawer: jest.fn(),
    }))
    const progress = { value: 0 }
    return React.createElement(
      View,
      rest,
      renderNavigationView && renderNavigationView(progress),
      typeof children === 'function' ? children(progress) : children,
    )
  })

  return {
    __esModule: true,
    default: MockDrawerLayout,
    DrawerPosition: { LEFT: 0, RIGHT: 1 },
    DrawerState: { IDLE: 0, DRAGGING: 1, SETTLING: 2 },
    DrawerType: { FRONT: 0, BACK: 1, SLIDE: 2 },
    DrawerLockMode: { UNLOCKED: 0, LOCKED_CLOSED: 1, LOCKED_OPEN: 2 },
    DrawerKeyboardDismissMode: { NONE: 0, ON_DRAG: 1 },
  }
})


const { NativeModules } = require('react-native')
NativeModules.RNCCameraRollPermissionModule = {}
