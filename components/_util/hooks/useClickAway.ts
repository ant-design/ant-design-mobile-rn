import { useEffect, useRef } from 'react'
import {
  DeviceEventEmitter,
  EmitterSubscription,
  GestureResponderEvent,
  NativeEventEmitter,
} from 'react-native'

export const USE_CLICK_AWAY_EVENT_NAME = 'ANT_DESIGN_MOBILE_RN_USE_CLICK_AWAY'

const TopViewEventEmitter = DeviceEventEmitter || new NativeEventEmitter()

let _temp_bool: any
export const CustomSyntheticEvent = {
  stopPropagation: function () {
    _temp_bool = true
  },
  preventDefault: function () {
    _temp_bool = undefined
  },
  isPropagationStopped() {
    return _temp_bool
  },
  emit(event: GestureResponderEvent) {
    TopViewEventEmitter.emit(USE_CLICK_AWAY_EVENT_NAME, event)
  },
}

export default function useClickAway(
  onClickAway: (event: GestureResponderEvent) => void,
) {
  const onClickAwayRef = useRef<EmitterSubscription>()

  useEffect(() => {
    onClickAwayRef.current = TopViewEventEmitter.addListener(
      USE_CLICK_AWAY_EVENT_NAME,
      onClickAway,
    )
    return () => {
      onClickAwayRef.current?.remove?.()
    }
  }, [onClickAway])

  return [CustomSyntheticEvent]
}
