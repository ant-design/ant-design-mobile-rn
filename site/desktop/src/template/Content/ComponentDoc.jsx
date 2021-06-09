import throttleByAnimationFrame from 'antd/lib/_util/throttleByAnimationFrame'
import classnames from 'classnames'
import { getChildren } from 'jsonml.js/lib/utils'
import PropTypes from 'prop-types'
import React from 'react'
import DocumentTitle from 'react-document-title'
import { FormattedMessage } from 'react-intl'
import Demo from './Demo'

function getDemos(props) {
  return Object.keys(props.demos)
    .map((key) => props.demos[key])
    .filter((demoData) => !demoData.meta.hidden)
}
export default class ComponentDoc extends React.Component {
  static contextTypes = {
    intl: PropTypes.object,
  }

  constructor(props) {
    super(props)

    this.state = {
      currentIndex: this.getIndex(props),
      inMultiDemoMode: getDemos(props).length >= 2,
      inFixedDemoMode: false,
    }
    this.handleScroll = throttleByAnimationFrame(this.doScroll)
  }

  getIndex(props) {
    const linkTo = props.location.hash.replace('#', '')

    const demos = Object.keys(props.demos)
      .map((key) => props.demos[key])
      .filter((demoData) => !demoData.meta.hidden)
    const demoSort = demos.sort(
      (a, b) => parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10),
    )

    demos.map((item, index) => {
      item.index = index
    })

    const targetDemo = demoSort.filter((item) => item.meta.id === linkTo)[0]
    const linkIndex = linkTo && targetDemo ? targetDemo.index : 0
    return linkIndex
  }

  componentWillReceiveProps = (nextProps) => {
    const inMultiDemoMode = getDemos(nextProps).length >= 2
    if (this.props.demos !== nextProps.demos) {
      this.setState({
        currentIndex: 0,
        inMultiDemoMode,
        inFixedDemoMode: false,
      })
    }
  }

  togglePreview = (e) => {
    this.setState({
      currentIndex: e.index,
    })
  }

  componentDidMount() {
    setTimeout(() => {
      const linkTo = this.props.location.hash.replace('#', '')
      if (linkTo) {
        document.getElementById(linkTo).scrollIntoView()
      }
    }, 500)
  }
  render() {
    const { props } = this
    const { doc, location } = props
    const { content, meta } = doc
    // TODO: 新版bisheng返回的数据结构变了，但要保留原来数据结构
    const demos = Object.keys(props.demos)
      .map((key) => ({
        ...props.demos[key],
        content: props.demos[key].content.filter(
          (a) => Array.isArray(a) && a[0] !== 'pre',
        ),
        highlightedCode: props.demos[key].content[2],
      }))
      .filter((demoData) => !demoData.meta.hidden)

    const leftChildren = []

    const { currentIndex } = this.state

    demos
      .sort((a, b) => a.meta.order - b.meta.order)
      .forEach((demoData, index) => {
        leftChildren.push(
          <Demo
            togglePreview={this.togglePreview}
            {...demoData}
            doc={doc}
            className={currentIndex === index ? 'code-box-target' : ''}
            key={index}
            index={index}
            currentIndex={currentIndex}
            utils={props.utils}
            pathname={location.pathname}
          />,
        )
      })

    // const { protocol } = window.location;
    // const path = doc.meta.filename.split('/')[1];
    // const isLocalMode = window.location.port;
    // const host = isLocalMode ? 'localhost:8002' : window.location.host;
    // const demoUrl = `${protocol}//${host}/kitchen-sink/components/${path}`;

    // const PopoverContent = (
    //   <div>
    //     <h4 style={{ margin: '8Px 0 12Px', textAlign: 'center' }}>
    //       <FormattedMessage id="app.ComponentDoc.codeQrcode" />
    //     </h4>
    //     <QRCode size={144} value={demoUrl} />
    //   </div>
    // );

    const { title, subtitle, chinese, english } = meta

    const codeContainerCls = classnames('clearfix demo-code-container', {
      'demo-code-container-mutli': this.state.inMultiDemoMode,
      'demo-code-container-fixed': this.state.inFixedDemoMode,
    })

    // TODO: 代码插入到 #API前面（保留原来样式）
    const codeIndex = content.findIndex((a) => String(a) === 'h2,API')

    return (
      <DocumentTitle
        title={`${subtitle || chinese || ''} ${title || english} - Ant Design`}>
        <article>
          <section className="markdown">
            <h1 className="section-title">
              {meta.title || meta.english} {meta.subtitle || meta.chinese}
              {/* <Popover content={PopoverContent} placement="bottom">
                <Icon type="qrcode" />
              </Popover> */}
            </h1>
            {props.utils.toReactComponent(
              ['section', { className: 'markdown' }].concat(
                getChildren(content.slice(0, codeIndex)),
              ),
            )}

            <section id="demoTitle" className="demo-title-wrapper">
              <h2 id="demoTitle" className="demo-title">
                <FormattedMessage id="app.ComponentDoc.codeTitle" />
              </h2>
            </section>
            <div id="demo-code" className={codeContainerCls}>
              <div style={{ width: '100%', float: 'left' }}>{leftChildren}</div>
            </div>

            {props.utils.toReactComponent(
              ['section', { className: 'markdown' }].concat(
                getChildren(
                  content.filter((a, i) => i === 0 || i >= codeIndex),
                ),
              ),
            )}
          </section>

          {props.utils.toReactComponent(
            [
              'section',
              {
                id: 'api',
                className: 'markdown api-container',
              },
            ].concat(getChildren(doc.api || ['placeholder'])),
          )}
        </article>
      </DocumentTitle>
    )
  }
}
