import { useLocation as useDumiLocation } from 'dumi';
import DefaultDocLayout from 'dumi/theme-default/layouts/DocLayout';
import React from 'react';
import DocAnchor from '../../slots/Content/DocAnchor';
import './index.less';

export default function DocLayout(props: any) {
  const location = useDumiLocation();
  const { pathname } = location;
  const isHomePage = pathname === '/' || pathname === '/index-cn';
  const content = (
    <>
      <DefaultDocLayout {...props} />
      {!isHomePage && <DocAnchor {...props} />}
    </>
  );
  if (pathname === '/index-cn') {
    return (
      <div data-hide-sidebar="true" data-homepage="true" className="dumi-doc-layout-cn-index">
        {content}
      </div>
    );
  }
  return (
    <div data-pathname={pathname} data-homepage={isHomePage ? 'true' : undefined}>
      {content}
    </div>
  );
}
