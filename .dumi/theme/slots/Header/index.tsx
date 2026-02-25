import { Button, Col, Icon, Popover, Row, Select } from 'antd'
import classNames from 'classnames'
import ColorSwitch from 'dumi/theme/slots/ColorSwitch'
import HeaderExtra from 'dumi/theme/slots/HeaderExtra'
import Navbar from 'dumi/theme/slots/Navbar'
import SearchBar from 'dumi/theme/slots/SearchBar'
import SocialIcon from 'dumi/theme/slots/SocialIcon'
import { history, Link, useLocale, useLocation, useSiteData } from 'dumi'
import 'dumi/theme-default/slots/Header'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import './index.less'

const antdVersion = require('../../../../package.json').version

// 老版文案（替代 FormattedMessage，由 useLocale 取当前 locale）
const headerMessages: Record<string, Record<string, string>> = {
  'zh-CN': { 'app.header.lang': 'EN' },
  'en-US': { 'app.header.lang': '中文' },
}

const { Option } = Select

function getLocalizedPath(
  locale: { base?: string } | null,
  path: string,
): string {
  const base = (locale?.base || '/').replace(/\/$/, '')
  const p = path.startsWith('/') ? path : `/${path}`
  return p === '/' ? base || '/' : `${base}${p}`
}

function getTargetLocalePath(
  pathname: string,
  current: { base?: string; suffix?: string },
  target: { base?: string; suffix?: string },
): string {
  const clearPath =
    'base' in current && current.base
      ? pathname.replace((current.base || '/').replace(/\/$/, ''), '') || '/'
      : pathname.replace(new RegExp(`${(current.suffix || '')}$`), '')
  return 'base' in target && target.base
    ? `${(target.base || '/').replace(/\/$/, '')}${clearPath}`.replace(/([^/])\/$/, '$1')
    : `${clearPath}${target.suffix || ''}`
}

export default function Header(props: {
  location?: { pathname: string }
  isFirstScreen?: boolean
  themeConfig?: { siteTitle?: string; docVersions?: Record<string, string> }
}) {
  const { pathname } = useLocation()
  const localeObj = useLocale()
  const { themeConfig, locales } = useSiteData()
  const localeId = localeObj?.id || 'zh-CN'
  const t = headerMessages[localeId] || headerMessages['zh-CN']

  const [menuVisible, setMenuVisible] = useState(false)
  const [menuMode, setMenuMode] = useState<'horizontal' | 'inline'>('horizontal')

  const isFirstScreen = props.isFirstScreen ?? true
  const mergedThemeConfig = props.themeConfig || themeConfig || {}
  const docVersions = {
    ...(mergedThemeConfig.docVersions || {}),
    [antdVersion]: antdVersion,
  }
  const versionOptions = Object.keys(docVersions).map((version) => (
    <Option value={docVersions[version]} key={version}>
      {version}
    </Option>
  ))

  const handleLangChange = useCallback(() => {
    const targetLocale = locales?.find((l: { id: string }) => l.id !== localeId)
    if (!targetLocale || !localeObj) return
    history.push(getTargetLocalePath(pathname, localeObj, targetLocale))
  }, [localeId, localeObj, locales, pathname])

  const handleVersionChange = useCallback(
    (url: string) => {
      const base = (localeObj as { base?: string })?.base || ''
      const cleanPath = base
        ? pathname.replace((base || '/').replace(/\/$/, ''), '') || '/'
        : pathname
      window.location.href = url.replace(/\/$/, '') + cleanPath
    },
    [localeObj, pathname],
  )

  useEffect(() => {
    try {
      require('enquire.js').register(
        'only screen and (min-width: 0) and (max-width: 992px)',
        {
          match: () => setMenuMode('inline'),
          unmatch: () => setMenuMode('horizontal'),
        },
      )
    } catch {
      // enquire.js optional
    }
  }, [])

  const isHome =
    pathname === '/' ||
    pathname === '/zh-CN' ||
    pathname === '/en-US' ||
    /^\/ant-design-mobile-rn\/?$/.test(pathname) ||
    /^\/ant-design-mobile-rn\/en-US\/?$/.test(pathname)

  const headerClassName = classNames({
    clearfix: true,
    'home-nav-white': !isFirstScreen,
    'home-page-header': isHome,
  })

  const homePath = getLocalizedPath(localeObj, '/')

  const socialIcons = useMemo(
    () =>
      mergedThemeConfig.socialLinks
        ? Object.keys(mergedThemeConfig.socialLinks)
            .slice(0, 5)
            .map((key) => ({
              icon: key,
              link: mergedThemeConfig.socialLinks[key],
            }))
        : [],
    [mergedThemeConfig.socialLinks],
  )

  const menu = (
    <div className="header-aside">
      {locales && locales.length > 1 && (
        <Button
          ghost
          size="small"
          onClick={handleLangChange}
          className="header-lang-button"
        >
          {t['app.header.lang']}
        </Button>
      )}
      <Select
        className="version"
        size="small"
        dropdownClassName="component-select"
        dropdownMatchSelectWidth={false}
        defaultValue={antdVersion}
        onChange={handleVersionChange}
        getPopupContainer={(trigger: HTMLElement) =>
          trigger.parentElement || document.body
        }
      >
        {versionOptions}
      </Select>
      <div id="nav">
        <Navbar />
      </div>
      {mergedThemeConfig.prefersColor?.switch && <ColorSwitch />}
      {socialIcons.map((item) => (
        <SocialIcon icon={item.icon} link={item.link} key={item.link} />
      ))}
      <HeaderExtra />
    </div>
  )

  return (
    <header id="header" className={headerClassName}>
      {menuMode === 'inline' ? (
        <Popover
          overlayClassName="popover-menu"
          placement="bottomRight"
          content={menu}
          trigger="click"
          visible={menuVisible}
          arrowPointAtCenter
          onVisibleChange={setMenuVisible}
        >
          <Icon
            className="nav-phone-icon"
            type="menu"
            onClick={() => setMenuVisible(true)}
          />
        </Popover>
      ) : null}
      <Row>
        <Col xxl={4} xl={5} lg={5} md={8} sm={24} xs={24}>
          <Link to={homePath} id="logo">
            <img
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            />
            <span>{mergedThemeConfig.siteTitle || mergedThemeConfig.name || 'Ant Design Mobile RN'}</span>
          </Link>
        </Col>
        <Col xxl={20} xl={19} lg={19} md={16} sm={0} xs={0}>
          <div id="search-box">
            <SearchBar />
          </div>
          {menuMode === 'horizontal' ? menu : null}
        </Col>
      </Row>
    </header>
  )
}
