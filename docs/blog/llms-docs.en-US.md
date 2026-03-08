---
category: Blog
title: LLMs.txt
author: 1uokun
date: 2026-03-08
---

2026-03-08 [@1uokun](https://github.com/1uokun)

## Background

How can AI tools like Cursor, Windsurf, and Claude better understand the Ant Design Mobile RN component library?

## Solution

We provide several `LLMs.txt` routes to help AI tools access the documentation:

- [llms.txt](https://rn.mobile.ant.design/llms.txt) — A structured overview containing all components and their documentation links  
- [llms-full.txt](https://rn.mobile.ant.design/llms-full.txt) — A full overview of all components and documentation links  
- [llms-semantic.md](https://rn.mobile.ant.design/llms-semantic.md) — Semantic DOM structure documentation for all components

### Documentation Structure

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

`LLMs.txt` is a structured document specifically designed for large language models. It mainly includes:

- Core functionality and purpose of components
- Complete API descriptions
- Usage scenarios and best practices
- Relationships with other components
- Common issues and notes

For more information about how to use `LLMs.txt`, refer to the official Ant Design documentation:

https://ant.design/docs/react/llms

---

## semantic.md

In `@ant-design/react-native`, the key enhancement is **semantic.md**, which mainly contains:

- Usage Example
- styles
- Abstract DOM Structure, including:
  - style references
  - necessary semantic comments
  - conditional rendering logic
  - event handling

---

## Why do we need `semantic.md`?

Third-party component code is usually located in the `node_modules` directory, and the component implementation may rely on:

- Multiple layers of component nesting
- Hooks
- Prop forwarding
- Dynamic style composition

For example:

```
PickerView
└─ Wheel
   └─ Item
      └─ Text
```

For LLMs:

- Shallow reasoning often leads to hallucinations
- Deep reasoning consumes too many tokens

Therefore, `semantic.md` performs a very important task:  
**abstracting component source code into an AI-friendly structural document.**

Key features:

- Flattened DOM structure
- Explicit style keys
- Clear semantic annotations

---

### Example: Prompt Pipeline based on `llms.txt` + `semantic.md`

> AI Chat example on the homepage: [{View preset prompts}](https://rn.mobile.ant.design#dumi-pages-index-demo-code),
>
> The preset prompt can be copied and used directly.

In practice, we do not provide all component documentation directly to the LLM. Instead, we follow a process similar to **RAG (Retrieval-Augmented Generation)** and only provide the necessary information.

The overall workflow:

```
User input: UI description / image
↓
Read llms.txt
↓
Identify the most likely component
↓
Read the component's semantic.md
↓
Build the prompt
↓
LLM generates styles / code

```

---

#### 1. Component Retrieval

`llms.txt` acts as the index of the component library and contains the component list:

```

## Components

* Button
* PickerView
* Calendar
* Modal
  ...

```

When a user provides a UI description, the LLM determines:

> Which component does this UI most closely resemble?

For example:

User input:

```
An iOS-style wheel selector that can scroll vertically to select options
```

The LLM identifies:

```
PickerView
```

This prevents:

- Using the wrong component
- The LLM inventing non-existent components
- Incorrect combinations of multiple components

---

#### 2. Component Structure Understanding (Semantic Retrieval)

After identifying the component, the system constructs the link:

```

components/{component}/semantic.md

````

For example, for PickerView:  
https://rn.mobile.ant.design/components/picker-view/semantic.md

This file describes the component:

- DOM hierarchy
- Style keys
- Dynamic style rules

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
````

Compared to reading the source code directly:

* The structure is clearer
* The context is more concise
* The semantics are more explicit

---

## Summary

With `llms.txt` + `semantic.md`, we build a **documentation system designed for LLMs** for the component library:

```
llms.txt
    ↓
Component Retrieval

semantic.md
    ↓
Component Structure Understanding

Prompt Pipeline
    ↓
LLM Code Generation
```

In the era of AI coding, component libraries need not only:

**documentation for humans**

but also:

**documentation for AI**

`semantic.md` serves as the bridge between component implementation and LLM understanding.