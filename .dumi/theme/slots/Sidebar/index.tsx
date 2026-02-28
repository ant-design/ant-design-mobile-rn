// @ts-nocheck

// import MobileMenu from '@rc-component/drawer'
import { Col, Menu } from 'antd'
import { useSidebarData } from 'dumi'
import React, { useEffect } from 'react'

import useMenu, { AntdV3MenuItem } from './useMenu'

import './index.less'

const renderMenuItems = (items: AntdV3MenuItem[]): React.ReactNode => {
  return items.map((item) => {
    if (item.type === 'group') {
      return (
        <Menu.ItemGroup key={item.key} title={item.label as string}>
          {item.children && renderMenuItems(item.children)}
        </Menu.ItemGroup>
      )
    }
    if (item.children && item.children.length > 0) {
      return (
        <Menu.SubMenu key={item.key} title={item.label}>
          {renderMenuItems(item.children)}
        </Menu.SubMenu>
      )
    }
    return <Menu.Item key={item.key}>{item.label}</Menu.Item>
  })
}

const SidebarNew: React.FC = (props) => {
  const sidebarData = useSidebarData()
  const isMobile = false

  const [menuItems, selectedKey] = useMenu()

  const defaultOpenKeys =
    sidebarData?.map<string>(({ title }) => title!).filter(Boolean) || []
  const [openKeys, setOpenKeys] = React.useState<string[]>(defaultOpenKeys)

  useEffect(() => {
    if (openKeys.join(',') === defaultOpenKeys.join(',')) {
      return
    }
    setOpenKeys(defaultOpenKeys)
  }, [defaultOpenKeys.join(',')])

  const menuChild = (
    <Menu
      inlineIndent={30}
      className="dumi-sidebar-aside"
      mode="inline"
      selectedKeys={[selectedKey]}
      openKeys={openKeys}
      onOpenChange={setOpenKeys}>
      {renderMenuItems(menuItems)}
    </Menu>
  )

  return (
    // isMobile ? (
    //   <MobileMenu key="Mobile-menu">{menuChild}</MobileMenu>
    // ) : (
    <Col
      xxl={4}
      xl={5}
      lg={6}
      md={6}
      sm={24}
      xs={24}
      className="dumi-sidebar-main-menu">
      {menuChild}
    </Col>
  )
}

export default SidebarNew
