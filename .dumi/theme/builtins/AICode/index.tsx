import React from 'react'
import './index.less'

function triggerReactTextareaChange(
  textarea: HTMLTextAreaElement,
  value: string,
): void {
  const prototype = Object.getPrototypeOf(textarea)

  const descriptor = Object.getOwnPropertyDescriptor(prototype, 'value')

  if (!descriptor || !descriptor.set) {
    throw new Error('Unable to find value setter on textarea')
  }

  descriptor.set.call(textarea, value)

  textarea.dispatchEvent(new Event('input', { bubbles: true }))
}

export default function AICode() {
  // 更新代码
  const pushCode = () => {
    setTimeout(() => {
      const textarea = document.querySelector(
        '.dumi-default-source-code-editor-textarea',
      )
      triggerReactTextareaChange(textarea as HTMLTextAreaElement, '')
    }, 500)
  }
  return (
    <>
      <button style={{ position: 'absolute' }} onClick={pushCode}>
        更新代码
      </button>
    </>
  )
}
