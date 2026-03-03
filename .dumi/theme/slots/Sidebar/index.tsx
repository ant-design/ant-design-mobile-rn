import { Col, Drawer, Menu } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import React, { useEffect, useMemo, useState } from 'react'
import './index.less'
import useMenu, { MenuNode } from './useMenu'

function convertNodesToItems(nodes: MenuNode[]): any[] {
  return nodes.map((node) => {
    if (node.type === 'group') {
      return {
        type: 'group',
        key: node.key,
        label: node.label as string,
        children: node.children ? convertNodesToItems(node.children) : undefined,
      }
    }

    if (node.children) {
      return {
        key: node.key,
        label: <h4>{node.label}</h4>,
        children: convertNodesToItems(node.children),
      }
    }

    return {
      key: node.key,
      label: node.label,
    }
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

  const convertedMenuItems = useMemo(() => convertNodesToItems(menuItems), [menuItems])

  const menu = (
    <Menu
      mode="inline"
      inlineIndent={24}
      selectedKeys={[selectedKey]}
      openKeys={openKeys}
      onOpenChange={(keys) => setOpenKeys(keys as string[])}
      items={convertedMenuItems}>
    </Menu>
  )

  if (menuMode === 'inline') {
    return (
      <>
        <MenuOutlined
          className="sidebar-mobile-icon"
          onClick={() => setMenuVisible(true)}
        />
        <Drawer
          title={null}
          placement="left"
          closable
          onClose={() => setMenuVisible(false)}
          open={menuVisible}>
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
