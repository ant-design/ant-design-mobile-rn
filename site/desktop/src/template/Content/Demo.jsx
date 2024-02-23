import { version as antdVersion } from '@ant-design/react-native/package.json'
import { Icon, Radio, Tooltip } from 'antd'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { FormattedMessage } from 'react-intl'
import { ping } from '../../../../utils'

export default class Demo extends React.Component {
  static contextTypes = {
    intl: PropTypes.object,
  }

  state = {
    fullscreen: false,
    lang: 'es6',
    copied: false,
    sourceCode: '',
    componentName: '',
    showRiddleButton: false,
  }

  saveAnchor = (anchor) => {
    this.anchor = anchor
  }

  componentDidMount() {
    const { meta } = this.props
    if (meta.id === window.location.hash.slice(1)) {
      this.anchor.click()
    }
    this.componentWillReceiveProps(this.props)

    this.pingTimer = ping((status) => {
      if (status !== 'timeout' && status !== 'error') {
        this.setState({
          showRiddleButton: true,
        })
      }
    })
  }

  handleClick = (e) => {
    const { togglePreview, index, currentIndex, meta } = this.props

    if (
      index !== currentIndex &&
      e.target.className !== 'collapse anticon anticon-circle-o-right' &&
      e.target.className !== 'fullscreen anticon anticon-arrow-salt'
    ) {
      togglePreview({
        index,
      })
    }

    window.location.hash = meta.id
  }

  viewFullscreen = (e) => {
    e.stopPropagation()
    this.setState({
      fullscreen: true,
    })
  }

  handleCancel = () => {
    this.setState({
      fullscreen: false,
    })
  }

  handleCodeCopied = () => {
    this.setState({ copied: true })
  }

  onCopyTooltipVisibleChange = (visible) => {
    if (visible) {
      this.setState({
        copyTooltipVisible: visible,
        copied: false,
      })
      return
    }
    this.setState({
      copyTooltipVisible: visible,
    })
  }

  handleProgrammingLangChange = (e) => {
    this.setState({ lang: e.target.value })
  }

  get src() {
    const { meta } = this.props
    const { locale } = this.context.intl
    const localizedTitle = meta.title[locale] || meta.title
    const componentName = this.state.componentName
    let dependencies =
      '@react-native-community/slider,' +
      '@react-native-community/segmented-control,' +
      'react-native-gesture-handler/DrawerLayout,' +
      'react-native-gesture-handler/Swipeable,' +
      `@ant-design/react-native@${antdVersion}`

    if (componentName === 'picker') {
      dependencies +=
        ',@bang88/china-city-data@1.0.0,' + 'antd-mobile-demo-data@0.2.0'
    }

    if (componentName === 'locale-provider') {
      dependencies +=
        `,@ant-design/react-native/lib/locale-provider/en_US@${antdVersion},` +
        `@ant-design/react-native/lib/locale-provider/es_ES@${antdVersion},` +
        `@ant-design/react-native/lib/locale-provider/pt_BR@${antdVersion},` +
        `@ant-design/react-native/lib/locale-provider/ru_RU@${antdVersion},` +
        `@ant-design/react-native/lib/locale-provider/fa_IR@${antdVersion},` +
        `@ant-design/react-native/lib/locale-provider/ko_KR@${antdVersion},` +
        `@ant-design/react-native/lib/locale-provider/sv_SE@${antdVersion},` +
        `@ant-design/react-native/lib/locale-provider/zh_CN@${antdVersion}`
    }

    if (componentName === 'picker') {
      dependencies += `,@ant-design/react-native/es/picker-view/PropsType@${antdVersion}`
    }

    if (componentName === 'date-picker-view') {
      dependencies += `,@ant-design/react-native/es/date-picker/date-picker-utils@${antdVersion}`
    }

    if (componentName === 'icon') {
      dependencies +=
        ',@ant-design/icons-react-native@2.3.1,' +
        '@ant-design/icons-react-native/lib/outline,' +
        '@ant-design/icons-react-native/fonts/antfill.ttf,' +
        '@ant-design/icons-react-native/fonts/antoutline.ttf,' +
        'expo-font@11.0.1'
    }

    return `https://snack.expo.dev/embedded?platform=web&name=${localizedTitle}&dependencies=${encodeURIComponent(
      dependencies,
    )}&sourceUrl=${`https://raw.githubusercontent.com/1uokun/ant-design-mobile-rn/feature-snack-doc/components/${this.state.componentName}/demo/basic.tsx`}&preview=true`
  }

  rendeSandbox = () => {
    return (
      <iframe
        title="example"
        src={this.src}
        style={{
          width: '100%',
          height: '700px',
          border: 0,
          borderRadius: '4px',
          overflow: 'hidden',
        }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
    )
  }
  /* eslint-disable react/jsx-indent */
  renderDemoCode = (highlightedCode, inModal) => {
    const { meta, style } = this.props
    const { lang, sourceCode } = this.state
    const { locale } = this.context.intl
    const localizedTitle = meta.title[locale] || meta.title
    const prefillStyle =
      `@import 'antd-mobile@2/dist/antd-mobile.min.css';\n\n${
        style || ''
      }`.replace(new RegExp(`#${meta.title['en-US']}\\s*`, 'g'), '')

    const riddlePrefillConfig = {
      title: `${localizedTitle} - Ant Design Mobile RN Demo`,
      js: sourceCode.replace(
        "from '../../'",
        "from '@ant-design/react-native'",
      ),
      css: prefillStyle.replace("'antd-mobile/", "'antd-mobile/"),
    }
    return Array.isArray(highlightedCode) ? (
      <div className="highlight">
        <div className="code-box-actions">
          {this.state.showRiddleButton ? (
            <form
              action="//riddle.alibaba-inc.com/riddles/define"
              method="POST"
              target="_blank">
              <input
                type="hidden"
                name="data"
                value={JSON.stringify(riddlePrefillConfig)}
              />
              <Tooltip title={<FormattedMessage id="app.demo.riddle" />}>
                <input
                  type="submit"
                  value="Create New Riddle with Prefilled Data"
                  className="code-box-riddle"
                />
              </Tooltip>
            </form>
          ) : null}
          <CopyToClipboard
            text={this.state.sourceCode}
            onCopy={this.handleCodeCopied}>
            <Tooltip
              title={
                <FormattedMessage
                  id={`app.demo.${this.state.copied ? 'copied' : 'copy'}`}
                />
              }
              visible={this.state.copyTooltipVisible}
              onVisibleChange={this.onCopyTooltipVisibleChange}>
              <span
                className="code-box-code-copy"
                onClick={(e) => e.stopPropagation()}>
                <Icon
                  type={
                    this.state.copied && this.state.copyTooltipVisible
                      ? 'check'
                      : 'copy'
                  }
                />
              </span>
            </Tooltip>
          </CopyToClipboard>
        </div>
        {this.props.utils.toReactComponent(highlightedCode)}
      </div>
    ) : (
      <div className="highlight">
        {inModal && (
          <Radio.Group value={lang} onChange={this.handleProgrammingLangChange}>
            <Radio.Button value="es6">ES2016</Radio.Button>
            <Radio.Button value="ts">TypeScript</Radio.Button>
          </Radio.Group>
        )}
        <pre className="language-jsx">
          <code dangerouslySetInnerHTML={{ __html: highlightedCode[lang] }} />
        </pre>
      </div>
    )
  }
  componentWillReceiveProps(nextProps) {
    const { highlightedCode } = nextProps
    const div = document.createElement('div')
    div.innerHTML = highlightedCode[1].highlighted

    this.setState({
      sourceCode: this.replaceLibName(div.textContent),
      componentName: nextProps.meta.filename.replace(
        /components\/(.+)\/demo\/basic.md/,
        '$1',
      ),
    })
  }
  replaceLibName = (code) => code.replace('../../', '@ant-design/react-native')
  render() {
    const { props, state } = this
    const {
      meta,
      content,
      highlightedCode,
      highlightedStyle,
      className,
      utils,
    } = props

    const codeBoxClass = classNames({
      'code-box': true,
      [className]: className,
    })

    const locale = this.context.intl.locale
    const localizedTitle = meta.title[locale] || meta.title
    const localizeIntro = content[locale] || content
    const introChildren = utils.toReactComponent(['div'].concat(localizeIntro))

    const hsNode = highlightedStyle ? (
      <div key="style" className="highlight">
        <pre>
          <code
            className="css"
            dangerouslySetInnerHTML={{
              __html: highlightedStyle,
            }}
          />
        </pre>
      </div>
    ) : null

    return (
      <section className={codeBoxClass} id={meta.id}>
        {this.rendeSandbox()}
      </section>
    )
  }
}
