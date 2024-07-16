import { useEffect, useRef } from 'react'
import {
  DeviceEventEmitter,
  EmitterSubscription,
  NativeEventEmitter,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native'

export const USE_SCROLL_EVENT_NAME = 'ANT_DESIGN_MOBILE_RN_USE_SCROLL'

const TopViewEventEmitter = DeviceEventEmitter || new NativeEventEmitter()

export const onScrollEmit = (event: NativeSyntheticEvent<NativeScrollEvent>) =>
  TopViewEventEmitter.emit(USE_SCROLL_EVENT_NAME, event)

export default function useScroll(
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void,
) {
  const onScrollRef = useRef<EmitterSubscription>()

  useEffect(() => {
    onScrollRef.current = TopViewEventEmitter.addListener(
      USE_SCROLL_EVENT_NAME,
      onScroll,
    )
    return () => {
      onScrollRef.current?.remove?.()
    }
  }, [onScroll])
}
