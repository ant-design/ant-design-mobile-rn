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
          <div className="chatHeader" style={{ background: '#f8f8f8' }}>
            <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
            <span>Ant Design Mobile RN</span>
          </div>
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
