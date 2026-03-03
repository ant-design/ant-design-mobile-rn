import React, { useState } from 'react';
import PromptDrawer from './ThemeSwitch/PromptDrawer';
import './index.less';

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
  const [isMarketDrawerOpen, setIsMarketDrawerOpen] = useState(false);
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

      <button style={{ position: 'absolute' }} onClick={()=>setIsMarketDrawerOpen(true)}>
        打开抽屉
      </button>

      <PromptDrawer
        open={isMarketDrawerOpen}
        onClose={() => setIsMarketDrawerOpen(false)}
        onThemeChange={(nextTheme) => {
          console.log('nextTheme', nextTheme);
          // const updates: Parameters<typeof updateSiteConfig>[0] = { dynamicTheme: nextTheme };
          // // Sync the site theme (and URL param) with the AI-generated algorithm
          // if (nextTheme?.algorithm) {
          //   const filteredTheme = theme.filter((t) => !['light', 'dark', 'auto'].includes(t));
          //   updates.theme = [...filteredTheme, nextTheme.algorithm];
          //   setTheme(nextTheme.algorithm);
          // }
          // updateSiteConfig(updates);
        }}
      />
    </>
  )
}
