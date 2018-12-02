import React from 'react';
import { TextStyle } from 'react-native';
import { portal } from '../portal';
import PromptContainer from './PromptContainer';
import { CallbackOrActions } from './PropsType';

export default function prompt(
  title: React.ReactNode,
  message: React.ReactNode,
  callbackOrActions: CallbackOrActions<TextStyle>,
  type = 'default',
  defaultValue = '',
  placeholders = ['', ''],
) {
  if (!callbackOrActions) {
    // tslint:disable-next-line:no-console
    console.error('Must specify callbackOrActions');
    return;
  }

  const key = portal.add(
    <PromptContainer
      title={title}
      message={message}
      actions={callbackOrActions}
      type={type as any}
      defaultValue={defaultValue}
      onAnimationEnd={(visible: boolean) => {
        if (!visible) {
          portal.remove(key);
        }
      }}
      placeholders={placeholders}
    />,
  );
}
