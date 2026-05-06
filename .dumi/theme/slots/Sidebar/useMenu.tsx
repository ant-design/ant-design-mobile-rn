import { Tag } from 'antd'
import { Link, useFullSidebarData, useLocation } from 'dumi'
import React, { useMemo } from 'react'

/**
 * =============================
 * 类型定义
 * =============================
 */

export interface MenuNode {
  key: string
  label?: React.ReactNode
  children?: MenuNode[]
  type?: 'group'
}

interface Frontmatter {
  tag?: string
  version?: string
  subtitle?: string
}

interface SidebarItem {
  title: string
  link: string
  children?: SidebarItem[]
  frontmatter?: Frontmatter
}

type FullSidebarData = Record<string, SidebarItem[]>

/**
 * =============================
 * 工具函数
 * =============================
 */

function normalizeKey(link: string) {
  return link.replace(/(-cn$)/g, '')
}

function getLocale(path: string): 'cn' | 'en' {
  return path.includes('-cn') ? 'cn' : 'en'
}

const locales = {
  cn: {
    deprecated: '废弃',
    archive: '归档',
    update: '有更新',
  },
  en: {
    deprecated: 'DEPRECATED',
    archive: 'ARCHIVE',
    update: 'UPDATE',
  },
}

const getTagRender = (tag?: string, tagText?: string) => {
  switch (tag?.toUpperCase()) {
    case 'DEPRECATED':
      return <Tag color="red">{tagText || tag}</Tag>
    case 'ARCHIVE':
      return (
        <Tag color="gold" style={{ opacity: 0.6 }}>
          {tagText || tag}
        </Tag>
      )
    case 'UPDATE':
      return (
        <Tag color="green" style={{ opacity: 0.6 }}>
          {tagText || tag}
        </Tag>
      )
    default:
      return undefined
  }
}

/**
 * =============================
 * label 渲染
 * =============================
 */

function renderLabel(item: SidebarItem, search: string) {
  const { version, tag, subtitle } = item.frontmatter || {}

  const locale = getLocale(item.link)
  const tagText =
    tag && locales[locale]?.[tag.toLowerCase() as keyof (typeof locales)['cn']]

  return (
    <Link to={`${item.link}${search}`}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <div>
          <span>{item.title}</span>
          {subtitle && (
            <span style={{ marginLeft: 6, opacity: 0.6 }}>{subtitle}</span>
          )}
        </div>
        <div style={{ transform: 'scale(0.9)' }}>
          {getTagRender(tag, tagText)}
          {version && (
            <Tag color="green" style={{ opacity: 0.8 }}>
              {version}
            </Tag>
          )}
        </div>
      </div>
    </Link>
  )
}

/**
 * =============================
 * 主 Hook
 * =============================
 */

export default function useMenu() {
  const rawFullData = useFullSidebarData()
  const { pathname, search } = useLocation()

  const fullData = rawFullData as FullSidebarData

  const menuItems = useMemo<MenuNode[]>(() => {
    const rootItems: MenuNode[] = []
    const blogItems: MenuNode[] = []
    const componentGroups: MenuNode[] = []

    Object.entries(fullData).forEach(([path, groups]) => {
      /**
       * 1️⃣ Docs React → 顶层
       */
      if (path.startsWith('/docs/react')) {
        groups.forEach((group) => {
          group.children?.forEach((item) => {
            rootItems.push({
              key: normalizeKey(item.link),
              label: renderLabel(item, search),
            })
          })
        })
      }

      /**
       * 2️⃣ Blog → 子菜单
       */
      if (path.startsWith('/docs/blog')) {
        groups.forEach((group) => {
          group.children?.forEach((item) => {
            blogItems.push({
              key: normalizeKey(item.link),
              label: renderLabel(item, search),
            })
          })
        })
      }

      /**
       * 3️⃣ Components
       */
      if (path.startsWith('/components')) {
        groups.forEach((group) => {
          // 没 title → 直接顶层
          if (!group.title) {
            group.children?.forEach((item) => {
              rootItems.push({
                key: normalizeKey(item.link),
                label: renderLabel(item, search),
              })
            })
            return
          }

          // 有 title → group
          componentGroups.push({
            key: `components-${group.title}`,
            type: 'group',
            label: group.title,
            children:
              group.children?.map((item) => ({
                key: normalizeKey(item.link),
                label: renderLabel(item, search),
              })) || [],
          })
        })
      }
    })

    /**
     * =============================
     * 拼接最终结构
     * =============================
     */

    const result: MenuNode[] = []

    // 顶层
    result.push(...rootItems)

    // Blog
    if (blogItems.length) {
      result.push({
        key: 'Blog',
        label: 'Blog',
        children: blogItems,
      })
    }

    // Components
    if (componentGroups.length) {
      result.push({
        key: 'Components',
        label: 'Components',
        children: componentGroups,
      })
    }

    return result
  }, [fullData, pathname, search])

  return [menuItems, normalizeKey(pathname)] as const
}
