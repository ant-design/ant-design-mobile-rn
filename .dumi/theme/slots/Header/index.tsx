import { Button, Col, Drawer, Icon, Menu, Row, Select, Tooltip } from 'antd'
import classNames from 'classnames'
import { Link, useIntl, useLocation, useSiteData } from 'dumi'
import SearchBar from 'dumi/theme-default/slots/SearchBar'
import React, { useCallback, useEffect, useState } from 'react'
import * as utils from '../../utils'

const antdVersion = require('../../../../package.json').version

export default function Header() {
  const { pathname } = useLocation()
  const intl = useIntl()
  const { themeConfig } = useSiteData()
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
  const versionOptions = Object.keys(docVersions).map((version) => (
    <Select.Option value={docVersions[version]} key={version}>
      {version}
    </Select.Option>
  ))

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
    'home-nav-white': true,
    'home-page-header': activeMenuItem === 'home',
  })

  const langAndVersion = [
    <Select
      key="version"
      className="version"
      size="small"
      dropdownMatchSelectWidth={false}
      defaultValue={antdVersion}
      onChange={handleVersionChange}
      getPopupContainer={(trigger: HTMLElement) =>
        trigger.parentNode as HTMLElement
      }>
      {versionOptions}
    </Select>,
    <Button
      ghost
      size="small"
      onClick={handleLangChange}
      className="header-lang-button"
      key="lang-button">
      {intl.formatMessage({ id: 'app.header.lang' })}
    </Button>,
  ]
  const menu = [
    <Menu
      className="menu-site"
      mode={menuMode}
      selectedKeys={[activeMenuItem]}
      id="nav"
      key="nav">
      <Menu.Item key="home">
        <Link to={utils.getLocalizedPathname('/', isZhCN)}>
          {intl.formatMessage({ id: 'app.header.menu.home' })}
        </Link>
      </Menu.Item>
      <Menu.Item key="docs/react">
        <Link to={utils.getLocalizedPathname('/docs/react/introduce', isZhCN)}>
          {intl.formatMessage({ id: 'app.header.menu.components' })}
        </Link>
      </Menu.Item>
      <Menu.Item key="web">
        <a href="//mobile.ant.design">
          {intl.formatMessage({ id: 'app.header.menu.web' })}
        </a>
      </Menu.Item>
      <Menu.Item key="docs/react/support">
        <Tooltip title="Coming Soon">
          <Link to="#">AI+ ✨</Link>
        </Tooltip>
      </Menu.Item>
      <Menu.Item key="pc">
        <a href="https://github.com/ant-design/ant-design-mobile-rn">github</a>
      </Menu.Item>
    </Menu>,
  ]

  return (
    <header id="header" className={headerClassName}>
      {menuMode === 'inline' ? (
        <>
          <Icon
            className="nav-phone-icon"
            type="menu"
            onClick={() => setMenuVisible(true)}
          />
          <Drawer
            title={null}
            placement="right"
            closable
            onClose={() => setMenuVisible(false)}
            visible={menuVisible}>
            <div style={{ padding: 16 }}>
              {langAndVersion}
              {menu}
            </div>
          </Drawer>
        </>
      ) : null}
      <Row>
        <Col xxl={4} xl={5} lg={5} md={8} sm={24} xs={24}>
          <Link to={utils.getLocalizedPathname('/', isZhCN)} id="logo">
            <img
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            />
            <span>
              {themeConfig?.name ||
                themeConfig?.siteTitle ||
                'Ant Design Mobile RN'}
            </span>
          </Link>
        </Col>
        <Col xxl={20} xl={19} lg={19} md={16} sm={0} xs={0}>
          <div id="search-box">
            <SearchBar />
          </div>
          {menuMode === 'horizontal' && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              {menu}
              <span style={{ width: '16px' }} />
              {langAndVersion}
            </div>
          )}
        </Col>
      </Row>
    </header>
  )
}
