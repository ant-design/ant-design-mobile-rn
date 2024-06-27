import { useEffect, useMemo, useRef } from 'react'
import {
  DeviceEventEmitter,
  EmitterSubscription,
  GestureResponderEvent,
  NativeEventEmitter,
} from 'react-native'

export const USE_CLICK_AWAY_EVENT_NAME = 'ANT_DESIGN_MOBILE_RN_USE_CLICK_AWAY'

export default function useClickAway(
  onClickAway: (event: GestureResponderEvent) => void,
) {
  const TopViewEventEmitter = useMemo(
    () => DeviceEventEmitter || new NativeEventEmitter(),
    [],
  )

  const onClickAwayRef = useRef<EmitterSubscription>()

  useEffect(() => {
    onClickAwayRef.current = TopViewEventEmitter.addListener(
      USE_CLICK_AWAY_EVENT_NAME,
      onClickAway,
    )
    return () => {
      onClickAwayRef.current?.remove?.()
    }
  }, [TopViewEventEmitter, onClickAway])
}
