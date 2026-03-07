import { MenuOutlined } from '@ant-design/icons'
import { Button, Drawer, Menu, Select, Tooltip } from 'antd'
import classNames from 'classnames'
import { Link, useIntl, useLocation, useSiteData } from 'dumi'
// import ColorSwitch from 'dumi/theme-default/slots/ColorSwitch'
import SearchBar from 'dumi/theme-default/slots/SearchBar'
import React, { useCallback, useEffect, useState } from 'react'
import * as utils from '../../utils'
import './index.less'

const antdVersion = require('../../../../package.json').version

export default function Header() {
  const { pathname } = useLocation()
  const intl = useIntl()
  const { themeConfig } = useSiteData()
  // const [color] = usePrefersColor()
  const [menuVisible, setMenuVisible] = useState(false)
  const [menuMode, setMenuMode] = useState<'horizontal' | 'inline'>(
    'horizontal',
  )

  const locale = intl.locale
  const isZhCN = locale === 'zh-CN'

  useEffect(() => {
    const enquire = require('enquire.js')
    enquire.register('only screen and (min-width: 0) and (max-width: 992px)', {
      match: () => setMenuMode('inline'),
      unmatch: () => setMenuMode('horizontal'),
    })
  }, [])

  const handleLangChange = useCallback(() => {
    if (utils.isLocalStorageNameSupported()) {
      localStorage.setItem('locale', isZhCN ? 'en-US' : 'zh-CN')
    }
    const currentProtocol = `${window.location.protocol}//`
    const currentHref = window.location.href.slice(currentProtocol.length)
    window.location.href =
      currentProtocol +
      currentHref.replace(
        window.location.pathname,
        utils.getLocalizedPathname(pathname, !isZhCN),
      )
  }, [pathname, isZhCN])

  const handleVersionChange = useCallback((url: string) => {
    const currentUrl = window.location.href
    window.location.href = currentUrl.replace(window.location.origin, url)
  }, [])

  const docVersions = {
    ...(themeConfig?.docVersions || {}),
    [antdVersion]: antdVersion,
  }
  const versionOptions = Object.keys(docVersions).map((version) => ({
    value: docVersions[version],
    label: version,
  }))

  const module = pathname
    .replace(/(^\/|\/$)/g, '')
    .split('/')
    .slice(0, -1)
    .join('/')
  let activeMenuItem = module || 'home'
  if (activeMenuItem === 'components' || pathname.includes('changelog')) {
    activeMenuItem = 'docs/react'
  }

  const headerClassName = classNames({
    clearfix: true,
    'custom-header': true,
  })

  const actions = [
    <Select
      key="version"
      className="version"
      size="small"
      dropdownMatchSelectWidth={false}
      defaultValue={antdVersion}
      onChange={handleVersionChange}
      options={versionOptions}
      getPopupContainer={(trigger: HTMLElement) =>
        trigger.parentNode as HTMLElement
      }
    />,
    <Button
      type="default"
      size="small"
      onClick={handleLangChange}
      className="header-lang-button"
      key="lang-button">
      {intl.formatMessage({ id: 'app.header.lang' })}
    </Button>,
  ]

  const menuItems = [
    {
      key: 'home',
      label: (
        <Link to={utils.getLocalizedPathname('/', isZhCN)}>
          {intl.formatMessage({ id: 'app.header.menu.home' })}
        </Link>
      ),
    },
    {
      key: 'docs/react',
      label: (
        <Link to={utils.getLocalizedPathname('/docs/react/introduce', isZhCN)}>
          {intl.formatMessage({ id: 'app.header.menu.components' })}
        </Link>
      ),
    },
    {
      key: 'web',
      label: (
        <a href="//mobile.ant.design">
          {intl.formatMessage({ id: 'app.header.menu.web' })}
        </a>
      ),
    },
    {
      key: 'docs/react/support',
      label: (
        <Tooltip title="Coming Soon">
          <Link to="#">AI+ ✨</Link>
        </Tooltip>
      ),
    },
    {
      key: 'pc',
      label: (
        <a href="https://github.com/ant-design/ant-design-mobile-rn">github</a>
      ),
    },
  ]

  const menu = [
    <Menu
      // theme={color}
      className="menu-site"
      mode={menuMode}
      selectedKeys={[activeMenuItem]}
      items={menuItems}
      id="nav"
      key="nav"
    />,
  ]

  return (
    <header id="header" className={headerClassName}>
      {menuMode === 'inline' ? (
        <>
          <MenuOutlined
            className="nav-phone-icon"
            onClick={() => setMenuVisible(true)}
          />
          <Drawer
            title={null}
            placement="right"
            closable
            onClose={() => setMenuVisible(false)}
            open={menuVisible}
            className="mobile-menu-drawer">
            <div className="mobile-menu-content">
              <div className="mobile-menu-actions">{actions}</div>
              {menu}
            </div>
          </Drawer>
        </>
      ) : null}
      <div className="header-row">
        <div className="header-left">
          <Link to={utils.getLocalizedPathname('/', isZhCN)} id="logo">
            <img
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            />
            <span className="logo-title">Ant Design Mobile RN</span>
          </Link>
          <div id="search-box">
            <SearchBar />
          </div>
        </div>
        {menuMode === 'horizontal' && (
          <div className="header-right">
            {menu}
            <div className="header-actions">{actions}</div>
          </div>
        )}
      </div>
    </header>
  )
}
