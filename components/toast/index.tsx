import {
  SHORT,
  config,
  defaultConfig,
  getConfig,
  methods,
  remove,
  removeAll,
} from './methods'
import useToast from './useToast'

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
  useToast,
}

export default Toast
