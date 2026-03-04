import enUS_X from '@ant-design/x/locale/en_US'
import zhCN_X from '@ant-design/x/locale/zh_CN'
import enUS_antd from 'antd/locale/en_US'
import zhCN_antd from 'antd/locale/zh_CN'

const zhCN = {
  whatIsAntDesignX: '什么是 Ant Design X？',
  today: '今天',
  howToQuicklyInstallAndImportComponents: '如何快速安装和导入组件？',
  newAgiHybridInterface: '新的 AGI 混合界面',
  yesterday: '昨天',
  hotTopics: '热门话题',
  designGuide: '设计指南',
  intention: '意图',
  role: '角色',
  chat: '对话',
  interface: '界面',
  upgrades: '升级',
  components: '组件',
  richGuide: 'RICH 指南',
  installationIntroduction: '安装介绍',
  whatHasAntDesignXUpgraded: 'Ant Design X 有哪些升级？',
  whatComponentsAreInAntDesignX: 'Ant Design X 中有哪些组件？',
  comeAndDiscoverNewDesignParadigm: '快来发现 AI 时代的新设计范式。',
  requestFailedPleaseTryAgain: '请求失败，请重试！',
  requestAborted: '请求已中止',
  requestFailed: '请求失败，请重试！',
  requestIsInProgress: '请求正在进行中，请等待请求完成。',
  rename: '重命名',
  delete: '删除',
  uploadFile: '上传文件',
  dropFileHere: '将文件拖到此处',
  uploadFiles: '上传文件',
  clickOrDragFilesToUpload: '点击或将文件拖到此处上传',
  askOrInputUseSkills: '提问或输入 / 使用技能',
  aiUnderstandsUserNeedsAndProvidesSolutions: 'AI理解用户需求并提供解决方案',
  aiPublicPersonAndImage: 'AI的公众形象',
  howAICanExpressItselfWayUsersUnderstand: 'AI如何以用户理解的方式表达自己',
  aiBalances: 'AI平衡"聊天"和"执行"行为',
  deepThink: '深度思考',
  deepThinking: '深度思考中',
  completeThinking: '深度思考完成',
  modelIsRunning: '正在调用模型',
  modelExecutionCompleted: '大模型执行完成',
  executionFailed: '执行失败',
  aborted: '已经终止',
  noData: '暂无数据',
  newConversation: '新对话',
  curConversation: '当前对话',
  itIsNowANewConversation: '当前已经是新会话',
  isMock: '当前为模拟功能',
  retry: '重新生成',
  placeholder: '点击 Enter 发送消息',
  agentName: 'Ant Design X 助手',
  slotTextStart: '请帮我介绍 Ant Design X 中',
  slotTextEnd: '的用法。',
  aiMessage_1: `RICH 设计范式 \n [查看详情](/docs/spec/introduce-cn})`,
  aiMessage_2: `# 快速安装和导入组件 \n\n \`npm install @ant-design/x --save \` \n [查看详情](/components/introduce-cn/)\n \n\n <br />\n\n## 导入方式 \n\n \`\`\`tsx \n\n import { Bubble } from '@ant-design/x';\n\n \`\`\`\n\n ## 组件使用 \n\n \`\`\`tsx\n\n import React from 'react';\n\nimport { Bubble } from '@ant-design/x';\n\nconst App: React.FC = () => ( \n\n <div className="App"> \n\n  <Bubble content="Hello world!" />\n\n </div>\n\n  );\n\n export default App;`,
  welcome: `你好，我是 Ant Design X`,
  welcomeDescription: `基于蚂蚁设计，AGI 产品界面解决方案，打造更好的智能视觉~~`,
  aiCopilot: 'AI 助手',

  newSession: '新会话1',
  writeAReport: '写报告',
  drawAPicture: '画图',
  checkSomeKnowledge: '查看知识',
  aboutReact: '关于 React',
  aboutAntDesign: '关于 Ant Design',
  messageIsRequesting:
    '消息正在请求中，您可以在请求完成后创建新对话或立即中止...',
  clickOrDragFilesToThisAreaToUpload: '点击或将文件拖到此处上传',
  more: '更多',
  helloImAntDesignX: '你好，我是 Ant Design X',
  baseOnAntDesign:
    '基于 Ant Design，AGI 产品界面解决方案，创造更智能的视觉体验~',
  iCanHelp: '我可以帮助：',

  // 历史消息内容
  historyMessages: {
    newSession: {
      user: `123
      123

<img src="https://chatgpt.com/backend-api/estuary/content?id=file_00000000f288720c8876b11f12dc2c70&ts=492399&p=fs&cid=1&sig=9bd3dc806da174c697ccc81078b8b7064af2bba0c4011b4b96aac0b11d753121&v=0" />

![asd](https://chatgpt.com/backend-api/estuary/content?id=file_00000000f288720c8876b11f12dc2c70&ts=492399&p=fs&cid=1&sig=9bd3dc806da174c697ccc81078b8b7064af2bba0c4011b4b96aac0b11d753121&v=0)     

## 帮我实现这样的样式
`,
      assistant: `根据你给的 skeleton DOM 结构，这张图里的 picker 样式可以拆解成下面几个层级来描述（按你 \`styles\` 结构对应说明）：

---

## 🧱 一、整体容器（\`wrappper\`）

* **背景色：** 白色
* **圆角：** 较大圆角（类似 iOS ActionSheet 风格，≈ 20~24）
* **布局：** 垂直排列
* **顶部有标题区域**
* 底部是独立的操作按钮区（取消 / 确定）
* 整体有半透明灰色蒙层背景（不属于 picker-view 本身，而是外层 Modal）

👉 视觉风格明显是 **iOS 原生时间选择器风格**

---

## 🌀 二、轮子区域（\`wheelWrapper\`）

* 三列结构（年 / 月 / 日）
* 横向排列
* 每列居中对齐
* 列之间没有分割线
* 文字整体灰色

轮子区域特点：

* 非选中项：浅灰色（低对比度）
* 选中项：加深颜色（深灰或接近黑）
* 字体大小统一
* 每项高度固定（≈ 36~44px 视觉感）

---

## 🎯 三、中间高亮区（\`maskMiddle\`）

这是视觉核心。

### 样式特征：

* 背景色：浅灰色（类似 #f2f2f2）
* 圆角：胶囊型圆角（左右全圆）
* 横向铺满整个 wheel 区域
* 高度 = \`itemHeight\`
* 内边距左右有留白

### 作用：

* 强调当前选中行
* 提供 iOS 风格的“浮动选中条”视觉

👉 不是边框，是 **实心浅灰底色块**

---

## 🌫 四、顶部 & 底部遮罩（\`maskTop\` / \`maskBottom\`）

* 渐变遮罩
* 从透明 → 白色
* 用于制造“滚动淡出”效果
* 不可点击（pointerEvents="none"）

视觉效果：

* 上下两端内容逐渐模糊变浅
* 中间区域清晰

---

## 🔤 五、选项文本（\`itemWrap\` + \`itemStyle\` + \`itemActiveStyle\`）

### 普通项：

* 字号中等（约 16px）
* 颜色：浅灰
* 不加粗

### 选中项：

* 颜色：蓝色（明显高亮）
* 文字：\`2023年 01月 11日\`
* 带单位（年/月/日）
* 可能 slightly 加粗

👉 图片中选中项是蓝色，说明 \`itemActiveStyle\` 覆盖了默认颜色
`,
    },
    whatHasAntDesignXUpgraded: {
      user: 'Ant Design X 有哪些升级？',
      assistant: 'RICH 设计范式 \n [查看详情](/docs/spec/introduce-cn})',
    },
    newAgiHybridInterface: {
      user: '新的 AGI 混合界面',
      assistant: `# 快速安装和导入组件 \n\n \`npm install @ant-design/x --save \` \n\n [查看详情](/components/introduce-cn/)\n\n <br />\n\n## 导入方式 \n\n \`\`\`tsx \n\n import { Bubble } from '@ant-design/x';\n\n \`\`\`\n\n ## 组件使用 \n\n \`\`\`tsx\n\n import React from 'react';\n\nimport { Bubble } from '@ant-design/x';\n\nconst App: React.FC = () => ( \n\n <div className="App"> \n\n  <Bubble content="Hello world!" />\n\n </div>\n\n  );\n\n export default App;`,
    },
    howToQuicklyInstallAndImportComponents: {
      user: '如何快速安装和导入组件？',
      assistant:
        "Ant Design X 提供了丰富的组件库。安装很简单：`npm install @ant-design/x --save`。然后你可以导入需要的组件，比如：`import { Bubble, Sender, Conversations } from '@ant-design/x'`。每个组件都有详细的文档和示例。",
    },
    whatIsAntDesignX: {
      user: '什么是 Ant Design X？',
      assistant:
        '什么是 Ant Design X？ 它是基于 Ant Design 的 AGI 产品界面解决方案，专为 AI 时代设计的 React 组件库。包含了对话、气泡、发送器等核心组件，帮助开发者快速构建智能对话界面。',
    },
  },
}

const enUS = {
  whatIsAntDesignX: 'What is Ant Design X?',
  today: 'Today',
  howToQuicklyInstallAndImportComponents:
    'How to quickly install and import components?',
  newAgiHybridInterface: 'New AGI Hybrid Interface',
  yesterday: 'Yesterday',
  hotTopics: 'Hot Topics',
  designGuide: 'Design Guide',
  intention: 'Intention',
  role: 'Role',
  chat: 'Chat',
  interface: 'Interface',
  upgrades: 'Upgrades',
  components: 'Components',
  richGuide: 'RICH Guide',
  installationIntroduction: 'Installation Introduction',
  whatHasAntDesignXUpgraded: 'What has Ant Design X upgraded?',
  whatComponentsAreInAntDesignX: 'What components are in Ant Design X?',
  comeAndDiscoverNewDesignParadigm:
    'Come and discover the new design paradigm of the AI era.',
  requestFailedPleaseTryAgain: 'Request failed, please try again!',
  requestAborted: 'Request aborted',
  requestFailed: 'Request failed, please try again!',
  requestIsInProgress:
    'Request is in progress, please wait for the request to complete.',
  rename: 'Rename',
  delete: 'Delete',
  uploadFile: 'Upload File',
  dropFileHere: 'Drop file here',
  uploadFiles: 'Upload files',
  clickOrDragFilesToUpload: 'Click or drag files to this area to upload',
  askOrInputUseSkills: 'Ask or input / use skills',
  aiUnderstandsUserNeedsAndProvidesSolutions:
    'AI understands user needs and provides solutions.',
  aiPublicPersonAndImage: "AI's public persona and image",
  howAICanExpressItselfWayUsersUnderstand:
    'How AI Can Express Itself in a Way Users Understand',
  aiBalances: 'AI balances "chat" & "do" behaviors.',
  deepThink: 'Deep Think',
  deepThinking: 'Deep Thinking',
  completeThinking: 'Complete Thinking',
  modelIsRunning: 'Model is running',
  modelExecutionCompleted: 'Model execution completed',
  executionFailed: 'Execution failed',
  aborted: 'Aborted',
  noData: 'No Data',
  newConversation: 'New Conversation',
  curConversation: 'Current Conversation',
  itIsNowANewConversation: 'It is now a new conversation.',
  isMock: 'It is Mock',
  retry: 'retry',
  placeholder: 'Press Enter to send message',
  agentName: 'Ant Design X Assistant',
  slotTextStart: 'Please help me introduce the usage of ',
  slotTextEnd: 'in Ant Design X.',
  aiMessage_1: `RICH Design Paradigm \n [View Details](/docs/spec/induction)`,
  aiMessage_2: `# Quickly install and import components \n\n \`npm install @ant-design/x --save\` \n [View details](/components/introduce)\n\n <br /> \n\n ## Import Method \n\n \`\`\`tsx \n\n import { Bubble } from '@ant-design/x';\n\n \`\`\`\n\n ## Component Usage \n\n \`\`\`tsx\n\n import React from 'react';\n\nimport { Bubble } from '@ant-design/x';\n\nconst App: React.FC = () => ( \n\n <div className="App"> \n\n  <Bubble content="Hello world!" />\n\n </div>\n\n  );\n\n export default App;`,
  welcome: `Hello,I'm Ant Design X`,
  welcomeDescription: `Base on Ant Design, AGI product interface solution, create a better intelligent vision~`,
  aiCopilot: 'AI Copilot',
  newSession: 'New session',
  writeAReport: 'Write a report',
  drawAPicture: 'Draw a picture',
  checkSomeKnowledge: 'Check some knowledge',
  aboutReact: 'About React',
  aboutAntDesign: 'About Ant Design',
  messageIsRequesting:
    'Message is Requesting, you can create a new conversation after request done or abort it right now...',
  clickOrDragFilesToThisAreaToUpload:
    'Click or drag files to this area to upload',
  more: 'More',
  helloImAntDesignX: "Hello, I'm Ant Design X",
  baseOnAntDesign:
    'Base on Ant Design, AGI product interface solution, create a better intelligent vision~',
  iCanHelp: 'I can help:',

  // 历史消息内容
  historyMessages: {
    newSession: {
      user: 'New session',
      assistant:
        "Hello, I'm Ant Design X! Base on Ant Design, AGI product interface solution, create a better intelligent vision~",
    },
    whatHasAntDesignXUpgraded: {
      user: 'What has Ant Design X upgraded?',
      assistant: 'RICH Design Paradigm \n [View Details](/docs/spec/induction)',
    },
    newAgiHybridInterface: {
      user: 'New AGI Hybrid Interface',
      assistant: `# Quickly install and import components \n\n \`npm install @ant-design/x --save\` \n\n [View details](/components/introduce)\n\n <br /> \n\n ## Import Method \n\n \`\`\`tsx \n\n import { Bubble } from '@ant-design/x';\n\n \`\`\`\n\n ## Component Usage \n\n \`\`\`tsx\n\n import React from 'react';\n\nimport { Bubble } from '@ant-design/x';\n\nconst App: React.FC = () => ( \n\n <div className="App"> \n\n  <Bubble content="Hello world!" />\n\n </div>\n\n  );\n\n export default App;`,
    },
    howToQuicklyInstallAndImportComponents: {
      user: 'How to quickly install and import components?',
      assistant:
        "Ant Design X provides a rich component library. Installation is simple: `npm install @ant-design/x --save`. Then you can import the components you need, such as: `import { Bubble, Sender, Conversations } from '@ant-design/x'`. Each component has detailed documentation and examples.",
    },
    whatIsAntDesignX: {
      user: 'What is Ant Design X?',
      assistant:
        'What is Ant Design X? It is an AGI product interface solution based on Ant Design, a React component library designed for the AI era. It includes core components such as conversations, bubbles, and senders to help developers quickly build intelligent conversation interfaces.',
    },
  },
}

export const isZhCN =
  typeof window !== 'undefined' &&
  window?.parent?.location?.pathname?.includes('-cn')

export default isZhCN
  ? ({ ...zhCN_antd, ...zhCN, ...zhCN_X } as typeof zhCN_antd &
      typeof zhCN &
      typeof zhCN_X)
  : ({ ...enUS_antd, ...enUS, ...enUS_X } as typeof enUS_antd &
      typeof enUS &
      typeof enUS_X)
