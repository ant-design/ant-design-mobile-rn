import { UserOutlined } from '@ant-design/icons'
import { Bubble, Sender, Welcome } from '@ant-design/x'
import type { BubbleItemType } from '@ant-design/x/es/bubble/interface'
import type { SenderRef } from '@ant-design/x/es/sender'
import { Drawer, Flex, Splitter, Typography } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import usePromptTheme from './usePromptTheme'

const antdLogoSrc =
  'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'

export interface PromptDrawerProps {
  open: boolean
  onClose: () => void
  onThemeChange?: (themeConfig: any) => void
}

const PromptDrawer: React.FC<PromptDrawerProps> = ({ open, onClose }) => {
  const locale = {} as any
  const [inputValue, setInputValue] = useState('')

  const senderRef = useRef<SenderRef>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const shouldAutoScroll = useRef(true)

  const [components, setComponents] = useState(['input', 'switch'])

  const [submitPrompt, loading, prompt, resObj, update, cancelRequest] =
    usePromptTheme(components)

  const handleScroll = React.useCallback(() => {
    if (!scrollContainerRef.current) return

    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current
    const distanceToBottom = scrollHeight - scrollTop - clientHeight
    shouldAutoScroll.current = distanceToBottom <= 10
  }, [])

  const handleSubmit = React.useCallback(
    (value: string) => {
      shouldAutoScroll.current = true

      setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTop =
            scrollContainerRef.current.scrollHeight
        }
      }, 0)

      submitPrompt(value)
      setInputValue('')
    },
    [submitPrompt],
  )

  const items = React.useMemo<BubbleItemType[]>(() => {
    if (!prompt) {
      return []
    }

    const nextItems: BubbleItemType[] = [
      {
        key: 1,
        role: 'user',
        placement: 'end',
        content: prompt,
        avatar: <UserOutlined />,
        shape: 'corner',
      },
      {
        key: 2,
        role: 'ai',
        placement: 'start',
        content: resObj,
        avatar: (
          <img
            src={antdLogoSrc}
            alt="Ant Design"
            style={{ width: 28, height: 28 }}
          />
        ),
        loading: !Object.keys(resObj).length,
        contentRender: (contentObj: any) => (
          <Typography>
            {components.map((component) => (
              <pre
                key={component}
                style={{
                  margin: 0,
                  marginTop: 10,
                  padding: '16px',
                  borderRadius: 8,
                  background:
                    'linear-gradient(135deg, #f2f9fe 0%, #f7f3ff 100%)',
                  fontSize: 13,
                  lineHeight: 1.6,
                  border: 'none',
                  color: 'rgba(0,0,0,0.85)',
                }}>
                {`<${component.replace(/^./, (c) => c.toUpperCase())} styles={${contentObj[component]}}
/> `}
              </pre>
            ))}
          </Typography>
        ),
        styles: {
          content: {
            background: 'transparent',
            padding: 0,
            border: 'none',
          },
        },
      },
    ]

    return nextItems
  }, [prompt, update, loading, locale.finishTips, handleSubmit, locale.refresh])

  useEffect(() => {
    if (scrollContainerRef.current && shouldAutoScroll.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight
    }
  }, [update, items, prompt])

  const renderedWelcome = React.useMemo(
    () => (
      <div style={{ padding: '0 0 16px' }}>
        <Welcome
          icon={
            <img
              src={antdLogoSrc}
              alt="Ant Design"
              style={{ width: 48, height: 48 }}
            />
          }
          title={locale.welcomeTitle}
          description={locale.welcomeDescription}
          styles={{
            root: {
              background: 'linear-gradient(97deg, #f2f9fe 0%, #f7f3ff 100%)',
            },
          }}
        />
      </div>
    ),
    [locale.welcomeTitle, locale.welcomeDescription],
  )

  return (
    <Drawer
      title={locale.title}
      open={open}
      onClose={onClose}
      width="80vw"
      placement="right">
      <Splitter style={{ height: '100%' }}>
        {/* 左侧预览区域 */}
        <Splitter.Panel defaultSize="50%" min="30%" max="70%">
          <Flex vertical style={{ height: '100%', padding: '0 8px' }}>
            <div
              style={{
                flex: 1,
                padding: '16px 8px',
                overflow: 'auto',
              }}>
              <iframe
                src="~demos/dumi-pages-index-cn-demo-code?compact=&locale=zh-CN"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </Flex>
        </Splitter.Panel>

        {/* 右侧对话区域 */}
        <Splitter.Panel defaultSize="50%" min="30%" max="70%">
          <Flex vertical gap={0} style={{ height: '100%', padding: '0 8px' }}>
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              style={{
                flex: 1,
                padding: 0,
                overflow: 'auto',
              }}>
              {!prompt ? (
                <>
                  {renderedWelcome}
                  {/* {renderedPrompts} */}
                </>
              ) : (
                <Bubble.List items={items} />
              )}
            </div>
            <Sender
              ref={senderRef}
              value={inputValue}
              onChange={setInputValue}
              onSubmit={handleSubmit}
              loading={loading}
              onCancel={cancelRequest}
              placeholder={locale.placeholder}
            />
          </Flex>
        </Splitter.Panel>
      </Splitter>
    </Drawer>
  )
}

export default PromptDrawer
