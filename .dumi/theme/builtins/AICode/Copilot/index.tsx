import { Splitter } from 'antd'
import React from 'react'

export default function Copilot(props: any) {
  const { liveDemoNode } = props
  return (
    <Splitter>
      <Splitter.Panel defaultSize="50%" min="30%" max="70%">
        {props.iframe ? (
          <iframe
            style={
              ['string', 'number'].includes(typeof props.iframe)
                ? { height: Number(props.iframe) }
                : {}
            }
            src={props.demoUrl}></iframe>
        ) : (
          liveDemoNode || props.children
        )}
      </Splitter.Panel>
      <Splitter.Panel defaultSize="50%" min="30%" max="70%">
        <h1>123</h1>
      </Splitter.Panel>
    </Splitter>
  )
}
