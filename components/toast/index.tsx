import React from 'react';
import Portal from '../portal';
import ToastContainer from './ToastContainer';

interface IToastConfigurable {
  duration?: number;
  onClose?: () => void,
  mask?: boolean;
  stackable?: boolean;
}

interface IToastProps extends IToastConfigurable {
  content: string;
}

const defaultConfig: IToastConfigurable = {
  duration: 2,
  onClose: () => {},
  mask: true,
  stackable: true,
}

let defaultProps = {
  ...defaultConfig,
}

const toastKeyMap: { [key: number]: 1 } = {};

function removeAll() {
  Object.keys(toastKeyMap).forEach((_key) => Portal.remove(Number.parseInt(_key, 10)));
}

function notice(
  content: string | IToastProps,
  type: string,
  duration = defaultProps.duration,
  onClose = defaultProps.onClose,
  mask = defaultProps.mask,
) {
  let props = {
    ...defaultProps,
    content: content as string,
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
    removeAll();
  }

  const key = Portal.add(
    <ToastContainer
      content={props.content}
      duration={props.duration}
      onClose={props.onClose}
      type={props.type}
      mask={props.mask}
      onAnimationEnd={() => {
        Portal.remove(key);
        delete toastKeyMap[key];
      }}
    />,
  );
  toastKeyMap[key] = 1;
  return key;
}

export default {
  SHORT: 3,
  LONG: 8,
  defaultConfig,
  getConfig: () => {
    return {...defaultProps};
  },
  config(props: IToastConfigurable) {
    defaultProps = {
      ...defaultProps,
      ...props,
    }
  },
  show(content: string | IToastProps, duration?: number, mask?: boolean) {
    return notice(content, 'info', duration, () => {}, mask);
  },
  info(
    content: string | IToastProps,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'info', duration, onClose, mask);
  },
  success(
    content: string | IToastProps,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'success', duration, onClose, mask);
  },
  fail(
    content: string | IToastProps,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'fail', duration, onClose, mask);
  },
  offline(
    content: string | IToastProps,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'offline', duration, onClose, mask);
  },
  loading(
    content: string | IToastProps,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(content, 'loading', duration, onClose, mask);
  },
  remove(key: number) {
    Portal.remove(key);
  },
  removeAll,
};
