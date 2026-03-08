import { Col, Row } from 'antd'
import { useIntl } from 'dumi'
import React from 'react'
import './index.less'

export default function Footer() {
  const intl = useIntl()
  const t = (id: string) => intl.formatMessage({ id })

  return (
    <footer id="footer" className="custom-footer">
      <div className="footer-wrap">
        <Row>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Ant Design</h2>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ant-design/ant-design-mobile-rn">
                  Ant Design Mobile RN GitHub
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ant-design/ant-design-mobile">
                  Ant Design Mobile GitHub
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://ant.design">
                  Ant Design
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://pro.ant.design">
                  Ant Design Pro
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/react-component">
                  React Component GitHub
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>{t('app.footer.links')}</h2>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://motion.ant.design">
                  Ant Motion
                </a>
                <span> - </span>
                {t('app.footer.motion')}
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://ux.ant.design">
                  Ant UX
                </a>
                <span> - </span>
                {t('app.footer.antux')}
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://library.ant.design/">
                  AntD Library
                </a>
                <span> - </span>
                {t('app.footer.antd-library')}
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>{t('app.footer.community')}</h2>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://gitter.im/ant-design/ant-design">
                  {t('app.footer.discuss')}
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="http://github.com/ant-design/ant-design-mobile/issues">
                  {t('app.footer.bug-report')}
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
                {t('app.footer.more-product')}
              </h2>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://ant.design">
                  Ant Design
                </a>
                <span> - </span>
                {t('app.footer.ant-design')}
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://antv.alipay.com/">
                  AntV
                </a>
                <span> - </span>
                {t('app.footer.data-vis')}
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://eggjs.org/">
                  Egg
                </a>
                <span> - </span>
                {t('app.footer.eggjs')}
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={24} sm={24}>
          <div className="bottom-bar-content">
            <span className="privacy-link">
              <a href="https://docs.alipay.com/policies/privacy/antfin" rel="noopener noreferrer" target="_blank">
                {t('app.footer.privacy')}
              </a>
            </span>
            <span className="commitment-link">
              <a href="https://render.alipay.com/p/f/fd-izto3cem/index.html" rel="noopener noreferrer" target="_blank">
                {t('app.footer.commitment')}
              </a>
            </span>
            <span className="icp-text">ICP 证浙 B2-2-100257</span>
            <span className="copyright-text">Copyright © {t('app.footer.company')}</span>
          </div>
        </Col>
      </Row>
    </footer>
  )
}
