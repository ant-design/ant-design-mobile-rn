import { ReactComponent as IconClose } from '@ant-design/icons-svg/inline-svg/outlined/close.svg'
import { ReactComponent as IconMenu } from '@ant-design/icons-svg/inline-svg/outlined/menu.svg'
import { useRouteMeta, useSiteData } from 'dumi'
import ColorSwitch from 'dumi/theme/slots/ColorSwitch'
import HeaderExtra from 'dumi/theme/slots/HeaderExtra'
import LangSwitch from 'dumi/theme/slots/LangSwitch'
import Logo from 'dumi/theme/slots/Logo'
import Navbar from 'dumi/theme/slots/Navbar'
import SearchBar from 'dumi/theme/slots/SearchBar'
import SocialIcon from 'dumi/theme/slots/SocialIcon'
import React, { useMemo, useState } from 'react'
import './index.less'

function VersionSelect() {
  const { themeConfig } = useSiteData()
  const versions = useMemo(() => {
    // TOOD: 自定义版本号和链接 + package.json 中的版本号
    return {
      '3.x': 'https://3x.rn.mobile.ant.design',
    }
  }, [themeConfig])
  return (
    <select
      className="dumi-desktop-version"
      defaultValue=""
      onChange={(e) => {
        const v = e.target.value
        if (v) window.location.href = v
      }}
    >
      {Object.entries(versions).map(([label, url]) => (
        <option key={label} value={url}>
          {label}
        </option>
      ))}
    </select>
  )
}

export default function Header() {
  const { frontmatter } = useRouteMeta()
  const [showMenu, setShowMenu] = useState(false)
  const { themeConfig } = useSiteData()
  const socialIcons = useMemo(
    () =>
      themeConfig.socialLinks
        ? Object.keys(themeConfig.socialLinks)
            .slice(0, 5)
            .map((key) => ({ icon: key, link: themeConfig.socialLinks![key] }))
        : [],
    [themeConfig.socialLinks],
  )

  return (
    <div
      className="dumi-default-header dumi-desktop-header"
      data-static={Boolean(frontmatter?.hero) || undefined}
      data-mobile-active={showMenu || undefined}
      onClick={() => setShowMenu(false)}
    >
      <header id="header">
        <div id="logo">
          <Logo />
        </div>
        <div className="header-right">
          <div id="search-box">
            <SearchBar />
          </div>
          <div id="nav">
            <Navbar />
          </div>
          <div className="header-aside">
            <LangSwitch />
            <VersionSelect />
            {themeConfig.prefersColor?.switch && <ColorSwitch />}
            {socialIcons.map((item) => (
              <SocialIcon icon={item.icon} link={item.link} key={item.link} />
            ))}
            <HeaderExtra />
          </div>
          <button
            type="button"
            className="dumi-default-header-menu-btn"
            onClick={(ev) => {
              ev.stopPropagation()
              setShowMenu((v) => !v)
            }}
          >
            {showMenu ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </header>
    </div>
  )
}
