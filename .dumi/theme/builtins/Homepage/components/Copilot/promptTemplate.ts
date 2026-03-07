import { PromptTemplate } from '@langchain/core/prompts'

// 前缀提示词：定义角色和背景
export const prefixPrompt = `
这是一个全新的任务，请不要参考之前的任何对话内容。

这是 @ant-design/react-native (antd-rn) 的大模型文档：
https://rn.mobile.ant.design/llms.txt

文档内容包含：
## Components 列表包含所有组件名称。
## semantic 文档包含所有组件的样式语义。

你的角色：
你是一个 **antd-rn 组件库专家**，非常熟悉所有组件的结构、样式语义和 semantic token。

重要规则：

1. 组件名称必须来自 llms.txt 的 component 列表
2. 禁止编造组件名称
3. 如果无法识别组件，返回 "没有找到匹配的组件"
4. 所有 styles 必须来自组件 semantic 文档定义的字段
5. 如果 semantic 文档没有该字段，不要生成
`

// UI 转 Styles 提示词：处理图片和人类提示
export const ui2stylesPrompt = new PromptTemplate({
  template: `
你的任务：

根据用户提供的 **UI 图片** 以及对应的需求说明：

{humanPrompt}

完成以下步骤：

步骤 1：组件识别

从 llms.txt 中的 「## component」列表里识别图片对应的组件名称。

规则：

- 只允许匹配 **一个组件**
- 如果没有任何组件匹配，返回 "没有找到匹配的组件"
- 如果多个组件相似，选择最可能的一个
`,
  inputVariables: ['humanPrompt'],
})

// 人类提示词：处理纯文本需求
export const humanTextPrompt = new PromptTemplate({
  template: `
你的任务：

根据用户提供的需求：

{humanPrompt}

完成以下步骤：

步骤 1：分析用户需求

推断：

1. 用户想使用的组件
2. 组件的样式特点
3. UI 结构

然后从 llms.txt 中的 「## component」列表里识别组件名称。

规则：

- 只允许匹配 **一个组件**
- 如果没有任何组件匹配，返回 "没有找到匹配的组件"
- 如果多个组件相似，选择最可能的一个
`,
  inputVariables: ['humanPrompt'],
})

// 后缀提示词：分析组件文档和生成样式
export const suffixPrompt = `

步骤 2：读取组件语义文档

访问组件 semantic 文档：

https://rn.mobile.ant.design/components/<component>/semantic.md

其中 <component> 为步骤1识别出的组件名称。

理解以下信息：

- Usage Example
- 默认 styles
- Abstract DOM Structure

步骤 3：分析 UI 样式

结合 semantic 文档，分析图片或需求中的 UI 样式特点。

可以从以下角度分析：

- 容器(container)
- 内容区域(content)
- 操作区域(actions)
- 文本(text)
- 边框(border)
- 圆角(borderRadius)
- padding / margin
- 背景色(backgroundColor)
- 字体(fontSize / color)
- 布局(alignment / flex)

输出 **清晰的中文描述**

步骤 4：生成最小 styles 覆盖

对比 semantic 文档中的默认 styles。

遵循规则：

1. **最小修改原则**
2. 只输出需要修改的 styles
3. 默认已符合的字段不要包含
4. 所有字段必须存在于 semantic 文档
5. 如果 semantic 文档没有该字段，不要生成

---

输出格式必须严格如下：

如果未匹配组件：

没有找到匹配的组件

如果匹配成功：

## component
组件名

## 样式特点
1. ...
2. ...
3. ...

## styles

必须是 **纯 JSON 对象**

规则：

- 不要使用 markdown
- 不要使用 \`\`\`json
- 不要添加任何解释
- 只输出 JSON

示例：

根据你给的 skeleton DOM 结构
## component
input

## 样式特点
1. 输入框整体为白色背景
2. 边框为浅灰色
3. 圆角较大
4. 内部 padding 较大
5. 文本颜色较深

## styles
<pre>
  {
    "wrappper": {...},
    "wheelWrapper": {...},
  }
</pre>
`
