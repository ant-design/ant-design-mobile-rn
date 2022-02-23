import React from 'react'
import {
  ActionSheetIOS,
  ActionSheetIOSOptions,
  Platform,
  Share,
} from 'react-native'
import Portal from '../portal'
import ActionSheetAndroidContainer from './AndroidContainer'

let instance: ActionSheetAndroidContainer | null

export default {
  showActionSheetWithOptions(
    config: ActionSheetIOSOptions,
    callback: (index: number) => void,
  ) {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(config, callback)
      return
    }

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
    const content: any = {}
    const options: any = {}
    content.message = config.message
    if (config.title) {
      content.title = config.title
      options.dialogTitle = config.title
    }
    if (config.url) {
      content.url = config.url
    }
    if (config.excludedActivityTypes) {
      options.excludedActivityTypes = config.excludedActivityTypes
    }
    if (config.tintColor) {
      options.tintColor = config.tintColor
    }
    // promise is not called in Android
    // https://github.com/facebook/react-native/blob/master/Libraries/Share/Share.js#L80
    Share.share(content, options)
      .then((result: any) => {
        if (result.action === Share.sharedAction) {
          // completed successCallback(completed, method)
          if (successCallback) {
            successCallback(true, result.activityType)
          }
        } else if (result.action === Share.dismissedAction) {
          if (successCallback) {
            successCallback(false)
          }
        }
      })
      .catch((error) => {
        if (failureCallback) {
          failureCallback(error)
        }
      })
  },

  close() {
    if (instance) {
      instance.close()
    }
  },
}
