import { CloseCircleOutlined } from '@ant-design/icons'
import classnames from 'classnames'
import { useLiveDemo, useLocation } from 'dumi'
import PreviewerActions from 'dumi/theme/slots/PreviewerActions'
import React, { useRef, type FC } from 'react'
import Copilot from '../Copilot'
import "./index.less"

const Previewer: FC<any> = (props) => {
  const demoContainer = useRef<HTMLDivElement>(null)
  const { hash } = useLocation()
  const link = `#${props.asset.id}`

  const {
    node: liveDemoNode,
    error: liveDemoError,
    loading: liveDemoLoading,
    setSource: setLiveDemoSource,
  } = useLiveDemo(props.asset.id, {
    iframe: Boolean(props.iframe || props._live_in_iframe),
    containerRef: demoContainer,
  })

  return (
      <div
        id={props.asset.id}
        className={classnames('dumi-default-previewer', props.className)}
        style={props.style}
        data-debug={props.debug}
        data-active={hash === link || undefined}>
        <div
          className="dumi-default-previewer-demo"
          style={{ background: props.background }}
          data-compact={props.compact || undefined}
          data-transform={props.transform || undefined}
          data-iframe={props.iframe || undefined}
          data-error={Boolean(liveDemoError) || undefined}
          data-loading={liveDemoLoading || undefined}
          ref={demoContainer}>
          {/* 🚩🚩🚩 自定义预览+AI对话框 🚩🚩🚩 */}
          <Copilot liveDemoNode={liveDemoNode} setLiveDemoSource={setLiveDemoSource} {...props} />
        </div>
        {liveDemoError && (
          <div className="dumi-default-previewer-demo-error">
            <CloseCircleOutlined style={{ paddingRight: 4 }} />
            {liveDemoError.toString()}
          </div>
        )}
        <div className="dumi-default-previewer-meta">
          {(props.title || props.debug) && (
            <div className="dumi-default-previewer-desc">
              <h5>
                <a href={link}>
                  {props.debug && <strong>DEV ONLY</strong>}
                  {props.title}
                </a>
              </h5>
              {props.description && (
                <div
                  className="markdown"
                  dangerouslySetInnerHTML={{ __html: props.description }}
                />
              )}
            </div>
          )}
          <PreviewerActions
            {...props}
            onSourceChange={setLiveDemoSource}
            demoContainer={
              props.iframe
                ? (demoContainer.current
                    ?.firstElementChild as HTMLIFrameElement)
                : demoContainer.current!
            }
          />
        </div>
      </div>
  )
}

export default Previewer
