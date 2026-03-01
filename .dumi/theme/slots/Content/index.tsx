import { useRouteMeta, useSidebarData, useSiteData } from 'dumi';
import React, { type FC, type ReactNode } from 'react';
import './index.less';
import './markdown.less';

const Content: FC<{ children: ReactNode }> = (props) => {
  const sidebar = useSidebarData();
  const { themeConfig } = useSiteData();
  const { frontmatter } = useRouteMeta();

  return (
    <div
      className="dumi-default-content"
      data-no-sidebar={!sidebar || frontmatter.sidebar === false || undefined}
      data-no-footer={themeConfig.footer === false || undefined}
    >
      <h1 className='section-title'>{frontmatter.title} {frontmatter.subtitle}</h1>
      {props.children}
    </div>
  );
};

export default Content;