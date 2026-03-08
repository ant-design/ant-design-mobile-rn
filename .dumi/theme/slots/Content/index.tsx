import { FileTextOutlined } from '@ant-design/icons'
import { useLocation, useRouteMeta, useSidebarData, useSiteData } from 'dumi'
import React, { type FC, type ReactNode } from 'react'
import './index.less'
import Markdown from './Markdown'

const Content: FC<{ children: ReactNode }> = (props) => {
  const sidebar = useSidebarData()
  const { pathname } = useLocation()
  const { themeConfig } = useSiteData()
  const { frontmatter } = useRouteMeta()

  const useLocale = () => {
    const isCN =
      typeof location !== 'undefined' ? location.pathname.endsWith('-cn') : false
    return {
      llms: isCN ? '大语言模型专用文档' : 'large language models',
      llmsSemantic: isCN ? '语义化 DOM' : 'Semantic DOM',
    }
  }
  const locale = useLocale()

  return (
    <div
      className="dumi-default-content"
      data-no-sidebar={!sidebar || frontmatter.sidebar === false || undefined}
      data-no-footer={themeConfig.footer === false || undefined}>
      <h1 className="section-title">
        {frontmatter.title} {frontmatter.subtitle}
      </h1>
      {pathname.startsWith('/components') && !pathname.startsWith('/components/changelog') && <div className="markdown">
        <blockquote style={{fontStyle: 'normal'}}>
          <p>
            {locale.llms}:
            <a href={`${pathname}.md`} target="_blank" rel="noreferrer">
            <FileTextOutlined  style={{ margin: 4 }} />
              LLMs.md
            </a>
          </p>
          <p>
            {locale.llmsSemantic}:
            <a href={`${pathname}/semantic.md`} target="_blank" rel="noreferrer">
            <FileTextOutlined style={{ margin: 4 }} />
              semantic.md
            </a>
          </p>
        </blockquote>
      </div>}
      {props.children}
      <Markdown />
    </div>
  )
}

export default Content
