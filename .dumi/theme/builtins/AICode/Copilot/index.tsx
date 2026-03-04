import {
  AppstoreAddOutlined,
  CloudUploadOutlined,
  CommentOutlined,
  CopyOutlined,
  DislikeOutlined,
  LikeOutlined,
  OpenAIFilled,
  PaperClipOutlined,
  PlusOutlined,
  ProductOutlined,
  ReloadOutlined,
  ScheduleOutlined,
} from '@ant-design/icons'
import type {
  AttachmentsProps,
  BubbleListProps,
  ConversationItemType,
} from '@ant-design/x'
import {
  Attachments,
  Bubble,
  BubbleListRef,
  Conversations,
  Prompts,
  Sender,
  Suggestion,
  Think,
  Welcome,
} from '@ant-design/x'
import XMarkdown, { type ComponentProps } from '@ant-design/x-markdown'
import type {
  DefaultMessageInfo,
  SSEFields,
  XModelMessage,
} from '@ant-design/x-sdk'
import {
  DeepSeekChatProvider,
  useXChat,
  useXConversations,
  XModelParams,
  XModelResponse,
  XRequest,
} from '@ant-design/x-sdk'
import {
  Button,
  Flex,
  GetProp,
  GetRef,
  message,
  Popover,
  Space,
  Splitter,
} from 'antd'
import { createStyles } from 'antd-style'
import dayjs from 'dayjs'
import React, { useRef, useState } from 'react'
import locale from './local'

const DEFAULT_CONVERSATIONS_ITEMS: ConversationItemType[] = [
  {
    key: '5',
    label: locale.newSession,
    group: locale.today,
  },
  {
    key: '4',
    label: locale.whatHasAntDesignXUpgraded,
    group: locale.today,
  },
  {
    key: '3',
    label: locale.newAgiHybridInterface,
    group: locale.today,
  },
  {
    key: '2',
    label: locale.howToQuicklyInstallAndImportComponents,
    group: locale.yesterday,
  },
  {
    key: '1',
    label: locale.whatIsAntDesignX,
    group: locale.yesterday,
  },
]

// 使用国际化配置生成历史消息
const generateHistoryMessages = (
  locale: any,
): Record<string, DefaultMessageInfo<XModelMessage>[]> => {
  const { historyMessages } = locale

  return {
    '5': [
      {
        message: { role: 'user', content: historyMessages.newSession.user },
        status: 'success',
      },
      {
        message: {
          role: 'assistant',
          content: historyMessages.newSession.assistant,
        },
        status: 'success',
      },
    ],
    '4': [
      {
        message: {
          role: 'user',
          content: historyMessages.whatHasAntDesignXUpgraded.user,
        },
        status: 'success',
      },
      {
        message: {
          role: 'assistant',
          content: historyMessages.whatHasAntDesignXUpgraded.assistant,
        },
        status: 'success',
      },
    ],
    '3': [
      {
        message: {
          role: 'user',
          content: historyMessages.newAgiHybridInterface.user,
        },
        status: 'success',
      },
      {
        message: {
          role: 'assistant',
          content: historyMessages.newAgiHybridInterface.assistant,
        },
        status: 'success',
      },
    ],
    '2': [
      {
        message: {
          role: 'user',
          content: historyMessages.howToQuicklyInstallAndImportComponents.user,
        },
        status: 'success',
      },
      {
        message: {
          role: 'assistant',
          content:
            historyMessages.howToQuicklyInstallAndImportComponents.assistant,
        },
        status: 'success',
      },
    ],
    '1': [
      {
        message: {
          role: 'user',
          content: historyMessages.whatIsAntDesignX.user,
        },
        status: 'success',
      },
      {
        message: {
          role: 'assistant',
          content: historyMessages.whatIsAntDesignX.assistant,
        },
        status: 'success',
      },
    ],
  }
}

const historyMessageFactory = (
  conversationKey: string,
): DefaultMessageInfo<XModelMessage>[] => {
  const historyMessages = generateHistoryMessages(locale)
  return historyMessages[conversationKey] || []
}

const MOCK_SUGGESTIONS = [
  { label: locale.writeAReport, value: 'report' },
  { label: locale.drawAPicture, value: 'draw' },
  {
    label: locale.checkSomeKnowledge,
    value: 'knowledge',
    icon: <OpenAIFilled />,
    children: [
      { label: locale.aboutReact, value: 'react' },
      { label: locale.aboutAntDesign, value: 'antd' },
    ],
  },
]
const MOCK_QUESTIONS = [
  locale.whatHasAntDesignXUpgraded,
  locale.whatComponentsAreInAntDesignX,
  locale.howToQuicklyInstallAndImportComponents,
]

const useCopilotStyle = createStyles(({ token, css }) => {
  return {
    copilotChat: css`
      display: flex;
      flex-direction: column;
      background: ${token.colorBgContainer};
      color: ${token.colorText};
      height: 100%;
    `,
    // chatHeader 样式
    chatHeader: css`
      height: 52px;
      box-sizing: border-box;
      border-bottom: 1px solid ${token.colorBorder};
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px 0 16px;
    `,
    headerTitle: css`
      font-weight: 600;
      font-size: 15px;
    `,
    headerButton: css`
      font-size: 18px;
    `,
    conversations: css`
      width: 300px;
      .ant-conversations-list {
        padding-inline-start: 0;
      }
    `,
    // chatList 样式
    chatList: css`
      margin-block-start: ${token.margin}px;
      display: flex;
      height: calc(100% - 194px);
      flex-direction: column;
      overflow: scroll;
    `,
    chatWelcome: css`
      margin-inline: ${token.margin}px;
      padding: 12px 16px;
      border-radius: 2px 12px 12px 12px;
      background: ${token.colorBgTextHover};
      margin-bottom: ${token.margin}px;
    `,
    loadingMessage: css`
      background-image: linear-gradient(
        90deg,
        #ff6b23 0%,
        #af3cb8 31%,
        #53b6ff 89%
      );
      background-size: 100% 2px;
      background-repeat: no-repeat;
      background-position: bottom;
    `,
    // chatSend 样式
    chatSend: css`
      padding: ${token.padding}px;
    `,
    speechButton: css`
      font-size: 18px;
      color: ${token.colorText} !important;
    `,
  }
})

const ThinkComponent = React.memo((props: ComponentProps) => {
  const [title, setTitle] = React.useState(`${locale.deepThinking}...`)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    if (props.streamStatus === 'done') {
      setTitle(locale.completeThinking)
      setLoading(false)
    }
  }, [props.streamStatus])

  return (
    <Think title={title} loading={loading}>
      {props.children}
    </Think>
  )
})

/**
 * 🔔 Please replace the BASE_URL, MODEL with your own values.
 */
const providerCaches = new Map<string, DeepSeekChatProvider>()
const providerFactory = (conversationKey: string) => {
  if (!providerCaches.get(conversationKey)) {
    providerCaches.set(
      conversationKey,
      new DeepSeekChatProvider({
        request: XRequest<
          XModelParams,
          Partial<Record<SSEFields, XModelResponse>>
        >('https://api.x.ant.design/api/big_model_glm-4.5-flash', {
          manual: true,
          params: {
            stream: true,
            thinking: {
              type: 'disabled',
            },
            model: 'glm-4.5-flash',
          },
        }),
      }),
    )
  }
  return providerCaches.get(conversationKey)
}

const role: BubbleListProps['role'] = {
  assistant: {
    placement: 'start',
    footer: (
      <div style={{ display: 'flex' }}>
        <Button type="text" size="small" icon={<ReloadOutlined />} />
        <Button type="text" size="small" icon={<CopyOutlined />} />
        <Button type="text" size="small" icon={<LikeOutlined />} />
        <Button type="text" size="small" icon={<DislikeOutlined />} />
      </div>
    ),
    contentRender(content: string) {
      return (
        <XMarkdown
          content={content}
          components={{
            think: ThinkComponent,
          }}
        />
      )
    },
  },
  user: {
    placement: 'end',
    contentRender(content: string) {
      return (
        <XMarkdown
          content={content}
        />
      )
    },
  },
}

const CopilotChat = (props: any) => {
  const { styles } = useCopilotStyle()
  const attachmentsRef = useRef<GetRef<typeof Attachments>>(null)

  // ==================== State ====================
  const {
    conversations,
    activeConversationKey,
    setActiveConversationKey,
    addConversation,
    getConversation,
    setConversation,
  } = useXConversations({
    defaultConversations: DEFAULT_CONVERSATIONS_ITEMS,
    defaultActiveConversationKey: DEFAULT_CONVERSATIONS_ITEMS[0].key,
  })
  const [attachmentsOpen, setAttachmentsOpen] = useState(false)
  const [files, setFiles] = useState<GetProp<AttachmentsProps, 'items'>>([])

  const [inputValue, setInputValue] = useState('')

  const listRef = useRef<BubbleListRef>(null)

  // ==================== Runtime ====================

  const { onRequest, messages, isRequesting, abort } = useXChat({
    provider: providerFactory(activeConversationKey), // every conversation has its own provider
    conversationKey: activeConversationKey,
    defaultMessages: historyMessageFactory(activeConversationKey),
    requestPlaceholder: () => {
      return {
        content: locale.noData,
        role: 'assistant',
      }
    },
    requestFallback: (_, { error, errorInfo, messageInfo }) => {
      if (error.name === 'AbortError') {
        return {
          content: messageInfo?.message?.content || locale.requestAborted,
          role: 'assistant',
        }
      }
      return {
        content: errorInfo?.error?.message || locale.requestFailed,
        role: 'assistant',
      }
    },
  })

  // ==================== Event ====================
  const handleUserSubmit = (val: string) => {
    onRequest({
      messages: [{ role: 'user', content: val }],
    })
    listRef.current?.scrollTo({ top: 'bottom' })

    // session title mock
    const conversation = getConversation(activeConversationKey)
    if (conversation?.label === locale.newSession) {
      setConversation(activeConversationKey, {
        ...conversation,
        label: val?.slice(0, 20),
      })
    }
  }

  const onPasteFile = (files: FileList) => {
    for (const file of files) {
      attachmentsRef.current?.upload(file)
    }
    setAttachmentsOpen(true)
  }

  // ==================== Nodes ====================
  const chatHeader = (
    <div className={styles.chatHeader}>
      <div className={styles.headerTitle}>✨ {locale.aiCopilot}</div>
      <Space size={0}>
        <Button
          type="text"
          icon={<PlusOutlined />}
          onClick={() => {
            if (messages?.length) {
              const timeNow = dayjs().valueOf().toString()
              addConversation({
                key: timeNow,
                label: 'New session',
                group: 'Today',
              })
              setActiveConversationKey(timeNow)
            } else {
              message.error(locale.itIsNowANewConversation)
            }
          }}
          className={styles.headerButton}
        />
        <Popover
          placement="bottom"
          styles={{ container: { padding: 0, maxHeight: 600 } }}
          content={
            <Conversations
              items={conversations?.map((i) =>
                i.key === activeConversationKey
                  ? { ...i, label: `[current] ${i.label}` }
                  : i,
              )}
              activeKey={activeConversationKey}
              groupable
              onActiveChange={setActiveConversationKey}
              styles={{ item: { padding: '0 8px' } }}
              className={styles.conversations}
            />
          }>
          <Button
            type="text"
            icon={<CommentOutlined />}
            className={styles.headerButton}
          />
        </Popover>
      </Space>
    </div>
  )

  const chatList = (
    <div className={styles.chatList}>
      {messages?.length ? (
        /** 消息列表 */
        <Bubble.List
          ref={listRef}
          style={{ paddingInline: 16 }}
          items={messages?.map((i) => ({
            ...i.message,
            key: i.id,
            status: i.status,
            loading: i.status === 'loading',
          }))}
          role={role}
        />
      ) : (
        /** 没有消息时的 welcome */
        <>
          <Welcome
            variant="borderless"
            title={`👋 ${locale.helloImAntDesignX}`}
            description={locale.baseOnAntDesign}
            className={styles.chatWelcome}
          />

          <Prompts
            vertical
            title={locale.iCanHelp}
            items={MOCK_QUESTIONS.map((i) => ({ key: i, description: i }))}
            onItemClick={(info) =>
              handleUserSubmit(info?.data?.description as string)
            }
            style={{
              marginInline: 16,
            }}
            styles={{
              title: { fontSize: 14 },
            }}
          />
        </>
      )}
    </div>
  )
  const sendHeader = (
    <Sender.Header
      title={locale.uploadFile}
      styles={{ content: { padding: 0 } }}
      open={attachmentsOpen}
      onOpenChange={setAttachmentsOpen}
      forceRender>
      <Attachments
        ref={attachmentsRef}
        beforeUpload={() => false}
        items={files}
        onChange={({ fileList }) => setFiles(fileList)}
        placeholder={(type) =>
          type === 'drop'
            ? { title: locale.dropFileHere }
            : {
                icon: <CloudUploadOutlined />,
                title: locale.uploadFiles,
                description: locale.clickOrDragFilesToThisAreaToUpload,
              }
        }
      />
    </Sender.Header>
  )
  const chatSender = (
    <Flex vertical gap={12} className={styles.chatSend}>
      <Flex gap={12} align="center">
        <Button
          icon={<ScheduleOutlined />}
          onClick={() => handleUserSubmit('What has Ant Design X upgraded?')}>
          {locale.upgrades}
        </Button>
        <Button
          icon={<ProductOutlined />}
          onClick={() =>
            handleUserSubmit(
              'What component assets are available in Ant Design X?',
            )
          }>
          {locale.components}
        </Button>
        <Button icon={<AppstoreAddOutlined />}>{locale.more}</Button>
      </Flex>
      {/** 输入框 */}
      <Suggestion
        items={MOCK_SUGGESTIONS}
        onSelect={(itemVal) => setInputValue(`[${itemVal}]:`)}>
        {({ onTrigger, onKeyDown }) => (
          <Sender
            loading={isRequesting}
            value={inputValue}
            onChange={(v) => {
              onTrigger(v === '/')
              setInputValue(v)
            }}
            onSubmit={() => {
              handleUserSubmit(inputValue)
              setInputValue('')
            }}
            onCancel={() => {
              abort()
            }}
            allowSpeech
            placeholder={locale.askOrInputUseSkills}
            onKeyDown={onKeyDown}
            header={sendHeader}
            prefix={
              <Button
                type="text"
                icon={<PaperClipOutlined style={{ fontSize: 18 }} />}
                onClick={() => setAttachmentsOpen(!attachmentsOpen)}
              />
            }
            onPasteFile={onPasteFile}
          />
        )}
      </Suggestion>
    </Flex>
  )

  return (
    <div className={styles.copilotChat}>
      {/** 对话区 - header */}
      {chatHeader}

      {/** 对话区 - 消息列表 */}
      {chatList}

      {/** 对话区 - 输入框 */}
      {chatSender}
    </div>
  )
}

export default function Copilot(props: any) {
  const { liveDemoNode } = props
  return (
    <Splitter style={{ height: 800 }}>
      <Splitter.Panel
        defaultSize={250}
        min="30%"
        max="70%"
        style={{ overflow: 'hidden', background: '#ffffff' }}>
        {props.iframe ? (
          <iframe
            style={{ width: '100%', height: '100%', border: 'none' }}
            src={props.demoUrl}></iframe>
        ) : (
          liveDemoNode || props.children
        )}
      </Splitter.Panel>
      <Splitter.Panel defaultSize="50%" min="30%" max="70%">
        <CopilotChat />
      </Splitter.Panel>
    </Splitter>
  )
}
