import React from 'react';
import topView from 'react-native-top-view';
import OperationContainer from './OperationContainer';

export default function a(...args: any[]) {
  const actions = args[0] || [{ text: '确定' }];

  const onAnimationEnd = (visible: boolean) => {
    if (!visible) {
      topView.remove();
    }
  };

  topView.set(
    <OperationContainer actions={actions} onAnimationEnd={onAnimationEnd} />,
  );
}
