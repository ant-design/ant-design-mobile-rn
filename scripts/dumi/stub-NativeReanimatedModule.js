'use strict';

/**
 * Stub for react-native-reanimated on doc site (web).
 * TurboModuleRegistry.get('ReanimatedModule') 在浏览器中不可用；
 * 导出带 installTurboModule 的假模块，调用时设置 global.__reanimatedModuleProxy 为 no-op，避免后续报错。
 */
const noop = () => {}
const noopRet = (v) => v
const noopFalse = () => false

const stubProxy = {
  makeShareableClone: noopRet,
  scheduleOnUI: noop,
  executeOnUIRuntimeSync: noopRet,
  createWorkletRuntime: noopRet,
  scheduleOnRuntime: noop,
  registerSensor: () => 0,
  unregisterSensor: noop,
  registerEventHandler: () => 0,
  unregisterEventHandler: noop,
  getViewProp: noop,
  configureLayoutAnimationBatch: noop,
  setShouldAnimateExitingForTag: noop,
  enableLayoutAnimations: noop,
  configureProps: noop,
  subscribeForKeyboardEvents: () => 0,
  unsubscribeFromKeyboardEvents: noop,
}

function installTurboModule() {
  if (typeof global !== 'undefined' && global.__reanimatedModuleProxy === undefined) {
    global.__reanimatedModuleProxy = stubProxy
  }
  return false
}

module.exports = { installTurboModule }
