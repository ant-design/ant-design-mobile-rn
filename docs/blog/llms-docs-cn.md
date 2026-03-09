# LLMs.txt

2026-03-08 [@1uokun](https://github.com/1uokun)

## 背景

如何让 Cursor、Windsurf 和 Claude 等 AI 工具更好地理解 Ant Design Mobile RN 组件库？

## 解决方案

我们提供多个 LLMs.txt 路由来帮助 AI 工具访问文档：

- [llms.txt](https://rn.mobile.ant.design/llms.txt)：包含所有组件及其文档链接的结构化概览
- [llms-full.txt](https://rn.mobile.ant.design/llms-full.txt)：包含所有组件及其文档链接的完整概览
- [llms-semantic.md](https://rn.mobile.ant.design/llms-semantic.md)：所有组件语义化 DOM 结构文档

### 文档结构（链接）

```
https://rn.mobile.ant.design/
├── llms.txt
├── llms-full.txt
├── llms-semantic.md
├── components/
│   ├── button.md
│   ├── button/
│   │   └── semantic.md
│   ├── picker-view.md
│   ├── picker-view/
│   │   └── semantic.md
│   └── ...

```

---

## LLMs.txt

`LLMs.txt` 是专门为大语言模型提供的结构化文档，主要包含：

- 组件的核心功能和用途
- API 接口的完整描述
- 使用场景和最佳实践
- 与其他组件的关系
- 常见问题和注意事项

关于 `LLMs.txt` 的使用方式，可以参考 antd 官方文档：

https://ant.design/docs/react/llms-cn

---

## semantic.md

在 `@ant-design/react-native` 中，我们重点增强的是 **semantic.md**，主要包含：

* 使用案例
* styles 样式定义
* 扁平抽象后的 DOM 结构，同时包括
  - 样式引用
  - 必要的语义注释
  - 条件渲染逻辑
  - 事件处理

---

## 为什么需要 semantic.md？

第三方组件代码通常位于 `node_modules` 目录下，同时组件实现可能依赖：

* 多层组件嵌套
* hooks
* props 透传
* 动态样式组合

例如：

```
PickerView
 └─ Wheel
     └─ Item
         └─ Text
```

对于 LLM 来说：

* 浅层思考幻觉严重
* 深度思考浪费 token

因此 `semantic.md` 做了一件非常重要的事情：**将组件源码“抽象”为 AI 友好的结构文档**

主要特点：

* DOM 扁平化
* styles key 显式化
* 语义注释完整

---

### 案例：基于 llms.txt + semantic.md 的 Prompt Pipeline

> 首页AI Chat案例 [<查看预设提示词>](https://rn.mobile.ant.design/index-cn#dumi-pages-index-cn-demo-code) 可直接复制使用

在实际使用中，我们不会把所有组件文档直接交给 LLM，而是通过类似 **RAG（Retrieval-Augmented Generation）** 的流程，只提供必要的信息。

整体流程如下：

```
用户输入 UI 描述 / 图片
        ↓
读取 llms.txt
        ↓
识别最可能的组件
        ↓
读取对应组件 semantic.md
        ↓
构建 Prompt
        ↓
LLM 生成 styles / 代码
```

---

#### 1 组件识别（Component Retrieval）

`llms.txt` 是组件库的索引文件，包含组件列表：

```
## Components

- Button
- PickerView
- Calendar
- Modal
...
```

当用户输入 UI 描述时，LLM 会根据 `llms.txt` 判断：

> 这个 UI 最像哪个组件？

例如：

用户输入：

```
一个 iOS 风格的滚轮选择器，可以上下滚动选择选项
```

LLM 识别：

```
PickerView
```

这样可以避免：

* 使用错误组件
* LLM 自己发明组件
* 多组件错误组合

---

#### 2 组件结构理解（Semantic Retrieval）

识别组件后，拼接 `components/{component}/semantic.md` 链接，

以 PickerView 为例：[https://rn.mobile.ant.design/components/picker-view/semantic.md](https://rn.mobile.ant.design/components/picker-view/semantic.md)

这个文件描述组件：

* DOM 层级结构
* styles key
* 动态样式规则



```html
<View styles={{ wrapper }}>
  <View styles={{ wheelWrapper }}>
    <Wheel>
      <View styles={{ itemWrap }}>
        <Text styles={{ itemStyle, itemActiveStyle }} />
      </View>
    </Wheel>
  </View>

  <View styles={{ mask }}>
    <View styles={{ maskTop }} />
    <View styles={{ maskMiddle }} />
    <View styles={{ maskBottom }} />
  </View>
</View>
```

相比直接读取源码：

* 结构更清晰
* 上下文更精简
* 语义更明确

---

## 总结

通过 `llms.txt` + `semantic.md`，我们为组件库构建了一套 **面向 LLM 的文档体系**：

```
llms.txt
    ↓
组件识别

semantic.md
    ↓
组件结构理解

Prompt Pipeline
    ↓
LLM 生成代码
```

在 AI Coding 时代，组件库不仅需要：

**给人看的文档**

也需要：

**给 AI 看的文档**

`semantic.md` 正是连接组件实现与 LLM 理解之间的桥梁。

> 讨论区:  https://github.com/ant-design/ant-design-mobile-rn/discussions/1470
