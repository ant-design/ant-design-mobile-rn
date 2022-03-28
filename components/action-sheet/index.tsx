import React from 'react'
import { ActionSheetIOSOptions } from 'react-native'
import Portal from '../portal'
import ActionSheetAndroidContainer from './AndroidContainer'

let instance: ActionSheetAndroidContainer | null

export default {
  showActionSheetWithOptions(
    config: ActionSheetIOSOptions,
    callback: (index: number) => void,
  ) {
    const key = Portal.add(
      <ActionSheetAndroidContainer
        visible
        ref={(ref) => (instance = ref)}
        onAnimationEnd={(visible: boolean) => {
          if (!visible) {
            Portal.remove(key)
          }
        }}
        config={config}
        callback={callback}
      />,
    )
  },

  showShareActionSheetWithOptions(
    config: any,
    failureCallback?: (arg0: any) => void,
    successCallback?: (arg0: boolean, activityType?: string) => void,
  ) {
    try {
      navigator
        .share(config)
        .then(() => {
          if (successCallback) {
            successCallback(true, '')
          }
        })
        .catch(() => {
          if (successCallback) {
            successCallback(false)
          }
        })
    } catch (error) {
      if (failureCallback) {
        failureCallback(error)
      }
    }
  },

  close() {
    if (instance) {
      instance.close()
    }
  },
}
