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

const SHORT = 3;

const defaultConfig: IToastConfigurable = {
  duration: SHORT,
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
  SHORT,
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
  /**
   * @deprecated use Toast.info instead
   */
  show(props: string | IToastProps, duration?: number, mask?: boolean) {
    return notice(props, 'info', duration, () => {}, mask);
  },
  /**
   *
   * @param props: toast props
   * @deprecated duration: use props instead
   * @deprecated onClose: use props instead
   * @deprecated mask: use props instead
   */
  info(
    props: string | IToastProps,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(props, 'info', duration, onClose, mask);
  },
  /**
   *
   * @param props: toast props
   * @deprecated duration: use props instead
   * @deprecated onClose: use props instead
   * @deprecated mask: use props instead
   */
  success(
    props: string | IToastProps,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(props, 'success', duration, onClose, mask);
  },
  /**
   *
   * @param props: toast props
   * @deprecated duration: use props instead
   * @deprecated onClose: use props instead
   * @deprecated mask: use props instead
   */
  fail(
    props: string | IToastProps,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(props, 'fail', duration, onClose, mask);
  },
  /**
   *
   * @param props: toast props
   * @deprecated duration: use props instead
   * @deprecated onClose: use props instead
   * @deprecated mask: use props instead
   */
  offline(
    props: string | IToastProps,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(props, 'offline', duration, onClose, mask);
  },
  /**
   *
   * @param props: toast props
   * @deprecated duration: use props instead
   * @deprecated onClose: use props instead
   * @deprecated mask: use props instead
   */
  loading(
    props: string | IToastProps,
    duration?: number,
    onClose?: () => void,
    mask?: boolean,
  ) {
    return notice(props, 'loading', duration, onClose, mask);
  },
  remove(key: number) {
    Portal.remove(key);
  },
  removeAll,
};
