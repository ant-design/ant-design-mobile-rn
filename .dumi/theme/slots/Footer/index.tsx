import { useIntl } from 'dumi'
import React from 'react'
import { Row, Col } from 'antd'

export default function Footer() {
  const intl = useIntl()
  const t = (id: string) => intl.formatMessage({ id })

  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Ant Design</h2>
              <div>
                <a
                  target="_blank "
                  rel="noopener noreferrer"
                  href="https://github.com/ant-design/ant-design-mobile-rn"
                >
                  Ant Design Mobile RN GitHub
                </a>
              </div>
              <div>
                <a
                  target="_blank "
                  rel="noopener noreferrer"
                  href="https://github.com/ant-design/ant-design-mobile"
                >
                  Ant Design Mobile GitHub
                </a>
              </div>
              <div>
                <a
                  target="_blank "
                  rel="noopener noreferrer"
                  href="https://ant.design"
                >
                  Ant Design
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://pro.ant.design"
                >
                  Ant Design Pro
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/react-component"
                >
                  React Component GitHub
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>{t('app.footer.links')}</h2>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://motion.ant.design"
                >
                  Ant Motion
                </a>
                <span> - </span>
                {t('app.footer.motion')}
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://ux.ant.design"
                >
                  Ant UX
                </a>
                <span> - </span>
                {t('app.footer.antux')}
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://library.ant.design/"
                >
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
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://gitter.im/ant-design/ant-design"
                >
                  {t('app.footer.discuss')}
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://github.com/ant-design/ant-design-mobile/issues"
                >
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
                <a
                  target="_blank "
                  rel="noopener noreferrer"
                  href="https://ant.design"
                >
                  Ant Design
                </a>
                <span> - </span>
                {t('app.footer.ant-design')}
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://antv.alipay.com/"
                >
                  AntV
                </a>
                <span> - </span>
                {t('app.footer.data-vis')}
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://eggjs.org/"
                >
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
        <Col lg={4} sm={24} />
        <Col lg={20} sm={24}>
          <span
            style={{
              lineHeight: '16px',
              paddingRight: 12,
              marginRight: 11,
              borderRight: '1px solid rgba(255, 255, 255, 0.55)',
            }}
          >
            <a
              href="https://docs.alipay.com/policies/privacy/antfin"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t('app.footer.privacy')}
            </a>
          </span>
          <span style={{ marginRight: 24 }}>
            <a
              href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t('app.footer.commitment')}
            </a>
          </span>
          <span style={{ marginRight: 12 }}>ICP 证浙 B2-2-100257</span>
          <span style={{ marginRight: 12 }}>
            Copyright © {t('app.footer.company')}
          </span>
        </Col>
      </Row>
    </footer>
  )
}
