import { useLocation as useDumiLocation } from 'dumi'
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
