import React from 'react'
import Portal from '../portal'
import { ToastShowProps } from './PropsType'
import ToastContainer from './ToastContainer'

export const SHORT = 3

// editable default props
let defaultProps = {
  duration: SHORT,
  onClose: () => {},
  mask: true,
  stackable: true,
}

// editable portal key map
const toastKeyMap: { [key: number]: 1 } = {}

export function remove(key: number) {
  Portal.remove(key)
  delete toastKeyMap[key]
}

export function removeAll() {
  Object.keys(toastKeyMap).forEach((_key) =>
    Portal.remove(Number.parseInt(_key, 10)),
  )
}

// Read-only
export const defaultConfig = { ...defaultProps }

// Read-only
export function getConfig() {
  return { ...defaultProps }
}

// edit defaultProps
export function config(props: Partial<ToastShowProps>) {
  defaultProps = {
    ...defaultProps,
    ...props,
  }
}

export function notice(
  content: string | ToastShowProps,
  type: string,
  duration = defaultProps.duration,
  onClose = defaultProps.onClose,
  mask = defaultProps.mask,
) {
  let props = {
    ...defaultProps,
    content: content as string | React.ReactNode,
    type,
    duration,
    onClose,
    mask,
  }

  if (typeof content !== 'string') {
    props = {
      ...props,
      ...content,
    }
  }

  if (!props.stackable) {
    removeAll()
  }

  const key = Portal.add(
    <ToastContainer
      {...props}
      onAnimationEnd={() => {
        remove(key)
      }}
    />,
  )
  toastKeyMap[key] = 1
  return key
}

// Compatible with old versions
function base(type: string) {
  return (
    props: string | ToastShowProps,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) => notice(props, type, duration, onClose, mask)
}

const show = (
  props: string | ToastShowProps,
  duration?: number,
  mask?: boolean,
) => {
  return notice(props, 'info', duration ?? 1.5, () => {}, mask)
}

export const methods = {
  show,
  info: base('info'),
  success: base('success'),
  fail: base('fail'),
  offline: base('offline'),
  loading: base('loading'),
}
