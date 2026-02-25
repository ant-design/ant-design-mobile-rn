import { Col, Row } from 'antd'
import { useLocale } from 'dumi'
import React from 'react'
import './index.less'

const footerMessages: Record<string, Record<string, string>> = {
  'zh-CN': {
    links: '相关站点',
    motion: '设计动效',
    antux: '页面逻辑素材',
    antdLibrary: 'Axure library',
    community: '社区',
    discuss: '在线讨论',
    bugReport: '报告 Bug',
    moreProduct: '蚂蚁体验云',
    antDesign: '蚂蚁 UI 体系',
    dataVis: '数据可视化',
    eggjs: '企业级 Node 开发框架',
    privacy: '隐私权政策',
    commitment: '权益保障承诺书',
    company: '蚂蚁金融服务集团',
  },
  'en-US': {
    links: 'Links',
    motion: 'Motion Solution',
    antux: 'Sitemap Template',
    antdLibrary: 'Axure library',
    community: 'Community',
    discuss: 'Chat Room',
    bugReport: 'Bug Report',
    moreProduct: 'Ant AFX',
    antDesign: 'UI Design Language',
    dataVis: 'Data Visualization',
    eggjs: 'Enterprise Node Framework',
    privacy: 'Privacy Policy',
    commitment: 'Our Commitment to Customer Protection',
    company: 'Ant Financial',
  },
}

const Footer = () => {
  const locale = useLocale()
  const t = footerMessages[locale?.id || 'zh-CN'] || footerMessages['zh-CN']

  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Ant Design</h2>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ant-design/ant-design-mobile-rn">
                  Ant Design Mobile RN GitHub
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ant-design/ant-design-mobile">
                  Ant Design Mobile GitHub
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://ant.design">
                  Ant Design
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://pro.ant.design">
                  Ant Design Pro
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/react-component">
                  React Component GitHub
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>{t.links}</h2>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://motion.ant.design">
                  Ant Motion
                </a>
                <span> - </span>
                {t.motion}
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://ux.ant.design">
                  Ant UX
                </a>
                <span> - </span>
                {t.antux}
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://library.ant.design/">
                  AntD Library
                </a>
                <span> - </span>
                {t.antdLibrary}
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>{t.community}</h2>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://gitter.im/ant-design/ant-design">
                  {t.discuss}
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://github.com/ant-design/ant-design-mobile/issues">
                  {t.bugReport}
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>
                <img
                  className="title-icon"
                  src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
                  alt=""
                />
                {t.moreProduct}
              </h2>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://ant.design">
                  Ant Design
                </a>
                <span> - </span>
                {t.antDesign}
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://antv.alipay.com/">
                  AntV
                </a>
                <span> - </span>
                {t.dataVis}
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://eggjs.org/">
                  Egg
                </a>
                <span> - </span>
                {t.eggjs}
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={4} sm={24} />
        <Col lg={20} sm={24}>
          <span
            style={{
              lineHeight: '16px',
              paddingRight: 12,
              marginRight: 11,
              borderRight: '1px solid rgba(255, 255, 255, 0.55)',
            }}>
            <a
              href="https://docs.alipay.com/policies/privacy/antfin"
              rel="noopener noreferrer"
              target="_blank">
              {t.privacy}
            </a>
          </span>
          <span style={{ marginRight: 24 }}>
            <a
              href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
              rel="noopener noreferrer"
              target="_blank">
              {t.commitment}
            </a>
          </span>
          <span style={{ marginRight: 12 }}>ICP 证浙 B2-2-100257</span>
          <span style={{ marginRight: 12 }}>Copyright © {t.company}</span>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer
