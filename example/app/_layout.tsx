import { Button, Icon, Provider } from '@ant-design/react-native'
import { useFonts } from 'expo-font'
import * as Haptics from 'expo-haptics'
import { Stack, usePathname, useRouter } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import React, { useEffect, useState } from 'react'
import { Platform } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import 'react-native-reanimated'
import { HapticsContextProvider } from '../../components/provider/HapticsContext'
import Theme from '../../rn-kitchen-sink/components/Theme'

SplashScreen.preventAutoHideAsync().catch(() => {
  // Expo Go 热重载时可能已解除 prevent，忽略即可
})

function RootNavigator() {
  const [theme, setTheme] = useState(null)
  const [currentTheme, setCurrentTheme] = useState(null)

  const changeTheme = (
    nextTheme: typeof theme,
    nextCurrentTheme: typeof currentTheme,
  ) => {
    setTheme(nextTheme)
    setCurrentTheme(nextCurrentTheme)
  }

  const router = useRouter()
  const pathname = usePathname()

  const headerLeft = ({ canGoBack }: { canGoBack: boolean }) => {
    if (pathname === '/') {
      return null
    }
    return (
      <Button
        type="ghost"
        styles={{
          wrapperStyle: { borderWidth: 0 },
        }}
        onPress={() => {
          if (canGoBack) {
            router.back()
          } else {
            router.replace('/')
          }
        }}>
        <Icon name="arrow-left" />
      </Button>
    )
  }

  const headerRight = () => {
    return (
      <Theme changeTheme={changeTheme} currentTheme={currentTheme} />
    )
  }

  return (
    <Provider theme={theme ?? undefined}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
          ...(Platform.OS === 'web' ? { headerLeft: headerLeft as any } : {}),
        }}>
        <Stack.Screen
          name="index"
          options={{
            title: 'Ant Design',
            headerRight,
          }}
        />
        <Stack.Screen name="demo/[title]" />
      </Stack>
    </Provider>
  )
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    antoutline: require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
    antfill: require('@ant-design/icons-react-native/fonts/antfill.ttf'),
  })

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync().catch(() => {})
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <GestureHandlerRootView
      style={{ flex: 1, ...(Platform.OS === 'web' ? { minHeight: 0 } : null) }}>
      <HapticsContextProvider
        onHaptics={() =>
          Platform.OS !== 'web' &&
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        }>
        <RootNavigator />
      </HapticsContextProvider>
    </GestureHandlerRootView>
  )
}
