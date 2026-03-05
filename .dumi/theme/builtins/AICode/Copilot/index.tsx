import { Splitter } from 'antd'
import React from 'react'
import XChat from './XChat'
import './index.less'

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
        <XChat />
      </Splitter.Panel>
    </Splitter>
  )
}
