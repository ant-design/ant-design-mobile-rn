import React from 'react';

export interface NoticeBarPropsType {
  mode?: 'closable' | 'link';
  onPress?: () => void;
  icon?: React.ReactElement<any>;
  action?: React.ReactElement<any>;
}
