import {
  CloudUploadOutlined,
  CopyOutlined,
  InfoCircleOutlined,
  PaperClipOutlined,
  SyncOutlined,
} from '@ant-design/icons'
import type { AttachmentsProps, BubbleListProps } from '@ant-design/x'
import { Attachments, Bubble, Sender } from '@ant-design/x'
import XMarkdown from '@ant-design/x-markdown'
import {
  OpenAIChatProvider,
  XRequest,
  useXChat,
  type XModelParams,
  type XModelResponse,
} from '@ant-design/x-sdk'
import { Button, Flex, GetProp, GetRef, Modal, Tooltip, message } from 'antd'
import copy from 'antd/es/_util/copy'
import React from 'react'

import { demoPng } from './demoPng'
import { parseStyles, systemPrompt, userPrompt } from './promptTemplate'

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

const useLocale = () => {
  const isCN =
    typeof location !== 'undefined' ? location.pathname.endsWith('-cn') : false
  return {
    example1: isCN
      ? `帮我实现图中PickerView的样式`
      : 'Please help me implement the style of the PickerView in the image.',
    viewPresetPrompts: isCN ? '查看预设提示词' : 'View preset prompts',
    modalTitle: isCN ? '预设提示词' : 'Preset prompts',
    modalCopy: isCN ? '复制' : 'Copy',
    modalClose: isCN ? '关闭' : 'Close',
    modalCopySuccess: isCN ? '复制成功' : 'Copy success',
    aiCopilot: isCN ? 'AI 助手' : 'AI Assistant',
    abort: isCN ? '中止' : 'abort',
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
    retry: isCN ? '重试' : 'Retry',
    historyUserMessage: isCN
      ? '这是一条历史消息'
      : 'This is a historical message',
    historyAIResponse: isCN
      ? '这是一条历史回答消息，请发送新消息。'
      : 'This is a historical response message, please send a new message.',
    uploadFile: isCN ? '上传文件' : 'Upload file',
    dropFileHere: isCN ? '将文件拖到此处' : 'Drop file here',
    uploadFiles: isCN ? '上传文件' : 'Upload files',
    clickOrDragFilesToThisAreaToUpload: isCN
      ? '点击或将文件拖到此处上传'
      : 'Click or drag files to this area to upload',
  }
}

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
        callbacks: {
          onSuccess: (_chunks, _responseHeaders, message) => {
            try {
              const { component, styles } = parseStyles(
                (message && message.message.content) || '',
              )
              // TODO-luokun: 根据 component 和 styles 生成样式
              console.log(component, styles)
            } catch (error) {
              console.log(error)
            }
          },
          onError: (error) => {
            console.log(error)
          },
        },
      }),
    }),
  )
  const locale = useLocale()

  const { onRequest, messages, setMessages, isRequesting, abort, onReload } =
    useXChat({
      provider,
      defaultMessages: [
        {
          id: '1',
          message: {
            role: 'user',
            content: `<img src='${demoPng}' />\n\n${locale.example1}`,
          },
          status: 'success',
        },
        {
          id: '2',
          message: {
            role: 'assistant',
            content: `## component
PickerView

## 样式特点
- 轮子区域（wheelWrapper）采用垂直方向滚动，每个选项高度固定
- 中间高亮区（maskMiddle）使用半透明背景突出显示选中项
- 选中项（itemActiveStyle）文字加粗并使用主题色
- 整体容器（container）圆角设计，视觉上更柔和

## styles
\`\`\`json
{
  "itemActiveStyle": {
    "color": "#108ee9",
    "fontWeight": "bold"
  },
  "maskMiddle": {
    "backgroundColor": "rgba(51,51,51,0.1)",
    "borderRadius": 10
  },
  "container": {
    "borderRadius": 8
  }
}
\`\`\`
`,
          },
          status: 'success',
        },
      ],
      // @ts-ignore
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

  const fileToDataUrl = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => {
        const result = reader.result as string
        resolve(result)
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  const onSubmit = async (nextContent: string) => {
    const enhanceMessages = [
      {
        role: 'system', // 🚩预设system增强prompt
        content: systemPrompt,
      },
    ]

    let fileContent = ''
    if (files.length > 0) {
      // 添加图片
      for (const file of files) {
        const originFile = file.originFileObj as File
        if (originFile) {
          try {
            const dataUrl = await fileToDataUrl(originFile)
            fileContent += `<img src='${dataUrl}' />\n\n`
          } catch (error) {
            console.error('文件读取失败:', error)
            message.error(locale.requestFailed)
            return
          }
        }
      }
    }
    const prompt = await userPrompt.format({
      humanPrompt: fileContent + nextContent,
    })
    enhanceMessages.push({
      role: 'user',
      content: prompt,
    })
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
        id: String(Date.now()),
        message: { role: 'user', content: fileContent + nextContent },
        status: 'success',
      },
    ])
    setContent('')
    setFiles([])
    setAttachmentsOpen(false)
  }

  // ========================== 预设提示词 ==========================
  const PresetPrompts = ({ humanPrompt }: { humanPrompt: string }) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const [copyPrompt, setCopyPrompt] = React.useState('')

    React.useEffect(() => {
      async function getContent() {
        const prompt = await userPrompt.format({
          humanPrompt,
        })
        setCopyPrompt(systemPrompt + prompt)
      }
      getContent()
    }, [humanPrompt])

    return (
      <>
        <Button
          type="link"
          icon={<InfoCircleOutlined />}
          style={{ float: 'right', marginTop: -20 }}
          onClick={() => setIsModalOpen(true)}>
          {locale.viewPresetPrompts}
        </Button>
        <Modal
          title={locale.modalTitle}
          width={1000}
          footer={
            <>
              <Button
                type="default"
                onClick={async () => {
                  await copy(copyPrompt)
                  message.success(locale.modalCopySuccess)
                }}
                icon={<CopyOutlined />}>
                {locale.modalCopy}
              </Button>
              <Button type="primary" onClick={() => setIsModalOpen(false)}>
                {locale.modalClose}
              </Button>
            </>
          }
          styles={{ body: { overflow: 'auto', maxHeight: 500 } }}
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}>
          <pre>{copyPrompt}</pre>
        </Modal>
      </>
    )
  }

  // ========================== chatHeader ==========================
  const chatHeader = <div className="chatHeader">✨ {locale.aiCopilot}</div>

  return (
    <Flex vertical style={{ height: '100%' }}>
      {chatHeader}
      <Bubble.List
        style={{ flex: 1, overflow: 'auto', padding: '0 15px' }}
        role={role}
        items={messages.map(({ id, message, status }) => ({
          key: id,
          role: message.role,
          status: status,
          loading: status === 'loading',
          content: message.content,
          footer:
            message.role === 'user' ? (
              <PresetPrompts humanPrompt={message.content} />
            ) : undefined,
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
