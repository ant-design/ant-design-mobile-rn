import { Helmet, useLocation as useDumiLocation, useRouteMeta } from 'dumi'
import DefaultDocLayout from 'dumi/theme-default/layouts/DocLayout'
import React from 'react'
import DocAnchor from '../../slots/Content/DocAnchor'
import './index.less'

export default function DocLayout(props: {
  children: React.ReactNode
  [key: string]: any
}) {
  const location = useDumiLocation()
  const { pathname } = location
  const isHomePage = pathname === '/' || pathname === '/index-cn'
  const content = (
    <>
      <DefaultDocLayout {...props} />
      {!isHomePage && <DocAnchor {...props} />}
      {!isHomePage && <CommonHelmet />}
    </>
  )
  return (
    <div
      data-homepage={isHomePage ? 'true' : undefined}
      data-articlepage={!isHomePage ? 'true' : undefined}>
      {content}
    </div>
  )
}

const CommonHelmet: React.FC = () => {
  const meta = useRouteMeta()

  const [title, description] = React.useMemo<[string, string]>(() => {
    let helmetTitle: string
    if (!meta.frontmatter.subtitle && !meta.frontmatter.title) {
      helmetTitle = '404 Not Found - Ant Design'
    } else {
      helmetTitle = `${meta.frontmatter.subtitle || ''} ${
        meta.frontmatter?.title || ''
      } - Ant Design`
    }
    const helmetDescription = meta.frontmatter.description || ''
    return [helmetTitle, helmetDescription]
  }, [meta])

  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      {description && <meta name="description" content={description} />}
    </Helmet>
  )
}
