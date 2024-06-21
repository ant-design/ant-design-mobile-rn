import {
  SHORT,
  config,
  defaultConfig,
  getConfig,
  methods,
  remove,
  removeAll,
} from './methods'

export type { ToastProps, ToastShowProps } from './PropsType'

const Toast = {
  SHORT,
  LONG: 8,
  defaultConfig,
  getConfig,
  config,
  show: methods.show,
  info: methods.info,
  success: methods.success,
  fail: methods.fail,
  offline: methods.offline,
  loading: methods.loading,
  remove,
  removeAll,
}

export default Toast
