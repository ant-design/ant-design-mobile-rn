import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import React, { useCallback } from 'react'
import { View } from 'react-native'
import 'react-native-gesture-handler'
import 'react-native-reanimated'
import App from '../rn-kitchen-sink/App'

SplashScreen.preventAutoHideAsync()

export default function () {
  const [fontsLoaded] = useFonts({
    antoutline: require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
    antfill: require('@ant-design/icons-react-native/fonts/antfill.ttf'),
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
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <App />
    </View>
  )
}
