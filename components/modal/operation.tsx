import React from 'react';
import { portal } from '../portal';
import OperationContainer from './OperationContainer';

export default function a(...args: any[]) {
  const actions = args[0] || [{ text: '确定' }];

  const key = portal.add(
    <OperationContainer
      actions={actions}
      onAnimationEnd={(visible: boolean) => {
        if (!visible) {
          portal.remove(key);
        }
      }}
    />,
  );
}
