import {
  AutoComplete,
  Button,
  Col,
  Icon,
  Input,
  Menu,
  Popover,
  Row,
  Select,
} from 'antd'
import classNames from 'classnames'
import { Link, history, useFullSidebarData, useIntl, useLocation, useSiteData } from 'dumi'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import * as utils from '../../utils'

const antdVersion = require('../../../../package.json').version
const { Option } = AutoComplete
const searchEngine = 'Google'
const searchLink = 'https://www.google.com/#q=site:mobile.ant.design+'

function flattenSidebarOptions(sidebarData: Record<string, { title?: string; order?: number; children: { title: string; link: string }[] }[]>) {
  const items: { url: string; title: string; subtitle?: string }[] = []
  Object.values(sidebarData || {}).forEach((groups) => {
    groups.forEach((group) => {
      (group.children || []).forEach((child: { title: string; link: string }) => {
        if (child.link && child.title) {
          items.push({ url: child.link, title: child.title, subtitle: '' })
        }
      })
    })
  })
  return items
}

export default function Header() {
  const { pathname } = useLocation()
  const intl = useIntl()
  const { themeConfig } = useSiteData()
  const sidebarData = useFullSidebarData()
  const [inputValue, setInputValue] = useState('')
  const [menuVisible, setMenuVisible] = useState(false)
  const [menuMode, setMenuMode] = useState<'horizontal' | 'inline'>('horizontal')
  const searchInputRef = useRef<Input>(null)

  const locale = intl.locale
  const isZhCN = locale === 'zh-CN'

  useEffect(() => {
    const enquire = require('enquire.js')
    enquire.register(
      'only screen and (min-width: 0) and (max-width: 992px)',
      {
        match: () => setMenuMode('inline'),
        unmatch: () => setMenuMode('horizontal'),
      }
    )
    const onKeyUp = (event: KeyboardEvent) => {
      if (event.keyCode === 83 && event.target === document.body && searchInputRef.current) {
        searchInputRef.current.focus()
      }
    }
    document.addEventListener('keyup', onKeyUp)
    return () => document.removeEventListener('keyup', onKeyUp)
  }, [])

  const handleSearch = useCallback(
    (value: string) => {
      if (value === searchEngine) {
        window.location.href = `${searchLink}${inputValue}`
        return
      }
      setInputValue('')
      history.push(value)
      searchInputRef.current?.blur()
    },
    [inputValue]
  )

  const handleLangChange = useCallback(() => {
    if (utils.isLocalStorageNameSupported()) {
      localStorage.setItem('locale', isZhCN ? 'en-US' : 'zh-CN')
    }
    const currentProtocol = `${window.location.protocol}//`
    const currentHref = window.location.href.substr(currentProtocol.length)
    window.location.href =
      currentProtocol +
      currentHref.replace(
        window.location.pathname,
        utils.getLocalizedPathname(pathname, !isZhCN)
      )
  }, [pathname, isZhCN])

  const handleVersionChange = useCallback((url: string) => {
    const currentUrl = window.location.href
    const currentPathname = window.location.pathname
    window.location.href = currentUrl
      .replace(window.location.origin, url)
      .replace(currentPathname, utils.getLocalizedPathname(currentPathname, isZhCN))
  }, [isZhCN])

  const handleSelectFilter = useCallback((value: string, option: React.ReactElement) => {
    const optionValue = option.props['data-label']
    return (
      optionValue === searchEngine ||
      String(optionValue).toLowerCase().indexOf(value.toLowerCase()) > -1
    )
  }, [])

  const docVersions = { ...(themeConfig?.docVersions || {}), [antdVersion]: antdVersion }
  const versionOptions = Object.keys(docVersions).map((version) => (
    <Option value={docVersions[version]} key={version}>
      {version}
    </Option>
  ))

  const module = pathname.replace(/(^\/|\/$)/g, '').split('/').slice(0, -1).join('/')
  let activeMenuItem = module || 'home'
  if (activeMenuItem === 'components' || pathname.includes('changelog')) {
    activeMenuItem = 'docs/react'
  }

  const sidebarItems = flattenSidebarOptions(sidebarData || {})
  const options = sidebarItems.map((item) => (
    <Option
      value={item.url}
      key={item.url}
      data-label={`${(item.title || '').toLowerCase()} ${item.subtitle || ''}`}
    >
      <strong>{item.title}</strong>
      {item.subtitle && <span className="ant-component-decs">{item.subtitle}</span>}
    </Option>
  ))
  options.push(
    <Option key="searchEngine" value={searchEngine} data-label={searchEngine}>
      {intl.formatMessage({ id: 'app.header.search' })}
    </Option>
  )

  const headerClassName = classNames({
    clearfix: true,
    'home-nav-white': true,
    'home-page-header': activeMenuItem === 'home',
  })

  const menu = [
    <Button
      ghost
      size="small"
      onClick={handleLangChange}
      className="header-lang-button"
      key="lang-button"
    >
      {intl.formatMessage({ id: 'app.header.lang' })}
    </Button>,
    <Select
      key="version"
      className="version"
      size="small"
      dropdownMatchSelectWidth={false}
      defaultValue={antdVersion}
      onChange={handleVersionChange}
      getPopupContainer={(trigger: HTMLElement) => trigger.parentNode as HTMLElement}
    >
      {versionOptions}
    </Select>,
    <Menu
      className="menu-site"
      mode={menuMode}
      selectedKeys={[activeMenuItem]}
      id="nav"
      key="nav"
    >
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
        <Link to={utils.getLocalizedPathname('/docs/react/support', isZhCN)}>
          {intl.formatMessage({ id: 'app.header.menu.support' })}
        </Link>
      </Menu.Item>
      <Menu.Item key="pc">
        <a href="https://github.com/ant-design/ant-design-mobile-rn">github</a>
      </Menu.Item>
    </Menu>,
  ]

  const searchPlaceholder = locale === 'zh-CN' ? '搜索组件...' : 'Search Components...'

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
          <Link to={utils.getLocalizedPathname('/', isZhCN)} id="logo">
            <img
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            />
            <span>{themeConfig?.name || themeConfig?.siteTitle || 'Ant Design Mobile RN'}</span>
          </Link>
        </Col>
        <Col xxl={20} xl={19} lg={19} md={16} sm={0} xs={0}>
          <div id="search-box">
            <Icon type="search" />
            <AutoComplete
              dataSource={options}
              value={inputValue}
              dropdownClassName="component-select"
              placeholder={searchPlaceholder}
              optionLabelProp="data-label"
              filterOption={handleSelectFilter}
              onSelect={handleSearch}
              onSearch={setInputValue}
              getPopupContainer={(trigger: HTMLElement) => trigger.parentNode as HTMLElement}
            >
              <Input ref={searchInputRef} />
            </AutoComplete>
          </div>
          {menuMode === 'horizontal' ? menu : null}
        </Col>
      </Row>
    </header>
  )
}
