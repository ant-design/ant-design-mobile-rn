import {
  CloudUploadOutlined,
  PaperClipOutlined,
  SyncOutlined,
} from '@ant-design/icons'
import type { AttachmentsProps, BubbleListProps } from '@ant-design/x'
import { Attachments, Bubble, Sender } from '@ant-design/x'
import XMarkdown from '@ant-design/x-markdown'
import {
  OpenAIChatProvider,
  useXChat,
  type XModelParams,
  type XModelResponse,
  XRequest,
} from '@ant-design/x-sdk'
import { Button, Flex, GetProp, GetRef, Tooltip } from 'antd'
import React from 'react'
import {
  humanTextPrompt,
  prefixPrompt,
  suffixPrompt,
  ui2stylesPrompt,
} from './promptTemplate'

/**
 * 🔔 请替换 BASE_URL、PATH、MODEL、API_KEY 为您自己的值
 * 🔔 Please replace the BASE_URL, PATH, MODEL, API_KEY with your own values.
 */

const BASE_URL = 'https://api.x.ant.design/api/big_model_glm-4.5-flash'

/**
 * 🔔 当前请求中 MODEL 是固定的，请替换为您自己的 BASE_URL 和 MODEL
 * 🔔 The MODEL is fixed in the current request, please replace it with your BASE_URL and MODEL
 */

const MODEL = 'glm-4.5-flash'

// 本地化钩子：根据当前语言环境返回对应的文本
// Localization hook: return corresponding text based on current language environment
const useLocale = () => {
  const isCN =
    typeof location !== 'undefined' ? location.pathname.endsWith('-cn') : false
  return {
    abort: isCN ? '中止' : 'abort',
    addUserMessage: isCN ? '添加用户消息' : 'Add a user message',
    addAIMessage: isCN ? '添加AI消息' : 'Add an AI message',
    addSystemMessage: isCN ? '添加系统消息' : 'Add a system message',
    editLastMessage: isCN ? '编辑最后一条消息' : 'Edit the last message',
    placeholder: isCN
      ? '请输入内容，按下 Enter 发送消息'
      : 'Please enter content and press Enter to send message',
    waiting: isCN ? '请稍候...' : 'Please wait...',
    requestFailed: isCN
      ? '请求失败，请重试！'
      : 'Request failed, please try again!',
    requestAborted: isCN ? '请求已中止' : 'Request is aborted',
    noMessages: isCN
      ? '暂无消息，请输入问题并发送'
      : 'No messages yet, please enter a question and send',
    requesting: isCN ? '请求中' : 'Requesting',
    qaCompleted: isCN ? '问答完成' : 'Q&A completed',
    retry: isCN ? '重试' : 'Retry',
    currentStatus: isCN ? '当前状态：' : 'Current status:',
    historyUserMessage: isCN
      ? '这是一条历史消息'
      : 'This is a historical message',
    historyAIResponse: isCN
      ? '这是一条历史回答消息，请发送新消息。'
      : 'This is a historical response message, please send a new message.',
    deleteFirstMessage: isCN ? '删除第一条消息' : 'Delete the first message',
    uploadFile: isCN ? '上传文件' : 'Upload file',
    dropFileHere: isCN ? '将文件拖到此处' : 'Drop file here',
    uploadFiles: isCN ? '上传文件' : 'Upload files',
    clickOrDragFilesToThisAreaToUpload: isCN
      ? '点击或将文件拖到此处上传'
      : 'Click or drag files to this area to upload',
  }
}

// 消息角色配置：定义助手和用户消息的布局和渲染方式
// Message role configuration: define layout and rendering for assistant and user messages
const role: BubbleListProps['role'] = {
  assistant: {
    placement: 'start',
    contentRender(content: string) {
      return <XMarkdown content={content} />
    },
  },
  user: {
    placement: 'end',
    contentRender(content: string) {
      return <XMarkdown content={content} />
    },
  },
  system: {
    placement: 'end',
    contentRender() {
      return null
    },
  },
}

const App = () => {
  const [content, setContent] = React.useState('')
  const [attachmentsOpen, setAttachmentsOpen] = React.useState(false)
  const [files, setFiles] = React.useState<GetProp<AttachmentsProps, 'items'>>(
    [],
  )
  const attachmentsRef = React.useRef<GetRef<typeof Attachments>>(null)

  // 创建OpenAI聊天提供者：配置请求参数和模型
  // Create OpenAI chat provider: configure request parameters and model
  const [provider] = React.useState(
    new OpenAIChatProvider({
      request: XRequest<XModelParams, XModelResponse>(BASE_URL, {
        manual: true,
        params: {
          model: MODEL,
          stream: true,
        },
      }),
    }),
  )
  const locale = useLocale()

  // 聊天消息管理：处理消息列表、历史消息、错误处理等
  // Chat message management: handle message list, historical messages, error handling, etc.
  const {
    onRequest,
    messages,
    removeMessage,
    setMessages,
    setMessage,
    isRequesting,
    abort,
    onReload,
  } = useXChat({
    provider,
    // 默认消息：包含历史对话作为示例
    // Default messages: include historical conversation as examples
    defaultMessages: [
      {
        id: '1',
        message: { role: 'user', content: locale.historyUserMessage },
        status: 'success',
      },
      {
        id: '2',
        message: { role: 'assistant', content: locale.historyAIResponse },
        status: 'success',
      },
    ],
    requestFallback: (_, { error, errorInfo, messageInfo }) => {
      // 请求失败时的回退处理：区分中止错误和其他错误
      // Fallback handling for request failure: distinguish between abort error and other errors
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
    requestPlaceholder: () => {
      // 请求占位符：在等待响应时显示等待消息
      // Request placeholder: display waiting message while waiting for response
      return {
        content: locale.waiting,
        role: 'assistant',
      }
    },
  })

  // 添加用户消息：向消息列表中添加一条用户消息
  // Add user message: add a user message to the message list
  const addUserMessage = () => {
    setMessages([
      ...messages,
      {
        id: Date.now(),
        message: { role: 'user', content: locale.addUserMessage },
        status: 'success',
      },
    ])
  }

  // 添加AI消息：向消息列表中添加一条AI助手消息
  // Add AI message: add an AI assistant message to the message list
  const addAIMessage = () => {
    setMessages([
      ...messages,
      {
        id: Date.now(),
        message: { role: 'assistant', content: locale.addAIMessage },
        status: 'success',
      },
    ])
  }

  // 添加系统消息：向消息列表中添加一条系统消息
  // Add system message: add a system message to the message list
  const addSystemMessage = () => {
    setMessages([
      ...messages,
      {
        id: Date.now(),
        message: { role: 'system', content: locale.addSystemMessage },
        status: 'success',
      },
    ])
  }

  // 编辑最后一条消息：修改消息列表中最后一条消息的内容
  // Edit last message: modify the content of the last message in the message list
  const editLastMessage = () => {
    const lastMessage = messages[messages.length - 1]
    setMessage(lastMessage.id, {
      message: {
        role: lastMessage.message.role,
        content: locale.editLastMessage,
      },
    })
  }

  const onPasteFile = async (files: FileList) => {
    // @ts-ignore
    for (const file of files) {
      attachmentsRef.current?.upload(file)
    }
    setAttachmentsOpen(true)
  }

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

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => {
        const result = reader.result as string
        const base64 = result.split(',')[1]
        resolve(base64)
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  const onSubmit = async (nextContent: string) => {
    let systemPrompt = ''
    let fileContent = ''
    if (files.length > 0) {
      systemPrompt =
        prefixPrompt +
        (await ui2stylesPrompt.format({
          humanPrompt: nextContent,
        })) +
        suffixPrompt

      // 添加图片
      for (const file of files) {
        const originFile = file.originFileObj as File
        if (originFile) {
          const base64 = await fileToBase64(originFile)
          fileContent += `<img src='data:image/png;base64,${base64}' />\n\n`
        }
      }
    } else {
      systemPrompt =
        prefixPrompt +
        (await humanTextPrompt.format({
          humanPrompt: nextContent,
        })) +
        suffixPrompt
    }

    const enhanceMessages = [
      {
        role: 'system', // 🚩预设system增强prompt
        content: systemPrompt,
      },
    ]
    if (fileContent) {
      enhanceMessages.push({
        role: 'user',
        content: fileContent,
      })
    }
    // 发送增强后的内容给 AI
    onRequest({
      messages: enhanceMessages,
      frequency_penalty: 0,
      max_tokens: 1024,
      thinking: {
        type: 'disabled',
      },
    })

    setMessages([
      ...messages,
      {
        id: Date.now(),
        message: { role: 'user', content: fileContent + nextContent },
        status: 'success',
      },
    ])
    setContent('')
    setFiles([])
    setAttachmentsOpen(false)
  }

  return (
    <Flex vertical gap="middle">
      {/* 状态和控制区域：显示当前状态并提供操作按钮 */}
      {/* Status and control area: display current status and provide action buttons */}
      <Flex vertical gap="middle">
        <div>
          {locale.currentStatus}{' '}
          {isRequesting
            ? locale.requesting
            : messages.length === 0
              ? locale.noMessages
              : locale.qaCompleted}
        </div>
        <Flex align="center" gap="middle">
          {/* 中止按钮：仅在请求进行中时可用 */}
          {/* Abort button: only available when request is in progress */}
          <Button disabled={!isRequesting} onClick={abort}>
            {locale.abort}
          </Button>
          <Button onClick={addUserMessage}>{locale.addUserMessage}</Button>
          <Button onClick={addAIMessage}>{locale.addAIMessage}</Button>
          <Button onClick={addSystemMessage}>{locale.addSystemMessage}</Button>
          {/* 编辑按钮：仅在存在消息时可用 */}
          {/* Edit button: only available when messages exist */}
          <Button disabled={!messages.length} onClick={editLastMessage}>
            {locale.editLastMessage}
          </Button>
          <Button
            disabled={!messages.length}
            onClick={() => {
              removeMessage(messages?.[0]?.id)
            }}>
            {locale.deleteFirstMessage}
          </Button>
        </Flex>
      </Flex>

      {/* 消息列表：显示所有聊天消息，包括历史消息 */}
      {/* Message list: display all chat messages, including historical messages */}
      <Bubble.List
        style={{ height: 500 }}
        role={role}
        items={messages.map(({ id, message, status }) => ({
          key: id,
          role: message.role,
          status: status,
          loading: status === 'loading',
          content: message.content,
          // 为助手消息添加重试按钮
          // Add retry button for assistant messages
          components:
            message.role === 'assistant'
              ? {
                  footer: (
                    <Tooltip title={locale.retry}>
                      <Button
                        size="small"
                        type="text"
                        icon={<SyncOutlined />}
                        style={{ marginInlineEnd: 'auto' }}
                        onClick={() =>
                          onReload(id, {
                            userAction: 'retry',
                          })
                        }
                      />
                    </Tooltip>
                  ),
                }
              : {},
        }))}
      />
      <Sender
        loading={isRequesting}
        value={content}
        onCancel={() => {
          abort()
        }}
        onChange={setContent}
        placeholder={locale.placeholder}
        onSubmit={onSubmit}
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
    </Flex>
  )
}

export default App
