import { Col, Drawer, Icon, Menu } from 'antd'
import React, { useEffect, useMemo, useState } from 'react'
import './index.less'
import useMenu, { MenuNode } from './useMenu'
const { SubMenu, ItemGroup } = Menu

function renderNodes(nodes: MenuNode[]): React.ReactNode {
  return nodes.map((node) => {
    if (node.type === 'group') {
      return (
        <ItemGroup key={node.key} title={node.label as string}>
          {node.children && renderNodes(node.children)}
        </ItemGroup>
      )
    }

    if (node.children) {
      return (
        <SubMenu key={node.key} title={<h4>{node.label}</h4>}>
          {renderNodes(node.children)}
        </SubMenu>
      )
    }

    return <Menu.Item key={node.key}>{node.label}</Menu.Item>
  })
}

const SidebarNew: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false)
  const [menuMode, setMenuMode] = useState<'horizontal' | 'inline'>(
    'horizontal',
  )
  const [menuItems, selectedKey] = useMenu()

  const rootSubmenuKeys = useMemo(
    () => menuItems.filter((i) => i.children).map((i) => i.key),
    [menuItems],
  )

  const [openKeys, setOpenKeys] = useState<string[]>(rootSubmenuKeys)

  useEffect(() => {
    setOpenKeys(rootSubmenuKeys)
  }, [rootSubmenuKeys.join(',')])

  useEffect(() => {
    const enquire = require('enquire.js')
    enquire.register('only screen and (min-width: 0) and (max-width: 992px)', {
      match: () => setMenuMode('inline'),
      unmatch: () => setMenuMode('horizontal'),
    })
  }, [])

  const menu = (
    <Menu
      mode="inline"
      inlineIndent={24}
      selectedKeys={[selectedKey]}
      openKeys={openKeys}
      onOpenChange={(keys) => setOpenKeys(keys as string[])}>
      {renderNodes(menuItems)}
    </Menu>
  )

  if (menuMode === 'inline') {
    return (
      <>
        <Icon
          className="sidebar-mobile-icon"
          type="menu"
          onClick={() => setMenuVisible(true)}
        />
        <Drawer
          title={null}
          placement="left"
          closable
          onClose={() => setMenuVisible(false)}
          visible={menuVisible}>
          {menu}
        </Drawer>
      </>
    )
  }

  return (
    <Col
      xxl={4}
      xl={5}
      lg={6}
      md={6}
      sm={24}
      xs={24}
      className="dumi-sidebar-main-menu">
      {menu}
    </Col>
  )
}

export default SidebarNew
