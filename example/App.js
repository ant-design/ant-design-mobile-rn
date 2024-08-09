import { useFonts } from 'expo-font'
import * as Haptics from 'expo-haptics'
import * as SplashScreen from 'expo-splash-screen'
import React, { useCallback } from 'react'
import { Platform } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import 'react-native-reanimated'
import { HapticsContextProvider } from '../components/provider/HapticsContext'
import App from '../rn-kitchen-sink/App'

SplashScreen.preventAutoHideAsync()

export default function () {
  const [fontsLoaded] = useFonts({
    antoutline: require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <GestureHandlerRootView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <HapticsContextProvider
        onHaptics={() => Platform.OS !== 'web' && Haptics.impactAsync('light')}>
        <App />
      </HapticsContextProvider>
    </GestureHandlerRootView>
  )
}
