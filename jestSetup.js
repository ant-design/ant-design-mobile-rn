import 'react-native-gesture-handler/jestSetup'

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native')
  RN.NativeModules.RNCCameraRollPermissionModule = {}
  return RN
})
