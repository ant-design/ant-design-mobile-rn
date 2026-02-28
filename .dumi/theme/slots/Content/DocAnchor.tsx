import { Anchor } from 'antd';
import { useRouteMeta, useTabMeta } from 'dumi';
import React from 'react';
import './DocAnchor.less';

const { Link: AnchorLink } = Anchor;

interface DocAnchorProps {
  showDebug?: boolean;
  debugDemos?: string[];
}

interface AnchorItem {
  id: string;
  title: string;
  children?: AnchorItem[];
}

interface TocItem {
  depth?: number;
  id: string;
  title: string;
}

const DocAnchor: React.FC<DocAnchorProps> = ({ showDebug, debugDemos = [] }) => {
  const meta = useRouteMeta();
  const tab = useTabMeta();

  const anchorItems = React.useMemo<AnchorItem[]>(() => {
    const toc = tab?.toc || meta.toc;
    return toc.reduce((result: AnchorItem[], item: TocItem) => {
      if (item.depth === 2) {
        result.push({ ...item });
      } else if (item.depth === 3) {
        const parent = result[result.length - 1];
        if (parent) {
          parent.children = parent.children || [];
          parent.children.push({ ...item });
        }
      }
      return result;
    }, []);
  }, [tab?.toc, meta.toc]);

  if (!meta.frontmatter.toc) {
    return null;
  }

  return (
    <section className="doc-anchor-toc-wrapper">
      <Anchor affix={false} className="doc-anchor-toc" offsetTop={80}>
        {anchorItems.map((item) => (
          <AnchorLink key={item.id} href={`#${item.id}`} title={item.title}>
            {item.children
              ?.filter((child) => showDebug || !debugDemos.includes(child.id))
              .map((child) => (
                <AnchorLink
                  key={child.id}
                  href={`#${child.id}`}
                  title={
                    <span className={debugDemos.includes(child.id) ? 'toc-debug' : undefined}>
                      {child.title}
                    </span>
                  }
                />
              ))}
          </AnchorLink>
        ))}
      </Anchor>
    </section>
  );
};

export default DocAnchor;
