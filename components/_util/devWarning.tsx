export default (valid: boolean, component: string, message: string): void => {
  if (__DEV__ && !valid) {
    console.warn(`Warning: [antd_mobile_rn: ${component}] ${message}`)
  }
}
