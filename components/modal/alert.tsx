import React from 'react';
import { portal } from '../portal';
import AlertContainer from './AlertContainer';

export default function a(
  title: React.ReactNode,
  content: React.ReactNode,
  actions = [{ text: '确定' }],
) {
  const key = portal.add(
    <AlertContainer
      title={title}
      content={content}
      actions={actions}
      onAnimationEnd={(visible: boolean) => {
        if (!visible) {
          portal.remove(key);
        }
      }}
    />,
  );
}
