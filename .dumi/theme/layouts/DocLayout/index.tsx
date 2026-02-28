import { useLocation as useDumiLocation } from 'dumi';
import DefaultDocLayout from 'dumi/theme-default/layouts/DocLayout';
import React from 'react';
import DocAnchor from '../../slots/Content/DocAnchor';
import './index.less';

export default function DocLayout(props: any) {
  const location = useDumiLocation();
  const { pathname } = location;
  if (pathname === '/index-cn') {
    return (
      <div data-hide-sidebar="true" className="dumi-doc-layout-cn-index">
        <DefaultDocLayout {...props} />
      </div>
    );
  }
  return (
    <>
      <DefaultDocLayout {...props} />
      <DocAnchor {...props} />
    </>
  );
}
